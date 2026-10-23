const tones = {
  primary: "bg-primary-50 text-primary-800 border-primary-100",
  secondary: "bg-surface-tint text-primary-800 border-secondary-100",
  accent: "bg-accent-50 text-accent-800 border-accent-100",
  neutral: "bg-surface-muted text-ink-muted border-line",
  light: "bg-white/10 text-white border-white/20",
};

export default function Pill({ icon: Icon, tone = "secondary", children, className = "" }) {
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-semibold ${
        tones[tone] ?? tones.secondary
      } ${className}`}
    >
      {Icon && <Icon aria-hidden="true" className="size-3.5 shrink-0" />}
      {children}
    </span>
  );
}
