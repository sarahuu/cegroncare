import {
  LuArrowUpRight,
  LuClock,
  LuMail,
  LuMapPin,
  LuPhone,
} from "react-icons/lu";
import Seo from "../components/ui/Seo";
import PageHero from "../components/ui/PageHero";
import Section from "../components/ui/Section";
import Container from "../components/ui/Container";
import ContactForm from "../components/forms/ContactForm";
import AreasServed from "../components/sections/AreasServed";
import { site } from "../data/site";

export default function ContactPage() {
  return (
    <>
      <Seo
        title="Contact us"
        description="Contact Cegron Care about adult homecare or children and young people support in Aberdeen City and Aberdeenshire. Call +44 1224 472512 or send an enquiry."
        path="/contact"
      />
      <PageHero
        eyebrow="Contact"
        title="Let’s talk about the support you need."
        lead="Call, email or send an enquiry. Tell us what is happening and we will explain the options — without pressure."
        breadcrumbs={[{ label: "Home", to: "/" }, { label: "Contact" }]}
      />

      <Section tone="white">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-14">
            <div className="rounded-2xl border border-line bg-white p-6 shadow-card sm:p-8">
              <h2 className="text-h3 text-ink">Send an enquiry</h2>
              <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                Fields marked with an asterisk are required. A member of the team
                will get back to you.
              </p>
              <div className="mt-6">
                <ContactForm />
              </div>
            </div>

            <div className="space-y-5">
              <div className="rounded-2xl border border-line bg-surface-muted p-6">
                <h2 className="text-base font-semibold text-ink">
                  Contact details
                </h2>
                <ul className="mt-4 space-y-4 text-sm">
                  <li className="flex items-start gap-3">
                    <LuPhone
                      aria-hidden="true"
                      className="mt-0.5 size-4 shrink-0 text-secondary-600"
                    />
                    <div>
                      <p className="font-medium text-ink">Phone</p>
                      <a
                        href={site.phoneHref}
                        className="text-ink-muted hover:text-primary"
                      >
                        {site.phone}
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <LuMail
                      aria-hidden="true"
                      className="mt-0.5 size-4 shrink-0 text-secondary-600"
                    />
                    <div>
                      <p className="font-medium text-ink">Email</p>
                      <a
                        href={site.emailHref}
                        className="break-all text-ink-muted hover:text-primary"
                      >
                        {site.email}
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <LuMapPin
                      aria-hidden="true"
                      className="mt-0.5 size-4 shrink-0 text-secondary-600"
                    />
                    <div>
                      <p className="font-medium text-ink">Areas covered</p>
                      <p className="text-ink-muted">{site.areaLine}</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <LuClock
                      aria-hidden="true"
                      className="mt-0.5 size-4 shrink-0 text-secondary-600"
                    />
                    <div>
                      <p className="font-medium text-ink">Availability</p>
                      <p className="text-ink-muted">{site.availability}</p>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="rounded-2xl border border-dashed border-secondary-200 bg-surface-tint p-6">
                <p className="text-eyebrow uppercase text-secondary-700">
                  Head office
                </p>
                <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                  Our registered office address and a map will be published once
                  confirmed. We currently cover Aberdeen City and Aberdeenshire.
                </p>
                <div
                  aria-hidden="true"
                  className="mt-4 flex h-28 items-center justify-center rounded-xl border border-secondary-200 bg-white text-secondary-400"
                >
                  <LuMapPin className="size-6" />
                </div>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Aberdeen+City+and+Aberdeenshire"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-secondary-700"
                >
                  Open map of our area
                  <LuArrowUpRight aria-hidden="true" className="size-4" />
                </a>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <AreasServed />
    </>
  );
}
