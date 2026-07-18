import { profile } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="mt-auto py-10 font-mono text-xs text-ink-soft text-center border-t border-line">
      Made with ♥ in India · No copyright issues, feel free to copy ·{" "}
      <a
        href={`mailto:${profile.email}`}
        className="hover:text-accent transition-colors"
      >
        {profile.email}
      </a>
    </footer>
  );
}
