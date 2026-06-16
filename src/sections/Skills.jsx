import { useState } from 'react';
import { GlassCard } from '../components/GlassCard';
import { SectionHeader } from '../components/SectionHeader';
import { additionalFocus, professionalFocus, skills } from '../data/portfolio';

const coreExpertise = [
  'Security Operations Engineering',
  'Security Automation & SOAR',
  'SIEM Engineering',
  'Threat Intelligence',
  'AI Security Research',
];

function FocusCard({ focus, index }) {
  const Icon = focus.icon;
  return (
    <GlassCard delay={index * 0.035} className="h-full border-cyan-200/15 bg-slate-900/90 p-5">
      <div className="mb-4 grid h-10 w-10 place-items-center rounded-2xl bg-cyan-300/10">
        <Icon className="h-5 w-5 text-cyan-100" />
      </div>
      <h3 className="text-lg font-semibold text-white">{focus.title}</h3>
      <p className="mt-3 text-sm leading-6 text-slate-200">{focus.description}</p>
    </GlassCard>
  );
}

export function Skills() {
  const [showMoreFocus, setShowMoreFocus] = useState(false);
  const [showDetailedExpertise, setShowDetailedExpertise] = useState(false);

  return (
    <section id="core-expertise" className="mx-auto max-w-7xl px-5 py-16 sm:py-20 lg:px-8">
      <SectionHeader
        eyebrow="Core Expertise"
        title="Focused capability areas"
        description="The visible layer emphasizes what Mary specializes in; detailed tools and workflows stay collapsed until needed."
      />

      <GlassCard className="mx-auto max-w-4xl border-cyan-200/25 bg-slate-900/95">
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan-300">Default View</p>
        <div className="mt-5 flex flex-wrap gap-3">
          {coreExpertise.map((item) => (
            <span key={item} className="rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-sm font-semibold text-cyan-50">
              {item}
            </span>
          ))}
        </div>
      </GlassCard>

      <div className="mt-8 grid gap-5 md:grid-cols-3">
        {professionalFocus.map((focus, index) => <FocusCard key={focus.title} focus={focus} index={index} />)}
      </div>
      <div className="mt-7 text-center">
        <button
          type="button"
          onClick={() => setShowMoreFocus((value) => !value)}
          className="rounded-full border border-cyan-200/25 bg-white/5 px-5 py-3 text-sm font-semibold text-cyan-100 transition hover:border-cyan-200/50 hover:bg-cyan-300/10"
          aria-expanded={showMoreFocus}
        >
          {showMoreFocus ? 'Hide More Focus Areas' : 'View More Focus Areas'}
        </button>
      </div>
      {showMoreFocus ? (
        <div className="mt-6 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {additionalFocus.map((focus, index) => <FocusCard key={focus.title} focus={focus} index={index} />)}
        </div>
      ) : null}

      <div className="mt-10 text-center">
        <button
          type="button"
          onClick={() => setShowDetailedExpertise((value) => !value)}
          className="rounded-full border border-cyan-200/25 bg-white/5 px-5 py-3 text-sm font-semibold text-cyan-100 transition hover:border-cyan-200/50 hover:bg-cyan-300/10"
          aria-expanded={showDetailedExpertise}
        >
          {showDetailedExpertise ? 'Hide Detailed Expertise' : 'View Detailed Expertise'}
        </button>
      </div>

      {showDetailedExpertise ? (
        <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {skills.map((skill) => {
            const Icon = skill.icon;
            return (
              <details key={skill.title} className="group rounded-3xl border border-white/10 bg-panel p-5 shadow-card backdrop-blur-xl open:border-cyan-200/30 open:bg-slate-900/95">
                <summary className="flex cursor-pointer list-none items-center gap-4">
                  <span className="grid h-11 w-11 flex-none place-items-center rounded-2xl bg-cyan-300/10">
                    <Icon className="h-5 w-5 text-cyan-200" />
                  </span>
                  <span className="min-w-0 flex-1 font-semibold text-white">{skill.title}</span>
                  <span className="text-sm font-semibold text-cyan-200 group-open:hidden">Expand</span>
                  <span className="hidden text-sm font-semibold text-cyan-200 group-open:inline">Close</span>
                </summary>
                <ul className="mt-5 space-y-3">
                  {skill.items.map((item) => (
                    <li key={item} className="flex items-center gap-3 text-sm text-slate-200">
                      <span className="h-1.5 w-1.5 rounded-full bg-cyan-300" />
                      {item}
                    </li>
                  ))}
                </ul>
              </details>
            );
          })}
        </div>
      ) : null}
    </section>
  );
}
