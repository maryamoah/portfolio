import { GlassCard } from '../components/GlassCard';
import { SectionHeader } from '../components/SectionHeader';
import { experience } from '../data/portfolio';

export function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-7xl px-5 py-12 sm:py-14 lg:px-8">
      <SectionHeader
        eyebrow="Experience"
        title="Security Practice, Education, and Research"
        description="A concise timeline of Mary’s current security operations, instruction, automation, and research focus areas."
      />
      <div className="relative space-y-5 lg:space-y-6 lg:before:absolute lg:before:left-1/2 lg:before:top-3 lg:before:h-[calc(100%-1.5rem)] lg:before:w-px lg:before:bg-cyan-300/25">
        {experience.map((item, index) => (
          <div key={`${item.role}-${item.company}`} className="relative grid gap-4 lg:gap-6 lg:grid-cols-2">
            <div className={`${index % 2 === 0 ? 'lg:pr-10' : 'lg:col-start-2 lg:pl-10'}`}>
              <GlassCard delay={index * 0.08}>
                <p className="text-sm text-cyan-300">{item.period}</p>
                <h3 className="mt-3 text-2xl font-semibold text-white">{item.role}</h3>
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
            <span className="absolute top-8 hidden h-5 w-5 rounded-full border-4 border-ink bg-cyan-300 shadow-glow lg:left-1/2 lg:block lg:-translate-x-1/2" />
          </div>
        ))}
      </div>
    </section>
  );
}
