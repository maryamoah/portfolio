import { Award } from 'lucide-react';
import { GlassCard } from '../components/GlassCard';
import { SectionHeader } from '../components/SectionHeader';
import { certifications } from '../data/portfolio';

export function Certifications() {
  return (
    <section id="certifications" className="mx-auto max-w-7xl px-5 py-16 sm:py-20 lg:px-8">
      <SectionHeader
        eyebrow="Certifications"
        title="Documented Learning Evidence and Portfolio Capability Areas"
        description="This section avoids inventing credentials and groups Mary’s documented security practice into clean evidence cards."
      />
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {certifications.map((cert, index) => (
          <GlassCard key={cert.name} delay={index * 0.04} className="h-full">
            <div className="flex items-start gap-4">
              <div className="grid h-12 w-12 flex-none place-items-center rounded-2xl bg-cyan-300/10">
                <Award className="h-6 w-6 text-cyan-200" />
              </div>
              <div className="min-w-0">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-300">{cert.issuer}</p>
                <h3 className="mt-2 text-lg font-semibold leading-7 text-white">{cert.name}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-200">{cert.status}</p>
              </div>
            </div>
          </GlassCard>
        ))}
      </div>
    </section>
  );
}
