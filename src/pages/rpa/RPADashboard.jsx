import { Link } from 'react-router-dom';

const challenges = [
  { to: '/rpa/dynamic-form', num: 1, title: 'The Shapeshifter', desc: "Dynamic selectors. Every time you reload, the IDs and classes change. Can your bot find the right fields?", icon: '\u{1F3AD}', difficulty: 'Easy', color: 'from-emerald-500 to-green-500' },
  { to: '/rpa/invoice-table', num: 2, title: 'The Data Mine', desc: 'Table extraction. Pagination, messy data formats, and status badges. Scrape it, clean it, export it.', icon: '\u{26CF}\uFE0F', difficulty: 'Medium', color: 'from-yellow-500 to-amber-500' },
  { to: '/rpa/wait-test', num: 3, title: 'The Patience Test', desc: "Synchronization. Elements that load late, popups that appear randomly. Hardcoded delays won't save you here.", icon: '\u{23F3}', difficulty: 'Medium', color: 'from-yellow-500 to-amber-500' },
  { to: '/rpa/shadow-dom', num: 4, title: 'The Shadow Realm', desc: 'Shadow DOM. Elements hidden inside encapsulation boundaries. Standard selectors might not see them.', icon: '\u{1F47B}', difficulty: 'Hard', color: 'from-red-500 to-rose-500' },
  { to: '/rpa/popup-minefield', num: 5, title: 'The Pop-up Minefield', desc: 'Exception handling. Random modals block your path. Handle the interruptions to submit the form.', icon: '\u{1F4A3}', difficulty: 'Hard', color: 'from-red-500 to-rose-500' },
  { to: '/rpa/iframe-inception', num: 6, title: 'The Iframe Inception', desc: 'Nested contexts. Data hidden inside iframes within iframes. Switch focus to find the secrets.', icon: '\u{1F30A}', difficulty: 'Hard', color: 'from-red-500 to-rose-500' },
  { to: '/rpa/drag-drop', num: 7, title: 'The Drag & Drop Sort', desc: 'Complex interactions. Simulate mouse events to drag items to the correct column.', icon: '\u{1F9E9}', difficulty: 'Medium', color: 'from-yellow-500 to-amber-500' },
  { to: '/rpa/2fa-sprint', num: 8, title: 'The 2FA Sprint', desc: 'Time sensitivity. Read the code from the phone and enter it before it expires.', icon: '\u{1F510}', difficulty: 'Hard', color: 'from-red-500 to-rose-500' },
  { to: '/rpa/retro-erp', num: 9, title: 'The Legacy ERP', desc: 'A blast from the past. Enter data into this Windows 95-style accounting software.', icon: '\u{1F4BE}', difficulty: 'Medium', color: 'from-yellow-500 to-amber-500', special: true },
];

const difficultyColors = {
  Easy: 'text-emerald-400 border-emerald-500/30 bg-emerald-500/10',
  Medium: 'text-yellow-400 border-yellow-500/30 bg-yellow-500/10',
  Hard: 'text-red-400 border-red-500/30 bg-red-500/10',
};

export default function RPADashboard() {
  return (
    <section className="page max-w-6xl mx-auto px-6 py-20 md:py-32">
      <div className="max-w-2xl animate-fade-in-up">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-sky-500/20 bg-sky-500/5 text-sky-400 text-xs font-bold uppercase tracking-wider mb-4">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-sky-500" />
          </span>
          9 Challenges
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">RPA Playground</h2>
        <div className="h-1 w-16 bg-gradient-to-r from-sky-400 to-indigo-500 rounded-full mb-6" />
        <p className="text-lg text-slate-300 leading-relaxed mb-12">
          A sandbox for testing and demonstrating Robotic Process Automation capabilities.
          These challenges are designed to mimic common (and annoying) real-world scenarios.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 stagger-children">
        {challenges.map((c) => (
          <div
            key={c.num}
            className="card-glow group relative rounded-2xl border border-slate-800 bg-slate-900/50 p-6 hover:bg-slate-900/80 transition-all duration-500 hover:-translate-y-1 hover:shadow-xl hover:shadow-sky-500/5"
          >
            {c.special && (
              <div className="absolute -inset-px rounded-2xl bg-gradient-to-r from-sky-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
            )}
            <div className="relative flex gap-4">
              {/* Icon */}
              <div className={`shrink-0 h-12 w-12 rounded-xl bg-gradient-to-br ${c.color} flex items-center justify-center text-xl shadow-lg opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300`}>
                {c.icon}
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="text-lg font-bold text-white group-hover:text-sky-400 transition-colors truncate">
                    {c.num}. {c.title}
                  </h3>
                  <span className={`shrink-0 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider rounded-full border ${difficultyColors[c.difficulty]}`}>
                    {c.difficulty}
                  </span>
                </div>
                <p className="text-slate-400 text-sm mb-4 leading-relaxed">{c.desc}</p>
                <Link
                  to={c.to}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-800 text-slate-300 text-sm font-medium hover:bg-sky-500 hover:text-white transition-all duration-300 group-hover:shadow-lg"
                >
                  Start Challenge
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform">
                    <path fillRule="evenodd" d="M2 8a.75.75 0 01.75-.75h8.69L8.22 4.03a.75.75 0 011.06-1.06l4.5 4.5a.75.75 0 010 1.06l-4.5 4.5a.75.75 0 01-1.06-1.06l3.22-3.22H2.75A.75.75 0 012 8z" clipRule="evenodd" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 text-center animate-fade-in-up">
        <Link to="/" className="text-slate-500 hover:text-slate-300 transition-colors">
          &larr; Back to Home
        </Link>
      </div>
    </section>
  );
}
