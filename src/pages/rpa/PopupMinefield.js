
import { showToast } from '../../utils/Toast.js';

export function PopupMinefield() {
    setTimeout(() => {
        const form = document.getElementById('minefield-form');
        const modalOverlay = document.getElementById('modal-overlay');
        const modalClose = document.getElementById('modal-close');

        // Random popup logic
        function triggerPopup() {
            if (!modalOverlay) return;

            // Random delay between 3 and 7 seconds
            const nextPopup = Math.random() * 4000 + 3000;

            setTimeout(() => {
                // Only show if not already visible
                if (modalOverlay.classList.contains('hidden')) {
                    modalOverlay.classList.remove('hidden');
                    modalOverlay.classList.add('flex');
                }
                triggerPopup();
            }, nextPopup);
        }

        // Start the chaos
        triggerPopup();

        if (modalClose) {
            modalClose.addEventListener('click', () => {
                modalOverlay.classList.add('hidden');
                modalOverlay.classList.remove('flex');
            });
        }

        if (form) {
            form.addEventListener('submit', (e) => {
                e.preventDefault();
                showToast('Form submitted successfully! You survived.', 'success');
                form.reset();
            });
        }
    }, 100);

    return `
    <section class="page max-w-4xl mx-auto px-6 py-20 md:py-32 animate-fade-in-up relative">
      <div class="mb-8">
        <button class="nav-link text-sky-400 hover:text-sky-300 mb-4" data-page="rpa">
          ← Back to Playground
        </button>
        <h2 class="text-3xl font-bold text-white">The Pop-up Minefield</h2>
        <p class="text-slate-400 mt-2">
          Can you fill out this form without getting distracted? 
          <span class="text-yellow-500">Handle the interruptions!</span>
        </p>
      </div>

      <div class="rounded-2xl border border-slate-800 bg-slate-900/50 p-8 relative overflow-hidden">
        <form id="minefield-form" class="grid grid-cols-1 md:grid-cols-2 gap-6">
            ${Array.from({ length: 8 }).map((_, i) => `
                <div class="flex flex-col">
                    <label class="text-sm text-slate-400 mb-1">Field ${i + 1}</label>
                    <input type="text" required 
                        class="bg-slate-800 border border-slate-700 rounded px-3 py-2 text-white focus:outline-none focus:border-sky-500"
                        placeholder="Value ${i + 1}"
                    >
                </div>
            `).join('')}
            
            <div class="flex flex-col md:col-span-2">
                <label class="text-sm text-slate-400 mb-1">Notes</label>
                <textarea required 
                    class="bg-slate-800 border border-slate-700 rounded px-3 py-2 text-white focus:outline-none focus:border-sky-500 h-24"
                    placeholder="Enter detailed notes here..."
                ></textarea>
            </div>

            <div class="md:col-span-2 mt-4">
                <button type="submit" class="w-full py-3 bg-sky-600 hover:bg-sky-500 text-white rounded-lg font-bold transition-colors">
                    Submit Form
                </button>
            </div>
        </form>

        <!-- The Annoying Modal -->
        <div id="modal-overlay" class="hidden absolute inset-0 z-50 bg-black/80 backdrop-blur-sm items-center justify-center animate-fade-in">
            <div class="bg-slate-800 border border-slate-700 p-8 rounded-2xl max-w-sm text-center shadow-2xl transform scale-100 animate-bounce-in">
                <div class="text-4xl mb-4">🎁</div>
                <h3 class="text-2xl font-bold text-white mb-2">Wait! Special Offer!</h3>
                <p class="text-slate-300 mb-6">
                    We've been trying to reach you about your car's extended warranty.
                </p>
                <button id="modal-close" class="px-6 py-2 bg-red-500 hover:bg-red-600 text-white rounded-full font-bold transition-colors">
                    NO THANKS
                </button>
            </div>
        </div>
      </div>
    </section>
  `;
}
