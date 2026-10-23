import { LuQuote } from "react-icons/lu";
import Seo from "../components/ui/Seo";
import PageHero from "../components/ui/PageHero";
import Section from "../components/ui/Section";
import Container from "../components/ui/Container";
import CtaBand from "../components/ui/CtaBand";
import ReviewsSection from "../components/sections/ReviewsSection";
import { testimonials } from "../data/content";

export default function TestimonialsPage() {
  return (
    <>
      <Seo
        title="Reviews"
        description="Feedback from people supported by Cegron Care and their families across Aberdeen City and Aberdeenshire."
        path="/testimonials"
      />
      <PageHero
        eyebrow="Reviews"
        title="What people say about Cegron Care."
        lead="Feedback from the people we support and their families. We welcome both praise and criticism — it is how we improve."
        breadcrumbs={[
          { label: "Home", to: "/" },
          { label: "Reviews" },
        ]}
      />

      <Section tone="white">
        <Container>
          <ul className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((item) => (
              <li
                key={item.name}
                className="flex flex-col rounded-2xl border border-line bg-surface-muted p-6"
              >
                <LuQuote aria-hidden="true" className="size-7 text-secondary-400" />
                <blockquote className="mt-4 flex-1 text-[0.98rem] leading-relaxed text-ink">
                  {item.quote}
                </blockquote>
                <div className="mt-5 flex items-center gap-3 border-t border-line pt-4">
                  <span
                    aria-hidden="true"
                    className="inline-flex size-10 items-center justify-center rounded-full bg-primary text-sm font-semibold text-white"
                  >
                    {item.name
                      .split(" ")
                      .map((part) => part[0])
                      .join("")}
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-ink">{item.name}</p>
                    <p className="text-xs text-ink-muted">{item.role}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      <ReviewsSection />
      <CtaBand
        eyebrow="Share your experience"
        title="Your feedback helps us improve."
        lead="If we have supported you or your family, we would like to hear what worked and what did not."
        primary={{ label: "Contact the team", to: "/contact" }}
        secondary={{ label: "Make a referral", to: "/referrals" }}
      />
    </>
  );
}
