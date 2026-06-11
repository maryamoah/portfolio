import { GlassCard } from '../components/GlassCard';
import { SectionHeader } from '../components/SectionHeader';
import { profile } from '../data/portfolio';

const roles = [
  {
    title: 'Practitioner',
    detail:
      'Approaches investigations with evidence review, triage discipline, escalation judgment, and clear documentation habits.',
  },
  {
    title: 'Security Automation Engineer',
    detail:
      'Designs governed automation patterns that preserve human review while reducing repetitive enrichment and reporting work.',
  },
  {
    title: 'Educator',
    detail:
      'Turns security workflows into labs, workshops, mentoring exercises, and learner-friendly investigation scenarios.',
  },
  {
    title: 'Researcher',
    detail:
      'Studies interpretable analysis methods, anomaly detection, and AI-assisted analyst workflows with attention to limitations.',
  },
];

export function About() {
  return (
    <section id="about" className="mx-auto max-w-7xl px-5 py-16 sm:py-20 lg:px-8">
      <SectionHeader
        eyebrow="Profile"
        title="About Mary"
        description="Mary Abenawa Techiesiwa Amoah combines investigation practice, governed automation, practical teaching, and applied research."
      />
      <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
        <GlassCard className="border-cyan-200/20 bg-slate-900/95">
          <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">Professional Profile</p>
          <h3 className="mt-4 text-2xl font-semibold text-white sm:text-3xl">{profile.name}</h3>
          <p className="mt-6 text-sm leading-7 text-slate-200">
            Her portfolio emphasizes how security work is planned, documented, reviewed, and
            communicated. The through-line is practical execution: clear investigation steps,
            accountable automation, evidence-aware reporting, and readable recommendations.
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
