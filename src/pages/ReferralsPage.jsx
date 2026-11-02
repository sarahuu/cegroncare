import { LuArrowRight, LuPhone, LuUsers } from "react-icons/lu";
import Seo from "../components/ui/Seo";
import Breadcrumbs from "../components/ui/Breadcrumbs";
import Section from "../components/ui/Section";
import Container from "../components/ui/Container";
import SectionHeader from "../components/ui/SectionHeader";
import Button from "../components/ui/Button";
import CheckList from "../components/ui/CheckList";
import ReferralForm from "../components/forms/ReferralForm";
import { partners, professionalNeeds } from "../data/content";
import { site } from "../data/site";
import { asset } from "../lib/asset";

export default function ReferralsPage() {
  return (
    <>
      <Seo
        title="Professional referrals"
        description="Referral pathways for social workers, hospital discharge teams, occupational therapists and community services in Aberdeen City and Aberdeenshire."
        path="/referrals"
        image="/images/services/cyp-04.jpeg"
      />
      <section className="relative isolate flex min-h-110 items-center overflow-hidden bg-primary lg:min-h-130">
        <img
          src={asset("/images/services/cyp-04.jpeg")}
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
            items={[{ label: "Home", to: "/" }, { label: "Referrals" }]}
          />
          <div className="mt-6 max-w-2xl">
            <p className="text-eyebrow uppercase text-secondary-200">
              For professionals
            </p>
            <h1 className="mt-3 text-balance text-display text-white">
              A direct line for health and social care partners.
            </h1>
            <p className="mt-5 max-w-xl text-lead text-primary-100">
              We work alongside social workers, hospital teams and community
              services to arrange responsive, person-centred support. Tell us
              what is needed and we will tell you honestly what we can provide.
            </p>
            <div className="mt-7 flex flex-wrap items-center gap-3">
              <Button
                href="#referral-form"
                variant="accent"
                size="lg"
                icon={<LuArrowRight aria-hidden="true" className="size-4" />}
              >
                Start a referral
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
          <SectionHeader
            eyebrow="Who we work with"
            title="Referral partners across Aberdeen City and Aberdeenshire."
            lead="We welcome referrals from professionals who are coordinating care, discharge or ongoing support."
          />
          <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {partners.map((partner) => (
              <li
                key={partner}
                className="flex items-center gap-3 rounded-xl border border-line bg-surface-muted px-4 py-3 text-sm font-medium text-ink"
              >
                <LuUsers
                  aria-hidden="true"
                  className="size-4 shrink-0 text-secondary-600"
                />
                {partner}
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      <Section tone="muted">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
            <div className="lg:sticky lg:top-32">
              <SectionHeader
                eyebrow="What to include"
                title="Help us respond quickly."
                lead="The more context you can give, the faster we can assess whether and how we can help."
              />
              <CheckList items={professionalNeeds} className="mt-6" />
              <div className="mt-6 rounded-xl border border-secondary-200 bg-white p-5">
                <p className="text-sm font-semibold text-ink">
                  Urgent or hospital discharge referral?
                </p>
                <p className="mt-1.5 text-sm leading-relaxed text-ink-muted">
                  Call us as well as sending the form. Response times and
                  same-day starts depend on staffing and assessment, so we will
                  be clear about what is possible.
                </p>
                <a
                  href={site.phoneHref}
                  className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-secondary-700"
                >
                  <LuPhone aria-hidden="true" className="size-4" />
                  {site.phone}
                </a>
              </div>
            </div>

            <div
              id="referral-form"
              className="scroll-mt-32 rounded-2xl border border-line bg-white p-6 shadow-card sm:p-8"
            >
              <h2 className="text-h3 text-ink">Make a referral</h2>
              <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                Please share only the information needed to assess the referral.
                Use initials or a reference rather than the person's full name.
              </p>
              <div className="mt-6">
                <ReferralForm />
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Section tone="white" space="tight">
        <Container>
          <div className="flex flex-col gap-5 rounded-2xl bg-primary p-6 text-white sm:flex-row sm:items-center sm:justify-between sm:p-8">
            <div>
              <p className="text-eyebrow uppercase text-secondary-200">
                For families
              </p>
              <h2 className="mt-2 text-h3 text-white">
                Looking for care for someone you love?
              </h2>
              <p className="mt-1.5 text-sm text-primary-100">
                You do not need a professional referral to talk to us.
              </p>
            </div>
            <Button
              to="/contact"
              variant="accent"
              icon={<LuArrowRight aria-hidden="true" className="size-4" />}
            >
              Contact the team
            </Button>
          </div>
        </Container>
      </Section>
    </>
  );
}
