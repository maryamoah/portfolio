import { ArrowRight } from 'lucide-react';
import { GlassCard } from '../components/GlassCard';
import { SectionHeader } from '../components/SectionHeader';
import { featuredWork } from '../data/portfolio';

export function FeaturedWork() {
  return (
    <section id="featured-work" className="mx-auto max-w-7xl px-5 py-14 sm:py-16 lg:px-8">
      <SectionHeader
        eyebrow="Selected Projects"
        title="Featured Work"
        description="Selected projects that show Mary’s work across security operations, automation, reporting, threat intelligence, and applied AI."
      />
      <div className="grid gap-5 lg:grid-cols-3">
        {featuredWork.map((project, index) => {
          const Icon = project.icon;
          return (
            <GlassCard
              key={project.title}
              delay={index * 0.05}
              className="group relative h-full overflow-hidden border-cyan-200/25 bg-slate-900/95 p-6 sm:p-7"
            >
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-cyan-300 via-sky-400 to-cyan-200 opacity-80" />
              <div className="flex items-start justify-between gap-4">
                <div className="grid h-12 w-12 place-items-center rounded-2xl bg-cyan-300/15 shadow-glow">
                  <Icon className="h-6 w-6 text-cyan-100" />
                </div>
                <span className="rounded-full border border-cyan-200/20 bg-cyan-300/10 px-3 py-1 text-xs font-semibold text-cyan-100">
                  {project.category}
                </span>
              </div>
              <h3 className="mt-7 text-2xl font-semibold tracking-tight text-white">{project.title}</h3>
              <p className="mt-4 text-sm leading-7 text-slate-200">{project.summary}</p>
              <ul className="mt-6 grid gap-3">
                {project.highlights.map((highlight) => (
                  <li key={highlight} className="flex gap-3 text-sm leading-6 text-slate-100">
                    <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-cyan-300" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#case-studies"
                className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-cyan-200 transition group-hover:text-cyan-100"
              >
                View case studies <ArrowRight className="h-4 w-4" />
              </a>
            </GlassCard>
          );
        })}
      </div>
    </section>
  );
}
