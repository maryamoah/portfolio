import {
  Activity,
  Binary,
  BookOpenCheck,
  Bot,
  Bug,
  Database,
  FileCheck,
  Fingerprint,
  GitBranch,
  FileDown,
  Link,
  Mail,
  Network,
  Radar,
  Radio,
  SearchCheck,
  ShieldAlert,
  Workflow,
} from 'lucide-react';

export const profile = {
  name: 'Mary Abenawa Techiesiwa Amoah',
  shortName: 'Mary Amoah',
  role: 'Senior Information Security Specialist • SIEM & Detection Engineering',
  headline:
    'I rebuilt an enterprise SIEM and cut false positives by 85%.',
  summary:
    'Five years across enterprise, MSSP, and PCI DSS banking security operations. SIEM engineering, detection content, and the automation that runs on top.',
  contactFocus: 'Available through email, GitHub, LinkedIn, or resume download',
  availability: 'Cybersecurity Engineer • Security Automation Engineer • Consultant • Instructor',
  links: [
    { label: 'GitHub projects', href: '#github-projects', icon: GitBranch },
    { label: 'Case studies', href: '#case-studies', icon: Link },
  ],
};

export const githubUrl = 'https://github.com/maryamoah';
export const sigmaRepoUrl = `${githubUrl}/sigma-mitre-detection-rules`;
export const socPlaybooksRepoUrl = `${githubUrl}/soc-automation-playbooks`;

