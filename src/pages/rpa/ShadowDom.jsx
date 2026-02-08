import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useToast } from '../../utils/Toast.jsx';

export default function ShadowDom() {
  const showToast = useToast();
  const hostRef = useRef(null);

  useEffect(() => {
    const host = hostRef.current;
    if (!host || host.shadowRoot) return;

    const shadow = host.attachShadow({ mode: 'open' });

    const wrapper = document.createElement('div');
    wrapper.style.padding = '20px';
    wrapper.style.backgroundColor = '#1e293b';
    wrapper.style.borderRadius = '8px';
    wrapper.style.border = '1px solid #334155';
    wrapper.style.color = 'white';

    wrapper.innerHTML = `
      <style>
        h3 { margin-top: 0; color: #38bdf8; }
        input { width: 100%; padding: 8px; margin-bottom: 10px; border-radius: 4px; border: 1px solid #475569; background: #0f172a; color: white; }
        button { background: #38bdf8; color: white; border: none; padding: 8px 16px; border-radius: 4px; cursor: pointer; font-weight: bold; }
        button:hover { background: #0ea5e9; }
      </style>
      <h3>Inside the Shadow Realm</h3>
      <p>This content is inside a Shadow DOM.</p>
      <input type="text" placeholder="Secret Input" id="shadow-input" />
      <button id="shadow-btn">Shadow Button</button>
    `;

    shadow.appendChild(wrapper);

    const btn = shadow.getElementById('shadow-btn');
    if (btn) {
      btn.addEventListener('click', () => {
        const input = shadow.getElementById('shadow-input');
        if (input) input.value = '';
        showToast('Shadow button clicked!', 'success');
      });
    }
  }, [showToast]);

  return (
    <section className="page max-w-4xl mx-auto px-6 py-20 md:py-32 animate-fade-in-up">
      <div className="mb-8">
        <Link to="/rpa" className="text-sky-400 hover:text-sky-300 mb-4 inline-block">
          &larr; Back to Playground
        </Link>
        <h2 className="text-3xl font-bold text-white">The Shadow Realm</h2>
        <p className="text-slate-400 mt-2">
          The content below is encapsulated in a Shadow DOM.
          Standard selectors (like <code>document.getElementById</code>) might fail to find it from the outside.
        </p>
      </div>

      <div className="rounded-2xl border border-slate-800 bg-slate-900/50 p-8">
        <div id="shadow-host" ref={hostRef} />
      </div>
    </section>
  );
}
