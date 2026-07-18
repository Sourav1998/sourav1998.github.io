import SectionLabel from "./SectionLabel";
import { experience } from "@/lib/data";

export default function Experience() {
  return (
    <section
      id="experience"
      className="mx-auto max-w-3xl px-6 py-14 border-t border-line"
    >
      <SectionLabel>experience</SectionLabel>
      <div className="space-y-10">
        {experience.map((job) => (
          <div
            key={job.role + job.period}
            className="grid sm:grid-cols-[160px_1fr] gap-2 sm:gap-6"
          >
            <div className="font-mono text-xs text-ink-soft pt-1 flex items-center gap-2">
              {job.current && (
                <span
                  className="inline-block w-[6px] h-[6px] rounded-full bg-accent"
                  aria-hidden
                />
              )}
              {job.period}
            </div>
            <div>
              <h3 className="text-[17px] font-semibold">
                {job.role}{" "}
                <span className="text-ink-soft font-normal">
                  · {job.company}
                </span>
              </h3>
              <ul className="mt-3 space-y-2">
                {job.points.map((p) => (
                  <li
                    key={p}
                    className="text-[15px] text-[#2b2e33] leading-relaxed pl-4 relative before:content-['—'] before:absolute before:left-0 before:text-ink-soft"
                  >
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