export const featuredWork = [
  {
    title: 'Sigma MITRE Detection Rules',
    category: 'Detection Engineering',
    icon: Radar,
    href: sigmaRepoUrl,
    summary: 'Vendor-neutral Sigma detection rules mapped to MITRE ATT&CK, validated in CI and converted for Splunk, Sentinel, Elastic, QRadar, and Wazuh.',
    highlights: [
      '57 Sigma rules mapped to 56 ATT&CK techniques',
      '13 of 14 ATT&CK tactics covered',
      'CI-enforced with sigma check, custom rule validation, and coverage generation',
      'Converts to Splunk, Sentinel, Elastic, QRadar, and Wazuh',
      'Windows, Linux, firewall, AWS, Azure, and M365 log source coverage',
      'MIT licensed, status: experimental',
    ],
    caseStudy: {
      problem:
        'Detection rules are usually shared as static lists. That format hides the part that matters: why a rule is scoped the way it is, what telemetry it depends on, and how an attacker would evade it.',
      approach:
        'Treat detections as code. Every rule declares its log source dependency, documents realistic false positives, and states maturity honestly. CI enforces the Sigma specification and repository conventions on every change.',
      role:
        'Sole author and maintainer. Wrote the rules, the validation tooling, the CI pipeline, and the documentation.',
      capabilities: [
        'sigma check for Sigma specification compliance on every rule.',
        'validate_rules.py enforcing UUID uniqueness, ATT&CK tag format, and rejecting placeholder false positives.',
        'generate_coverage.py builds coverage tables, a mapping CSV, and an ATT&CK Navigator layer from rule tags — CI fails if the output is stale.',
        'yamllint, markdownlint, and relative link checking on every change.',
        'Backend conversion smoke test across Python 3.11 and 3.12.',
        'Platform coverage: Windows 28, Linux 10, firewall 6, AWS 5, Azure 4, M365 4.',
      ],
      outcome:
        '57 rules across six telemetry domains, 56 ATT&CK techniques, green CI. Coverage is generated from rule metadata rather than maintained by hand, so the numbers cannot drift from the ruleset.',
    },
  },
  {
    title: 'SOC Reporting & Management Platform',
    category: 'Flagship Security Operations Platform',
    icon: Activity,
    summary: 'Elevates SOC leadership decisions with unified analyst visibility, readiness metrics, risk reporting, and AI-assisted monthly narratives.',
    highlights: ['Aligned executive and analyst dashboards', 'Improved geographic and operational visibility', 'Correlated threat intelligence and asset context', 'Consolidated vulnerability tracking and SLA awareness', 'Delivered compliance, KPI, and readiness reporting', 'Enabled analyst-reviewed Ollama and Qwen narratives', 'Accelerated charting and trend summaries'],
    caseStudy: {
      problem:
        'SOC leaders and analysts needed a single management layer for executive dashboards, analyst dashboards, security map context, SLA monitoring, asset visibility, vulnerability tracking, compliance reporting, and KPI review instead of disconnected operational views.',
      approach:
        'Designed a dark, dashboard-centered SOC reporting experience that consolidates operational metrics, vulnerability trends, asset context, security map insights, compliance status, SLA posture, and automated charts into management-ready views.',
      role:
        'Led the platform concept, reporting architecture, dashboard requirements, KPI model, AI-assisted reporting workflow, and analyst review path for leadership and SOC users.',
      capabilities: [
        'Executive dashboards for leadership-ready security posture, KPI, compliance, and risk reporting.',
        'Analyst dashboards with SLA monitoring, asset visibility, vulnerability tracking, and operational readiness views.',
        'Security map and asset context for geographic and environment-level visibility.',
        'Ollama and Qwen workflows for AI-generated monthly narratives that remain analyst-reviewed.',
        'Automated charts and trend summaries for recurring monthly security reporting.',
      ],
      outcome:
        'Improved SOC reporting consistency by combining KPIs, compliance reporting, vulnerability status, asset visibility, SLA performance, automated charts, and AI-generated monthly narratives into a single analyst-reviewed platform concept.',
    },
  },
  {
    title: 'Security Automation & SOAR Platform',
    category: 'Security Automation & SOAR',
    icon: Network,
    summary: 'Reduces response friction by orchestrating Wazuh, TheHive, Cortex, firewalls, Slack, and intelligence feeds through governed approval checkpoints.',
    highlights: ['Wazuh, TheHive, Cortex, Palo Alto, FortiGate, Slack', 'Reduced containment effort through analyst-approved blocking and release workflows', 'Improved investigation context through enrichment and intelligence correlation', 'Preserved analyst accountability through review checkpoints', 'Standardized response actions with audit visibility', 'Improved containment speed while reducing analyst workload'],
    caseStudy: {
      problem:
        'Security teams needed faster containment and release actions without bypassing analyst judgment, losing audit visibility, or forcing responders to manually move data between Wazuh, TheHive, Cortex, Palo Alto, FortiGate, Slack, and enrichment sources.',
      approach:
        'Built governed SOAR workflows that connect alert context, threat intelligence enrichment, analyst approval workflows, firewall orchestration, case updates, and Slack notifications into repeatable response paths.',
      role:
        'Engineered the automation design, approval checkpoints, enrichment flow, response logic, notification model, and audit trail requirements across SIEM, case management, firewall, and collaboration tooling.',
      capabilities: [
        'Automated IP blocking after analyst approval using Wazuh alerts, TheHive cases, Cortex responders, and Palo Alto or FortiGate enforcement points.',
        'Automated IP unblocking through controlled release workflows with clear analyst confirmation.',
        'Threat intelligence enrichment before containment decisions to improve response confidence.',
        'Slack notifications for analyst review, approval status, and operational awareness.',
        'Audit visibility across enrichment, approval, block, unblock, and case-management actions.',
      ],
      outcome:
        'Reduced manual response friction while preserving analyst approval, audit visibility, and repeatable containment governance across Wazuh, TheHive, Cortex, Palo Alto, FortiGate, Slack, and enrichment workflows.',
    },
  },
  {
    title: 'Threat Intelligence & Intelligence Distribution Platform',
    category: 'Threat Intelligence Engineering',
    icon: Database,
    summary: 'Turns threat and vulnerability intelligence into analyst context, MITRE alignment, recurring reporting, and stakeholder awareness.',
    highlights: ['Operationalized OpenCTI threat workflows', 'Improved IOC context with VirusTotal and AbuseIPDB', 'MITRE ATT&CK mapping', 'Converted vulnerability intelligence into recurring stakeholder reporting', 'Delivered intelligence into Slack and email workflows', 'Scaled intelligence distribution across analyst channels'],
    caseStudy: {
      problem:
        'Threat and vulnerability intelligence needed to move from scattered indicators and CVE notes into enriched, contextual, and recurring intelligence that analysts and stakeholders could consume through operational channels.',
      approach:
        'Designed an intelligence distribution workflow around OpenCTI, IOC enrichment, CVE monitoring, MITRE ATT&CK context, weekly newsletters, and delivery into Slack and email.',
      role:
        'Owned the intelligence workflow design, enrichment criteria, reporting cadence, stakeholder distribution model, and analyst-facing context requirements.',
      capabilities: [
        'OpenCTI workflows for structuring threat knowledge and analyst-ready intelligence records.',
        'IOC enrichment using VirusTotal and AbuseIPDB for additional reputation and abuse context.',
        'MITRE ATT&CK mapping to connect indicators, techniques, and defensive relevance.',
        'CVE monitoring that turns vulnerability changes into recurring awareness and action items.',
        'Weekly newsletters with Slack delivery and email delivery for broader intelligence distribution.',
      ],
      outcome:
        'Improved intelligence reach by combining OpenCTI, IOC enrichment, VirusTotal, AbuseIPDB, MITRE ATT&CK, CVE monitoring, weekly newsletters, Slack delivery, and email delivery into a consistent distribution process.',
    },
  },
  {
    title: 'SOC Automation Playbooks',
    category: 'AI-Assisted Triage Automation',
    icon: Workflow,
    href: socPlaybooksRepoUrl,
    summary: 'An n8n workflow that turns a security event pasted into Slack into a structured triage assessment — source-aware prompts, self-hosted inference, and no path to take action on its own.',
    highlights: [
      '14-node n8n workflow: Slack event in, structured triage reply out',
      '7 source-specific prompts — Wazuh, Windows Security, FortiGate, PAN-OS, F5 BIG-IP ASM, Trend Micro CEF, and general Q&A',
      'Self-hosted Ollama inference — telemetry stays on the network',
      'No write path to any security control; analyst approval stays mandatory',
      'Severity, overall risk, and confidence tracked as three separate axes',
      'CI scans every push for secrets, private IPs, and credential identifiers',
    ],
    caseStudy: {
      problem:
        'Security events land in Slack as raw text with no structured read on severity, risk, or what to do next. Getting that from an LLM risks confident-sounding conclusions the evidence does not support — a blocked connection is not a compromise, and a MITRE ATT&CK tag on a detection rule is a statement about the rule, not proof the technique ran.',
      approach:
        'Built an n8n workflow that classifies the pasted event by source, selects one of seven source-specific analyst prompts, and runs inference on a self-hosted Ollama model. The prompts spend more words on what the model must not conclude than on what it should: severity, operational risk, and confidence are tracked as three separate axes because they routinely differ, and the required answer is "Requires Investigation" whenever the evidence cannot decide.',
      role:
        'Sole author and maintainer. Built the workflow, the source-specific prompts, the classifier routing, the validation scripts, and the CI secret-scanning.',
      capabilities: [
        'Slack Events API webhook receives a pasted security event and replies in the same thread.',
        'JavaScript classifier routes 10 input types across 7 source-specific analyst prompts (Wazuh, Windows Security, FortiGate, PAN-OS, F5 BIG-IP ASM, Trend Micro CEF, general Q&A).',
        'Inference runs on self-hosted Ollama — security telemetry does not leave the network.',
        'Output fields: verdict, severity, overall risk, confidence, evidence, assessment, recommended actions, missing information.',
        'No node in the workflow can block, isolate, disable, or close anything — analyst approval stays mandatory for any consequential action.',
        'JSON Schema contracts for alerts and triage results, dependency-free Python validation scripts, a sanitized importable export, and GitHub Actions CI that scans every push for secrets, private IPs, and credential identifiers.',
      ],
      outcome:
        'A working personal build, not something running in production for an employer: 14 nodes, 7 source-specific prompts, and a JavaScript classifier routing 10 input types, with no write path into any security control. It also has real gaps — no threat-intelligence enrichment, no deterministic risk score (the assessment fields are model-generated text), three classifier routes (ip, hash, linux) wired to nothing that fail silently, and an unauthenticated webhook with no Slack signature verification yet.',
    },
  },
];

