import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <section className="page max-w-6xl mx-auto px-6 py-20 md:py-32">
      <div className="grid gap-16 md:grid-cols-[1.5fr_1fr] md:items-center">
        <div className="relative z-10">
          {/* Floating badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-sky-500/20 bg-sky-500/5 text-sky-400 text-sm font-medium mb-6 animate-fade-in-up backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-sky-500" />
            </span>
            Available for projects
          </div>

          <h1 className="text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl text-white leading-[1.1] animate-fade-in-up">
            I build solutions that make work{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-indigo-400 to-sky-400 animate-shimmer bg-[length:200%_auto] pr-2">
              flow.
            </span>
          </h1>

          <p className="mt-6 text-lg text-slate-400 leading-relaxed max-w-xl animate-fade-in-up animation-delay-200">
            I'm Aron, a builder who lives somewhere between automation, data, AI, Apps
            and creative problem solving. I turn messy, manual processes
            into calm, reliable solutions.
          </p>

          <div className="mt-10 flex gap-4 animate-fade-in-up animation-delay-400">
            <Link
              to="/work"
              className="group relative px-6 py-3 rounded-lg bg-sky-500 text-white font-medium hover:bg-sky-400 transition-all duration-300 shadow-lg shadow-sky-500/20 hover:shadow-sky-500/40 hover:scale-105"
            >
              <span className="relative z-10">See what I do</span>
              <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-sky-400 to-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Link>
            <Link
              to="/contact"
              className="px-6 py-3 rounded-lg border border-slate-700 text-slate-300 font-medium hover:bg-slate-800 hover:border-slate-600 hover:text-white transition-all duration-300"
            >
              Get in touch
            </Link>
          </div>

          {/* Tech stack pills */}
          <div className="mt-12 flex flex-wrap gap-2 animate-fade-in-up animation-delay-600">
            {['Power Platform', 'Power BI', 'Azure', 'RPA', 'AI'].map((tech) => (
              <span key={tech} className="px-3 py-1 text-xs font-medium text-slate-500 border border-slate-800 rounded-full hover:border-sky-500/30 hover:text-sky-400 transition-colors cursor-default">
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="relative flex justify-center md:justify-end animate-fade-in-up animation-delay-400">
          <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob" />
          <div className="absolute top-0 -right-4 w-72 h-72 bg-sky-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-200" />
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-400" />

          <div className="relative z-10 group perspective-1000">
            <div className="relative overflow-hidden rounded-[2rem] border border-slate-700 bg-slate-900/50 p-4 shadow-2xl backdrop-blur-sm transition-all duration-500 group-hover:shadow-sky-500/10 group-hover:border-sky-500/30">
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
