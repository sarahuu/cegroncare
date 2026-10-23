const tones = {
  white: "bg-white border-line",
  muted: "bg-surface-muted border-line",
  tint: "bg-surface-tint border-secondary-100",
  navy: "bg-primary-800 border-primary-700 text-white",
};

export default function Card({
  as: Tag = "div",
  tone = "white",
  hover = false,
  className = "",
  children,
  ...rest
}) {
  return (
    <Tag
      className={`rounded-2xl border p-6 ${
        tones[tone] ?? tones.white
      } ${
        hover
          ? "transition duration-200 hover:-translate-y-0.5 hover:shadow-card-hover"
          : "shadow-card"
      } ${className}`}
      {...rest}
    >
      {children}
    </Tag>
  );
}
