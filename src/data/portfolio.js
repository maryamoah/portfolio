import {
  Award,
  Briefcase,
  Cloud,
  Code2,
  Database,
  FileCheck,
  GitBranch,
  Link,
  Mail,
  Radio,
  ShieldCheck,
  Terminal,
} from 'lucide-react';

export const profile = {
  name: 'Mary Amoah',
  role: 'Cybersecurity Analyst & Cloud Security Practitioner',
  location: 'United States',
  summary:
    'I help teams reduce risk, improve cloud resilience, and translate security requirements into practical engineering outcomes.',
  email: 'hello@example.com',
  availability: 'Open to security analyst and cloud security roles',
  links: [
    { label: 'GitHub', href: 'https://github.com/', icon: GitBranch },
    { label: 'LinkedIn', href: 'https://linkedin.com/', icon: Link },
    { label: 'Email', href: 'mailto:hello@example.com', icon: Mail },
  ],
};

export const metrics = [
  { value: '12+', label: 'Security labs completed' },
  { value: '6', label: 'Cloud projects documented' },
  { value: '24/7', label: 'Risk-aware mindset' },
];

export const skills = [
  {
    title: 'Security Operations',
    icon: ShieldCheck,
    items: ['SIEM triage', 'Incident response', 'Log analysis', 'Threat detection'],
  },
  {
    title: 'Cloud Security',
    icon: Cloud,
    items: ['IAM reviews', 'Network controls', 'Secure baselines', 'AWS fundamentals'],
  },
  {
    title: 'Governance & Risk',
    icon: FileCheck,
    items: ['Policy mapping', 'Risk registers', 'Control testing', 'Audit readiness'],
  },
  {
    title: 'Technical Toolkit',
    icon: Terminal,
    items: ['Python basics', 'Linux', 'Git', 'APIs'],
  },
];

export const experience = [
  {
    role: 'Cybersecurity Analyst Intern',
    company: 'Placeholder Security Lab',
    period: '2025 — Present',
    highlights: [
      'Investigated simulated alerts and documented escalation decisions for analyst review.',
      'Built practical runbooks for phishing, suspicious authentication, and endpoint events.',
      'Summarized weekly findings for technical and non-technical stakeholders.',
    ],
  },
  {
    role: 'Cloud Security Project Contributor',
    company: 'Independent Portfolio Work',
    period: '2024 — 2025',
    highlights: [
      'Created secure cloud architecture notes focused on least privilege and segmentation.',
      'Mapped common misconfigurations to remediation checklists and validation steps.',
      'Documented project outcomes with clear diagrams, assumptions, and next steps.',
    ],
  },
];

export const projects = [
  {
    title: 'Cloud IAM Review Dashboard',
    category: 'Cloud Security',
    icon: Database,
    description:
      'A concept dashboard that summarizes identity risk, stale access, and remediation priorities for cloud environments.',
    tags: ['IAM', 'Dashboards', 'Risk'],
  },
  {
    title: 'SOC Alert Triage Playbook',
    category: 'Security Operations',
    icon: Radio,
    description:
      'A practical playbook template for validating suspicious login alerts, preserving context, and recommending next actions.',
    tags: ['SIEM', 'Detection', 'Runbooks'],
  },
  {
    title: 'Secure App Deployment Notes',
    category: 'Application Security',
    icon: Code2,
    description:
      'Deployment guidance covering secrets handling, security headers, dependency hygiene, and production monitoring.',
    tags: ['AppSec', 'Vite', 'DevSecOps'],
  },
];

export const certifications = [
  { name: 'CompTIA Security+', issuer: 'Placeholder', status: 'In progress' },
  { name: 'AWS Cloud Practitioner', issuer: 'Placeholder', status: 'Planned' },
  { name: 'Google Cybersecurity Certificate', issuer: 'Placeholder', status: 'Completed' },
  { name: 'ISC2 Certified in Cybersecurity', issuer: 'Placeholder', status: 'Planned' },
];

export const contactCards = [
  {
    title: 'Discuss opportunities',
    detail: 'Available for internships, entry-level roles, and project collaborations.',
    icon: Briefcase,
  },
  {
    title: 'Share project details',
    detail: 'Send a short note with context, goals, timeline, and preferred next steps.',
    icon: Mail,
  },
  {
    title: 'Verify credentials',
    detail: 'Certification IDs and detailed project writeups can be provided on request.',
    icon: Award,
  },
];
