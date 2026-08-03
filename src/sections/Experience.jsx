import { GlassCard } from '../components/GlassCard';
import { SectionHeader } from '../components/SectionHeader';
import { experience } from '../data/portfolio';

export function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-7xl px-5 py-12 sm:py-14 lg:px-8">
      <SectionHeader
        eyebrow="Experience"
        title="Security Practice, Education, and Research"
        description="A concise timeline of my current security operations, instruction, automation, and research focus areas."
      />
      <div className="relative mx-auto max-w-3xl space-y-5 sm:space-y-6">
        <div className="absolute bottom-2 left-3 top-2 w-px bg-cyan-300/25 sm:left-4" aria-hidden="true" />
        {experience.map((item, index) => (
          <div key={`${item.role}-${item.company}`} className="relative pl-10 sm:pl-12">
            <span className="absolute left-3 top-8 h-3 w-3 -translate-x-1/2 rounded-full border-4 border-ink bg-cyan-300 shadow-glow sm:left-4" />
            <GlassCard delay={index * 0.08}>
              <h3 className="text-2xl font-semibold text-white">{item.role}</h3>
              <p className="mt-2 text-base font-semibold text-cyan-300">{item.period}</p>
              <p className="mt-1 text-slate-200">{item.company}</p>
              <ul className="mt-5 space-y-2">
                {item.highlights.map((highlight) => (
                  <li key={highlight} className="text-sm leading-6 text-slate-200">
                    • {highlight}
                  </li>
                ))}
              </ul>
            </GlassCard>
          </div>
        ))}
      </div>
    </section>
  );
}
