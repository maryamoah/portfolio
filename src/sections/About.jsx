import { GlassCard } from '../components/GlassCard';
import { SectionHeader } from '../components/SectionHeader';
import { profile } from '../data/portfolio';

const aboutDetails = [
  'Builds practical workflows for triage, escalation, response documentation, and reporting.',
  'Supports security assessment work with careful validation, clear findings, and remediation guidance.',
  'Designs practical labs that help learners connect investigation habits to real security tools.',
  'Explores AI-assisted investigation, telemetry analysis, and digital forensics workflow automation.',
];

export function About() {
  return (
    <section id="about" className="mx-auto max-w-7xl px-5 py-16 sm:py-20 lg:px-8">
      <SectionHeader
        eyebrow="About"
        title="Cybersecurity Work Grounded in Practical Operations"
        description="Mary Abenawa Techiesiwa Amoah focuses on evidence-based security work: clear investigations, accountable automation, useful documentation, and practical learning experiences."
      />
      <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
        <GlassCard>
          <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">Profile</p>
          <h3 className="mt-4 text-2xl font-semibold text-white sm:text-3xl">{profile.name}</h3>
          <p className="mt-6 text-sm leading-7 text-slate-400">
            Mary’s consulting approach is practical and measured: improve the workflow, keep humans
            accountable for decisions, and make security findings easier to understand and act on.
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
