
import { showToast } from '../../utils/Toast.js';

export function ShadowDom() {
  setTimeout(() => {
    const host = document.getElementById('shadow-host');
    if (host && !host.shadowRoot) {
      const shadow = host.attachShadow({ mode: 'open' });

      const wrapper = document.createElement('div');
      wrapper.style.padding = '20px';
      wrapper.style.backgroundColor = '#1e293b'; // slate-800
      wrapper.style.borderRadius = '8px';
      wrapper.style.border = '1px solid #334155'; // slate-700
      wrapper.style.color = 'white';

      wrapper.innerHTML = `
            <style>
                h3 { margin-top: 0; color: #38bdf8; } /* sky-400 */
                input { 
                    width: 100%; 
                    padding: 8px; 
                    margin-bottom: 10px; 
                    border-radius: 4px; 
                    border: 1px solid #475569; 
                    background: #0f172a; 
                    color: white;
                }
                button {
                    background: #38bdf8;
                    color: white;
                    border: none;
                    padding: 8px 16px;
                    border-radius: 4px;
                    cursor: pointer;
                    font-weight: bold;
                }
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
    }
  }, 100);

  return `
    <section class="page max-w-4xl mx-auto px-6 py-20 md:py-32 animate-fade-in-up">
      <div class="mb-8">
        <button class="nav-link text-sky-400 hover:text-sky-300 mb-4" data-page="rpa">
          ← Back to Playground
        </button>
        <h2 class="text-3xl font-bold text-white">The Shadow Realm</h2>
        <p class="text-slate-400 mt-2">
          The content below is encapsulated in a Shadow DOM. 
          Standard selectors (like <code>document.getElementById</code>) might fail to find it from the outside.
        </p>
      </div>

      <div class="rounded-2xl border border-slate-800 bg-slate-900/50 p-8">
        <div id="shadow-host">
            <!-- Shadow DOM will attach here -->
        </div>
      </div>
    </section>
  `;
}
