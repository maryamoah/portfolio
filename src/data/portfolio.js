import {
  Activity,
  Award,
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
  Link,
  Mail,
  Network,
  Radio,
  SearchCheck,
  ShieldAlert,
  ShieldCheck,
  Terminal,
  Workflow,
} from 'lucide-react';

export const profile = {
  name: 'Mary Abenawa Techiesiwa Amoah',
  role: 'Cybersecurity Analyst | Cybersecurity Instructor | SOC Automation | AI/ML Security Research',
  location: 'United States',
  summary:
    'I build and document practical cybersecurity workflows across SOC operations, SIEM engineering, incident response, threat intelligence, SOC automation, AI/ML security analytics, VAPT, digital forensics support, and hands-on cybersecurity instruction.',
  email: 'Cybersecurity analyst · instructor · SOC automation · AI/ML security research',
  availability: 'SOC operations · AI/ML security research · cybersecurity instruction',
  links: [
    { label: 'GitHub projects', href: '#github-projects', icon: GitBranch },
    { label: 'Case studies', href: '#case-studies', icon: Link },
    { label: 'Research interests', href: '#research', icon: Mail },
  ],
  focusAreas: [
    'SOC operations, alert triage, SIEM dashboards, and incident response documentation',
    'Cybersecurity instruction, practical lab design, learner mentoring, and assessment support',
    'Threat intelligence, OpenCTI integration, IOC enrichment, and MITRE ATT&CK mapping',
    'SOC automation, n8n workflows, REST APIs, Slack notifications, and firewall response patterns',
    'AI/ML for cybersecurity, interpretable anomaly detection, and security telemetry research',
    'VAPT practice, digital forensics support, SHA256 evidence integrity, and forensic timelines',
  ],
};

export const metrics = [
  { value: 'SOC', label: 'Operations, triage, enrichment, escalation, and response workflow design' },
  { value: 'AI/ML', label: 'Isolation Forest experiments and interpretable security telemetry analytics' },
  { value: 'EDU', label: 'Cybersecurity instruction, guided labs, practical exercises, and learner support' },
];

export const skills = [
  {
    title: 'SOC Operations',
    icon: ShieldCheck,
    items: ['Alert triage', 'Log analysis', 'Case notes', 'Escalation support', 'Analyst runbooks'],
  },
  {
    title: 'Cybersecurity Instruction',
    icon: GraduationCap,
    items: ['Lab development', 'Lesson planning', 'Tool walkthroughs', 'Assessment support', 'Learner mentoring'],
  },
  {
    title: 'Threat Intelligence',
    icon: Database,
    items: ['OpenCTI workflows', 'IOC enrichment', 'VirusTotal', 'AbuseIPDB', 'MITRE ATT&CK mapping'],
  },
  {
    title: 'Incident Response',
    icon: ShieldAlert,
    items: ['TheHive cases', 'Cortex analyzers', 'Evidence notes', 'Containment logic', 'Post-incident review'],
  },
  {
    title: 'SIEM Engineering',
    icon: Radio,
    items: ['Wazuh deployment', 'Endpoint agents', 'Rule tuning', 'SIEM dashboards', 'Monitoring workflows'],
  },
  {
    title: 'SOC Automation',
    icon: Workflow,
    items: ['n8n workflows', 'REST APIs', 'Slack alerts', 'Palo Alto actions', 'FortiGate workflows'],
  },
  {
    title: 'AI/ML for Cybersecurity',
    icon: Binary,
    items: ['Jupyter Notebook', 'Isolation Forest', 'Anomaly detection', 'Telemetry features', 'Explainable outputs'],
  },
  {
    title: 'VAPT',
    icon: Bug,
    items: ['Security assessment practice', 'Finding validation', 'Risk notes', 'Remediation guidance', 'Report writing'],
  },
  {
    title: 'Digital Forensics Support',
    icon: Fingerprint,
    items: ['SHA256 hashing', 'Evidence packaging', 'Forensic timelines', 'Metadata review', 'Integrity checks'],
  },
  {
    title: 'Technical Toolkit',
    icon: Terminal,
    items: ['Linux', 'Python', 'JavaScript', 'REST APIs', 'Documentation'],
  },
];

