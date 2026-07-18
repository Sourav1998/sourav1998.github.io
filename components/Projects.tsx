import SectionLabel from "./SectionLabel";
import { projects } from "@/lib/data";

export default function Projects() {
  return (
    <section
      id="projects"
      className="mx-auto max-w-3xl px-6 py-14 border-t border-line"
    >
      <SectionLabel>projects</SectionLabel>
      <div className="grid sm:grid-cols-2 gap-5">
        {projects.map((p) => (
          <a
            key={p.name}
            href={p.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group border border-line rounded-lg p-5 hover:border-accent transition-colors flex flex-col"
          >
            <h3 className="text-[16px] font-semibold group-hover:text-accent transition-colors">
              {p.name}
            </h3>
            <p className="text-[14px] text-[#2b2e33] leading-relaxed mt-2 flex-1">
              {p.description}
            </p>
            <div className="flex flex-wrap gap-1.5 mt-4">
              {p.stack.map((s) => (
                <span
                  key={s}
                  className="text-[11px] font-mono text-ink-soft border border-line rounded px-2 py-0.5"
                >
                  {s}
                </span>
              ))}
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
