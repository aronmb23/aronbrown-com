const vendors = [
  'Acme Corp',
  'Globex Industries',
  'Initech',
  'Umbrella Logistics',
  'Wayne Enterprises',
  'Stark Supply',
  'Oscorp Labs',
  'Wonka Imports',
  'Soylent Manufacturing',
  'Tyrell Systems'
];

const statusOptions = ['Paid', 'Pending', 'Overdue', 'Processing'];

const dateFormats = [
  date => date.toLocaleDateString('en-US'),
  date => date.toLocaleDateString('en-GB'),
  date => date.toISOString().split('T')[0],
  date => date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
];

const currencyFormats = amount => {
  const formats = [
    value => `$${value.toLocaleString('en-US', { minimumFractionDigits: 2 })}`,
    value => `USD ${value.toLocaleString('en-US')}`,
    value => value.toLocaleString('de-DE', { style: 'currency', currency: 'EUR' })
  ];

  const formatter = formats[Math.floor(Math.random() * formats.length)];
  return formatter(amount);
};

function generateInvoices(count = 15) {
  const now = new Date();

  return Array.from({ length: count }, (_, index) => {
    const randomDaysAgo = Math.floor(Math.random() * 365);
    const invoiceDate = new Date(now);
    invoiceDate.setDate(now.getDate() - randomDaysAgo);

    const amount = Math.floor(Math.random() * 9500) + 250;

    return {
      number: `INV-${Math.floor(Math.random() * 90000 + 10000)}`,
      date: dateFormats[Math.floor(Math.random() * dateFormats.length)](invoiceDate),
      vendor: vendors[Math.floor(Math.random() * vendors.length)],
      amount: currencyFormats(amount),
      status: statusOptions[Math.floor(Math.random() * statusOptions.length)]
    };
  });
}

export function InvoiceTable() {
  const invoices = generateInvoices(15);

  setTimeout(() => {
    const invoiceBody = document.getElementById('invoice-body');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    const pageInfo = document.getElementById('page-info');

    let currentPage = 1;
    const itemsPerPage = 10;
    const totalItems = invoices.length;
    const totalPages = Math.ceil(totalItems / itemsPerPage);

    function renderTable() {
      invoiceBody.innerHTML = '';

      const start = (currentPage - 1) * itemsPerPage;
      const end = start + itemsPerPage;
      const pageItems = invoices.slice(start, end);

      pageItems.forEach(inv => {
        const row = document.createElement('tr');
        row.innerHTML = `
          <td class="px-6 py-4">${inv.number}</td>
          <td class="px-6 py-4">${inv.date}</td>
          <td class="px-6 py-4">${inv.vendor}</td>
          <td class="px-6 py-4 text-right">${inv.amount}</td>
          <td class="px-6 py-4">${inv.status}</td>
        `;
        invoiceBody.appendChild(row);
      });

      // Page indicator (useful for humans and RPA)
      pageInfo.textContent = `Page ${currentPage} of ${totalPages}`;

      // -------------------------------
      // PREVIOUS BUTTON STATE
      // -------------------------------
      if (currentPage === 1) {
        prevBtn.disabled = true;
        prevBtn.setAttribute('disabled', 'disabled');
        prevBtn.classList.add('opacity-50', 'cursor-not-allowed');
        prevBtn.setAttribute('aria-disabled', 'true');
      } else {
        prevBtn.disabled = false;
        prevBtn.removeAttribute('disabled');
        prevBtn.classList.remove('opacity-50', 'cursor-not-allowed');
        prevBtn.setAttribute('aria-disabled', 'false');
      }

      // -------------------------------
      // NEXT BUTTON STATE (RPA SAFE)
      // -------------------------------
      if ((currentPage * itemsPerPage) >= totalItems) {
        // HARD stop for Power Automate Desktop
        nextBtn.disabled = true;
        nextBtn.setAttribute('disabled', 'disabled');

        // Optional visual / accessibility hints
        nextBtn.classList.add('opacity-50', 'cursor-not-allowed');
        nextBtn.setAttribute('aria-disabled', 'true');
        nextBtn.setAttribute('data-disabled', 'true');
      } else {
        nextBtn.disabled = false;
        nextBtn.removeAttribute('disabled');

        nextBtn.classList.remove('opacity-50', 'cursor-not-allowed');
        nextBtn.setAttribute('aria-disabled', 'false');
        nextBtn.setAttribute('data-disabled', 'false');
      }
    }

    // -------------------------------
    // EVENT HANDLERS
    // -------------------------------
    prevBtn.addEventListener('click', () => {
      if (currentPage > 1) {
        currentPage--;
        renderTable();
      }
    });

    nextBtn.addEventListener('click', () => {
      if (!nextBtn.disabled) {
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
              <tr>
                <td colspan="5" class="px-6 py-4 text-center text-slate-500">
                  Loading data...
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <!-- Pagination -->
        <div class="flex items-center justify-between border-t border-slate-800 bg-slate-950 px-6 py-3">
          <div class="text-sm text-slate-400" id="page-info">Loading...</div>
          <div class="flex gap-2">
            <button id="prev-btn"
                    class="rounded border border-slate-700 px-3 py-1 text-sm text-slate-400 hover:bg-slate-800 transition-colors">
              Previous
            </button>
            <button id="next-btn"
                    class="rounded border border-slate-700 px-3 py-1 text-sm text-slate-400 hover:bg-slate-800 transition-colors">
              Next
            </button>
          </div>
        </div>
      </div>
    </section>
  `;
}
