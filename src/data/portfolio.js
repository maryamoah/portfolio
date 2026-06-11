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
  shortName: 'Mary Amoah',
  role: 'Cybersecurity Analyst | Cybersecurity Consultant | Cybersecurity Instructor | SOC Automation | AI/ML Security Research',
  headline:
    'Building practical security operations through automation, threat intelligence, and AI-assisted investigation.',
  summary:
    'Mary works across SOC operations, cybersecurity instruction, threat intelligence, SIEM engineering, incident response, automation, VAPT practice, digital forensics support, and AI/ML security research.',
  contactFocus: 'Cybersecurity consulting · SOC workflows · security education · AI/ML research',
  availability: 'Cybersecurity analyst · consultant · instructor',
  links: [
    { label: 'GitHub Projects', href: '#github-projects', icon: GitBranch },
    { label: 'Case Studies', href: '#case-studies', icon: Link },
    { label: 'Research Interests', href: '#research', icon: Mail },
  ],
};

export const metrics = [
  { value: 'SOC', label: 'Triage, enrichment, escalation, response workflow design' },
  { value: 'IR', label: 'TheHive, Cortex, evidence notes, timelines, reporting' },
  { value: 'AI/ML', label: 'Isolation Forest, notebooks, telemetry analysis, interpretability' },
];

export const professionalFocus = [
  {
    title: 'Security Operations',
    icon: ShieldCheck,
    description:
      'SOC triage, SIEM monitoring, alert review, escalation notes, incident response workflows, and analyst-ready reporting.',
  },
  {
    title: 'Consulting And Workflow Improvement',
    icon: Briefcase,
    description:
      'Helping teams design, improve, and operationalize SOC processes, threat intelligence enrichment, automation, reporting, and training.',
  },
  {
    title: 'Threat Intelligence And Automation',
    icon: Database,
    description:
      'IOC enrichment, OpenCTI integration, MITRE ATT&CK context, REST API workflows, Slack notifications, and firewall response patterns.',
  },
  {
    title: 'AI/ML Security Research',
    icon: Binary,
    description:
      'Security telemetry analysis with Python, Jupyter Notebook, scikit-learn, pandas, NumPy, Matplotlib, Isolation Forest, and interpretable anomaly detection.',
  },
  {
    title: 'Digital Forensics Support',
    icon: Fingerprint,
    description:
      'Evidence packaging, SHA256 hashing, metadata review, forensic timelines, integrity checks, and handoff documentation.',
  },
  {
    title: 'Cybersecurity Instruction',
    icon: GraduationCap,
    description:
      'Practical lab design, learner guidance, tool walkthroughs, assessment support, and security concepts explained through realistic workflows.',
  },
];

export const consultingServices = [
  'SOC workflow design and improvement',
  'SIEM deployment, tuning, and dashboarding',
  'Threat intelligence integration',
  'Incident response workflow automation',
  'AI-assisted SOC triage and enrichment',
  'VAPT support and remediation guidance',
  'Cybersecurity training and practical lab development',
  'Executive security reporting',
];

export const skills = [
  {
    title: 'SOC And Incident Response',
    icon: ShieldAlert,
    items: ['Alert triage', 'Log analysis', 'Case notes', 'TheHive', 'Cortex', 'Forensic timelines'],
  },
  {
    title: 'SIEM And Monitoring',
    icon: Radio,
    items: ['Wazuh', 'SIEM dashboards', 'Endpoint agents', 'Rule tuning', 'Linux', 'MITRE ATT&CK'],
  },
  {
    title: 'Threat Intelligence',
    icon: Database,
    items: ['OpenCTI', 'VirusTotal', 'AbuseIPDB', 'IOC enrichment', 'Threat context', 'REST APIs'],
  },
  {
    title: 'Automation And Network Defense',
    icon: Workflow,
    items: ['n8n', 'Slack', 'Palo Alto', 'FortiGate', 'Firewall workflows', 'Human review gates'],
  },
  {
    title: 'AI/ML Security Analytics',
    icon: Binary,
    items: ['Python', 'Jupyter Notebook', 'scikit-learn', 'pandas', 'NumPy', 'Matplotlib'],
  },
  {
    title: 'Anomaly Detection Research',
    icon: SearchCheck,
    items: ['Isolation Forest', 'Anomaly detection', 'Security telemetry analysis', 'Interpretable ML', 'Feature review'],
  },
  {
    title: 'VAPT Practice',
    icon: Bug,
    items: ['Vulnerability identification', 'Web testing fundamentals', 'Reporting', 'Remediation guidance', 'Defensive validation'],
  },
  {
    title: 'Evidence And Documentation',
    icon: Terminal,
    items: ['SHA256 hashing', 'Evidence packaging', 'Runbooks', 'Executive reporting', 'Security documentation'],
  },
];

