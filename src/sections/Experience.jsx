import { GlassCard } from '../components/GlassCard';
import { SectionHeader } from '../components/SectionHeader';
import { experience } from '../data/portfolio';

export function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-7xl px-5 py-16 sm:py-20 lg:px-8">
      <SectionHeader
        eyebrow="Experience"
        title="A growing track record of security-focused project delivery."
        description="Mary Abenawa Techiesiwa Amoah’s experience combines analyst investigation habits, cybersecurity instruction, and portfolio-built SOC automation workflows that demonstrate practical security operations delivery."
      />
      <div className="relative space-y-6 before:absolute before:left-4 before:top-3 before:h-[calc(100%-1.5rem)] before:w-px before:bg-cyan-300/20 md:before:left-1/2">
        {experience.map((item, index) => (
          <div key={`${item.role}-${item.company}`} className="relative grid gap-6 md:grid-cols-2">
            <div className={`${index % 2 === 0 ? 'md:pr-10' : 'md:col-start-2 md:pl-10'}`}>
              <GlassCard delay={index * 0.08}>
                <p className="text-sm text-cyan-300">{item.period}</p>
                <h3 className="mt-3 text-2xl font-semibold text-white">{item.role}</h3>
                <p className="mt-1 text-slate-400">{item.company}</p>
                <ul className="mt-6 space-y-3">
                  {item.highlights.map((highlight) => (
                    <li key={highlight} className="text-sm leading-6 text-slate-300">
                      • {highlight}
                    </li>
                  ))}
                </ul>
              </GlassCard>
            </div>
            <span className="absolute left-2 top-8 h-5 w-5 rounded-full border-4 border-ink bg-cyan-300 shadow-glow md:left-1/2 md:-translate-x-1/2" />
          </div>
        ))}
      </div>
    </section>
  );
}
