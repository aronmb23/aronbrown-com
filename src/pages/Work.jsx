const cards = [
  {
    icon: '\u26A1',
    title: 'Automation',
    desc: 'Power Automate, RPA, and workflow design — taking multi-step, human-heavy processes and getting them to quietly run in the background.',
    gradient: 'from-sky-500 to-cyan-400',
    glow: 'group-hover:shadow-sky-500/20',
  },
  {
    icon: '\u{1F4C8}',
    title: 'Data & reporting',
    desc: 'Data modeling, pipelines, and reporting that people actually use: Power BI, Dataverse, and the glue that connects everything.',
    gradient: 'from-indigo-500 to-violet-400',
    glow: 'group-hover:shadow-indigo-500/20',
  },
  {
    icon: '\u{1F6E0}\uFE0F',
    title: 'Systems & tooling',
    desc: 'Building small tools, dashboards, and frameworks that make it easier for teams to ship and maintain their own solutions.',
    gradient: 'from-purple-500 to-pink-400',
    glow: 'group-hover:shadow-purple-500/20',
  },
];

export default function Work() {
  return (
    <section className="page max-w-6xl mx-auto px-6 py-20 md:py-32">
      <div className="max-w-2xl animate-fade-in-up">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">What I work on</h2>
        <div className="h-1 w-16 bg-gradient-to-r from-sky-400 to-indigo-500 rounded-full mb-6" />
        <p className="text-lg text-slate-300 leading-relaxed mb-12">
          I'm not selling services here — this is just a place to talk about the
          kind of work I enjoy doing.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-3 stagger-children">
        {cards.map((card) => (
          <div
            key={card.title}
            className={`card-glow group relative rounded-2xl border border-slate-800 bg-slate-900/50 p-8 hover:bg-slate-900/80 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl ${card.glow}`}
          >
            {/* Gradient top accent */}
            <div className={`absolute top-0 left-0 right-0 h-px bg-gradient-to-r ${card.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

            <div className="relative">
              <div className={`h-14 w-14 rounded-xl bg-gradient-to-br ${card.gradient} flex items-center justify-center mb-6 text-2xl shadow-lg opacity-90 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300`}>
                {card.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:gradient-text transition-colors duration-300">{card.title}</h3>
              <p className="text-slate-400 leading-relaxed">{card.desc}</p>

              {/* Decorative corner dot */}
              <div className={`absolute -bottom-2 -right-2 w-20 h-20 bg-gradient-to-br ${card.gradient} rounded-full opacity-0 group-hover:opacity-5 blur-xl transition-opacity duration-500`} />
            </div>
          </div>
        ))}
      </div>

      {/* Bottom accent */}
      <div className="mt-16 flex items-center gap-4 animate-fade-in-up animation-delay-600">
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-slate-800 to-transparent" />
        <span className="text-sm text-slate-600 font-medium">Always building</span>
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-slate-800 to-transparent" />
      </div>
    </section>
  );
}
