import { Link } from "react-router-dom";
import SEO from "../components/SEO";
import PageHeader from "../components/PageHeader";
import Reveal from "../components/Reveal";
import Icon from "../components/Icon";
import CTABand from "../components/CTABand";
import { site, links } from "../config/site";
import { whyChooseUs } from "../data/content";

const values = [
  { icon: "heart", title: "Patient First", text: "Every plan starts with your comfort, your goals, and honest advice." },
  { icon: "shield", title: "Safety & Hygiene", text: "Strict infection control and clear protocols on every single visit." },
  { icon: "sparkle", title: "Advanced Care", text: "Modern equipment and up-to-date methods for precise, effective treatment." },
  { icon: "users", title: "One Coordinated Team", text: "Specialists who work together, so your care is joined-up, not fragmented." },
];

const capabilities = [
  { icon: "hospital", label: "Multiple specialties under one roof" },
  { icon: "ambulance", label: "24x7 emergency & ambulance service" },
  { icon: "microscope", label: "In-house laboratory & imaging" },
  { icon: "bed", label: "Inpatient wards & intensive care" },
];

export default function About() {
  return (
    <>
      <SEO
        title="About Us"
        description={`Learn about ${site.name}, a modern multispeciality hospital in Kalyanpur, Kanpur, focused on patient-first, coordinated care.`}
        path="/about"
      />
      <PageHeader
        eyebrow="About Jeevaas"
        title="A modern hospital for your whole family"
        intro={`${site.name} brings together caring people, specialist doctors, and modern medicine in the heart of Kalyanpur, Kanpur.`}
      />

      <section className="container-x py-16 sm:py-20">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-brand-600 to-ink-900 p-8 text-white shadow-lift sm:p-10">
              <div className="absolute inset-0 bg-plus-white opacity-50" aria-hidden="true" />
              <div className="relative">
                <h3 className="text-xl font-bold text-white">Complete care, in one place</h3>
                <ul className="mt-6 space-y-4">
                  {capabilities.map((c) => (
                    <li key={c.label} className="flex items-center gap-4">
                      <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-white/15 ring-1 ring-white/25">
                        <Icon name={c.icon} className="h-5 w-5 text-teal-300" />
                      </span>
                      <span className="text-sm font-medium text-white/95">{c.label}</span>
                    </li>
                  ))}
                </ul>
                <Link to="/departments" className="btn bg-white text-brand-700 btn-md mt-8 hover:bg-brand-50">
                  Explore departments <Icon name="arrow" className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <span className="eyebrow">
              <span className="h-2 w-2 rounded-sm bg-teal-500" /> Our story
            </span>
            <h2 className="mt-3 text-3xl font-bold text-ink-900">
              Healthcare that feels calm, clear, and caring
            </h2>
            <p className="mt-4 text-ink-600">
              {site.name} was built on a simple idea: quality healthcare should be
              accessible, coordinated, and kind. From the moment you arrive, our focus
              is on listening carefully, explaining every step in plain language, and
              giving you the information you need to make confident decisions.
            </p>
            <p className="mt-4 text-ink-600">
              As a multispeciality hospital, we care for the whole family, from a
              child's routine check-up to advanced treatment for adults, with
              specialists, diagnostics, and emergency care all in one place in
              Kalyanpur, Kanpur.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Link to="/doctors" className="btn-primary btn-md">
                <Icon name="userMd" className="h-4 w-4" /> Find a Doctor
              </Link>
              <a href={links.call} className="btn-ghost btn-md">
                <Icon name="phone" className="h-4 w-4 text-brand-600" /> {site.phone.display}
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Mission / Vision */}
      <section className="bg-brand-50/50 py-16 sm:py-20">
        <div className="container-x grid gap-6 md:grid-cols-2">
          <Reveal>
            <div className="card h-full p-8">
              <Icon name="heart" className="h-8 w-8 text-brand-600" />
              <h3 className="mt-4 text-xl font-bold text-ink-900">Our Mission</h3>
              <p className="mt-3 text-ink-600">
                To provide high-quality, patient-first healthcare that brings specialist
                expertise, modern diagnostics, and compassionate care together, so every
                person who walks through our doors is treated with skill and dignity.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="card h-full p-8">
              <Icon name="sparkle" className="h-8 w-8 text-teal-600" />
              <h3 className="mt-4 text-xl font-bold text-ink-900">Our Vision</h3>
              <p className="mt-3 text-ink-600">
                To be Kanpur's most trusted multispeciality hospital, known for clinical
                excellence, honest advice, and a warm, family-friendly experience for
                patients of every age.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Values */}
      <section className="container-x py-16 sm:py-20">
        <div className="max-w-2xl">
          <span className="eyebrow">
            <span className="h-2 w-2 rounded-sm bg-teal-500" /> What we stand for
          </span>
          <h2 className="mt-3 text-3xl font-bold text-ink-900">Our values</h2>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((v, i) => (
            <Reveal key={v.title} delay={i * 0.05}>
              <div className="card h-full p-7">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-50 text-brand-600">
                  <Icon name={v.icon} className="h-6 w-6" />
                </span>
                <h3 className="mt-5 text-lg font-bold text-ink-900">{v.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-600">{v.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Why choose us reused */}
      <section className="bg-ink-950 py-16 text-white sm:py-20">
        <div className="container-x">
          <div className="max-w-2xl">
            <span className="eyebrow text-teal-300">
              <span className="h-2 w-2 rounded-sm bg-teal-400" /> The Jeevaas difference
            </span>
            <h2 className="mt-3 text-3xl font-bold text-white">
              Reasons families choose us
            </h2>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {whyChooseUs.map((w, i) => (
              <Reveal key={w.title} delay={i * 0.05}>
                <div className="h-full rounded-3xl bg-white/5 p-7 ring-1 ring-white/10">
                  <Icon name={w.icon} className="h-7 w-7 text-teal-300" />
                  <h3 className="mt-4 text-lg font-bold text-white">{w.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-200">{w.text}</p>
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
