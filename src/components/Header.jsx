import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Logos, logoKeys } from './Logos.jsx';
import { useAuth } from '../utils/AuthContext.jsx';
import MagneticWrapper from './MagneticWrapper.jsx';

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/work', label: 'Work' },
  { to: '/projects', label: 'Projects' },
  { to: '/rpa', label: 'RPA Playground' },
  { to: '/contact', label: 'Contact' },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [logoIndex, setLogoIndex] = useState(0);
  const location = useLocation();
  const { user, loading } = useAuth();

  useEffect(() => {
    const interval = setInterval(() => {
      setLogoIndex((prev) => (prev + 1) % logoKeys.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  const currentLogo = Logos[logoKeys[logoIndex]];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-slate-800 bg-slate-950/80 backdrop-blur-md transition-all duration-300">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link to="/" className="flex items-center gap-3 group">
          <motion.div
            className="relative h-10 w-10 overflow-hidden rounded-full border border-slate-700 bg-slate-800 transition-transform duration-300 group-hover:border-sky-500/50 flex items-center justify-center"
            whileHover={{ scale: 1.1, rotate: 5 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="h-6 w-6 text-slate-200">
              <img src={currentLogo.src} alt={currentLogo.alt} className="w-full h-full object-contain" />
            </div>
          </motion.div>
          <div>
            <div className="text-sm font-bold tracking-wide uppercase text-sky-400 transition-colors group-hover:text-sky-300">
              Aron Brown
            </div>
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden gap-1 text-sm font-medium md:flex items-center">
          {navItems.map((item) => {
            const isActive = location.pathname === item.to ||
              (item.to !== '/' && location.pathname.startsWith(item.to));
            return (
              <MagneticWrapper key={item.to} strength={0.2}>
                <Link
                  to={item.to}
                  className={`px-4 py-2 rounded-full transition-all duration-200 block ${
                    isActive
                      ? 'text-white bg-slate-800/50'
                      : 'text-slate-300 hover:text-white hover:bg-slate-800/50'
                  }`}
                >
                  {item.label}
                </Link>
              </MagneticWrapper>
            );
          })}
          {!loading && (
            <MagneticWrapper strength={0.2}>
              <Link
                to={user ? '/dashboard' : '/login'}
                className={`ml-2 px-4 py-2 rounded-full transition-all duration-200 block ${
                  location.pathname === '/login' || location.pathname === '/dashboard'
                    ? 'text-white bg-gradient-to-r from-sky-500 to-indigo-500'
                    : 'text-slate-300 border border-slate-700 hover:text-white hover:border-sky-500/50'
                }`}
              >
                {user ? 'Dashboard' : 'Sign In'}
              </Link>
            </MagneticWrapper>
          )}
        </div>

        {/* Mobile Menu Button */}
        <motion.button
          className="md:hidden text-slate-300 hover:text-white p-2"
          aria-label="Toggle menu"
          onClick={() => setMobileOpen(true)}
          whileTap={{ scale: 0.9 }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </motion.button>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-40 bg-slate-950/95 backdrop-blur-xl md:hidden flex flex-col justify-center items-center gap-8"
          >
            <button
              className="absolute top-6 right-6 text-slate-400 hover:text-white"
              onClick={() => setMobileOpen(false)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-8 h-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {navItems.map((item, i) => (
              <motion.div
                key={item.to}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 + 0.1 }}
              >
                <Link
                  to={item.to}
                  className="text-2xl font-medium text-slate-300 hover:text-sky-400 transition-colors"
                >
                  {item.label}
                </Link>
              </motion.div>
            ))}
            {!loading && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navItems.length * 0.05 + 0.1 }}
              >
                <Link
                  to={user ? '/dashboard' : '/login'}
                  className="mt-4 px-6 py-3 rounded-full text-lg font-medium bg-gradient-to-r from-sky-500 to-indigo-500 text-white transition-all hover:from-sky-400 hover:to-indigo-400 inline-block"
                >
                  {user ? 'Dashboard' : 'Sign In'}
                </Link>
              </motion.div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
