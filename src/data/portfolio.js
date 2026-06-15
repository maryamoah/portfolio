import {
  Activity,
  Binary,
  BookOpenCheck,
  Bot,
  Briefcase,
  Bug,
  Database,
  FileCheck,
  Fingerprint,
  GitBranch,
  GraduationCap,
  FileDown,
  Link,
  Mail,
  Network,
  Radio,
  SearchCheck,
  ShieldAlert,
  ShieldCheck,
  Workflow,
} from 'lucide-react';

export const profile = {
  name: 'Mary Abenawa Techiesiwa Amoah',
  shortName: 'Mary Amoah',
  role: 'Cybersecurity Analyst, Security Automation Engineer, Consultant, and Instructor',
  headline:
    'Designing security operations platforms, automation workflows, threat intelligence pipelines, and AI-assisted cybersecurity systems.',
  summary:
    'Building practical cybersecurity solutions that improve visibility, investigation, response, reporting, and security decision-making.',
  contactFocus: 'Available through email, GitHub, LinkedIn, or resume download',
  availability: 'Cybersecurity Analyst • Security Automation Engineer • Consultant • Instructor',
  links: [
    { label: 'GitHub projects', href: '#github-projects', icon: GitBranch },
    { label: 'Case studies', href: '#case-studies', icon: Link },
  ],
};


export const specializations = [
  'Security Operations Engineering',
  'Security Automation & SOAR',
  'Threat Intelligence & Vulnerability Intelligence',
  'Security Reporting & Analytics',
  'AI & Machine Learning Security Research',
  'Vulnerability Assessment & Security Testing',
  'Cybersecurity Education',
];

export const metrics = [
  { value: 'Operations', label: 'Triage, escalation, investigation, and reporting workflows' },
  { value: 'Response', label: 'Incident handoffs, evidence notes, and investigation timelines' },
  { value: 'Applied AI', label: 'Security telemetry analysis and interpretable research' },
];

export const coreFocus = [
  {
    title: 'Security Operations Engineering',
    icon: ShieldCheck,
    description:
      'Designing monitoring workflows, investigation paths, detection logic, dashboards, escalation models, and operational readiness views for SOC teams.',
  },
  {
    title: 'Security Automation & SOAR',
    icon: Workflow,
    description:
      'Building containment, enrichment, notification, case-management, and analyst-review workflows with clear control points and audit visibility.',
  },
  {
    title: 'AI & Machine Learning Security Research',
    icon: Binary,
    description:
      'Experimenting with local LLMs, AI-assisted investigation, log explanations, anomaly detection, and interpretable security telemetry analysis.',
  },
  {
    title: 'Security Reporting & Analytics',
    icon: Activity,
    description:
      'Engineering dashboards, metrics, KPIs, trend summaries, SLA views, compliance-oriented reports, and executive-ready security narratives.',
  },
];

export const professionalFocus = coreFocus.slice(0, 3);

export const additionalFocus = [
  {
    title: 'Threat Intelligence Engineering',
    icon: Database,
    description:
      'Building IOC enrichment, CVE monitoring, OpenCTI workflows, MITRE ATT&CK mapping, and intelligence distribution through Slack, email, and newsletters.',
  },
  {
    title: 'Security Reporting & Analytics',
    icon: Activity,
    description:
      'Engineering dashboards, metrics, KPIs, trend summaries, SLA views, compliance-oriented reports, and executive-ready security narratives.',
  },
  {
    title: 'Vulnerability Assessment & Security Testing',
    icon: Bug,
    description:
      'Validating findings, documenting risk, supporting remediation, and evaluating AI-assisted and automated penetration testing workflows using Pentagi and analyst validation.',
  },
  {
    title: 'Cybersecurity Education',
    icon: BookOpenCheck,
    description:
      'Designing labs, workshops, mentoring exercises, SIEM training, threat intelligence training, and practical security monitoring scenarios.',
  },
];

