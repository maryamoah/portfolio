import { FileText } from 'lucide-react';
import { Badge } from '../components/Badge';
import { GlassCard } from '../components/GlassCard';
import { SectionHeader } from '../components/SectionHeader';
import { projects } from '../data/portfolio';

const caseStudyFields = [
  ['Problem', 'problem'],
  ['Approach', 'approach'],
  ['My role', 'role'],
  ['Outcome', 'outcome'],
];

export function Projects() {
  return (
    <section id="case-studies" className="mx-auto max-w-7xl px-5 py-16 sm:py-20 lg:px-8">
      <SectionHeader
        eyebrow="Detailed Case Studies"
        title="Case studies across SOC, SIEM, automation, AI/ML, forensics, instruction, and VAPT practice."
        description="Each case study includes the problem, approach, Mary’s role, tools used, and a careful outcome statement without inventing metrics or overclaiming impact."
      />
      <div className="grid gap-6 lg:grid-cols-2">
        {projects.map((project, index) => {
          const Icon = project.icon;
          return (
            <GlassCard key={project.title} delay={index * 0.06} className="group h-full">
              <div className="flex items-start justify-between gap-4">
                <div className="grid h-12 w-12 place-items-center rounded-2xl bg-cyan-300/10">
                  <Icon className="h-6 w-6 text-cyan-200" />
                </div>
                <FileText className="h-5 w-5 text-slate-500 transition group-hover:text-cyan-200" />
              </div>
              <p className="mt-7 text-sm font-medium text-cyan-300">{project.category}</p>
              <h3 className="mt-3 text-xl font-semibold text-white sm:text-2xl">{project.title}</h3>

              <div className="mt-6 space-y-4">
                {caseStudyFields.map(([label, key]) => (
                  <div key={label} className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                    <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-300">{label}</p>
                    <p className="mt-2 text-sm leading-7 text-slate-300">{project[key]}</p>
                  </div>
                ))}
              </div>

              <div className="mt-6">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">Tools used</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {project.tools.map((tool) => (
                    <Badge key={tool}>{tool}</Badge>
                  ))}
                </div>
              </div>
            </GlassCard>
          );
        })}
      </div>
    </section>
  );
}
