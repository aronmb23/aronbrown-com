export default function About() {
  return (
    <section className="page max-w-4xl mx-auto px-6 py-20 md:py-32 animate-fade-in-up">
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">About me</h2>

      <div className="prose prose-invert prose-lg text-slate-300 leading-relaxed">
        <p className="mb-6">
          I like understanding how things work — and then quietly improving them.
          Most of my work lives in the world of automation, data, and reporting.
        </p>
        <p className="mb-6">
          I've spent a lot of time in the Microsoft ecosystem (
          <span className="text-sky-400 font-medium">Power Platform, Power BI, Azure</span>
          , and assorted plumbing in between), helping teams move
          from "we track this in a spreadsheet somewhere" to something more
          intentional and maintainable.
        </p>
        <p>
          Outside of work, you'll usually find me experimenting:
          home automation, 3D printing, little microcontroller projects,
          or random things like growing birdhouse gourds. I like projects
          that are slightly too ambitious and teach me something along the way.
        </p>
      </div>

      <div className="mt-16">
        <h3 className="text-xl font-bold text-white mb-6">Interests</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { emoji: '\u{1F916}', label: 'Automation' },
            { emoji: '\u{1F4CA}', label: 'Data Viz' },
            { emoji: '\u{1F5A8}\uFE0F', label: '3D Printing' },
            { emoji: '\u{1F331}', label: 'Gardening' },
          ].map((item) => (
            <div key={item.label} className="p-4 rounded-lg bg-slate-900 border border-slate-800 text-center">
              <div className="text-2xl mb-2">{item.emoji}</div>
              <div className="text-sm font-medium text-slate-300">{item.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
