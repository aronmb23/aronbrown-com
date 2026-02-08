import { useAuth } from '../utils/AuthContext.jsx';

export default function Dashboard() {
  const { user, logout } = useAuth();

  return (
    <section className="page max-w-4xl mx-auto px-6 py-20 md:py-32 animate-fade-in-up">
      <div className="flex items-center justify-between mb-10">
        <div>
          <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-sky-400 to-indigo-400 bg-clip-text text-transparent">
            Dashboard
          </h1>
          <p className="mt-2 text-slate-400 text-sm">
            Welcome back, <span className="text-slate-200">{user}</span>
          </p>
        </div>
        <button
          onClick={logout}
          className="rounded-lg border border-slate-700 bg-slate-800/80 px-4 py-2 text-sm text-slate-300 transition-colors hover:border-slate-600 hover:text-white"
        >
          Sign Out
        </button>
      </div>

      <div className="rounded-2xl border border-slate-800 bg-slate-900/60 backdrop-blur-sm p-8">
        <p className="text-slate-400">
          Protected pages will appear here as they are built.
        </p>
      </div>
    </section>
  );
}
