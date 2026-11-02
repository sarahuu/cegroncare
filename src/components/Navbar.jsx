
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { LuMenu, LuPhone, LuX } from "react-icons/lu";
import { navigation, primaryCta, site } from "../data/site";

const linkBase =
  "rounded-md px-2 py-1.5 text-[0.88rem] font-medium transition-colors";

function linkClass({ isActive }) {
  return `${linkBase} ${
    isActive
      ? "text-primary underline decoration-accent decoration-2 underline-offset-8"
      : "text-ink-muted hover:text-primary"
  }`;
}

export default function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [open]);

  const mobileLinks = navigation.filter((item) => item.label !== "Home");

  return (
    <>
      <nav aria-label="Main" className="hidden items-center gap-0.5 xl:flex">
        {navigation.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            end={item.to === "/"}
            className={linkClass}
          >
            {item.label}
          </NavLink>
        ))}
      </nav>

      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-expanded={open}
        aria-controls="mobile-menu"
        aria-label={open ? "Close menu" : "Open menu"}
        className="inline-flex size-11 items-center justify-center rounded-lg border border-line text-primary xl:hidden"
      >
        {open ? (
          <LuX aria-hidden="true" className="size-5" />
        ) : (
          <LuMenu aria-hidden="true" className="size-5" />
        )}
      </button>

      {open && (
        <div
          id="mobile-menu"
          className="absolute inset-x-0 top-full max-h-[calc(100dvh-4rem)] overflow-y-auto border-t border-line bg-white px-5 pb-8 pt-4 shadow-card-hover xl:hidden"
        >
          <nav aria-label="Mobile" className="flex flex-col gap-1">
            {mobileLinks.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `block rounded-lg px-3 py-3 text-base font-medium ${
                    isActive
                      ? "bg-surface-tint text-primary"
                      : "text-ink hover:bg-surface-muted"
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          <div className="mt-5 grid gap-3">
            <NavLink
              to={primaryCta.to}
              onClick={() => setOpen(false)}
              className="inline-flex items-center justify-center rounded-lg bg-primary px-5 py-3 text-sm font-semibold text-white"
            >
              {primaryCta.label}
            </NavLink>
            <a
              href={site.phoneHref}
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-surface-muted px-5 py-3 text-sm font-semibold text-primary"
            >
              <LuPhone aria-hidden="true" className="size-4" />
              {site.phone}
            </a>
          </div>
        </div>
      )}
    </>
  );
}