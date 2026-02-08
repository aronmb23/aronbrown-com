const projects = [
  {
    emoji: '\u{1F3E0}',
    title: 'Home automation',
    desc: "Home Assistant dashboards, sensors, automations, and the occasional \"why is the light doing that?\" moment. Integrating everything from energy monitoring to automated plant watering.",
    tags: ['Home Assistant', 'MQTT', 'ESP32'],
    gradient: 'from-amber-500/20 via-orange-500/10 to-transparent',
    iconGradient: 'from-amber-500 to-orange-500',
    borderHover: 'hover:border-amber-500/30',
  },
  {
    emoji: '\u{1F5A8}\uFE0F',
    title: '3D printing & making',
    desc: "Practical prints, little organizers, and odd ideas that probably didn't need to exist but do now. Designing functional parts in CAD and optimizing print settings.",
    tags: ['Fusion 360', 'Bambu Lab'],
    gradient: 'from-violet-500/20 via-purple-500/10 to-transparent',
    iconGradient: 'from-violet-500 to-purple-500',
    borderHover: 'hover:border-violet-500/30',
  },
  {
    emoji: '\u{1F331}',
    title: 'Garden & random experiments',
    desc: "Birdhouse gourds, outdoor projects, and whatever I'm currently trying to grow or build outside.",
    tags: ['Nature', 'Patience'],
    gradient: 'from-emerald-500/20 via-green-500/10 to-transparent',
    iconGradient: 'from-emerald-500 to-green-500',
    borderHover: 'hover:border-emerald-500/30',
  },
];

export default function Projects() {
  return (
    <section className="page max-w-6xl mx-auto px-6 py-20 md:py-32">
      <div className="max-w-2xl animate-fade-in-up">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">Projects &amp; experiments</h2>
        <div className="h-1 w-16 bg-gradient-to-r from-sky-400 to-indigo-500 rounded-full mb-6" />
        <p className="text-lg text-slate-300 leading-relaxed mb-12">
          A non-exhaustive list of things I like to tinker with. Some are work-adjacent,
          some are completely unnecessary, all of them are fun.
        </p>
      </div>

      <div className="space-y-6 stagger-children">
        {projects.map((project) => (
          <div
            key={project.title}
            className={`card-glow group flex flex-col md:flex-row gap-6 rounded-2xl border border-slate-800 bg-slate-900/50 p-6 hover:bg-slate-900/80 transition-all duration-500 hover:-translate-y-1 hover:shadow-xl ${project.borderHover}`}
          >
            {/* Themed image placeholder with gradient background */}
            <div className="h-48 w-full md:w-64 shrink-0 rounded-xl overflow-hidden relative">
              <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} bg-slate-800`} />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className={`text-6xl transform transition-all duration-500 group-hover:scale-125 group-hover:-rotate-6 drop-shadow-lg`}>
                  {project.emoji}
                </div>
              </div>
              {/* Decorative grid pattern */}
              <div className="absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity" style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
            </div>

            <div className="flex flex-col justify-center flex-1">
              <h3 className="text-xl font-bold text-white mb-2 group-hover:gradient-text transition-colors duration-300">
                {project.title}
              </h3>
              <p className="text-slate-400 leading-relaxed mb-4">{project.desc}</p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-full bg-slate-800/80 text-xs font-medium text-slate-300 border border-slate-700/50 hover:border-sky-500/30 hover:text-sky-400 transition-colors"
                  >
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
