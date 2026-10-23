import { Link } from "react-router-dom";
import { LuArrowRight, LuCheck, LuPhone } from "react-icons/lu";
import Breadcrumbs from "../ui/Breadcrumbs";
import Section from "../ui/Section";
import Container from "../ui/Container";
import SectionHeader from "../ui/SectionHeader";
import IconTile from "../ui/IconTile";
import Card from "../ui/Card";
import Button from "../ui/Button";
import CheckList from "../ui/CheckList";
import Accordion from "../ui/Accordion";
import CtaBand from "../ui/CtaBand";
import { getIcon } from "../ui/icons";
import { faqs, processSteps } from "../../data/content";
import { serviceLines } from "../../data/services";
import { site } from "../../data/site";

export default function ServiceDetail({ line, whoFor = [] }) {
  const related = serviceLines.find((item) => item.slug !== line.slug);

  return (
    <>
      <section className="relative isolate flex min-h-110 items-center overflow-hidden bg-primary lg:min-h-130">
        <img
          src={line.image}
          alt=""
          width="1600"
          height="900"
          fetchPriority="high"
          className="absolute inset-0 -z-20 size-full object-cover object-center"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10 bg-primary/70 lg:bg-linear-to-r lg:from-primary/90 lg:via-primary/60 lg:to-primary/10"
        />

        <Container className="relative py-12 sm:py-16">
          <Breadcrumbs
            tone="light"
            items={[
              { label: "Home", to: "/" },
              { label: "Services", to: "/services" },
              { label: line.name },
            ]}
          />
          <div className="mt-6 max-w-2xl">
            <p className="text-eyebrow uppercase text-secondary-200">
              {line.audience}
            </p>
            <h1 className="mt-3 text-balance text-display text-white">
              {line.name}
            </h1>
            <p className="mt-5 max-w-xl text-lead text-primary-100">
              {line.summary}
            </p>
            <div className="mt-7 flex flex-wrap items-center gap-3">
              <Button
                to="/contact"
                variant="accent"
                size="lg"
                icon={<LuArrowRight aria-hidden="true" className="size-4" />}
              >
                Request care
              </Button>
              <a
                href={site.phoneHref}
                className="inline-flex items-center gap-2 rounded-lg border border-white/40 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:border-white/70 hover:bg-white/10"
              >
                <LuPhone aria-hidden="true" className="size-4" />
                {site.phone}
              </a>
            </div>
          </div>
        </Container>
      </section>

      <Section tone="white" id="support">
        <Container>
          <SectionHeader
            eyebrow="What we support"
            title={`${line.items.length} ways we can help.`}
            lead={line.intro}
          />
          <ul className="mt-10 grid gap-4 md:grid-cols-2">
            {line.items.map((item) => {
              const Icon = getIcon(item.icon);
              return (
                <li
                  key={item.title}
                  className="overflow-hidden rounded-2xl border border-line bg-white shadow-card"
                >
                  <img
                    src={item.image}
                    alt={item.imageAlt}
                    width="1024"
                    height="683"
                    loading="lazy"
                    decoding="async"
                    className="aspect-video w-full object-cover"
                  />
                  <div className="p-6">
                    <div className="flex items-start gap-4">
                      <IconTile icon={Icon} tone="secondary" />
                      <div>
                        <h3 className="text-base font-semibold text-ink">
                          {item.title}
                        </h3>
                        <p className="mt-1.5 text-sm leading-relaxed text-ink-muted">
                          {item.summary}
                        </p>
                      </div>
                    </div>
                    <ul className="mt-4 grid gap-2 border-t border-line pt-4">
                      {item.outcomes.map((outcome) => (
                        <li
                          key={outcome}
                          className="flex items-start gap-2 text-sm text-ink-muted"
                        >
                          <LuCheck
                            aria-hidden="true"
                            className="mt-0.5 size-3.5 shrink-0 text-accent-700"
                          />
                          {outcome}
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              );
            })}
          </ul>
        </Container>
      </Section>

      <Section tone="muted">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-start">
            <div>
              <SectionHeader
                eyebrow="Who it is for"
                title="Support shaped around the person."
                lead="Every package starts with an assessment, so support matches the person rather than a fixed template."
              />
              <CheckList items={whoFor} columns={1} className="mt-6" />
              <div className="mt-7">
                <Button
                  to="/process"
                  variant="secondary"
                  icon={<LuArrowRight aria-hidden="true" className="size-4" />}
                >
                  See our five-step process
                </Button>
              </div>
            </div>

            <Card tone="white" className="p-6 sm:p-8">
              <h3 className="text-h3 text-ink">How support starts</h3>
              <ol className="mt-5 space-y-4">
                {processSteps.map((step) => (
                  <li key={step.number} className="flex gap-3.5">
                    <span className="mt-0.5 inline-flex size-7 shrink-0 items-center justify-center rounded-full bg-surface-tint text-xs font-bold text-primary">
                      {step.number}
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-ink">
                        {step.title}
                      </p>
                      <p className="mt-0.5 text-sm leading-relaxed text-ink-muted">
                        {step.summary}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>
            </Card>
          </div>
        </Container>
      </Section>

      <Section tone="white">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr]">
            <SectionHeader
              eyebrow="Common questions"
              title="Questions families ask us."
              lead="If your question is not here, call us — we would rather answer it directly."
            />
            <Accordion items={faqs.slice(0, 4)} />
          </div>
        </Container>
      </Section>

      {related && (
        <Section tone="muted" space="tight">
          <Container>
            <div className="flex flex-col gap-5 rounded-2xl border border-line bg-white p-6 shadow-card sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-eyebrow uppercase text-secondary-600">
                  Also available
                </p>
                <h2 className="mt-2 text-h3 text-ink">{related.name}</h2>
                <p className="mt-1.5 text-sm text-ink-muted">
                  {related.summary}
                </p>
              </div>
              <Link
                to={related.path}
                className="inline-flex shrink-0 items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-secondary-700"
              >
                Explore {related.shortName}
                <LuArrowRight aria-hidden="true" className="size-4" />
              </Link>
            </div>
          </Container>
        </Section>
      )}

      <CtaBand
        eyebrow="Talk to our team"
        title={`Thinking about ${line.name.toLowerCase()}?`}
        lead="Tell us what is happening and we will explain the options, without pressure."
      />
    </>
  );
}
