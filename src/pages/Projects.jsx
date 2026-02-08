const projects = [
  {
    emoji: '\u{1F3E0}',
    title: 'Home automation',
    desc: "Home Assistant dashboards, sensors, automations, and the occasional \"why is the light doing that?\" moment. Integrating everything from energy monitoring to automated plant watering.",
    tags: ['Home Assistant', 'MQTT', 'ESP32'],
    delay: '',
  },
  {
    emoji: '\u{1F5A8}\uFE0F',
    title: '3D printing & making',
    desc: "Practical prints, little organizers, and odd ideas that probably didn't need to exist but do now. Designing functional parts in CAD and optimizing print settings.",
    tags: ['Fusion 360', 'Bambu Lab'],
    delay: 'animation-delay-200',
  },
  {
    emoji: '\u{1F331}',
    title: 'Garden & random experiments',
    desc: "Birdhouse gourds, outdoor projects, and whatever I'm currently trying to grow or build outside.",
    tags: ['Nature', 'Patience'],
    delay: 'animation-delay-400',
  },
];

export default function Projects() {
  return (
    <section className="page max-w-6xl mx-auto px-6 py-20 md:py-32 animate-fade-in-up">
      <div className="max-w-2xl">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Projects &amp; experiments</h2>
        <p className="text-lg text-slate-300 leading-relaxed mb-12">
          A non-exhaustive list of things I like to tinker with. Some are work-adjacent,
          some are completely unnecessary, all of them are fun.
        </p>
      </div>

      <div className="space-y-6">
        {projects.map((project) => (
          <div
            key={project.title}
            className={`group flex flex-col md:flex-row gap-6 rounded-2xl border border-slate-800 bg-slate-900/50 p-6 hover:bg-slate-900 hover:border-sky-500/30 transition-all duration-300 ${project.delay}`}
          >
            <div className="h-48 w-full md:w-64 shrink-0 rounded-xl bg-slate-800 overflow-hidden relative">
              <div className="absolute inset-0 flex items-center justify-center text-4xl bg-slate-800 group-hover:scale-110 transition-transform duration-500">
                {project.emoji}
              </div>
            </div>
            <div className="flex flex-col justify-center">
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-sky-400 transition-colors">
                {project.title}
              </h3>
              <p className="text-slate-400 leading-relaxed mb-4">{project.desc}</p>
              <div className="flex gap-2">
                {project.tags.map((tag) => (
                  <span key={tag} className="px-3 py-1 rounded-full bg-slate-800 text-xs text-slate-300 border border-slate-700">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
