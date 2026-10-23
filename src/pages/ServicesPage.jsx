import { LuArrowRight } from "react-icons/lu";
import Seo from "../components/ui/Seo";
import PageHero from "../components/ui/PageHero";
import Section from "../components/ui/Section";
import Container from "../components/ui/Container";
import Button from "../components/ui/Button";
import Accordion from "../components/ui/Accordion";
import CtaBand from "../components/ui/CtaBand";
import StatsBar from "../components/sections/StatsBar";
import ValuesGrid from "../components/sections/ValuesGrid";
import QualityTrust from "../components/sections/QualityTrust";
import { serviceLines } from "../data/services";
import { faqs } from "../data/content";
import { site } from "../data/site";

export default function ServicesPage() {
  return (
    <>
      <Seo
        title="Services"
        description="Adult homecare and children and young people support services from Cegron Care across Aberdeen City and Aberdeenshire."
        path="/services"
      />
      <PageHero
        eyebrow="Our services"
        title="Specialist care, shaped around the person."
        lead="Two service lines, covering 20 different types of support. Every package is planned around assessed needs, agreed outcomes and the person's own routines."
        breadcrumbs={[{ label: "Home", to: "/" }, { label: "Services" }]}
        actions={
          <>
            <Button
              to="/contact"
              icon={<LuArrowRight aria-hidden="true" className="size-4" />}
            >
              Request care
            </Button>
            <Button to="/referrals" variant="secondary">
              Make a referral
            </Button>
          </>
        }
      />

      <Section tone="white">
        <Container>
          <div className="grid gap-6 lg:grid-cols-2">
            {serviceLines.map((line) => (
              <article
                key={line.slug}
                className="flex flex-col rounded-2xl border border-line bg-white p-6 shadow-card sm:p-8"
              >
                <p className="text-eyebrow uppercase text-secondary-600">
                  {line.audience}
                </p>
                <h2 className="mt-2 text-h3 text-ink">{line.name}</h2>
                <p className="mt-3 text-sm leading-relaxed text-ink-muted">
                  {line.intro}
                </p>

                <ul className="mt-6 grid gap-x-6 gap-y-2.5 border-t border-line pt-5 sm:grid-cols-2">
                  {line.items.map((item) => (
                    <li
                      key={item.title}
                      className="flex items-start gap-2 text-sm text-ink"
                    >
                      <span
                        aria-hidden="true"
                        className="mt-1.5 size-1.5 shrink-0 rounded-full bg-accent-600"
                      />
                      {item.title}
                    </li>
                  ))}
                </ul>

                <div className="mt-6 flex flex-wrap items-center justify-between gap-3 border-t border-line pt-5">
                  <Button to={line.path} variant="secondary" size="sm">
                    Explore {line.shortName}
                  </Button>
                  <a
                    href={site.phoneHref}
                    className="text-sm font-semibold text-primary transition-colors hover:text-secondary-700"
                  >
                    Ask a question
                  </a>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </Section>

      <StatsBar />
      <ValuesGrid compact />

      <Section tone="muted">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr]">
            <div>
              <p className="text-eyebrow uppercase text-secondary-600">
                Not sure where to start?
              </p>
              <h2 className="mt-3 text-h2 text-ink">
                Tell us what is happening and we will help you work it out.
              </h2>
              <p className="mt-4 text-lead text-ink-muted">
                You do not need to know which service to ask for. Describe the
                situation and our team will explain the options.
              </p>
              <div className="mt-6">
                <Button
                  to="/contact"
                  icon={<LuArrowRight aria-hidden="true" className="size-4" />}
                >
                  Contact the team
                </Button>
              </div>
            </div>
            <Accordion items={faqs} />
          </div>
        </Container>
      </Section>

      <QualityTrust />
      <CtaBand />
    </>
  );
}
