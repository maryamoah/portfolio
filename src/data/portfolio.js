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
  role: 'Cybersecurity Analyst, Consultant, Instructor, and Security Automation Engineer',
  headline:
    'Building practical cybersecurity solutions through automation, threat intelligence, and applied AI.',
  summary:
    'I work across security operations, threat intelligence, incident response, cybersecurity instruction, security automation, and AI-driven security research. My focus is building practical solutions that improve visibility, investigation, reporting, and security decision-making.',
  contactFocus: 'Available through email, GitHub, LinkedIn, or resume download',
  availability: 'Cybersecurity Specialist • Researcher • Consultant • Instructor',
  links: [
    { label: 'GitHub projects', href: '#github-projects', icon: GitBranch },
    { label: 'Case studies', href: '#case-studies', icon: Link },
    { label: 'Research interests', href: '#research', icon: Mail },
  ],
};


export const specializations = [
  'Security Operations',
  'Threat Intelligence',
  'Security Automation',
  'AI & Machine Learning Research',
  'Vulnerability Assessment & Security Testing',
  'Digital Forensics',
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
      'Designing monitoring, investigation, reporting, and escalation workflows that help security teams operate effectively.',
  },
  {
    title: 'Threat Intelligence & Automation',
    icon: Workflow,
    description:
      'Integrating intelligence sources, enrichment pipelines, and automation workflows to improve investigation efficiency.',
  },
  {
    title: 'AI & Machine Learning Research',
    icon: Binary,
    description:
      'Exploring interpretable machine learning, anomaly detection, and AI-assisted analyst workflows for cybersecurity.',
  },
];

export const professionalFocus = coreFocus;

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
    title: 'SIEM Engineering & Detection',
    icon: Radio,
    items: [
      'Detection engineering',
      'Custom detection rules',
      'Log parser development',
      'Decoder development',
      'Security use case development',
      'Correlation logic',
      'Alert tuning and optimization',
      'Dashboard engineering',
      'Security reporting',
      'MITRE ATT&CK mapping',
      'Detection validation',
    ],
  },
  {
    title: 'Security Operations',
    icon: ShieldAlert,
    items: [
      'Alert triage',
      'Incident investigation',
      'Threat hunting',
      'Case management',
      'Investigation workflows',
      'Log analysis',
      'TheHive',
      'Cortex',
    ],
  },
  {
    title: 'Security Automation',
    icon: Workflow,
    items: [
      'Workflow orchestration',
      'Threat intelligence enrichment',
      'Security integrations',
      'Automated response workflows',
      'Human review workflows',
      'Python',
      'n8n',
      'Slack integrations',
    ],
  },
  {
    title: 'Threat Intelligence',
    icon: Database,
    items: ['OpenCTI', 'Indicator enrichment', 'VirusTotal', 'AbuseIPDB', 'Threat context analysis', 'REST API integrations'],
  },
  {
    title: 'AI & Machine Learning Research',
    icon: Binary,
    items: ['Security telemetry analysis', 'Isolation Forest', 'Anomaly detection', 'Interpretable machine learning', 'scikit-learn', 'pandas', 'NumPy', 'Jupyter Notebook'],
  },
  {
    title: 'Vulnerability Assessment & Security Testing',
    icon: Bug,
    items: ['Vulnerability identification', 'Security assessment support', 'Web security fundamentals', 'Remediation guidance', 'Defensive validation'],
  },
  {
    title: 'Digital Forensics & Investigation Support',
    icon: Fingerprint,
    items: ['SHA256 verification', 'Evidence packaging', 'Timeline reconstruction', 'Investigation documentation', 'Reporting'],
  },
  {
    title: 'Cybersecurity Education',
    icon: BookOpenCheck,
    items: ['Lab development', 'Technical mentoring', 'Workshop delivery', 'Investigation training', 'Curriculum support'],
  },
];

