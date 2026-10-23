import { LuArrowRight, LuPhone } from "react-icons/lu";
import Seo from "../components/ui/Seo";
import Breadcrumbs from "../components/ui/Breadcrumbs";
import Section from "../components/ui/Section";
import Container from "../components/ui/Container";
import SectionHeader from "../components/ui/SectionHeader";
import Button from "../components/ui/Button";
import CheckList from "../components/ui/CheckList";
import IconTile from "../components/ui/IconTile";
import Accordion from "../components/ui/Accordion";
import CtaBand from "../components/ui/CtaBand";
import ProcessSteps from "../components/sections/ProcessSteps";
import { getIcon } from "../components/ui/icons";
import {
  faqCategories,
  familyExpectations,
  familySupport,
} from "../data/content";
import { site } from "../data/site";

const familyFaqs = faqCategories.find((category) => category.id === "families");

export default function ForFamiliesPage() {
  return (
    <>
      <Seo
        title="For families"
        description="What families can expect when arranging care with Cegron Care: a named contact, a written plan, clear costs and regular reviews."
        path="/for-families"
        image="/images/services/adult-04.jpeg"
      />
      <section className="relative isolate flex min-h-110 items-center overflow-hidden bg-primary lg:min-h-130">
        <img
          src="/images/services/adult-04.jpeg"
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
            items={[{ label: "Home", to: "/" }, { label: "For families" }]}
          />
          <div className="mt-6 max-w-2xl">
            <p className="text-eyebrow uppercase text-secondary-200">
              For families
            </p>
            <h1 className="mt-3 text-balance text-display text-white">
              Support that surrounds your loved one — and you.
            </h1>
            <p className="mt-5 max-w-xl text-lead text-primary-100">
              Choosing care for someone you love is a big step. We keep the
              process clear, kind and unhurried, so you know what is happening
              and who to speak to.
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

      <Section tone="white">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
            <div>
              <SectionHeader
                eyebrow="What to expect"
                title="No surprises, and no pressure."
                lead="From the first phone call, we want you to feel clear about what happens next."
              />
              <CheckList items={familyExpectations} className="mt-6" />
            </div>

            <aside className="rounded-2xl border border-line bg-surface-muted p-6 sm:p-7">
              <h2 className="text-base font-semibold text-ink">
                Worried about a loved one?
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                You do not need to know which service to ask for. Describe what
                is happening and we will explain the options.
              </p>
              <a
                href={site.phoneHref}
                className="mt-5 inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary-700"
              >
                <LuPhone aria-hidden="true" className="size-4" />
                {site.phone}
              </a>
              <p className="mt-3 text-xs text-ink-muted">{site.availability}</p>
            </aside>
          </div>
        </Container>
      </Section>

      <Section tone="muted">
        <Container>
          <SectionHeader
            eyebrow="How we work with families"
            title="Practical support, clear communication."
            align="center"
          />
          <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {familySupport.map((item) => {
              const Icon = getIcon(item.icon);
              return (
                <li
                  key={item.title}
                  className="rounded-2xl border border-line bg-white p-6 shadow-card"
                >
                  <IconTile icon={Icon} tone="secondary" />
                  <h3 className="mt-4 text-base font-semibold text-ink">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                    {item.body}
                  </p>
                </li>
              );
            })}
          </ul>
        </Container>
      </Section>

      <ProcessSteps />

      <Section tone="tint">
        <Container>
          <div className="grid items-center gap-8 lg:grid-cols-2">
            <SectionHeader
              eyebrow="For family carers"
              title="You are allowed to take a break."
              lead="Looking after a relative is rewarding but exhausting. Respite care provides planned or short-notice cover so you can rest, knowing routines are being followed."
            />
            <div className="rounded-2xl border border-secondary-100 bg-white p-6 shadow-card">
              <h3 className="text-base font-semibold text-ink">
                Respite and short breaks
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                Hours, overnights or longer breaks, delivered by a familiar team
                wherever possible.
              </p>
              <Button
                to="/services/adult-homecare"
                variant="secondary"
                size="sm"
                className="mt-4"
                icon={<LuArrowRight aria-hidden="true" className="size-4" />}
              >
                View adult homecare
              </Button>
            </div>
          </div>
        </Container>
      </Section>

      <Section tone="white">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr]">
            <SectionHeader
              eyebrow="Family questions"
              title="Before you get in touch."
            />
            {familyFaqs && <Accordion items={familyFaqs.items} />}
          </div>
        </Container>
      </Section>

      <CtaBand
        eyebrow="Ready when you are"
        title="Start with a conversation."
        lead="No pressure, no obligation — just clear answers about the support available."
      />
    </>
  );
}
