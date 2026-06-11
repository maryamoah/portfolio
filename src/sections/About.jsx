import { SectionHeader } from '../components/SectionHeader';
import { GlassCard } from '../components/GlassCard';
import { profile } from '../data/portfolio';

export function About() {
  return (
    <section id="about" className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
      <SectionHeader
        eyebrow="About"
        title="A real profile focused on SOC work, cybersecurity teaching, automation, AI/ML security, and research."
        description="Mary Abenawa Techiesiwa Amoah’s portfolio centers on detecting events, enriching evidence, documenting incidents, supporting digital forensics workflows, automating repetitive steps safely, and teaching cybersecurity in a way learners can apply."
      />
      <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
        <GlassCard>
          <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">Profile</p>
          <h3 className="mt-4 text-3xl font-semibold text-white">{profile.name}</h3>
          <p className="mt-2 text-slate-300">{profile.role}</p>
          <p className="mt-6 text-sm leading-7 text-slate-400">
            Based in {profile.location}, Mary Abenawa Techiesiwa Amoah focuses on security operations workflows that connect SIEM alerts,
            incident response, threat intelligence, firewall containment, AI/ML security analytics, VAPT
            practice, digital forensics support, and practical cybersecurity education. Her work emphasizes
            structured investigation, careful escalation, human review, and communication that helps both
            technical and non-technical stakeholders act on risk.
          </p>
        </GlassCard>
        <GlassCard delay={0.08}>
          <div className="grid gap-5 md:grid-cols-2">
            {profile.focusAreas.map((focus) => (
              <div key={focus} className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                <h4 className="font-semibold text-white">{focus.split(' and ')[0]}</h4>
                <p className="mt-3 text-sm leading-6 text-slate-400">{focus}</p>
              </div>
            ))}
          </div>
        </GlassCard>
      </div>
    </section>
  );
}
