import { motion } from 'framer-motion';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { Badge } from '../components/Badge';
import { ScreenshotPreview } from '../components/ProjectVisual';
import { screenshotAltText, screenshotPaths } from '../data/screenshots';
import { profile, sigmaRepoUrl } from '../data/portfolio';

export function Hero() {
  return (
    <section id="hero" className="relative isolate overflow-hidden pt-14 sm:pt-20">
      <div className="absolute inset-0 -z-10 bg-radial-grid" />
      <div className="absolute left-1/2 top-16 -z-10 h-36 w-36 -translate-x-1/2 rounded-full bg-cyan-300/10 blur-3xl sm:h-52 sm:w-52" />
      <div className="mx-auto max-w-7xl px-5 pb-4 pt-1 sm:pb-8 sm:pt-2 lg:px-8">
        <div className="grid items-center gap-5 sm:gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(320px,0.82fr)]">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mx-auto min-w-0 text-center lg:text-left"
          >
            <Badge><span className="md:hidden">Cybersecurity Engineer • Security Automation</span><span className="hidden md:inline">{profile.role}</span></Badge>
            <p className="mt-2 text-sm font-semibold leading-6 text-cyan-100 sm:mt-3 sm:text-base">
              {profile.name}
            </p>
            <h1 className="mx-auto mt-2 max-w-4xl text-xl font-semibold tracking-tight text-white sm:mt-3 sm:text-4xl md:text-5xl lg:mx-0">
              <span className="md:hidden">Building SOC platforms, security automation, and AI-assisted workflows.</span>
              <span className="hidden md:inline">{profile.headline}</span>
            </h1>
            <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-slate-200 sm:mt-4 sm:text-base sm:leading-7 lg:mx-0">
              <span className="md:hidden">I build SOC reporting, SOAR automation, threat intelligence, and AI-assisted security workflows.</span>
              <span className="hidden md:inline">{profile.summary}</span>
            </p>
            <div className="mx-auto mt-5 hidden max-w-xl flex-wrap justify-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-300 md:flex md:gap-3 lg:mx-0 lg:justify-start">
              <span>Cybersecurity platforms</span>
              <span className="text-cyan-300">•</span>
              <span>Security automation</span>
              <span className="text-cyan-300">•</span>
              <span>Threat intelligence</span>
              <span className="text-cyan-300">•</span>
              <span>AI workflows</span>
            </div>
            <div className="mt-4 flex flex-col justify-center gap-2 sm:mt-6 sm:flex-row sm:flex-wrap sm:gap-3 lg:justify-start">
              <a
                href="#featured-projects"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-cyan-300 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-200"
              >
                View Featured Projects <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href={sigmaRepoUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 px-5 py-3 text-sm font-semibold text-white transition hover:border-cyan-300/50 hover:bg-white/10"
              >
                View on GitHub <ArrowUpRight className="h-4 w-4" />
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
