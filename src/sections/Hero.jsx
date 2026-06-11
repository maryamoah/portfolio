import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, LockKeyhole } from 'lucide-react';
import { Badge } from '../components/Badge';
import { metrics, profile } from '../data/portfolio';

export function Hero() {
  const focusPoints = [
    'Designing SOC workflows that make triage, escalation, and reporting easier to follow.',
    'Improving threat intelligence and incident response handoffs with practical automation.',
    'Exploring AI-assisted investigation and interpretable anomaly detection for security telemetry.',
  ];

  return (
    <section id="hero" className="relative isolate overflow-hidden pt-28 sm:pt-32 md:pt-40">
      <div className="absolute inset-0 -z-10 bg-radial-grid" />
      <div className="absolute left-1/2 top-28 -z-10 h-56 w-56 -translate-x-1/2 rounded-full bg-cyan-300/10 blur-3xl sm:h-72 sm:w-72" />
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 pb-16 sm:pb-20 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:pb-28">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="min-w-0"
        >
          <Badge>{profile.availability}</Badge>
          <p className="mt-5 text-base font-semibold leading-7 text-cyan-100 sm:text-lg">
            {profile.name}
          </p>
          <h1 className="mt-5 max-w-4xl text-3xl font-semibold tracking-tight text-white sm:text-4xl md:text-5xl xl:text-6xl">
            {profile.headline}
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
            {profile.summary}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a
              href="#case-studies"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-cyan-300 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-200 sm:px-6 sm:text-base"
            >
              View Case Studies <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#consulting"
              className="inline-flex items-center justify-center rounded-full border border-white/15 px-5 py-3 text-sm font-semibold text-white transition hover:border-cyan-300/50 hover:bg-white/10 sm:px-6 sm:text-base"
            >
              How Mary Can Help
            </a>
          </div>
          <div className="mt-9 grid max-w-3xl gap-3 sm:grid-cols-3">
            {metrics.map((metric) => (
              <div key={metric.label} className="rounded-2xl border border-white/10 bg-white/[0.05] p-4">
                <p className="text-2xl font-semibold text-white">{metric.value}</p>
                <p className="mt-1 text-xs leading-5 text-slate-300">{metric.label}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="min-w-0 rounded-[1.5rem] border border-white/10 bg-white/[0.06] p-3 shadow-card backdrop-blur-xl sm:rounded-[2rem] sm:p-4"
        >
          <div className="rounded-[1.25rem] border border-cyan-300/15 bg-slate-950/85 p-5 sm:rounded-[1.5rem] sm:p-6">
            <div className="mb-6 flex items-start justify-between gap-4 border-b border-white/10 pb-5">
              <div className="min-w-0">
                <p className="text-base font-semibold leading-7 text-white">Core Focus</p>
              </div>
              <div className="grid h-11 w-11 flex-none place-items-center rounded-2xl bg-cyan-300/10 sm:h-12 sm:w-12">
                <LockKeyhole className="h-6 w-6 text-cyan-200" />
              </div>
            </div>
            <div className="space-y-4">
              {focusPoints.map((item) => (
                <div key={item} className="flex gap-3 rounded-2xl bg-white/[0.05] p-4">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 flex-none text-cyan-300" />
                  <p className="text-sm leading-6 text-slate-300">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
