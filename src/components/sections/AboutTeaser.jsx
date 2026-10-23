import { LuArrowRight } from "react-icons/lu";
import Container from "../ui/Container";
import Section from "../ui/Section";
import Button from "../ui/Button";
import CheckList from "../ui/CheckList";

const points = [
  "A conversation with no obligation",
  "Assessment and a written support plan",
  "Staff matched to skills, experience and preference",
  "Regular reviews with families and professionals",
];

export default function AboutTeaser() {
  return (
    <Section tone="muted">
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <div className="relative order-2 lg:order-1">
            <img
              src="/images/c18.jpg"
              alt="A group of people talking together around a table"
              width="1200"
              height="800"
              loading="lazy"
              decoding="async"
              className="aspect-[4/3] w-full rounded-3xl object-cover shadow-card"
            />
            <div className="absolute -bottom-6 right-4 rounded-2xl bg-primary px-5 py-4 text-white shadow-card sm:right-8">
              <p className="text-3xl font-bold leading-none">5</p>
              <p className="mt-1 max-w-[9rem] text-xs leading-snug text-primary-100">
                years supporting people across Aberdeen
              </p>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <p className="text-eyebrow uppercase text-secondary-600">
              About Cegron Care
            </p>
            <h2 className="mt-3 text-h2 text-ink">
              Care guided by the person, not the package.
            </h2>
            <p className="mt-4 text-lead text-ink-muted">
              Cegron Care is a healthcare provider based in Aberdeen. We
              deliver personalised home care and flexible healthcare staffing
              support, with services shaped around individual needs.
            </p>
            <p className="mt-3 text-[0.95rem] leading-relaxed text-ink-muted">
              Whether you are a family seeking support at home or a care facility
              in need of reliable staff, we start by listening. Our approach is
              designed to promote independence, dignity and wellbeing.
            </p>

            <CheckList items={points} columns={2} className="mt-6" />

            <div className="mt-7">
              <Button
                to="/about"
                variant="primary"
                icon={<LuArrowRight aria-hidden="true" className="size-4" />}
              >
                More about us
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
