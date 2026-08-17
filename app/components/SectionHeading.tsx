import { bebasNeue } from "../fonts";

export default function SectionHeading({
  no,
  title,
  sub,
  variant = "line",
}: {
  no: string;
  title: string;
  sub?: string;
  variant?: "line" | "bold";
}) {
  if (variant === "bold") {
    return (
      <div className="mb-10 flex flex-col gap-4">
        <span className="inline-flex w-fit items-center rounded-full bg-accent px-4 py-1.5 text-[0.65rem] font-medium uppercase tracking-[0.12em] text-background">
          {no}
        </span>
        <h2
          className={`${bebasNeue.className} text-3xl uppercase leading-none tracking-wide sm:text-4xl`}
        >
          {title}
        </h2>
        {sub && (
          <p className="max-w-md text-sm leading-relaxed text-ink/70">{sub}</p>
        )}
      </div>
    );
  }

  return (
    <div className="mb-10 flex flex-col gap-3">
      <div className="flex items-baseline gap-4">
        <span className="font-mono text-xs text-accent">{no}</span>
        <h2 className="text-[0.75rem] uppercase tracking-[0.35em] text-ink">
          {title}
        </h2>
      </div>
      {sub && (
        <p className="max-w-md text-sm leading-relaxed text-ink/70">{sub}</p>
      )}
      <div className="h-px w-full bg-ink/10" />
    </div>
  );
}
