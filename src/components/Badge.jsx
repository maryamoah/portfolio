export function Badge({ children }) {
  return (
    <span className="inline-flex max-w-full rounded-full border border-cyan-300/20 bg-cyan-300/10 px-3 py-1 text-xs font-medium leading-5 text-cyan-100">
      {children}
    </span>
  );
}
