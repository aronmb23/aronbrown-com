import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';

const vendors = ['Acme Corp', 'Globex', 'Soylent Corp', 'Umbrella Inc', 'Stark Ind', 'Cyberdyne', 'Massive Dynamic', 'Wayne Ent'];
const statuses = ['Paid', 'Pending', 'Overdue'];

function generateInvoices(count) {
  return Array.from({ length: count }, () => {
    const date = new Date(Date.now() - Math.floor(Math.random() * 10000000000));
    const status = statuses[Math.floor(Math.random() * statuses.length)];
    let dateStr;
    const format = Math.random();
    if (format < 0.33) dateStr = date.toISOString().split('T')[0];
    else if (format < 0.66) dateStr = date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
    else dateStr = `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;

    return {
      id: `INV-${Math.floor(Math.random() * 10000).toString().padStart(4, '0')}`,
      date: dateStr,
      vendor: vendors[Math.floor(Math.random() * vendors.length)],
      amount: `$${(Math.random() * 5000).toFixed(2)}`,
      status,
    };
  });
}

export default function InvoiceTable() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
  const totalItems = 15;
  const allInvoices = useMemo(() => generateInvoices(totalItems), []);

  const start = (currentPage - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  const pageItems = allInvoices.slice(start, end);
  const canPrev = currentPage > 1;
  const canNext = end < totalItems;

  const statusColor = (s) => {
    if (s === 'Paid') return 'bg-green-500/10 text-green-400 border-green-500/20';
    if (s === 'Pending') return 'bg-yellow-500/10 text-yellow-400 border-yellow-500/20';
    return 'bg-red-500/10 text-red-400 border-red-500/20';
  };

  return (
    <section className="page max-w-5xl mx-auto px-6 py-20 md:py-32 animate-fade-in-up">
      <div className="mb-8">
        <Link to="/rpa" className="text-sky-400 hover:text-sky-300 mb-4 inline-block">
          &larr; Back to Playground
        </Link>
        <h2 className="text-3xl font-bold text-white">The Data Mine</h2>
        <p className="text-slate-400 mt-2">
          Scrape this table. The data is randomized on every reload, and the formats vary.
        </p>
      </div>

      <div className="rounded-2xl border border-slate-800 bg-slate-900/50 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-slate-950 text-xs uppercase text-slate-400">
              <tr>
                <th className="px-6 py-3 font-medium tracking-wider">Invoice #</th>
                <th className="px-6 py-3 font-medium tracking-wider">Date</th>
                <th className="px-6 py-3 font-medium tracking-wider">Vendor</th>
                <th className="px-6 py-3 font-medium tracking-wider text-right">Amount</th>
                <th className="px-6 py-3 font-medium tracking-wider">Status</th>
              </tr>
            </thead>
            <tbody id="invoice-body" className="divide-y divide-slate-800">
              {pageItems.map((inv) => (
                <tr key={inv.id} className="border-b border-slate-800 hover:bg-slate-800/30">
                  <td className="px-6 py-4 text-sm text-slate-300 font-mono">{inv.id}</td>
                  <td className="px-6 py-4 text-sm text-slate-300">{inv.date}</td>
                  <td className="px-6 py-4 text-sm text-white font-medium">{inv.vendor}</td>
                  <td className="px-6 py-4 text-sm text-slate-300 text-right">{inv.amount}</td>
                  <td className="px-6 py-4 text-sm">
                    <span className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-medium ${statusColor(inv.status)}`}>
                      {inv.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="flex items-center justify-between border-t border-slate-800 bg-slate-950 px-6 py-3">
          <div className="text-sm text-slate-400" id="page-info">
            Showing <span className="font-medium text-white">{start + 1}</span> to{' '}
            <span className="font-medium text-white">{Math.min(end, totalItems)}</span> of{' '}
            <span className="font-medium text-white">{totalItems}</span> results
          </div>
          <div className="flex gap-2">
            <button
              id="prev-btn"
              disabled={!canPrev}
              onClick={() => setCurrentPage((p) => p - 1)}
              className={`rounded border border-slate-700 px-3 py-1 text-sm text-slate-400 hover:bg-slate-800 transition-colors ${!canPrev ? 'opacity-50 cursor-not-allowed' : ''}`}
            >
              Previous
            </button>
            <button
              id="next-btn"
              disabled={!canNext}
              aria-disabled={!canNext}
              data-disabled={!canNext}
              onClick={() => setCurrentPage((p) => p + 1)}
              className={`rounded border border-slate-700 px-3 py-1 text-sm text-slate-400 hover:bg-slate-800 transition-colors ${!canNext ? 'opacity-50 cursor-not-allowed' : ''}`}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
