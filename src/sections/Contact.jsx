import { ArrowUpRight } from 'lucide-react';
import { GlassCard } from '../components/GlassCard';
import { SectionHeader } from '../components/SectionHeader';
import { contactCards, profile } from '../data/portfolio';

export function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-7xl px-5 py-16 sm:py-20 lg:px-8">
      <SectionHeader
        eyebrow="Contact"
        title="Start a Security Workflow Conversation"
        description="Connect with Mary Abenawa Techiesiwa Amoah about consulting, SOC workflow improvement, automation, reporting, or cybersecurity instruction."
      />
      <div className="grid gap-6 lg:grid-cols-[1fr_1.2fr]">
        <GlassCard className="border-cyan-200/25 bg-slate-900/95 text-white">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan-200 sm:tracking-[0.3em]">Professional Focus</p>
          <h3 className="mt-5 text-2xl font-semibold leading-tight text-white sm:text-3xl">{profile.name}</h3>
          <p className="mt-3 text-base leading-7 text-slate-200">{profile.contactFocus}</p>
          <p className="mt-4 leading-7 text-slate-300">
            Mary is available for conversations about practical security operations, workflow design,
            automation boundaries, training, and clear reporting for technical and non-technical audiences.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            {profile.links.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  className="inline-flex items-center gap-2 rounded-full bg-cyan-300 px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-cyan-200"
                >
                  <Icon className="h-4 w-4" /> {link.label}
                </a>
              );
            })}
          </div>
        </GlassCard>
        <div className="grid gap-4">
          {contactCards.map((card, index) => {
            const Icon = card.icon;
            return (
              <GlassCard key={card.title} delay={index * 0.05} className="flex items-start gap-4 border-cyan-200/15 bg-slate-900/95 sm:gap-5">
                <div className="grid h-12 w-12 flex-none place-items-center rounded-2xl bg-cyan-300/10">
                  <Icon className="h-6 w-6 text-cyan-200" />
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="font-semibold text-white">{card.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-300">{card.detail}</p>
                </div>
                <ArrowUpRight className="hidden h-5 w-5 flex-none text-cyan-200/70 sm:block" />
              </GlassCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}
