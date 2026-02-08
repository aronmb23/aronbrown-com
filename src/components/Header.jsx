import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Logos, logoKeys } from './Logos.jsx';

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
          <div className="relative h-10 w-10 overflow-hidden rounded-full border border-slate-700 bg-slate-800 transition-transform duration-300 group-hover:scale-105 group-hover:border-sky-500/50 flex items-center justify-center">
            <div className="h-6 w-6 text-slate-200">
              <img src={currentLogo.src} alt={currentLogo.alt} className="w-full h-full object-contain" />
            </div>
          </div>
          <div>
            <div className="text-sm font-bold tracking-wide uppercase text-sky-400 transition-colors group-hover:text-sky-300">
              Aron Brown
            </div>
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden gap-1 text-sm font-medium md:flex">
          {navItems.map((item) => {
            const isActive = location.pathname === item.to ||
              (item.to !== '/' && location.pathname.startsWith(item.to));
            return (
              <Link
                key={item.to}
                to={item.to}
                className={`px-4 py-2 rounded-full transition-all duration-200 ${
                  isActive
                    ? 'text-white bg-slate-800/50'
                    : 'text-slate-300 hover:text-white hover:bg-slate-800/50'
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-slate-300 hover:text-white p-2"
          aria-label="Toggle menu"
          onClick={() => setMobileOpen(true)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-slate-950/95 backdrop-blur-xl transition-transform duration-300 md:hidden flex flex-col justify-center items-center gap-8 ${
          mobileOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <button
          className="absolute top-6 right-6 text-slate-400 hover:text-white"
          onClick={() => setMobileOpen(false)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-8 h-8">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {navItems.map((item) => (
          <Link
            key={item.to}
            to={item.to}
            className="text-2xl font-medium text-slate-300 hover:text-sky-400 transition-colors"
          >
            {item.label}
          </Link>
        ))}
      </div>
    </header>
  );
}
