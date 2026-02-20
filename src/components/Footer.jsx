import { useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const footerMessages = [
  'Built for fun.',
  'Built with too much coffee.',
  'Built at 2am.',
  'Built because I can.',
  'Built instead of sleeping.',
];

export default function Footer() {
  const [msgIndex, setMsgIndex] = useState(0);

  const handleClick = useCallback(() => {
    setMsgIndex((prev) => (prev + 1) % footerMessages.length);
  }, []);

  return (
    <footer className="border-t border-slate-800 py-8 text-center relative z-20 bg-slate-950/50 backdrop-blur-sm">
      <button
        onClick={handleClick}
        className="text-xs text-slate-500 hover:text-slate-400 transition-colors cursor-pointer select-none"
        aria-label="Click for a surprise"
      >
        <AnimatePresence mode="wait">
          <motion.span
            key={msgIndex}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="inline-block"
          >
            {'\u00A9'} {new Date().getFullYear()} Aron Brown. {footerMessages[msgIndex]}
          </motion.span>
        </AnimatePresence>
      </button>
      <div className="mt-4 flex justify-center gap-4">
        <Link
          to="/rpa"
          className="text-slate-700 hover:text-slate-500 transition-colors text-xs"
        >
          RPA Playground
        </Link>
      </div>
    </footer>
  );
}
