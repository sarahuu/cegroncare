import { LuArrowRight } from "react-icons/lu";
import Container from "../ui/Container";
import Section from "../ui/Section";
import Button from "../ui/Button";
import CheckList from "../ui/CheckList";

const points = [
  "A conversation before any commitment",
  "A named contact who knows your situation",
  "A written plan with clear costs",
  "Regular reviews and honest updates",
];

export default function ForFamiliesCta() {
  return (
    <Section tone="tint">
      <Container>
        <div className="grid items-center gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:gap-14">
          <div>
            <p className="text-eyebrow uppercase text-secondary-700">
              For families
            </p>
            <h2 className="mt-3 text-h2 text-ink">
              Support that surrounds your loved one — and you.
            </h2>
            <p className="mt-4 max-w-xl text-lead text-ink-muted">
              Choosing care for someone you love is a big step. See what to
              expect from the first conversation onwards, how we keep families
              involved and where to raise a concern.
            </p>
            <div className="mt-6">
              <Button
                to="/for-families"
                icon={<LuArrowRight aria-hidden="true" className="size-4" />}
              >
                Information for families
              </Button>
            </div>
          </div>

          <div className="rounded-2xl border border-secondary-100 bg-white p-6 shadow-card">
            <p className="text-sm font-semibold text-ink">
              What families tell us matters
            </p>
            <CheckList items={points} className="mt-4" />
          </div>
        </div>
      </Container>
    </Section>
  );
}
