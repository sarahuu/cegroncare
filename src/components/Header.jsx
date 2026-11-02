import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import Button from "./ui/Button";
import Navbar from "./Navbar";
import { site } from "../data/site";
import { LuMapPin, LuPhone } from "react-icons/lu";

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-line bg-white/95 backdrop-blur">
      <div className="bg-primary text-white">
        <div className="mx-auto flex w-full max-w-[1200px] items-center justify-between gap-4 px-5 py-2 text-xs sm:px-6 lg:px-8">
          <a
            href={site.phoneHref}
            className="inline-flex items-center gap-2 font-semibold transition-colors hover:text-secondary-200"
          >
            <LuPhone aria-hidden="true" className="size-3.5 text-accent" />
            <span>{site.phone}</span>
          </a>
          <div className="flex items-center gap-4">
            <span className="truncate text-primary-100 font-semibold">
              Welcome to Cegron Care
            </span>
            <span className="hidden items-center gap-1.5 text-primary-100 sm:inline-flex">
              <LuMapPin aria-hidden="true" className="size-3.5 text-secondary" />
              {site.areaLine}
            </span>
          </div>
        </div>
      </div>

      <div className="mx-auto w-full max-w-[1200px] px-5 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4 py-3">
          <Link to="/" className="shrink-0" aria-label={`${site.name} home`}>
            <img
              src={logo}
              alt={`${site.name} logo`}
              className="h-12 w-auto md:h-14"
            />
          </Link>
          <Navbar />
          <div className="hidden xl:block">
            <Button to="/contact" variant="accent" size="sm">
              Request care
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}