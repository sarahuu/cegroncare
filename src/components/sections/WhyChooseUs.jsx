import Container from "../ui/Container";
import Section from "../ui/Section";
import SectionHeader from "../ui/SectionHeader";
import IconTile from "../ui/IconTile";
import { getIcon } from "../ui/icons";
import { whyChooseUs } from "../../data/content";

export default function WhyChooseUs() {
  return (
    <Section tone="muted">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
          <div className="lg:sticky lg:top-32 lg:self-start">
            <SectionHeader
              eyebrow="Why choose Cegron"
              title="Care that feels personal — and stays consistent."
              lead="Families and professionals come to us for the same reasons: dependable staff, clear communication and support that treats the person as an individual."
            />
            <div className="mt-7 rounded-2xl border border-line bg-white p-5">
              <p className="text-sm leading-relaxed text-ink-muted">
                “Here at Cegron Care we ensure that the services we offer are
                fully guided by the needs of the individuals that require them.”
              </p>
              <p className="mt-3 text-xs font-semibold uppercase tracking-[0.12em] text-secondary-700">
                Our approach
              </p>
            </div>
          </div>

          <ul className="grid gap-4 sm:grid-cols-2">
            {whyChooseUs.map((item) => {
              const Icon = getIcon(item.icon);
              return (
                <li
                  key={item.title}
                  className="rounded-2xl border border-line bg-white p-5 shadow-card"
                >
                  <IconTile icon={Icon} tone="accent" size="sm" />
                  <h3 className="mt-3.5 text-base font-semibold text-ink">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                    {item.body}
                  </p>
                </li>
              );
            })}
          </ul>
        </div>
      </Container>
    </Section>
  );
}
