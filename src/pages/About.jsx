export default function About() {
  const interests = [
    { emoji: '\u{1F916}', label: 'Automation', color: 'from-sky-500/20 to-sky-500/5', hoverBorder: 'hover:border-sky-500/50', iconBg: 'group-hover:bg-sky-500/20' },
    { emoji: '\u{1F4CA}', label: 'Data Viz', color: 'from-indigo-500/20 to-indigo-500/5', hoverBorder: 'hover:border-indigo-500/50', iconBg: 'group-hover:bg-indigo-500/20' },
    { emoji: '\u{1F5A8}\uFE0F', label: '3D Printing', color: 'from-purple-500/20 to-purple-500/5', hoverBorder: 'hover:border-purple-500/50', iconBg: 'group-hover:bg-purple-500/20' },
    { emoji: '\u{1F331}', label: 'Gardening', color: 'from-emerald-500/20 to-emerald-500/5', hoverBorder: 'hover:border-emerald-500/50', iconBg: 'group-hover:bg-emerald-500/20' },
  ];

  return (
    <section className="page max-w-4xl mx-auto px-6 py-20 md:py-32">
      {/* Decorative accent */}
      <div className="absolute top-32 right-[10%] w-64 h-64 bg-sky-500/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-64 left-[5%] w-48 h-48 bg-purple-500/5 rounded-full blur-[80px] pointer-events-none" />

      <div className="animate-fade-in-up">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">About me</h2>
        <div className="h-1 w-16 bg-gradient-to-r from-sky-400 to-indigo-500 rounded-full mb-8" />
      </div>

      <div className="prose prose-invert prose-lg text-slate-300 leading-relaxed animate-fade-in-up animation-delay-200">
        <p className="mb-6">
          I like understanding how things work — and then quietly improving them.
          Most of my work lives in the world of automation, data, and reporting.
        </p>
        <p className="mb-6">
          I've spent a lot of time in the Microsoft ecosystem (
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-indigo-400 font-semibold">
            Power Platform, Power BI, Azure
          </span>
          , and assorted plumbing in between), helping teams move
          from &ldquo;we track this in a spreadsheet somewhere&rdquo; to something more
          intentional and maintainable.
        </p>
        <p>
          Outside of work, you'll usually find me experimenting:
          home automation, 3D printing, little microcontroller projects,
          or random things like growing birdhouse gourds. I like projects
          that are slightly too ambitious and teach me something along the way.
        </p>
      </div>

      <div className="mt-16 animate-fade-in-up animation-delay-400">
        <h3 className="text-xl font-bold text-white mb-6">Interests</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 stagger-children">
          {interests.map((item) => (
            <div
              key={item.label}
              className={`group relative p-6 rounded-xl bg-slate-900/50 border border-slate-800 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-sky-500/5 ${item.hoverBorder} cursor-default`}
            >
              <div className={`absolute inset-0 rounded-xl bg-gradient-to-b ${item.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
              <div className="relative">
                <div className={`text-3xl mb-3 transform transition-transform duration-300 group-hover:scale-110`}>
                  {item.emoji}
                </div>
                <div className="text-sm font-medium text-slate-300 group-hover:text-white transition-colors">
                  {item.label}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Fun stats / details */}
      <div className="mt-16 grid grid-cols-3 gap-4 animate-fade-in-up animation-delay-600">
        {[
          { value: 'Microsoft', label: 'Ecosystem' },
          { value: 'Data-first', label: 'Approach' },
          { value: 'Always', label: 'Learning' },
        ].map((stat) => (
          <div key={stat.label} className="text-center p-4 rounded-xl border border-slate-800/50 bg-slate-900/30">
            <div className="text-lg font-bold gradient-text">{stat.value}</div>
            <div className="text-xs text-slate-500 mt-1">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
