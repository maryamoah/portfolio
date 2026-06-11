import { BookOpenCheck } from 'lucide-react';
import { GlassCard } from '../components/GlassCard';
import { SectionHeader } from '../components/SectionHeader';
import { instructionHighlights } from '../data/portfolio';

export function Instruction() {
  return (
    <section id="instruction" className="mx-auto max-w-7xl px-5 py-16 sm:py-20 lg:px-8">
      <SectionHeader
        eyebrow="Cybersecurity Instruction"
        title="Cybersecurity Instruction and Lab Development"
        description="Mary’s instruction work focuses on practical learning paths that help learners investigate, document, and communicate security work clearly."
      />
      <div className="grid gap-5 md:grid-cols-3">
        {instructionHighlights.map((highlight, index) => (
          <GlassCard key={highlight} delay={index * 0.05} className="h-full">
            <div className="mb-5 grid h-12 w-12 place-items-center rounded-2xl bg-cyan-300/10">
              <BookOpenCheck className="h-6 w-6 text-cyan-200" />
            </div>
            <p className="text-sm leading-7 text-slate-300">{highlight}</p>
          </GlassCard>
        ))}
      </div>
    </section>
  );
}
