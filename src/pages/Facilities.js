import SEO from "../components/SEO";
import PageHeader from "../components/PageHeader";
import Reveal from "../components/Reveal";
import Icon from "../components/Icon";
import CTABand from "../components/CTABand";
import { facilities, facilitySpaces } from "../data/content";
import { gradientOf } from "../lib/tones";

export default function Facilities() {
  return (
    <>
      <SEO
        title="Facilities & Infrastructure"
        description="A modern multispeciality hospital in Kalyanpur, Kanpur with 24x7 emergency, ICU, modular operation theatres, in-house diagnostics, and pharmacy."
        path="/facilities"
      />
      <PageHeader
        eyebrow="Our facility"
        title="Built for safe, complete care"
        intro="Modern infrastructure and up-to-date equipment across emergency, surgical, inpatient, and diagnostic services, all designed around your safety and comfort."
      />

      <section className="container-x py-16 sm:py-20">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {facilities.map((f, i) => (
            <Reveal key={f.title} delay={(i % 3) * 0.05}>
              <div className="card h-full p-7">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-teal-100 text-teal-600">
                  <Icon name={f.icon} className="h-6 w-6" />
                </span>
                <h3 className="mt-5 text-lg font-bold text-ink-900">{f.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-600">{f.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Spaces / infrastructure grid (branded tiles, no external photos) */}
      <section className="bg-brand-50/50 py-16 sm:py-20">
        <div className="container-x">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <span className="eyebrow justify-center">
              <span className="h-2 w-2 rounded-sm bg-teal-500" /> Inside the hospital
            </span>
            <h2 className="mt-3 text-3xl font-bold text-ink-900">Our spaces</h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {facilitySpaces.map((s, i) => (
              <Reveal key={s.title} delay={(i % 4) * 0.05}>
                <div className="group overflow-hidden rounded-3xl bg-white shadow-card ring-1 ring-ink-100">
                  <div className={`relative flex h-32 items-center justify-center bg-gradient-to-br ${gradientOf(s.tone)}`}>
                    <div className="absolute inset-0 bg-plus-white opacity-70" aria-hidden="true" />
                    <Icon name={s.icon} className="relative h-12 w-12 text-white transition-transform duration-500 group-hover:scale-110" />
                  </div>
                  <div className="p-5">
                    <h3 className="text-base font-bold text-ink-900">{s.title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-ink-600">{s.text}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTABand />
    </>
  );
}
