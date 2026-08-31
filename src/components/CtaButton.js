import Link from "next/link";

const VARIANTS = {
  primary: "bg-brand-500 text-ink-700 hover:bg-brand-600",
  outline:
    "border-2 border-brand-500 text-brand-600 hover:bg-brand-500 hover:text-ink-700",
  "outline-light":
    "border-2 border-white text-white hover:bg-white hover:text-ink-700",
  dark: "bg-ink-600 text-white hover:bg-ink-700",
};

export default function CtaButton({
  href,
  children,
  variant = "primary",
  className = "",
  ...props
}) {
  const classes = `inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-semibold transition-colors ${VARIANTS[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes} {...props}>
        {children}
      </Link>
    );
  }

  return (
    <button type="button" className={classes} {...props}>
      {children}
    </button>
  );
}
