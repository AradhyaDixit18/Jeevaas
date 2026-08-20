import { Link } from "react-router-dom";
import SEO from "../components/SEO";
import Icon from "../components/Icon";
import Reveal from "../components/Reveal";
import SectionHeading from "../components/SectionHeading";
import ServiceCard from "../components/ServiceCard";
import CTABand from "../components/CTABand";
import { site, links } from "../config/site";
import {
  services,
  whyChooseUs,
  healthTips,
  trustBadges,
  testimonials,
} from "../data/content";

const quickActions = [
  { label: "Book Appointment", to: "/book", icon: "calendar", primary: true },
  { label: "Find a Doctor", to: "/doctors", icon: "userMd" },
  { label: "Our Departments", to: "/departments", icon: "hospital" },
  { label: "Patient Info", to: "/patient-resources", icon: "list" },
];

const assurances = [
  { value: `${services.length}+`, label: "Specialties" },
  { value: "24x7", label: "Emergency Care" },
  { value: "In-house", label: "Diagnostics" },
  { value: "One Roof", label: "Complete Care" },
];

export default function Home() {
  const featured = services.slice(0, 8);

  return (
    <>
      <SEO
        title="Multispeciality Hospital in Kalyanpur, Kanpur"
        description={site.description}
        path="/"
      />

      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden bg-ink-950">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-800 via-ink-950 to-ink-950" />
        <div className="absolute inset-0 bg-plus-white opacity-60" aria-hidden="true" />
        <div className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-brand-500/25 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-32 left-10 h-80 w-80 rounded-full bg-teal-500/15 blur-3xl" />

        <div className="container-x relative grid items-center gap-12 py-16 sm:py-20 lg:grid-cols-12 lg:py-24">
          <div className="lg:col-span-7">
            <Reveal>
              <span className="eyebrow text-teal-300">
                <span className="h-2 w-2 rounded-sm bg-teal-400" /> Multispeciality Hospital · Kanpur
              </span>
            </Reveal>
            <Reveal delay={0.05}>
              <h1 className="mt-4 text-4xl font-extrabold leading-[1.08] text-white sm:text-5xl lg:text-6xl">
                Compassionate care,{" "}
                <span className="bg-gradient-to-r from-brand-300 to-teal-300 bg-clip-text text-transparent">
                  advanced medicine
                </span>
              </h1>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-5 max-w-xl text-lg leading-relaxed text-ink-200">
                {site.name} brings specialist doctors, modern diagnostics, and
                24x7 emergency care together under one roof in Kalyanpur, Kanpur —
                with a patient-first approach for your whole family.
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link to="/book" className="btn-primary btn-lg">
                  <Icon name="calendar" className="h-4 w-4" /> Book Appointment
                </Link>
                <a href={links.emergency} className="btn-emergency btn-lg">
                  <Icon name="ambulance" className="h-4 w-4" /> Emergency: {site.emergency.display}
                </a>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <ul className="mt-10 grid max-w-xl grid-cols-2 gap-3 sm:grid-cols-4">
                {trustBadges.map((b) => (
                  <li
                    key={b.label}
                    className="flex flex-col items-center gap-2 rounded-2xl bg-white/10 p-3 text-center backdrop-blur-sm ring-1 ring-white/15"
                  >
                    <Icon name={b.icon} className="h-5 w-5 text-teal-300" />
                    <span className="text-xs font-semibold text-white">{b.label}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          {/* Hero side card */}
          <div className="lg:col-span-5">
            <Reveal delay={0.15}>
              <div className="rounded-3xl bg-white/95 p-6 shadow-lift ring-1 ring-white/40 backdrop-blur sm:p-8">
                <h2 className="flex items-center gap-2 text-lg font-bold text-ink-900">
                  <Icon name="clock" className="h-5 w-5 text-brand-600" /> Hospital Timings
                </h2>
                <ul className="mt-4 space-y-2.5 text-sm">
                  {site.hours.map((h) => (
                    <li key={h.day} className="flex items-center justify-between gap-4 border-b border-ink-100 pb-2 last:border-0 last:pb-0">
                      <span className="text-ink-600">{h.day}</span>
                      <span className="font-semibold text-ink-900">{h.time}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-5 rounded-2xl bg-emergency-50 p-4 ring-1 ring-emergency-100">
                  <p className="flex items-center gap-2 text-sm font-bold text-emergency-700">
                    <Icon name="ambulance" className="h-5 w-5" /> {site.emergency.label}
                  </p>
                  <a href={links.emergency} className="mt-1 block text-lg font-extrabold text-emergency-600">
                    {site.emergency.display}
                  </a>
                </div>
                <div className="mt-4 grid grid-cols-2 gap-3">
                  <a href={links.call} className="btn-ghost btn-md">
                    <Icon name="phone" className="h-4 w-4 text-brand-600" /> Call
                  </a>
                  <a href={links.whatsapp} target="_blank" rel="noreferrer" className="btn-ghost btn-md">
                    <Icon name="whatsapp" className="h-4 w-4 text-teal-600" /> WhatsApp
                  </a>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ================= QUICK ACTIONS ================= */}
      <section className="container-x -mt-10 relative z-10">
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {quickActions.map((a) => (
            <Link
              key={a.label}
              to={a.to}
              className={`card card-hover flex items-center gap-3 p-5 ${
                a.primary ? "ring-brand-200" : ""
              }`}
            >
              <span
                className={`inline-flex h-11 w-11 items-center justify-center rounded-2xl ${
                  a.primary ? "bg-brand-600 text-white" : "bg-brand-50 text-brand-600"
                }`}
              >
                <Icon name={a.icon} className="h-5 w-5" />
              </span>
              <span className="font-semibold text-ink-900">{a.label}</span>
              <Icon name="arrow" className="ml-auto h-4 w-4 text-ink-300" />
            </Link>
          ))}
        </div>
      </section>

      {/* ================= DEPARTMENTS ================= */}
      <section className="container-x py-16 sm:py-20">
        <SectionHeading
          eyebrow="Our departments"
          title="Specialist care across every major field"
          intro="From everyday illness to advanced treatment, our departments work together so you get complete care in one place."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featured.map((s, i) => (
            <Reveal key={s.slug} delay={(i % 4) * 0.05}>
              <ServiceCard service={s} />
            </Reveal>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link to="/departments" className="btn-ghost btn-lg">
            View all departments <Icon name="arrow" className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* ================= ASSURANCE STRIP ================= */}
      <section className="bg-ink-950 py-12">
        <div className="container-x grid grid-cols-2 gap-6 text-center lg:grid-cols-4">
          {assurances.map((a, i) => (
            <Reveal key={a.label} delay={i * 0.05}>
              <div>
                <p className="font-display text-3xl font-extrabold text-white sm:text-4xl">
                  {a.value}
                </p>
                <p className="mt-1 text-sm font-medium text-ink-300">{a.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ================= WHY CHOOSE US ================= */}
      <section className="bg-brand-50/50 py-16 sm:py-20">
        <div className="container-x">
          <SectionHeading
            eyebrow="Why Jeevaas"
            title="Care you can trust, comfort you can feel"
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {whyChooseUs.map((w, i) => (
              <Reveal key={w.title} delay={i * 0.05}>
                <div className="card h-full p-7">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-teal-100 text-teal-600">
                    <Icon name={w.icon} className="h-6 w-6" />
                  </span>
                  <h3 className="mt-5 text-lg font-bold text-ink-900">{w.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-600">{w.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ================= KIDS ZONE TEASER ================= */}
      <section className="container-x py-16 sm:py-20">
        <Reveal className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-brand-600 via-brand-700 to-teal-700 p-8 shadow-lift sm:p-12">
          <div className="absolute inset-0 bg-plus-white opacity-50" aria-hidden="true" />
          <div className="pointer-events-none absolute -right-10 -top-10 h-48 w-48 rounded-full bg-teal-400/30 blur-3xl" />
          <div className="relative grid items-center gap-8 lg:grid-cols-2">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-white ring-1 ring-white/25">
                <Icon name="smileBeam" className="h-4 w-4" /> Just for kids
              </span>
              <h2 className="mt-4 font-display text-3xl font-extrabold text-white sm:text-4xl">
                A friendly Kids Zone, so hospital visits feel fun
              </h2>
              <p className="mt-4 max-w-md text-white/90">
                Interactive games help little ones meet our hospital heroes, learn healthy habits,
                master the 2-minute brushing challenge, and earn a bravery certificate.
              </p>
              <Link to="/kids" className="btn bg-white text-brand-700 btn-lg mt-6 hover:bg-brand-50">
                <Icon name="smileBeam" className="h-4 w-4" /> Explore the Kids Zone
              </Link>
            </div>
            <div className="grid grid-cols-3 gap-3">
              {[
                { icon: "users", label: "Meet the Heroes" },
                { icon: "tooth", label: "Brushing Timer" },
                { icon: "apple", label: "Healthy Plate" },
                { icon: "star", label: "Fun Quiz" },
                { icon: "stethoscope", label: "Tool Match" },
                { icon: "medal", label: "Bravery Award" },
              ].map((k) => (
                <div
                  key={k.label}
                  className="flex flex-col items-center gap-2 rounded-2xl bg-white/10 p-4 text-center ring-1 ring-white/15"
                >
                  <Icon name={k.icon} className="h-6 w-6 text-teal-200" />
                  <span className="text-[11px] font-semibold text-white">{k.label}</span>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </section>

      {/* ================= EMERGENCY + CAREERS ================= */}
      <section className="container-x py-16 sm:py-20">
        <div className="grid gap-6 lg:grid-cols-2">
          <Reveal>
            <div className="relative flex h-full flex-col overflow-hidden rounded-3xl bg-gradient-to-br from-emergency-600 to-emergency-700 p-8 text-white sm:p-10">
              <div className="absolute inset-0 bg-plus-white opacity-50" aria-hidden="true" />
              <div className="relative">
                <Icon name="ambulance" className="h-9 w-9" />
                <h2 className="mt-4 text-2xl font-bold text-white sm:text-3xl">24x7 Emergency & Ambulance</h2>
                <p className="mt-3 max-w-md text-emergency-50">
                  A trained team, rapid triage, and a ready ambulance service, any
                  hour of the day. In an emergency, every minute matters.
                </p>
                <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                  <a href={links.emergency} className="btn bg-white text-emergency-700 btn-lg hover:bg-emergency-50">
                    <Icon name="phone" className="h-4 w-4" /> Call {site.emergency.display}
                  </a>
                  <a href={links.directions} target="_blank" rel="noreferrer" className="btn-outline-white btn-lg">
                    <Icon name="pin" className="h-4 w-4" /> Get Directions
                  </a>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="relative flex h-full flex-col overflow-hidden rounded-3xl bg-ink-900 p-8 text-white sm:p-10">
              <div className="absolute inset-0 bg-plus-white opacity-50" aria-hidden="true" />
              <div className="pointer-events-none absolute -right-10 -top-10 h-48 w-48 rounded-full bg-teal-500/20 blur-3xl" />
              <div className="relative">
                <Icon name="briefcase" className="h-9 w-9 text-teal-300" />
                <h2 className="mt-4 text-2xl font-bold text-white sm:text-3xl">Build your career with us</h2>
                <p className="mt-3 max-w-md text-ink-200">
                  We are always looking for compassionate, skilled people, from
                  doctors and nurses to support staff. Grow with a hospital that
                  puts patients first.
                </p>
                <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                  <Link to="/careers" className="btn-teal btn-lg">
                    <Icon name="arrow" className="h-4 w-4" /> View Careers
                  </Link>
                  <Link to="/about" className="btn-outline-white btn-lg">
                    About the hospital
                  </Link>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ================= HEALTH TIPS TEASER ================= */}
      <section className="bg-ink-950 py-16 text-white sm:py-20">
        <div className="container-x">
          <SectionHeading
            eyebrow="Health & wellness"
            title="Small habits, healthier lives"
            intro="Simple, everyday guidance from our team to help you and your family stay well."
            light
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {healthTips.slice(0, 3).map((t, i) => (
              <Reveal key={t.title} delay={i * 0.05}>
                <div className="h-full rounded-3xl bg-white/5 p-7 ring-1 ring-white/10">
                  <Icon name={t.icon} className="h-7 w-7 text-teal-300" />
                  <h3 className="mt-4 text-lg font-bold text-white">{t.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-200">{t.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link to="/health-wellness" className="btn-outline-white btn-lg">
              More health tips <Icon name="arrow" className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ================= TESTIMONIALS (only when real ones exist) ======== */}
      {testimonials.length > 0 && (
        <section className="container-x py-16 sm:py-20">
          <SectionHeading eyebrow="Patient stories" title="What our patients say" />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((t, i) => (
              <Reveal key={i} delay={i * 0.05}>
                <figure className="card h-full p-7">
                  <div className="flex gap-0.5 text-warm-500">
                    {Array.from({ length: t.rating || 5 }).map((_, j) => (
                      <Icon key={j} name="star" className="h-4 w-4" />
                    ))}
                  </div>
                  <blockquote className="mt-4 text-ink-700">"{t.review}"</blockquote>
                  <figcaption className="mt-4 font-semibold text-ink-900">
                    {t.name}
                    {t.location && (
                      <span className="font-normal text-ink-500"> · {t.location}</span>
                    )}
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </section>
      )}

      <CTABand />
    </>
  );
}
