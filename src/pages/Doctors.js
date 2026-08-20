import { Link } from "react-router-dom";
import SEO from "../components/SEO";
import PageHeader from "../components/PageHeader";
import Reveal from "../components/Reveal";
import Icon from "../components/Icon";
import CTABand from "../components/CTABand";
import { doctors, services } from "../data/content";
import { site, links } from "../config/site";
import { softOf } from "../lib/tones";

export default function Doctors() {
  return (
    <>
      <SEO
        title="Find a Doctor"
        description={`Meet the specialist doctors and care team at ${site.name}, a multispeciality hospital in Kalyanpur, Kanpur.`}
        path="/doctors"
      />
      <PageHeader
        eyebrow="Our team"
        title="Meet the specialists behind your care"
        intro="Qualified, caring doctors across every major specialty, supported by experienced nursing and diagnostic teams."
      />

      <section className="container-x py-16 sm:py-20">
        {doctors.length > 0 ? (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {doctors.map((d, i) => (
              <Reveal key={d.name} delay={i * 0.05}>
                <article className="card card-hover h-full overflow-hidden">
                  {d.image ? (
                    <img
                      src={d.image}
                      alt={d.name}
                      loading="lazy"
                      className="h-64 w-full object-cover"
                    />
                  ) : (
                    <div className="flex h-40 items-center justify-center bg-gradient-to-br from-brand-500 to-brand-700">
                      <Icon name="userMd" className="h-14 w-14 text-white/90" />
                    </div>
                  )}
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-ink-900">{d.name}</h3>
                    {d.title && <p className="text-sm font-semibold text-brand-700">{d.title}</p>}
                    {d.department && <p className="mt-1 text-sm text-ink-500">{d.department}</p>}
                    {d.specialization && (
                      <p className="mt-3 text-sm text-ink-600">{d.specialization}</p>
                    )}
                    {d.experience && (
                      <p className="mt-2 text-xs font-semibold text-teal-600">{d.experience}</p>
                    )}
                    <Link
                      to={`/book?doctor=${encodeURIComponent(d.name)}`}
                      className="btn-teal btn-md mt-5 w-full"
                    >
                      Book with {d.name.split(" ")[0]}
                    </Link>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        ) : (
          // Honest empty state — no invented doctors, but browsing by department.
          <Reveal>
            <div className="mx-auto max-w-2xl rounded-3xl bg-brand-50/60 p-10 text-center ring-1 ring-brand-100">
              <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-white text-brand-600 shadow-soft">
                <Icon name="userMd" className="h-8 w-8" />
              </span>
              <h2 className="mt-6 text-2xl font-bold text-ink-900">
                Doctor profiles coming soon
              </h2>
              <p className="mx-auto mt-3 max-w-md text-ink-600">
                We're preparing detailed profiles of our specialists. In the meantime,
                tell us your concern when you book and our team will connect you with the
                right doctor for your needs.
              </p>
              <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
                <Link to="/book" className="btn-primary btn-lg">
                  <Icon name="calendar" className="h-4 w-4" /> Book Appointment
                </Link>
                <a href={links.call} className="btn-ghost btn-lg">
                  <Icon name="phone" className="h-4 w-4 text-brand-600" /> Call {site.phone.display}
                </a>
              </div>
            </div>
          </Reveal>
        )}

        {/* Browse by department */}
        <div className="mt-16">
          <div className="max-w-2xl">
            <span className="eyebrow">
              <span className="h-2 w-2 rounded-sm bg-teal-500" /> Browse by department
            </span>
            <h2 className="mt-3 text-2xl font-bold text-ink-900">
              Find the right specialty
            </h2>
            <p className="mt-2 text-ink-600">
              Not sure who to see? Pick a department to learn more, or start with General
              Medicine and we'll guide you.
            </p>
          </div>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {services.slice(0, 12).map((s) => (
              <Link
                key={s.slug}
                to={`/departments/${s.slug}`}
                className="card card-hover flex items-center gap-3 p-5"
              >
                <span className={`inline-flex h-11 w-11 items-center justify-center rounded-2xl ${softOf(s.tone)}`}>
                  <Icon name={s.icon} className="h-5 w-5" />
                </span>
                <span className="font-semibold text-ink-900">{s.title}</span>
                <Icon name="arrow" className="ml-auto h-4 w-4 text-ink-300" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTABand />
    </>
  );
}
