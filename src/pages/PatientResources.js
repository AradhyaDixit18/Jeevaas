import { Link } from "react-router-dom";
import SEO from "../components/SEO";
import PageHeader from "../components/PageHeader";
import Reveal from "../components/Reveal";
import Icon from "../components/Icon";
import CTABand from "../components/CTABand";
import { patientResources } from "../data/content";
import { site, links } from "../config/site";

export default function PatientResources() {
  return (
    <>
      <SEO
        title="Patient Information"
        description="Everything you need for your visit to Jeevaas Hospital: booking, what to bring, admissions, billing and insurance, and visiting hours."
        path="/patient-resources"
      />
      <PageHeader
        eyebrow="For patients & families"
        title="Everything you need for your visit"
        intro="Clear, simple guidance to help you feel prepared and at ease before, during, and after your time with us."
      />

      <section className="container-x py-16 sm:py-20">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {patientResources.map((r, i) => (
            <Reveal key={r.title} delay={(i % 3) * 0.05}>
              <div className="card h-full p-8">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-teal-100 text-teal-600">
                  <Icon name={r.icon} className="h-6 w-6" />
                </span>
                <h3 className="mt-5 text-xl font-bold text-ink-900">{r.title}</h3>
                <p className="mt-2 leading-relaxed text-ink-600">{r.text}</p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Emergency note */}
        <Reveal>
          <div className="mt-8 flex flex-col items-start justify-between gap-4 rounded-3xl bg-emergency-50 p-6 ring-1 ring-emergency-100 sm:flex-row sm:items-center">
            <p className="flex items-start gap-3 text-emergency-700">
              <Icon name="ambulance" className="mt-0.5 h-6 w-6 shrink-0" />
              <span className="text-sm font-medium">{site.emergencyNote}</span>
            </p>
            <a href={links.emergency} className="btn-emergency btn-md shrink-0">
              <Icon name="phone" className="h-4 w-4" /> {site.emergency.display}
            </a>
          </div>
        </Reveal>

        {/* Contact quick card */}
        <Reveal>
          <div className="mt-8 grid gap-4 rounded-3xl bg-ink-950 p-8 text-white sm:grid-cols-3">
            <a href={links.call} className="flex items-center gap-3 rounded-2xl bg-white/5 p-5 ring-1 ring-white/10 hover:bg-white/10">
              <Icon name="phone" className="h-6 w-6 text-brand-300" />
              <span>
                <span className="block text-xs text-ink-300">Call us</span>
                <span className="font-semibold">{site.phone.display}</span>
              </span>
            </a>
            <a href={links.whatsapp} target="_blank" rel="noreferrer" className="flex items-center gap-3 rounded-2xl bg-white/5 p-5 ring-1 ring-white/10 hover:bg-white/10">
              <Icon name="whatsapp" className="h-6 w-6 text-teal-300" />
              <span>
                <span className="block text-xs text-ink-300">Message us</span>
                <span className="font-semibold">WhatsApp</span>
              </span>
            </a>
            <Link to="/book" className="flex items-center gap-3 rounded-2xl bg-brand-600 p-5 ring-1 ring-brand-500 hover:bg-brand-700">
              <Icon name="calendar" className="h-6 w-6 text-white" />
              <span>
                <span className="block text-xs text-brand-100">Online</span>
                <span className="font-semibold">Book Appointment</span>
              </span>
            </Link>
          </div>
        </Reveal>
      </section>

      <CTABand />
    </>
  );
}
