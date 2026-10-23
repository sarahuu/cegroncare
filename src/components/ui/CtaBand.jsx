import { LuArrowRight, LuPhone } from "react-icons/lu";
import Container from "./Container";
import Button from "./Button";
import { site } from "../../data/site";

export default function CtaBand({
  eyebrow = "Ready to talk?",
  title,
  lead,
  primary = { label: "Request care", to: "/contact" },
  secondary = { label: "Make a referral", to: "/referrals" },
}) {
  return (
    <section className="border-t border-line bg-surface-tint">
      <Container className="relative py-14 lg:py-16">
        <div className="relative overflow-hidden rounded-3xl border border-secondary-200 bg-white p-7 shadow-card sm:p-10">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-20 -top-20 size-56 rounded-full bg-surface-tint"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-24 right-24 size-56 rounded-full bg-accent-50"
          />
          <div className="relative grid gap-8 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-center">
            <div className="max-w-2xl">
              <p className="text-eyebrow uppercase text-secondary-600">
                {eyebrow}
              </p>
              <h2 className="mt-3 text-h2 text-ink">
                {title ?? "Compassionate care, every day."}
              </h2>
              <p className="mt-4 text-lead text-ink-muted">
                {lead ??
                  "Speak to our Aberdeen team about care for yourself, a loved one, or to make a professional referral."}
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
              <Button
                to={primary.to}
                variant="primary"
                size="lg"
                icon={<LuArrowRight aria-hidden="true" className="size-4" />}
              >
                {primary.label}
              </Button>
              {secondary && (
                <Button to={secondary.to} variant="secondary" size="lg">
                  {secondary.label}
                </Button>
              )}
              <a
                href={site.phoneHref}
                className="inline-flex items-center justify-center gap-2 rounded-lg px-2 py-2 text-sm font-semibold text-primary transition-colors hover:text-secondary-700"
              >
                <LuPhone aria-hidden="true" className="size-4" />
                {site.phone}
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
