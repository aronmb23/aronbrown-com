import GradientCard from '../components/GradientCard';
import useScrollReveal from '../hooks/useScrollReveal';

const interests = [
  { emoji: '\u{1F916}', label: 'Automation' },
  { emoji: '\u{1F4CA}', label: 'Data Viz' },
  { emoji: '\u{1F5A8}\uFE0F', label: '3D Printing' },
  { emoji: '\u{1F9E0}', label: 'Side quests' },
];

export default function About() {
  const headingRef = useScrollReveal();
  const interestsRef = useScrollReveal();

  return (
    <section className="page max-w-4xl mx-auto px-6 py-20 md:py-32 animate-fade-in-up">
      <div ref={headingRef} className="scroll-reveal">
        <h2 className="text-4xl md:text-5xl font-light text-white mb-8 text-balance">
          About me
        </h2>

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
            or whatever rabbit hole I've wandered into that week. I like projects
            that are slightly too ambitious and teach me something along the way.
          </p>
        </div>
      </div>

      <div ref={interestsRef} className="scroll-reveal mt-16">
        <h3 className="text-xl font-semibold text-white mb-6">Interests</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {interests.map((item) => (
            <GradientCard key={item.label} className="p-4 text-center">
              <div className="text-2xl mb-2 group-hover:scale-110 transition-transform duration-300 inline-block">
                {item.emoji}
              </div>
              <div className="text-sm font-medium text-slate-300">{item.label}</div>
            </GradientCard>
          ))}
        </div>
      </div>
    </section>
  );
}
