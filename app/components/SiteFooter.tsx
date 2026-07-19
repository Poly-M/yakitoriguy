import { SOCIALS } from "../content";

export default function SiteFooter() {
  return (
    <footer className="mx-auto flex w-full max-w-4xl flex-col gap-8 border-t border-ink/10 px-6 py-14">
      <div className="flex flex-wrap items-center gap-x-7 gap-y-2">
        {SOCIALS.map((s) => (
          <a
            key={s.label}
            href={s.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[0.65rem] uppercase tracking-[0.25em] text-ink/60 transition-colors hover:text-ink"
          >
            {s.label}
          </a>
        ))}
      </div>
      <div className="flex items-center justify-between">
        <p className="text-[0.65rem] uppercase tracking-[0.25em] text-ink/40">
          © {new Date().getFullYear()} YAKIGANG
        </p>
        <p className="font-mono text-xs text-ink/30">焼</p>
      </div>
    </footer>
  );
}