export const skills = [
  {
    title: 'Security Operations & Incident Response',
    icon: ShieldAlert,
    items: ['Alert Triage', 'Incident Investigation', 'Threat Hunting', 'Case Management', 'Investigation Workflows'],
  },
  {
    title: 'SIEM Engineering & Detection',
    icon: Radio,
    items: ['Wazuh', 'Detection Engineering', 'Custom Detection Rules', 'Correlation Logic', 'Alert Tuning', 'Dashboard Engineering', 'MITRE ATT&CK Mapping'],
  },
  {
    title: 'Security Automation & SOAR',
    icon: Workflow,
    items: ['Python', 'n8n', 'Workflow Orchestration', 'Firewall Automation', 'SOAR Workflows', 'Slack Integrations', 'REST APIs'],
  },
  {
    title: 'Threat & Vulnerability Intelligence',
    icon: Database,
    items: ['OpenCTI', 'Threat Intelligence Enrichment', 'CVE Monitoring', 'Intelligence Distribution'],
  },
  {
    title: 'AI & Machine Learning for Cybersecurity',
    icon: Binary,
    items: ['Ollama', 'Qwen', 'Local LLM Workflows', 'Isolation Forest', 'Security Telemetry Analysis', 'AI-Assisted Reporting'],
  },
  {
    title: 'Vulnerability Assessment & Security Testing',
    icon: Bug,
    items: ['Burp Suite', 'Pentagi', 'Web Application Testing', 'Vulnerability Validation', 'Remediation Guidance'],
  },
  {
    title: 'Cybersecurity Education',
    icon: BookOpenCheck,
    items: ['Lab Development', 'Technical Mentoring', 'SIEM Training', 'Threat Intelligence Training', 'Practical Workshops'],
  },
];

