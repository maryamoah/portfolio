import { GitBranch } from 'lucide-react';
import { Badge } from '../components/Badge';
import { GlassCard } from '../components/GlassCard';
import { SectionHeader } from '../components/SectionHeader';
import { githubProjects } from '../data/portfolio';

export function GitHubProjects() {
  return (
    <section id="github-projects" className="mx-auto max-w-7xl px-5 py-16 sm:py-20 lg:px-8">
      <SectionHeader
        eyebrow="GitHub Projects"
        title="Repository-Backed Security Projects"
        description="A focused view of project areas written around intended use, careful boundaries, and portfolio evidence without inventing production metrics."
      />
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {githubProjects.map((project, index) => (
          <GlassCard key={project.repo} delay={index * 0.035} className="h-full">
            <div className="mb-5 flex flex-wrap items-start justify-between gap-4">
              <div className="grid h-12 w-12 place-items-center rounded-2xl bg-cyan-300/10">
                <GitBranch className="h-6 w-6 text-cyan-200" />
              </div>
              <p className="max-w-full rounded-full border border-cyan-300/20 bg-cyan-300/10 px-3 py-1 text-xs font-medium leading-5 text-cyan-100">
                {project.category}
              </p>
            </div>
            <h3 className="break-words font-mono text-lg font-semibold text-white sm:text-xl">{project.repo}</h3>
            <p className="mt-4 text-sm leading-7 text-slate-300">{project.description}</p>
            <div className="mt-5 flex flex-wrap gap-2">
              {project.tools.map((tool) => (
                <Badge key={`${project.repo}-${tool}`}>{tool}</Badge>
              ))}
            </div>
          </GlassCard>
        ))}
      </div>
    </section>
  );
}
