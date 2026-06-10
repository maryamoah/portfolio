import { GlassCard } from '../components/GlassCard';
import { SectionHeader } from '../components/SectionHeader';
import { skills } from '../data/portfolio';

export function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
      <SectionHeader
        eyebrow="Skills"
        title="Security capabilities organized around real operating needs."
        description="A focused snapshot of placeholder competencies across operations, cloud, governance, and technical foundations."
      />
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {skills.map((skill, index) => {
          const Icon = skill.icon;
          return (
            <GlassCard key={skill.title} delay={index * 0.05} className="h-full">
              <div className="mb-6 grid h-12 w-12 place-items-center rounded-2xl bg-cyan-300/10">
                <Icon className="h-6 w-6 text-cyan-200" />
              </div>
              <h3 className="text-xl font-semibold text-white">{skill.title}</h3>
              <ul className="mt-5 space-y-3">
                {skill.items.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm text-slate-300">
                    <span className="h-1.5 w-1.5 rounded-full bg-cyan-300" />
                    {item}
                  </li>
                ))}
              </ul>
            </GlassCard>
          );
        })}
      </div>
    </section>
  );
}
