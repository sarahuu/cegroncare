import { Link } from "react-router-dom";
import { LuArrowRight, LuArrowUpRight, LuMapPin } from "react-icons/lu";
import Container from "../ui/Container";
import Section from "../ui/Section";
import SectionHeader from "../ui/SectionHeader";
import { areas } from "../../data/content";

export default function AreasServed() {
  return (
    <Section tone="tint">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <SectionHeader
            eyebrow="Areas covered"
            title="Care across Aberdeen City and Aberdeenshire."
            lead="Our team covers the city and the wider shire. If you are unsure whether we reach you, ask — we will give you a straight answer."
          />

          <div className="grid gap-4 sm:grid-cols-2">
            {areas.map((area) => (
              <div
                key={area.name}
                className="rounded-2xl border border-secondary-100 bg-white p-6 shadow-card"
              >
                <span className="inline-flex size-10 items-center justify-center rounded-xl bg-accent-50 text-accent-800">
                  <LuMapPin aria-hidden="true" className="size-5" />
                </span>
                <h3 className="mt-4 text-base font-semibold text-ink">
                  {area.name}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                  {area.body}
                </p>
              </div>
            ))}
            <div className="flex flex-wrap items-center gap-x-6 gap-y-3 sm:col-span-2">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-secondary-700"
              >
                Check support in your area
                <LuArrowRight aria-hidden="true" className="size-4" />
              </Link>
              <a
                href="https://www.google.com/maps/search/?api=1&query=Aberdeen+City+and+Aberdeenshire"
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-secondary-700"
              >
                Open map
                <LuArrowUpRight aria-hidden="true" className="size-4" />
              </a>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
