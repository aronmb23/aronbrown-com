
import { showToast } from '../../utils/Toast.js';

export function TwoFASprint() {
    let timerInterval;
    let currentCode = '';
    let isRunning = false;

    setTimeout(() => {
        const startBtn = document.getElementById('start-2fa');
        const checkBtn = document.getElementById('check-2fa');
        const timerDisplay = document.getElementById('timer-display');
        const codeDisplay = document.getElementById('code-display');
        const inputField = document.getElementById('2fa-input');
        const phoneScreen = document.getElementById('phone-screen');

        function startChallenge() {
            if (isRunning) return;
            isRunning = true;

            // Generate random 6-digit code
            currentCode = Math.floor(100000 + Math.random() * 900000).toString();

            // Reset UI
            inputField.value = '';
            inputField.disabled = false;
            inputField.focus();
            codeDisplay.textContent = currentCode;
            phoneScreen.classList.remove('opacity-50');
            phoneScreen.classList.add('animate-pulse-slow');

            let timeLeft = 15;
            timerDisplay.textContent = timeLeft;
            timerDisplay.classList.remove('text-red-500');
            timerDisplay.classList.add('text-sky-400');

            timerInterval = setInterval(() => {
                timeLeft--;
                timerDisplay.textContent = timeLeft;

                if (timeLeft <= 5) {
                    timerDisplay.classList.remove('text-sky-400');
                    timerDisplay.classList.add('text-red-500');
                }

                if (timeLeft <= 0) {
                    endChallenge(false);
                }
            }, 1000);
        }

        function endChallenge(success) {
            clearInterval(timerInterval);
            isRunning = false;
            inputField.disabled = true;
            phoneScreen.classList.add('opacity-50');
            phoneScreen.classList.remove('animate-pulse-slow');
            codeDisplay.textContent = '------';

            if (success) {
                showToast('Access Granted! You are fast enough.', 'success');
            } else {
                showToast('Time expired or incorrect code. Try again.', 'error');
            }
        }

        if (startBtn) {
            startBtn.addEventListener('click', startChallenge);
        }

        if (checkBtn) {
            checkBtn.addEventListener('click', () => {
                if (!isRunning) return;

                if (inputField.value === currentCode) {
                    endChallenge(true);
                } else {
                    showToast('Incorrect code!', 'error');
                }
            });
        }

        // Allow Enter key to submit
        if (inputField) {
            inputField.addEventListener('keypress', (e) => {
                if (e.key === 'Enter') {
                    checkBtn.click();
                }
            });
        }

    }, 100);

    return `
    <section class="page max-w-4xl mx-auto px-6 py-20 md:py-32 animate-fade-in-up">
      <div class="mb-8">
        <button class="nav-link text-sky-400 hover:text-sky-300 mb-4" data-page="rpa">
          ← Back to Playground
        </button>
        <h2 class="text-3xl font-bold text-white">The 2FA Sprint</h2>
        <p class="text-slate-400 mt-2">
          Time-sensitive data entry. 
          <span class="text-yellow-500">Enter the code before it expires!</span>
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <!-- Login Portal -->
        <div class="rounded-2xl border border-slate-800 bg-slate-900/50 p-8">
            <h3 class="text-xl font-bold text-white mb-6">Secure Portal Login</h3>
            
            <div class="mb-6">
                <label class="block text-sm text-slate-400 mb-2">2FA Code</label>
                <input type="text" id="2fa-input" disabled
                    class="w-full bg-slate-800 border border-slate-700 rounded px-3 py-2 text-white font-mono text-xl tracking-widest text-center focus:outline-none focus:border-sky-500 disabled:opacity-50"
                    placeholder="------"
                    maxlength="6"
                >
            </div>

            <div class="flex gap-4">
                <button id="start-2fa" class="flex-1 py-3 bg-slate-700 hover:bg-slate-600 text-white rounded-lg font-bold transition-colors">
                    Send Code
                </button>
                <button id="check-2fa" class="flex-1 py-3 bg-sky-600 hover:bg-sky-500 text-white rounded-lg font-bold transition-colors">
                    Verify
                </button>
            </div>
            
            <div class="mt-6 text-center">
                <span class="text-sm text-slate-500">Time Remaining:</span>
                <div id="timer-display" class="text-4xl font-bold text-sky-400 font-mono mt-1">15</div>
            </div>
        </div>

        <!-- Phone Simulator -->
        <div class="relative mx-auto">
            <div class="absolute -inset-4 bg-sky-500/20 rounded-[3rem] blur-xl"></div>
            <div id="phone-screen" class="relative w-[280px] h-[500px] bg-black border-8 border-slate-800 rounded-[2.5rem] p-6 flex flex-col opacity-50 transition-all duration-300">
                <!-- Notch -->
                <div class="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-slate-800 rounded-b-xl z-10"></div>
                
                <!-- Screen Content -->
                <div class="mt-8 flex-1 flex flex-col items-center justify-center text-center">
                    <div class="w-16 h-16 bg-sky-500 rounded-2xl flex items-center justify-center mb-4">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" class="w-8 h-8">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
                        </svg>
                    </div>
                    <h4 class="text-white font-bold mb-1">Authenticator</h4>
                    <p class="text-slate-400 text-sm mb-8">Login Request</p>
                    
                    <div class="bg-slate-900 rounded-xl p-4 w-full border border-slate-800">
                        <div class="text-xs text-slate-500 uppercase tracking-wider mb-2">Your Code</div>
                        <div id="code-display" class="text-3xl font-mono font-bold text-white tracking-widest">------</div>
                    </div>
                </div>
                
                <!-- Home Bar -->
                <div class="w-32 h-1 bg-slate-700 rounded-full mx-auto mt-auto mb-2"></div>
            </div>
        </div>
      </div>
    </section>
  `;
}
