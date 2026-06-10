import { SectionHeader } from '../components/SectionHeader';
import { GlassCard } from '../components/GlassCard';
import { profile } from '../data/portfolio';

export function About() {
  return (
    <section id="about" className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
      <SectionHeader
        eyebrow="About"
        title="Practical security thinking with a clear communication style."
        description="Placeholder narrative for a portfolio that can be updated with real achievements, metrics, and case studies."
      />
      <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
        <GlassCard>
          <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">Profile</p>
          <h3 className="mt-4 text-3xl font-semibold text-white">{profile.name}</h3>
          <p className="mt-2 text-slate-300">{profile.role}</p>
          <p className="mt-6 text-sm leading-7 text-slate-400">
            Based in {profile.location}. This section can highlight education, career transition story,
            technical strengths, and the security problems Mary is excited to solve.
          </p>
        </GlassCard>
        <GlassCard delay={0.08}>
          <div className="grid gap-5 md:grid-cols-2">
            {[
              ['Analytical', 'Breaks down ambiguous alerts, risks, and requirements into structured next steps.'],
              ['Collaborative', 'Writes concise documentation that helps security, cloud, and business teams align.'],
              ['Curious', 'Uses labs, projects, and continuous learning to convert concepts into hands-on practice.'],
              ['Professional', 'Balances security rigor with pragmatic recommendations and clear prioritization.'],
            ].map(([title, copy]) => (
              <div key={title} className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                <h4 className="font-semibold text-white">{title}</h4>
                <p className="mt-3 text-sm leading-6 text-slate-400">{copy}</p>
              </div>
            ))}
          </div>
        </GlassCard>
      </div>
    </section>
  );
}
