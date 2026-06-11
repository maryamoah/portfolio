import { GitBranch } from 'lucide-react';
import { Badge } from '../components/Badge';
import { GlassCard } from '../components/GlassCard';
import { SectionHeader } from '../components/SectionHeader';
import { githubProjects } from '../data/portfolio';

export function GitHubProjects() {
  return (
    <section id="github-projects" className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
      <SectionHeader
        eyebrow="GitHub Projects"
        title="Repository-backed projects across SOC automation, AI/ML security, threat intelligence, and forensics."
        description="A focused view of Mary Abenawa Techiesiwa Amoah’s GitHub project areas, written carefully around what each repository is designed to support without inventing production metrics."
      />
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {githubProjects.map((project, index) => (
          <GlassCard key={project.repo} delay={index * 0.035} className="h-full">
            <div className="mb-5 flex items-start justify-between gap-4">
              <div className="grid h-12 w-12 place-items-center rounded-2xl bg-cyan-300/10">
                <GitBranch className="h-6 w-6 text-cyan-200" />
              </div>
              <p className="rounded-full border border-cyan-300/20 bg-cyan-300/10 px-3 py-1 text-xs font-medium text-cyan-100">
                {project.category}
              </p>
            </div>
            <h3 className="font-mono text-xl font-semibold text-white">{project.repo}</h3>
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
