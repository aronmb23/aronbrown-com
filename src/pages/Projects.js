
export function Projects() {
    return `
    <section class="page max-w-6xl mx-auto px-6 py-20 md:py-32 animate-fade-in-up">
      <div class="max-w-2xl">
        <h2 class="text-3xl md:text-4xl font-bold text-white mb-6">Projects & experiments</h2>
        <p class="text-lg text-slate-300 leading-relaxed mb-12">
          A non-exhaustive list of things I like to tinker with. Some are work-adjacent,
          some are completely unnecessary, all of them are fun.
        </p>
      </div>

      <div class="space-y-6">
        <!-- Project 1 -->
        <div class="group flex flex-col md:flex-row gap-6 rounded-2xl border border-slate-800 bg-slate-900/50 p-6 hover:bg-slate-900 hover:border-sky-500/30 transition-all duration-300">
          <div class="h-48 w-full md:w-64 shrink-0 rounded-xl bg-slate-800 overflow-hidden relative">
            <div class="absolute inset-0 flex items-center justify-center text-4xl bg-slate-800 group-hover:scale-110 transition-transform duration-500">
              🏠
            </div>
          </div>
          <div class="flex flex-col justify-center">
            <h3 class="text-xl font-bold text-white mb-2 group-hover:text-sky-400 transition-colors">
              Home automation
            </h3>
            <p class="text-slate-400 leading-relaxed mb-4">
              Home Assistant dashboards, sensors, automations, and the occasional
              “why is the light doing that?” moment. Integrating everything from 
              energy monitoring to automated plant watering.
            </p>
            <div class="flex gap-2">
                <span class="px-3 py-1 rounded-full bg-slate-800 text-xs text-slate-300 border border-slate-700">Home Assistant</span>
                <span class="px-3 py-1 rounded-full bg-slate-800 text-xs text-slate-300 border border-slate-700">MQTT</span>
                <span class="px-3 py-1 rounded-full bg-slate-800 text-xs text-slate-300 border border-slate-700">ESP32</span>
            </div>
          </div>
        </div>

        <!-- Project 2 -->
        <div class="group flex flex-col md:flex-row gap-6 rounded-2xl border border-slate-800 bg-slate-900/50 p-6 hover:bg-slate-900 hover:border-sky-500/30 transition-all duration-300 animation-delay-200">
          <div class="h-48 w-full md:w-64 shrink-0 rounded-xl bg-slate-800 overflow-hidden relative">
             <div class="absolute inset-0 flex items-center justify-center text-4xl bg-slate-800 group-hover:scale-110 transition-transform duration-500">
              🖨️
            </div>
          </div>
          <div class="flex flex-col justify-center">
            <h3 class="text-xl font-bold text-white mb-2 group-hover:text-sky-400 transition-colors">
              3D printing & making
            </h3>
            <p class="text-slate-400 leading-relaxed mb-4">
              Practical prints, little organizers, and odd ideas that probably
              didn’t need to exist but do now. Designing functional parts in CAD 
              and optimizing print settings.
            </p>
            <div class="flex gap-2">
                <span class="px-3 py-1 rounded-full bg-slate-800 text-xs text-slate-300 border border-slate-700">Fusion 360</span>
                <span class="px-3 py-1 rounded-full bg-slate-800 text-xs text-slate-300 border border-slate-700">Bambu Lab</span>
            </div>
          </div>
        </div>

        <!-- Project 3 -->
        <div class="group flex flex-col md:flex-row gap-6 rounded-2xl border border-slate-800 bg-slate-900/50 p-6 hover:bg-slate-900 hover:border-sky-500/30 transition-all duration-300 animation-delay-400">
          <div class="h-48 w-full md:w-64 shrink-0 rounded-xl bg-slate-800 overflow-hidden relative">
             <div class="absolute inset-0 flex items-center justify-center text-4xl bg-slate-800 group-hover:scale-110 transition-transform duration-500">
              🌱
            </div>
          </div>
          <div class="flex flex-col justify-center">
            <h3 class="text-xl font-bold text-white mb-2 group-hover:text-sky-400 transition-colors">
              Garden & random experiments
            </h3>
            <p class="text-slate-400 leading-relaxed mb-4">
              Birdhouse gourds, outdoor projects, and whatever I’m currently
              trying to grow or build outside.
            </p>
            <div class="flex gap-2">
                <span class="px-3 py-1 rounded-full bg-slate-800 text-xs text-slate-300 border border-slate-700">Nature</span>
                <span class="px-3 py-1 rounded-full bg-slate-800 text-xs text-slate-300 border border-slate-700">Patience</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}
