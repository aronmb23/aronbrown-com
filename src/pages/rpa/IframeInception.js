
import { showToast } from '../../utils/Toast.js';

export function IframeInception() {
    setTimeout(() => {
        const form = document.getElementById('iframe-form');

        if (form) {
            form.addEventListener('submit', (e) => {
                e.preventDefault();
                const answer1 = document.getElementById('answer-1').value;
                const answer2 = document.getElementById('answer-2').value;

                if (answer1.toLowerCase() === 'inception' && answer2.toLowerCase() === 'dream') {
                    showToast('Correct! You navigated the layers.', 'success');
                } else {
                    showToast('Incorrect. Keep digging.', 'error');
                }
            });
        }
    }, 100);

    const innerIframeContent = `
    <!DOCTYPE html>
    <html>
    <head>
        <style>
            body { background: #1e293b; color: white; font-family: sans-serif; padding: 20px; display: flex; flex-direction: column; align-items: center; justify-content: center; height: 100vh; margin: 0; box-sizing: border-box; border: 4px dashed #f472b6; }
            h2 { color: #f472b6; margin-top: 0; }
            .secret { font-size: 24px; font-weight: bold; background: #f472b6; color: #1e293b; padding: 10px 20px; rounded: 8px; margin-top: 20px; }
        </style>
    </head>
    <body>
        <h2>Level 3: Limbo</h2>
        <p>You are deep within the nested frames.</p>
        <div class="secret" id="secret-level-3">Secret: DREAM</div>
    </body>
    </html>
  `;

    const outerIframeContent = `
    <!DOCTYPE html>
    <html>
    <head>
        <style>
            body { background: #0f172a; color: white; font-family: sans-serif; padding: 20px; height: 100vh; margin: 0; box-sizing: border-box; border: 4px solid #38bdf8; display: flex; flex-direction: column; }
            h2 { color: #38bdf8; margin-top: 0; }
            .secret { font-size: 18px; font-weight: bold; color: #38bdf8; margin-bottom: 20px; }
            iframe { width: 100%; flex: 1; border: none; border-radius: 8px; }
        </style>
    </head>
    <body>
        <h2>Level 2: The Hotel</h2>
        <div class="secret" id="secret-level-2">Secret: INCEPTION</div>
        <iframe srcdoc="${innerIframeContent.replace(/"/g, '&quot;')}" title="Level 3"></iframe>
    </body>
    </html>
  `;

    return `
    <section class="page max-w-6xl mx-auto px-6 py-20 md:py-32 animate-fade-in-up">
      <div class="mb-8">
        <button class="nav-link text-sky-400 hover:text-sky-300 mb-4" data-page="rpa">
          ← Back to Playground
        </button>
        <h2 class="text-3xl font-bold text-white">The Iframe Inception</h2>
        <p class="text-slate-400 mt-2">
          Data is hidden inside nested iframes. 
          <span class="text-yellow-500">Switch contexts to find the secrets.</span>
        </p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <!-- The Iframes -->
        <div class="lg:col-span-2 h-[600px] rounded-2xl overflow-hidden border border-slate-700 bg-black">
            <iframe srcdoc="${outerIframeContent.replace(/"/g, '&quot;')}" class="w-full h-full border-none" title="Level 2"></iframe>
        </div>

        <!-- The Answer Form -->
        <div class="rounded-2xl border border-slate-800 bg-slate-900/50 p-8 h-fit">
            <h3 class="text-xl font-bold text-white mb-6">Submit Findings</h3>
            <form id="iframe-form" class="space-y-6">
                <div>
                    <label class="block text-sm text-slate-400 mb-2">Level 2 Secret</label>
                    <input type="text" id="answer-1" required 
                        class="w-full bg-slate-800 border border-slate-700 rounded px-3 py-2 text-white focus:outline-none focus:border-sky-500"
                        placeholder="Found in Level 2"
                    >
                </div>
                <div>
                    <label class="block text-sm text-slate-400 mb-2">Level 3 Secret</label>
                    <input type="text" id="answer-2" required 
                        class="w-full bg-slate-800 border border-slate-700 rounded px-3 py-2 text-white focus:outline-none focus:border-sky-500"
                        placeholder="Found in Level 3"
                    >
                </div>
                <button type="submit" class="w-full py-3 bg-sky-600 hover:bg-sky-500 text-white rounded-lg font-bold transition-colors">
                    Verify Secrets
                </button>
            </form>
        </div>
      </div>
    </section>
  `;
}
