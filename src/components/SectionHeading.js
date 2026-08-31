export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  light = false,
}) {
  const alignClass = align === "left" ? "text-left items-start" : "text-center items-center";

  return (
    <div className={`flex flex-col ${alignClass} mb-12`}>
      {eyebrow && (
        <span
          className={`uppercase tracking-widest text-sm font-semibold mb-3 ${
            light ? "text-brand-400" : "text-brand-600"
          }`}
        >
          {eyebrow}
        </span>
      )}
      <h2
        className={`text-3xl sm:text-4xl font-extrabold ${
          light ? "text-white" : "text-ink-600"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-4 max-w-2xl text-lg ${
            light ? "text-ink-100/80" : "text-ink-400"
          } ${align === "left" ? "" : "mx-auto"}`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
