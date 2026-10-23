import { LuArrowRight, LuPhone } from "react-icons/lu";
import Seo from "../components/ui/Seo";
import PageHero from "../components/ui/PageHero";
import Section from "../components/ui/Section";
import Container from "../components/ui/Container";
import SectionHeader from "../components/ui/SectionHeader";
import Button from "../components/ui/Button";
import CheckList from "../components/ui/CheckList";
import Accordion from "../components/ui/Accordion";
import CtaBand from "../components/ui/CtaBand";
import ProcessSteps from "../components/sections/ProcessSteps";
import { faqs } from "../data/content";
import { site } from "../data/site";

export default function ProcessPage() {
  return (
    <>
      <Seo
        title="Our process"
        description="How Cegron Care arranges support: consultation, assessment and care planning, staff matching, reviews and ongoing communication."
        path="/process"
      />
      <PageHero
        eyebrow="How it works"
        title="A clear path to care."
        lead="Five steps that keep you informed and involved, from the first conversation to ongoing reviews."
        breadcrumbs={[{ label: "Home", to: "/" }, { label: "Our process" }]}
        actions={
          <Button
            to="/contact"
            icon={<LuArrowRight aria-hidden="true" className="size-4" />}
          >
            Start with a conversation
          </Button>
        }
      />

      <ProcessSteps showDetail />

      <Section tone="muted">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
            <div>
              <SectionHeader
                eyebrow="What you can expect"
                title="No surprises, and no pressure."
                lead="Choosing care is a significant decision. These are the things we make sure of before support begins."
              />
              <CheckList
                className="mt-6"
                items={[
                  "A named contact who knows your situation",
                  "A written plan you have seen and agreed",
                  "Clear information about visit times and costs",
                  "Staff introduced before support starts where possible",
                  "Regular reviews involving the person and, with consent, family",
                  "A straightforward way to raise a concern",
                ]}
              />
            </div>

            <aside className="rounded-2xl border border-line bg-white p-6 shadow-card sm:p-8">
              <h2 className="text-h3 text-ink">Prefer to talk it through?</h2>
              <p className="mt-3 text-sm leading-relaxed text-ink-muted">
                Call the team and describe what is happening. We will explain
                what we can offer and what happens next.
              </p>
              <a
                href={site.phoneHref}
                className="mt-5 inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary-700"
              >
                <LuPhone aria-hidden="true" className="size-4" />
                {site.phone}
              </a>
              <p className="mt-4 text-xs text-ink-muted">
                {site.availability}
              </p>
            </aside>
          </div>
        </Container>
      </Section>

      <Section tone="white">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr]">
            <SectionHeader
              eyebrow="Questions"
              title="Before you get in touch."
              lead="Some of the things families and professionals ask us most often."
            />
            <Accordion items={faqs} />
          </div>
        </Container>
      </Section>

      <CtaBand
        eyebrow="Ready when you are"
        title="Let’s talk about the support you need."
        lead="No pressure and no obligation — just a clear conversation about the options."
      />
    </>
  );
}
