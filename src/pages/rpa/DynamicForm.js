
import { showToast } from '../../utils/Toast.js';

export function DynamicForm() {
  // Generate random strings for IDs
  const randomId = () => Math.random().toString(36).substring(2, 10);
  const firstNameId = randomId();
  const lastNameId = randomId();
  const emailId = randomId();
  const submitId = randomId();

  setTimeout(() => {
    const btn = document.getElementById(submitId);
    if (btn) {
      btn.addEventListener('click', () => {
        const fName = document.getElementById(firstNameId);
        const lName = document.getElementById(lastNameId);
        const email = document.getElementById(emailId);

        // Clear fields
        if (fName) fName.value = '';
        if (lName) lName.value = '';
        if (email) email.value = '';

        showToast('Form submitted successfully!', 'success');
      });
    }
  }, 100);

  return `
    <section class="page max-w-4xl mx-auto px-6 py-20 md:py-32 animate-fade-in-up">
      <div class="mb-8">
        <button class="nav-link text-sky-400 hover:text-sky-300 mb-4" data-page="rpa">
          ← Back to Playground
        </button>
        <h2 class="text-3xl font-bold text-white">The Shapeshifter</h2>
        <p class="text-slate-400 mt-2">
          The IDs of these fields change every time you reload the page. 
          <span class="text-yellow-500">Don't rely on them!</span>
        </p>
      </div>

      <div class="rounded-2xl border border-slate-800 bg-slate-900/50 p-8">
        <div class="space-y-6">
          <div>
            <label for="${firstNameId}" class="block text-sm font-medium text-slate-300 mb-2">First Name</label>
            <input type="text" id="${firstNameId}" class="w-full rounded-lg bg-slate-950 border border-slate-700 px-4 py-2 text-white focus:border-sky-500 focus:outline-none" placeholder="John">
          </div>
          
          <div>
            <label for="${lastNameId}" class="block text-sm font-medium text-slate-300 mb-2">Last Name</label>
            <input type="text" id="${lastNameId}" class="w-full rounded-lg bg-slate-950 border border-slate-700 px-4 py-2 text-white focus:border-sky-500 focus:outline-none" placeholder="Doe">
          </div>

          <div>
            <label for="${emailId}" class="block text-sm font-medium text-slate-300 mb-2">Email Address</label>
            <input type="email" id="${emailId}" class="w-full rounded-lg bg-slate-950 border border-slate-700 px-4 py-2 text-white focus:border-sky-500 focus:outline-none" placeholder="john@example.com">
          </div>

          <button id="${submitId}" class="w-full rounded-lg bg-sky-500 py-3 font-bold text-white hover:bg-sky-400 transition-colors">
            Submit
          </button>
        </div>
      </div>
      
      <div class="mt-8 p-4 rounded-lg bg-slate-800/50 border border-slate-700 text-sm text-slate-400">
        <strong>Hint:</strong> Use "Anchor Base" in UiPath or relative XPaths (e.g., <code>//label[text()='First Name']/following-sibling::input</code>).
      </div>
    </section>
  `;
}
