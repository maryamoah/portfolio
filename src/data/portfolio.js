import {
  Activity,
  Award,
  BarChart3,
  BookOpenCheck,
  Bot,
  Briefcase,
  Database,
  FileCheck,
  GitBranch,
  GraduationCap,
  Link,
  Mail,
  Network,
  Radio,
  ShieldAlert,
  ShieldCheck,
  Terminal,
  Workflow,
} from 'lucide-react';

export const profile = {
  name: 'Mary Amoah',
  role: 'Cybersecurity Analyst, SOC Automation Builder & Cybersecurity Instructor',
  location: 'United States',
  summary:
    'I design practical security operations workflows that combine SIEM monitoring, incident response, threat intelligence, firewall enforcement, executive reporting, and hands-on cybersecurity education.',
  email: 'Cybersecurity analyst · SOC automation · cybersecurity education',
  availability: 'Cybersecurity analyst · SOC automation · security education',
  links: [
    { label: 'Case studies', href: '#projects', icon: GitBranch },
    { label: 'Experience', href: '#experience', icon: Link },
    { label: 'Contact', href: '#contact', icon: Mail },
  ],
  focusAreas: [
    'SOC alert triage and incident response workflows',
    'Wazuh SIEM deployment, endpoint monitoring, and rule tuning',
    'TheHive, Cortex, OpenCTI, n8n, and firewall automation',
    'Cybersecurity instruction, lab design, and executive communication',
  ],
};

export const metrics = [
  { value: 'SOC', label: 'Triage, detection, enrichment, and response workflows' },
  { value: 'SIEM', label: 'Wazuh monitoring, dashboards, alert review, and tuning' },
  { value: 'EDU', label: 'Cybersecurity lessons, labs, mentoring, and learner support' },
];

export const skills = [
  {
    title: 'Security Operations',
    icon: ShieldCheck,
    items: ['Alert triage', 'Incident escalation', 'Log analysis', 'Runbook development', 'Case documentation'],
  },
  {
    title: 'SOC Automation',
    icon: Workflow,
    items: ['n8n workflows', 'AI-assisted summaries', 'API integrations', 'IP blocking logic', 'Notification pipelines'],
  },
  {
    title: 'SIEM & Detection',
    icon: Radio,
    items: ['Wazuh deployment', 'Endpoint agents', 'Rule tuning', 'Executive dashboards', 'Compliance reporting'],
  },
  {
    title: 'Incident Response',
    icon: ShieldAlert,
    items: ['TheHive cases', 'Cortex analyzers', 'IOC enrichment', 'Evidence handling', 'Post-incident lessons'],
  },
  {
    title: 'Threat Intelligence',
    icon: Database,
    items: ['OpenCTI integration', 'IOC context', 'Threat actor mapping', 'Indicator scoring', 'Analyst briefings'],
  },
  {
    title: 'Network Security',
    icon: Network,
    items: ['Palo Alto concepts', 'Firewall policy', 'Blocklists', 'Segmentation', 'Safe containment'],
  },
  {
    title: 'Security Education',
    icon: GraduationCap,
    items: ['Beginner-friendly labs', 'Lesson planning', 'Tool walkthroughs', 'Assessment design', 'Career mentoring'],
  },
  {
    title: 'Technical Toolkit',
    icon: Terminal,
    items: ['Linux', 'Python basics', 'REST APIs', 'Git', 'Documentation'],
  },
];

