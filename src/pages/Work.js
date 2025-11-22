
export function Work() {
    return `
    <section class="page max-w-6xl mx-auto px-6 py-20 md:py-32 animate-fade-in-up">
      <div class="max-w-2xl">
        <h2 class="text-3xl md:text-4xl font-bold text-white mb-6">What I work on</h2>
        <p class="text-lg text-slate-300 leading-relaxed mb-12">
          I’m not selling services here — this is just a place to talk about the
          kind of work I enjoy doing.
        </p>
      </div>

      <div class="grid gap-8 md:grid-cols-3">
        <!-- Card 1 -->
        <div class="group relative rounded-2xl border border-slate-800 bg-slate-900/50 p-8 hover:bg-slate-900 hover:border-sky-500/30 transition-all duration-300 hover:-translate-y-1">
          <div class="absolute inset-0 bg-gradient-to-br from-sky-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl"></div>
          <div class="relative">
            <div class="h-12 w-12 rounded-lg bg-slate-800 flex items-center justify-center mb-6 text-2xl group-hover:bg-sky-500/20 group-hover:text-sky-400 transition-colors">
              ⚡
            </div>
            <h3 class="text-xl font-bold text-white mb-3">
              Automation
            </h3>
            <p class="text-slate-400 leading-relaxed">
              Power Automate, RPA, and workflow design — taking multi-step,
              human-heavy processes and getting them to quietly run in the background.
            </p>
          </div>
        </div>

        <!-- Card 2 -->
        <div class="group relative rounded-2xl border border-slate-800 bg-slate-900/50 p-8 hover:bg-slate-900 hover:border-sky-500/30 transition-all duration-300 hover:-translate-y-1 animation-delay-200">
          <div class="absolute inset-0 bg-gradient-to-br from-sky-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl"></div>
          <div class="relative">
             <div class="h-12 w-12 rounded-lg bg-slate-800 flex items-center justify-center mb-6 text-2xl group-hover:bg-sky-500/20 group-hover:text-sky-400 transition-colors">
              📈
            </div>
            <h3 class="text-xl font-bold text-white mb-3">
              Data & reporting
            </h3>
            <p class="text-slate-400 leading-relaxed">
              Data modeling, pipelines, and reporting that people actually use:
              Power BI, Dataverse, and the glue that connects everything.
            </p>
          </div>
        </div>

        <!-- Card 3 -->
        <div class="group relative rounded-2xl border border-slate-800 bg-slate-900/50 p-8 hover:bg-slate-900 hover:border-sky-500/30 transition-all duration-300 hover:-translate-y-1 animation-delay-400">
          <div class="absolute inset-0 bg-gradient-to-br from-sky-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl"></div>
          <div class="relative">
             <div class="h-12 w-12 rounded-lg bg-slate-800 flex items-center justify-center mb-6 text-2xl group-hover:bg-sky-500/20 group-hover:text-sky-400 transition-colors">
              🛠️
            </div>
            <h3 class="text-xl font-bold text-white mb-3">
              Systems & tooling
            </h3>
            <p class="text-slate-400 leading-relaxed">
              Building small tools, dashboards, and frameworks that make it easier
              for teams to ship and maintain their own solutions.
            </p>
          </div>
        </div>
      </div>
    </section>
  `;
}
