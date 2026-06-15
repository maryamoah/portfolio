import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Badge } from '../components/Badge';
import { profile } from '../data/portfolio';

export function Hero() {
  return (
    <section id="hero" className="relative isolate overflow-hidden pt-20 sm:pt-24">
      <div className="absolute inset-0 -z-10 bg-radial-grid" />
      <div className="absolute left-1/2 top-20 -z-10 h-40 w-40 -translate-x-1/2 rounded-full bg-cyan-300/10 blur-3xl sm:h-56 sm:w-56" />
      <div className="mx-auto max-w-5xl px-5 pb-8 pt-2 text-center sm:pb-10 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mx-auto min-w-0"
        >
          <Badge>{profile.role}</Badge>
          <p className="mt-4 text-sm font-semibold leading-6 text-cyan-100 sm:text-base">
            {profile.name}
          </p>
          <h1 className="mx-auto mt-4 max-w-4xl text-2xl font-semibold tracking-tight text-white sm:text-4xl md:text-5xl">
            {profile.headline}
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-200 sm:text-base">
            {profile.summary}
          </p>
          <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row sm:flex-wrap">
            <a
              href="#selected-work"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-cyan-300 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-200"
            >
              View Selected Work <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full border border-white/15 px-5 py-3 text-sm font-semibold text-white transition hover:border-cyan-300/50 hover:bg-white/10"
            >
              Contact Mary
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
