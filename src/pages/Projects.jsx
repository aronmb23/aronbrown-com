import GradientCard from '../components/GradientCard';
import useScrollReveal from '../hooks/useScrollReveal';

const projects = [
  {
    emoji: '\u{1F3E0}',
    title: 'Home automation',
    desc: "Home Assistant dashboards, sensors, automations, and the occasional \"why is the light doing that?\" moment. Integrating everything from energy monitoring to automated plant watering.",
    tags: ['Home Assistant', 'MQTT', 'ESP32'],
    span: 'md:col-span-2',
  },
  {
    emoji: '\u{1F5A8}\uFE0F',
    title: '3D printing & making',
    desc: "Practical prints, little organizers, and odd ideas that probably didn't need to exist but do now. Designing functional parts in CAD and optimizing print settings.",
    tags: ['Fusion 360', 'Bambu Lab'],
    span: 'md:col-span-1',
  },
  {
    emoji: '\u{1F9EA}',
    title: 'Side quests & experiments',
    desc: "Random projects that don't fit neatly into a category — the kind of thing that starts with \"I wonder if...\" and ends three weekends later.",
    tags: ['Curiosity', 'Prototyping'],
    span: 'md:col-span-1',
  },
];

export default function Projects() {
  const headingRef = useScrollReveal();

  return (
    <section className="page max-w-6xl mx-auto px-6 py-20 md:py-32">
      <div ref={headingRef} className="scroll-reveal max-w-2xl mb-16">
        <h2 className="text-4xl md:text-5xl font-light text-white mb-6 text-balance">
          Projects &amp; experiments
        </h2>
        <p className="text-lg text-slate-400 leading-relaxed">
          A non-exhaustive list of things I like to tinker with. Some are work-adjacent,
          some are completely unnecessary, all of them are fun.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {projects.map((project) => (
          <ProjectItem key={project.title} project={project} />
        ))}
      </div>
    </section>
  );
}

function ProjectItem({ project }) {
  const ref = useScrollReveal();

  return (
    <div ref={ref} className={`scroll-reveal ${project.span}`}>
      <GradientCard className="h-full p-8">
        <div className="text-4xl mb-6 group-hover:scale-110 transition-transform duration-500 inline-block">
          {project.emoji}
        </div>
        <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-sky-400 transition-colors">
          {project.title}
        </h3>
        <p className="text-slate-400 leading-relaxed mb-5">{project.desc}</p>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 rounded-full bg-slate-800/80 text-xs text-slate-300 border border-slate-700/50"
            >
              {tag}
            </span>
          ))}
        </div>
      </GradientCard>
    </div>
  );
}