export const featuredWork = [
  {
    title: 'SOC Reporting & Management Platform',
    category: 'Flagship Security Operations Platform',
    icon: Activity,
    summary: 'The primary flagship: executive and analyst visibility for SOC performance, readiness, risk, metrics, and AI-assisted monthly reporting.',
    highlights: ['Executive and analyst dashboards', 'Security map visualization', 'Threat intelligence and asset visibility', 'Vulnerability tracking and SLA monitoring', 'Compliance reporting, KPIs, and readiness monitoring', 'Ollama and Qwen AI-generated narratives', 'Automated charts and security trend summaries'],
  },
  {
    title: 'Security Automation & SOAR Platform',
    category: 'Security Automation & SOAR',
    icon: Network,
    summary: 'A governed response platform connecting Wazuh, TheHive, Cortex, firewalls, Slack, and intelligence feeds with analyst approval checkpoints.',
    highlights: ['Wazuh, TheHive, Cortex, Palo Alto, FortiGate, Slack', 'Automated IP blocking and unblocking', 'Threat intelligence, alert, and case enrichment', 'Analyst approval workflows and human review checkpoints', 'Audit visibility and consistent response actions', 'Faster containment with reduced analyst workload'],
  },
  {
    title: 'Threat Intelligence & Intelligence Distribution Platform',
    category: 'Threat Intelligence Engineering',
    icon: Database,
    summary: 'An intelligence pipeline for OpenCTI deployment, enrichment, MITRE mapping, CVE monitoring, and automated stakeholder distribution.',
    highlights: ['OpenCTI deployment and threat workflows', 'IOC enrichment with VirusTotal and AbuseIPDB', 'MITRE ATT&CK mapping', 'CVE monitoring and weekly threat newsletters', 'Slack and email intelligence notifications', 'Automated intelligence distribution'],
  },
];

export const consultingServices = [
  'Operational readiness reviews',
  'Detection and reporting roadmaps',
  'Automation governance planning',
  'Threat intelligence process alignment',
  'Assessment finding remediation support',
  'Investigation runbook development',
  'Cybersecurity lab and workshop planning',
  'Management-ready security communication',
];

export const skills = [
  {
    title: 'Security Operations & Incident Response',
    icon: ShieldAlert,
    items: ['Alert triage', 'Incident investigation', 'Threat hunting', 'Case management', 'Investigation workflows', 'TheHive', 'Cortex'],
  },
  {
    title: 'SIEM Engineering & Detection',
    icon: Radio,
    items: ['Wazuh', 'Detection engineering', 'Custom detection rules', 'Log parser development', 'Decoder development', 'Security use case development', 'Correlation logic', 'Alert tuning', 'Dashboard engineering', 'MITRE ATT&CK mapping', 'Detection validation'],
  },
  {
    title: 'Security Automation & SOAR',
    icon: Workflow,
    items: ['Python', 'n8n', 'Workflow orchestration', 'Threat intelligence enrichment', 'Automated IP blocking', 'Automated IP unblocking', 'Firewall orchestration', 'Palo Alto', 'FortiGate', 'Slack integrations', 'REST APIs'],
  },
  {
    title: 'Threat & Vulnerability Intelligence',
    icon: Database,
    items: ['OpenCTI', 'VirusTotal', 'AbuseIPDB', 'IOC enrichment', 'CVE monitoring', 'CVE-to-Slack workflows', 'CVE-to-email workflows', 'Weekly security newsletter'],
  },
  {
    title: 'AI & Machine Learning for Cybersecurity',
    icon: Binary,
    items: ['Ollama', 'Qwen', 'Local LLM workflows', 'scikit-learn', 'pandas', 'NumPy', 'Jupyter Notebook', 'Isolation Forest', 'Anomaly detection', 'Security telemetry analysis', 'AI-assisted reporting'],
  },
  {
    title: 'Vulnerability Assessment & Security Testing',
    icon: Bug,
    items: ['Burp Suite', 'Pentagi', 'Web application security testing', 'Vulnerability identification', 'Vulnerability validation', 'Security assessment support', 'Remediation guidance'],
  },
  {
    title: 'Cybersecurity Education',
    icon: BookOpenCheck,
    items: ['Lab development', 'Technical mentoring', 'SIEM training', 'Threat intelligence training', 'Security monitoring exercises', 'Practical workshops'],
  },
];

