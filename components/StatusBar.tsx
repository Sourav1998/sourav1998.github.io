import { profile } from "@/lib/data";

const links = [
  { href: "#about", label: "about" },
  { href: "#experience", label: "experience" },
  { href: "#skills", label: "skills" },
  { href: "#projects", label: "projects" },
  { href: "#coffee", label: "contact" },
];

export default function StatusBar() {
  return (
    <div className="border-b border-line font-mono text-[13px] text-ink-soft sticky top-0 bg-bg/90 backdrop-blur z-50">
      <div className="mx-auto max-w-3xl px-6 h-13 flex items-center justify-between py-3">
        <div className="flex items-center gap-2">
          <span
            className="inline-block w-[7px] h-[7px] rounded-full bg-accent"
            style={{ boxShadow: "0 0 0 3px var(--accent-soft)" }}
            aria-hidden
          />
          status: available for coffee
        </div>
        <nav className="hidden sm:flex gap-5">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="hover:text-ink transition-colors focus-visible:outline-2 focus-visible:outline-accent rounded-sm"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <a
          href={`mailto:${profile.email}`}
          className="sm:hidden hover:text-ink transition-colors"
        >
          email
        </a>
      </div>
    </div>
  );
}
