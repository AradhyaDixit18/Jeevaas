import { useRef, useState } from "react";
import SEO from "../components/SEO";
import PageHeader from "../components/PageHeader";
import Reveal from "../components/Reveal";
import Icon from "../components/Icon";
import { site, links } from "../config/site";
import { sendAppointment } from "../lib/appointment";

const isEmail = (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
const isPhone = (v) => /^(\+?91[-\s]?)?[6-9]\d{9}$/.test(v.replace(/[\s-]/g, ""));

function ContactCard({ icon, label, value, href, external, tone = "brand" }) {
  const iconCls =
    tone === "emergency"
      ? "bg-emergency-50 text-emergency-600"
      : "bg-brand-50 text-brand-600";
  const inner = (
    <>
      <span className={`inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl ${iconCls}`}>
        <Icon name={icon} className="h-5 w-5" />
      </span>
      <span className="min-w-0">
        <span className="block text-xs font-semibold uppercase tracking-wide text-ink-400">{label}</span>
        <span className="mt-0.5 block break-words font-semibold text-ink-900">{value}</span>
      </span>
    </>
  );
  const cls = "card card-hover flex items-center gap-4 p-5";
  return href ? (
    <a href={href} className={cls} {...(external ? { target: "_blank", rel: "noreferrer" } : {})}>
      {inner}
    </a>
  ) : (
    <div className={cls}>{inner}</div>
  );
}

export default function Contact() {
  const [form, setForm] = useState({ patient_name: "", phone: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState(null); // 'ok' | 'error' | null
  const [sending, setSending] = useState(false);
  const guard = useRef(false);

  const set = (k) => (e) => {
    setForm((f) => ({ ...f, [k]: e.target.value }));
    setErrors((x) => ({ ...x, [k]: undefined }));
  };

  const submit = async (e) => {
    e.preventDefault();
    if (guard.current || sending) return;
    const err = {};
    if (!form.patient_name.trim()) err.patient_name = "Please enter your name.";
    if (!form.phone.trim() || !isPhone(form.phone)) err.phone = "Enter a valid Indian mobile number.";
    if (!form.email.trim() || !isEmail(form.email)) err.email = "Enter a valid email.";
    if (!form.message.trim()) err.message = "Please enter a message.";
    setErrors(err);
    if (Object.keys(err).length) return;

    guard.current = true;
    setSending(true);
    setStatus(null);
    try {
      await sendAppointment({
        ...form,
        department: "General Enquiry",
        appointment_type: "General Enquiry",
        doctor: "",
        appointment_date: "",
        appointment_time: "",
        age: "",
      });
      setStatus("ok");
      setForm({ patient_name: "", phone: "", email: "", message: "" });
    } catch (e2) {
      if (process.env.NODE_ENV === "development") console.error(e2);
      setStatus("error");
      guard.current = false;
    } finally {
      setSending(false);
    }
  };

  const inputCls = (err) =>
    `w-full rounded-xl border bg-white px-4 py-3 text-ink-900 placeholder:text-ink-300 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-brand-500 ${
      err ? "border-warm-500 ring-1 ring-warm-500/40" : "border-ink-200"
    }`;

  return (
    <>
      <SEO
        title="Contact Us"
        description={`Contact ${site.name} in Kalyanpur, Kanpur. Call, WhatsApp, or send us a message. ${site.address.full}`}
        path="/contact"
      />
      <PageHeader
        eyebrow="Get in touch"
        title="We're here to help"
        intro="Reach us by phone, WhatsApp, or the form below. For appointments, the booking page is quickest. For emergencies, call our 24x7 helpline."
      />

      {/* Emergency banner */}
      <section className="container-x pt-10">
        <div className="flex flex-col items-start justify-between gap-4 rounded-3xl bg-gradient-to-br from-emergency-600 to-emergency-700 p-6 text-white sm:flex-row sm:items-center">
          <p className="flex items-center gap-3 font-semibold">
            <Icon name="ambulance" className="h-7 w-7" />
            {site.emergency.label} — open 24 hours, every day.
          </p>
          <a href={links.emergency} className="btn bg-white text-emergency-700 btn-md hover:bg-emergency-50">
            <Icon name="phone" className="h-4 w-4" /> {site.emergency.display}
          </a>
        </div>
      </section>

      <section className="container-x py-12 sm:py-16">
        <div className="grid gap-10 lg:grid-cols-2">
          {/* Left: info */}
          <div>
            <div className="grid gap-4 sm:grid-cols-2">
              <ContactCard icon="phone" label="Phone" value={site.phone.display} href={links.call} />
              <ContactCard icon="ambulance" label="Emergency (24x7)" value={site.emergency.display} href={links.emergency} tone="emergency" />
              <ContactCard icon="whatsapp" label="WhatsApp" value="Message us" href={links.whatsapp} external />
              <ContactCard icon="email" label="Email" value={site.email} href={links.email} />
            </div>

            <Reveal>
              <div className="card mt-4 p-6">
                <h3 className="flex items-center gap-2 font-bold text-ink-900">
                  <Icon name="clock" className="h-5 w-5 text-brand-600" /> Opening Hours
                </h3>
                <ul className="mt-3 space-y-1.5 text-sm">
                  {site.hours.map((h) => (
                    <li key={h.day} className="flex justify-between gap-4 text-ink-600">
                      <span>{h.day}</span>
                      <span className="font-semibold text-ink-900">{h.time}</span>
                    </li>
                  ))}
                </ul>
                {!site.hoursConfirmed && (
                  <p className="mt-3 text-xs text-ink-400">
                    Please call ahead to confirm current OPD timings.
                  </p>
                )}
                <p className="mt-3 border-t border-ink-100 pt-3 text-sm text-ink-600">
                  {site.emergencyNote}
                </p>
              </div>
            </Reveal>

            <address className="mt-4 rounded-2xl bg-brand-50/60 p-5 not-italic text-ink-700">
              <strong className="text-ink-900">{site.legalName}</strong>
              <br />
              {site.address.full}
            </address>
          </div>

          {/* Right: form */}
          <Reveal delay={0.1}>
            <form onSubmit={submit} noValidate className="card p-6 sm:p-8">
              <h2 className="text-xl font-bold text-ink-900">Send us a message</h2>
              <p className="mt-1 text-sm text-ink-500">We'll get back to you as soon as we can.</p>

              <div className="mt-5 space-y-4">
                <div>
                  <label className="mb-1.5 block text-sm font-semibold text-ink-800">
                    Name <span className="text-warm-500">*</span>
                  </label>
                  <input type="text" className={inputCls(errors.patient_name)} value={form.patient_name} onChange={set("patient_name")} autoComplete="name" />
                  {errors.patient_name && <p role="alert" className="mt-1 text-xs text-warm-600">{errors.patient_name}</p>}
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="mb-1.5 block text-sm font-semibold text-ink-800">
                      Phone <span className="text-warm-500">*</span>
                    </label>
                    <input type="tel" className={inputCls(errors.phone)} value={form.phone} onChange={set("phone")} autoComplete="tel" />
                    {errors.phone && <p role="alert" className="mt-1 text-xs text-warm-600">{errors.phone}</p>}
                  </div>
                  <div>
                    <label className="mb-1.5 block text-sm font-semibold text-ink-800">
                      Email <span className="text-warm-500">*</span>
                    </label>
                    <input type="email" className={inputCls(errors.email)} value={form.email} onChange={set("email")} autoComplete="email" />
                    {errors.email && <p role="alert" className="mt-1 text-xs text-warm-600">{errors.email}</p>}
                  </div>
                </div>
                <div>
                  <label className="mb-1.5 block text-sm font-semibold text-ink-800">
                    Message <span className="text-warm-500">*</span>
                  </label>
                  <textarea rows={4} className={inputCls(errors.message)} value={form.message} onChange={set("message")} />
                  {errors.message && <p role="alert" className="mt-1 text-xs text-warm-600">{errors.message}</p>}
                </div>
              </div>

              {status === "ok" && (
                <div role="status" className="mt-4 rounded-xl bg-teal-50 p-3 text-sm font-medium text-teal-700 ring-1 ring-teal-200">
                  Thank you! Your message has been sent. We'll be in touch soon.
                </div>
              )}
              {status === "error" && (
                <div role="alert" className="mt-4 rounded-xl bg-warm-500/10 p-3 text-sm font-medium text-warm-600 ring-1 ring-warm-500/30">
                  Something went wrong. Please try again or call {site.phone.display}.
                </div>
              )}

              <button type="submit" className="btn-primary btn-lg mt-6 w-full" disabled={sending} aria-busy={sending}>
                {sending ? (
                  <>
                    <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/40 border-t-white" />
                    Sending…
                  </>
                ) : (
                  <>Send Message</>
                )}
              </button>
            </form>
          </Reveal>
        </div>
      </section>

      {/* Map */}
      <section className="pb-16 sm:pb-20">
        <div className="container-x">
          <div className="overflow-hidden rounded-3xl shadow-card ring-1 ring-ink-100">
            <iframe
              title={`Map to ${site.name}`}
              src={links.mapsEmbed}
              width="100%"
              height="420"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
          <div className="mt-4 text-center">
            <a href={links.directions} target="_blank" rel="noreferrer" className="btn-ghost btn-lg">
              <Icon name="pin" className="h-4 w-4 text-brand-600" /> Get Directions
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
