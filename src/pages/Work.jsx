const cards = [
  {
    icon: '\u26A1',
    title: 'Automation',
    desc: 'Power Automate, RPA, and workflow design — taking multi-step, human-heavy processes and getting them to quietly run in the background.',
    delay: '',
  },
  {
    icon: '\u{1F4C8}',
    title: 'Data & reporting',
    desc: 'Data modeling, pipelines, and reporting that people actually use: Power BI, Dataverse, and the glue that connects everything.',
    delay: 'animation-delay-200',
  },
  {
    icon: '\u{1F6E0}\uFE0F',
    title: 'Systems & tooling',
    desc: 'Building small tools, dashboards, and frameworks that make it easier for teams to ship and maintain their own solutions.',
    delay: 'animation-delay-400',
  },
];

export default function Work() {
  return (
    <section className="page max-w-6xl mx-auto px-6 py-20 md:py-32 animate-fade-in-up">
      <div className="max-w-2xl">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">What I work on</h2>
        <p className="text-lg text-slate-300 leading-relaxed mb-12">
          I'm not selling services here — this is just a place to talk about the
          kind of work I enjoy doing.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-3">
        {cards.map((card) => (
          <div
            key={card.title}
            className={`group relative rounded-2xl border border-slate-800 bg-slate-900/50 p-8 hover:bg-slate-900 hover:border-sky-500/30 transition-all duration-300 hover:-translate-y-1 ${card.delay}`}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-sky-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl" />
            <div className="relative">
              <div className="h-12 w-12 rounded-lg bg-slate-800 flex items-center justify-center mb-6 text-2xl group-hover:bg-sky-500/20 group-hover:text-sky-400 transition-colors">
                {card.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{card.title}</h3>
              <p className="text-slate-400 leading-relaxed">{card.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
