import SectionLabel from "./SectionLabel";
import { skillGroups } from "@/lib/data";

export default function Skills() {
  return (
    <section
      id="skills"
      className="mx-auto max-w-3xl px-6 py-14 border-t border-line"
    >
      <SectionLabel>skills</SectionLabel>
      <div className="grid sm:grid-cols-2 gap-x-8 gap-y-6">
        {skillGroups.map((group) => (
          <div key={group.label}>
            <div className="font-mono text-[13px] text-ink-soft mb-2.5">
              {group.label}
            </div>
            <div className="flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <span
                  key={skill}
                  className="text-[13px] font-mono border border-line rounded px-2.5 py-1 bg-accent-soft/40"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
