import SectionLabel from "./SectionLabel";
import { profile } from "@/lib/data";

export default function Coffee() {
  return (
    <section
      id="coffee"
      className="mx-auto max-w-3xl px-6 py-14 border-t border-line"
    >
      <SectionLabel>coffee with me</SectionLabel>
      <p className="text-[17px] max-w-xl text-[#2b2e33]">
        Got an idea, a job, or just want to talk infra? Drop a note below, or
        reach me directly at{" "}
        <a
          href={`mailto:${profile.email}`}
          className="text-accent underline underline-offset-2"
        >
          {profile.email}
        </a>
        .
      </p>

      <form
        className="mt-7 grid gap-4 max-w-md"
        action={`mailto:${profile.email}`}
        method="post"
        encType="text/plain"
      >
        <div>
          <label
            htmlFor="message"
            className="font-mono text-xs text-ink-soft uppercase tracking-wide block mb-1.5"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            required
            placeholder="What's on your mind?"
            className="w-full border border-line bg-white px-3 py-2.5 text-sm rounded focus-visible:outline-2 focus-visible:outline-accent"
          />
        </div>
        <div>
          <label
            htmlFor="name"
            className="font-mono text-xs text-ink-soft uppercase tracking-wide block mb-1.5"
          >
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            placeholder="Your name"
            className="w-full border border-line bg-white px-3 py-2.5 text-sm rounded focus-visible:outline-2 focus-visible:outline-accent"
          />
        </div>
        <div>
          <label
            htmlFor="contact"
            className="font-mono text-xs text-ink-soft uppercase tracking-wide block mb-1.5"
          >
            Email or phone
          </label>
          <input
            id="contact"
            name="contact"
            type="text"
            required
            placeholder="How can I reach you?"
            className="w-full border border-line bg-white px-3 py-2.5 text-sm rounded focus-visible:outline-2 focus-visible:outline-accent"
          />
        </div>
        <button
          type="submit"
          className="justify-self-start font-mono text-sm bg-accent text-white px-5 py-2.5 rounded hover:opacity-90 transition-opacity"
        >
          send answers →
        </button>
      </form>
    </section>
  );
}
