const tones = {
  white: "bg-background text-ink",
  muted: "bg-surface-muted text-ink",
  tint: "bg-surface-tint text-ink",
  navy: "bg-primary text-white",
};

const spacing = {
  none: "",
  tight: "py-12 lg:py-16",
  default: "py-16 lg:py-24",
};

export default function Section({
  as: Tag = "section",
  tone = "white",
  space = "default",
  id,
  className = "",
  children,
  ...rest
}) {
  return (
    <Tag
      id={id}
      className={`${tones[tone] ?? tones.white} ${spacing[space] ?? spacing.default} ${className}`}
      {...rest}
    >
      {children}
    </Tag>
  );
}
