import { useState } from 'react';

export function ScreenshotPreview({ src, alt, label, caption, className = '', imageClassName = 'h-36 sm:h-40' }) {
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
        <img
          src={src}
          alt={alt}
          loading="lazy"
          onError={() => setHasError(true)}
          className={`w-full object-cover ${imageClassName}`}
        />
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
      <div className={`relative w-full overflow-hidden bg-[radial-gradient(circle_at_20%_20%,rgba(34,211,238,0.2),transparent_28%),linear-gradient(135deg,rgba(15,23,42,0.98),rgba(2,6,23,0.98))] p-4 ${imageClassName}`} role="img" aria-label="Security automation workflow diagram connecting Wazuh, TheHive, Cortex, Firewall, and Slack.">
        <div className="absolute left-6 right-6 top-1/2 h-px bg-gradient-to-r from-cyan-300/15 via-cyan-200/65 to-cyan-300/15" />
        <div className="relative grid h-full grid-cols-2 content-center gap-3 sm:grid-cols-5">
          {nodes.map((node, index) => (
            <div key={node} className="relative rounded-xl border border-cyan-200/20 bg-slate-900/85 px-3 py-3 text-center shadow-inner shadow-cyan-950/30">
              <p className="text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-cyan-200">{node}</p>
              {index < nodes.length - 1 ? <span className="absolute -right-2 top-1/2 hidden h-2 w-2 -translate-y-1/2 rotate-45 border-r border-t border-cyan-200/70 sm:block" /> : null}
            </div>
          ))}
        </div>
      </div>
      {caption ? <figcaption className="border-t border-white/10 px-3 py-2 text-xs leading-5 text-slate-300">{caption}</figcaption> : null}
    </figure>
  );
}
