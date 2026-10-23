import { Link, NavLink } from "react-router-dom";
import { site } from "../data/site";
import logo from "../assets/logo.png";
import { LuArrowUpRight, LuMail, LuMapPin, LuPhone } from "react-icons/lu";

const exploreLinks = [
  { label: "About us", to: "/about" },
  { label: "For families", to: "/for-families" },
  { label: "Our process", to: "/process" },
  { label: "FAQs", to: "/faqs" },
  { label: "Contact", to: "/contact" },
];

const serviceLinks = [
  { label: "All services", to: "/services" },
  { label: "Adult Homecare", to: "/services/adult-homecare" },
  {
    label: "Children & Young People",
    to: "/services/children-and-young-people",
  },
];

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-100">
      <div className="mx-auto w-full max-w-[1200px] px-5 pb-8 pt-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          <div>
            <Link
              to="/"
              className="inline-flex items-center gap-3 rounded-xl bg-white p-2"
              aria-label={`${site.name} home`}
            >
              <img
                src={logo}
                alt={`${site.name} logo`}
                className="h-12 w-auto"
                loading="lazy"
              />
            </Link>
            <p className="mt-5 max-w-sm text-sm leading-relaxed">
              {site.tagline}
            </p>
          </div>

          <nav aria-label="Footer">
            <h2 className="text-eyebrow uppercase text-secondary-200">
              Explore
            </h2>
            <ul className="mt-4 space-y-2.5 text-sm">
              {exploreLinks.map((link) => (
                <li key={link.to}>
                  <NavLink
                    to={link.to}
                    className="rounded transition-colors hover:text-white"
                  >
                    {link.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Services">
            <h2 className="text-eyebrow uppercase text-secondary-200">
              Services
            </h2>
            <ul className="mt-4 space-y-2.5 text-sm">
              {serviceLinks.map((link) => (
                <li key={link.to}>
                  <NavLink
                    to={link.to}
                    className="rounded transition-colors hover:text-white"
                  >
                    {link.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="text-eyebrow uppercase text-secondary-200">
              Contact
            </h2>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <a
                  href={site.phoneHref}
                  className="inline-flex items-center gap-2 rounded transition-colors hover:text-white"
                >
                  <LuPhone aria-hidden="true" className="size-4 text-secondary" />
                  {site.phone}
                </a>
              </li>
              <li>
                <a
                  href={site.emailHref}
                  className="inline-flex items-center gap-2 rounded transition-colors hover:text-white"
                >
                  <LuMail aria-hidden="true" className="size-4 text-secondary" />
                  {site.email}
                </a>
              </li>
              <li className="inline-flex items-start gap-2">
                <LuMapPin
                  aria-hidden="true"
                  className="mt-0.5 size-4 shrink-0 text-secondary"
                />
                <span>{site.areaLine}</span>
              </li>
            </ul>
            <a
              href={site.phoneHref}
              className="mt-5 inline-flex items-center gap-1.5 rounded text-sm font-semibold text-white transition-colors hover:text-secondary-200"
            >
              Speak to the team
              <LuArrowUpRight aria-hidden="true" className="size-4" />
            </a>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-white/15 pt-6 text-xs text-primary-200 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {site.legalName}. All rights reserved.
          </p>
          <ul className="flex flex-wrap gap-4">
            <li>
              <NavLink to="/privacy" className="rounded hover:text-white">
                Privacy
              </NavLink>
            </li>
            <li>
              <NavLink to="/cookies" className="rounded hover:text-white">
                Cookies
              </NavLink>
            </li>
            <li>
              <NavLink to="/terms" className="rounded hover:text-white">
                Terms
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}