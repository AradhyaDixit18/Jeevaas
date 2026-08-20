import { Link } from "react-router-dom";
import Icon from "./Icon";
import { gradientOf } from "../lib/tones";

/**
 * Department card: a branded gradient header with the department icon (no photo
 * dependency, so it never renders a broken image), then title, summary, a few
 * condition chips, and a dual CTA.
 */
export default function ServiceCard({ service }) {
  const conditions = (service.conditions || []).slice(0, 3);
  return (
    <article className="card card-hover group flex h-full flex-col overflow-hidden">
      <div
        className={`relative flex h-28 items-center justify-between overflow-hidden bg-gradient-to-br px-6 ${gradientOf(
          service.tone
        )}`}
      >
        <div className="absolute inset-0 bg-plus-white opacity-70" aria-hidden="true" />
        <span className="relative inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-white/15 text-white ring-1 ring-white/25 backdrop-blur-sm">
          <Icon name={service.icon} className="h-7 w-7" />
        </span>
        <Icon
          name={service.icon}
          className="relative h-16 w-16 text-white/15 transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-lg font-bold text-ink-900">{service.title}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-600">
          {service.short}
        </p>
        {conditions.length > 0 && (
          <ul className="mt-4 flex flex-wrap gap-1.5">
            {conditions.map((c) => (
              <li
                key={c}
                className="rounded-full bg-ink-50 px-2.5 py-1 text-[11px] font-medium text-ink-500 ring-1 ring-ink-100"
              >
                {c}
              </li>
            ))}
          </ul>
        )}
        <div className="mt-5 flex items-center justify-between gap-3">
          <Link to={`/departments/${service.slug}`} className="link-underline text-sm">
            Learn more <Icon name="arrow" className="h-3 w-3" />
          </Link>
          <Link
            to={`/book?service=${service.slug}`}
            className="btn-teal btn-md"
            aria-label={`Book an appointment in ${service.title}`}
          >
            Book
          </Link>
        </div>
      </div>
    </article>
  );
}
