import { profile } from "@/lib/data";

export default function Hero() {
  return (
    <header className="mx-auto max-w-3xl px-6 pt-20 pb-16 sm:pt-24 sm:pb-16">
      <div className="font-mono text-[13px] text-accent uppercase tracking-[0.08em] mb-4">
        {profile.location}
      </div>
      <h1 className="text-[32px] sm:text-[44px] font-semibold leading-[1.15] tracking-[-0.02em] max-w-xl">
        Sourav Khanna keeps systems up so other people don&apos;t have to
        think about it.
      </h1>
      <p className="font-mono text-ink-soft text-[15px] sm:text-base mt-4">
        senior site reliability engineer @{" "}
        <a
          href={profile.companyUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-ink hover:text-accent underline underline-offset-2"
        >
          netcore cloud
        </a>
        <span
          className="inline-block w-2 h-4 bg-accent ml-1 align-[-2px] cursor-blink"
          aria-hidden
        />
      </p>
      <div className="mt-6 flex gap-4 flex-wrap">
        <a
          href={profile.github}
          target="_blank"
          rel="noopener noreferrer"
          className="font-mono text-[13px] border border-line px-3.5 py-2 rounded hover:border-accent hover:text-accent transition-colors"
        >
          github
        </a>
        <a
          href={profile.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="font-mono text-[13px] border border-line px-3.5 py-2 rounded hover:border-accent hover:text-accent transition-colors"
        >
          linkedin
        </a>
        <a
          href={`mailto:${profile.email}`}
          className="font-mono text-[13px] border border-line px-3.5 py-2 rounded hover:border-accent hover:text-accent transition-colors"
        >
          email
        </a>
        <a
          href={profile.resumeFile}
          download
          className="font-mono text-[13px] bg-ink text-bg px-3.5 py-2 rounded hover:bg-accent transition-colors"
        >
          ↓ resume
        </a>
      </div>
    </header>
  );
}
