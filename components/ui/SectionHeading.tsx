type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
}: SectionHeadingProps) {
  return (
    <div className="mb-12 max-w-2xl">
      <p className="mb-3 font-mono text-sm text-accent">{eyebrow}</p>
      <h2 className="text-3xl font-bold tracking-normal text-foreground md:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-base leading-relaxed text-muted">
          {description}
        </p>
      ) : null}
    </div>
  );
}
