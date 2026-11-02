import { Link } from "react-router-dom";
import { LuArrowRight, LuPhone } from "react-icons/lu";
import { site } from "../data/site";

export default function MobileCallBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-line bg-white/95 pb-[env(safe-area-inset-bottom)] backdrop-blur md:hidden">
      <div className="grid grid-cols-2 gap-2 px-4 py-2.5">
        <a
          href={site.phoneHref}
          className="inline-flex items-center justify-center gap-2 rounded-lg border border-primary-200 px-4 py-2.5 text-sm font-semibold text-primary"
        >
          <LuPhone aria-hidden="true" className="size-4" />
          Call us
        </a>
        <Link
          to="/contact"
          className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-4 py-2.5 text-sm font-semibold text-white"
        >
          Request care
          <LuArrowRight aria-hidden="true" className="size-4" />
        </Link>
      </div>
    </div>
  );
}
