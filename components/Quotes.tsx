import SectionLabel from "./SectionLabel";
import { quotes } from "@/lib/data";

export default function Quotes() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-14 border-t border-line">
      <SectionLabel>inspiring quotes</SectionLabel>
      <div className="divide-y divide-line">
        {quotes.map((q) => (
          <div key={q.author} className="py-4 first:pt-0 last:pb-0">
            <div className="font-mono text-xs text-ink-soft">
              [log] {q.author.toLowerCase()}
            </div>
            <blockquote className="text-[16px] italic mt-1.5">
              &ldquo;{q.text}&rdquo;
            </blockquote>
          </div>
        ))}
      </div>
    </section>
  );
}