export const experience = [
  {
    role: 'Cybersecurity Engineer and Consultant',
    company: 'Security Operations, Automation, and Advisory Workflows',
    period: 'Current focus',
    highlights: [
      'Security monitoring and incident response for banking-sector clients under PCI DSS obligations.',
      'Root cause analysis and SIEM tuning that improved detection accuracy.',
      'Managed incident lifecycle in ServiceNow against SLA and audit requirements.',
    ],
  },
  {
    role: 'SOC Analyst (Tier 2)',
    employer: 'Cibera Defence',
    location: 'India',
    period: '2022 – 2024',
    note: 'Held concurrently with the Cybersecurity Analyst role above',
    highlights: [
      'Investigated ~30 alerts per shift in a 24x7 enterprise SOC of ~16 analysts.',
      'Securonix, Microsoft Sentinel, AlienVault USM, and Trellix EDR across Windows, Linux, firewall, email, and cloud telemetry.',
      'SIEM rule tuning that reduced false-positive load on senior analysts.',
      'Trained and mentored trainees and junior analysts on triage methodology, escalation criteria, and investigation documentation.',
    ],
  },
  {
    role: 'Cybersecurity Intern',
    employer: 'TechDefence Labs',
    location: 'India',
    period: '2021',
    highlights: [
      'Vulnerability assessment and penetration testing across web applications, networks, and enterprise systems.',
      'Technical assessment reports with remediation recommendations.',
    ],
  },
];

export const certifications = [
  'Microsoft Certified: Security Operations Analyst Associate (SC-200)',
  'EC-Council Certified SOC Analyst (CSA)',
  'EC-Council Certified Incident Handler (ECIH)',
  'LogRhythm Platform Administrator',
  'LogRhythm Security Analyst',
];

export const education = [
  { degree: 'M.Sc. Cybersecurity and Forensics', school: 'Gujarat University, India', note: 'Distinction' },
  { degree: 'B.Sc. Forensic Science', school: 'University of Cape Coast, Ghana', note: 'First Class' },
];

