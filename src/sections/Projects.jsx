import { ExternalLink } from 'lucide-react';
import { Badge } from '../components/Badge';
import { GlassCard } from '../components/GlassCard';
import { SectionHeader } from '../components/SectionHeader';
import { projects } from '../data/portfolio';

export function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
      <SectionHeader
        eyebrow="Featured Projects"
        title="Portfolio work presented with context, decisions, and outcomes."
        description="Placeholder projects demonstrate the intended format for detailed future case studies."
      />
      <div className="grid gap-6 lg:grid-cols-3">
        {projects.map((project, index) => {
          const Icon = project.icon;
          return (
            <GlassCard key={project.title} delay={index * 0.06} className="group h-full">
              <div className="flex items-start justify-between gap-4">
                <div className="grid h-12 w-12 place-items-center rounded-2xl bg-cyan-300/10">
                  <Icon className="h-6 w-6 text-cyan-200" />
                </div>
                <ExternalLink className="h-5 w-5 text-slate-500 transition group-hover:text-cyan-200" />
              </div>
              <p className="mt-7 text-sm font-medium text-cyan-300">{project.category}</p>
              <h3 className="mt-3 text-2xl font-semibold text-white">{project.title}</h3>
              <p className="mt-4 text-sm leading-7 text-slate-400">{project.description}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <Badge key={tag}>{tag}</Badge>
                ))}
              </div>
            </GlassCard>
          );
        })}
      </div>
    </section>
  );
}
