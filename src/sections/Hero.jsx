import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Badge } from '../components/Badge';
import { profile } from '../data/portfolio';

export function Hero() {
  return (
    <section id="hero" className="relative isolate overflow-hidden pt-24 sm:pt-28 md:pt-32">
      <div className="absolute inset-0 -z-10 bg-radial-grid" />
      <div className="absolute left-1/2 top-28 -z-10 h-56 w-56 -translate-x-1/2 rounded-full bg-cyan-300/10 blur-3xl sm:h-72 sm:w-72" />
      <div className="mx-auto max-w-5xl px-5 pb-12 pt-4 text-center sm:pb-16 lg:px-8 lg:pb-20">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mx-auto min-w-0"
        >
          <Badge>{profile.availability}</Badge>
          <p className="mt-5 text-base font-semibold leading-7 text-cyan-100 sm:text-lg">
            {profile.name}
          </p>
          <h1 className="mx-auto mt-5 max-w-4xl text-3xl font-semibold tracking-tight text-white sm:text-4xl md:text-5xl">
            {profile.headline}
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-slate-200 sm:text-lg">
            {profile.summary}
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row sm:flex-wrap">
            <a
              href="#featured-work"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-cyan-300 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-200 sm:px-6 sm:text-base"
            >
              View Featured Work <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full border border-white/15 px-5 py-3 text-sm font-semibold text-white transition hover:border-cyan-300/50 hover:bg-white/10 sm:px-6 sm:text-base"
            >
              Contact Mary
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
