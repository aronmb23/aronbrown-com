import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useToast } from '../../utils/Toast.jsx';

export default function RetroERP() {
  const showToast = useToast();
  const [entries, setEntries] = useState([]);
  const [form, setForm] = useState({ invoice: '', date: '', vendor: '', amount: '', status: 'Pending' });

  const handleChange = (field, value) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSave = (e) => {
    e.preventDefault();
    if (!form.invoice || !form.date || !form.vendor || !form.amount) {
      showToast('Please fill in all fields!', 'error');
      return;
    }
    setEntries((prev) => [...prev, { ...form }]);
    setForm({ invoice: '', date: '', vendor: '', amount: '', status: 'Pending' });
    showToast('Entry saved to database.', 'success');
  };

  return (
    <section className="page min-h-screen bg-[#008080] p-4 font-sans">
      <div className="max-w-4xl mx-auto">
        <Link to="/rpa" className="text-white font-bold mb-4 flex items-center gap-2 hover:bg-[#000080] px-2 py-1 inline-flex">
          &larr; Exit to Windows
        </Link>

        {/* Window Container */}
        <div className="bg-[#c0c0c0] border-2 border-white border-r-gray-800 border-b-gray-800 shadow-xl p-1">
          {/* Title Bar */}
          <div className="bg-[#000080] px-2 py-1 flex justify-between items-center text-white mb-4">
            <div className="font-bold tracking-wide flex items-center gap-2">
              <span className="inline-block w-4 h-4 bg-white text-[#000080] text-xs font-bold text-center leading-4">A</span>
              Acme Accounting v1.0
            </div>
            <div className="flex gap-1">
              <button className="w-5 h-5 bg-[#c0c0c0] border border-white border-r-gray-800 border-b-gray-800 text-black text-xs font-bold leading-4 flex items-center justify-center">_</button>
              <button className="w-5 h-5 bg-[#c0c0c0] border border-white border-r-gray-800 border-b-gray-800 text-black text-xs font-bold leading-4 flex items-center justify-center">{'\u25A1'}</button>
              <button className="w-5 h-5 bg-[#c0c0c0] border border-white border-r-gray-800 border-b-gray-800 text-black text-xs font-bold leading-4 flex items-center justify-center">{'\u00D7'}</button>
            </div>
          </div>

          {/* Menu Bar */}
          <div className="flex gap-4 px-2 mb-4 text-black text-sm">
            <span><span className="underline cursor-pointer">F</span>ile</span>
            <span><span className="underline cursor-pointer">E</span>dit</span>
            <span><span className="underline cursor-pointer">V</span>iew</span>
            <span><span className="underline cursor-pointer">H</span>elp</span>
          </div>

          {/* Main Content Area */}
          <div className="p-4 border-2 border-gray-600 border-r-white border-b-white bg-[#c0c0c0]">
            <fieldset className="border-2 border-white border-r-gray-600 border-b-gray-600 p-4 mb-6 relative">
              <legend className="px-2 text-black">New Invoice Entry</legend>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-black">
                <div className="flex flex-col">
                  <label htmlFor="inv-num" className="mb-1 text-sm">Invoice #:</label>
                  <input type="text" id="inv-num" value={form.invoice} onChange={(e) => handleChange('invoice', e.target.value)} className="bg-white border-2 border-gray-600 border-r-white border-b-white px-2 py-1 text-black font-mono focus:outline-none focus:bg-yellow-100" />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="inv-date" className="mb-1 text-sm">Date:</label>
                  <input type="date" id="inv-date" value={form.date} onChange={(e) => handleChange('date', e.target.value)} className="bg-white border-2 border-gray-600 border-r-white border-b-white px-2 py-1 text-black font-mono focus:outline-none focus:bg-yellow-100" />
                </div>
                <div className="flex flex-col md:col-span-2">
                  <label htmlFor="inv-vendor" className="mb-1 text-sm">Vendor Name:</label>
                  <input type="text" id="inv-vendor" value={form.vendor} onChange={(e) => handleChange('vendor', e.target.value)} className="bg-white border-2 border-gray-600 border-r-white border-b-white px-2 py-1 text-black font-mono focus:outline-none focus:bg-yellow-100" />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="inv-amount" className="mb-1 text-sm">Amount:</label>
                  <input type="text" id="inv-amount" value={form.amount} onChange={(e) => handleChange('amount', e.target.value)} className="bg-white border-2 border-gray-600 border-r-white border-b-white px-2 py-1 text-black font-mono focus:outline-none focus:bg-yellow-100" placeholder="$0.00" />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="inv-status" className="mb-1 text-sm">Status:</label>
                  <select id="inv-status" value={form.status} onChange={(e) => handleChange('status', e.target.value)} className="bg-white border-2 border-gray-600 border-r-white border-b-white px-2 py-1 text-black font-mono focus:outline-none focus:bg-yellow-100 h-[34px]">
                    <option value="Pending">Pending</option>
                    <option value="Paid">Paid</option>
                    <option value="Overdue">Overdue</option>
                  </select>
                </div>
              </div>
              <div className="mt-6 flex justify-end gap-4">
                <button id="save-btn" onClick={handleSave} className="px-6 py-1 bg-[#c0c0c0] border-2 border-white border-r-gray-800 border-b-gray-800 text-black active:border-gray-800 active:border-r-white active:border-b-white active:translate-y-px">
                  Save Entry
                </button>
              </div>
            </fieldset>

            <div className="bg-white border-2 border-gray-800 border-r-white border-b-white h-64 overflow-y-auto">
              <table className="w-full text-left border-collapse text-black">
                <thead className="bg-[#000080] text-white sticky top-0">
                  <tr>
                    <th className="p-2 border-r border-white text-sm font-normal">Invoice #</th>
                    <th className="p-2 border-r border-white text-sm font-normal">Date</th>
                    <th className="p-2 border-r border-white text-sm font-normal">Vendor</th>
                    <th className="p-2 border-r border-white text-sm font-normal text-right">Amount</th>
                    <th className="p-2 text-sm font-normal text-center">Status</th>
                  </tr>
                </thead>
                <tbody id="retro-table-body">
                  {entries.length === 0 ? (
                    <tr><td colSpan="5" className="p-2 text-center text-gray-500 italic">No entries found.</td></tr>
                  ) : (
                    entries.map((entry, i) => (
                      <tr key={i} className="border-b border-gray-400 font-mono text-sm">
                        <td className="p-2 border-r border-gray-400">{entry.invoice}</td>
                        <td className="p-2 border-r border-gray-400">{entry.date}</td>
                        <td className="p-2 border-r border-gray-400">{entry.vendor}</td>
                        <td className="p-2 border-r border-gray-400 text-right">{entry.amount}</td>
                        <td className="p-2 text-center">{entry.status}</td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
            <div className="mt-2 text-xs text-gray-600">Ready.</div>
          </div>
        </div>
      </div>
    </section>
  );
}
