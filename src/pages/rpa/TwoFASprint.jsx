import { useState, useRef, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { useToast } from '../../utils/Toast.jsx';

export default function TwoFASprint() {
  const showToast = useToast();
  const [isRunning, setIsRunning] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [timeLeft, setTimeLeft] = useState(15);
  const [codeDisplay, setCodeDisplay] = useState('------');
  const [phoneActive, setPhoneActive] = useState(false);
  const currentCodeRef = useRef('');
  const timerRef = useRef(null);

  const endChallenge = useCallback((success) => {
    clearInterval(timerRef.current);
    setIsRunning(false);
    setPhoneActive(false);
    setCodeDisplay('------');
    if (success) {
      showToast('Access Granted! You are fast enough.', 'success');
    } else {
      showToast('Time expired or incorrect code. Try again.', 'error');
    }
  }, [showToast]);

  const startChallenge = useCallback(() => {
    if (isRunning) return;
    setIsRunning(true);

    const code = Math.floor(100000 + Math.random() * 900000).toString();
    currentCodeRef.current = code;

    setInputValue('');
    setCodeDisplay(code);
    setPhoneActive(true);

    let remaining = 15;
    setTimeLeft(remaining);

    timerRef.current = setInterval(() => {
      remaining--;
      setTimeLeft(remaining);
      if (remaining <= 0) {
        endChallenge(false);
      }
    }, 1000);
  }, [isRunning, endChallenge]);

  const handleVerify = () => {
    if (!isRunning) return;
    if (inputValue === currentCodeRef.current) {
      endChallenge(true);
    } else {
      showToast('Incorrect code!', 'error');
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') handleVerify();
  };

  return (
    <section className="page max-w-4xl mx-auto px-6 py-20 md:py-32 animate-fade-in-up">
      <div className="mb-8">
        <Link to="/rpa" className="text-sky-400 hover:text-sky-300 mb-4 inline-block">
          &larr; Back to Playground
        </Link>
        <h2 className="text-3xl font-bold text-white">The 2FA Sprint</h2>
        <p className="text-slate-400 mt-2">
          Time-sensitive data entry.{' '}
          <span className="text-yellow-500">Enter the code before it expires!</span>
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Login Portal */}
        <div className="rounded-2xl border border-slate-800 bg-slate-900/50 p-8">
          <h3 className="text-xl font-bold text-white mb-6">Secure Portal Login</h3>
          <div className="mb-6">
            <label className="block text-sm text-slate-400 mb-2">2FA Code</label>
            <input
              type="text"
              id="2fa-input"
              disabled={!isRunning}
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={handleKeyPress}
              className="w-full bg-slate-800 border border-slate-700 rounded px-3 py-2 text-white font-mono text-xl tracking-widest text-center focus:outline-none focus:border-sky-500 disabled:opacity-50"
              placeholder="------"
              maxLength="6"
            />
          </div>
          <div className="flex gap-4">
            <button id="start-2fa" onClick={startChallenge} className="flex-1 py-3 bg-slate-700 hover:bg-slate-600 text-white rounded-lg font-bold transition-colors">
              Send Code
            </button>
            <button id="check-2fa" onClick={handleVerify} className="flex-1 py-3 bg-sky-600 hover:bg-sky-500 text-white rounded-lg font-bold transition-colors">
              Verify
            </button>
          </div>
          <div className="mt-6 text-center">
            <span className="text-sm text-slate-500">Time Remaining:</span>
            <div id="timer-display" className={`text-4xl font-bold font-mono mt-1 ${timeLeft <= 5 ? 'text-red-500' : 'text-sky-400'}`}>
              {timeLeft}
            </div>
          </div>
        </div>

        {/* Phone Simulator */}
        <div className="relative mx-auto">
          <div className="absolute -inset-4 bg-sky-500/20 rounded-[3rem] blur-xl" />
          <div id="phone-screen" className={`relative w-[280px] h-[500px] bg-black border-8 border-slate-800 rounded-[2.5rem] p-6 flex flex-col transition-all duration-300 ${phoneActive ? '' : 'opacity-50'}`}>
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-slate-800 rounded-b-xl z-10" />
            <div className="mt-8 flex-1 flex flex-col items-center justify-center text-center">
              <div className="w-16 h-16 bg-sky-500 rounded-2xl flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="white" className="w-8 h-8">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
                </svg>
              </div>
              <h4 className="text-white font-bold mb-1">Authenticator</h4>
              <p className="text-slate-400 text-sm mb-8">Login Request</p>
              <div className="bg-slate-900 rounded-xl p-4 w-full border border-slate-800">
                <div className="text-xs text-slate-500 uppercase tracking-wider mb-2">Your Code</div>
                <div id="code-display" className="text-3xl font-mono font-bold text-white tracking-widest">{codeDisplay}</div>
              </div>
            </div>
            <div className="w-32 h-1 bg-slate-700 rounded-full mx-auto mt-auto mb-2" />
          </div>
        </div>
      </div>
    </section>
  );
}