export const experience = [
  {
    role: 'Cybersecurity Analyst and Consultant',
    company: 'Security Operations, Automation, and Advisory Workflows',
    period: 'Current focus',
    highlights: [
      'Designs security operations workflows for alert triage, SIEM monitoring, detection engineering, incident documentation, threat intelligence enrichment, escalation decisions, and response coordination.',
      'Helps teams think through operational improvements such as repeatable runbooks, dashboard engineering, executive reporting, SLA visibility, automation boundaries, and human review checkpoints.',
      'Develops detection use cases, custom rule concepts, parser and decoder planning, correlation logic, alert tuning, MITRE ATT&CK mapping, detection validation, and security reporting patterns.',
      'Supports vulnerability assessment and security testing practice and security assessment work involving vulnerability identification, web/security testing fundamentals, reporting, remediation guidance, and defensive validation.',
    ],
  },
  {
    role: 'Cybersecurity Instructor',
    company: 'Security Education and Practical Lab Development',
    period: 'Current focus',
    highlights: [
      'Builds guided labs that connect foundational security concepts to security operations, SIEM monitoring, incident response, threat intelligence, vulnerability assessment and security testing practice, and digital forensics support.',
      'Creates learner-friendly exercises for investigation questions, evidence validation, tool usage, documentation, escalation judgment, security monitoring, and plain-language reporting.',
      'Supports student mentoring, technical workshops, SIEM training, threat intelligence training, curriculum support, and hands-on lab development for beginner and early-career learners.',
      'Connects teaching work to research interests in cybersecurity education, practical lab design, AI-assisted security operations, and human-AI collaboration in cybersecurity.',
    ],
  },
  {
    role: 'Security Automation Engineer and AI & Machine Learning Researcher',
    company: 'Independent Cybersecurity Projects',
    period: 'GitHub and case study portfolio',
    highlights: [
      'Builds portfolio projects for AI-assisted triage, IOC enrichment, malicious IP containment and release, CVE newsletters, firewall orchestration, evidence packaging, forensic timeline building, and threat intelligence automation.',
      'Experiments with local LLMs, Ollama, Qwen models, AI log explanation, AI-assisted reporting, Pentagi deployment, and interpretable anomaly detection for security telemetry research.',
      'Documents each case study with the problem, approach, role, tools, outcome, limitations, and human review points without inventing production metrics.',
    ],
  },
];

export const githubProjects = [
  {
    repo: 'ai-anomaly-security',
    category: 'AI & Machine Learning Security Analytics',
    description: 'Isolation Forest experiments for interpretable anomaly detection in security telemetry.',
    tools: ['Python', 'Jupyter Notebook', 'scikit-learn', 'pandas', 'Isolation Forest'],
  },
  {
    repo: 'ai-soc-investigation-assistant',
    category: 'AI-Assisted Security Operations',
    description: 'Human-reviewed security operations investigation workflow for triage prompts, case notes, and next-step guidance.',
    tools: ['AI assistance', 'security operations triage', 'Case notes', 'Analyst workflow'],
  },
  {
    repo: 'attack-hunting-lab',
    category: 'Threat Hunting Lab',
    description: 'Security lab for attack investigation, threat hunting practice, and MITRE ATT&CK mapping.',
    tools: ['Linux', 'MITRE ATT&CK', 'Threat hunting', 'Lab design'],
  },
  {
    repo: 'incident-evidence-packager',
    category: 'Digital Forensics Support',
    description: 'Evidence packaging workflow for incident response and integrity-preserving handoffs.',
    tools: ['Python', 'SHA256 verification', 'Evidence integrity', 'Incident response'],
  },
  {
    repo: 'evidence-timeline-builder',
    category: 'Forensic Timelines',
    description: 'Timeline-building utility for organizing forensic evidence metadata chronologically.',
    tools: ['Python', 'Forensic timelines', 'Metadata', 'Digital forensics'],
  },
  {
    repo: 'hash-verify-cli',
    category: 'Evidence Integrity',
    description: 'Command-line utility for verifying SHA256 hashes during evidence review.',
    tools: ['CLI', 'SHA256 verification', 'Integrity verification', 'Forensics'],
  },
  {
    repo: 'ioc-n8n',
    category: 'IOC Automation',
    description: 'n8n workflow for indicator enrichment, context gathering, and analyst review.',
    tools: ['n8n', 'REST API integrations', 'IOC enrichment', 'Workflow automation'],
  },
  {
    repo: 'validator',
    category: 'Identity Security',
    description: 'Credential validation utility concept designed around risk review and careful usage boundaries.',
    tools: ['Security utility', 'Credential validation', 'AD concepts', 'Risk review'],
  },
  {
    repo: 'ai-log-explainer',
    category: 'AI Log Analysis',
    description: 'AI-assisted log explanation workflow for analyst notes and security documentation.',
    tools: ['AI assistance', 'Log analysis', 'security operations documentation', 'Analyst support'],
  },
  {
    repo: 'threatbot',
    category: 'Threat Intelligence Automation',
    description: 'Threat intelligence notification concept for indicator context and security team updates.',
    tools: ['Threat intelligence', 'Automation bot', 'Security notifications', 'indicator context'],
  },
];

