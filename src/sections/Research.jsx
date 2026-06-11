import { GlassCard } from '../components/GlassCard';
import { SectionHeader } from '../components/SectionHeader';
import { researchInterests } from '../data/portfolio';

export function Research() {
  return (
    <section id="research" className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
      <SectionHeader
        eyebrow="Research / PhD Interests"
        title="Human-centered AI, telemetry analytics, and practical cybersecurity education."
        description="Mary Abenawa Techiesiwa Amoah’s research interests focus on careful, explainable, analyst-centered ways to improve SOC work, threat intelligence automation, digital forensics workflows, and practical cybersecurity learning."
      />
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {researchInterests.map((interest, index) => {
          const Icon = interest.icon;
          return (
            <GlassCard key={interest.title} delay={index * 0.05} className="h-full">
              <div className="mb-5 grid h-12 w-12 place-items-center rounded-2xl bg-cyan-300/10">
                <Icon className="h-6 w-6 text-cyan-200" />
              </div>
              <h3 className="text-xl font-semibold text-white">{interest.title}</h3>
              <p className="mt-4 text-sm leading-7 text-slate-400">{interest.description}</p>
            </GlassCard>
          );
        })}
      </div>
    </section>
  );
}
