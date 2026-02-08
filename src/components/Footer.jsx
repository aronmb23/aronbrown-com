import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="border-t border-slate-800/50 py-10 text-center relative z-20 bg-slate-950/50 backdrop-blur-sm">
      {/* Gradient accent line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-px bg-gradient-to-r from-transparent via-sky-500/50 to-transparent" />

      <div className="text-xs text-slate-500">
        &copy; {new Date().getFullYear()} Aron Brown. Built for fun.
      </div>
      <div className="mt-4 flex justify-center gap-6">
        <Link
          to="/rpa"
          className="text-slate-600 hover:text-sky-400 transition-colors text-xs link-underline"
        >
          RPA Playground
        </Link>
        <Link
          to="/contact"
          className="text-slate-600 hover:text-sky-400 transition-colors text-xs link-underline"
        >
          Contact
        </Link>
      </div>
    </footer>
  );
}
