import Container from "../ui/Container";
import { LuBadgeCheck, LuClock, LuShieldCheck, LuUsers } from "react-icons/lu";

const items = [
  {
    title: "Personalised plans",
    body: "Support built around individual needs",
    icon: LuShieldCheck,
  },
  {
    title: "Two service lines",
    body: "Adult homecare and children & young people",
    icon: LuUsers,
  },
  {
    title: "Around the clock",
    body: "Day, night, weekend and overnight support",
    icon: LuClock,
  },
  {
    title: "Person-centred",
    body: "Plans built around individual needs and outcomes",
    icon: LuBadgeCheck,
  },
];

export default function TrustStrip() {
  return (
    <div className="border-y border-line bg-surface-muted">
      <Container className="grid gap-5 py-5 sm:grid-cols-2 lg:grid-cols-4">
        {items.map(({ title, body, icon: Icon }) => (
          <div key={title} className="flex items-start gap-3">
            <span className="mt-0.5 inline-flex size-8 shrink-0 items-center justify-center rounded-lg bg-white text-primary-700 shadow-sm">
              <Icon aria-hidden="true" className="size-4" />
            </span>
            <div>
              <p className="text-sm font-semibold text-ink">{title}</p>
              <p className="text-xs leading-relaxed text-ink-muted">{body}</p>
            </div>
          </div>
        ))}
      </Container>
    </div>
  );
}
