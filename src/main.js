import './style.css';

const app = document.querySelector('#app');

app.innerHTML = `
  <div class="min-h-screen bg-slate-950 text-slate-100 flex flex-col">
    <!-- Header / Navbar -->
    <header class="border-b border-slate-800 bg-slate-950/80 backdrop-blur">
      <nav class="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <div class="flex items-center gap-3">
          <div class="h-10 w-10 overflow-hidden rounded-full border border-slate-700 bg-slate-800">
            <img
              src="/Profile.webp"
              alt="Aron Brown"
              class="h-full w-full object-cover"
            />
          </div>
          <div>
            <div class="text-sm font-semibold tracking-wide uppercase text-sky-400">
              Aron Brown
            </div>
            <div class="text-xs text-slate-400">
              Automation · Data · Nerdy Projects
            </div>
          </div>
        </div>

        <div class="hidden gap-4 text-sm font-medium md:flex">
          <button class="nav-link text-slate-300 hover:text-white" data-page="home">Home</button>
          <button class="nav-link text-slate-300 hover:text-white" data-page="about">About</button>
          <button class="nav-link text-slate-300 hover:text-white" data-page="work">Work</button>
          <button class="nav-link text-slate-300 hover:text-white" data-page="projects">Projects</button>
          <button class="nav-link text-slate-300 hover:text-white" data-page="contact">Contact</button>
        </div>

        <!-- Simple mobile menu icon (non-functional for now) -->
        <div class="md:hidden text-slate-300 text-xl">
          ☰
        </div>
      </nav>
    </header>

    <!-- Main content -->
    <main class="flex-1">
         <!-- Home -->
      <section data-page="home" class="page max-w-5xl mx-auto px-6 py-16">
        <div class="grid gap-12 md:grid-cols-[minmax(0,2fr)_minmax(0,1.2fr)] md:items-center">
          <div>
            <p class="text-sm font-semibold uppercase tracking-[0.2em] text-sky-400">
              Personal site
            </p>
            <h1 class="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
              I build systems that make work feel less like work.
            </h1>
            <p class="mt-4 text-base text-slate-300 leading-relaxed">
              I’m Aron, a builder who lives somewhere between automation, data,
              and creative problem solving. I like taking messy, manual processes
              and turning them into calm, reliable systems — whether that’s in
              Power Platform, RPA, or some weird home project.
            </p>
          </div>

          <div class="flex justify-center md:justify-end">
            <div class="relative">
              <!-- soft glow behind the card -->
              <div class="pointer-events-none absolute inset-0 -translate-y-4 translate-x-4 rounded-[36px] bg-sky-500/25 blur-3xl"></div>

              <div class="relative overflow-hidden rounded-[32px] border border-slate-700 bg-slate-900/80 p-4 shadow-2xl">
              <div class="rounded-3xl bg-slate-900">
               <img
              src="/Profile.webp"
              alt="Aron Brown"
              class="w-full h-auto rounded-3xl object-contain"
            />
          </div>

                <div class="mt-4">
                  <div class="text-sm font-semibold text-slate-50">
                    Aron Brown
                  </div>
                  <div class="mt-1 text-xs text-slate-400">
                    Automation · Data · Builder of overly complicated side projects
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- About -->
      <section data-page="about" class="page max-w-5xl mx-auto hidden px-6 py-16">
        <h2 class="text-2xl font-semibold">About me</h2>
        <p class="mt-4 text-slate-300 leading-relaxed">
          I like understanding how things work — and then quietly improving them.
          Most of my work lives in the world of automation, data, and reporting.
          I’ve spent a lot of time in the Microsoft ecosystem (Power Platform,
          Power BI, Azure, and assorted plumbing in between), helping teams move
          from “we track this in a spreadsheet somewhere” to something more
          intentional and maintainable.
        </p>
        <p class="mt-4 text-slate-300 leading-relaxed">
          Outside of work, you’ll usually find me experimenting:
          home automation, 3D printing, little microcontroller projects,
          or random things like growing birdhouse gourds. I like projects
          that are slightly too ambitious and teach me something along the way.
        </p>
      </section>

      <!-- Work -->
      <section data-page="work" class="page max-w-5xl mx-auto hidden px-6 py-16">
        <h2 class="text-2xl font-semibold">What I work on</h2>
        <p class="mt-4 text-slate-300 leading-relaxed">
          I’m not selling services here — this is just a place to talk about the
          kind of work I enjoy doing.
        </p>

        <div class="mt-8 grid gap-6 md:grid-cols-3">
          <div class="rounded-2xl border border-slate-800 bg-slate-900/70 p-5">
            <h3 class="text-sm font-semibold text-sky-400 uppercase tracking-wide">
              Automation
            </h3>
            <p class="mt-3 text-sm text-slate-300 leading-relaxed">
              Power Automate, RPA, and workflow design — taking multi-step,
              human-heavy processes and getting them to quietly run in the background.
            </p>
          </div>

          <div class="rounded-2xl border border-slate-800 bg-slate-900/70 p-5">
            <h3 class="text-sm font-semibold text-sky-400 uppercase tracking-wide">
              Data & reporting
            </h3>
            <p class="mt-3 text-sm text-slate-300 leading-relaxed">
              Data modeling, pipelines, and reporting that people actually use:
              Power BI, Dataverse, and the glue that connects everything.
            </p>
          </div>

          <div class="rounded-2xl border border-slate-800 bg-slate-900/70 p-5">
            <h3 class="text-sm font-semibold text-sky-400 uppercase tracking-wide">
              Systems & tooling
            </h3>
            <p class="mt-3 text-sm text-slate-300 leading-relaxed">
              Building small tools, dashboards, and frameworks that make it easier
              for teams to ship and maintain their own solutions.
            </p>
          </div>
        </div>
      </section>

      <!-- Projects -->
      <section data-page="projects" class="page max-w-5xl mx-auto hidden px-6 py-16">
        <h2 class="text-2xl font-semibold">Projects & experiments</h2>
        <p class="mt-4 text-slate-300 leading-relaxed">
          A non-exhaustive list of things I like to tinker with. Some are work-adjacent,
          some are completely unnecessary, all of them are fun.
        </p>

        <div class="mt-8 space-y-4">
          <div class="rounded-2xl border border-slate-800 bg-slate-900/70 p-5">
            <h3 class="text-sm font-semibold text-sky-400 uppercase tracking-wide">
              Home automation
            </h3>
            <p class="mt-3 text-sm text-slate-300 leading-relaxed">
              Home Assistant dashboards, sensors, automations, and the occasional
              “why is the light doing that?” moment.
            </p>
          </div>

          <div class="rounded-2xl border border-slate-800 bg-slate-900/70 p-5">
            <h3 class="text-sm font-semibold text-sky-400 uppercase tracking-wide">
              3D printing & making
            </h3>
            <p class="mt-3 text-sm text-slate-300 leading-relaxed">
              Practical prints, little organizers, and odd ideas that probably
              didn’t need to exist but do now.
            </p>
          </div>

          <div class="rounded-2xl border border-slate-800 bg-slate-900/70 p-5">
            <h3 class="text-sm font-semibold text-sky-400 uppercase tracking-wide">
              Garden & random experiments
            </h3>
            <p class="mt-3 text-sm text-slate-300 leading-relaxed">
              Birdhouse gourds, outdoor projects, and whatever I’m currently
              trying to grow or build outside.
            </p>
          </div>
        </div>
      </section>

      <!-- Contact -->
      <section data-page="contact" class="page max-w-5xl mx-auto hidden px-6 py-16">
        <h2 class="text-2xl font-semibold">Contact</h2>
        <p class="mt-4 text-slate-300 leading-relaxed">
          I’m not using this site to sell anything, but if you want to say hi,
          compare notes on automation, or send me a cool project idea, you can
          reach me here:
        </p>

        <div class="mt-6 rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p class="text-sm text-slate-300">
            <span class="font-semibold text-sky-400">Email:</span>
            &nbsp;<a href="mailto:hello@aronbrown.com" class="underline decoration-sky-500 hover:text-sky-300">
              hello@aronbrown.com
            </a>
          </p>
          <!-- You can swap this for whatever email you actually want to use -->
        </div>
      </section>
    </main>

    <!-- Footer -->
    <footer class="border-t border-slate-800 py-4 text-center text-xs text-slate-500">
      © ${new Date().getFullYear()} Aron Brown. Built for fun.
    </footer>
  </div>
`;

// Simple "routing" – show one section at a time
const links = document.querySelectorAll('.nav-link');
const pages = document.querySelectorAll('.page');

function setActive(page) {
  pages.forEach((section) => {
    section.classList.toggle('hidden', section.dataset.page !== page);
  });

  links.forEach((link) => {
    const isActive = link.dataset.page === page;
    link.classList.toggle('text-white', isActive);
    link.classList.toggle('text-slate-300', !isActive);
    link.classList.toggle('border-b-2', isActive);
    link.classList.toggle('border-sky-400', isActive);
    link.classList.toggle('pb-1', isActive);
  });
}

links.forEach((link) => {
  link.addEventListener('click', () => {
    setActive(link.dataset.page);
  });
});

// Default page
setActive('home');