export const experience = [
  {
    role: 'Cybersecurity Analyst',
    company: 'Security Operations & Portfolio Lab Work',
    period: 'Current focus',
    highlights: [
      'Investigates security alerts by reviewing event timelines, endpoint details, user activity, network indicators, and available threat intelligence before deciding whether to close, escalate, or contain.',
      'Builds repeatable analyst runbooks for phishing, suspicious authentication, malware indicators, policy violations, vulnerability findings, and firewall response actions.',
      'Uses Wazuh, TheHive, Cortex, OpenCTI, n8n, and firewall workflows to demonstrate an end-to-end SOC process from detection to enrichment, case management, containment, and reporting.',
      'Communicates findings in plain language for technical teams and leadership, emphasizing business impact, severity, recommended action, and evidence quality.',
    ],
  },
  {
    role: 'Cybersecurity Instructor',
    company: 'Security Education & Mentoring',
    period: 'Current focus',
    highlights: [
      'Creates approachable cybersecurity lessons that connect foundational security concepts to real analyst workflows, including SIEM monitoring, incident response, threat intelligence, and network defense.',
      'Designs hands-on labs that help learners practice investigation habits: asking clear questions, validating evidence, documenting assumptions, and explaining recommendations.',
      'Breaks down complex tools such as Wazuh, TheHive, Cortex, OpenCTI, and n8n into guided exercises that support beginners while still modeling professional SOC practices.',
      'Researches how AI-assisted instruction and structured lab environments can improve confidence, accessibility, and job readiness for cybersecurity learners.',
    ],
  },
  {
    role: 'SOC Automation Builder',
    company: 'Independent Cybersecurity Projects',
    period: 'Portfolio case studies',
    highlights: [
      'Develops SOC automation workflows that enrich alerts, summarize context, reduce repetitive analyst steps, and preserve human review for high-risk decisions.',
      'Connects SIEM detections with case management, threat intelligence, AI-assisted triage, dashboards, notifications, and firewall blocking workflows.',
      'Documents each workflow with the problem, solution architecture, analyst role, tools used, outcomes, limitations, and safe escalation points.',
    ],
  },
];

export const projects = [
  {
    title: 'Wazuh SIEM Deployment & Monitoring',
    category: 'SIEM Engineering',
    icon: Activity,
    problem:
      'A SOC needs centralized visibility into endpoint activity, authentication events, suspicious behavior, and compliance signals without relying on scattered logs or manual review.',
    solution:
      'Designed a Wazuh-based monitoring workflow that organizes agent enrollment, log collection, alert review, rule tuning, dashboard visibility, and escalation documentation.',
    role:
      'Configured the analyst workflow, mapped priority alerts to investigation questions, documented tuning recommendations, and translated technical findings into dashboard-ready summaries.',
    tools: ['Wazuh', 'Linux', 'Endpoint agents', 'Dashboards', 'Detection rules'],
    outcome:
      'Created a repeatable SIEM operations model that improves visibility, reduces alert ambiguity, and gives analysts a consistent path from detection to investigation and reporting.',
  },
  {
    title: 'TheHive + Cortex Incident Response Workflow',
    category: 'Incident Response',
    icon: ShieldAlert,
    problem:
      'Analysts often lose time moving between alerts, enrichment tools, notes, and status updates when investigating suspicious indicators or potential incidents.',
    solution:
      'Built a case-management workflow using TheHive for incident tracking and Cortex analyzers for enrichment so IOCs, tasks, evidence, and recommendations stay connected.',
    role:
      'Defined case templates, analyst tasks, severity guidance, enrichment steps, evidence notes, and closure criteria for phishing, malware, and suspicious IP investigations.',
    tools: ['TheHive', 'Cortex', 'IOC enrichment', 'Case templates', 'Runbooks'],
    outcome:
      'Improved investigation consistency by giving each case a clear timeline, enrichment record, owner, next action, and executive-friendly summary of risk and response.',
  },
  {
    title: 'OpenCTI Threat Intelligence Integration',
    category: 'Threat Intelligence',
    icon: Database,
    problem:
      'Alerts are harder to prioritize when indicators lack context about related malware, threat actors, campaigns, tactics, or confidence levels.',
    solution:
      'Integrated an OpenCTI-centered intelligence process that enriches suspicious indicators and connects them to threat context before escalation or containment decisions.',
    role:
      'Modeled how analysts should collect IOCs, validate source confidence, summarize threat context, and attach intelligence notes to incident records and dashboards.',
    tools: ['OpenCTI', 'STIX concepts', 'Threat intel feeds', 'TheHive', 'Analyst briefings'],
    outcome:
      'Added context-driven prioritization so analysts can distinguish commodity noise from indicators that deserve escalation, blocking, or additional monitoring.',
  },
  {
    title: 'n8n AI-Assisted SOC Triage Workflow',
    category: 'SOC Automation',
    icon: Bot,
    problem:
      'High alert volume can slow triage when analysts must manually gather context, draft notes, classify severity, and notify stakeholders for every event.',
    solution:
      'Created an n8n workflow concept that receives alerts, enriches key fields, uses AI to draft a triage summary, routes notifications, and keeps the analyst in control of final decisions.',
    role:
      'Designed the workflow stages, decision points, prompt structure, review requirements, and documentation needed to make AI assistance useful without bypassing analyst judgment.',
    tools: ['n8n', 'AI summarization', 'Webhooks', 'APIs', 'Slack or email alerts'],
    outcome:
      'Reduced repetitive triage work in the workflow design while preserving evidence review, human approval, escalation logic, and clear audit notes.',
  },
  {
    title: 'Palo Alto / Firewall IP Blocking Automation',
    category: 'Network Defense',
    icon: Network,
    problem:
      'Confirmed malicious IPs can continue generating noise or risk when containment depends on manual firewall updates and delayed handoffs.',
    solution:
      'Designed a safe blocking workflow that takes validated indicators, checks approval criteria, updates a firewall blocklist, and records the action in the incident timeline.',
    role:
      'Defined validation gates, false-positive checks, expiration logic, rollback notes, and documentation so automated blocking supports containment without creating unnecessary outages.',
    tools: ['Palo Alto concepts', 'Firewall APIs', 'n8n', 'TheHive', 'Blocklists'],
    outcome:
      'Created a controlled containment pattern that shortens response time for malicious infrastructure while maintaining accountability, review, and operational safety.',
  },
  {
    title: 'Executive Security Dashboards & Reporting',
    category: 'Security Reporting',
    icon: BarChart3,
    problem:
      'Leadership needs concise security visibility, but raw SOC alerts and technical logs rarely explain risk, trend, operational workload, or business impact clearly.',
    solution:
      'Built a reporting structure that turns SOC activity into metrics, trend summaries, incident narratives, control gaps, and recommended priorities for executives.',
    role:
      'Selected dashboard themes, defined stakeholder-friendly metrics, wrote plain-language summaries, and connected technical findings to risk reduction decisions.',
    tools: ['Wazuh dashboards', 'Reporting templates', 'KPIs', 'Incident metrics', 'Risk summaries'],
    outcome:
      'Made SOC work easier to communicate by showing what happened, why it matters, what changed, and where leadership can support remediation or investment.',
  },
];