export const experience = [
  {
    role: 'Cybersecurity Analyst And Consultant',
    company: 'Security Operations, Automation, And Advisory Workflows',
    period: 'Current focus',
    highlights: [
      'Designs SOC workflows for alert triage, SIEM monitoring, incident documentation, threat intelligence enrichment, escalation decisions, and response coordination.',
      'Helps teams think through operational improvements such as repeatable runbooks, dashboarding, executive reporting, automation boundaries, and human review checkpoints.',
      'Works with Wazuh, TheHive, Cortex, OpenCTI, n8n, VirusTotal, AbuseIPDB, Slack, Palo Alto, FortiGate, Linux, REST APIs, and MITRE ATT&CK concepts in practical workflows.',
      'Supports VAPT practice and security assessment work involving vulnerability identification, web/security testing fundamentals, reporting, remediation guidance, and defensive validation.',
    ],
  },
  {
    role: 'Cybersecurity Instructor',
    company: 'Security Education And Practical Lab Development',
    period: 'Current focus',
    highlights: [
      'Builds guided labs that connect foundational security concepts to SOC operations, SIEM monitoring, incident response, threat intelligence, VAPT practice, and digital forensics support.',
      'Creates learner-friendly exercises for investigation questions, evidence validation, tool usage, documentation, escalation judgment, and plain-language reporting.',
      'Explains tools such as Wazuh, TheHive, Cortex, OpenCTI, n8n, Jupyter Notebook, and Linux through practical exercises for beginner and early-career learners.',
      'Connects teaching work to research interests in cybersecurity education, practical lab design, AI-assisted SOC operations, and human-AI collaboration in cybersecurity.',
    ],
  },
  {
    role: 'SOC Automation And AI/ML Security Researcher',
    company: 'Independent Cybersecurity Projects',
    period: 'GitHub and case study portfolio',
    highlights: [
      'Builds portfolio projects for AI-assisted triage, IOC enrichment, firewall block workflows, evidence packaging, forensic timeline building, and threat intelligence automation.',
      'Experiments with Python, Jupyter Notebook, scikit-learn, pandas, NumPy, Matplotlib, Isolation Forest, anomaly detection, log analysis, and interpretable ML for security telemetry.',
      'Documents each case study with the problem, approach, role, tools, outcome, limitations, and human review points without inventing production metrics.',
    ],
  },
];

export const githubProjects = [
  {
    repo: 'ai-anomaly-security',
    category: 'AI/ML Security Analytics',
    description: 'Isolation Forest experiments for interpretable anomaly detection in security telemetry.',
    tools: ['Python', 'Jupyter Notebook', 'scikit-learn', 'pandas', 'Isolation Forest'],
  },
  {
    repo: 'attack-hunting-lab',
    category: 'Threat Hunting Lab',
    description: 'Security lab for attack investigation, threat hunting practice, and MITRE ATT&CK mapping.',
    tools: ['Linux', 'MITRE ATT&CK', 'Threat hunting', 'Lab design'],
  },
  {
    repo: 'ai-soc-investigation-assistant',
    category: 'AI-Assisted SOC',
    description: 'Human-reviewed SOC investigation workflow for triage prompts, case notes, and next-step guidance.',
    tools: ['AI assistance', 'SOC triage', 'Case notes', 'Analyst workflow'],
  },
  {
    repo: 'incident-evidence-packager',
    category: 'Digital Forensics Support',
    description: 'Evidence packaging workflow for incident response and integrity-preserving handoffs.',
    tools: ['Python', 'SHA256 hashing', 'Evidence integrity', 'Incident response'],
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
    tools: ['CLI', 'SHA256 hashing', 'Integrity verification', 'Forensics'],
  },
  {
    repo: 'telegram-leak-monitor',
    category: 'Leak Intelligence',
    description: 'Monitoring and automation concept for leak intelligence review and security notifications.',
    tools: ['Python', 'Threat intelligence', 'Monitoring', 'Automation'],
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
    tools: ['AI assistance', 'Log analysis', 'SOC documentation', 'Analyst support'],
  },
  {
    repo: 'ioc-n8n',
    category: 'IOC Automation',
    description: 'n8n workflow for IOC enrichment, context gathering, and analyst review.',
    tools: ['n8n', 'REST APIs', 'IOC enrichment', 'Workflow automation'],
  },
  {
    repo: 'threatbot',
    category: 'Threat Intelligence Automation',
    description: 'Threat intelligence notification concept for IOC context and security team updates.',
    tools: ['Threat intelligence', 'Automation bot', 'Security notifications', 'IOC context'],
  },
];