export const experience = [
  {
    role: 'Cybersecurity Analyst',
    company: 'Security Operations & Portfolio Lab Work',
    period: 'Current focus',
    highlights: [
      'Works on SOC operations workflows that review alerts, endpoint details, authentication events, network indicators, SIEM dashboards, and threat intelligence before closure, escalation, or containment recommendations.',
      'Develops repeatable investigation notes for phishing, suspicious authentication, malware indicators, policy violations, vulnerability findings, and firewall response actions.',
      'Uses Wazuh, TheHive, Cortex, OpenCTI, n8n, Python, JavaScript, Linux, REST APIs, VirusTotal, AbuseIPDB, Slack, Palo Alto, FortiGate, and MITRE ATT&CK concepts in practical portfolio workflows.',
      'Supports digital forensics workflows with SHA256 hashing, evidence packaging, forensic timelines, metadata review, and integrity-preserving documentation.',
    ],
  },
  {
    role: 'Cybersecurity Instructor',
    company: 'Security Education & Lab Development',
    period: 'Current focus',
    highlights: [
      'Designs cybersecurity instruction that connects foundational security concepts to realistic SOC operations, SIEM monitoring, incident response, threat intelligence, VAPT, and network defense scenarios.',
      'Builds guided labs that help learners practice investigation questions, evidence validation, tool usage, documentation, escalation judgment, and plain-language reporting.',
      'Breaks down tools such as Wazuh, TheHive, Cortex, OpenCTI, n8n, Jupyter Notebook, and Linux into practical exercises that support beginner and early-career learners.',
      'Explores research and PhD interests in AI-assisted SOC operations, machine learning for security telemetry, human-AI collaboration, cybersecurity education, and practical lab design.',
    ],
  },
  {
    role: 'SOC Automation and AI/ML Security Research Builder',
    company: 'Independent Cybersecurity Projects',
    period: 'GitHub and case study portfolio',
    highlights: [
      'Built and documented automation concepts that enrich alerts, explain logs, package incident evidence, create forensic timelines, verify hashes, monitor leak intelligence, and support controlled firewall blocking workflows.',
      'Developed AI/ML security analytics experiments using Isolation Forest and Jupyter Notebook to explore interpretable anomaly detection for heterogeneous security telemetry.',
      'Documents each case study with the problem, solution, Mary Abenawa Techiesiwa Amoah’s role, tools used, outcome, limitations, and human review points without inventing production metrics.',
    ],
  },
];

export const githubProjects = [
  {
    repo: 'ai-anomaly-security',
    category: 'AI/ML Security Analytics',
    description:
      'Interpretable anomaly detection for heterogeneous security telemetry using Isolation Forest.',
    tools: ['Python', 'Jupyter Notebook', 'Isolation Forest', 'Security telemetry'],
  },
  {
    repo: 'attack-hunting-lab',
    category: 'Threat Hunting Lab',
    description: 'Security lab for attack investigation and threat hunting.',
    tools: ['Linux', 'MITRE ATT&CK', 'Threat hunting', 'Lab design'],
  },
  {
    repo: 'ai-soc-investigation-assistant',
    category: 'AI-Assisted SOC',
    description: 'AI-assisted SOC investigation workflow.',
    tools: ['AI assistance', 'SOC triage', 'Case notes', 'Analyst workflow'],
  },
  {
    repo: 'incident-evidence-packager',
    category: 'Digital Forensics Support',
    description:
      'Packages incident response and digital forensics evidence into verifiable integrity-preserving bundles.',
    tools: ['Python', 'SHA256 hashing', 'Evidence integrity', 'Incident response'],
  },
  {
    repo: 'evidence-timeline-builder',
    category: 'Forensic Timelines',
    description: 'Reconstructs chronological timelines from forensic evidence metadata.',
    tools: ['Python', 'Forensic timelines', 'Metadata', 'Digital forensics'],
  },
  {
    repo: 'hash-verify-cli',
    category: 'Evidence Integrity',
    description: 'Verifies SHA256 hashes for forensic evidence integrity.',
    tools: ['CLI', 'SHA256 hashing', 'Integrity verification', 'Forensics'],
  },
  {
    repo: 'telegram-leak-monitor',
    category: 'Leak Intelligence',
    description: 'Monitoring/security automation project for Telegram leak intelligence.',
    tools: ['Python', 'Threat intelligence', 'Monitoring', 'Automation'],
  },
  {
    repo: 'validator',
    category: 'Identity Security',
    description: 'AD credential validation utility without an AD service account.',
    tools: ['Security utility', 'Credential validation', 'AD concepts', 'Risk review'],
  },
  {
    repo: 'ai-log-explainer',
    category: 'AI Log Analysis',
    description: 'AI-powered log explanation project.',
    tools: ['AI assistance', 'Log analysis', 'SOC documentation', 'Analyst support'],
  },
  {
    repo: 'ioc-n8n',
    category: 'IOC Automation',
    description: 'IOC automation workflow using n8n.',
    tools: ['n8n', 'REST APIs', 'IOC enrichment', 'Workflow automation'],
  },
  {
    repo: 'threatbot',
    category: 'Threat Intelligence Automation',
    description: 'Threat intelligence/security automation bot.',
    tools: ['Threat intelligence', 'Automation bot', 'Security notifications', 'IOC context'],
  },
];

