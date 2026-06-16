import { ArrowUpRight } from 'lucide-react';
import { GlassCard } from '../components/GlassCard';
import { SectionHeader } from '../components/SectionHeader';
import { contactCards, resumeLink } from '../data/portfolio';

export function Contact() {
  const ResumeIcon = resumeLink.icon;
  const cards = [...contactCards, { title: 'Resume', detail: resumeLink.label, href: resumeLink.href, icon: ResumeIcon, download: true }];

  return (
    <section id="contact" className="mx-auto max-w-7xl px-5 py-10 sm:py-12 lg:px-8">
      <SectionHeader
        eyebrow="Contact"
        title="Professional links"
        description="Email, GitHub, LinkedIn, and resume access in a compact recruiter-friendly format."
      />
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {cards.map((card, index) => {
          const Icon = card.icon;
          const isResume = card.title === 'Resume';
          return (
            <a
              key={card.title}
              href={card.href}
              target={card.external ? '_blank' : undefined}
              rel={card.external ? 'noreferrer' : undefined}
              download={card.download ? true : undefined}
              className="group block min-w-0"
            >
              <GlassCard delay={index * 0.035} className={`flex h-full items-center gap-3 p-4 transition group-hover:border-cyan-200/40 ${isResume ? 'border-cyan-200/35 bg-cyan-300/10' : 'border-cyan-200/15 bg-slate-900/95'}`}>
                <div className="grid h-10 w-10 flex-none place-items-center rounded-2xl bg-cyan-300/10">
                  <Icon className="h-5 w-5 text-cyan-200" />
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="font-semibold text-white">{card.title}</h3>
                  <p className="mt-1 break-words text-xs leading-5 text-slate-200">{card.detail}</p>
                </div>
                <ArrowUpRight className="h-4 w-4 flex-none text-cyan-200/70 transition group-hover:text-cyan-200" />
              </GlassCard>
            </a>
          );
        })}
      </div>
    </section>
  );
}
