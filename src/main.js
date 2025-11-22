import './style.css';
import { Header, setupHeader } from './components/Header.js';
import { Footer } from './components/Footer.js';
import { Home } from './pages/Home.js';
import { About } from './pages/About.js';
import { Work } from './pages/Work.js';
import { Projects } from './pages/Projects.js';
import { Contact } from './pages/Contact.js';

const app = document.querySelector('#app');

// State
let currentPage = 'home';

// Routes
const routes = {
  home: Home,
  about: About,
  work: Work,
  projects: Projects,
  contact: Contact,
};

function render() {
  const PageComponent = routes[currentPage] || Home;

  app.innerHTML = `
    <div class="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-sky-500/30 selection:text-sky-200">
      ${Header()}
      
      <main class="flex-1 pt-16 relative overflow-hidden">
        <!-- Background Elements -->
        <div class="fixed inset-0 z-0 pointer-events-none">
            <div class="absolute top-0 left-1/4 w-96 h-96 bg-sky-900/10 rounded-full mix-blend-screen filter blur-3xl opacity-30 animate-blob"></div>
            <div class="absolute top-0 right-1/4 w-96 h-96 bg-indigo-900/10 rounded-full mix-blend-screen filter blur-3xl opacity-30 animate-blob animation-delay-200"></div>
            <div class="absolute -bottom-32 left-1/3 w-96 h-96 bg-purple-900/10 rounded-full mix-blend-screen filter blur-3xl opacity-30 animate-blob animation-delay-400"></div>
        </div>

        <div class="relative z-10">
            ${PageComponent()}
        </div>
      </main>

      ${Footer()}
    </div>
  `;

  // Re-attach event listeners after render
  setupHeader(navigateTo);

  // Update active states in header (handled in setupHeader mostly, but we can force it if needed)
  // Scroll to top on page change
  window.scrollTo(0, 0);
}

function navigateTo(page) {
  if (routes[page]) {
    currentPage = page;
    render();
  }
}

// Initial render
render();
