import { useState } from 'react';

export function ScreenshotPreview({ src, alt, label, caption, className = '', imageClassName = 'h-36 sm:h-40', imageToneClassName = '' }) {
  const [hasError, setHasError] = useState(false);

  return (
    <figure className={`overflow-hidden rounded-2xl border border-cyan-200/15 bg-slate-950/70 shadow-lg shadow-cyan-950/20 ${className}`}>
      {label ? (
        <div className="flex items-center justify-between gap-3 border-b border-white/10 px-3 py-2 text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-cyan-200">
          <span>{label}</span>
          <span className="h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_12px_rgba(103,232,249,0.85)]" />
        </div>
      ) : null}
      {!hasError ? (
        <div className={`relative w-full overflow-hidden bg-slate-950 ${imageClassName}`}>
          <img
            src={src}
            alt={alt}
            loading="lazy"
            onError={() => setHasError(true)}
            className={`h-full w-full object-cover ${imageToneClassName}`}
          />
        </div>
      ) : (
        <div className={`grid w-full place-items-center bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.18),transparent_45%),linear-gradient(135deg,rgba(15,23,42,0.96),rgba(2,6,23,0.98))] px-4 text-center ${imageClassName}`} role="img" aria-label={`${label || 'Project'} screenshot unavailable`}>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-200">Preview unavailable</p>
            <p className="mt-2 text-xs leading-5 text-slate-400">Screenshot can be added at the expected public path.</p>
          </div>
        </div>
      )}
      {caption ? <figcaption className="border-t border-white/10 px-3 py-2 text-xs leading-5 text-slate-300">{caption}</figcaption> : null}
    </figure>
  );
}

export function SoarWorkflowVisual({ caption, className = '', imageClassName = 'h-36 sm:h-40' }) {
  const nodes = ['Wazuh', 'TheHive', 'Cortex', 'Firewall', 'Slack'];

  return (
    <figure className={`overflow-hidden rounded-2xl border border-cyan-200/15 bg-slate-950/80 shadow-lg shadow-cyan-950/20 ${className}`}>
      <div className="flex items-center justify-between gap-3 border-b border-white/10 px-3 py-2 text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-cyan-200">
        <span>SOAR Workflow</span>
        <span className="h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_12px_rgba(103,232,249,0.85)]" />
      </div>
      <div className={`relative w-full overflow-hidden bg-[radial-gradient(circle_at_20%_20%,rgba(34,211,238,0.2),transparent_28%),linear-gradient(135deg,rgba(15,23,42,0.98),rgba(2,6,23,0.98))] p-4 sm:p-5 ${imageClassName}`} role="img" aria-label="Security automation workflow diagram connecting Wazuh, TheHive, Cortex, Firewall, and Slack.">
        <div className="pointer-events-none absolute inset-x-8 top-1/2 hidden h-px bg-gradient-to-r from-cyan-300/10 via-cyan-200/60 to-cyan-300/10 md:block" />
        <div className="relative flex h-full flex-wrap items-center justify-center gap-3 sm:gap-4 md:flex-nowrap md:gap-5 lg:gap-6">
          {nodes.map((node, index) => (
            <div key={node} className="relative min-w-24 flex-none rounded-xl border border-cyan-200/20 bg-slate-900/85 px-3 py-3 text-center shadow-inner shadow-cyan-950/30 sm:min-w-28">
              <p className="whitespace-nowrap text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-cyan-200 sm:text-[0.68rem]">{node}</p>
              {index < nodes.length - 1 ? <span className="absolute -right-3 top-1/2 hidden h-2.5 w-2.5 -translate-y-1/2 rotate-45 border-r border-t border-cyan-200/70 md:block" /> : null}
              {index < nodes.length - 1 ? <span className="mx-auto mt-2 block h-2 w-2 rotate-45 border-r border-t border-cyan-200/70 md:hidden" /> : null}
            </div>
          ))}
        </div>
      </div>
      {caption ? <figcaption className="border-t border-white/10 px-3 py-2 text-xs leading-5 text-slate-300">{caption}</figcaption> : null}
    </figure>
  );
}
