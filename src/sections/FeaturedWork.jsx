import { useMemo, useState } from 'react';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { Badge } from '../components/Badge';
import { GlassCard } from '../components/GlassCard';
import { SectionHeader } from '../components/SectionHeader';
import { featuredWork, githubProjects, impactHighlights, projects, researchInterests } from '../data/portfolio';

const selectedTitles = featuredWork.map((project) => project.title);
const additionalTitles = [
  'AI-Assisted SOC Triage & Investigation',
  'Wazuh SIEM Engineering & Detection',
  'TheHive + Cortex Incident Response Workflow',
  'Automated Vulnerability Intelligence Newsletter',
  'AI-Assisted Penetration Testing Environment',
  'AI & Machine Learning Security Analytics with Isolation Forest',
  'Digital Forensics Evidence Packaging and Timeline Building',
  'Cybersecurity Instructor and Lab Development',
  'Vulnerability Assessment and Security Testing Practice',
];

function PillList({ items }) {
  return (
    <ul className="mt-4 grid gap-2 text-sm leading-6 text-slate-200">
      {items.slice(0, 6).map((item) => (
        <li key={item} className="flex gap-2">
          <span className="mt-2.5 h-1.5 w-1.5 flex-none rounded-full bg-cyan-300" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function DetailRow({ label, children }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.035] p-4">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">{label}</p>
      <div className="mt-2 text-sm leading-6 text-slate-200">{children}</div>
    </div>
  );
}

function ProjectPreview({ project, index }) {
  const [open, setOpen] = useState(false);
  const summary = project.outcome || project.approach;

  return (
    <GlassCard delay={index * 0.035} className="h-full bg-white/[0.035] p-5">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">{project.category}</p>
      <h3 className="mt-3 text-lg font-semibold text-white">{project.title}</h3>
      <p className="mt-2 text-sm leading-6 text-slate-200">{summary}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {project.tools.slice(0, 5).map((tool) => <Badge key={`${project.title}-${tool}`}>{tool}</Badge>)}
      </div>
      <p className="mt-4 text-sm font-semibold text-cyan-100">Impact: {project.outcome || 'Improves repeatability, visibility, and analyst-ready security decisions.'}</p>
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-cyan-200 transition hover:text-cyan-100"
        aria-expanded={open}
      >
        {open ? 'Hide Details' : 'View Details'} <ChevronDown className={`h-4 w-4 transition ${open ? 'rotate-180' : ''}`} />
      </button>
      {open ? (
        <div className="mt-4 grid gap-3 border-t border-white/10 pt-4">
          {['problem', 'approach', 'role', 'outcome'].map((key) => project[key] ? (
            <DetailRow key={key} label={key === 'role' ? 'Role' : key}>{project[key]}</DetailRow>
          ) : null)}
          <DetailRow label="Technologies"><div className="flex flex-wrap gap-2">{project.tools.map((tool) => <Badge key={`${project.title}-detail-${tool}`}>{tool}</Badge>)}</div></DetailRow>
        </div>
      ) : null}
    </GlassCard>
  );
}

export function FeaturedWork() {
  const [showMore, setShowMore] = useState(false);
  const selectedProjects = useMemo(() => selectedTitles.map((title) => projects.find((project) => project.title === title)).filter(Boolean), []);
  const additionalProjects = useMemo(() => additionalTitles.map((title) => projects.find((project) => project.title === title)).filter(Boolean), []);
  const visibleAdditional = showMore ? additionalProjects : additionalProjects.slice(0, 3);

  return (
    <>
      <section id="featured-projects" className="mx-auto max-w-7xl px-5 py-10 sm:py-14 lg:px-8">
        <SectionHeader
          eyebrow="Featured Engineering Projects"
          title="Security platforms, automation, and intelligence systems"
          description="Three senior-engineering project areas that show impact first and implementation details second."
        />
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {selectedProjects.map((project, index) => {
            const Icon = project.icon;
            return (
              <GlassCard key={project.title} delay={index * 0.05} className="relative h-full overflow-hidden border-cyan-200/25 bg-slate-900/95 p-4 sm:p-6">
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-cyan-300 via-sky-400 to-cyan-200 opacity-80" />
                <div className="grid h-11 w-11 place-items-center rounded-2xl bg-cyan-300/15"><Icon className="h-5 w-5 text-cyan-100" /></div>
                <h3 className="mt-4 text-lg font-semibold tracking-tight text-white sm:text-xl">{project.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-200">{featuredWork[index].summary}</p>
                <PillList items={featuredWork[index].highlights} />
                <a href="#additional-projects" className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-cyan-200 transition hover:text-cyan-100">
                  View Case Study <ArrowRight className="h-4 w-4" />
                </a>
              </GlassCard>
            );
          })}
        </div>
      </section>


      <section id="impact-highlights" className="mx-auto max-w-7xl px-5 py-8 sm:py-10 lg:px-8">
        <SectionHeader
          eyebrow="Impact Highlights"
          title="Selected security outcomes"
          description="Selected outcomes across security operations, automation, intelligence, and AI-assisted security workflows."
        />
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
          {impactHighlights.map((item, index) => (
            <GlassCard key={item.title} delay={index * 0.025} className="h-full bg-white/[0.035] p-4 sm:p-4">
              <p className="text-sm font-semibold text-white">{item.title}</p>
              <p className="mt-2 text-xs leading-5 text-slate-300 sm:text-[0.8rem]">{item.description}</p>
            </GlassCard>
          ))}
        </div>
      </section>

      <section id="additional-projects" className="mx-auto max-w-7xl px-5 py-12 sm:py-14 lg:px-8">
        <SectionHeader
          eyebrow="Additional Projects & Research"
          title="Compact case studies and research experiments"
          description="Preview cards stay short by default; details expand only when needed."
        />
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {visibleAdditional.map((project, index) => <ProjectPreview key={project.title} project={project} index={index} />)}
          {showMore ? researchInterests.slice(0, 3).map((interest, index) => (
            <GlassCard key={interest.title} delay={index * 0.035} className="bg-white/[0.035] p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">Research</p>
              <h3 className="mt-3 text-lg font-semibold text-white">{interest.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-200">{interest.description}</p>
            </GlassCard>
          )) : null}
          {showMore ? githubProjects.slice(0, 3).map((project, index) => (
            <GlassCard key={project.repo} delay={index * 0.035} className="bg-white/[0.035] p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">GitHub</p>
              <h3 className="mt-3 break-words font-mono text-lg font-semibold text-white">{project.repo}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-200">{project.description}</p>
            </GlassCard>
          )) : null}
        </div>
        <div className="mt-8 text-center">
          <button type="button" onClick={() => setShowMore((value) => !value)} className="rounded-full border border-cyan-200/25 bg-white/5 px-5 py-3 text-sm font-semibold text-cyan-100 transition hover:border-cyan-200/50 hover:bg-cyan-300/10" aria-expanded={showMore}>
            {showMore ? 'Show Less' : 'Show More'}
          </button>
        </div>
      </section>
    </>
  );
}
