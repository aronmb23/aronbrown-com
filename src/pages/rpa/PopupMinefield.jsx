import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useToast } from '../../utils/Toast.jsx';

export default function PopupMinefield() {
  const showToast = useToast();
  const [modalVisible, setModalVisible] = useState(false);
  const timeoutRef = useRef(null);

  const schedulePopup = () => {
    const nextPopup = Math.random() * 4000 + 3000;
    timeoutRef.current = setTimeout(() => {
      setModalVisible(true);
      schedulePopup();
    }, nextPopup);
  };

  useEffect(() => {
    schedulePopup();
    return () => clearTimeout(timeoutRef.current);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    showToast('Form submitted successfully! You survived.', 'success');
    e.target.reset();
  };

  return (
    <section className="page max-w-4xl mx-auto px-6 py-20 md:py-32 animate-fade-in-up relative">
      <div className="mb-8">
        <Link to="/rpa" className="text-sky-400 hover:text-sky-300 mb-4 inline-block">
          &larr; Back to Playground
        </Link>
        <h2 className="text-3xl font-bold text-white">The Pop-up Minefield</h2>
        <p className="text-slate-400 mt-2">
          Can you fill out this form without getting distracted?{' '}
          <span className="text-yellow-500">Handle the interruptions!</span>
        </p>
      </div>

      <div className="rounded-2xl border border-slate-800 bg-slate-900/50 p-8 relative overflow-hidden">
        <form id="minefield-form" onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={i} className="flex flex-col">
              <label className="text-sm text-slate-400 mb-1">Field {i + 1}</label>
              <input
                type="text"
                required
                className="bg-slate-800 border border-slate-700 rounded px-3 py-2 text-white focus:outline-none focus:border-sky-500"
                placeholder={`Value ${i + 1}`}
              />
            </div>
          ))}
          <div className="flex flex-col md:col-span-2">
            <label className="text-sm text-slate-400 mb-1">Notes</label>
            <textarea
              required
              className="bg-slate-800 border border-slate-700 rounded px-3 py-2 text-white focus:outline-none focus:border-sky-500 h-24"
              placeholder="Enter detailed notes here..."
            />
          </div>
          <div className="md:col-span-2 mt-4">
            <button type="submit" className="w-full py-3 bg-sky-600 hover:bg-sky-500 text-white rounded-lg font-bold transition-colors">
              Submit Form
            </button>
          </div>
        </form>

        {/* The Annoying Modal */}
        {modalVisible && (
          <div id="modal-overlay" className="absolute inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center animate-fade-in">
            <div className="bg-slate-800 border border-slate-700 p-8 rounded-2xl max-w-sm text-center shadow-2xl">
              <div className="text-4xl mb-4">{'\u{1F381}'}</div>
              <h3 className="text-2xl font-bold text-white mb-2">Wait! Special Offer!</h3>
              <p className="text-slate-300 mb-6">
                We've been trying to reach you about your car's extended warranty.
              </p>
              <button
                id="modal-close"
                onClick={() => setModalVisible(false)}
                className="px-6 py-2 bg-red-500 hover:bg-red-600 text-white rounded-full font-bold transition-colors"
              >
                NO THANKS
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
