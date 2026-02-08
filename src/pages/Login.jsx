import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../utils/AuthContext.jsx';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const { login, user } = useAuth();
  const navigate = useNavigate();

  // Redirect if already authenticated
  if (user) {
    navigate('/dashboard', { replace: true });
    return null;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSubmitting(true);

    try {
      await login(username, password);
      navigate('/dashboard', { replace: true });
    } catch (err) {
      setError(err.message || 'Invalid credentials');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="page max-w-md mx-auto px-6 py-20 md:py-32 animate-fade-in-up">
      <div className="text-center mb-10">
        <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-sky-400 to-indigo-400 bg-clip-text text-transparent">
          Sign In
        </h1>
        <p className="mt-3 text-slate-400 text-sm">
          Authorized access only
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="space-y-5 rounded-2xl border border-slate-800 bg-slate-900/60 backdrop-blur-sm p-8"
      >
        {error && (
          <div className="rounded-lg border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-300">
            {error}
          </div>
        )}

        <div>
          <label htmlFor="username" className="block text-sm font-medium text-slate-300 mb-1.5">
            Username
          </label>
          <input
            id="username"
            type="text"
            required
            autoComplete="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full rounded-lg border border-slate-700 bg-slate-800/80 px-4 py-2.5 text-sm text-slate-100 placeholder-slate-500 outline-none transition-colors focus:border-sky-500 focus:ring-1 focus:ring-sky-500/50"
            placeholder="Enter username"
          />
        </div>

        <div>
          <label htmlFor="password" className="block text-sm font-medium text-slate-300 mb-1.5">
            Password
          </label>
          <input
            id="password"
            type="password"
            required
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full rounded-lg border border-slate-700 bg-slate-800/80 px-4 py-2.5 text-sm text-slate-100 placeholder-slate-500 outline-none transition-colors focus:border-sky-500 focus:ring-1 focus:ring-sky-500/50"
            placeholder="Enter password"
          />
        </div>

        <button
          type="submit"
          disabled={submitting}
          className="btn-glow w-full rounded-lg bg-gradient-to-r from-sky-500 to-indigo-500 px-4 py-2.5 text-sm font-semibold text-white transition-all hover:from-sky-400 hover:to-indigo-400 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {submitting ? (
            <span className="flex items-center justify-center gap-2">
              <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              Signing in...
            </span>
          ) : (
            'Sign In'
          )}
        </button>
      </form>
    </section>
  );
}
