import { LuArrowRight, LuMail, LuMapPin, LuPhone } from "react-icons/lu";
import Seo from "../components/ui/Seo";
import Breadcrumbs from "../components/ui/Breadcrumbs";
import Section from "../components/ui/Section";
import Container from "../components/ui/Container";
import SectionHeader from "../components/ui/SectionHeader";
import Button from "../components/ui/Button";
import CheckList from "../components/ui/CheckList";
import StatsBar from "../components/sections/StatsBar";
import ValuesGrid from "../components/sections/ValuesGrid";
import ServicesGrid from "../components/sections/ServicesGrid";
import LeadershipSection from "../components/sections/LeadershipSection";
import ForFamiliesCta from "../components/sections/ForFamiliesCta";
import QualityTrust from "../components/sections/QualityTrust";
import CtaBand from "../components/ui/CtaBand";
import { site } from "../data/site";
import { asset } from "../lib/asset";

export default function AboutPage() {
  return (
    <>
      <Seo
        title="About us"
        description="Cegron Care is a healthcare provider in Aberdeen, delivering personalised home care and support for adults, children and young people."
        path="/about"
        image="/images/c20.jpg"
      />
      <section className="relative isolate flex min-h-110 items-center overflow-hidden bg-primary lg:min-h-130">
        <img
          src={asset("/images/c20.jpg")}
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
            items={[{ label: "Home", to: "/" }, { label: "About us" }]}
            tone="light"
          />
          <div className="mt-6 max-w-2xl">
            <p className="text-eyebrow uppercase text-secondary-200">
              About Cegron Care
            </p>
            <h1 className="mt-3 text-balance text-display text-white">
              Quality care and support, guided by you.
            </h1>
            <p className="mt-5 max-w-xl text-lead text-primary-100">
              We are a healthcare provider based in Aberdeen. Our services are
              shaped by the needs of the people who use them, and delivered by
              staff who take the time to understand what matters.
            </p>
            <div className="mt-7">
              <Button
                to="/contact"
                variant="accent"
                size="lg"
                icon={<LuArrowRight aria-hidden="true" className="size-4" />}
              >
                Talk to our team
              </Button>
            </div>
          </div>
        </Container>
      </section>

      <Section tone="white">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-14">
            <div>
              <SectionHeader
                eyebrow="Who we are"
                title="Care that starts with listening."
                lead="Cegron Care delivers high-quality, personalised home care and flexible healthcare staffing support across Aberdeen City and Aberdeenshire."
              />
              <div className="mt-5 space-y-4 text-[0.98rem] leading-relaxed text-ink-muted">
                <p>
                  Whether you are a family seeking support at home or a care
                  facility in need of reliable staff, our aim is the same: to
                  offer care that fits real lives. We assess needs carefully,
                  agree a plan in writing and review it as things change.
                </p>
                <p>
                  Our services are designed to promote independence, dignity and
                  wellbeing. That means respecting routines, being clear about
                  what we can offer and keeping communication open with families
                  and professionals.
                </p>
              </div>
              <CheckList
                className="mt-6"
                columns={2}
                items={[
                  "Care shaped by individual need",
                  "Two service lines",
                  "Person-centred care planning",
                  "Regular reviews and clear communication",
                ]}
              />
            </div>

            <aside className="rounded-2xl border border-line bg-surface-muted p-6 sm:p-7">
              <h2 className="text-base font-semibold text-ink">
                Cegron Care at a glance
              </h2>
              <dl className="mt-5 space-y-4 text-sm">
                <div className="flex items-start gap-3">
                  <LuMapPin
                    aria-hidden="true"
                    className="mt-0.5 size-4 shrink-0 text-secondary-600"
                  />
                  <div>
                    <dt className="font-medium text-ink">Areas covered</dt>
                    <dd className="text-ink-muted">{site.areaLine}</dd>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <LuPhone
                    aria-hidden="true"
                    className="mt-0.5 size-4 shrink-0 text-secondary-600"
                  />
                  <div>
                    <dt className="font-medium text-ink">Phone</dt>
                    <dd>
                      <a
                        href={site.phoneHref}
                        className="text-ink-muted hover:text-primary"
                      >
                        {site.phone}
                      </a>
                    </dd>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <LuMail
                    aria-hidden="true"
                    className="mt-0.5 size-4 shrink-0 text-secondary-600"
                  />
                  <div>
                    <dt className="font-medium text-ink">Email</dt>
                    <dd>
                      <a
                        href={site.emailHref}
                        className="break-all text-ink-muted hover:text-primary"
                      >
                        {site.email}
                      </a>
                    </dd>
                  </div>
                </div>
              </dl>
              <p className="mt-5 border-t border-line pt-4 text-xs leading-relaxed text-ink-muted">
                Registered office address and opening hours are being confirmed
                for publication.
              </p>
            </aside>
          </div>
        </Container>
      </Section>

      <LeadershipSection />
      <ForFamiliesCta />
      <ServicesGrid />
      <StatsBar />
      <ValuesGrid />
      <QualityTrust />
      <CtaBand />
    </>
  );
}
