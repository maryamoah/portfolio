import { ArrowUpRight } from 'lucide-react';
import { GlassCard } from '../components/GlassCard';
import { SectionHeader } from '../components/SectionHeader';
import { contactCards, profile } from '../data/portfolio';

export function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-7xl px-5 py-16 sm:py-20 lg:px-8">
      <SectionHeader
        eyebrow="Contact"
        title="Let’s talk about secure systems, thoughtful operations, and practical risk reduction."
        description="Connect about cybersecurity consulting, SOC workflow improvement, automation, incident response workflows, threat intelligence integration, dashboards, reporting, or cybersecurity education."
      />
      <div className="grid gap-6 lg:grid-cols-[1fr_1.2fr]">
        <GlassCard className="bg-cyan-300 text-slate-950">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-800 sm:tracking-[0.3em]">Professional Focus</p>
          <h3 className="mt-5 text-2xl font-semibold leading-tight sm:text-3xl">{profile.contactFocus}</h3>
          <p className="mt-4 leading-7 text-slate-800">
            Mary is positioned for conversations about SOC analyst work, cybersecurity consulting,
            security automation, incident response process design, threat intelligence workflows,
            executive reporting, VAPT support, and cybersecurity instruction.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            {profile.links.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  className="inline-flex items-center gap-2 rounded-full bg-slate-950 px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-800"
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
              <GlassCard key={card.title} delay={index * 0.05} className="flex items-start gap-4 sm:gap-5">
                <div className="grid h-12 w-12 flex-none place-items-center rounded-2xl bg-cyan-300/10">
                  <Icon className="h-6 w-6 text-cyan-200" />
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="font-semibold text-white">{card.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-400">{card.detail}</p>
                </div>
                <ArrowUpRight className="hidden h-5 w-5 flex-none text-slate-500 sm:block" />
              </GlassCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}