export const githubProjects = [
  {
    repo: 'ai-anomaly-security',
    category: 'AI & Machine Learning Security Analytics',
    description: 'Isolation Forest research for interpretable anomaly detection in security telemetry.',
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
  {
    repo: 'soc-automation-playbooks',
    category: 'AI-Assisted Triage Automation',
    description: 'n8n workflow that classifies a security event pasted into Slack, runs it through a source-specific prompt on a self-hosted Ollama model, and replies with a structured triage assessment in the same thread.',
    tools: ['n8n', 'Ollama', 'Slack Events API', 'Wazuh', 'Python', 'JSON Schema', 'GitHub Actions'],
  },
].map((project) => ({ ...project, href: `${githubUrl}/${project.repo}` }));

export const projects = [
  {
    title: 'Sigma MITRE Detection Rules',
    category: 'Detection Engineering',
    icon: Radar,
    featured: true,
    href: sigmaRepoUrl,
    problem: 'Detection rules are usually shared as static lists. That format hides the part that matters: why a rule is scoped the way it is, what telemetry it depends on, and how an attacker would evade it.',
    approach: 'Treat detections as code. Every rule declares its log source dependency, documents realistic false positives, and states maturity honestly. CI enforces the Sigma specification and repository conventions on every change.',
    role: 'I am the sole author and maintainer. I wrote the rules, the validation tooling, the CI pipeline, and the documentation.',
    capabilities: ['57 Sigma rules', '56 ATT&CK techniques', '13 of 14 ATT&CK tactics', 'sigma check validation', 'Custom convention validation', 'Generated coverage tables and ATT&CK Navigator layer', 'Multi-backend conversion (Splunk, Sentinel, Elastic, QRadar, Wazuh)'],
    tools: ['Sigma', 'MITRE ATT&CK', 'YAML', 'Python', 'GitHub Actions', 'yamllint', 'markdownlint'],
    outcome: '57 rules across six telemetry domains, 56 ATT&CK techniques, green CI. Coverage is generated from rule metadata rather than maintained by hand, so the numbers cannot drift from the ruleset.',
  },
  {
    title: 'SOC Automation Playbooks',
    category: 'AI-Assisted Triage Automation',
    icon: Workflow,
    href: socPlaybooksRepoUrl,
  },
  {
    title: 'SOC Reporting & Management Platform',
    category: 'Flagship Security Operations Platform',
    icon: Activity,
    featured: true,
    problem: 'Security teams and management needed a centralized platform for monitoring operations, reporting, visibility, and performance tracking.',
    approach: 'Consolidated operational monitoring, reporting, asset visibility, threat intelligence, and management dashboards into a single security operations experience.',
    role: 'I focused on requirements gathering, security workflow design, feature planning, dashboard engineering, reporting architecture, dashboard architecture, security operations alignment, platform improvement recommendations, and user experience recommendations for analysts and management.',
    capabilities: [
      'Executive dashboards',
      'Analyst dashboards',
      'Security event monitoring',
      'Threat intelligence visibility',
      'Improved geographic and operational visibility',
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
    approach: 'Improved investigation readiness with a human-reviewed workflow that organizes alert details, proposes investigation questions, drafts triage summaries, and keeps final decisions with the analyst.',
    role: 'I defined the workflow stages, prompt structure, review checkpoints, documentation approach, and escalation notes.',
    tools: ['n8n', 'Python', 'REST API integrations', 'Slack', 'MITRE ATT&CK', 'SIEM dashboards'],
    outcome: 'Improved triage consistency through clearer notes, repeatable evidence review, and careful escalation without claiming autonomous decision-making.',
  },
  {
    title: 'Wazuh SIEM Engineering & Detection',
    category: 'SIEM Engineering',
    icon: Activity,
    problem: 'Security teams need centralized visibility into endpoint events, authentication activity, suspicious behavior, and compliance signals.',
    approach: 'Outlined a Wazuh SIEM engineering workflow covering agent enrollment, log collection, detection rules, alert review, dashboard organization, decoder and parser planning, tuning concepts, and reporting.',
    role: 'I configured the portfolio workflow, documented monitoring steps, mapped alert review paths, and described dashboard usage for Security Operations and incident response work.',
    tools: ['Wazuh', 'Linux', 'SIEM dashboards', 'MITRE ATT&CK', 'Detection engineering', 'Rule tuning', 'Log analysis'],
    outcome: 'Demonstrated how Wazuh improves monitoring, triage, documentation, and security communication in a practical SIEM engineering case study.',
  },
  {
    title: 'TheHive + Cortex Incident Response Workflow',
    category: 'Incident Response',
    icon: ShieldAlert,
    problem: 'Incident response becomes inconsistent when alerts, enrichment results, task ownership, evidence notes, and closure decisions are tracked separately.',
    approach: 'Mapped a workflow that turns validated alerts into TheHive cases, enriches observables with Cortex analyzers, records evidence, assigns tasks, and preserves context.',
    role: 'I defined case templates, analyst notes, enrichment steps, severity review, closure criteria, and communication guidance.',
    tools: ['TheHive', 'Cortex', 'VirusTotal', 'AbuseIPDB', 'REST API integrations', 'Incident timelines'],
    outcome: 'Established a structured case-handling pattern with clearer ownership, evidence trails, enrichment records, timelines, and next-action recommendations.',
  },
  {
    title: 'OpenCTI Threat Intelligence Integration',
    category: 'Threat Intelligence',
    icon: Database,
    problem: 'Alerts are harder to prioritize when indicators lack context about malware, infrastructure, tactics, campaigns, source confidence, or relevance.',
    approach: 'Operationalized an OpenCTI-centered process that collects, organizes, and summarizes threat context before analyst escalation or response decisions.',
    role: 'I modeled indicator collection, source confidence review, MITRE ATT&CK mapping, and attachment of threat notes to incident records and reports.',
    tools: ['OpenCTI', 'MITRE ATT&CK', 'VirusTotal', 'AbuseIPDB', 'TheHive', 'Threat intelligence'],
    outcome: 'Improved prioritization by separating routine noise from indicators that deserve escalation, monitoring, or containment review.',
  },
  {
    title: 'Security Automation & SOAR Platform',
    category: 'Security Automation & SOAR',
    icon: Network,
    problem: 'Security teams require fast and consistent containment of malicious indicators while maintaining operational visibility and safe release paths.',
    approach: 'Reduced containment effort through analyst-approved automated blocking and release workflows that connect IOC decisions to firewall orchestration, enrichment, audit records, and notifications.',
    role: 'I owned workflow architecture, security automation engineering, integration development, firewall orchestration design, threat intelligence workflow design, testing, and validation.',
    capabilities: ['Analyst-approved blocking', 'Analyst-approved release', 'Intelligence correlation', 'Analyst approval workflows', 'Alert enrichment', 'Case enrichment', 'Audit visibility', 'Human review checkpoints'],
    tools: ['Wazuh', 'TheHive', 'Cortex', 'Palo Alto', 'FortiGate', 'Slack', 'Threat intelligence feeds', 'n8n', 'Python', 'REST APIs'],
    outcome: 'Supports faster containment, reduced analyst workload, consistent response actions, and improved response efficiency while preserving review and accountability.',
  },

  {
    title: 'Automated Vulnerability Intelligence Newsletter',
    category: 'Vulnerability Intelligence & Reporting Automation',
    icon: FileCheck,
    problem: 'Security stakeholders need recurring awareness of relevant CVEs and vulnerability trends without relying on manual feed checks or one-off messages.',
    approach: 'Converted vulnerability intelligence into recurring stakeholder reporting by aggregating CVE context and distributing security updates through Slack and email channels.',
    role: 'I designed the workflow, intelligence processing, distribution architecture, reporting structure, and stakeholder notification model.',
    capabilities: ['CVE monitoring', 'Vulnerability intelligence aggregation', 'Weekly newsletter generation', 'Security trend summaries', 'Slack delivery', 'Email delivery', 'Automated stakeholder notifications', 'Vulnerability awareness workflows'],
    tools: ['Python', 'APIs', 'Slack', 'Email integrations', 'Vulnerability feeds', 'Automation workflows'],
    outcome: 'Established a repeatable vulnerability awareness workflow that turns vulnerability feeds into organized stakeholder communication and trend reporting.',
  },
  {
    title: 'Threat Intelligence & Intelligence Distribution Platform',
    category: 'Threat Intelligence Automation',
    icon: Database,
    problem: 'Indicator context and CVE updates lose value when enrichment, review notes, and delivery channels are disconnected from analyst workflows.',
    approach: 'Improved investigation context through automated enrichment, intelligence correlation, and CVE distribution across Slack and email workflows.',
    role: 'I designed enrichment pipelines, source-context handling, automated distribution flows, and analyst-facing intelligence summaries.',
    capabilities: ['OpenCTI deployment', 'IOC enrichment', 'VirusTotal integration', 'AbuseIPDB integration', 'MITRE ATT&CK mapping', 'Threat intelligence workflows', 'CVE monitoring', 'Scaled intelligence distribution across analyst channels', 'Slack notifications', 'Email notifications', 'Weekly threat newsletters'],
    tools: ['OpenCTI', 'VirusTotal', 'AbuseIPDB', 'Python', 'REST APIs', 'Slack', 'Email integrations'],
    outcome: 'Improved operational awareness by bringing indicator and vulnerability context into the channels analysts and stakeholders already review.',
  },
  {
    title: 'AI-Assisted Penetration Testing Environment',
    category: 'AI-Assisted Security Testing',
    icon: Bug,
    problem: 'Security testing practice benefits from isolated environments where AI-assisted workflows can be deployed, integrated, and evaluated without overstating automation.',
    approach: 'Evaluated Pentagi with Ollama and local LLM components inside containerized Linux testing environments for AI-assisted assessment workflows.',
    role: 'I handled deployment, local LLM integration, containerized environment setup, workflow evaluation, and validation of where human review remains necessary.',
    capabilities: ['Pentagi deployment', 'Ollama integration', 'Local LLM integration', 'Docker/containerized setup', 'AI-assisted security assessment workflows', 'Responsible offensive security evaluation', 'Vulnerability validation support'],
    tools: ['Pentagi', 'Ollama', 'Local LLM integration', 'Docker', 'Linux'],
    outcome: 'Established a practical environment for evaluating AI-assisted penetration testing workflows, vulnerability validation support, and responsible offensive security boundaries.',
  },
  {
    title: 'AI & Machine Learning Security Analytics with Isolation Forest',
    category: 'AI & Machine Learning for Cybersecurity',
    icon: Binary,
    problem: 'Heterogeneous security telemetry can contain subtle outliers that are difficult to prioritize with rules alone.',
    approach: 'Evaluated Isolation Forest workflows for anomaly detection, feature review, notebook-based analysis, and analyst-readable explanations.',
    role: 'I developed the research structure, documented assumptions, reviewed model outputs, and emphasized interpretability, analyst validation, and limitations.',
    tools: ['Python', 'Jupyter Notebook', 'scikit-learn', 'pandas', 'NumPy', 'Matplotlib', 'Isolation Forest'],
    outcome: 'Advanced a research-oriented project showing how anomaly detection can support investigation questions without replacing analyst judgment.',
  },
  {
    title: 'Digital Forensics Evidence Packaging and Timeline Building',
    category: 'Digital Forensics Support',
    icon: Fingerprint,
    problem: 'Incident evidence can lose value when files, hashes, metadata, collection notes, and timelines are not packaged consistently.',
    approach: 'Developed supporting workflows that package incident evidence, verify SHA256 hashes, record metadata, and reconstruct chronological timelines.',
    role: 'I built and documented evidence packaging, hash verification, metadata review, and timeline-building practices for response and forensics handoffs.',
    tools: ['Python', 'SHA256 verification', 'Forensic timelines', 'Metadata', 'Linux', 'Incident evidence'],
    outcome: 'Improved evidence handling with clearer packaging, verifiable hashes, metadata review, and response-ready timelines.',
  },
  {
    title: 'Cybersecurity Instructor and Lab Development',
    category: 'Cybersecurity Instruction',
    icon: BookOpenCheck,
    problem: 'Learners need practical cybersecurity labs that connect theory to real security operations tasks without overwhelming them with disconnected tools.',
    approach: 'Delivered guided labs around alert triage, SIEM monitoring, incident response, threat intelligence, vulnerability assessment, forensics support, and reporting.',
    role: 'I developed lesson structure, lab flow, reflection prompts, assessment ideas, and tool walkthroughs that emphasize confidence and careful judgment.',
    tools: ['Wazuh', 'TheHive', 'Cortex', 'OpenCTI', 'Linux', 'Jupyter Notebook', 'MITRE ATT&CK'],
    outcome: 'Turned complex security workflows into approachable exercises with clear objectives, evidence expectations, and reporting habits.',
  },
  {
    title: 'Vulnerability Assessment and Security Testing Practice',
    category: 'Vulnerability Assessment and Security Testing',
    icon: SearchCheck,
    problem: 'Organizations and learners need disciplined security assessment practice that validates findings, explains risk, and recommends remediation responsibly.',
    approach: 'Practiced vulnerability identification, web/security testing fundamentals, evidence capture, severity explanation, reporting, remediation guidance, and defensive validation.',
    role: 'I documented assessment steps, mapped findings to risk, practiced concise reporting, and connected vulnerability observations to monitoring recommendations.',
    tools: ['Linux', 'vulnerability assessment and security testing practice', 'Risk reporting', 'Remediation notes', 'MITRE ATT&CK', 'Security assessment'],
    outcome: 'Strengthened assessment practice through evidence quality, responsible wording, remediation support, and defensive validation.',
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

export const contactCards = [
  {
    title: 'Email',
    detail: 'Send message',
    href: 'mailto:techiesiwaamoah@gmail.com',
    icon: Mail,
  },
  {
    title: 'GitHub',
    detail: 'View projects',
    href: githubUrl,
    icon: GitBranch,
    external: true,
  },
  {
    title: 'LinkedIn',
    detail: 'Connect',
    href: 'https://www.linkedin.com/in/mary-amoah',
    icon: Link,
    external: true,
  },
];

export const resumeLink = {
  label: 'Download Resume',
  href: '/mary-amoah-resume.pdf',
  icon: FileDown,
};
