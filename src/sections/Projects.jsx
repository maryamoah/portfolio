import { FileText } from 'lucide-react';
import { Badge } from '../components/Badge';
import { GlassCard } from '../components/GlassCard';
import { SectionHeader } from '../components/SectionHeader';
import { projects } from '../data/portfolio';

const featuredTitles = new Set([
  'Security Operations Reporting & Management Platform',
  'AI-Assisted SOC Triage & Investigation',
  'Wazuh SIEM Deployment & Monitoring',
  'TheHive + Cortex Incident Response Workflow',
  'OpenCTI Threat Intelligence Integration',
  'Firewall IP Blocking Automation',
]);

const caseStudyFields = [
  ['Problem', 'problem'],
  ['Approach', 'approach'],
  ['My Role', 'role'],
  ['Outcome', 'outcome'],
];

function DetailBlock({ label, children }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-300">{label}</p>
      <div className="mt-2 text-sm leading-7 text-slate-200">{children}</div>
    </div>
  );
}

export function Projects() {
  const featuredProjects = projects.filter((project) => featuredTitles.has(project.title));

  return (
    <section id="case-studies" className="mx-auto max-w-7xl px-5 py-16 sm:py-20 lg:px-8">
      <SectionHeader
        eyebrow="Projects"
        title="Featured Case Studies"
        description="Flagship cybersecurity projects framed around the problem, approach, role, capabilities, and implementation boundaries."
      />

      <div className="grid gap-6 lg:grid-cols-2">
        {featuredProjects.map((project, index) => {
          const Icon = project.icon;
          return (
            <GlassCard
              key={project.title}
              delay={index * 0.06}
              className={`group h-full ${project.featured ? 'border-cyan-200/30 bg-slate-900/95 lg:col-span-2' : ''}`}
            >
              <div className="flex items-start justify-between gap-4">
                <div className="grid h-12 w-12 place-items-center rounded-2xl bg-cyan-300/10">
                  <Icon className="h-6 w-6 text-cyan-200" />
                </div>
                <FileText className="h-5 w-5 text-slate-300 transition group-hover:text-cyan-200" />
              </div>
              <p className="mt-7 text-sm font-medium text-cyan-300">{project.category}</p>
              <h3 className="mt-3 text-xl font-semibold text-white sm:text-2xl">{project.title}</h3>

              <div className={`mt-6 grid gap-4 ${project.featured ? 'lg:grid-cols-3' : ''}`}>
                {caseStudyFields.map(([label, key]) => (
                  project[key] ? (
                    <DetailBlock key={label} label={label}>
                      <p>{project[key]}</p>
                    </DetailBlock>
                  ) : null
                ))}
              </div>

              {project.capabilities ? (
                <div className="mt-6 grid gap-4 lg:grid-cols-2">
                  <DetailBlock label="Capabilities">
                    <ul className="grid gap-2 sm:grid-cols-2">
                      {project.capabilities.map((capability) => (
                        <li key={capability} className="flex gap-2">
                          <span className="mt-3 h-1.5 w-1.5 flex-none rounded-full bg-cyan-300" />
                          <span>{capability}</span>
                        </li>
                      ))}
                    </ul>
                  </DetailBlock>
                  <DetailBlock label="AI-Assisted Reporting">
                    <ul className="grid gap-2 sm:grid-cols-2">
                      {project.aiReporting.map((item) => (
                        <li key={item} className="flex gap-2">
                          <span className="mt-3 h-1.5 w-1.5 flex-none rounded-full bg-cyan-300" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </DetailBlock>
                </div>
              ) : null}

              <div className="mt-6">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-300">Tools and capabilities</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {project.tools.map((tool) => (
                    <Badge key={`${project.title}-${tool}`}>{tool}</Badge>
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
