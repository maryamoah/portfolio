import { useMemo, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { GlassCard } from '../components/GlassCard';
import { SectionHeader } from '../components/SectionHeader';
import { featuredWork, projects } from '../data/portfolio';

const flagshipTitles = new Set(featuredWork.map((project) => project.title));

export function FeaturedWork() {
  const [showAll, setShowAll] = useState(false);
  const secondaryProjects = useMemo(
    () => projects.filter((project) => !flagshipTitles.has(project.title)).slice(0, 6),
    [],
  );

  return (
    <section id="featured-work" className="mx-auto max-w-7xl px-5 py-12 sm:py-14 lg:px-8">
      <SectionHeader
        eyebrow="Flagship Projects"
        title="Featured Work"
        description="Three flagship projects summarize what Mary builds: SOC reporting platforms, SOAR automation, and threat intelligence distribution systems."
      />
      <div className="grid gap-5 lg:grid-cols-3">
        {featuredWork.map((project, index) => {
          const Icon = project.icon;
          return (
            <GlassCard
              key={project.title}
              delay={index * 0.05}
              className={`group relative h-full overflow-hidden border-cyan-200/25 bg-slate-900/95 p-6 sm:p-7 ${index === 0 ? 'lg:scale-[1.02] lg:border-cyan-200/40' : ''}`}
            >
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-cyan-300 via-sky-400 to-cyan-200 opacity-80" />
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <div className="grid h-12 w-12 place-items-center rounded-2xl bg-cyan-300/15 shadow-glow">
                  <Icon className="h-6 w-6 text-cyan-100" />
                </div>
                <span className="w-fit rounded-full border border-cyan-200/20 bg-cyan-300/10 px-3 py-1 text-xs font-semibold text-cyan-100">
                  {project.category}
                </span>
              </div>
              <h3 className="mt-6 text-2xl font-semibold tracking-tight text-white">{project.title}</h3>
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
                View case study details <ArrowRight className="h-4 w-4" />
              </a>
            </GlassCard>
          );
        })}
      </div>

      <div className="mt-8 text-center">
        <button
          type="button"
          onClick={() => setShowAll((value) => !value)}
          className="rounded-full border border-cyan-200/25 bg-white/5 px-5 py-3 text-sm font-semibold text-cyan-100 transition hover:border-cyan-200/50 hover:bg-cyan-300/10"
          aria-expanded={showAll}
        >
          {showAll ? 'Hide Secondary Projects' : 'View All Projects'}
        </button>
      </div>

      {showAll ? (
        <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {secondaryProjects.map((project) => (
            <GlassCard key={project.title} className="h-full bg-white/[0.035] p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-300">{project.category}</p>
              <h3 className="mt-3 text-lg font-semibold text-white">{project.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-200">{project.outcome || project.problem}</p>
            </GlassCard>
          ))}
        </div>
      ) : null}
    </section>
  );
}
