import { Badge } from '../components/Badge';
import { GlassCard } from '../components/GlassCard';
import { SectionHeader } from '../components/SectionHeader';
import { certifications, education, experience } from '../data/portfolio';

export function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-7xl px-5 py-12 sm:py-14 lg:px-8">
      <SectionHeader
        eyebrow="Experience"
        title="Professional Experience"
        description="A timeline of my security operations experience across enterprise SIEM engineering, MSSP, and SOC analyst roles."
      />
      <div className="relative mx-auto max-w-3xl space-y-5 sm:space-y-6">
        <div className="absolute bottom-2 left-3 top-2 w-px bg-cyan-300/25 sm:left-4" aria-hidden="true" />
        {experience.map((item, index) => (
          <div key={`${item.role}-${item.employer}`} className="relative pl-10 sm:pl-12">
            <span className="absolute left-3 top-8 h-3 w-3 -translate-x-1/2 rounded-full border-4 border-ink bg-cyan-300 shadow-glow sm:left-4" />
            <GlassCard delay={index * 0.08}>
              <h3 className="text-2xl font-semibold text-white">{item.role}</h3>
              <p className="mt-2 text-lg font-semibold text-white">{item.employer}</p>
              <p className="mt-1 text-base font-semibold text-cyan-300">{item.location} · {item.period}</p>
              {item.note ? (
                <div className="mt-3">
                  <Badge>{item.note}</Badge>
                </div>
              ) : null}
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

      <div className="mx-auto mt-10 grid max-w-3xl gap-8 sm:grid-cols-2 sm:mt-12">
        <div>
          <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">Certifications</h3>
          <ul className="mt-4 space-y-2">
            {certifications.map((cert) => (
              <li key={cert} className="text-sm leading-6 text-slate-200">{cert}</li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">Education</h3>
          <ul className="mt-4 space-y-3">
            {education.map((item) => (
              <li key={item.degree} className="text-sm leading-6 text-slate-200">
                <p className="font-semibold text-white">{item.degree}</p>
                <p>{item.school}{item.note ? ` — ${item.note}` : ''}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
