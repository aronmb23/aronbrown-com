import { Link } from 'react-router-dom';
import { useToast } from '../../utils/Toast.jsx';

export default function IframeInception() {
  const showToast = useToast();

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

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const answer1 = formData.get('answer-1');
    const answer2 = formData.get('answer-2');

    if (answer1?.toLowerCase() === 'inception' && answer2?.toLowerCase() === 'dream') {
      showToast('Correct! You navigated the layers.', 'success');
    } else {
      showToast('Incorrect. Keep digging.', 'error');
    }
  };

  return (
    <section className="page max-w-6xl mx-auto px-6 py-20 md:py-32 animate-fade-in-up">
      <div className="mb-8">
        <Link to="/rpa" className="text-sky-400 hover:text-sky-300 mb-4 inline-block">
          &larr; Back to Playground
        </Link>
        <h2 className="text-3xl font-bold text-white">The Iframe Inception</h2>
        <p className="text-slate-400 mt-2">
          Data is hidden inside nested iframes.{' '}
          <span className="text-yellow-500">Switch contexts to find the secrets.</span>
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 h-[600px] rounded-2xl overflow-hidden border border-slate-700 bg-black">
          <iframe srcDoc={outerIframeContent} className="w-full h-full border-none" title="Level 2" />
        </div>

        <div className="rounded-2xl border border-slate-800 bg-slate-900/50 p-8 h-fit">
          <h3 className="text-xl font-bold text-white mb-6">Submit Findings</h3>
          <form id="iframe-form" onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm text-slate-400 mb-2">Level 2 Secret</label>
              <input
                type="text"
                name="answer-1"
                id="answer-1"
                required
                className="w-full bg-slate-800 border border-slate-700 rounded px-3 py-2 text-white focus:outline-none focus:border-sky-500"
                placeholder="Found in Level 2"
              />
            </div>
            <div>
              <label className="block text-sm text-slate-400 mb-2">Level 3 Secret</label>
              <input
                type="text"
                name="answer-2"
                id="answer-2"
                required
                className="w-full bg-slate-800 border border-slate-700 rounded px-3 py-2 text-white focus:outline-none focus:border-sky-500"
                placeholder="Found in Level 3"
              />
            </div>
            <button type="submit" className="w-full py-3 bg-sky-600 hover:bg-sky-500 text-white rounded-lg font-bold transition-colors">
              Verify Secrets
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
