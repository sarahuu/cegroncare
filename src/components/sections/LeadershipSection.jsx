import Container from "../ui/Container";
import Section from "../ui/Section";
import SectionHeader from "../ui/SectionHeader";
import { leadershipRoles } from "../../data/content";

export default function LeadershipSection() {
  return (
    <Section tone="muted">
      <Container>
        <SectionHeader
          eyebrow="Our team"
          title="Led by people who understand care."
          lead="Cegron Care is managed by a team with experience across health and social care. These are the people who coordinate support."
        />

        <ul className="mt-10 grid gap-4 md:grid-cols-3">
          {leadershipRoles.map((person) => {
            const initials = person.name
              .split(" ")
              .map((part) => part[0])
              .join("");

            return (
              <li
                key={person.name}
                className="rounded-2xl border border-line bg-white p-6 shadow-card"
              >
                <span
                  aria-hidden="true"
                  className="inline-flex size-14 items-center justify-center rounded-2xl bg-surface-tint text-lg font-bold text-primary"
                >
                  {initials}
                </span>
                <h3 className="mt-4 text-base font-semibold text-ink">
                  {person.name}
                </h3>
                <p className="mt-1 text-sm font-medium text-secondary-700">
                  {person.role}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                  {person.body}
                </p>
              </li>
            );
          })}
        </ul>
      </Container>
    </Section>
  );
}
