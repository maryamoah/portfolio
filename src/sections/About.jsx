import { GlassCard } from '../components/GlassCard';
import { SectionHeader } from '../components/SectionHeader';
import { profile } from '../data/portfolio';

const roles = [
  {
    title: 'Practitioner',
    detail: 'Works from evidence, triage discipline, escalation judgment, and clear communication.',
  },
  {
    title: 'Engineer',
    detail: 'Designs platforms, dashboards, automation workflows, integrations, and reporting architecture.',
  },
  {
    title: 'Educator',
    detail: 'Turns complex SOC, SIEM, intelligence, and testing workflows into practical labs and mentoring.',
  },
  {
    title: 'Researcher',
    detail: 'Explores AI-assisted operations, interpretable telemetry analysis, and human-AI collaboration.',
  },
];

export function About() {
  return (
    <section id="about" className="mx-auto max-w-7xl px-5 py-16 sm:py-20 lg:px-8">
      <SectionHeader
        eyebrow="About"
        title="Practitioner, Engineer, Educator, and Researcher"
        description="A concise profile of the working style behind the projects: practical, systems-minded, teachable, and research-aware."
      />
      <div className="grid gap-6 lg:grid-cols-[0.75fr_1.25fr]">
        <GlassCard className="border-cyan-200/20 bg-slate-900/95">
          <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">Profile</p>
          <h3 className="mt-4 text-2xl font-semibold text-white sm:text-3xl">{profile.name}</h3>
          <p className="mt-6 text-sm leading-7 text-slate-200">
            Mary designs and explains cybersecurity systems that help teams monitor, investigate,
            automate, report, research, and learn with stronger structure and clearer judgment.
          </p>
        </GlassCard>
        <GlassCard delay={0.08} className="border-white/10 bg-slate-900/90">
          <div className="grid gap-4 md:grid-cols-2">
            {roles.map((role) => (
              <div key={role.title} className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
                <h4 className="text-base font-semibold text-white">{role.title}</h4>
                <p className="mt-3 text-sm leading-7 text-slate-200">{role.detail}</p>
              </div>
            ))}
          </div>
        </GlassCard>
      </div>
    </section>
  );
}
