import Seo from "../components/ui/Seo";
import PageHero from "../components/ui/PageHero";
import Section from "../components/ui/Section";
import Container from "../components/ui/Container";
import { legalDocuments } from "../data/legal";

export default function LegalPage({ documentKey }) {
  const doc = legalDocuments[documentKey];

  return (
    <>
      <Seo
        title={doc.title}
        description={doc.intro}
        path={`/${documentKey}`}
      />
      <PageHero
        eyebrow="Legal"
        title={doc.title}
        lead={doc.intro}
        breadcrumbs={[{ label: "Home", to: "/" }, { label: doc.title }]}
      />

      <Section tone="white">
        <Container>
          <div className="mx-auto max-w-3xl">
            <div className="mt-8 space-y-8">
              {doc.sections.map((section) => (
                <section key={section.heading}>
                  <h2 className="text-h3 text-ink">{section.heading}</h2>
                  <p className="mt-3 text-[0.98rem] leading-relaxed text-ink-muted">
                    {section.body}
                  </p>
                </section>
              ))}
            </div>

            <p className="mt-10 border-t border-line pt-6 text-sm text-ink-muted">
              Last updated: October 2026 (draft).
            </p>
          </div>
        </Container>
      </Section>
    </>
  );
}
