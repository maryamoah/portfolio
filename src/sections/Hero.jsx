import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, LockKeyhole } from 'lucide-react';
import { Badge } from '../components/Badge';
import { metrics, profile } from '../data/portfolio';

export function Hero() {
  return (
    <section id="hero" className="relative isolate overflow-hidden pt-32 md:pt-40">
      <div className="absolute inset-0 -z-10 bg-radial-grid" />
      <div className="absolute left-1/2 top-28 -z-10 h-72 w-72 -translate-x-1/2 rounded-full bg-cyan-300/10 blur-3xl" />
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 pb-20 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:pb-28">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <Badge>{profile.availability}</Badge>
          <h1 className="mt-7 max-w-4xl text-5xl font-semibold tracking-tight text-white md:text-7xl">
            Cybersecurity analyst building practical SOC workflows.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            {profile.summary}
          </p>
          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <a
              href="#projects"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-cyan-300 px-6 py-3 font-semibold text-slate-950 transition hover:bg-cyan-200"
            >
              View featured work <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full border border-white/15 px-6 py-3 font-semibold text-white transition hover:border-cyan-300/50 hover:bg-white/10"
            >
              Contact Mary Abenawa Techiesiwa Amoah
            </a>
          </div>
          <div className="mt-10 grid max-w-2xl grid-cols-3 gap-3">
            {metrics.map((metric) => (
              <div key={metric.label} className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                <p className="text-2xl font-semibold text-white">{metric.value}</p>
                <p className="mt-1 text-xs leading-5 text-slate-400">{metric.label}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="rounded-[2rem] border border-white/10 bg-white/[0.06] p-4 shadow-card backdrop-blur-xl"
        >
          <div className="rounded-[1.5rem] border border-cyan-300/15 bg-slate-950/80 p-6">
            <div className="mb-6 flex items-center justify-between border-b border-white/10 pb-5">
              <div>
                <p className="text-sm text-slate-400">Current focus</p>
                <p className="mt-1 font-semibold text-white">AI-assisted SOC operations and cybersecurity education</p>
              </div>
              <div className="grid h-12 w-12 place-items-center rounded-2xl bg-cyan-300/10">
                <LockKeyhole className="h-6 w-6 text-cyan-200" />
              </div>
            </div>
            <div className="space-y-4">
              {[
                'Deploy and monitor Wazuh SIEM workflows with analyst-ready dashboards.',
                'Connect TheHive, Cortex, OpenCTI, n8n, and firewall actions into repeatable response processes.',
                'Teach cybersecurity through practical labs that build investigation confidence and clear reporting habits.',
              ].map((item) => (
                <div key={item} className="flex gap-3 rounded-2xl bg-white/[0.04] p-4">
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
