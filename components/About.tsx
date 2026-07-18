import SectionLabel from "./SectionLabel";
import { profile, stats } from "@/lib/data";

export default function About() {
  return (
    <section
      id="about"
      className="mx-auto max-w-3xl px-6 py-14 border-t border-line"
    >
      <SectionLabel>about</SectionLabel>
      <p className="text-[17px] leading-relaxed max-w-2xl text-[#2b2e33]">
        {profile.summary}
      </p>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-px bg-line border border-line mt-8">
        {stats.map((s) => (
          <div key={s.label} className="bg-bg px-4 py-5">
            <div className="font-mono text-2xl font-semibold text-accent">
              {s.value}
            </div>
            <div className="text-xs text-ink-soft mt-1">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
