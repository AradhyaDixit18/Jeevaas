import SEO from "../components/SEO";
import PageHeader from "../components/PageHeader";
import Reveal from "../components/Reveal";
import Icon from "../components/Icon";
import AppointmentForm from "../components/AppointmentForm";
import { site, links } from "../config/site";

const steps = [
  { n: 1, title: "Patient details", text: "Tell us who the appointment is for." },
  { n: 2, title: "Department & time", text: "Pick a department, date, and time." },
  { n: 3, title: "Review & submit", text: "Check everything, then send." },
  { n: 4, title: "We confirm", text: "Our team calls you to confirm the slot." },
];

export default function Book() {
  return (
    <>
      <SEO
        title="Book an Appointment"
        description="Request an appointment at Jeevaas Hospital, Kanpur in under a minute. Choose a department and our team will call to confirm your slot."
        path="/book"
      />
      <PageHeader
        eyebrow="Book online"
        title="Request your appointment"
        intro="It takes under a minute. Fill in the details and our team will call you to confirm. For emergencies, please call our 24x7 helpline."
        crumb="Book Appointment"
      />

      <section className="container-x py-16 sm:py-20">
        <div className="grid gap-10 lg:grid-cols-3">
          {/* Form */}
          <div className="lg:col-span-2">
            <AppointmentForm />
          </div>

          {/* Sidebar */}
          <aside className="space-y-6">
            <Reveal>
              <div className="card p-6">
                <h2 className="text-lg font-bold text-ink-900">How it works</h2>
                <ol className="mt-4 space-y-4">
                  {steps.map((s) => (
                    <li key={s.n} className="flex gap-3">
                      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-brand-600 text-xs font-bold text-white">
                        {s.n}
                      </span>
                      <span>
                        <span className="block text-sm font-semibold text-ink-900">{s.title}</span>
                        <span className="block text-sm text-ink-500">{s.text}</span>
                      </span>
                    </li>
                  ))}
                </ol>
              </div>
            </Reveal>

            <Reveal delay={0.05}>
              <div className="card bg-emergency-50 p-6 ring-1 ring-emergency-100">
                <h2 className="flex items-center gap-2 text-lg font-bold text-emergency-700">
                  <Icon name="ambulance" className="h-5 w-5" /> Medical emergency?
                </h2>
                <p className="mt-2 text-sm text-emergency-700/90">
                  Do not wait for an appointment. Call our 24x7 helpline or come straight
                  to the hospital.
                </p>
                <a href={links.emergency} className="btn-emergency btn-md mt-4 w-full">
                  <Icon name="phone" className="h-4 w-4" /> {site.emergency.display}
                </a>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="card bg-ink-950 p-6 text-white">
                <h2 className="text-lg font-bold text-white">Prefer to talk?</h2>
                <p className="mt-2 text-sm text-ink-200">
                  Call us or message on WhatsApp and we'll help you book.
                </p>
                <div className="mt-4 space-y-2">
                  <a href={links.call} className="btn-primary btn-md w-full">
                    <Icon name="phone" className="h-4 w-4" /> {site.phone.display}
                  </a>
                  <a href={links.whatsapp} target="_blank" rel="noreferrer" className="btn-teal btn-md w-full">
                    <Icon name="whatsapp" className="h-4 w-4" /> WhatsApp
                  </a>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.15}>
              <p className="rounded-2xl bg-brand-50/70 p-4 text-xs leading-relaxed text-ink-500">
                Submitting a request does not confirm your appointment. Our team will
                contact you to finalise the date and time.
              </p>
            </Reveal>
          </aside>
        </div>
      </section>
    </>
  );
}
