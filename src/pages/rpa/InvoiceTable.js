
export function InvoiceTable() {
  // Random Data Generators
  const vendors = ['Acme Corp', 'Globex', 'Soylent Corp', 'Umbrella Inc', 'Stark Ind', 'Cyberdyne', 'Massive Dynamic', 'Wayne Ent'];
  const statuses = ['Paid', 'Pending', 'Overdue'];

  const generateInvoices = (count) => {
    return Array.from({ length: count }, (_, i) => {
      const date = new Date(Date.now() - Math.floor(Math.random() * 10000000000));
      const status = statuses[Math.floor(Math.random() * statuses.length)];

      // Randomize date format
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
        status: status
      };
    });
  };

  // Setup pagination logic
  // Since we are in a vanilla JS setup and re-rendering the whole component string, 
  // we need to handle state outside or attach listeners that modify the DOM directly.
  // For this "challenge", we'll generate a large dataset and simulate pagination in the DOM.

  // We'll attach the logic after render using a timeout, similar to other components.
  setTimeout(() => {
    const tableBody = document.getElementById('invoice-body');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    const pageInfo = document.getElementById('page-info');

    if (!tableBody) return;

    let currentPage = 1;
    const itemsPerPage = 5;
    const totalItems = 15;
    const allInvoices = generateInvoices(totalItems);

    function renderTable() {
      const start = (currentPage - 1) * itemsPerPage;
      const end = start + itemsPerPage;
      const pageItems = allInvoices.slice(start, end);

      tableBody.innerHTML = pageItems.map(inv => {
        let statusColor = 'bg-green-500/10 text-green-400 border-green-500/20';
        if (inv.status === 'Pending') statusColor = 'bg-yellow-500/10 text-yellow-400 border-yellow-500/20';
        if (inv.status === 'Overdue') statusColor = 'bg-red-500/10 text-red-400 border-red-500/20';

        return `
              <tr class="border-b border-slate-800 hover:bg-slate-800/30">
                <td class="px-6 py-4 text-sm text-slate-300 font-mono">${inv.id}</td>
                <td class="px-6 py-4 text-sm text-slate-300">${inv.date}</td>
                <td class="px-6 py-4 text-sm text-white font-medium">${inv.vendor}</td>
                <td class="px-6 py-4 text-sm text-slate-300 text-right">${inv.amount}</td>
                <td class="px-6 py-4 text-sm">
                  <span class="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-medium ${statusColor}">
                    ${inv.status}
                  </span>
                </td>
              </tr>
            `;
      }).join('');

      // Update controls
      pageInfo.innerHTML = `Showing <span class="font-medium text-white">${start + 1}</span> to <span class="font-medium text-white">${Math.min(end, totalItems)}</span> of <span class="font-medium text-white">${totalItems}</span> results`;
      prevBtn.disabled = currentPage === 1;
      nextBtn.disabled = end >= totalItems;

      if (currentPage === 1) prevBtn.classList.add('opacity-50', 'cursor-not-allowed');
      else prevBtn.classList.remove('opacity-50', 'cursor-not-allowed');

      if (end >= totalItems) {
        nextBtn.classList.add('opacity-50', 'cursor-not-allowed');
        nextBtn.disabled = true;
        nextBtn.setAttribute('disabled', 'true');
        nextBtn.setAttribute('aria-disabled', 'true');
        nextBtn.setAttribute('data-disabled', 'true');
      } else {
        nextBtn.classList.remove('opacity-50', 'cursor-not-allowed');
        nextBtn.disabled = false;
        nextBtn.removeAttribute('disabled');
        nextBtn.setAttribute('aria-disabled', 'false');
        nextBtn.setAttribute('data-disabled', 'false');
      }
    }

    prevBtn.addEventListener('click', () => {
      if (currentPage > 1) {
        currentPage--;
        renderTable();
      }
    });

    nextBtn.addEventListener('click', () => {
      if ((currentPage * itemsPerPage) < totalItems) {
        currentPage++;
        renderTable();
      }
    });

    // Initial render
    renderTable();

  }, 100);

  return `
    <section class="page max-w-5xl mx-auto px-6 py-20 md:py-32 animate-fade-in-up">
      <div class="mb-8">
        <button class="nav-link text-sky-400 hover:text-sky-300 mb-4" data-page="rpa">
          ← Back to Playground
        </button>
        <h2 class="text-3xl font-bold text-white">The Data Mine</h2>
        <p class="text-slate-400 mt-2">
          Scrape this table. The data is randomized on every reload, and the formats vary.
        </p>
      </div>

      <div class="rounded-2xl border border-slate-800 bg-slate-900/50 overflow-hidden">
        <div class="overflow-x-auto">
          <table class="w-full text-left">
            <thead class="bg-slate-950 text-xs uppercase text-slate-400">
              <tr>
                <th class="px-6 py-3 font-medium tracking-wider">Invoice #</th>
                <th class="px-6 py-3 font-medium tracking-wider">Date</th>
                <th class="px-6 py-3 font-medium tracking-wider">Vendor</th>
                <th class="px-6 py-3 font-medium tracking-wider text-right">Amount</th>
                <th class="px-6 py-3 font-medium tracking-wider">Status</th>
              </tr>
            </thead>
            <tbody id="invoice-body" class="divide-y divide-slate-800">
              <!-- Content rendered via JS -->
              <tr><td colspan="5" class="px-6 py-4 text-center text-slate-500">Loading data...</td></tr>
            </tbody>
          </table>
        </div>
        
        <!-- Pagination -->
        <div class="flex items-center justify-between border-t border-slate-800 bg-slate-950 px-6 py-3">
            <div class="text-sm text-slate-400" id="page-info">
                Loading...
            </div>
            <div class="flex gap-2">
                <button id="prev-btn" class="rounded border border-slate-700 px-3 py-1 text-sm text-slate-400 hover:bg-slate-800 transition-colors">Previous</button>
                <button id="next-btn" class="rounded border border-slate-700 px-3 py-1 text-sm text-slate-400 hover:bg-slate-800 transition-colors">Next</button>
            </div>
        </div>
      </div>
    </section>
  `;
}