export const researchInterests = [
  {
    title: 'AI-assisted SOC operations',
    icon: Bot,
    description:
      'Exploring how AI can help analysts summarize alerts, enrich context, draft case notes, recommend next questions, and reduce fatigue while preserving human accountability.',
  },
  {
    title: 'Cybersecurity education',
    icon: BookOpenCheck,
    description:
      'Studying how structured labs, tool walkthroughs, plain-language instruction, and confidence-building exercises can make cybersecurity careers more accessible.',
  },
  {
    title: 'Human-centered security reporting',
    icon: FileCheck,
    description:
      'Improving the way SOC teams translate technical evidence into decisions that executives, IT teams, learners, and non-security stakeholders can act on.',
  },
];

export const certifications = [
  { name: 'Security operations labs', issuer: 'Portfolio evidence', status: 'Wazuh, TheHive, Cortex, OpenCTI, n8n' },
  { name: 'Cybersecurity instruction', issuer: 'Teaching practice', status: 'Lessons, labs, mentoring, and learner support' },
  { name: 'Threat intelligence workflow', issuer: 'Portfolio evidence', status: 'IOC enrichment and analyst briefing process' },
  { name: 'SOC automation workflow', issuer: 'Portfolio evidence', status: 'AI-assisted triage and firewall containment design' },
];

export const contactCards = [
  {
    title: 'Cybersecurity analyst roles',
    detail: 'Connect about SOC analyst, security operations, incident response, SIEM monitoring, and threat intelligence opportunities.',
    icon: Briefcase,
  },
  {
    title: 'SOC automation projects',
    detail: 'Discuss workflows that connect alerts, enrichment, TheHive cases, OpenCTI context, n8n automation, and firewall response.',
    icon: Workflow,
  },
  {
    title: 'Cybersecurity education',
    detail: 'Collaborate on beginner-friendly labs, curriculum, workshops, mentoring, and practical security training experiences.',
    icon: Award,
  },
];
