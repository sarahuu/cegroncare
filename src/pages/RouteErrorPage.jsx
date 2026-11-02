import { isRouteErrorResponse, useRouteError } from "react-router-dom";
import Container from "../components/ui/Container";
import Section from "../components/ui/Section";
import Button from "../components/ui/Button";
import { site } from "../data/site";

export default function RouteErrorPage() {
  const error = useRouteError();
  const isMissing = isRouteErrorResponse(error) && error.status === 404;

  const detail = import.meta.env.DEV
    ? isRouteErrorResponse(error)
      ? `${error.status} ${error.statusText}`
      : error instanceof Error
        ? error.message
        : String(error)
    : null;

  return (
    <Section tone="white">
      <Container>
        <div className="max-w-xl">
          <p className="text-eyebrow uppercase text-secondary-600">
            {isMissing ? "Page not found" : "Something went wrong"}
          </p>
          <h1 className="mt-3 text-h2 text-primary">
            {isMissing
              ? "We could not find that page."
              : "This page did not finish loading."}
          </h1>
          <p className="mt-4 text-lead text-ink-muted">
            {isMissing
              ? "The link may be out of date or the page may have moved."
              : "The site may have been updated while you were browsing. Reloading the page usually fixes it."}
          </p>
          <div className="mt-7 flex flex-wrap items-center gap-3">
            <Button onClick={() => window.location.reload()}>
              Reload the page
            </Button>
            <Button to="/" variant="secondary">
              Go to the home page
            </Button>
            <Button href={site.phoneHref} variant="secondary">
              Call {site.phone}
            </Button>
          </div>
          {detail && (
            <p className="mt-8 break-words rounded-lg bg-surface-muted px-4 py-3 font-mono text-xs text-ink-muted">
              {detail}
            </p>
          )}
        </div>
      </Container>
    </Section>
  );
}
