import { useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { Badge } from '../components/Badge';
import { GlassCard } from '../components/GlassCard';
import { ScreenshotPreview, SigmaRuleVisual, SoarWorkflowVisual } from '../components/ProjectVisual';
import { screenshotAltText, screenshotPaths } from '../data/screenshots';
import { SectionHeader } from '../components/SectionHeader';
import { featuredWork, impactHighlights, projects } from '../data/portfolio';

const selectedTitles = featuredWork.map((project) => project.title);

const projectVisuals = {
  'Sigma MITRE Detection Rules': { type: 'rule', label: 'lsass_comsvcs_minidump.yml', caption: 'Detection logic for LSASS memory dumping via comsvcs.dll — one of 57 rules in the ruleset.' },
  'SOC Reporting & Management Platform': { type: 'screenshot', src: screenshotPaths.soc, alt: screenshotAltText.soc, label: 'SOC Reporting Platform', caption: 'Operational visibility, vulnerability posture, asset coverage, and reporting workflows.' },
  'Security Automation & SOAR Platform': { type: 'workflow', caption: 'Automated containment and release workflow connecting alerts, enrichment, firewall enforcement, analyst review, and notifications.' },
  'Threat Intelligence & Intelligence Distribution Platform': { type: 'screenshot', src: screenshotPaths.opencti, alt: screenshotAltText.opencti, label: 'OpenCTI Dashboard', caption: 'Threat intelligence dashboarding, indicators, reports, relationships, and CVE visibility.' },
  'Wazuh SIEM Engineering & Detection': { type: 'screenshot', src: screenshotPaths.wazuh, alt: screenshotAltText.wazuh, label: 'Wazuh Dashboard' },
  'OpenCTI Threat Intelligence Integration': { type: 'screenshot', src: screenshotPaths.opencti, alt: screenshotAltText.opencti, label: 'OpenCTI Dashboard' },
};

function ProjectVisual({ visual, expanded = false }) {
  if (!visual) return null;
  const imageClassName = expanded ? 'h-52 sm:h-64 lg:h-80' : 'h-28 sm:h-32 md:h-36';

  if (visual.type === 'workflow') {
    return <SoarWorkflowVisual caption={expanded ? visual.caption : null} imageClassName={imageClassName} className={expanded ? 'mt-4' : 'mb-4'} />;
  }

  if (visual.type === 'rule') {
    return <SigmaRuleVisual label={visual.label} caption={expanded ? visual.caption : null} imageClassName={imageClassName} className={expanded ? 'mt-4' : 'mb-4'} />;
  }

  return (
    <ScreenshotPreview
      src={visual.src}
      alt={visual.alt}
      label={visual.label}
      caption={expanded ? visual.caption : null}
      imageClassName={imageClassName}
      imageToneClassName={visual.label === 'SOC Reporting Platform' ? 'brightness-75 contrast-95 saturate-90' : ''}
      className={expanded ? 'mt-4' : 'mb-4'}
    />
  );
}

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

const featuredCaseStudies = {
  'SOC Reporting & Management Platform': {
    problem: 'Security teams and management needed centralized visibility into operations, reporting, asset context, threat intelligence, SLA tracking, and readiness.',
    approach: 'Designed a SOC reporting and management platform that combines analyst dashboards, executive dashboards, security map visualization, asset visibility, vulnerability tracking, SLA monitoring, compliance reporting, and AI-assisted monthly reporting.',
    role: 'Dashboard engineering, reporting architecture, security workflow design, requirements gathering, security operations alignment, platform improvement recommendations, and user experience planning for analysts and management.',
    capabilities: ['Executive dashboards', 'Analyst dashboards', 'Security map visualization', 'Asset visibility', 'Threat intelligence visibility', 'Vulnerability tracking', 'SLA monitoring', 'Compliance reporting', 'KPI reporting', 'Operational readiness monitoring', 'Automated monthly reporting', 'Ollama integration', 'Qwen models', 'AI-generated narratives', 'Automated chart generation'],
    outcome: 'Improved how SOC data is organized for analyst review, operational tracking, executive reporting, and security decision-making.',
  },
  'Security Automation & SOAR Platform': {
    problem: 'Security teams needed repeatable and accountable response workflows for malicious indicators, firewall enforcement, enrichment, notifications, and release actions.',
    approach: 'Designed automated workflows for malicious IP blocking and unblocking, connecting Wazuh, TheHive, Cortex, Palo Alto, FortiGate, Slack, and threat intelligence enrichment with analyst approval and audit visibility.',
    role: 'Security automation engineering, workflow architecture, integration design, firewall orchestration, containment and release logic, testing, validation, and documentation.',
    capabilities: ['Automated IP blocking', 'Automated IP unblocking', 'Wazuh integration', 'TheHive integration', 'Cortex integration', 'Palo Alto integration', 'FortiGate integration', 'Slack notifications', 'Threat intelligence enrichment', 'Analyst approval workflows', 'Human review checkpoints', 'Audit visibility'],
    outcome: 'Reduced containment effort, improved response consistency, preserved analyst accountability, and improved containment speed while supporting controlled release workflows.',
  },
  'Threat Intelligence & Intelligence Distribution Platform': {
    problem: 'Threat intelligence and vulnerability intelligence lose value when enrichment, MITRE mapping, CVE monitoring, and stakeholder distribution are disconnected from analyst workflows.',
    approach: 'Built threat intelligence workflows around OpenCTI, IOC enrichment, VirusTotal, AbuseIPDB, MITRE ATT&CK mapping, CVE monitoring, weekly newsletters, Slack notifications, and email distribution.',
    role: 'Threat intelligence workflow design, enrichment pipeline planning, automated distribution workflow design, analyst-facing summaries, and stakeholder reporting structure.',
    capabilities: ['OpenCTI deployment', 'IOC enrichment', 'VirusTotal integration', 'AbuseIPDB integration', 'MITRE ATT&CK mapping', 'CVE monitoring', 'Weekly threat newsletters', 'Slack delivery', 'Email delivery', 'Automated intelligence distribution'],
    outcome: 'Improved analyst access to threat context, converted CVE monitoring into recurring stakeholder reporting, and made intelligence easier to distribute through operational channels.',
  },
};

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

function CaseStudyDetails({ details, onClose }) {
  return (
    <motion.div
      initial={{ height: 0, opacity: 0 }}
      animate={{ height: 'auto', opacity: 1 }}
      exit={{ height: 0, opacity: 0 }}
      transition={{ duration: 0.28, ease: 'easeOut' }}
      className="overflow-hidden"
    >
      <div className="mt-5 grid min-w-0 gap-3 border-t border-white/10 pt-5">
        <DetailRow label="Problem">{details.problem}</DetailRow>
        <DetailRow label="Approach">{details.approach}</DetailRow>
        <DetailRow label="My Role">{details.role}</DetailRow>
        <DetailRow label="Capabilities">
          <div className="flex min-w-0 flex-wrap gap-2">
            {details.capabilities.map((capability) => <Badge key={capability}>{capability}</Badge>)}
          </div>
        </DetailRow>
        <DetailRow label="Outcome">{details.outcome}</DetailRow>
        <button type="button" onClick={onClose} className="justify-self-start rounded-full border border-cyan-200/25 bg-white/5 px-4 py-2 text-sm font-semibold text-cyan-100 transition hover:border-cyan-200/50 hover:bg-cyan-300/10">
          Close details
        </button>
      </div>
    </motion.div>
  );
}

function ProjectPreview({ project, index }) {
  const [open, setOpen] = useState(false);
  const summary = project.approach || project.outcome;

  return (
    <GlassCard delay={index * 0.035} className="h-full bg-white/[0.035] p-5">
      <ProjectVisual visual={projectVisuals[project.title]} />
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
  const [expandedTitle, setExpandedTitle] = useState(null);
  const selectedProjects = useMemo(() => selectedTitles.map((title) => projects.find((project) => project.title === title)).filter(Boolean), []);

  return (
    <>
      <section id="featured-projects" className="mx-auto max-w-7xl px-5 py-10 sm:py-14 lg:px-8">
        <SectionHeader
          eyebrow="Featured Engineering Projects"
          title={(<>
            <span className="md:hidden">Featured Security Engineering Work</span>
            <span className="hidden md:inline">Security platforms, automation, and intelligence systems</span>
          </>)}
          description="Four engineering project areas that show impact first and implementation details second."
        />
        <div className="grid items-start gap-5 md:grid-cols-2 xl:grid-cols-3">
          {selectedProjects.map((project, index) => {
            const Icon = project.icon;
            const details = featuredCaseStudies[project.title];
            const isExpanded = expandedTitle === project.title;
            return (
              <GlassCard key={project.title} delay={index * 0.05} className="relative h-full min-w-0 overflow-hidden border-cyan-200/25 bg-slate-900/95 p-4 sm:p-6">
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-cyan-300 via-sky-400 to-cyan-200 opacity-80" />
                <ProjectVisual visual={projectVisuals[project.title]} />
                <div className="grid h-11 w-11 place-items-center rounded-2xl bg-cyan-300/15"><Icon className="h-5 w-5 text-cyan-100" /></div>
                <h3 className="mt-4 text-lg font-semibold tracking-tight text-white sm:text-xl">{project.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-200">{featuredWork[index].summary}</p>
                <PillList items={featuredWork[index].highlights} />
                <button
                  type="button"
                  onClick={() => setExpandedTitle(isExpanded ? null : project.title)}
                  className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-cyan-200 transition hover:text-cyan-100"
                  aria-expanded={isExpanded}
                >
                  {isExpanded ? 'Hide Case Study' : 'View Case Study'} <ArrowRight className={`h-4 w-4 transition ${isExpanded ? 'rotate-90' : ''}`} />
                </button>
                <AnimatePresence initial={false}>
                  {isExpanded ? <CaseStudyDetails details={details} onClose={() => setExpandedTitle(null)} /> : null}
                </AnimatePresence>
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
    </>
  );
}

export function TechnicalProjects() {
  const [showMore, setShowMore] = useState(false);
  const additionalProjects = useMemo(() => additionalTitles.map((title) => projects.find((project) => project.title === title)).filter(Boolean), []);
  const visibleAdditional = showMore ? additionalProjects : additionalProjects.slice(0, 3);

  return (
    <section id="additional-projects" className="mx-auto max-w-7xl px-5 py-12 sm:py-14 lg:px-8">
      <SectionHeader
        eyebrow="Technical Projects"
        title="Technical project case studies"
        description="Technical project previews stay short by default; details expand only when needed."
      />
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {visibleAdditional.map((project, index) => <ProjectPreview key={project.title} project={project} index={index} />)}
      </div>
      <div className="mt-8 text-center">
        <button type="button" onClick={() => setShowMore((value) => !value)} className="rounded-full border border-cyan-200/25 bg-white/5 px-5 py-3 text-sm font-semibold text-cyan-100 transition hover:border-cyan-200/50 hover:bg-cyan-300/10" aria-expanded={showMore}>
          {showMore ? 'Show Less' : 'Show More'}
        </button>
      </div>
    </section>
  );
}
