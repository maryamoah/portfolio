import { useState } from 'react';
import { GlassCard } from '../components/GlassCard';
import { SectionHeader } from '../components/SectionHeader';
import { additionalFocus, professionalFocus } from '../data/portfolio';

function FocusCard({ focus, index }) {
  const Icon = focus.icon;
  return (
    <GlassCard delay={index * 0.04} className="h-full border-cyan-200/20 bg-slate-900/90">
      <div className="mb-5 grid h-12 w-12 place-items-center rounded-2xl bg-cyan-300/15">
        <Icon className="h-6 w-6 text-cyan-100" />
      </div>
      <h3 className="text-xl font-semibold text-white">{focus.title}</h3>
      <p className="mt-4 text-sm leading-7 text-slate-100">{focus.description}</p>
    </GlassCard>
  );
}

export function ProfessionalFocus() {
  const [showMore, setShowMore] = useState(false);

  return (
    <section id="professional-focus" className="mx-auto max-w-7xl px-5 py-16 sm:py-20 lg:px-8">
      <SectionHeader
        eyebrow="Specializations"
        title="Areas of Focus"
        description="A focused view of Mary’s strongest work, with additional capabilities available on demand."
      />
      <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
        {professionalFocus.map((focus, index) => <FocusCard key={focus.title} focus={focus} index={index} />)}
      </div>
      <div className="mt-8 text-center">
        <button
          type="button"
          onClick={() => setShowMore((value) => !value)}
          className="rounded-full border border-cyan-200/25 bg-white/5 px-5 py-3 text-sm font-semibold text-cyan-100 transition hover:border-cyan-200/50 hover:bg-cyan-300/10"
          aria-expanded={showMore}
        >
          {showMore ? 'Hide More Areas' : 'View More Areas'}
        </button>
      </div>
      {showMore ? (
        <div className="mt-6 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {additionalFocus.map((focus, index) => <FocusCard key={focus.title} focus={focus} index={index} />)}
        </div>
      ) : null}
    </section>
  );
}