export const projects = [
  {
    title: 'SOC Reporting & Management Platform',
    category: 'Flagship Security Operations Platform',
    icon: Activity,
    featured: true,
    problem: 'Security teams and management needed a centralized platform for monitoring operations, reporting, visibility, and performance tracking.',
    approach: 'Designed and helped shape a platform that combines operational monitoring, reporting, asset visibility, threat intelligence, and management dashboards into a single security operations experience.',
    role: 'Mary focused on requirements gathering, security workflow design, feature planning, dashboard engineering, reporting architecture, dashboard architecture, security operations alignment, platform improvement recommendations, and user experience recommendations for analysts and management.',
    capabilities: [
      'Executive dashboards',
      'Analyst dashboards',
      'Security event monitoring',
      'Threat intelligence visibility',
      'Security map visualization',
      'Asset inventory visibility',
      'Vulnerability management tracking',
      'SLA monitoring',
      'Compliance-oriented reporting',
      'Report lifecycle management',
      'Operational readiness monitoring',
      'Security metrics and KPIs',
    ],
    aiReporting: [
      'Automated monthly reporting',
      'Local LLM integration',
      'Ollama deployment',
      'Qwen models',
      'AI-generated report narratives',
      'Automated chart generation',
      'Automated security trend summaries',
      'Executive-friendly reporting outputs',
    ],
    tools: ['Security operations dashboards', 'Threat intelligence visibility', 'Asset visibility', 'Local AI reporting', 'Ollama', 'Qwen models'],
  },
  {
    title: 'AI-Assisted SOC Triage & Investigation',
    category: 'Security operations automation',
    icon: Bot,
    problem: 'Security operations analysts often spend time gathering alert context, drafting notes, checking indicators, and deciding what to review next.',
    approach: 'Designed a human-reviewed workflow that organizes alert details, proposes investigation questions, drafts a triage summary, and keeps final decisions with the analyst.',
    role: 'Mary defined the workflow stages, prompt structure, review checkpoints, documentation approach, and escalation notes.',
    tools: ['n8n', 'Python', 'REST API integrations', 'Slack', 'MITRE ATT&CK', 'SIEM dashboards'],
    outcome: 'Created a repeatable triage pattern for clearer notes, consistent evidence review, and careful escalation without claiming autonomous decision-making.',
  },
  {
    title: 'Wazuh SIEM Engineering & Detection',
    category: 'SIEM Engineering',
    icon: Activity,
    problem: 'Security teams need centralized visibility into endpoint events, authentication activity, suspicious behavior, and compliance signals.',
    approach: 'Outlined a Wazuh SIEM engineering workflow covering agent enrollment, log collection, detection rules, alert review, dashboard organization, decoder and parser planning, tuning concepts, and reporting.',
    role: 'Mary configured the portfolio workflow, documented monitoring steps, mapped alert review paths, and described dashboard usage for Security Operations and incident response work.',
    tools: ['Wazuh', 'Linux', 'SIEM dashboards', 'MITRE ATT&CK', 'Detection engineering', 'Rule tuning', 'Log analysis'],
    outcome: 'Produced a practical SIEM engineering case study that shows how Wazuh can support monitoring, triage, documentation, and security communication.',
  },
  {
    title: 'TheHive + Cortex Incident Response Workflow',
    category: 'Incident Response',
    icon: ShieldAlert,
    problem: 'Incident response becomes inconsistent when alerts, enrichment results, task ownership, evidence notes, and closure decisions are tracked separately.',
    approach: 'Mapped a workflow that turns validated alerts into TheHive cases, enriches observables with Cortex analyzers, records evidence, assigns tasks, and preserves context.',
    role: 'Mary defined case templates, analyst notes, enrichment steps, severity review, closure criteria, and communication guidance.',
    tools: ['TheHive', 'Cortex', 'VirusTotal', 'AbuseIPDB', 'REST API integrations', 'Incident timelines'],
    outcome: 'Established a structured case-handling pattern with clearer ownership, evidence trails, enrichment records, timelines, and next-action recommendations.',
  },
  {
    title: 'OpenCTI Threat Intelligence Integration',
    category: 'Threat Intelligence',
    icon: Database,
    problem: 'Alerts are harder to prioritize when indicators lack context about malware, infrastructure, tactics, campaigns, source confidence, or relevance.',
    approach: 'Created an OpenCTI-centered process for collecting, organizing, and summarizing threat context before analyst escalation or response decisions.',
    role: 'Mary modeled indicator collection, source confidence review, MITRE ATT&CK mapping, and attachment of threat notes to incident records and reports.',
    tools: ['OpenCTI', 'MITRE ATT&CK', 'VirusTotal', 'AbuseIPDB', 'TheHive', 'Threat intelligence'],
    outcome: 'Created a context-driven prioritization approach that helps separate routine noise from indicators that deserve escalation, monitoring, or containment review.',
  },
  {
    title: 'Security Automation & SOAR Platform',
    category: 'Security Automation & SOAR',
    icon: Network,
    problem: 'Security teams require fast and consistent containment of malicious indicators while maintaining operational visibility and safe release paths.',
    approach: 'Designed and implemented automated workflows for malicious IP containment and release, connecting IOC-driven decisions to firewall policy orchestration, enrichment, audit records, and notifications.',
    role: 'Mary owned workflow architecture, security automation engineering, integration development, firewall orchestration design, threat intelligence workflow design, testing, and validation.',
    capabilities: ['Automated IP blocking', 'Automated IP unblocking', 'Threat intelligence enrichment', 'Analyst approval workflows', 'Alert enrichment', 'Case enrichment', 'Audit visibility', 'Human review checkpoints'],
    tools: ['Wazuh', 'TheHive', 'Cortex', 'Palo Alto', 'FortiGate', 'Slack', 'Threat intelligence feeds', 'n8n', 'Python', 'REST APIs'],
    outcome: 'Supports faster containment, reduced analyst workload, consistent response actions, and improved response efficiency while preserving review and accountability.',
  },

  {
    title: 'Automated Vulnerability Intelligence & Security Newsletter',
    category: 'Vulnerability Intelligence & Reporting Automation',
    icon: FileCheck,
    problem: 'Security stakeholders need recurring awareness of relevant CVEs and vulnerability trends without relying on manual feed checks or one-off messages.',
    approach: 'Built an automation workflow that monitors vulnerability sources, aggregates CVE context, prepares weekly newsletter content, and distributes security updates through Slack and email channels.',
    role: 'Mary designed the workflow, intelligence processing, distribution architecture, reporting structure, and stakeholder notification model.',
    capabilities: ['CVE monitoring', 'Vulnerability intelligence aggregation', 'Weekly newsletter generation', 'Security trend summaries', 'Slack delivery', 'Email delivery', 'Automated stakeholder notifications', 'Vulnerability awareness workflows'],
    tools: ['Python', 'APIs', 'Slack', 'Email integrations', 'Vulnerability feeds', 'Automation workflows'],
    outcome: 'Established a repeatable vulnerability awareness workflow that turns vulnerability feeds into organized stakeholder communication and trend reporting.',
  },
  {
    title: 'Threat Intelligence & Intelligence Distribution Platform',
    category: 'Threat Intelligence Automation',
    icon: Database,
    problem: 'Indicator context and CVE updates lose value when enrichment, review notes, and delivery channels are disconnected from analyst workflows.',
    approach: 'Connected OpenCTI-centered intelligence handling with IOC enrichment, VirusTotal and AbuseIPDB checks, and CVE-to-Slack and CVE-to-email distribution workflows.',
    role: 'Mary designed enrichment pipelines, source-context handling, automated distribution flows, and analyst-facing intelligence summaries.',
    capabilities: ['OpenCTI deployment', 'IOC enrichment', 'VirusTotal integration', 'AbuseIPDB integration', 'MITRE ATT&CK mapping', 'Threat intelligence workflows', 'CVE monitoring', 'Automated intelligence distribution', 'Slack notifications', 'Email notifications', 'Weekly threat newsletters'],
    tools: ['OpenCTI', 'VirusTotal', 'AbuseIPDB', 'Python', 'REST APIs', 'Slack', 'Email integrations'],
    outcome: 'Created a distribution pattern that brings indicator and vulnerability context into the channels analysts and stakeholders already review.',
  },
  {
    title: 'AI-Assisted Penetration Testing Environment',
    category: 'AI-Assisted Security Testing',
    icon: Bug,
    problem: 'Security testing practice benefits from isolated environments where AI-assisted workflows can be deployed, integrated, and evaluated without overstating automation.',
    approach: 'Deployed and integrated Pentagi with Ollama and local LLM components inside containerized Linux testing environments for experimentation with AI-assisted assessment workflows.',
    role: 'Mary handled deployment, local LLM integration, containerized environment setup, workflow experimentation, and validation of where human review remains necessary.',
    capabilities: ['Pentagi deployment', 'Ollama integration', 'Local LLM integration', 'Docker/containerized setup', 'AI-assisted security assessment workflows', 'Offensive security experimentation', 'Vulnerability validation support'],
    tools: ['Pentagi', 'Ollama', 'Local LLM integration', 'Docker', 'Linux'],
    outcome: 'Built a practical environment for evaluating AI-assisted penetration testing workflows, vulnerability validation support, and responsible offensive security experimentation.',
  },
  {
    title: 'AI & Machine Learning Security Analytics with Isolation Forest',
    category: 'AI & Machine Learning for Cybersecurity',
    icon: Binary,
    problem: 'Heterogeneous security telemetry can contain subtle outliers that are difficult to prioritize with rules alone.',
    approach: 'Explored Isolation Forest workflows for anomaly detection, feature review, notebook-based experimentation, and analyst-readable explanations.',
    role: 'Mary developed the experiment structure, documented assumptions, reviewed model outputs, and emphasized interpretability, analyst validation, and limitations.',
    tools: ['Python', 'Jupyter Notebook', 'scikit-learn', 'pandas', 'NumPy', 'Matplotlib', 'Isolation Forest'],
    outcome: 'Built a research-oriented project showing how anomaly detection can support investigation questions without replacing analyst judgment.',
  },
  {
    title: 'Digital Forensics Evidence Packaging and Timeline Building',
    category: 'Digital Forensics Support',
    icon: Fingerprint,
    problem: 'Incident evidence can lose value when files, hashes, metadata, collection notes, and timelines are not packaged consistently.',
    approach: 'Developed supporting workflows that package incident evidence, verify SHA256 hashes, record metadata, and reconstruct chronological timelines.',
    role: 'Mary built and documented evidence packaging, hash verification, metadata review, and timeline-building practices for response and forensics handoffs.',
    tools: ['Python', 'SHA256 verification', 'Forensic timelines', 'Metadata', 'Linux', 'Incident evidence'],
    outcome: 'Created digital forensics support utilities that make evidence handling clearer, more verifiable, and easier to explain during response review.',
  },
  {
    title: 'Cybersecurity Instructor and Lab Development',
    category: 'Cybersecurity Instruction',
    icon: BookOpenCheck,
    problem: 'Learners need practical cybersecurity labs that connect theory to real security operations tasks without overwhelming them with disconnected tools.',
    approach: 'Designed guided labs around alert triage, SIEM monitoring, incident response, threat intelligence, vulnerability assessment and security testing practice, digital forensics support, and reporting.',
    role: 'Mary developed lesson structure, lab flow, reflection prompts, assessment ideas, and tool walkthroughs that emphasize confidence and careful judgment.',
    tools: ['Wazuh', 'TheHive', 'Cortex', 'OpenCTI', 'Linux', 'Jupyter Notebook', 'MITRE ATT&CK'],
    outcome: 'Turned complex security workflows into approachable exercises with clear objectives, evidence expectations, and reporting habits.',
  },
  {
    title: 'Vulnerability Assessment and Security Testing Practice',
    category: 'Vulnerability Assessment and Security Testing',
    icon: SearchCheck,
    problem: 'Organizations and learners need disciplined security assessment practice that validates findings, explains risk, and recommends remediation responsibly.',
    approach: 'Practiced vulnerability identification, web/security testing fundamentals, evidence capture, severity explanation, reporting, remediation guidance, and defensive validation.',
    role: 'Mary documented assessment steps, mapped findings to risk, practiced concise reporting, and connected vulnerability observations to monitoring recommendations.',
    tools: ['Linux', 'vulnerability assessment and security testing practice', 'Risk reporting', 'Remediation notes', 'MITRE ATT&CK', 'Security assessment'],
    outcome: 'Built a careful assessment practice area focused on evidence quality, responsible wording, remediation support, and defensive validation.',
  },
];

