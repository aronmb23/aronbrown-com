import GradientCard from '../components/GradientCard';
import useScrollReveal from '../hooks/useScrollReveal';

const cards = [
  {
    icon: '\u26A1',
    title: 'Automation',
    desc: 'Power Automate, RPA, and workflow design — taking multi-step, human-heavy processes and getting them to quietly run in the background.',
    span: 'md:col-span-2 md:row-span-1',
  },
  {
    icon: '\u{1F4C8}',
    title: 'Data & reporting',
    desc: 'Data modeling, pipelines, and reporting that people actually use: Power BI, Dataverse, and the glue that connects everything.',
    span: 'md:col-span-1 md:row-span-2',
  },
  {
    icon: '\u{1F6E0}\uFE0F',
    title: 'Systems & tooling',
    desc: 'Building small tools, dashboards, and frameworks that make it easier for teams to ship and maintain their own solutions.',
    span: 'md:col-span-2 md:row-span-1',
  },
];

export default function Work() {
  const headingRef = useScrollReveal();

  return (
    <section className="page max-w-6xl mx-auto px-6 py-20 md:py-32 animate-fade-in-up">
      <div ref={headingRef} className="scroll-reveal max-w-2xl mb-16">
        <h2 className="text-4xl md:text-5xl font-light text-white mb-6 text-balance">
          What I work on
        </h2>
        <p className="text-lg text-slate-400 leading-relaxed">
          I'm not selling services here — this is just a place to talk about the
          kind of work I enjoy doing.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-3 md:auto-rows-[minmax(180px,auto)]">
        {cards.map((card) => (
          <CardItem key={card.title} card={card} />
        ))}
      </div>
    </section>
  );
}

function CardItem({ card }) {
  const ref = useScrollReveal();

  return (
    <div ref={ref} className={`scroll-reveal ${card.span}`}>
      <GradientCard className="h-full p-8">
        <div className="h-12 w-12 rounded-lg bg-slate-800 flex items-center justify-center mb-6 text-2xl group-hover:bg-sky-500/20 group-hover:text-sky-400 transition-colors">
          {card.icon}
        </div>
        <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-sky-400 transition-colors">
          {card.title}
        </h3>
        <p className="text-slate-400 leading-relaxed">{card.desc}</p>
      </GradientCard>
    </div>
  );
}
