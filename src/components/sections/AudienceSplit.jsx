import { Link } from "react-router-dom";
import { LuArrowRight, LuCheck } from "react-icons/lu";
import Container from "../ui/Container";
import Section from "../ui/Section";
import SectionHeader from "../ui/SectionHeader";
import { audiencePanels } from "../../data/content";

export default function AudienceSplit() {
  return (
    <Section tone="muted">
      <Container>
        <SectionHeader
          eyebrow="Two ways to work with us"
          title="Support for families. A clear line for professionals."
          lead="Whether you are arranging care for someone you love or referring a client, the first step is the same: a conversation about what is needed."
        />

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {audiencePanels.map((panel, index) => {
            const isDark = index === 1;
            return (
              <article
                key={panel.id}
                className={`flex flex-col rounded-2xl border p-6 sm:p-8 ${
                  isDark
                    ? "border-primary-700 bg-primary text-white"
                    : "border-line bg-white text-ink shadow-card"
                }`}
              >
                <p
                  className={`text-eyebrow uppercase ${
                    isDark ? "text-secondary-200" : "text-secondary-600"
                  }`}
                >
                  {panel.label}
                </p>
                <h3
                  className={`mt-3 text-h3 ${isDark ? "text-white" : "text-ink"}`}
                >
                  {panel.title}
                </h3>
                <p
                  className={`mt-3 text-[0.95rem] leading-relaxed ${
                    isDark ? "text-primary-100" : "text-ink-muted"
                  }`}
                >
                  {panel.body}
                </p>

                <ul className="mt-6 grid gap-3">
                  {panel.points.map((point) => (
                    <li key={point} className="flex gap-3">
                      <span
                        className={`mt-0.5 inline-flex size-5 shrink-0 items-center justify-center rounded-full ${
                          isDark
                            ? "bg-white/15 text-secondary-200"
                            : "bg-accent-50 text-accent-800"
                        }`}
                      >
                        <LuCheck aria-hidden="true" className="size-3.5" />
                      </span>
                      <span
                        className={`text-sm leading-relaxed ${
                          isDark ? "text-primary-100" : "text-ink"
                        }`}
                      >
                        {point}
                      </span>
                    </li>
                  ))}
                </ul>

                <Link
                  to={panel.cta.to}
                  className={`mt-7 inline-flex items-center gap-2 text-sm font-semibold ${
                    isDark
                      ? "text-white hover:text-secondary-200"
                      : "text-primary hover:text-secondary-700"
                  }`}
                >
                  {panel.cta.label}
                  <LuArrowRight aria-hidden="true" className="size-4" />
                </Link>
              </article>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
