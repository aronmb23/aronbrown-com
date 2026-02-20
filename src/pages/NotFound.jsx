import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const letters = ['4', '0', '4'];

export default function NotFound() {
  return (
    <section className="page min-h-[70vh] flex flex-col items-center justify-center px-6 py-20">
      <div className="flex gap-4 md:gap-8 mb-8 select-none">
        {letters.map((char, i) => (
          <motion.span
            key={i}
            className="text-8xl md:text-[12rem] font-bold text-transparent bg-clip-text bg-gradient-to-br from-sky-400 to-indigo-500 cursor-grab active:cursor-grabbing"
            drag
            dragConstraints={{ left: -100, right: 100, top: -60, bottom: 60 }}
            dragElastic={0.3}
            whileHover={{ scale: 1.1, rotate: i === 1 ? -5 : 5 }}
            whileTap={{ scale: 0.9 }}
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 + 0.1, type: 'spring', stiffness: 200, damping: 15 }}
          >
            {char}
          </motion.span>
        ))}
      </div>

      <motion.p
        className="text-xl md:text-2xl text-slate-400 text-center mb-2 text-balance"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        This page wandered off on a side quest.
      </motion.p>

      <motion.p
        className="text-sm text-slate-600 text-center mb-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7 }}
      >
        (Try dragging those numbers around.)
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Link
          to="/"
          className="btn-glow px-8 py-4 rounded-full bg-sky-500 text-white font-bold text-lg hover:bg-sky-400 transition-colors shadow-lg shadow-sky-500/25 inline-block"
        >
          Take me home
        </Link>
      </motion.div>
    </section>
  );
}
