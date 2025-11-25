
import { showToast } from '../../utils/Toast.js';

export function WaitTest() {
  let appearTime = 0;

  function startTest() {
    const container = document.getElementById('delayed-content');
    const loader = document.getElementById('loader');
    const status = document.getElementById('status-text');

    if (!container || !loader) return;

    // Reset state
    container.innerHTML = '';
    loader.style.display = 'block';

    // Random delay between 2 and 6 seconds
    const delay = Math.floor(Math.random() * 4000) + 2000;
    if (status) status.textContent = `Waiting for ${(delay / 1000).toFixed(2)}s...`;

    setTimeout(() => {
      if (loader) loader.style.display = 'none';
      if (container) {
        appearTime = Date.now();
        container.innerHTML = `
                <div class="p-6 rounded-lg bg-green-500/10 border border-green-500/20 text-green-400 animate-fade-in-up">
                    <h3 class="font-bold text-lg mb-2">Success!</h3>
                    <p>The element has appeared.</p>
                    <button id="target-btn" class="mt-4 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-500 transition-colors">
                        Click Me
                    </button>
                </div>
            `;

        // Add click handler for the new button
        const btn = document.getElementById('target-btn');
        if (btn) {
          btn.addEventListener('click', () => {
            const reactionTime = (Date.now() - appearTime) / 1000;
            showToast(`Clicked in ${reactionTime.toFixed(2)}s! Resetting in 3s...`, 'success');

            // Reset after 3 seconds
            setTimeout(startTest, 3000);
          });
        }
      }
    }, delay);
  }

  setTimeout(startTest, 100);

  return `
    <section class="page max-w-4xl mx-auto px-6 py-20 md:py-32 animate-fade-in-up">
      <div class="mb-8">
        <button class="nav-link text-sky-400 hover:text-sky-300 mb-4" data-page="rpa">
          ← Back to Playground
        </button>
        <h2 class="text-3xl font-bold text-white">The Patience Test</h2>
        <p class="text-slate-400 mt-2">
          The content below will load after a random delay. 
          <span class="text-yellow-500">Wait for it!</span>
        </p>
      </div>

      <div class="rounded-2xl border border-slate-800 bg-slate-900/50 p-12 text-center min-h-[300px] flex flex-col items-center justify-center">
        <div id="loader" class="flex flex-col items-center">
            <div class="w-12 h-12 border-4 border-slate-700 border-t-sky-500 rounded-full animate-spin mb-4"></div>
            <p class="text-slate-400" id="status-text">Loading...</p>
        </div>
        
        <div id="delayed-content" class="w-full max-w-md">
            <!-- Content will appear here -->
        </div>
      </div>
    </section>
  `;
}
