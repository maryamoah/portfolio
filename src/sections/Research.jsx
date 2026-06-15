import { GlassCard } from '../components/GlassCard';
import { SectionHeader } from '../components/SectionHeader';
import { researchInterests } from '../data/portfolio';

export function Research() {
  return (
    <section id="research" className="mx-auto max-w-7xl px-5 py-16 sm:py-20 lg:px-8">
      <SectionHeader
        eyebrow="Research"
        title="AI-Assisted Security Operations Research"
        description="Concise research themes supporting—but not overshadowing—the project work."
      />
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {researchInterests.slice(0, 6).map((interest, index) => {
          const Icon = interest.icon;
          return (
            <GlassCard key={interest.title} delay={index * 0.04} className="h-full bg-white/[0.035]">
              <div className="mb-4 grid h-10 w-10 place-items-center rounded-2xl bg-cyan-300/10">
                <Icon className="h-5 w-5 text-cyan-200" />
              </div>
              <h3 className="text-lg font-semibold text-white">{interest.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-200">{interest.description}</p>
            </GlassCard>
          );
        })}
      </div>
    </section>
  );
}
