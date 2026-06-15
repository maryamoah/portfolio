import { GlassCard } from '../components/GlassCard';
import { SectionHeader } from '../components/SectionHeader';
import { profile } from '../data/portfolio';

const roles = [
  {
    title: 'Practitioner',
    detail: 'Works from evidence, triage, investigation notes, and clear response decisions.',
  },
  {
    title: 'Engineer',
    detail: 'Designs platforms, dashboards, automations, integrations, and reporting workflows.',
  },
  {
    title: 'Educator',
    detail: 'Turns security operations concepts into practical labs and learner-ready exercises.',
  },
  {
    title: 'Researcher',
    detail: 'Explores AI-assisted SOC work, interpretable analysis, and local LLM workflows.',
  },
];

export function About() {
  return (
    <section id="about" className="mx-auto max-w-7xl px-5 py-14 sm:py-16 lg:px-8">
      <SectionHeader
        eyebrow="About"
        title="A cybersecurity builder with an operations mindset"
        description="Mary connects security operations, automation, intelligence, reporting, education, and research into practical systems."
      />
      <GlassCard className="border-cyan-200/20 bg-slate-900/95">
        <div className="grid gap-5 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">{profile.name}</p>
            <h3 className="mt-4 text-2xl font-semibold text-white sm:text-3xl">Designs, builds, automates, researches, and teaches cybersecurity systems.</h3>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {roles.map((role) => (
              <div key={role.title} className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
                <h4 className="text-base font-semibold text-white">{role.title}</h4>
                <p className="mt-3 text-sm leading-6 text-slate-200">{role.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </GlassCard>
    </section>
  );
}
