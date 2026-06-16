import { GlassCard } from '../components/GlassCard';
import { SectionHeader } from '../components/SectionHeader';
import { profile } from '../data/portfolio';

const roles = [
  { title: 'Practitioner', detail: 'Evidence-driven investigations and defensible response decisions.' },
  { title: 'Engineer', detail: 'SOC platforms, automation workflows, dashboards, and integrations.' },
  { title: 'Educator', detail: 'Practical labs, mentoring, and security skills development.' },
  { title: 'Researcher', detail: 'AI-assisted security analysis and explainable cybersecurity workflows.' },
];

export function About() {
  return (
    <section id="about" className="mx-auto max-w-7xl px-5 py-10 sm:py-14 lg:px-8">
      <SectionHeader
        eyebrow="About"
        title="A cybersecurity builder with an operations mindset"
        description="Mary connects SOC engineering, automation, intelligence, reporting, education, and research into practical systems."
      />
      <GlassCard className="border-cyan-200/20 bg-slate-900/95">
        <div className="grid gap-5 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">{profile.name}</p>
            <h3 className="mt-4 text-2xl font-semibold text-white sm:text-3xl">Builds cybersecurity platforms that improve visibility, response, reporting, and research quality.</h3>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {roles.map((role) => (
              <div key={role.title} className="rounded-2xl border border-white/10 bg-white/[0.04] p-3 sm:p-4">
                <h4 className="text-base font-semibold text-white">{role.title}</h4>
                <p className="mt-1 text-sm leading-5 text-slate-200">{role.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </GlassCard>
    </section>
  );
}
