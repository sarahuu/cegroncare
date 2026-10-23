import Container from "../ui/Container";
import Section from "../ui/Section";
import SectionHeader from "../ui/SectionHeader";
import IconTile from "../ui/IconTile";
import { getIcon } from "../ui/icons";
import { qualityCommitments } from "../../data/content";

export default function QualityTrust() {
  return (
    <Section tone="white">
      <Container>
        <SectionHeader
          eyebrow="Quality you can trust"
          title="Building trust through how we work."
          lead="Good care is not only what happens during a visit. It is also how we recruit, plan, review and communicate."
          align="center"
        />

        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {qualityCommitments.map((item) => {
            const Icon = getIcon(item.icon);
            return (
              <li
                key={item.title}
                className="rounded-2xl border border-line bg-surface-muted p-6"
              >
                <IconTile icon={Icon} tone="primary" />
                <h3 className="mt-4 text-base font-semibold text-ink">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                  {item.body}
                </p>
              </li>
            );
          })}
        </ul>
      </Container>
    </Section>
  );
}
