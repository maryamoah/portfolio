import { Award } from 'lucide-react';
import { GlassCard } from '../components/GlassCard';
import { SectionHeader } from '../components/SectionHeader';
import { certifications } from '../data/portfolio';

export function Certifications() {
  return (
    <section id="certifications" className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
      <SectionHeader
        eyebrow="Certifications"
        title="Learning milestones aligned to security and cloud fundamentals."
        description="Portfolio evidence and learning milestones aligned to Mary’s SOC operations, automation, threat intelligence, and cybersecurity education focus."
      />
      <div className="grid gap-4 md:grid-cols-2">
        {certifications.map((cert, index) => (
          <GlassCard key={cert.name} delay={index * 0.04} className="flex items-center gap-5">
            <div className="grid h-12 w-12 flex-none place-items-center rounded-2xl bg-cyan-300/10">
              <Award className="h-6 w-6 text-cyan-200" />
            </div>
            <div>
              <h3 className="font-semibold text-white">{cert.name}</h3>
              <p className="mt-1 text-sm text-slate-400">
                {cert.issuer} · {cert.status}
              </p>
            </div>
          </GlassCard>
        ))}
      </div>
    </section>
  );
}
