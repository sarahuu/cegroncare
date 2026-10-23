import { LuArrowUpRight, LuStar } from "react-icons/lu";
import Container from "../ui/Container";
import Section from "../ui/Section";
import { site } from "../../data/site";

const googleUrl = `https://www.google.com/search?q=${encodeURIComponent(
  `${site.name} Aberdeen reviews`,
)}`;

export default function ReviewsSection() {
  return (
    <Section tone="muted" space="tight">
      <Container>
        <div className="grid items-center gap-8 rounded-2xl border border-line bg-white p-6 shadow-card sm:p-8 lg:grid-cols-[1fr_auto]">
          <div>
            <p className="text-eyebrow uppercase text-secondary-600">
              Google reviews
            </p>
            <h2 className="mt-3 text-h3 text-ink">
              Reviews from the people we support.
            </h2>
            <p className="mt-3 max-w-xl text-sm leading-relaxed text-ink-muted">
              We are building our public review profile. If we have supported you
              or your family, we would be grateful for your feedback — and we
              welcome it directly if something could be better.
            </p>
            <div
              className="mt-4 flex items-center gap-1 text-secondary-500"
              aria-hidden="true"
            >
              {[0, 1, 2, 3, 4].map((star) => (
                <LuStar key={star} className="size-4" />
              ))}
            </div>
            <p className="mt-2 text-xs text-ink-muted">
              No rating is displayed until verified reviews are available.
            </p>
          </div>

          <a
            href={googleUrl}
            target="_blank"
            rel="noreferrer noopener"
            className="inline-flex items-center justify-center gap-2 rounded-lg border border-primary-200 px-5 py-3 text-sm font-semibold text-primary transition-colors hover:border-primary-400 hover:bg-surface-muted"
          >
            Find us on Google
            <LuArrowUpRight aria-hidden="true" className="size-4" />
          </a>
        </div>
      </Container>
    </Section>
  );
}
