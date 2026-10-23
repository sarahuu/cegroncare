import { LuCheck } from "react-icons/lu";

const tones = {
  dark: "text-ink",
  muted: "text-ink-muted",
  light: "text-primary-100",
};

export default function CheckList({
  items = [],
  columns = 1,
  tone = "dark",
  iconTone = "accent",
  className = "",
}) {
  return (
    <ul
      className={`grid gap-3 ${
        columns === 2 ? "sm:grid-cols-2" : ""
      } ${tones[tone] ?? tones.dark} ${className}`}
    >
      {items.map((item) => (
        <li key={item} className="flex gap-3">
          <span
            className={`mt-0.5 inline-flex size-5 shrink-0 items-center justify-center rounded-full ${
              iconTone === "light"
                ? "bg-white/15 text-secondary-200"
                : "bg-accent-50 text-accent-800"
            }`}
          >
            <LuCheck aria-hidden="true" className="size-3.5" />
          </span>
          <span className="text-[0.95rem] leading-relaxed">{item}</span>
        </li>
      ))}
    </ul>
  );
}
