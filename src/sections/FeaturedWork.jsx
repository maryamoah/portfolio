import { useMemo, useState } from 'react';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { Badge } from '../components/Badge';
import { GlassCard } from '../components/GlassCard';
import { SectionHeader } from '../components/SectionHeader';
import { featuredWork, githubProjects, projects, researchInterests } from '../data/portfolio';

const selectedTitles = featuredWork.map((project) => project.title);
const allWorkTitles = [
  'AI-Assisted SOC Triage & Investigation',
  'Wazuh SIEM Engineering & Detection',
  'TheHive + Cortex Incident Response Workflow',
  'Automated Vulnerability Intelligence & Security Newsletter',
  'AI-Assisted Penetration Testing Environment',
];

function Field({ label, children }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.035] p-4">
      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-300">{label}</p>
      <div className="mt-2 text-sm leading-6 text-slate-200">{children}</div>
    </div>
  );
}

function TechnologyList({ tools }) {
  return (
    <div className="flex flex-wrap gap-2">
      {tools.map((tool) => (
        <Badge key={tool}>{tool}</Badge>
      ))}
    </div>
  );
}

export function FeaturedWork() {
  const [openCase, setOpenCase] = useState(null);
  const [showAll, setShowAll] = useState(false);

  const selectedProjects = useMemo(
    () => selectedTitles.map((title) => projects.find((project) => project.title === title)).filter(Boolean),
    [],
  );
  const secondaryProjects = useMemo(
    () => allWorkTitles.map((title) => projects.find((project) => project.title === title)).filter(Boolean),
    [],
  );

  return (
    <section id="selected-work" className="mx-auto max-w-7xl px-5 py-16 sm:py-20 lg:px-8">
      <SectionHeader
        eyebrow="Selected Work"
        title="Security systems Mary designs and builds"
        description="Three concise case studies anchor the portfolio: SOC reporting, SOAR automation, and threat intelligence distribution."
      />

      <div className="grid gap-6 xl:grid-cols-3">
        {selectedProjects.map((project, index) => {
          const Icon = project.icon;
          const isOpen = openCase === project.title;
          const isPriority = index < 2;
          return (
            <GlassCard
              key={project.title}
              delay={index * 0.05}
              className={`relative h-full overflow-hidden bg-slate-900/95 p-6 sm:p-7 ${isPriority ? 'border-cyan-200/40 shadow-glow' : 'border-cyan-200/20'}`}
            >
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-cyan-300 via-sky-400 to-cyan-200 opacity-80" />
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <div className="grid h-12 w-12 place-items-center rounded-2xl bg-cyan-300/15">
                  <Icon className="h-6 w-6 text-cyan-100" />
                </div>
                <span className="w-fit rounded-full border border-cyan-200/20 bg-cyan-300/10 px-3 py-1 text-xs font-semibold text-cyan-100">
                  {project.category}
                </span>
              </div>

              <h3 className="mt-6 text-2xl font-semibold tracking-tight text-white">{project.title}</h3>
              <div className="mt-6 grid gap-4">
                <Field label="Problem"><p>{project.problem}</p></Field>
                <Field label="Approach"><p>{project.approach}</p></Field>
                <Field label="Role"><p>{project.role}</p></Field>
                <Field label="Technologies"><TechnologyList tools={project.tools} /></Field>
              </div>

              <button
                type="button"
                onClick={() => setOpenCase(isOpen ? null : project.title)}
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-cyan-200 transition hover:text-cyan-100"
                aria-expanded={isOpen}
              >
                {isOpen ? 'Hide Details' : 'View Details'} <ChevronDown className={`h-4 w-4 transition ${isOpen ? 'rotate-180' : ''}`} />
              </button>

              {isOpen ? (
                <div className="mt-5 space-y-4 border-t border-white/10 pt-5">
                  {project.capabilities ? (
                    <Field label="Capabilities">
                      <ul className="grid gap-2 sm:grid-cols-2">
                        {project.capabilities.map((capability) => (
                          <li key={capability} className="flex gap-2">
                            <span className="mt-2.5 h-1.5 w-1.5 flex-none rounded-full bg-cyan-300" />
                            <span>{capability}</span>
                          </li>
                        ))}
                      </ul>
                    </Field>
                  ) : null}
                  {project.aiReporting ? (
                    <Field label="AI-Assisted Reporting">
                      <ul className="grid gap-2 sm:grid-cols-2">
                        {project.aiReporting.map((item) => (
                          <li key={item} className="flex gap-2">
                            <span className="mt-2.5 h-1.5 w-1.5 flex-none rounded-full bg-cyan-300" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </Field>
                  ) : null}
                  {project.outcome ? <Field label="Outcome"><p>{project.outcome}</p></Field> : null}
                </div>
              ) : null}
            </GlassCard>
          );
        })}
      </div>

      <div className="mt-10 text-center">
        <button
          type="button"
          onClick={() => setShowAll((value) => !value)}
          className="inline-flex items-center gap-2 rounded-full border border-cyan-200/25 bg-white/5 px-5 py-3 text-sm font-semibold text-cyan-100 transition hover:border-cyan-200/50 hover:bg-cyan-300/10"
          aria-expanded={showAll}
        >
          {showAll ? 'Hide Additional Work' : 'View All Work'} <ArrowRight className="h-4 w-4" />
        </button>
      </div>

      {showAll ? (
        <div className="mt-8 space-y-8">
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {secondaryProjects.map((project) => (
              <GlassCard key={project.title} className="h-full bg-white/[0.035] p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-300">{project.category}</p>
                <h3 className="mt-3 text-lg font-semibold text-white">{project.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-200">{project.outcome || project.approach}</p>
              </GlassCard>
            ))}
          </div>

          <div id="github-projects" className="grid gap-4 lg:grid-cols-2">
            <GlassCard className="bg-slate-900/90">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-300">GitHub Projects</p>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                {githubProjects.slice(0, 6).map((project) => (
                  <div key={project.repo} className="rounded-2xl border border-white/10 bg-white/[0.035] p-4">
                    <h4 className="break-words font-mono text-sm font-semibold text-white">{project.repo}</h4>
                    <p className="mt-2 text-xs leading-5 text-slate-300">{project.description}</p>
                  </div>
                ))}
              </div>
            </GlassCard>
            <GlassCard className="bg-slate-900/90">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-300">Research Experiments</p>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                {researchInterests.slice(0, 6).map((interest) => (
                  <div key={interest.title} className="rounded-2xl border border-white/10 bg-white/[0.035] p-4">
                    <h4 className="text-sm font-semibold text-white">{interest.title}</h4>
                    <p className="mt-2 text-xs leading-5 text-slate-300">{interest.description}</p>
                  </div>
                ))}
              </div>
            </GlassCard>
          </div>
        </div>
      ) : null}
    </section>
  );
}
