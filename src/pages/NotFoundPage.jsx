import { Link } from "react-router-dom";
import { LuArrowRight } from "react-icons/lu";
import Seo from "../components/ui/Seo";
import Section from "../components/ui/Section";
import Container from "../components/ui/Container";
import { site } from "../data/site";

export default function NotFoundPage() {
  return (
    <>
      <Seo
        title="Page not found"
        description="The page you were looking for could not be found."
        path="/404"
      />
      <Section tone="tint">
        <Container>
          <div className="mx-auto max-w-xl py-10 text-center">
            <p className="text-eyebrow uppercase text-secondary-600">
              Error 404
            </p>
            <h1 className="mt-3 text-h2 text-ink">We can’t find that page.</h1>
            <p className="mt-4 text-lead text-ink-muted">
              The link may be out of date. You can go back to the home page, or
              call us and we will point you in the right direction.
            </p>
            <div className="mt-7 flex flex-wrap justify-center gap-3">
              <Link
                to="/"
                className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary-700"
              >
                Back to home
                <LuArrowRight aria-hidden="true" className="size-4" />
              </Link>
              <a
                href={site.phoneHref}
                className="inline-flex items-center gap-2 rounded-lg border border-primary-200 bg-white px-6 py-3 text-sm font-semibold text-primary transition-colors hover:border-primary-400"
              >
                Call {site.phone}
              </a>
            </div>
            <nav aria-label="Helpful links" className="mt-9">
              <ul className="flex flex-wrap justify-center gap-x-5 gap-y-2 text-sm text-ink-muted">
                <li>
                  <Link to="/services" className="hover:text-primary">
                    Services
                  </Link>
                </li>
                <li>
                  <Link to="/referrals" className="hover:text-primary">
                    Referrals
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="hover:text-primary">
                    Contact
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </Container>
      </Section>
    </>
  );
}
