import { Fragment, useState } from 'react';

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
      <div className={`relative w-full overflow-hidden bg-[radial-gradient(circle_at_20%_20%,rgba(34,211,238,0.2),transparent_28%),linear-gradient(135deg,rgba(15,23,42,0.98),rgba(2,6,23,0.98))] p-5 sm:p-6 ${imageClassName}`} role="img" aria-label="Security automation workflow diagram connecting Wazuh, TheHive, Cortex, Firewall, and Slack.">
        <div className="pointer-events-none absolute inset-x-7 top-1/2 hidden h-px bg-gradient-to-r from-cyan-300/10 via-cyan-200/60 to-cyan-300/10 md:block" />
        <div className="relative flex h-full flex-wrap items-center justify-center gap-2 min-[420px]:gap-2.5 md:flex-nowrap md:gap-1.5 lg:gap-2">
          {nodes.map((node, index) => (
            <Fragment key={node}>
              <div className="min-w-[4.25rem] max-w-[5.75rem] flex-1 rounded-xl border border-cyan-200/20 bg-slate-900/85 px-2 py-2.5 text-center shadow-inner shadow-cyan-950/30 md:min-w-0 md:px-1.5 lg:px-2">
                <p className="whitespace-nowrap text-[0.56rem] font-semibold uppercase tracking-[0.08em] text-cyan-200 sm:text-[0.6rem] md:text-[0.48rem] md:tracking-[0.03em] lg:text-[0.56rem] lg:tracking-[0.08em]">{node}</p>
              </div>
              {index < nodes.length - 1 ? (
                <span className="h-2 w-2 flex-none rotate-45 border-r border-t border-cyan-200/70 shadow-[0_0_10px_rgba(103,232,249,0.25)]" aria-hidden="true" />
              ) : null}
            </Fragment>
          ))}
        </div>
      </div>
      {caption ? <figcaption className="border-t border-white/10 px-3 py-2 text-xs leading-5 text-slate-300">{caption}</figcaption> : null}
    </figure>
  );
}
