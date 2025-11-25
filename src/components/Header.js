
import { Logos } from './Logos.js';

export function Header() {
  return `
    <header class="fixed top-0 left-0 right-0 z-50 border-b border-slate-800 bg-slate-950/80 backdrop-blur-md transition-all duration-300" id="main-header">
      <nav class="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <div class="flex items-center gap-3 group cursor-pointer" data-page="home">
          <div class="relative h-10 w-10 overflow-hidden rounded-full border border-slate-700 bg-slate-800 transition-transform duration-300 group-hover:scale-105 group-hover:border-sky-500/50 flex items-center justify-center">
             <div id="logo-carousel" class="h-6 w-6 text-slate-200">
                <!-- Logos will be injected here -->
             </div>
          </div>
          <div>
            <div class="text-sm font-bold tracking-wide uppercase text-sky-400 transition-colors group-hover:text-sky-300">
              Aron Brown
            </div>
            <div class="text-[10px] uppercase tracking-wider text-slate-400">
              Power Platform Suite, Complete
            </div>
          </div>
        </div>

        <!-- Desktop Menu -->
        <div class="hidden gap-1 text-sm font-medium md:flex">
          <button class="nav-link px-4 py-2 rounded-full text-slate-300 hover:text-white hover:bg-slate-800/50 transition-all duration-200" data-page="home">Home</button>
          <button class="nav-link px-4 py-2 rounded-full text-slate-300 hover:text-white hover:bg-slate-800/50 transition-all duration-200" data-page="about">About</button>
          <button class="nav-link px-4 py-2 rounded-full text-slate-300 hover:text-white hover:bg-slate-800/50 transition-all duration-200" data-page="work">Work</button>
          <button class="nav-link px-4 py-2 rounded-full text-slate-300 hover:text-white hover:bg-slate-800/50 transition-all duration-200" data-page="projects">Projects</button>
          <button class="nav-link px-4 py-2 rounded-full text-slate-300 hover:text-white hover:bg-slate-800/50 transition-all duration-200" data-page="rpa">RPA Playground</button>
          <button class="nav-link px-4 py-2 rounded-full text-slate-300 hover:text-white hover:bg-slate-800/50 transition-all duration-200" data-page="contact">Contact</button>
        </div>

        <!-- Mobile Menu Button -->
        <button class="md:hidden text-slate-300 hover:text-white p-2" id="mobile-menu-btn" aria-label="Toggle menu">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </button>
      </nav>

      <!-- Mobile Menu Overlay -->
      <div class="fixed inset-0 z-40 bg-slate-950/95 backdrop-blur-xl transform translate-x-full transition-transform duration-300 md:hidden flex flex-col justify-center items-center gap-8" id="mobile-menu">
        <button class="absolute top-6 right-6 text-slate-400 hover:text-white" id="close-menu-btn">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
        </button>
        
        <button class="mobile-nav-link text-2xl font-medium text-slate-300 hover:text-sky-400 transition-colors" data-page="home">Home</button>
        <button class="mobile-nav-link text-2xl font-medium text-slate-300 hover:text-sky-400 transition-colors" data-page="about">About</button>
        <button class="mobile-nav-link text-2xl font-medium text-slate-300 hover:text-sky-400 transition-colors" data-page="work">Work</button>
        <button class="mobile-nav-link text-2xl font-medium text-slate-300 hover:text-sky-400 transition-colors" data-page="projects">Projects</button>
        <button class="mobile-nav-link text-2xl font-medium text-slate-300 hover:text-sky-400 transition-colors" data-page="rpa">RPA Playground</button>
        <button class="mobile-nav-link text-2xl font-medium text-slate-300 hover:text-sky-400 transition-colors" data-page="contact">Contact</button>
      </div>
    </header>
  `;
}

export function setupHeader(navigateCallback) {
  const mobileBtn = document.getElementById('mobile-menu-btn');
  const closeBtn = document.getElementById('close-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  const navLinks = document.querySelectorAll('.nav-link');
  const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');
  const logoLink = document.querySelector('[data-page="home"]');
  const logoCarousel = document.getElementById('logo-carousel');

  // Logo Carousel Logic
  const logoKeys = ['powerBI', 'powerApps', 'powerAutomate', 'copilot', 'azure', 'sharepoint'];
  let currentLogoIndex = 0;

  function updateLogo() {
    if (logoCarousel) {
      logoCarousel.innerHTML = Logos[logoKeys[currentLogoIndex]];
      // Add a fade effect class if we wanted, but simple switch is okay for now
      currentLogoIndex = (currentLogoIndex + 1) % logoKeys.length;
    }
  }

  // Initial logo
  updateLogo();
  // Cycle every 3 seconds
  setInterval(updateLogo, 3000);


  function toggleMenu() {
    const isOpen = !mobileMenu.classList.contains('translate-x-full');
    if (isOpen) {
      mobileMenu.classList.add('translate-x-full');
      document.body.style.overflow = '';
    } else {
      mobileMenu.classList.remove('translate-x-full');
      document.body.style.overflow = 'hidden';
    }
  }

  mobileBtn?.addEventListener('click', toggleMenu);
  closeBtn?.addEventListener('click', toggleMenu);

  // Navigation logic
  const handleNav = (e) => {
    const page = e.currentTarget.dataset.page;
    navigateCallback(page);

    // Close mobile menu if open
    if (!mobileMenu.classList.contains('translate-x-full')) {
      toggleMenu();
    }

    // Update active state for desktop links
    navLinks.forEach(link => {
      if (link.dataset.page === page) {
        link.classList.add('text-white', 'bg-slate-800/50');
        link.classList.remove('text-slate-300');
      } else {
        link.classList.remove('text-white', 'bg-slate-800/50');
        link.classList.add('text-slate-300');
      }
    });
  };

  navLinks.forEach(link => link.addEventListener('click', handleNav));
  mobileNavLinks.forEach(link => link.addEventListener('click', handleNav));
  logoLink?.addEventListener('click', handleNav);
}