export const researchInterests = [
  {
    title: 'AI-Assisted SOC Operations',
    icon: Bot,
    description: 'Studying analyst-reviewed workflows for triage, investigation questions, case notes, and AI-assisted reporting without removing human accountability.',
  },
  {
    title: 'Interpretable Anomaly Detection',
    icon: SearchCheck,
    description: 'Exploring Isolation Forest and related methods for highlighting unusual security telemetry patterns with explanations analysts can inspect.',
  },
  {
    title: 'Human-AI Collaboration in Cybersecurity',
    icon: FileCheck,
    description: 'Researching review checkpoints, confidence notes, transparent prompts, and audit-friendly outputs for shared analyst and AI workflows.',
  },
  {
    title: 'Security Telemetry Analysis',
    icon: Binary,
    description: 'Examining endpoint, network, identity, and application telemetry patterns that support investigation and detection validation.',
  },
  {
    title: 'Cybersecurity Education',
    icon: BookOpenCheck,
    description: 'Designing practical labs that help learners practice monitoring, threat intelligence, evidence review, and plain-language reporting.',
  },
  {
    title: 'Local LLM Security Workflows',
    icon: Fingerprint,
    description: 'Exploring Ollama, Qwen, prompt guardrails, local inference boundaries, and analyst-reviewed narratives for SOC reporting and investigation workflows.',
  },
];

