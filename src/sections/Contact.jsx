import { ArrowUpRight } from 'lucide-react';
import { GlassCard } from '../components/GlassCard';
import { SectionHeader } from '../components/SectionHeader';
import { contactCards, profile, resumeLink } from '../data/portfolio';

export function Contact() {
  const ResumeIcon = resumeLink.icon;

  return (
    <section id="contact" className="mx-auto max-w-7xl px-5 py-16 sm:py-20 lg:px-8">
      <SectionHeader
        eyebrow="Contact"
        title="Contact and Professional Links"
        description="Email Mary directly, review her GitHub work, connect on LinkedIn, or download the resume summary."
      />
      <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <GlassCard className="border-cyan-200/25 bg-slate-900/95 text-white">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan-200 sm:tracking-[0.3em]">Direct Access</p>
          <h3 className="mt-5 text-2xl font-semibold leading-tight text-white sm:text-3xl">{profile.name}</h3>
          <p className="mt-3 text-base leading-7 text-slate-100">{profile.contactFocus}</p>
          <a
            href={resumeLink.href}
            download
            className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full bg-cyan-300 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-200 sm:w-auto"
          >
            <ResumeIcon className="h-4 w-4" />
            {resumeLink.label}
          </a>
        </GlassCard>
        <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
          {contactCards.map((card, index) => {
            const Icon = card.icon;
            return (
              <a
                key={card.title}
                href={card.href}
                target={card.external ? '_blank' : undefined}
                rel={card.external ? 'noreferrer' : undefined}
                className="group block min-w-0"
              >
                <GlassCard delay={index * 0.05} className="flex h-full items-start gap-4 border-cyan-200/15 bg-slate-900/95 transition group-hover:border-cyan-200/40 group-hover:bg-slate-900 sm:gap-5">
                  <div className="grid h-12 w-12 flex-none place-items-center rounded-2xl bg-cyan-300/10">
                    <Icon className="h-6 w-6 text-cyan-200" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="font-semibold text-white">{card.title}</h3>
                    <p className="mt-2 break-words text-sm leading-6 text-slate-200">{card.detail}</p>
                  </div>
                  <ArrowUpRight className="hidden h-5 w-5 flex-none text-cyan-200/70 transition group-hover:text-cyan-200 sm:block" />
                </GlassCard>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
