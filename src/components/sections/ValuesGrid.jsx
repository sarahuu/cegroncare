import Container from "../ui/Container";
import Section from "../ui/Section";
import SectionHeader from "../ui/SectionHeader";
import IconTile from "../ui/IconTile";
import { getIcon } from "../ui/icons";
import { values } from "../../data/content";

export default function ValuesGrid({ compact = false }) {
  return (
    <Section tone="white" id="values">
      <Container>
        <SectionHeader
          eyebrow="Our values"
          title="What guides the care we provide."
          lead={`${values.length} values shape how we plan care, how we speak to people and how we work with families and professionals.`}
          align="center"
        />

        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((value) => {
            const Icon = getIcon(value.icon);
            return (
              <li
                key={value.title}
                className={`rounded-2xl border border-line bg-white ${
                  compact ? "p-5" : "p-6"
                } shadow-card`}
              >
                <IconTile icon={Icon} tone="secondary" size={compact ? "sm" : "md"} />
                <h3 className="mt-4 text-base font-semibold text-ink">
                  {value.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                  {value.body}
                </p>
              </li>
            );
          })}
        </ul>
      </Container>
    </Section>
  );
}