export const projects = [
  {
    title: 'AI-Assisted SOC Triage and Investigation',
    category: 'SOC Automation',
    icon: Bot,
    problem: 'SOC analysts often spend time gathering alert context, drafting notes, checking indicators, and deciding what to review next.',
    approach: 'Designed a human-reviewed workflow that organizes alert details, proposes investigation questions, drafts a triage summary, and keeps final decisions with the analyst.',
    role: 'Mary defined the workflow stages, prompt structure, review checkpoints, documentation approach, and escalation notes.',
    tools: ['n8n', 'Python', 'REST APIs', 'Slack', 'MITRE ATT&CK', 'SIEM dashboards'],
    outcome: 'Created a repeatable triage pattern for clearer notes, consistent evidence review, and careful escalation without claiming autonomous decision-making.',
  },
  {
    title: 'Wazuh SIEM Deployment and Monitoring',
    category: 'SIEM Engineering',
    icon: Activity,
    problem: 'Security teams need centralized visibility into endpoint events, authentication activity, suspicious behavior, and compliance signals.',
    approach: 'Outlined a Wazuh monitoring workflow covering agent enrollment, log collection, alert review, dashboard organization, rule tuning concepts, and reporting.',
    role: 'Mary configured the portfolio workflow, documented monitoring steps, mapped alert review paths, and described dashboard usage for SOC and incident response work.',
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
    tools: ['TheHive', 'Cortex', 'VirusTotal', 'AbuseIPDB', 'REST APIs', 'Incident timelines'],
    outcome: 'Established a structured case-handling pattern with clearer ownership, evidence trails, enrichment records, timelines, and next-action recommendations.',
  },
  {
    title: 'OpenCTI Threat Intelligence Integration',
    category: 'Threat Intelligence',
    icon: Database,
    problem: 'Alerts are harder to prioritize when IOCs lack context about malware, infrastructure, tactics, campaigns, source confidence, or relevance.',
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
    tools: ['Palo Alto', 'FortiGate', 'n8n', 'REST APIs', 'Slack', 'TheHive', 'Firewall blocklists'],
    outcome: 'Built a cautious containment workflow that supports faster response while preserving review, accountability, rollback planning, and operational safety.',
  },
  {
    title: 'AI/ML Security Analytics with Isolation Forest',
    category: 'AI/ML For Cybersecurity',
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
    tools: ['Python', 'SHA256 hashing', 'Forensic timelines', 'Metadata', 'Linux', 'Incident evidence'],
    outcome: 'Created digital forensics support utilities that make evidence handling clearer, more verifiable, and easier to explain during response review.',
  },
  {
    title: 'Cybersecurity Instructor and Lab Development',
    category: 'Cybersecurity Instruction',
    icon: BookOpenCheck,
    problem: 'Learners need practical cybersecurity labs that connect theory to real SOC tasks without overwhelming them with disconnected tools.',
    approach: 'Designed guided labs around alert triage, SIEM monitoring, incident response, threat intelligence, VAPT practice, digital forensics support, and reporting.',
    role: 'Mary developed lesson structure, lab flow, reflection prompts, assessment ideas, and tool walkthroughs that emphasize confidence and careful judgment.',
    tools: ['Wazuh', 'TheHive', 'Cortex', 'OpenCTI', 'Linux', 'Jupyter Notebook', 'MITRE ATT&CK'],
    outcome: 'Turned complex security workflows into approachable exercises with clear objectives, evidence expectations, and reporting habits.',
  },
  {
    title: 'VAPT and Security Assessment Practice',
    category: 'Vulnerability Assessment And Penetration Testing',
    icon: SearchCheck,
    problem: 'Organizations and learners need disciplined security assessment practice that validates findings, explains risk, and recommends remediation responsibly.',
    approach: 'Practiced vulnerability identification, web/security testing fundamentals, evidence capture, severity explanation, reporting, remediation guidance, and defensive validation.',
    role: 'Mary documented assessment steps, mapped findings to risk, practiced concise reporting, and connected vulnerability observations to monitoring recommendations.',
    tools: ['Linux', 'VAPT practice', 'Risk reporting', 'Remediation notes', 'MITRE ATT&CK', 'Security assessment'],
    outcome: 'Built a careful assessment practice area focused on evidence quality, responsible wording, remediation support, and defensive validation.',
  },
];

