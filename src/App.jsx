import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import SpotifyWidget from './components/SpotifyWidget.jsx';

export default function App() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-sky-500/30 selection:text-sky-200">
      <Header />

      <main className="flex-1 pt-16 relative overflow-hidden">
        <div className="fixed inset-0 z-0 pointer-events-none">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-purple-500/10 blur-[100px] animate-blob" />
          <div className="absolute top-[20%] right-[-10%] w-[30%] h-[30%] rounded-full bg-sky-500/10 blur-[100px] animate-blob animation-delay-2000" />
          <div className="absolute bottom-[-10%] left-[20%] w-[35%] h-[35%] rounded-full bg-indigo-500/10 blur-[100px] animate-blob animation-delay-4000" />
        </div>

        <div className="relative z-10">
          <SpotifyWidget />
          <Outlet />
        </div>
      </main>

      <Footer />
    </div>
  );
}