export const instructionHighlights = [
  'Builds practical labs for security operations triage, SIEM dashboards, incident response, threat intelligence, vulnerability assessment and security testing practice, and digital forensics support.',
  'Uses clear objectives, scenario prompts, evidence expectations, and reflection questions so learners understand both tools and judgment.',
  'Connects technical tasks to reporting habits, escalation language, risk communication, and defensible documentation.',
];

export const certifications = [
  { name: 'Security Operations Portfolio', issuer: 'Documented evidence', status: 'security operations triage, incident response, SIEM dashboards, and case documentation' },
  { name: 'Cybersecurity Instruction Practice', issuer: 'Teaching evidence', status: 'Guided labs, learner support, tool walkthroughs, and assessment design' },
  { name: 'Threat Intelligence Workflow', issuer: 'Portfolio evidence', status: 'OpenCTI, indicator enrichment, VirusTotal, AbuseIPDB, and MITRE ATT&CK mapping' },
  { name: 'Security Operations Automation Workflow', issuer: 'Portfolio evidence', status: 'n8n, REST API integrations, Slack, Palo Alto, FortiGate, and analyst review gates' },
  { name: 'AI & Machine Learning Security Analytics Research', issuer: 'Research evidence', status: 'Python, notebooks, Isolation Forest, anomaly detection, and interpretable machine learning' },
  { name: 'Digital Forensics Support Utilities', issuer: 'Portfolio evidence', status: 'Evidence packaging, SHA256 verification, forensic timelines, and metadata review' },
];

export const contactCards = [
  {
    title: 'Email',
    detail: 'Send an email',
    href: 'mailto:techiesiwaamoah@gmail.com',
    icon: Mail,
  },
  {
    title: 'GitHub',
    detail: 'View GitHub profile',
    href: 'https://github.com/maryamoah',
    icon: GitBranch,
    external: true,
  },
  {
    title: 'LinkedIn',
    detail: 'Connect on LinkedIn',
    href: 'https://www.linkedin.com/in/mary-amoah',
    icon: Link,
    external: true,
  },
];

export const resumeLink = {
  label: 'Download Resume',
  href: '/mary-amoah-resume.txt',
  icon: FileDown,
};
