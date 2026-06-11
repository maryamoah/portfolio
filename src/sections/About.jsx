import { GlassCard } from '../components/GlassCard';
import { SectionHeader } from '../components/SectionHeader';
import { profile } from '../data/portfolio';

const aboutDetails = [
  'Designs practical cybersecurity workflows for SOC operations, SIEM monitoring, incident response, threat intelligence enrichment, and automation.',
  'Supports security assessment work through careful VAPT practice, vulnerability identification, reporting, remediation guidance, and defensive validation.',
  'Builds cybersecurity instruction around realistic labs, evidence handling, investigation notes, and communication that learners can apply.',
  'Explores AI-assisted SOC operations, machine learning for security telemetry, interpretable anomaly detection, and digital forensics workflow automation.',
];

export function About() {
  return (
    <section id="about" className="mx-auto max-w-7xl px-5 py-16 sm:py-20 lg:px-8">
      <SectionHeader
        eyebrow="About"
        title="A credible security profile across operations, consulting, teaching, and research."
        description="Mary Abenawa Techiesiwa Amoah’s portfolio is written around practical evidence: how alerts are investigated, how workflows are documented, how automation stays accountable, and how learners build real security judgment."
      />
      <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
        <GlassCard>
          <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">Profile</p>
          <h3 className="mt-4 text-2xl font-semibold text-white sm:text-3xl">{profile.name}</h3>
          <p className="mt-3 text-sm leading-7 text-slate-300 sm:text-base">{profile.role}</p>
          <p className="mt-6 text-sm leading-7 text-slate-400">
            Mary focuses on structured investigation, careful escalation, analyst review, and clear
            communication. Her consulting angle is practical: help teams improve the workflows that
            connect detection, enrichment, response, reporting, training, and risk reduction.
          </p>
        </GlassCard>
        <GlassCard delay={0.08}>
          <div className="grid gap-4 md:grid-cols-2">
            {aboutDetails.map((detail) => (
              <div key={detail} className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
                <p className="text-sm leading-7 text-slate-300">{detail}</p>
              </div>
            ))}
          </div>
        </GlassCard>
      </div>
    </section>
  );
}
