import { GlassCard } from '../components/GlassCard';
import { SectionHeader } from '../components/SectionHeader';
import { professionalFocus } from '../data/portfolio';

export function ProfessionalFocus() {
  return (
    <section id="professional-focus" className="mx-auto max-w-7xl px-5 py-16 sm:py-20 lg:px-8">
      <SectionHeader
        eyebrow="Professional Focus"
        title="Practical security operations with clear judgment and useful documentation."
        description="Mary’s work is centered on operational cybersecurity: triage, enrichment, automation, investigation support, defensive validation, and training that teams can actually use."
      />
      <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
        {professionalFocus.map((focus, index) => {
          const Icon = focus.icon;
          return (
            <GlassCard
              key={focus.title}
              delay={index * 0.04}
              className="h-full border-cyan-200/20 bg-slate-900/90"
            >
              <div className="mb-5 grid h-12 w-12 place-items-center rounded-2xl bg-cyan-300/15">
                <Icon className="h-6 w-6 text-cyan-100" />
              </div>
              <h3 className="text-xl font-semibold text-white">{focus.title}</h3>
              <p className="mt-4 text-sm leading-7 text-slate-200">{focus.description}</p>
            </GlassCard>
          );
        })}
      </div>
    </section>
  );
}
