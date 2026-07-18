export default function SectionLabel({ children }: { children: string }) {
  return (
    <div className="font-mono text-xs text-ink-soft uppercase tracking-[0.08em] mb-5">
      <span className="text-accent">{"// "}</span>
      {children}
    </div>
  );
}
