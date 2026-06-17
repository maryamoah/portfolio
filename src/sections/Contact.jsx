import { ArrowUpRight } from 'lucide-react';
import { GlassCard } from '../components/GlassCard';
import { SectionHeader } from '../components/SectionHeader';
import { contactCards, resumeLink } from '../data/portfolio';

export function Contact() {
  const ResumeIcon = resumeLink.icon;
  const cards = [...contactCards, { title: resumeLink.label, detail: 'PDF resume', href: resumeLink.href, icon: ResumeIcon, download: true }];

  return (
    <section id="contact" className="mx-auto max-w-7xl px-5 py-10 sm:py-12 lg:px-8">
      <SectionHeader
        eyebrow="Contact"
        title="Professional links"
        description="Email, GitHub, LinkedIn, and resume access in a compact recruiter-friendly format."
      />
      <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
        {cards.map((card, index) => {
          const Icon = card.icon;
          const isResume = card.href === resumeLink.href;
          return (
            <a
              key={card.title}
              href={card.href}
              target={card.external ? '_blank' : undefined}
              rel={card.external ? 'noreferrer' : undefined}
              download={card.download ? true : undefined}
              className="group block min-w-0"
            >
              <GlassCard delay={index * 0.035} className={`flex h-full flex-col items-start gap-2 p-3 transition group-hover:border-cyan-200/40 sm:flex-row sm:items-center sm:gap-3 sm:p-4 ${isResume ? 'border-cyan-200/35 bg-cyan-300/10' : 'border-cyan-200/15 bg-slate-900/95'}`}>
                <div className="grid h-9 w-9 flex-none place-items-center rounded-xl bg-cyan-300/10 sm:h-10 sm:w-10 sm:rounded-2xl">
                  <Icon className="h-4 w-4 text-cyan-200 sm:h-5 sm:w-5" />
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="font-semibold text-white">{card.title}</h3>
                  <p className="mt-1 break-words text-xs leading-5 text-slate-200">{card.detail}</p>
                </div>
                <ArrowUpRight className="hidden h-4 w-4 flex-none text-cyan-200/70 transition group-hover:text-cyan-200 sm:block" />
              </GlassCard>
            </a>
          );
        })}
      </div>
    </section>
  );
}
