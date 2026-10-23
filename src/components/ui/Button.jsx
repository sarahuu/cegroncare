import { Link } from "react-router-dom";

const variants = {
  primary:
    "bg-primary text-white hover:bg-primary-700 active:bg-primary-800 border border-primary",
  secondary:
    "bg-white text-primary border border-primary-200 hover:border-primary-400 hover:bg-surface-muted",
  accent:
    "bg-accent text-primary-900 border border-accent hover:bg-accent-300 active:bg-accent-400",
  light:
    "bg-white text-primary border border-white hover:bg-secondary-50",
  outlineLight:
    "bg-transparent text-white border border-white/40 hover:bg-white/10 hover:border-white/70",
};

const sizes = {
  sm: "px-4 py-2 text-sm",
  md: "px-5 py-2.5 text-[0.95rem]",
  lg: "px-6 py-3 text-base",
};

export default function Button({
  to,
  href,
  variant = "primary",
  size = "md",
  icon,
  className = "",
  children,
  ...rest
}) {
  const classes = `inline-flex items-center justify-center gap-2 rounded-lg font-semibold transition-colors duration-200 ${
    variants[variant] ?? variants.primary
  } ${sizes[size] ?? sizes.md} ${className}`;

  const content = (
    <>
      {children}
      {icon && <span className="shrink-0">{icon}</span>}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={classes} {...rest}>
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={classes} {...rest}>
        {content}
      </a>
    );
  }

  return (
    <button type="button" className={classes} {...rest}>
      {content}
    </button>
  );
}
