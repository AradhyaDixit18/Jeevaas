import { Link } from "react-router-dom";
import Icon from "./Icon";
import { site, links } from "../config/site";
import { footerQuickLinks, footerLegalLinks } from "../config/nav";
import { services } from "../data/content";

const socialItems = [
  { key: "instagram", url: site.social.instagram, label: "Instagram" },
  { key: "facebook", url: site.social.facebook, label: "Facebook" },
  { key: "youtube", url: site.social.youtube, label: "YouTube" },
  { key: "linkedin", url: site.social.linkedin, label: "LinkedIn" },
];

export default function Footer() {
  const year = new Date().getFullYear();
  const socials = socialItems.filter((s) => s.url);
  const topDepartments = services.slice(0, 7);

  return (
    <footer className="bg-ink-950 text-ink-200">
      {/* Emergency strip */}
      <div className="border-b border-white/10 bg-emergency-600/95">
        <div className="container-x flex flex-col items-center justify-between gap-2 py-3 text-center sm:flex-row sm:text-left">
          <p className="flex items-center gap-2 text-sm font-semibold text-white">
            <Icon name="ambulance" className="h-5 w-5" />
            {site.emergency.label} — we are open 24 hours, every day.
          </p>
          <a href={links.emergency} className="btn-outline-white btn-md">
            <Icon name="phone" className="h-4 w-4" /> {site.emergency.display}
          </a>
        </div>
      </div>

      <div className="container-x grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
        {/* Brand */}
        <div>
          <Link to="/" className="flex items-center gap-2.5">
            <img
              src={site.logo}
              alt={`${site.name} logo`}
              className="h-11 w-11 rounded-xl object-cover ring-1 ring-white/15"
            />
            <span className="font-display text-lg font-extrabold text-white">
              {site.name}
            </span>
          </Link>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-ink-300">
            A modern multispeciality hospital in Kalyanpur, Kanpur. Specialist
            doctors, advanced diagnostics, and 24x7 emergency care, all under one roof.
          </p>
          {socials.length > 0 && (
            <div className="mt-5 flex gap-3">
              {socials.map((s) => (
                <a
                  key={s.key}
                  href={s.url}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`${site.name} on ${s.label}`}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-brand-600"
                >
                  <Icon name={s.key} className="h-4 w-4" />
                </a>
              ))}
            </div>
          )}
        </div>

        {/* Quick links */}
        <nav aria-label="Quick links">
          <h3 className="text-sm font-bold uppercase tracking-wider text-white">
            Quick Links
          </h3>
          <ul className="mt-4 space-y-2.5 text-sm">
            {footerQuickLinks.map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="text-ink-300 transition-colors hover:text-white">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Departments */}
        <nav aria-label="Departments">
          <h3 className="text-sm font-bold uppercase tracking-wider text-white">
            Departments
          </h3>
          <ul className="mt-4 space-y-2.5 text-sm">
            {topDepartments.map((s) => (
              <li key={s.slug}>
                <Link
                  to={`/departments/${s.slug}`}
                  className="text-ink-300 transition-colors hover:text-white"
                >
                  {s.title}
                </Link>
              </li>
            ))}
            <li>
              <Link to="/departments" className="font-semibold text-brand-300 hover:text-white">
                View all departments →
              </Link>
            </li>
          </ul>
        </nav>

        {/* Contact */}
        <div>
          <h3 className="text-sm font-bold uppercase tracking-wider text-white">
            Contact
          </h3>
          <ul className="mt-4 space-y-3 text-sm text-ink-300">
            <li className="flex gap-3">
              <Icon name="pin" className="mt-0.5 h-4 w-4 shrink-0 text-brand-400" />
              <span>{site.address.full}</span>
            </li>
            <li className="flex gap-3">
              <Icon name="phone" className="mt-0.5 h-4 w-4 shrink-0 text-brand-400" />
              <a href={links.call} className="hover:text-white">{site.phone.display}</a>
            </li>
            <li className="flex gap-3">
              <Icon name="email" className="mt-0.5 h-4 w-4 shrink-0 text-brand-400" />
              <a href={links.email} className="break-all hover:text-white">{site.email}</a>
            </li>
            <li className="flex gap-3">
              <Icon name="clock" className="mt-0.5 h-4 w-4 shrink-0 text-brand-400" />
              <span>OPD: Mon–Sat 9 AM–8 PM · Emergency 24x7</span>
            </li>
          </ul>
          <Link to="/book" className="btn-teal btn-md mt-5">
            <Icon name="calendar" className="h-4 w-4" /> Book Appointment
          </Link>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-x flex flex-col items-center justify-between gap-3 py-5 text-xs text-ink-400 sm:flex-row">
          <p>© {year} {site.legalName}. All rights reserved.</p>
          <ul className="flex gap-5">
            {footerLegalLinks.map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="hover:text-white">{l.label}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
