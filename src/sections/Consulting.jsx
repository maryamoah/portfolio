import { CheckCircle2 } from 'lucide-react';
import { GlassCard } from '../components/GlassCard';
import { SectionHeader } from '../components/SectionHeader';
import { consultingServices } from '../data/portfolio';

export function Consulting() {
  return (
    <section id="consulting" className="mx-auto max-w-7xl px-5 py-16 sm:py-20 lg:px-8">
      <SectionHeader
        eyebrow="Services"
        title="Practical Security Support"
        description="Focused support areas that complement Mary’s operations, automation, education, and research work."
      />
      <GlassCard className="overflow-hidden bg-cyan-300 text-slate-950">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {consultingServices.map((service) => (
            <div key={service} className="rounded-2xl bg-white/85 p-4 shadow-sm">
              <CheckCircle2 className="h-5 w-5 text-slate-900" />
              <p className="mt-3 text-sm font-semibold leading-6 text-slate-900">{service}</p>
            </div>
          ))}
        </div>
      </GlassCard>
    </section>
  );
}
