import { Award } from 'lucide-react';
import { GlassCard } from '../components/GlassCard';
import { SectionHeader } from '../components/SectionHeader';
import { certifications, profile } from '../data/portfolio';

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
        eyebrow="About"
        title="Practitioner, Security Automation Engineer, Educator, and Researcher"
        description="Mary Abenawa Techiesiwa Amoah combines investigation practice, governed automation, practical teaching, and applied research."
      />
      <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
        <GlassCard className="border-cyan-200/20 bg-slate-900/95">
          <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">Profile</p>
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

      <GlassCard delay={0.1} className="mt-6 border-white/10 bg-slate-900/90">
        <div className="mb-5 flex items-center gap-3">
          <div className="grid h-10 w-10 place-items-center rounded-2xl bg-cyan-300/10">
            <Award className="h-5 w-5 text-cyan-200" />
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan-300">Evidence</p>
            <h3 className="text-xl font-semibold text-white">Documented Portfolio Capability Areas</h3>
          </div>
        </div>
        <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-3">
          {certifications.map((cert) => (
            <div key={cert.name} className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
              <p className="text-sm font-semibold text-white">{cert.name}</p>
              <p className="mt-2 text-xs leading-5 text-slate-200">{cert.status}</p>
            </div>
          ))}
        </div>
      </GlassCard>
    </section>
  );
}