export const experience = [
  {
    role: 'Cybersecurity Analyst and Consultant',
    company: 'Security Operations, Automation, and Advisory Workflows',
    period: 'Current focus',
    highlights: [
      'Designs security operations workflows for alert triage, SIEM monitoring, incident documentation, threat intelligence enrichment, escalation decisions, and response coordination.',
      'Helps teams think through operational improvements such as repeatable runbooks, dashboarding, executive reporting, automation boundaries, and human review checkpoints.',
      'Uses security platforms, enrichment sources, automation tools, and reporting patterns to document practical portfolio workflows.',
      'Supports vulnerability assessment and security testing practice and security assessment work involving vulnerability identification, web/security testing fundamentals, reporting, remediation guidance, and defensive validation.',
    ],
  },
  {
    role: 'Cybersecurity Instructor',
    company: 'Security Education and Practical Lab Development',
    period: 'Current focus',
    highlights: [
      'Builds guided labs that connect foundational security concepts to security operations, SIEM monitoring, incident response, threat intelligence, vulnerability assessment and security testing practice, and digital forensics support.',
      'Creates learner-friendly exercises for investigation questions, evidence validation, tool usage, documentation, escalation judgment, and plain-language reporting.',
      'Explains technical tools through practical exercises for beginner and early-career learners.',
      'Connects teaching work to research interests in cybersecurity education, practical lab design, AI-assisted security operations, and human-AI collaboration in cybersecurity.',
    ],
  },
  {
    role: 'Security Automation Engineer and AI & Machine Learning Researcher',
    company: 'Independent Cybersecurity Projects',
    period: 'GitHub and case study portfolio',
    highlights: [
      'Builds portfolio projects for AI-assisted triage, indicator enrichment, firewall block workflows, evidence packaging, forensic timeline building, and threat intelligence automation.',
      'Experiments with interpretable anomaly detection, log analysis, and analyst-readable outputs for security telemetry research.',
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
    repo: 'ai-soc-investigation-assistant',
    category: 'AI-Assisted Security Operations',
    description: 'Human-reviewed security operations investigation workflow for triage prompts, case notes, and next-step guidance.',
    tools: ['AI assistance', 'security operations triage', 'Case notes', 'Analyst workflow'],
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
    repo: 'ioc-n8n',
    category: 'IOC Automation',
    description: 'n8n workflow for indicator enrichment, context gathering, and analyst review.',
    tools: ['n8n', 'REST API integrations', 'IOC enrichment', 'Workflow automation'],
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
    title: 'Security Operations Reporting & Management Platform',
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
    title: 'AI-Assisted Security Operations Triage and Investigation',
    category: 'Security operations automation',
    icon: Bot,
    problem: 'Security operations analysts often spend time gathering alert context, drafting notes, checking indicators, and deciding what to review next.',
    approach: 'Designed a human-reviewed workflow that organizes alert details, proposes investigation questions, drafts a triage summary, and keeps final decisions with the analyst.',
    role: 'Mary defined the workflow stages, prompt structure, review checkpoints, documentation approach, and escalation notes.',
    tools: ['n8n', 'Python', 'REST API integrations', 'Slack', 'MITRE ATT&CK', 'SIEM dashboards'],
    outcome: 'Created a repeatable triage pattern for clearer notes, consistent evidence review, and careful escalation without claiming autonomous decision-making.',
  },
  {
    title: 'Wazuh SIEM Deployment & Monitoring',
    category: 'SIEM Engineering',
    icon: Activity,
    problem: 'Security teams need centralized visibility into endpoint events, authentication activity, suspicious behavior, and compliance signals.',
    approach: 'Outlined a Wazuh monitoring workflow covering agent enrollment, log collection, alert review, dashboard organization, rule tuning concepts, and reporting.',
    role: 'Mary configured the portfolio workflow, documented monitoring steps, mapped alert review paths, and described dashboard usage for Security Operations and incident response work.',
    tools: ['Wazuh', 'Linux', 'SIEM dashboards', 'MITRE ATT&CK', 'Rule tuning', 'Log analysis'],
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
    title: 'Firewall IP Blocking Automation',
    category: 'Network Defense Automation',
    icon: Network,
    problem: 'Validated malicious IP addresses can keep generating risk or alert volume when firewall updates depend on manual handoffs.',
    approach: 'Designed a controlled automation pattern with indicator validation, approval criteria, expiration notes, rollback needs, and audit records before blocklist changes.',
    role: 'Mary defined validation gates, false-positive checks, human approval points, Slack notifications, documentation fields, and safe containment logic.',
    tools: ['Palo Alto', 'FortiGate', 'n8n', 'REST API integrations', 'Slack', 'TheHive', 'Firewall blocklists'],
    outcome: 'Built a cautious containment workflow that supports faster response while preserving review, accountability, rollback planning, and operational safety.',
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
    title: 'AI-Assisted Security Operations',
    icon: Bot,
    description: 'Studying how AI can summarize alerts, draft case notes, suggest investigation questions, and reduce repetitive security operations work while preserving human accountability.',
  },
  {
    title: 'Machine Learning for Security Telemetry',
    icon: Binary,
    description: 'Exploring how machine learning can support analysis of endpoint, network, identity, and application telemetry without hiding uncertainty from analysts.',
  },
  {
    title: 'Interpretable Anomaly Detection',
    icon: SearchCheck,
    description: 'Investigating Isolation Forest and related methods for highlighting unusual activity with explanations that analysts can inspect and challenge.',
  },
  {
    title: 'Human-AI Collaboration in Cybersecurity',
    icon: FileCheck,
    description: 'Researching review checkpoints, confidence notes, transparent prompts, and audit-friendly outputs for shared work between analysts and AI assistants.',
  },
  {
    title: 'Threat Intelligence Automation',
    icon: Database,
    description: 'Exploring indicator collection, enrichment, source confidence review, MITRE ATT&CK mapping, alert context, and analyst briefings.',
  },
  {
    title: 'Cybersecurity Education and Practical Lab Design',
    icon: BookOpenCheck,
    description: 'Designing labs that help learners practice investigation habits, tool usage, evidence validation, and plain-language reporting.',
  },
  {
    title: 'Digital Forensics Workflow Automation',
    icon: Fingerprint,
    description: 'Developing repeatable approaches for evidence packaging, SHA256 hash verification, metadata review, and forensic timeline generation.',
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