export const projects = [
  {
    title: 'AI-Assisted SOC Triage and Investigation',
    category: 'SOC Automation',
    icon: Bot,
    problem:
      'SOC analysts can spend significant time collecting alert context, drafting notes, checking indicators, and deciding what to review next.',
    solution:
      'Built an AI-assisted workflow concept that organizes alert details, proposes investigation questions, drafts a triage summary, and keeps the analyst responsible for validation and final decisions.',
    role:
      'Mary Abenawa Techiesiwa Amoah designed the workflow stages, prompt structure, review checkpoints, documentation approach, and escalation notes for human-in-the-loop SOC triage.',
    tools: ['n8n', 'Python', 'JavaScript', 'REST APIs', 'Slack', 'MITRE ATT&CK', 'SIEM dashboards'],
    outcome:
      'Developed a repeatable triage pattern that supports clearer analyst notes, more consistent evidence review, and careful escalation without claiming autonomous decision-making.',
  },
  {
    title: 'Wazuh SIEM Deployment and Monitoring',
    category: 'SIEM Engineering',
    icon: Activity,
    problem:
      'Security teams need centralized visibility into endpoint events, authentication activity, suspicious behavior, compliance signals, and trends shown through SIEM dashboards.',
    solution:
      'Designed a Wazuh monitoring workflow covering agent enrollment, log collection, alert review, dashboard organization, rule tuning concepts, and analyst-ready reporting.',
    role:
      'Configured the portfolio workflow, documented monitoring steps, mapped alert review paths, and described how dashboards can support SOC operations and incident response.',
    tools: ['Wazuh', 'Linux', 'SIEM dashboards', 'MITRE ATT&CK', 'Rule tuning', 'Log analysis'],
    outcome:
      'Built a practical SIEM engineering case study that demonstrates how Wazuh can support monitoring, triage, documentation, and security communication.',
  },
  {
    title: 'TheHive + Cortex Incident Response Workflow',
    category: 'Incident Response',
    icon: ShieldAlert,
    problem:
      'Incident response can become inconsistent when alerts, enrichment results, task ownership, evidence notes, and closure decisions are tracked in disconnected places.',
    solution:
      'Developed a workflow that turns validated alerts into TheHive cases, enriches observables with Cortex analyzers, records evidence, assigns tasks, and preserves investigation context.',
    role:
      'Defined case templates, analyst notes, enrichment steps, severity review, closure criteria, and communication guidance for structured incident response support.',
    tools: ['TheHive', 'Cortex', 'VirusTotal', 'AbuseIPDB', 'REST APIs', 'Runbooks', 'Incident timelines'],
    outcome:
      'Supported more consistent incident handling by giving each case a clear owner, evidence trail, enrichment record, timeline, and recommended next action.',
  },
  {
    title: 'OpenCTI Threat Intelligence Integration',
    category: 'Threat Intelligence',
    icon: Database,
    problem:
      'Alerts are harder to prioritize when IOCs lack context about malware, infrastructure, tactics, techniques, campaigns, source confidence, or relevance to an investigation.',
    solution:
      'Integrated an OpenCTI-centered process for collecting, organizing, and summarizing threat context before analyst escalation or response decisions.',
    role:
      'Modeled how analysts should collect indicators, validate source confidence, map context to MITRE ATT&CK, and attach threat notes to incident records and reports.',
    tools: ['OpenCTI', 'MITRE ATT&CK', 'VirusTotal', 'AbuseIPDB', 'TheHive', 'Threat intelligence feeds'],
    outcome:
      'Created a context-driven prioritization approach that helps distinguish routine noise from indicators that deserve escalation, monitoring, or containment review.',
  },
  {
    title: 'Firewall IP Blocking Automation using Palo Alto/FortiGate workflows',
    category: 'Network Defense Automation',
    icon: Network,
    problem:
      'Validated malicious IP addresses can keep generating risk or alert volume when firewall updates depend entirely on manual handoffs.',
    solution:
      'Designed a controlled automation pattern that checks indicator validation, approval criteria, expiration notes, rollback needs, and audit records before firewall blocklist updates.',
    role:
      'Defined validation gates, false-positive checks, human approval points, Slack notifications, documentation fields, and safe containment logic for Palo Alto and FortiGate-style workflows.',
    tools: ['Palo Alto', 'FortiGate', 'n8n', 'REST APIs', 'Slack', 'TheHive', 'Firewall blocklists'],
    outcome:
      'Developed a cautious containment workflow that supports faster response while preserving review, accountability, rollback planning, and operational safety.',
  },
  {
    title: 'AI/ML Security Analytics with Isolation Forest',
    category: 'AI/ML for Cybersecurity',
    icon: Binary,
    problem:
      'Heterogeneous security telemetry can contain subtle outliers that are difficult to prioritize with rules alone, especially when analysts need interpretable evidence.',
    solution:
      'Explored an Isolation Forest workflow for anomaly detection, feature review, notebook-based experimentation, and analyst-readable explanations of suspicious telemetry patterns.',
    role:
      'Developed the experiment structure, documented assumptions, reviewed model outputs, and emphasized interpretability, analyst validation, and limits of ML-assisted security analytics.',
    tools: ['Python', 'Jupyter Notebook', 'Isolation Forest', 'Security telemetry', 'AI/ML', 'Data analysis'],
    outcome:
      'Built a research-oriented project that demonstrates how anomaly detection can support investigation questions without replacing analyst judgment or overclaiming detection performance.',
  },
  {
    title: 'Digital Forensics Evidence Packaging and Timeline Building',
    category: 'Digital Forensics Support',
    icon: Fingerprint,
    problem:
      'Incident evidence can lose value when files, hashes, metadata, collection notes, and timelines are not packaged in a repeatable integrity-preserving way.',
    solution:
      'Developed supporting workflows that package incident evidence, verify SHA256 hashes, record metadata, and reconstruct chronological forensic timelines from evidence details.',
    role:
      'Built and documented evidence packaging, hash verification, metadata review, and timeline-building practices to support incident response and digital forensics handoffs.',
    tools: ['Python', 'SHA256 hashing', 'Forensic timelines', 'Metadata', 'Linux', 'Incident evidence'],
    outcome:
      'Created digital forensics support utilities that make evidence handling clearer, more verifiable, and easier to explain during response review.',
  },
  {
    title: 'Cybersecurity Instructor and Lab Development',
    category: 'Cybersecurity Instruction',
    icon: BookOpenCheck,
    problem:
      'Learners need practical cybersecurity labs that connect theory to real SOC tasks without overwhelming them with disconnected tools or unclear expectations.',
    solution:
      'Designed guided labs and teaching materials around alert triage, SIEM monitoring, incident response, threat intelligence, VAPT practice, digital forensics support, and reporting.',
    role:
      'Mary Abenawa Techiesiwa Amoah developed lesson structure, lab flow, reflection prompts, assessment ideas, and tool walkthroughs that emphasize confidence and careful judgment.',
    tools: ['Wazuh', 'TheHive', 'Cortex', 'OpenCTI', 'Linux', 'Jupyter Notebook', 'MITRE ATT&CK'],
    outcome:
      'Supported practical learning by turning complex security workflows into approachable exercises with clear objectives, evidence expectations, and reporting habits.',
  },
  {
    title: 'VAPT and Security Assessment Practice',
    category: 'Vulnerability Assessment and Penetration Testing',
    icon: SearchCheck,
    problem:
      'Organizations and learners need disciplined security assessment practice that validates findings, explains risk, and recommends remediation without exaggerating impact.',
    solution:
      'Worked on a VAPT practice approach for scoping, reconnaissance notes, finding validation, evidence capture, severity explanation, remediation guidance, and reporting.',
    role:
      'Documented assessment steps, mapped findings to business risk, practiced concise reporting, and connected vulnerability observations to incident response and monitoring recommendations.',
    tools: ['Linux', 'VAPT methodology', 'Risk reporting', 'Remediation notes', 'MITRE ATT&CK', 'Security assessment'],
    outcome:
      'Built a careful security assessment practice area that emphasizes evidence quality, clear communication, responsible wording, and practical remediation support.',
  },
];

