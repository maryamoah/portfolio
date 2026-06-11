import { GlassCard } from '../components/GlassCard';
import { SectionHeader } from '../components/SectionHeader';
import { profile } from '../data/portfolio';

const roles = [
  {
    title: 'Practitioner',
    detail:
      'Applies security operations, threat intelligence, incident response, security information and event management engineering, and digital forensics workflows to practical investigation needs.',
  },
  {
    title: 'Builder',
    detail:
      'Creates security automation, dashboarding, enrichment, reporting, and evidence-handling workflows that improve visibility and response decisions.',
  },
  {
    title: 'Educator',
    detail:
      'Develops cybersecurity education materials, labs, mentoring support, and workshops that make investigation habits easier to learn.',
  },
  {
    title: 'Researcher',
    detail:
      'Explores artificial intelligence and machine learning security research, interpretable anomaly detection, vulnerability assessment, and security testing support.',
  },
];

const domains = [
  'Security Operations',
  'Threat Intelligence',
  'Incident Response',
  'SIEM Engineering',
  'Security Automation',
  'Cybersecurity Education',
  'AI & Machine Learning Security Research',
  'Vulnerability Assessment & Security Testing',
  'Digital Forensics Workflow Development',
];

export function About() {
  return (
    <section id="about" className="mx-auto max-w-7xl px-5 py-16 sm:py-20 lg:px-8">
      <SectionHeader
        eyebrow="About"
        title="Practitioner, Builder, Educator, and Researcher"
        description="Mary Abenawa Techiesiwa Amoah focuses on practical cybersecurity work that improves investigations, automation, learning, and security decision-making."
      />
      <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
        <GlassCard className="border-cyan-200/20 bg-slate-900/95">
          <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">Profile</p>
          <h3 className="mt-4 text-2xl font-semibold text-white sm:text-3xl">{profile.name}</h3>
          <p className="mt-6 text-sm leading-7 text-slate-200">
            Mary works at the intersection of analyst practice, workflow building, cybersecurity
            education, and applied security research. Her portfolio emphasizes clear investigation
            steps, accountable automation, evidence-aware reporting, and readable security guidance.
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {domains.map((domain) => (
              <span
                key={domain}
                className="rounded-full border border-cyan-200/20 bg-cyan-300/10 px-3 py-1 text-xs font-semibold text-cyan-100"
              >
                {domain}
              </span>
            ))}
          </div>
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
