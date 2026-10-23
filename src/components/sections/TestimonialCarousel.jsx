import { useRef } from "react";
import { LuChevronLeft, LuChevronRight, LuQuote } from "react-icons/lu";
import Container from "../ui/Container";
import Section from "../ui/Section";
import SectionHeader from "../ui/SectionHeader";
import { testimonials } from "../../data/content";

export default function TestimonialCarousel() {
  const trackRef = useRef(null);

  const scrollByCard = (direction) => {
    const track = trackRef.current;
    if (!track) return;
    track.scrollBy({ left: direction * (track.clientWidth * 0.85), behavior: "smooth" });
  };

  return (
    <Section tone="white">
      <Container>
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeader
            eyebrow="Testimonials"
            title="What people say about Cegron Care."
            lead="Feedback from the people we support and their families."
          />
          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => scrollByCard(-1)}
              aria-label="Previous testimonial"
              className="inline-flex size-11 items-center justify-center rounded-full border border-line bg-white text-primary transition-colors hover:border-primary-300 hover:bg-surface-muted"
            >
              <LuChevronLeft aria-hidden="true" className="size-5" />
            </button>
            <button
              type="button"
              onClick={() => scrollByCard(1)}
              aria-label="Next testimonial"
              className="inline-flex size-11 items-center justify-center rounded-full border border-line bg-white text-primary transition-colors hover:border-primary-300 hover:bg-surface-muted"
            >
              <LuChevronRight aria-hidden="true" className="size-5" />
            </button>
          </div>
        </div>

        <div
          role="region"
          aria-roledescription="carousel"
          aria-label="Testimonials"
          className="mt-8"
        >
          <ul
            ref={trackRef}
            tabIndex={0}
            aria-label="Scrollable testimonials"
            className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {testimonials.map((item) => (
              <li
                key={item.name}
                className="w-[85%] shrink-0 snap-start rounded-2xl border border-line bg-surface-muted p-6 sm:w-[55%] lg:w-[calc((100%-2rem)/3)]"
              >
                <LuQuote
                  aria-hidden="true"
                  className="size-7 text-secondary-400"
                />
                <blockquote className="mt-4 text-[0.98rem] leading-relaxed text-ink">
                  {item.quote}
                </blockquote>
                <div className="mt-5 flex items-center gap-3 border-t border-line pt-4">
                  <span
                    aria-hidden="true"
                    className="inline-flex size-10 items-center justify-center rounded-full bg-primary text-sm font-semibold text-white"
                  >
                    {item.name
                      .split(" ")
                      .map((part) => part[0])
                      .join("")}
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-ink">{item.name}</p>
                    <p className="text-xs text-ink-muted">{item.role}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </Section>
  );
}