export const researchInterests = [
  {
    title: 'AI-assisted SOC operations',
    icon: Bot,
    description:
      'Exploring how AI can help summarize alerts, draft case notes, recommend next investigation questions, and reduce repetitive SOC work while preserving human accountability.',
  },
  {
    title: 'Machine learning for security telemetry',
    icon: Binary,
    description:
      'Studying how machine learning can support analysis of endpoint, network, identity, and application telemetry without hiding uncertainty from analysts.',
  },
  {
    title: 'Interpretable anomaly detection',
    icon: SearchCheck,
    description:
      'Investigating Isolation Forest and related approaches for highlighting unusual activity with explanations that analysts can inspect and challenge.',
  },
  {
    title: 'Human-AI collaboration in cybersecurity',
    icon: FileCheck,
    description:
      'Researching how humans and AI assistants can share SOC tasks safely through review checkpoints, confidence notes, transparent prompts, and audit-friendly outputs.',
  },
  {
    title: 'Cybersecurity education and practical lab design',
    icon: BookOpenCheck,
    description:
      'Designing labs that help learners practice real investigation habits, tool usage, evidence validation, and plain-language reporting.',
  },
  {
    title: 'Threat intelligence automation',
    icon: Database,
    description:
      'Exploring automation for IOC collection, enrichment, source confidence review, MITRE ATT&CK mapping, alert context, and analyst briefings.',
  },
  {
    title: 'Digital forensics workflow automation',
    icon: Fingerprint,
    description:
      'Developing repeatable approaches for evidence packaging, SHA256 hash verification, metadata review, and forensic timeline generation.',
  },
];

