import { LuArrowRight, LuCheck, LuMail, LuMapPin, LuPhone } from "react-icons/lu";
import Container from "../ui/Container";
import Button from "../ui/Button";
import { site } from "../../data/site";
import { asset } from "../../lib/asset";

const heroFacts = [
  "Personalised care plans",
  "Adults, children and young people",
  "Aberdeen City & Aberdeenshire",
  "Day, night and overnight support",
];

export default function HeroHome() {
  return (
    <section className="relative isolate flex min-h-140 items-center overflow-hidden bg-primary lg:min-h-160">
      <img
        src={asset("/images/c15.jpg")}
        alt="A carer gently holding the hands of an older person"
        width="1600"
        height="900"
        fetchPriority="high"
        className="absolute inset-0 -z-20 size-full object-cover object-center"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-primary/70 lg:bg-linear-to-r lg:from-primary/90 lg:via-primary/60 lg:to-primary/10"
      />

      <Container className="relative py-14 sm:py-16 lg:py-20">
        <div className="max-w-2xl">
          <p className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-3 py-1 text-xs font-semibold text-white backdrop-blur">
            <span className="size-1.5 rounded-full bg-accent" aria-hidden="true" />
            Home care in Aberdeen City &amp; Aberdeenshire
          </p>

          <h1 className="mt-5 text-balance text-display text-white">
            Quality Care &amp; Support Services
          </h1>

          <p className="mt-5 max-w-xl text-lead text-primary-100">
            Compassionate, personalised care for adults, children and young
            people — built around the individual, delivered with dignity.
          </p>

          <div className="mt-7 flex flex-wrap items-center gap-3">
            <Button
              to="/about"
              variant="accent"
              size="lg"
              icon={<LuArrowRight aria-hidden="true" className="size-4" />}
            >
              Get started
            </Button>
            <Button
              href={site.phoneHref}
              variant="outlineLight"
              size="lg"
              icon={<LuPhone aria-hidden="true" className="size-4" />}
            >
              {site.phone}
            </Button>
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-primary-100">
            <a
              href={site.emailHref}
              className="inline-flex items-center gap-2 transition-colors hover:text-white"
            >
              <LuMail aria-hidden="true" className="size-4 text-secondary" />
              {site.email}
            </a>
            <span className="inline-flex items-center gap-2">
              <LuMapPin aria-hidden="true" className="size-4 text-secondary" />
              {site.areaLine}
            </span>
          </div>

          <ul className="mt-9 grid gap-3 border-t border-white/20 pt-6 sm:grid-cols-2">
            {heroFacts.map((fact) => (
              <li
                key={fact}
                className="flex items-start gap-2.5 text-sm text-primary-100"
              >
                <span className="mt-0.5 inline-flex size-5 shrink-0 items-center justify-center rounded-full bg-white/10">
                  <LuCheck aria-hidden="true" className="size-3.5 text-accent" />
                </span>
                {fact}
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
