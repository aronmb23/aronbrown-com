import { useState, useEffect, useRef, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { useToast } from '../../utils/Toast.jsx';

export default function WaitTest() {
  const showToast = useToast();
  const [loading, setLoading] = useState(true);
  const [statusText, setStatusText] = useState('Loading...');
  const [showContent, setShowContent] = useState(false);
  const appearTimeRef = useRef(0);
  const timerRef = useRef(null);

  const startTest = useCallback(() => {
    setLoading(true);
    setShowContent(false);
    const delay = Math.floor(Math.random() * 4000) + 2000;
    setStatusText(`Waiting for ${(delay / 1000).toFixed(2)}s...`);

    timerRef.current = setTimeout(() => {
      setLoading(false);
      setShowContent(true);
      appearTimeRef.current = Date.now();
    }, delay);
  }, []);

  useEffect(() => {
    startTest();
    return () => clearTimeout(timerRef.current);
  }, [startTest]);

  const handleClick = () => {
    const reactionTime = (Date.now() - appearTimeRef.current) / 1000;
    showToast(`Clicked in ${reactionTime.toFixed(2)}s! Resetting in 3s...`, 'success');
    setTimeout(startTest, 3000);
  };

  return (
    <section className="page max-w-4xl mx-auto px-6 py-20 md:py-32 animate-fade-in-up">
      <div className="mb-8">
        <Link to="/rpa" className="text-sky-400 hover:text-sky-300 mb-4 inline-block">
          &larr; Back to Playground
        </Link>
        <h2 className="text-3xl font-bold text-white">The Patience Test</h2>
        <p className="text-slate-400 mt-2">
          The content below will load after a random delay.{' '}
          <span className="text-yellow-500">Wait for it!</span>
        </p>
      </div>

      <div className="rounded-2xl border border-slate-800 bg-slate-900/50 p-12 text-center min-h-[300px] flex flex-col items-center justify-center">
        {loading && (
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 border-4 border-slate-700 border-t-sky-500 rounded-full animate-spin mb-4" />
            <p className="text-slate-400">{statusText}</p>
          </div>
        )}

        {showContent && (
          <div className="w-full max-w-md">
            <div className="p-6 rounded-lg bg-green-500/10 border border-green-500/20 text-green-400 animate-fade-in-up">
              <h3 className="font-bold text-lg mb-2">Success!</h3>
              <p>The element has appeared.</p>
              <button
                id="target-btn"
                onClick={handleClick}
                className="mt-4 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-500 transition-colors"
              >
                Click Me
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
