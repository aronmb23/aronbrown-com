import { Link } from 'react-router-dom';

const challenges = [
  { to: '/rpa/dynamic-form', num: 1, title: 'The Shapeshifter', desc: "Dynamic selectors. Every time you reload, the IDs and classes change. Can your bot find the right fields?" },
  { to: '/rpa/invoice-table', num: 2, title: 'The Data Mine', desc: 'Table extraction. Pagination, messy data formats, and status badges. Scrape it, clean it, export it.' },
  { to: '/rpa/wait-test', num: 3, title: 'The Patience Test', desc: "Synchronization. Elements that load late, popups that appear randomly. Hardcoded delays won't save you here." },
  { to: '/rpa/shadow-dom', num: 4, title: 'The Shadow Realm', desc: 'Shadow DOM. Elements hidden inside encapsulation boundaries. Standard selectors might not see them.' },
  { to: '/rpa/popup-minefield', num: 5, title: 'The Pop-up Minefield', desc: 'Exception handling. Random modals block your path. Handle the interruptions to submit the form.' },
  { to: '/rpa/iframe-inception', num: 6, title: 'The Iframe Inception', desc: 'Nested contexts. Data hidden inside iframes within iframes. Switch focus to find the secrets.' },
  { to: '/rpa/drag-drop', num: 7, title: 'The Drag & Drop Sort', desc: 'Complex interactions. Simulate mouse events to drag items to the correct column.' },
  { to: '/rpa/2fa-sprint', num: 8, title: 'The 2FA Sprint', desc: 'Time sensitivity. Read the code from the phone and enter it before it expires.' },
  { to: '/rpa/retro-erp', num: 9, title: 'The Legacy ERP', desc: 'A blast from the past. Enter data into this Windows 95-style accounting software.', special: true },
];

export default function RPADashboard() {
  return (
    <section className="page max-w-6xl mx-auto px-6 py-20 md:py-32 animate-fade-in-up">
      <div className="max-w-2xl">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">RPA Playground</h2>
        <p className="text-lg text-slate-300 leading-relaxed mb-12">
          A sandbox for testing and demonstrating Robotic Process Automation capabilities.
          These challenges are designed to mimic common (and annoying) real-world scenarios.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {challenges.map((c) => (
          <div key={c.num} className="group relative rounded-2xl border border-slate-800 bg-slate-900/50 p-6 hover:bg-slate-900 hover:border-sky-500/30 transition-all duration-300">
            {c.special && (
              <div className="absolute -inset-px rounded-2xl bg-gradient-to-r from-sky-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
            )}
            <div className="relative">
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-sky-400 transition-colors">
                {c.num}. {c.title}
              </h3>
              <p className="text-slate-400 mb-4">{c.desc}</p>
              <Link
                to={c.to}
                className="inline-block px-4 py-2 rounded-lg bg-slate-800 text-slate-300 hover:bg-sky-500 hover:text-white transition-colors"
              >
                Start Challenge
              </Link>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 text-center">
        <Link to="/" className="text-slate-500 hover:text-slate-300">
          &larr; Back to Home
        </Link>
      </div>
    </section>
  );
}
