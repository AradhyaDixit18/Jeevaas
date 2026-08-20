import { Link } from "react-router-dom";
import Icon from "./Icon";
import { links } from "../config/site";

/** Sticky bottom action bar on mobile: Call · WhatsApp · Book. */
export default function MobileStickyCTA() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-ink-100 bg-white/95 backdrop-blur-md lg:hidden">
      <div className="mx-auto grid max-w-content grid-cols-3">
        <a
          href={links.call}
          className="flex flex-col items-center gap-1 py-2.5 text-xs font-semibold text-ink-700"
        >
          <Icon name="phone" className="h-5 w-5 text-brand-600" />
          Call
        </a>
        <a
          href={links.whatsapp}
          target="_blank"
          rel="noreferrer"
          className="flex flex-col items-center gap-1 border-x border-ink-100 py-2.5 text-xs font-semibold text-ink-700"
        >
          <Icon name="whatsapp" className="h-5 w-5 text-teal-600" />
          WhatsApp
        </a>
        <Link
          to="/book"
          className="flex flex-col items-center gap-1 bg-brand-600 py-2.5 text-xs font-semibold text-white"
        >
          <Icon name="calendar" className="h-5 w-5" />
          Book
        </Link>
      </div>
    </div>
  );
}
