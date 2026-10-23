import { LuChevronRight } from "react-icons/lu";
import { Link } from "react-router-dom";

export default function Breadcrumbs({
  items = [],
  tone = "dark",
  className = "",
}) {
  const isLight = tone === "light";

  return (
    <nav aria-label="Breadcrumb">
      <ol
        className={`flex flex-wrap items-center gap-1.5 text-sm ${
          isLight ? "text-primary-100" : "text-ink-muted"
        } ${className}`}
      >
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={item.label} className="flex items-center gap-1.5">
              {item.to && !isLast ? (
                <Link
                  to={item.to}
                  className={`rounded transition-colors ${
                    isLight ? "hover:text-white" : "hover:text-primary"
                  }`}
                >
                  {item.label}
                </Link>
              ) : (
                <span aria-current={isLast ? "page" : undefined}>
                  {item.label}
                </span>
              )}
              {!isLast && <LuChevronRight aria-hidden="true" className="size-3.5" />}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
