
export function RPADashboard() {
  return `
    <section class="page max-w-6xl mx-auto px-6 py-20 md:py-32 animate-fade-in-up">
      <div class="max-w-2xl">
        <h2 class="text-3xl md:text-4xl font-bold text-white mb-6">RPA Playground</h2>
        <p class="text-lg text-slate-300 leading-relaxed mb-12">
          A sandbox for testing and demonstrating Robotic Process Automation capabilities. 
          These challenges are designed to mimic common (and annoying) real-world scenarios.
        </p>
      </div>

      <div class="grid gap-6 md:grid-cols-2">
        <!-- Challenge 1 -->
        <div class="group relative rounded-2xl border border-slate-800 bg-slate-900/50 p-6 hover:bg-slate-900 hover:border-sky-500/30 transition-all duration-300">
          <h3 class="text-xl font-bold text-white mb-2 group-hover:text-sky-400 transition-colors">
            1. The Shapeshifter
          </h3>
          <p class="text-slate-400 mb-4">
            Dynamic selectors. Every time you reload, the IDs and classes change. 
            Can your bot find the right fields?
          </p>
          <button class="nav-link px-4 py-2 rounded-lg bg-slate-800 text-slate-300 hover:bg-sky-500 hover:text-white transition-colors" data-page="rpa/dynamic-form">
            Start Challenge
          </button>
        </div>

        <!-- Challenge 2 -->
        <div class="group relative rounded-2xl border border-slate-800 bg-slate-900/50 p-6 hover:bg-slate-900 hover:border-sky-500/30 transition-all duration-300">
          <h3 class="text-xl font-bold text-white mb-2 group-hover:text-sky-400 transition-colors">
            2. The Data Mine
          </h3>
          <p class="text-slate-400 mb-4">
            Table extraction. Pagination, messy data formats, and status badges. 
            Scrape it, clean it, export it.
          </p>
          <button class="nav-link px-4 py-2 rounded-lg bg-slate-800 text-slate-300 hover:bg-sky-500 hover:text-white transition-colors" data-page="rpa/invoice-table">
            Start Challenge
          </button>
        </div>

        <!-- Challenge 3 -->
        <div class="group relative rounded-2xl border border-slate-800 bg-slate-900/50 p-6 hover:bg-slate-900 hover:border-sky-500/30 transition-all duration-300">
          <h3 class="text-xl font-bold text-white mb-2 group-hover:text-sky-400 transition-colors">
            3. The Patience Test
          </h3>
          <p class="text-slate-400 mb-4">
            Synchronization. Elements that load late, popups that appear randomly. 
            Hardcoded delays won't save you here.
          </p>
          <button class="nav-link px-4 py-2 rounded-lg bg-slate-800 text-slate-300 hover:bg-sky-500 hover:text-white transition-colors" data-page="rpa/wait-test">
            Start Challenge
          </button>
        </div>

        <!-- Challenge 4 -->
        <div class="group relative rounded-2xl border border-slate-800 bg-slate-900/50 p-6 hover:bg-slate-900 hover:border-sky-500/30 transition-all duration-300">
          <h3 class="text-xl font-bold text-white mb-2 group-hover:text-sky-400 transition-colors">
            4. The Shadow Realm
          </h3>
          <p class="text-slate-400 mb-4">
            Shadow DOM. Elements hidden inside encapsulation boundaries. 
            Standard selectors might not see them.
          </p>
          <button class="nav-link px-4 py-2 rounded-lg bg-slate-800 text-slate-300 hover:bg-sky-500 hover:text-white transition-colors" data-page="rpa/shadow-dom">
            Start Challenge
          </button>
        </div>
        <!-- Challenge 5 -->
        <div class="group relative rounded-2xl border border-slate-800 bg-slate-900/50 p-6 hover:bg-slate-900 hover:border-sky-500/30 transition-all duration-300">
          <h3 class="text-xl font-bold text-white mb-2 group-hover:text-sky-400 transition-colors">
            5. The Pop-up Minefield
          </h3>
          <p class="text-slate-400 mb-4">
            Exception handling. Random modals block your path. 
            Handle the interruptions to submit the form.
          </p>
          <button class="nav-link px-4 py-2 rounded-lg bg-slate-800 text-slate-300 hover:bg-sky-500 hover:text-white transition-colors" data-page="rpa/popup-minefield">
            Start Challenge
          </button>
        </div>

        <!-- Challenge 6 -->
        <div class="group relative rounded-2xl border border-slate-800 bg-slate-900/50 p-6 hover:bg-slate-900 hover:border-sky-500/30 transition-all duration-300">
          <h3 class="text-xl font-bold text-white mb-2 group-hover:text-sky-400 transition-colors">
            6. The Iframe Inception
          </h3>
          <p class="text-slate-400 mb-4">
            Nested contexts. Data hidden inside iframes within iframes. 
            Switch focus to find the secrets.
          </p>
          <button class="nav-link px-4 py-2 rounded-lg bg-slate-800 text-slate-300 hover:bg-sky-500 hover:text-white transition-colors" data-page="rpa/iframe-inception">
            Start Challenge
          </button>
        </div>

        <!-- Challenge 7 -->
        <div class="group relative rounded-2xl border border-slate-800 bg-slate-900/50 p-6 hover:bg-slate-900 hover:border-sky-500/30 transition-all duration-300">
          <h3 class="text-xl font-bold text-white mb-2 group-hover:text-sky-400 transition-colors">
            7. The Drag & Drop Sort
          </h3>
          <p class="text-slate-400 mb-4">
            Complex interactions. Simulate mouse events to drag items to the correct column.
          </p>
          <button class="nav-link px-4 py-2 rounded-lg bg-slate-800 text-slate-300 hover:bg-sky-500 hover:text-white transition-colors" data-page="rpa/drag-drop">
            Start Challenge
          </button>
        </div>

        <!-- Challenge 8 -->
        <div class="group relative rounded-2xl border border-slate-800 bg-slate-900/50 p-6 hover:bg-slate-900 hover:border-sky-500/30 transition-all duration-300">
          <h3 class="text-xl font-bold text-white mb-2 group-hover:text-sky-400 transition-colors">
            8. The 2FA Sprint
          </h3>
          <p class="text-slate-400 mb-4">
            Time sensitivity. Read the code from the phone and enter it before it expires.
          </p>
          <button class="nav-link px-4 py-2 rounded-lg bg-slate-800 text-slate-300 hover:bg-sky-500 hover:text-white transition-colors" data-page="rpa/2fa-sprint">
            Start Challenge
          </button>
        </div>

        <!-- Challenge 9 -->
        <div class="group relative rounded-2xl border border-slate-800 bg-slate-900/50 p-6 hover:bg-slate-900 hover:border-sky-500/30 transition-all duration-300">
          <div class="absolute -inset-px rounded-2xl bg-gradient-to-r from-sky-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
          <div class="relative">
            <h3 class="text-xl font-bold text-white mb-2 group-hover:text-sky-400 transition-colors">
              9. The Legacy ERP
            </h3>
            <p class="text-slate-400 mb-4">
              A blast from the past. Enter data into this Windows 95-style accounting software.
            </p>
            <button class="nav-link px-4 py-2 rounded-lg bg-slate-800 text-slate-300 hover:bg-sky-500 hover:text-white transition-colors" data-page="rpa/retro-erp">
              Start Challenge
            </button>
          </div>
        </div>
      </div>
      
      <div class="mt-12 text-center">
        <button class="nav-link text-slate-500 hover:text-slate-300" data-page="home">
          ← Back to Home
        </button>
      </div>
    </section>
  `;
}
