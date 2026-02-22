import { Link } from 'react-router-dom';
import { useAuth } from '../utils/AuthContext.jsx';

const quickLinks = [
  {
    title: 'Projects',
    description: 'View and manage your project showcase',
    to: '/projects',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12.75V12A2.25 2.25 0 0 1 4.5 9.75h15A2.25 2.25 0 0 1 21.75 12v.75m-8.69-6.44-2.12-2.12a1.5 1.5 0 0 0-1.061-.44H4.5A2.25 2.25 0 0 0 2.25 6v12a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9a2.25 2.25 0 0 0-2.25-2.25h-5.379a1.5 1.5 0 0 1-1.06-.44Z" />
      </svg>
    ),
  },
  {
    title: 'RPA Playground',
    description: 'Test automation scenarios and challenges',
    to: '/rpa',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 0 1-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 0 1 4.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0 1 12 15a9.065 9.065 0 0 0-6.23.693L5 14.5m14.8.8 1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0 1 12 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
      </svg>
    ),
  },
  {
    title: 'Work',
    description: 'Explore services and capabilities',
    to: '/work',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0" />
      </svg>
    ),
  },
  {
    title: 'Contact',
    description: 'Get in touch or send a message',
    to: '/contact',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
      </svg>
    ),
  },
];

export default function Dashboard() {
  const { user, logout } = useAuth();

  const displayName =
    user?.user_metadata?.full_name ||
    user?.user_metadata?.name ||
    user?.email ||
    'User';

  return (
    <section className="page max-w-5xl mx-auto px-6 py-20 md:py-32 animate-fade-in-up">
      {/* Welcome Banner */}
      <div className="relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/60 backdrop-blur-sm p-8 md:p-10 mb-8">
        <div className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-sky-500/10 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-indigo-500/10 blur-3xl" />
        <div className="relative flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <p className="text-sm font-medium text-sky-400 mb-1">Welcome back</p>
            <h1 className="text-3xl md:text-4xl font-bold text-white">
              {displayName}
            </h1>
            <p className="mt-2 text-slate-400 text-sm max-w-lg">
              You're signed in. Use the links below to navigate, or explore the site from here.
            </p>
          </div>
          <button
            onClick={logout}
            className="self-start rounded-lg border border-slate-700 bg-slate-800/80 px-5 py-2.5 text-sm text-slate-300 transition-colors hover:border-red-500/50 hover:text-red-300 hover:bg-red-500/10"
          >
            Sign Out
          </button>
        </div>
      </div>

      {/* Quick Links Grid */}
      <div className="mb-8">
        <h2 className="text-lg font-semibold text-slate-200 mb-4">Quick Links</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {quickLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="group rounded-xl border border-slate-800 bg-slate-900/60 backdrop-blur-sm p-6 transition-all duration-200 hover:border-sky-500/40 hover:bg-slate-800/60"
            >
              <div className="flex items-start gap-4">
                <div className="rounded-lg bg-slate-800 p-2.5 text-sky-400 transition-colors group-hover:bg-sky-500/20 group-hover:text-sky-300">
                  {link.icon}
                </div>
                <div>
                  <h3 className="font-semibold text-slate-200 group-hover:text-white transition-colors">
                    {link.title}
                  </h3>
                  <p className="mt-1 text-sm text-slate-500 group-hover:text-slate-400 transition-colors">
                    {link.description}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Account Info */}
      <div className="rounded-2xl border border-slate-800 bg-slate-900/60 backdrop-blur-sm p-8">
        <h2 className="text-lg font-semibold text-slate-200 mb-4">Account</h2>
        <div className="space-y-4">
          <div className="flex items-center justify-between py-3 border-b border-slate-800">
            <span className="text-sm text-slate-400">Email</span>
            <span className="text-sm font-medium text-slate-200">{user?.email}</span>
          </div>
          <div className="flex items-center justify-between py-3 border-b border-slate-800">
            <span className="text-sm text-slate-400">Status</span>
            <span className="inline-flex items-center gap-1.5 text-sm font-medium text-emerald-400">
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              Active
            </span>
          </div>
          <div className="flex items-center justify-between py-3">
            <span className="text-sm text-slate-400">Email verified</span>
            <span className="text-sm text-slate-400">
              {user?.email_confirmed_at ? 'Yes' : 'Pending'}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
