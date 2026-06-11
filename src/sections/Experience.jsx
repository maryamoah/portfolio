import { GlassCard } from '../components/GlassCard';
import { SectionHeader } from '../components/SectionHeader';
import { experience } from '../data/portfolio';

export function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-7xl px-5 py-16 sm:py-20 lg:px-8">
      <SectionHeader
        eyebrow="Experience"
        title="Security Practice, Education, and Research"
        description="Mary’s experience is presented as current focus areas across analyst workflows, cybersecurity education, automation, and applied research."
      />
      <div className="relative space-y-5 md:space-y-6 md:before:absolute md:before:left-1/2 md:before:top-3 md:before:h-[calc(100%-1.5rem)] md:before:w-px md:before:bg-cyan-300/25">
        {experience.map((item, index) => (
          <div key={`${item.role}-${item.company}`} className="relative grid gap-4 md:gap-6 md:grid-cols-2">
            <div className={`${index % 2 === 0 ? 'md:pr-10' : 'md:col-start-2 md:pl-10'}`}>
              <GlassCard delay={index * 0.08}>
                <p className="text-sm text-cyan-300">{item.period}</p>
                <h3 className="mt-3 text-2xl font-semibold text-white">{item.role}</h3>
                <p className="mt-1 text-slate-200">{item.company}</p>
                <ul className="mt-6 space-y-3">
                  {item.highlights.map((highlight) => (
                    <li key={highlight} className="text-sm leading-6 text-slate-200">
                      • {highlight}
                    </li>
                  ))}
                </ul>
              </GlassCard>
            </div>
            <span className="absolute top-8 hidden h-5 w-5 rounded-full border-4 border-ink bg-cyan-300 shadow-glow md:left-1/2 md:block md:-translate-x-1/2" />
          </div>
        ))}
      </div>
    </section>
  );
}
