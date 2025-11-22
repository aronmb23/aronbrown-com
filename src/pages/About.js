
export function About() {
    return `
    <section class="page max-w-4xl mx-auto px-6 py-20 md:py-32 animate-fade-in-up">
      <h2 class="text-3xl md:text-4xl font-bold text-white mb-8">About me</h2>
      
      <div class="prose prose-invert prose-lg text-slate-300 leading-relaxed">
        <p class="mb-6">
          I like understanding how things work — and then quietly improving them.
          Most of my work lives in the world of automation, data, and reporting.
        </p>
        <p class="mb-6">
          I’ve spent a lot of time in the Microsoft ecosystem (<span class="text-sky-400 font-medium">Power Platform, Power BI, Azure</span>, and assorted plumbing in between), helping teams move
          from “we track this in a spreadsheet somewhere” to something more
          intentional and maintainable.
        </p>
        <p>
          Outside of work, you’ll usually find me experimenting:
          home automation, 3D printing, little microcontroller projects,
          or random things like growing birdhouse gourds. I like projects
          that are slightly too ambitious and teach me something along the way.
        </p>
      </div>

      <div class="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
        <div class="p-4 rounded-xl bg-slate-900/50 border border-slate-800 text-center hover:border-sky-500/30 transition-colors">
            <div class="text-2xl mb-2">🤖</div>
            <div class="text-sm font-medium text-slate-300">Automation</div>
        </div>
        <div class="p-4 rounded-xl bg-slate-900/50 border border-slate-800 text-center hover:border-sky-500/30 transition-colors">
            <div class="text-2xl mb-2">📊</div>
            <div class="text-sm font-medium text-slate-300">Data Viz</div>
        </div>
        <div class="p-4 rounded-xl bg-slate-900/50 border border-slate-800 text-center hover:border-sky-500/30 transition-colors">
            <div class="text-2xl mb-2">🖨️</div>
            <div class="text-sm font-medium text-slate-300">3D Printing</div>
        </div>
        <div class="p-4 rounded-xl bg-slate-900/50 border border-slate-800 text-center hover:border-sky-500/30 transition-colors">
            <div class="text-2xl mb-2">🌱</div>
            <div class="text-sm font-medium text-slate-300">Gardening</div>
        </div>
      </div>
    </section>
  `;
}
