import Container from "./Container";

export default function SectionHeader({
  eyebrow,
  title,
  lead,
  align = "left",
  tone = "dark",
  as: Heading = "h2",
  action,
  className = "",
}) {
  const isLight = tone === "light";
  const alignment = align === "center" ? "text-center mx-auto" : "text-left";

  return (
    <div
      className={`flex flex-col gap-5 ${align === "center" ? "items-center" : "items-start"} ${
        action ? "md:flex-row md:items-end md:justify-between" : ""
      } ${className}`}
    >
      <div className={`max-w-2xl ${alignment}`}>
        {eyebrow && (
          <p
            className={`text-eyebrow uppercase ${
              isLight ? "text-secondary-200" : "text-secondary-600"
            }`}
          >
            {eyebrow}
          </p>
        )}
        {title && (
          <Heading
            className={`mt-3 text-h2 ${isLight ? "text-white" : "text-ink"}`}
          >
            {title}
          </Heading>
        )}
        {lead && (
          <p
            className={`mt-4 text-lead ${
              isLight ? "text-primary-100" : "text-ink-muted"
            }`}
          >
            {lead}
          </p>
        )}
      </div>
      {action && <div className="shrink-0">{action}</div>}
    </div>
  );
}

export function SectionHeaderInContainer(props) {
  return (
    <Container>
      <SectionHeader {...props} />
    </Container>
  );
}
