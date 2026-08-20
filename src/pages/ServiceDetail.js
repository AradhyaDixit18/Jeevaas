import { useParams, Link, Navigate } from "react-router-dom";
import SEO from "../components/SEO";
import Reveal from "../components/Reveal";
import Icon from "../components/Icon";
import CTABand from "../components/CTABand";
import { getService, services } from "../data/content";
import { site, links } from "../config/site";
import { gradientOf, softOf } from "../lib/tones";

export default function ServiceDetail() {
  const { slug } = useParams();
  const service = getService(slug);

  if (!service) return <Navigate to="/departments" replace />;

  const others = services.filter((s) => s.slug !== slug).slice(0, 4);

  const schema = {
    "@context": "https://schema.org",
    "@type": "MedicalClinic",
    name: `${service.title} — ${site.name}`,
    description: service.overview,
    url: `${site.url}/departments/${service.slug}`,
    medicalSpecialty: service.title,
    parentOrganization: { "@type": "Hospital", name: site.name },
  };

  return (
    <>
      <SEO
        title={service.title}
        description={service.short}
        path={`/departments/${service.slug}`}
        schema={schema}
      />

      {/* Gradient banner tinted by the department tone */}
      <section className={`relative overflow-hidden bg-gradient-to-br ${gradientOf(service.tone)}`}>
        <div className="absolute inset-0 bg-plus-white opacity-60" aria-hidden="true" />
        <div className="container-x relative py-14 sm:py-16">
          <nav aria-label="Breadcrumb" className="text-sm text-white/70">
            <Link to="/" className="hover:text-white">Home</Link>
            <span className="mx-2">/</span>
            <Link to="/departments" className="hover:text-white">Departments</Link>
            <span className="mx-2">/</span>
            <span className="text-white">{service.title}</span>
          </nav>
          <Reveal className="mt-5 flex items-start gap-4">
            <span className="inline-flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-white/15 text-white ring-1 ring-white/25 backdrop-blur-sm">
              <Icon name={service.icon} className="h-8 w-8" />
            </span>
            <div>
              <h1 className="text-3xl font-extrabold text-white sm:text-4xl lg:text-5xl">
                {service.title}
              </h1>
              <p className="mt-3 max-w-2xl text-lg text-white/90">{service.short}</p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="container-x py-16 sm:py-20">
        <div className="grid gap-12 lg:grid-cols-5">
          <div className="lg:col-span-3">
            <Reveal>
              <h2 className="text-2xl font-bold text-ink-900">Overview</h2>
              <p className="mt-3 text-ink-600">{service.overview}</p>

              <h3 className="mt-8 text-xl font-bold text-ink-900">What we offer</h3>
              <ul className="mt-4 space-y-3">
                {service.points.map((p) => (
                  <li key={p} className="flex gap-3 text-ink-700">
                    <Icon name="check" className="mt-1 h-5 w-5 shrink-0 text-teal-600" />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>

              {service.conditions?.length > 0 && (
                <>
                  <h3 className="mt-8 text-xl font-bold text-ink-900">Conditions we treat</h3>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {service.conditions.map((c) => (
                      <li
                        key={c}
                        className={`rounded-full px-3.5 py-1.5 text-sm font-medium ring-1 ring-ink-100 ${softOf(
                          service.tone
                        )}`}
                      >
                        {c}
                      </li>
                    ))}
                  </ul>
                </>
              )}
            </Reveal>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-2">
            <Reveal delay={0.1}>
              <div className="card sticky top-28 p-7">
                <h3 className="text-lg font-bold text-ink-900">Is this for me?</h3>
                <p className="mt-2 text-sm text-ink-600">{service.good_for}</p>
                <div className="mt-6 space-y-3">
                  <Link to={`/book?service=${service.slug}`} className="btn-primary btn-lg w-full">
                    <Icon name="calendar" className="h-4 w-4" /> Book an appointment
                  </Link>
                  <a href={links.call} className="btn-ghost btn-md w-full">
                    <Icon name="phone" className="h-4 w-4 text-brand-600" /> Call {site.phone.display}
                  </a>
                </div>
                <div className="mt-6 rounded-2xl bg-emergency-50 p-4 text-sm text-emergency-700 ring-1 ring-emergency-100">
                  <span className="font-semibold">In an emergency,</span> call{" "}
                  <a href={links.emergency} className="font-bold underline">
                    {site.emergency.display}
                  </a>{" "}
                  or come to the hospital.
                </div>
              </div>
            </Reveal>
          </div>
        </div>

        {/* Related */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-ink-900">Other departments</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {others.map((o) => (
              <Link
                key={o.slug}
                to={`/departments/${o.slug}`}
                className="card card-hover flex items-center gap-3 p-5"
              >
                <span className={`inline-flex h-11 w-11 items-center justify-center rounded-2xl ${softOf(o.tone)}`}>
                  <Icon name={o.icon} className="h-5 w-5" />
                </span>
                <span className="font-semibold text-ink-900">{o.title}</span>
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
