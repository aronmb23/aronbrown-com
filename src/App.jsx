import { useEffect, useCallback, useRef } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import SpotifyWidget from './components/SpotifyWidget.jsx';
import CustomCursor from './components/CustomCursor.jsx';
import PageTransition from './components/PageTransition.jsx';
import useKonamiCode from './hooks/useKonamiCode.js';

function ConfettiBurst() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const colors = ['#38bdf8', '#818cf8', '#a78bfa', '#f472b6', '#34d399', '#fbbf24'];
    const particles = Array.from({ length: 150 }, () => ({
      x: window.innerWidth / 2,
      y: window.innerHeight / 2,
      vx: (Math.random() - 0.5) * 20,
      vy: (Math.random() - 1) * 18,
      color: colors[Math.floor(Math.random() * colors.length)],
      size: Math.random() * 6 + 3,
      rotation: Math.random() * 360,
      rotSpeed: (Math.random() - 0.5) * 10,
      alpha: 1,
    }));

    let frame;
    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      let alive = false;
      for (const p of particles) {
        p.vy += 0.3;
        p.vx *= 0.99;
        p.x += p.vx;
        p.y += p.vy;
        p.rotation += p.rotSpeed;
        p.alpha -= 0.008;
        if (p.alpha <= 0) continue;
        alive = true;
        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate((p.rotation * Math.PI) / 180);
        ctx.globalAlpha = p.alpha;
        ctx.fillStyle = p.color;
        ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size * 0.6);
        ctx.restore();
      }
      if (alive) frame = requestAnimationFrame(animate);
    }
    animate();
    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-[10001] pointer-events-none"
      aria-hidden="true"
    />
  );
}

export default function App() {
  const location = useLocation();
  const konamiActivated = useKonamiCode();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="grain-overlay min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-sky-500/30 selection:text-sky-200">
      <CustomCursor />
      {konamiActivated && <ConfettiBurst />}

      {/* Konami CRT effect */}
      {konamiActivated && (
        <div className="fixed inset-0 z-[10000] pointer-events-none konami-crt" aria-hidden="true" />
      )}

      <Header />

      <main className="flex-1 pt-16 relative overflow-hidden">
        <div className="fixed inset-0 z-0 pointer-events-none">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-purple-500/10 blur-[100px] animate-blob" />
          <div className="absolute top-[20%] right-[-10%] w-[30%] h-[30%] rounded-full bg-sky-500/10 blur-[100px] animate-blob animation-delay-2000" />
          <div className="absolute bottom-[-10%] left-[20%] w-[35%] h-[35%] rounded-full bg-indigo-500/10 blur-[100px] animate-blob animation-delay-4000" />
        </div>

        <div className="relative z-10">
          <SpotifyWidget />
          <AnimatePresence mode="wait">
            <PageTransition locationKey={location.pathname}>
              <Outlet />
            </PageTransition>
          </AnimatePresence>
        </div>
      </main>

      <Footer />

      {/* Konami toast */}
      {konamiActivated && (
        <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-[10002] animate-fade-in-up">
          <div className="px-6 py-3 rounded-full bg-sky-500/90 text-white font-medium text-sm backdrop-blur-sm shadow-lg shadow-sky-500/25 border border-sky-400/50">
            You found a secret!
          </div>
        </div>
      )}
    </div>
  );
}
