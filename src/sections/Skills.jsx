import { Badge } from '../components/Badge';
import { GlassCard } from '../components/GlassCard';
import { SectionHeader } from '../components/SectionHeader';
import { skills } from '../data/portfolio';

const shortTitles = {
  'Security Operations & Incident Response': 'SOC Engineering',
  'Threat & Vulnerability Intelligence': 'Threat Intelligence',
  'AI & Machine Learning for Cybersecurity': 'AI & Research',
};

export function Skills() {
  return (
    <section id="core-expertise" className="mx-auto max-w-7xl px-5 py-12 sm:py-14 lg:px-8">
      <SectionHeader
        eyebrow="Skills"
        title="Compact technical toolkit"
        description="Grouped skill chips for quick scanning across SOC engineering, automation, threat intelligence, AI, and research."
      />
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {skills.map((skill, index) => {
          const Icon = skill.icon;
          return (
            <GlassCard key={skill.title} delay={index * 0.035} className="h-full border-cyan-200/15 bg-slate-900/90 p-5">
              <div className="flex items-center gap-3">
                <span className="grid h-10 w-10 flex-none place-items-center rounded-2xl bg-cyan-300/10"><Icon className="h-5 w-5 text-cyan-200" /></span>
                <h3 className="text-base font-semibold text-white">{shortTitles[skill.title] ?? skill.title}</h3>
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {skill.items.map((item) => <Badge key={`${skill.title}-${item}`}>{item}</Badge>)}
              </div>
            </GlassCard>
          );
        })}
      </div>
    </section>
  );
}