export const researchInterests = [
  {
    title: 'AI-Assisted SOC Operations',
    icon: Bot,
    description: 'Studying how AI can summarize alerts, draft case notes, suggest investigation questions, and reduce repetitive SOC work while preserving human accountability.',
  },
  {
    title: 'Machine Learning For Security Telemetry',
    icon: Binary,
    description: 'Exploring how machine learning can support analysis of endpoint, network, identity, and application telemetry without hiding uncertainty from analysts.',
  },
  {
    title: 'Interpretable Anomaly Detection',
    icon: SearchCheck,
    description: 'Investigating Isolation Forest and related methods for highlighting unusual activity with explanations that analysts can inspect and challenge.',
  },
  {
    title: 'Human-AI Collaboration In Cybersecurity',
    icon: FileCheck,
    description: 'Researching review checkpoints, confidence notes, transparent prompts, and audit-friendly outputs for shared work between analysts and AI assistants.',
  },
  {
    title: 'Threat Intelligence Automation',
    icon: Database,
    description: 'Exploring IOC collection, enrichment, source confidence review, MITRE ATT&CK mapping, alert context, and analyst briefings.',
  },
  {
    title: 'Cybersecurity Education And Practical Lab Design',
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
  'Builds practical labs for SOC triage, SIEM dashboards, incident response, threat intelligence, VAPT practice, and digital forensics support.',
  'Uses clear objectives, scenario prompts, evidence expectations, and reflection questions so learners understand both tools and judgment.',
  'Connects technical tasks to reporting habits, escalation language, risk communication, and defensible documentation.',
];

export const certifications = [
  { name: 'Security Operations Portfolio', issuer: 'Documented evidence', status: 'SOC triage, incident response, SIEM dashboards, and case documentation' },
  { name: 'Cybersecurity Instruction Practice', issuer: 'Teaching evidence', status: 'Guided labs, learner support, tool walkthroughs, and assessment design' },
  { name: 'Threat Intelligence Workflow', issuer: 'Portfolio evidence', status: 'OpenCTI, IOC enrichment, VirusTotal, AbuseIPDB, and MITRE ATT&CK mapping' },
  { name: 'SOC Automation Workflow', issuer: 'Portfolio evidence', status: 'n8n, REST APIs, Slack, Palo Alto, FortiGate, and analyst review gates' },
  { name: 'AI/ML Security Analytics Research', issuer: 'Research evidence', status: 'Python, notebooks, Isolation Forest, anomaly detection, and interpretable ML' },
  { name: 'Digital Forensics Support Utilities', issuer: 'Portfolio evidence', status: 'Evidence packaging, SHA256 hashing, forensic timelines, and metadata review' },
];

export const contactCards = [
  {
    title: 'Cybersecurity Consulting',
    detail: 'Discuss SOC workflow design, SIEM monitoring, incident response workflows, threat intelligence integration, VAPT support, remediation guidance, and executive security reporting.',
    icon: Briefcase,
  },
  {
    title: 'SOC Automation And AI/ML Projects',
    detail: 'Collaborate on AI-assisted triage, IOC enrichment, n8n automation, Slack notifications, firewall response workflows, and interpretable anomaly detection.',
    icon: Workflow,
  },
  {
    title: 'Cybersecurity Instruction And Research',
    detail: 'Connect about practical labs, curriculum, workshops, mentoring, PhD-aligned research interests, and digital forensics workflow automation.',
    icon: Award,
  },
];
