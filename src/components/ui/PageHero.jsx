import Container from "./Container";
import Breadcrumbs from "./Breadcrumbs";
import { asset } from "../../lib/asset";

export default function PageHero({
  eyebrow,
  title,
  lead,
  breadcrumbs,
  actions,
  image,
  imageAlt = "",
}) {
  return (
    <section className="relative overflow-hidden border-b border-line bg-surface-tint">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 -top-24 size-72 rounded-full bg-secondary-100/70 blur-2xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-32 left-1/3 size-72 rounded-full bg-accent-100/40 blur-3xl"
      />
      <Container className="relative py-10 sm:py-14 lg:py-16">
        {breadcrumbs && <Breadcrumbs items={breadcrumbs} />}
        <div className="mt-6 grid items-center gap-10 lg:grid-cols-[minmax(0,1fr)_380px]">
          <div className="max-w-2xl">
            {eyebrow && (
              <p className="text-eyebrow uppercase text-secondary-600">
                {eyebrow}
              </p>
            )}
            <h1 className="mt-3 text-[clamp(2.1rem,4vw,3.4rem)] font-bold leading-[1.08] tracking-[-0.02em] text-primary">
              {title}
            </h1>
            {lead && (
              <p className="mt-5 max-w-xl text-lead text-ink-muted">{lead}</p>
            )}
            {actions && (
              <div className="mt-7 flex flex-wrap items-center gap-3">
                {actions}
              </div>
            )}
          </div>
          {image && (
            <div className="relative hidden lg:block">
              <img
                src={asset(image)}
                alt={imageAlt}
                width="760"
                height="560"
                loading="lazy"
                decoding="async"
                className="aspect-[4/3] w-full rounded-2xl object-cover shadow-card"
              />
              <div
                aria-hidden="true"
                className="absolute -bottom-3 -left-3 -z-10 size-24 rounded-2xl bg-accent/40"
              />
            </div>
          )}
        </div>
      </Container>
    </section>
  );
}
