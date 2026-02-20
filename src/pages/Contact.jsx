import { motion } from 'framer-motion';
import useScrollReveal from '../hooks/useScrollReveal';

export default function Contact() {
  const ref = useScrollReveal();

  return (
    <section className="page max-w-4xl mx-auto px-6 py-20 md:py-32">
      <div ref={ref} className="scroll-reveal text-center">
        <h2 className="text-4xl md:text-5xl font-light text-white mb-6 text-balance">
          Get in touch
        </h2>
        <p className="text-lg text-slate-400 leading-relaxed max-w-2xl mx-auto mb-12">
          {"I'm not using this site to sell anything, but if you want to say hi, compare notes on automation, or send me a cool project idea, I'd love to hear from you."}
        </p>

        <motion.a
          href="mailto:hello@aronbrown.com"
          className="btn-glow inline-flex items-center gap-3 px-8 py-4 rounded-full bg-sky-500 text-white font-bold text-lg hover:bg-sky-400 transition-all shadow-lg shadow-sky-500/25"
          whileHover={{ scale: 1.08, rotate: [0, -2, 2, -1, 0] }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: 'spring', stiffness: 300, damping: 15 }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
            <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
            <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
          </svg>
          hello@aronbrown.com
        </motion.a>
      </div>
    </section>
  );
}
