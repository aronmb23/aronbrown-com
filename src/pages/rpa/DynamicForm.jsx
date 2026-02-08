import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { useToast } from '../../utils/Toast.jsx';

export default function DynamicForm() {
  const showToast = useToast();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');

  const ids = useMemo(() => ({
    firstName: Math.random().toString(36).substring(2, 10),
    lastName: Math.random().toString(36).substring(2, 10),
    email: Math.random().toString(36).substring(2, 10),
    submit: Math.random().toString(36).substring(2, 10),
  }), []);

  const handleSubmit = () => {
    setFirstName('');
    setLastName('');
    setEmail('');
    showToast('Form submitted successfully!', 'success');
  };

  return (
    <section className="page max-w-4xl mx-auto px-6 py-20 md:py-32 animate-fade-in-up">
      <div className="mb-8">
        <Link to="/rpa" className="text-sky-400 hover:text-sky-300 mb-4 inline-block">
          &larr; Back to Playground
        </Link>
        <h2 className="text-3xl font-bold text-white">The Shapeshifter</h2>
        <p className="text-slate-400 mt-2">
          The IDs of these fields change every time you reload the page.{' '}
          <span className="text-yellow-500">Don't rely on them!</span>
        </p>
      </div>

      <div className="rounded-2xl border border-slate-800 bg-slate-900/50 p-8">
        <div className="space-y-6">
          <div>
            <label htmlFor={ids.firstName} className="block text-sm font-medium text-slate-300 mb-2">First Name</label>
            <input type="text" id={ids.firstName} value={firstName} onChange={(e) => setFirstName(e.target.value)} className="w-full rounded-lg bg-slate-950 border border-slate-700 px-4 py-2 text-white focus:border-sky-500 focus:outline-none" placeholder="John" />
          </div>
          <div>
            <label htmlFor={ids.lastName} className="block text-sm font-medium text-slate-300 mb-2">Last Name</label>
            <input type="text" id={ids.lastName} value={lastName} onChange={(e) => setLastName(e.target.value)} className="w-full rounded-lg bg-slate-950 border border-slate-700 px-4 py-2 text-white focus:border-sky-500 focus:outline-none" placeholder="Doe" />
          </div>
          <div>
            <label htmlFor={ids.email} className="block text-sm font-medium text-slate-300 mb-2">Email Address</label>
            <input type="email" id={ids.email} value={email} onChange={(e) => setEmail(e.target.value)} className="w-full rounded-lg bg-slate-950 border border-slate-700 px-4 py-2 text-white focus:border-sky-500 focus:outline-none" placeholder="john@example.com" />
          </div>
          <button id={ids.submit} onClick={handleSubmit} className="w-full rounded-lg bg-sky-500 py-3 font-bold text-white hover:bg-sky-400 transition-colors">
            Submit
          </button>
        </div>
      </div>

      <div className="mt-8 p-4 rounded-lg bg-slate-800/50 border border-slate-700 text-sm text-slate-400">
        <strong>Hint:</strong> Use "Anchor Base" in UiPath or relative XPaths (e.g., <code>//label[text()='First Name']/following-sibling::input</code>).
      </div>
    </section>
  );
}
