import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <section className="page max-w-6xl mx-auto px-6 py-20 md:py-32 animate-fade-in-up">
      <div className="grid gap-16 md:grid-cols-[1.5fr_1fr] md:items-center">
        <div className="relative z-10">
          <h1 className="text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl text-white leading-[1.1]">
            I build solutions that make work{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-indigo-400 to-sky-400 animate-shimmer bg-[length:200%_auto] pr-2">
              flow.
            </span>
          </h1>

          <p className="mt-6 text-lg text-slate-400 leading-relaxed max-w-xl">
            I'm Aron, a builder who lives somewhere between automation, data, AI, Apps
            and creative problem solving. I turn messy, manual processes
            into calm, reliable solutions.
          </p>

          <div className="mt-10 flex gap-4">
            <Link
              to="/work"
              className="px-6 py-3 rounded-lg bg-sky-500 text-white font-medium hover:bg-sky-400 transition-colors shadow-lg shadow-sky-500/20"
            >
              See what I do
            </Link>
            <Link
              to="/contact"
              className="px-6 py-3 rounded-lg border border-slate-700 text-slate-300 font-medium hover:bg-slate-800 transition-colors"
            >
              Get in touch
            </Link>
          </div>
        </div>

        <div className="relative flex justify-center md:justify-end">
          <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob" />
          <div className="absolute top-0 -right-4 w-72 h-72 bg-sky-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-200" />
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-400" />

          <div className="relative z-10 group perspective-1000">
            <div className="relative overflow-hidden rounded-[2rem] border border-slate-700 bg-slate-900/50 p-4 shadow-2xl backdrop-blur-sm transition-transform duration-500 group-hover:rotate-y-6 group-hover:rotate-x-6">
              <div className="rounded-[1.5rem] overflow-hidden bg-slate-800 relative group/image">
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
                  Automation &amp; Data
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
