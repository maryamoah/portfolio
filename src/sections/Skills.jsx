import { GlassCard } from '../components/GlassCard';
import { SectionHeader } from '../components/SectionHeader';
import { skills } from '../data/portfolio';

const coreExpertise = [
  'Security Operations Engineering',
  'Security Automation & SOAR',
  'SIEM Engineering',
  'Threat Intelligence',
  'AI Security Research',
];

export function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-7xl px-5 py-16 sm:py-20 lg:px-8">
      <SectionHeader
        eyebrow="Skills"
        title="Expandable Capability Groups"
        description="Core expertise is visible first; detailed toolsets and workflows expand only when visitors need them."
      />
      <GlassCard className="mx-auto max-w-4xl border-cyan-200/25 bg-slate-900/95">
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan-300">Core Expertise</p>
        <div className="mt-5 flex flex-wrap gap-3">
          {coreExpertise.map((item) => (
            <span key={item} className="rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-sm font-semibold text-cyan-50">
              {item}
            </span>
          ))}
        </div>
      </GlassCard>
      <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {skills.map((skill) => {
          const Icon = skill.icon;
          return (
            <details key={skill.title} className="group rounded-3xl border border-white/10 bg-panel p-5 shadow-card backdrop-blur-xl open:border-cyan-200/30 open:bg-slate-900/95">
              <summary className="flex cursor-pointer list-none items-center gap-4">
                <span className="grid h-11 w-11 flex-none place-items-center rounded-2xl bg-cyan-300/10">
                  <Icon className="h-5 w-5 text-cyan-200" />
                </span>
                <span className="min-w-0 flex-1 font-semibold text-white">{skill.title}</span>
                <span className="text-sm font-semibold text-cyan-200 group-open:hidden">Expand</span>
                <span className="hidden text-sm font-semibold text-cyan-200 group-open:inline">Close</span>
              </summary>
              <ul className="mt-5 space-y-3">
                {skill.items.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm text-slate-200">
                    <span className="h-1.5 w-1.5 rounded-full bg-cyan-300" />
                    {item}
                  </li>
                ))}
              </ul>
            </details>
          );
        })}
      </div>
    </section>
  );
}
