import { LuArrowRight, LuPhone, LuUsers } from "react-icons/lu";
import Seo from "../components/ui/Seo";
import PageHero from "../components/ui/PageHero";
import Section from "../components/ui/Section";
import Container from "../components/ui/Container";
import SectionHeader from "../components/ui/SectionHeader";
import Button from "../components/ui/Button";
import CheckList from "../components/ui/CheckList";
import ReferralForm from "../components/forms/ReferralForm";
import { partners, professionalNeeds } from "../data/content";
import { site } from "../data/site";

export default function ReferralsPage() {
  return (
    <>
      <Seo
        title="Professional referrals"
        description="Referral pathways for social workers, hospital discharge teams, occupational therapists and community services in Aberdeen City and Aberdeenshire."
        path="/referrals"
        image="/images/c19.jpg"
      />
      <PageHero
        eyebrow="For professionals"
        title="A direct line for health and social care partners."
        lead="We work alongside social workers, hospital teams and community services to arrange responsive, person-centred support. Tell us what is needed and we will tell you honestly what we can provide."
        image="/images/c19.jpg"
        imageAlt="Two colleagues celebrating a successful referral in an office"
        breadcrumbs={[{ label: "Home", to: "/" }, { label: "Referrals" }]}
        actions={
          <>
            <a
              href="#referral-form"
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary-700"
            >
              Start a referral
              <LuArrowRight aria-hidden="true" className="size-4" />
            </a>
            <a
              href={site.phoneHref}
              className="inline-flex items-center gap-2 rounded-lg border border-primary-200 px-6 py-3 text-sm font-semibold text-primary transition-colors hover:border-primary-400"
            >
              <LuPhone aria-hidden="true" className="size-4" />
              {site.phone}
            </a>
          </>
        }
      />

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