export const certifications = [
  { name: 'Security operations portfolio', issuer: 'Portfolio evidence', status: 'SOC operations, incident response, SIEM dashboards, and case documentation' },
  { name: 'Cybersecurity instruction practice', issuer: 'Teaching and lab design', status: 'Lessons, guided labs, mentoring, and assessment support' },
  { name: 'Threat intelligence workflow', issuer: 'Portfolio evidence', status: 'OpenCTI, IOC enrichment, VirusTotal, AbuseIPDB, and MITRE ATT&CK' },
  { name: 'SOC automation workflow', issuer: 'Portfolio evidence', status: 'n8n, REST APIs, Slack, Palo Alto, FortiGate, and analyst review gates' },
  { name: 'AI/ML security analytics research', issuer: 'Portfolio evidence', status: 'Jupyter Notebook, Python, Isolation Forest, and interpretable anomaly detection' },
  { name: 'Digital forensics support utilities', issuer: 'Portfolio evidence', status: 'Evidence packaging, SHA256 hashing, forensic timelines, and metadata review' },
];

export const contactCards = [
  {
    title: 'Cybersecurity analyst roles',
    detail: 'Connect about SOC operations, alert triage, incident response, SIEM monitoring, threat intelligence, VAPT, and security assessment support.',
    icon: Briefcase,
  },
  {
    title: 'SOC automation and AI/ML projects',
    detail: 'Discuss workflows that connect alerts, enrichment, AI-assisted investigation, n8n automation, Slack, firewall response, and interpretable anomaly detection.',
    icon: Workflow,
  },
  {
    title: 'Cybersecurity instruction and research',
    detail: 'Collaborate on practical labs, curriculum, workshops, mentoring, PhD-aligned research interests, and digital forensics workflow automation.',
    icon: Award,
  },
];
