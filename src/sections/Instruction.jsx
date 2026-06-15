import { BookOpenCheck } from 'lucide-react';
import { GlassCard } from '../components/GlassCard';
import { SectionHeader } from '../components/SectionHeader';
import { instructionHighlights } from '../data/portfolio';

export function Instruction() {
  return (
    <section id="instruction" className="mx-auto max-w-7xl px-5 py-16 sm:py-20 lg:px-8">
      <SectionHeader
        eyebrow="Teaching"
        title="Teaching & Instruction"
        description="Practical education support for learners and teams developing investigation, monitoring, intelligence, and reporting skills."
      />
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {instructionHighlights.map((highlight, index) => (
          <GlassCard key={highlight} delay={index * 0.04} className="h-full">
            <div className="mb-5 grid h-12 w-12 place-items-center rounded-2xl bg-cyan-300/10">
              <BookOpenCheck className="h-6 w-6 text-cyan-200" />
            </div>
            <p className="text-sm font-semibold leading-7 text-slate-100">{highlight}</p>
          </GlassCard>
        ))}
      </div>
    </section>
  );
}
