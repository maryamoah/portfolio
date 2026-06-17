import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Badge } from '../components/Badge';
import { ScreenshotPreview } from '../components/ProjectVisual';
import { screenshotAltText, screenshotPaths } from '../data/screenshots';
import { profile, resumeLink } from '../data/portfolio';

export function Hero() {
  return (
    <section id="hero" className="relative isolate overflow-hidden pt-16 sm:pt-20">
      <div className="absolute inset-0 -z-10 bg-radial-grid" />
      <div className="absolute left-1/2 top-16 -z-10 h-36 w-36 -translate-x-1/2 rounded-full bg-cyan-300/10 blur-3xl sm:h-52 sm:w-52" />
      <div className="mx-auto max-w-7xl px-5 pb-6 pt-2 sm:pb-8 lg:px-8">
        <div className="grid items-center gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(320px,0.82fr)]">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mx-auto min-w-0 text-center lg:text-left"
          >
          <Badge>{profile.role}</Badge>
          <p className="mt-3 text-sm font-semibold leading-6 text-cyan-100 sm:text-base">
            {profile.name}
          </p>
          <h1 className="mx-auto mt-3 max-w-4xl text-2xl font-semibold tracking-tight text-white sm:text-4xl md:text-5xl lg:mx-0">
            {profile.headline}
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-slate-200 sm:text-base sm:leading-7 lg:mx-0">
            {profile.summary}
          </p>
          <div className="mx-auto mt-5 flex max-w-xl flex-wrap justify-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-300 sm:gap-3 lg:mx-0 lg:justify-start">
            <span>Cybersecurity platforms</span>
            <span className="text-cyan-300">•</span>
            <span>Security automation</span>
            <span className="text-cyan-300">•</span>
            <span>Threat intelligence</span>
            <span className="text-cyan-300">•</span>
            <span>AI workflows</span>
          </div>
          <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row sm:flex-wrap lg:justify-start">
            <a
              href="#featured-projects"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-cyan-300 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-200"
            >
              View Featured Projects <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href={resumeLink.href}
              download
              className="inline-flex items-center justify-center rounded-full border border-white/15 px-5 py-3 text-sm font-semibold text-white transition hover:border-cyan-300/50 hover:bg-white/10"
            >
              Download Resume
            </a>
          </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 18 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.12 }}
            className="hidden min-w-0 sm:block"
          >
          <ScreenshotPreview
            src={screenshotPaths.soc}
            alt={screenshotAltText.soc}
            label="SOC Reporting Platform"
            caption="Analyst and executive security visibility"
            imageClassName="h-56 md:h-64 lg:h-80"
            className="rounded-3xl border-white/15 bg-white/[0.045] p-2 shadow-2xl shadow-cyan-950/40 ring-1 ring-cyan-200/10"
          />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
