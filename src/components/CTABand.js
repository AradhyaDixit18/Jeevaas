import { Link } from "react-router-dom";
import Icon from "./Icon";
import Reveal from "./Reveal";
import { site, links } from "../config/site";

/** Full-width call-to-action band used across pages. */
export default function CTABand() {
  return (
    <section className="container-x py-16 sm:py-20">
      <Reveal className="relative overflow-hidden rounded-3xl bg-ink-900 px-6 py-14 text-center shadow-lift sm:px-12">
        <div className="absolute inset-0 bg-plus-white opacity-60" aria-hidden="true" />
        {/* soft accent glows */}
        <div className="pointer-events-none absolute -left-16 -top-16 h-56 w-56 rounded-full bg-brand-500/25 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-20 -right-10 h-64 w-64 rounded-full bg-teal-500/20 blur-3xl" />
        <div className="relative mx-auto max-w-2xl">
          <span className="eyebrow text-teal-300 justify-center">
            <span className="h-2 w-2 rounded-sm bg-teal-400" /> Here for you
          </span>
          <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
            Book your visit to {site.name}
          </h2>
          <p className="mt-4 text-ink-100">
            Request an appointment online in under a minute. Our team will call you
            to confirm your slot. For emergencies, we are open 24x7.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link to="/book" className="btn-primary btn-lg w-full sm:w-auto">
              <Icon name="calendar" className="h-4 w-4" /> Book Appointment
            </Link>
            <a href={links.call} className="btn-outline-white btn-lg w-full sm:w-auto">
              <Icon name="phone" className="h-4 w-4" /> Call {site.phone.display}
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
