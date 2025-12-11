import './style.css';
import { Header, setupHeader } from './components/Header.js';
import { Footer } from './components/Footer.js';
import { SpotifyWidget, setupSpotifyWidget } from './components/SpotifyWidget.js';
import { Home } from './pages/Home.js';
import { About } from './pages/About.js';
import { Work } from './pages/Work.js';
import { Projects } from './pages/Projects.js';
import { Contact } from './pages/Contact.js';
import { RPADashboard } from './pages/rpa/RPADashboard.js';
import { DynamicForm } from './pages/rpa/DynamicForm.js';
import { InvoiceTable } from './pages/rpa/InvoiceTable.js';
import { WaitTest } from './pages/rpa/WaitTest.js';
import { ShadowDom } from './pages/rpa/ShadowDom.js';
import { RetroERP } from './pages/rpa/RetroERP.js';
import { PopupMinefield } from './pages/rpa/PopupMinefield.js';
import { IframeInception } from './pages/rpa/IframeInception.js';
import { DragDrop } from './pages/rpa/DragDrop.js';
import { TwoFASprint } from './pages/rpa/TwoFASprint.js';

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
  rpa: RPADashboard,
  'rpa/dynamic-form': DynamicForm,
  'rpa/invoice-table': InvoiceTable,
  'rpa/wait-test': WaitTest,
  'rpa/shadow-dom': ShadowDom,
  'rpa/retro-erp': RetroERP,
  'rpa/popup-minefield': PopupMinefield,
  'rpa/iframe-inception': IframeInception,
  'rpa/drag-drop': DragDrop,
  'rpa/2fa-sprint': TwoFASprint
};

function render() {
  const PageComponent = routes[currentPage] || Home;

  app.innerHTML = `
    <div class="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-sky-500/30 selection:text-sky-200">
      ${Header()}
      
      <main class="flex-1 pt-16 relative overflow-hidden">
        <!-- Background Elements -->
        <div class="fixed inset-0 z-0 pointer-events-none">
            <div class="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-purple-500/10 blur-[100px] animate-blob"></div>
            <div class="absolute top-[20%] right-[-10%] w-[30%] h-[30%] rounded-full bg-sky-500/10 blur-[100px] animate-blob animation-delay-2000"></div>
            <div class="absolute bottom-[-10%] left-[20%] w-[35%] h-[35%] rounded-full bg-indigo-500/10 blur-[100px] animate-blob animation-delay-4000"></div>
        </div>

        <div class="relative z-10">
            ${SpotifyWidget()}
            ${PageComponent()}
        </div>
      </main>

      ${Footer()}
    </div>
  `;

  // Re-attach event listeners after render
  setupHeader(navigateTo);
  setupSpotifyWidget();

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
