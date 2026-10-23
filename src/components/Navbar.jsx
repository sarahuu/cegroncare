
import { useEffect, useRef, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { LuChevronDown, LuMenu, LuPhone, LuX } from "react-icons/lu";
import { navigation, primaryCta, site } from "../data/site";

const linkBase =
  "rounded-md px-2 py-1.5 text-[0.92rem] font-medium transition-colors";

function linkClass({ isActive }) {
  return `${linkBase} ${
    isActive
      ? "text-primary underline decoration-accent decoration-2 underline-offset-8"
      : "text-ink-muted hover:text-primary"
  }`;
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const menuRef = useRef(null);
  const location = useLocation();

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

  useEffect(() => {
    if (!servicesOpen) return;
    const onPointerDown = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setServicesOpen(false);
      }
    };
    const onKeyDown = (event) => {
      if (event.key === "Escape") setServicesOpen(false);
    };
    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [servicesOpen]);

  const mobileLinks = navigation.filter((item) => item.label !== "Home");

  return (
    <>
      <nav aria-label="Main" className="hidden items-center gap-1 lg:flex">
        {navigation.map((item) =>
          item.children ? (
            <div key={item.label} className="relative" ref={menuRef}>
              <button
                type="button"
                aria-expanded={servicesOpen}
                aria-haspopup="true"
                onClick={() => setServicesOpen((value) => !value)}
                className={`${linkBase} inline-flex items-center gap-1 ${
                  location.pathname.startsWith(item.to)
                    ? "text-primary"
                    : "text-ink-muted hover:text-primary"
                }`}
              >
                {item.label}
                <LuChevronDown
                  aria-hidden="true"
                  className={`size-3.5 transition-transform ${
                    servicesOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              {servicesOpen && (
                <ul className="absolute left-0 top-full z-50 mt-2 w-64 rounded-xl border border-line bg-white p-2 shadow-card-hover">
                  {item.children.map((child) => (
                    <li key={child.to}>
                      <NavLink
                        to={child.to}
                        end={child.to === item.to}
                        onClick={() => setServicesOpen(false)}
                        className={({ isActive }) =>
                          `block rounded-lg px-3 py-2 text-sm ${
                            isActive
                              ? "bg-surface-tint font-semibold text-primary"
                              : "text-ink-muted hover:bg-surface-muted hover:text-primary"
                          }`
                        }
                      >
                        {child.label}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ) : (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === "/"}
              className={linkClass}
            >
              {item.label}
            </NavLink>
          ),
        )}
      </nav>

      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-expanded={open}
        aria-controls="mobile-menu"
        aria-label={open ? "Close menu" : "Open menu"}
        className="inline-flex size-11 items-center justify-center rounded-lg border border-line text-primary lg:hidden"
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
          className="absolute inset-x-0 top-full max-h-[calc(100dvh-4rem)] overflow-y-auto border-t border-line bg-white px-5 pb-8 pt-4 shadow-card-hover lg:hidden"
        >
          <nav aria-label="Mobile" className="flex flex-col gap-1">
            {mobileLinks.map((item) => (
              <div key={item.label}>
                <NavLink
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
                {item.children && (
                  <div className="mb-1 ml-3 flex flex-col border-l border-line pl-3">
                    {item.children.map((child) => (
                      <NavLink
                        key={child.to}
                        to={child.to}
                        onClick={() => setOpen(false)}
                        className="rounded-lg px-3 py-2 text-sm text-ink-muted hover:bg-surface-muted hover:text-primary"
                      >
                        {child.label}
                      </NavLink>
                    ))}
                  </div>
                )}
              </div>
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