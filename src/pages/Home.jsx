import { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import InteractiveHero from '../components/InteractiveHero';

const taglines = [
  'I build things that probably didn\'t need to exist.',
  'Automate first, ask questions later.',
  'I make computers do my job so I can do side quests.',
  'Somewhere between automation and a rabbit hole.',
  'I turned a spreadsheet into a career.',
];

const pokeMessages = [
  'Stop poking me.',
  'Seriously, stop.',
  'Fine, you found a secret.',
  'Go check out /rpa already.',
  '...okay I respect the persistence.',
];

export default function Home() {
  const [taglineIndex, setTaglineIndex] = useState(0);
  const [pokeCount, setPokeCount] = useState(0);
  const [pokeMessage, setPokeMessage] = useState(null);
  const [photoSpinning, setPhotoSpinning] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setTaglineIndex((prev) => (prev + 1) % taglines.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const handlePhotoPoke = useCallback(() => {
    const next = pokeCount + 1;
    setPokeCount(next);
    if (next >= 3) {
      const msgIndex = Math.min(Math.floor((next - 3) / 2), pokeMessages.length - 1);
      setPokeMessage(pokeMessages[msgIndex]);
      setPhotoSpinning(true);
      setTimeout(() => setPhotoSpinning(false), 800);
      setTimeout(() => setPokeMessage(null), 3000);
    }
  }, [pokeCount]);

  return (
    <section className="page max-w-6xl mx-auto px-6 py-20 md:py-32 relative">
      <div className="absolute inset-0 -top-16 overflow-hidden pointer-events-none">
        <div className="pointer-events-auto absolute inset-0">
          <InteractiveHero />
        </div>
      </div>

      <div className="grid gap-16 md:grid-cols-[1.5fr_1fr] md:items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <h1 className="text-5xl font-light tracking-tight sm:text-6xl lg:text-7xl text-white leading-[1.1] text-balance">
            I build solutions that make work{' '}
            <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-indigo-400 to-sky-400 animate-shimmer bg-[length:200%_auto] pr-2">
              flow.
            </span>
          </h1>

          {/* rotating tagline */}
          <div className="mt-4 h-8 relative overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.p
                key={taglineIndex}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.35, ease: 'easeOut' }}
                className="text-sm font-medium text-sky-400/70 tracking-wide"
              >
                {taglines[taglineIndex]}
              </motion.p>
            </AnimatePresence>
          </div>

          <p className="mt-4 text-lg text-slate-400 leading-relaxed max-w-xl">
            {"I'm Aron, a builder who lives somewhere between automation, data, AI, Apps and creative problem solving. I turn messy, manual processes into calm, reliable solutions."}
          </p>

          <div className="mt-10 flex gap-4">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                to="/work"
                className="btn-glow inline-block px-6 py-3 rounded-lg bg-sky-500 text-white font-medium hover:bg-sky-400 transition-colors shadow-lg shadow-sky-500/25"
              >
                See what I do
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                to="/contact"
                className="inline-block px-6 py-3 rounded-lg border border-slate-700 text-slate-300 font-medium hover:bg-slate-800 hover:border-slate-600 transition-colors"
              >
                Get in touch
              </Link>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          className="relative flex justify-center md:justify-end"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* mesh gradient blobs */}
          <div className="absolute -inset-8 z-0">
            <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob" />
            <div className="absolute top-0 -right-4 w-72 h-72 bg-sky-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-200" />
            <div className="absolute -bottom-8 left-20 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-400" />
          </div>

          <div className="relative z-10 group">
            <motion.div
              className="gradient-border relative overflow-hidden bg-slate-900/50 p-4 shadow-2xl backdrop-blur-sm cursor-pointer select-none"
              onClick={handlePhotoPoke}
              animate={{ rotate: photoSpinning ? 360 : 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="rounded-xl overflow-hidden bg-slate-800 relative group/image">
                <div className="absolute inset-0 bg-gradient-to-tr from-sky-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-30 pointer-events-none" />
                <img
                  src="/Profile.webp"
                  alt="Aron Brown"
                  className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-105 relative z-10"
                />
                <img
                  src="/Aron%20Crossed%20Arms.webp"
                  alt="Aron Brown Crossed Arms"
                  className="absolute inset-0 w-full h-full object-cover transform transition-all duration-700 group-hover:scale-105 z-20 opacity-0 group-hover/image:opacity-100"
                />
              </div>

              <div className="mt-5 px-2 pb-2">
                <div className="text-lg font-bold text-slate-50">Aron Brown</div>
                <div className="mt-1 text-sm text-slate-400 flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 text-sky-400">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm.75-11.25a.75.75 0 00-1.5 0v2.5h-2.5a.75.75 0 000 1.5h2.5v2.5a.75.75 0 001.5 0v-2.5h2.5a.75.75 0 000-1.5h-2.5v-2.5z" clipRule="evenodd" />
                  </svg>
                  {'Automation & Data'}
                </div>
              </div>
            </motion.div>

            {/* Poke message */}
            <AnimatePresence>
              {pokeMessage && (
                <motion.div
                  initial={{ opacity: 0, y: 8, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -8, scale: 0.9 }}
                  className="absolute -bottom-12 left-1/2 -translate-x-1/2 whitespace-nowrap text-sm font-medium text-sky-400 bg-slate-900/90 border border-slate-700 px-4 py-2 rounded-full backdrop-blur-sm"
                >
                  {pokeMessage}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
