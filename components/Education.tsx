import SectionLabel from "./SectionLabel";
import { education } from "@/lib/data";

export default function Education() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-14 border-t border-line">
      <SectionLabel>education</SectionLabel>
      <div className="grid sm:grid-cols-[160px_1fr] gap-2 sm:gap-6">
        <div className="font-mono text-xs text-ink-soft pt-1">
          {education.period}
        </div>
        <div>
          <h3 className="text-[17px] font-semibold">{education.degree}</h3>
          <p className="text-[15px] text-ink-soft mt-1">{education.school}</p>
        </div>
      </div>
    </section>
  );
}
