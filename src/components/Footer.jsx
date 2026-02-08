import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="border-t border-slate-800 py-8 text-center relative z-20 bg-slate-950/50 backdrop-blur-sm">
      <div className="text-xs text-slate-500">
        &copy; {new Date().getFullYear()} Aron Brown. Built for fun.
      </div>
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
