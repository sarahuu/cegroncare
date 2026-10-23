import { useId, useState } from "react";
import { LuChevronDown } from "react-icons/lu";

export default function Accordion({ items = [] }) {
  const [openIndex, setOpenIndex] = useState(0);
  const baseId = useId();

  return (
    <div className="divide-y divide-line rounded-2xl border border-line bg-white">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        const buttonId = `${baseId}-button-${index}`;
        const panelId = `${baseId}-panel-${index}`;

        return (
          <div key={item.q}>
            <h3>
              <button
                type="button"
                id={buttonId}
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpenIndex(isOpen ? -1 : index)}
                className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left text-[0.98rem] font-semibold text-ink transition-colors hover:text-primary"
              >
                <span>{item.q}</span>
                <LuChevronDown
                  aria-hidden="true"
                  className={`size-4 shrink-0 transition-transform duration-200 ${
                    isOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              hidden={!isOpen}
              className="px-5 pb-5 text-[0.95rem] leading-relaxed text-ink-muted"
            >
              {item.a}
            </div>
          </div>
        );
      })}
    </div>
  );
}
