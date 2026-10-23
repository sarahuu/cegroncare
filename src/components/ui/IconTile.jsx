const tones = {
  primary: "bg-primary-50 text-primary-700",
  secondary: "bg-surface-tint text-secondary-700",
  accent: "bg-accent-50 text-accent-800",
  solid: "bg-primary text-white",
  solidAccent: "bg-accent text-primary-900",
};

const sizes = {
  sm: "size-9 rounded-lg",
  md: "size-11 rounded-xl",
  lg: "size-14 rounded-2xl",
};

export default function IconTile({
  icon: Icon,
  tone = "secondary",
  size = "md",
  className = "",
}) {
  return (
    <span
      aria-hidden="true"
      className={`inline-flex shrink-0 items-center justify-center ${
        tones[tone] ?? tones.secondary
      } ${sizes[size] ?? sizes.md} ${className}`}
    >
      <Icon className={size === "lg" ? "size-7" : size === "sm" ? "size-4" : "size-5"} />
    </span>
  );
}
