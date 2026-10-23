export default function Stat({ value, label, tone = "light" }) {
  const isLight = tone === "light";
  return (
    <div>
      <p
        className={`text-[2.4rem] font-bold leading-none ${
          isLight ? "text-white" : "text-primary"
        }`}
      >
        {value}
      </p>
      <p
        className={`mt-2 text-sm ${
          isLight ? "text-primary-100" : "text-ink-muted"
        }`}
      >
        {label}
      </p>
    </div>
  );
}
