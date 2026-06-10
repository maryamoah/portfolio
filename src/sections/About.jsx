import { SectionHeader } from '../components/SectionHeader';
import { GlassCard } from '../components/GlassCard';
import { profile, researchInterests } from '../data/portfolio';

export function About() {
  return (
    <section id="about" className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
      <SectionHeader
        eyebrow="About"
        title="Cybersecurity operations, automation, and education with clear analyst judgment."
        description="Mary Abenawa Techiesiwa Amoah’s portfolio centers on practical SOC work: detecting events, enriching evidence, documenting incidents, automating repetitive steps safely, and teaching cybersecurity in a way learners can apply."
      />
      <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
        <GlassCard>
          <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">Profile</p>
          <h3 className="mt-4 text-3xl font-semibold text-white">{profile.name}</h3>
          <p className="mt-2 text-slate-300">{profile.role}</p>
          <p className="mt-6 text-sm leading-7 text-slate-400">
            Based in {profile.location}, Mary Abenawa Techiesiwa Amoah focuses on security operations workflows that connect SIEM alerts,
            incident response, threat intelligence, firewall containment, executive reporting, and practical
            cybersecurity education. Her work emphasizes structured investigation, careful escalation, and
            communication that helps both technical and non-technical stakeholders act on risk.
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

      <div className="mt-10 grid gap-6 lg:grid-cols-3">
        {researchInterests.map((interest, index) => {
          const Icon = interest.icon;
          return (
            <GlassCard key={interest.title} delay={index * 0.05} className="h-full">
              <div className="mb-5 grid h-12 w-12 place-items-center rounded-2xl bg-cyan-300/10">
                <Icon className="h-6 w-6 text-cyan-200" />
              </div>
              <p className="text-sm uppercase tracking-[0.25em] text-cyan-300">Research interest</p>
              <h3 className="mt-3 text-xl font-semibold text-white">{interest.title}</h3>
              <p className="mt-4 text-sm leading-7 text-slate-400">{interest.description}</p>
            </GlassCard>
          );
        })}
      </div>
    </section>
  );
}
