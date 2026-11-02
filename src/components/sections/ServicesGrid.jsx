import { Link } from "react-router-dom";
import { LuArrowRight } from "react-icons/lu";
import Container from "../ui/Container";
import Section from "../ui/Section";
import SectionHeader from "../ui/SectionHeader";
import Button from "../ui/Button";
import { asset } from "../../lib/asset";
import { serviceLines } from "../../data/services";

export default function ServicesGrid() {
  return (
    <Section id="services" tone="white">
      <Container>
        <SectionHeader
          eyebrow="Our services"
          title="Two service lines, one standard of care."
          lead="Every package is planned around the person — their routines, preferences and agreed outcomes."
          action={
            <Button to="/services" variant="secondary" icon={<LuArrowRight aria-hidden="true" className="size-4" />}>
              View all services
            </Button>
          }
        />

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {serviceLines.map((line) => (
            <article
              key={line.slug}
              className="group flex flex-col overflow-hidden rounded-2xl border border-line bg-white shadow-card transition duration-200 hover:-translate-y-0.5 hover:shadow-card-hover"
            >
              <img
                src={asset(line.image)}
                alt={line.imageAlt}
                width="1200"
                height="800"
                loading="lazy"
                decoding="async"
                className="aspect-[16/9] w-full object-cover"
              />
              <div className="flex flex-1 flex-col p-6 sm:p-7">
                <p className="text-eyebrow uppercase text-secondary-600">
                  {line.audience}
                </p>
                <h3 className="mt-2 text-h3 text-ink">
                  <Link to={line.path} className="hover:text-primary">
                    {line.name}
                  </Link>
                </h3>
                <p className="mt-3 text-[0.95rem] leading-relaxed text-ink-muted">
                  {line.summary}
                </p>

                <ul className="mt-5 flex flex-wrap gap-2">
                  {line.items.slice(0, 4).map((item) => (
                    <li
                      key={item.title}
                      className="rounded-full bg-surface-muted px-2.5 py-1 text-xs font-medium text-primary-700"
                    >
                      {item.title}
                    </li>
                  ))}
                  <li className="rounded-full bg-surface-muted px-2.5 py-1 text-xs font-medium text-primary-700">
                    +{line.items.length - 4} more
                  </li>
                </ul>

                <div className="mt-6 flex items-center justify-between border-t border-line pt-5">
                  <Link
                    to={line.path}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-secondary-700"
                  >
                    Explore {line.shortName}
                    <LuArrowRight
                      aria-hidden="true"
                      className="size-4 transition-transform group-hover:translate-x-0.5"
                    />
                  </Link>
                  <span className="text-xs text-ink-muted">
                    {line.items.length} support services
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </Section>
  );
}
