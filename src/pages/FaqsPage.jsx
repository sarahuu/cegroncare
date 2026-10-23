import { LuArrowRight, LuChevronRight } from "react-icons/lu";
import Seo from "../components/ui/Seo";
import PageHero from "../components/ui/PageHero";
import Section from "../components/ui/Section";
import Container from "../components/ui/Container";
import SectionHeader from "../components/ui/SectionHeader";
import Button from "../components/ui/Button";
import Accordion from "../components/ui/Accordion";
import CtaBand from "../components/ui/CtaBand";
import { faqCategories } from "../data/content";

export default function FaqsPage() {
  return (
    <>
      <Seo
        title="FAQs"
        description="Answers to common questions about arranging care with Cegron Care, including assessments, costs, referrals, family involvement and safety."
        path="/faqs"
      />
      <PageHero
        eyebrow="FAQs"
        title="Questions, answered."
        lead="Common questions about arranging care, costs, referrals and what to expect. If your question is not here, call us — we would rather answer it directly."
        breadcrumbs={[{ label: "Home", to: "/" }, { label: "FAQs" }]}
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
          <div className="grid gap-10 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-14">
            <nav aria-label="FAQ sections" className="lg:sticky lg:top-32 lg:self-start">
              <p className="text-eyebrow uppercase text-secondary-600">
                On this page
              </p>
              <ul className="mt-4 space-y-1">
                {faqCategories.map((category) => (
                  <li key={category.id}>
                    <a
                      href={`#${category.id}`}
                      className="flex items-center justify-between gap-2 rounded-lg px-3 py-2 text-sm text-ink-muted transition-colors hover:bg-surface-muted hover:text-primary"
                    >
                      {category.title}
                      <LuChevronRight aria-hidden="true" className="size-3.5" />
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="space-y-12">
              {faqCategories.map((category) => (
                <section key={category.id} id={category.id} className="scroll-mt-32">
                  <SectionHeader
                    title={category.title}
                    as="h2"
                    className="[&_h2]:text-h3"
                  />
                  <div className="mt-5">
                    <Accordion items={category.items} />
                  </div>
                </section>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      <CtaBand
        eyebrow="Still have a question?"
        title="Talk to a real person."
        lead="Call or send an enquiry and we will give you a straight answer about the support available."
      />
    </>
  );
}
