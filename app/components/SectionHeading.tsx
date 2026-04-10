type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  copy?: string;
  align?: "left" | "center";
};

export default function SectionHeading({
  eyebrow,
  title,
  copy,
  align = "left",
}: SectionHeadingProps) {
  const alignment = align === "center" ? "text-center items-center" : "text-left items-start";

  return (
    <div className={`flex max-w-3xl flex-col gap-3 ${alignment}`}>
      <p className="font-[family:var(--font-space-grotesk)] text-xs font-bold uppercase tracking-[0.32em] text-[var(--accent)]">
        {eyebrow}
      </p>
      <h2 className="font-[family:var(--font-space-grotesk)] text-[clamp(2.1rem,4vw,3.7rem)] font-bold leading-[0.96] tracking-[-0.06em] text-[var(--foreground)]">
        {title}
      </h2>
      {copy ? (
        <p className="max-w-2xl whitespace-pre-line text-base leading-8 text-[var(--muted)]">{copy}</p>
      ) : null}
    </div>
  );
}
