import Image from "next/image";
import Link from "next/link";

const LINKS = [
  ["YakitoriGuy", "/yakitoriguy"],
  ["YakiGang", "/yakigang"],
] as const;

export default function SiteHeader({ current }: { current?: string }) {
  return (
    <header className="sticky top-0 z-30 border-b border-ink/10 bg-background/90 backdrop-blur-sm">
      <nav className="mx-auto flex max-w-4xl items-center justify-between gap-6 px-6 py-4">
        <Link href="/home" aria-label="YAKIGANG — back to the crossroads" className="shrink-0">
          <Image
            src="/logo.png"
            alt="YAKIGANG"
            width={552}
            height={619}
            className="h-9 w-auto"
          />
        </Link>
        <div className="flex flex-wrap items-center justify-end gap-x-5 gap-y-1">
          {LINKS.map(([label, href]) => (
            <Link
              key={href}
              href={href}
              aria-current={current === href ? "page" : undefined}
              className={`text-[0.65rem] uppercase tracking-[0.2em] transition-colors ${
                current === href
                  ? "text-ink underline underline-offset-4"
                  : "text-ink/60 hover:text-ink"
              }`}
            >
              {label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
