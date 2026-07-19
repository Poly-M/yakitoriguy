export default function SectionHeading({
  no,
  title,
  sub,
}: {
  no: string;
  title: string;
  sub?: string;
}) {
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
