import Container from "../ui/Container";
import Section from "../ui/Section";
import SectionHeader from "../ui/SectionHeader";
import { processSteps } from "../../data/content";

export default function ProcessSteps({ showDetail = false }) {
  return (
    <Section tone="white">
      <Container>
        <SectionHeader
          eyebrow="Our process"
          title="A clear path from first conversation to ongoing care."
          lead="Five steps that keep you informed, involved and confident about what happens next."
          align="center"
        />

        <div className="relative mt-12">
          <div
            aria-hidden="true"
            className="absolute bottom-0 left-[1.1rem] top-2 w-px bg-line md:left-0 md:right-0 md:top-6 md:h-px md:w-auto"
          />
          <ol className="grid gap-8 md:grid-cols-5 md:gap-5">
            {processSteps.map((step) => (
              <li key={step.number} className="relative pl-12 md:pl-0">
                <span className="absolute left-0 top-0 z-10 inline-flex size-9 items-center justify-center rounded-full border border-line bg-white text-sm font-bold text-primary shadow-sm md:static md:mb-4">
                  {step.number}
                </span>
                <h3 className="text-base font-semibold text-ink md:mt-0">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                  {showDetail ? step.detail : step.summary}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </Container>
    </Section>
  );
}
