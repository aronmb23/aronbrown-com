
import { showToast } from '../../utils/Toast.js';

export function RetroERP() {
    // Initialize state for entries
    let entries = [];

    setTimeout(() => {
        const form = document.getElementById('retro-form');
        const tableBody = document.getElementById('retro-table-body');
        const saveBtn = document.getElementById('save-btn');

        function renderTable() {
            if (!tableBody) return;
            if (entries.length === 0) {
                tableBody.innerHTML = '<tr><td colspan="5" class="p-2 text-center text-gray-500 italic">No entries found.</td></tr>';
                return;
            }

            tableBody.innerHTML = entries.map(entry => `
            <tr class="border-b border-gray-400 font-mono text-sm">
                <td class="p-2 border-r border-gray-400">${entry.invoice}</td>
                <td class="p-2 border-r border-gray-400">${entry.date}</td>
                <td class="p-2 border-r border-gray-400">${entry.vendor}</td>
                <td class="p-2 border-r border-gray-400 text-right">${entry.amount}</td>
                <td class="p-2 text-center">${entry.status}</td>
            </tr>
        `).join('');
        }

        if (saveBtn) {
            saveBtn.addEventListener('click', (e) => {
                e.preventDefault();

                const invoice = document.getElementById('inv-num').value;
                const date = document.getElementById('inv-date').value;
                const vendor = document.getElementById('inv-vendor').value;
                const amount = document.getElementById('inv-amount').value;
                const status = document.getElementById('inv-status').value;

                if (!invoice || !date || !vendor || !amount) {
                    showToast('Please fill in all fields!', 'error');
                    return;
                }

                entries.push({ invoice, date, vendor, amount, status });
                renderTable();

                // Clear form
                document.getElementById('inv-num').value = '';
                document.getElementById('inv-date').value = '';
                document.getElementById('inv-vendor').value = '';
                document.getElementById('inv-amount').value = '';
                document.getElementById('inv-status').value = 'Pending';

                showToast('Entry saved to database.', 'success');
            });
        }

        renderTable();
    }, 100);

    return `
    <section class="page min-h-screen bg-[#008080] p-4 font-sans">
      <div class="max-w-4xl mx-auto">
        <button class="nav-link text-white font-bold mb-4 flex items-center gap-2 hover:bg-[#000080] px-2 py-1" data-page="rpa">
          ← Exit to Windows
        </button>

        <!-- Window Container -->
        <div class="bg-[#c0c0c0] border-2 border-white border-r-gray-800 border-b-gray-800 shadow-xl p-1">
            <!-- Title Bar -->
            <div class="bg-[#000080] px-2 py-1 flex justify-between items-center text-white mb-4">
                <div class="font-bold tracking-wide flex items-center gap-2">
                    <span class="inline-block w-4 h-4 bg-white text-[#000080] text-xs font-bold text-center leading-4">A</span>
                    Acme Accounting v1.0
                </div>
                <div class="flex gap-1">
                    <button class="w-5 h-5 bg-[#c0c0c0] border border-white border-r-gray-800 border-b-gray-800 text-black text-xs font-bold leading-4 flex items-center justify-center">_</button>
                    <button class="w-5 h-5 bg-[#c0c0c0] border border-white border-r-gray-800 border-b-gray-800 text-black text-xs font-bold leading-4 flex items-center justify-center">□</button>
                    <button class="w-5 h-5 bg-[#c0c0c0] border border-white border-r-gray-800 border-b-gray-800 text-black text-xs font-bold leading-4 flex items-center justify-center">×</button>
                </div>
            </div>

            <!-- Menu Bar -->
            <div class="flex gap-4 px-2 mb-4 text-black text-sm">
                <span class="underline cursor-pointer">F</span>ile
                <span class="underline cursor-pointer">E</span>dit
                <span class="underline cursor-pointer">V</span>iew
                <span class="underline cursor-pointer">H</span>elp
            </div>

            <!-- Main Content Area -->
            <div class="p-4 border-2 border-gray-600 border-r-white border-b-white bg-[#c0c0c0]">
                
                <!-- Form Group -->
                <fieldset class="border-2 border-white border-r-gray-600 border-b-gray-600 p-4 mb-6 relative">
                    <legend class="px-2 text-black">New Invoice Entry</legend>
                    
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-black">
                        <div class="flex flex-col">
                            <label for="inv-num" class="mb-1 text-sm">Invoice #:</label>
                            <input type="text" id="inv-num" class="bg-white border-2 border-gray-600 border-r-white border-b-white px-2 py-1 text-black font-mono focus:outline-none focus:bg-yellow-100">
                        </div>
                        
                        <div class="flex flex-col">
                            <label for="inv-date" class="mb-1 text-sm">Date:</label>
                            <input type="date" id="inv-date" class="bg-white border-2 border-gray-600 border-r-white border-b-white px-2 py-1 text-black font-mono focus:outline-none focus:bg-yellow-100">
                        </div>
                        
                        <div class="flex flex-col md:col-span-2">
                            <label for="inv-vendor" class="mb-1 text-sm">Vendor Name:</label>
                            <input type="text" id="inv-vendor" class="bg-white border-2 border-gray-600 border-r-white border-b-white px-2 py-1 text-black font-mono focus:outline-none focus:bg-yellow-100">
                        </div>
                        
                        <div class="flex flex-col">
                            <label for="inv-amount" class="mb-1 text-sm">Amount:</label>
                            <input type="text" id="inv-amount" class="bg-white border-2 border-gray-600 border-r-white border-b-white px-2 py-1 text-black font-mono focus:outline-none focus:bg-yellow-100" placeholder="$0.00">
                        </div>
                        
                        <div class="flex flex-col">
                            <label for="inv-status" class="mb-1 text-sm">Status:</label>
                            <select id="inv-status" class="bg-white border-2 border-gray-600 border-r-white border-b-white px-2 py-1 text-black font-mono focus:outline-none focus:bg-yellow-100 h-[34px]">
                                <option value="Pending">Pending</option>
                                <option value="Paid">Paid</option>
                                <option value="Overdue">Overdue</option>
                            </select>
                        </div>
                    </div>

                    <div class="mt-6 flex justify-end gap-4">
                        <button id="save-btn" class="px-6 py-1 bg-[#c0c0c0] border-2 border-white border-r-gray-800 border-b-gray-800 text-black active:border-gray-800 active:border-r-white active:border-b-white active:translate-y-px">
                            Save Entry
                        </button>
                    </div>
                </fieldset>

                <!-- Data Table -->
                <div class="bg-white border-2 border-gray-800 border-r-white border-b-white h-64 overflow-y-auto">
                    <table class="w-full text-left border-collapse text-black">
                        <thead class="bg-[#000080] text-white sticky top-0">
                            <tr>
                                <th class="p-2 border-r border-white text-sm font-normal">Invoice #</th>
                                <th class="p-2 border-r border-white text-sm font-normal">Date</th>
                                <th class="p-2 border-r border-white text-sm font-normal">Vendor</th>
                                <th class="p-2 border-r border-white text-sm font-normal text-right">Amount</th>
                                <th class="p-2 text-sm font-normal text-center">Status</th>
                            </tr>
                        </thead>
                        <tbody id="retro-table-body">
                            <!-- Entries go here -->
                        </tbody>
                    </table>
                </div>
                
                <div class="mt-2 text-xs text-gray-600">
                    Ready.
                </div>
            </div>
        </div>
      </div>
    </section>
  `;
}
