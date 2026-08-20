import { useState } from "react";
import { Link } from "react-router-dom";
import SEO from "../components/SEO";
import Reveal from "../components/Reveal";
import Icon from "../components/Icon";
import CTABand from "../components/CTABand";
import { softOf } from "../lib/tones";
import HospitalHeroes from "../components/kids/HospitalHeroes";
import HospitalJourney from "../components/kids/HospitalJourney";
import HealthyHabitsQuiz from "../components/kids/HealthyHabitsQuiz";
import HealthyPlate from "../components/kids/HealthyPlate";
import BrushingTimer from "../components/kids/BrushingTimer";
import ToolMatch from "../components/kids/ToolMatch";
import BraveryCertificate from "../components/kids/BraveryCertificate";

const activities = [
  { key: "heroes", label: "Meet the Heroes", icon: "users", tone: "blue", Comp: HospitalHeroes, title: "Meet the Hospital Heroes" },
  { key: "journey", label: "Hospital Journey", icon: "hospital", tone: "sky", Comp: HospitalJourney, title: "Your Hospital Journey" },
  { key: "quiz", label: "Healthy Quiz", icon: "star", tone: "violet", Comp: HealthyHabitsQuiz, title: "The Healthy Habits Quiz" },
  { key: "plate", label: "Healthy Plate", icon: "apple", tone: "emerald", Comp: HealthyPlate, title: "Sort the Healthy Plate" },
  { key: "brush", label: "Brushing Timer", icon: "tooth", tone: "teal", Comp: BrushingTimer, title: "The 2-Minute Brushing Challenge" },
  { key: "match", label: "Tool Match", icon: "stethoscope", tone: "cyan", Comp: ToolMatch, title: "Match the Doctor's Tools" },
  { key: "award", label: "Bravery Award", icon: "medal", tone: "amber", Comp: BraveryCertificate, title: "Your Certificate of Bravery" },
];

const floaties = ["userMd", "tooth", "heart", "ambulance", "apple", "star"];

export default function Kids() {
  const [active, setActive] = useState("heroes");
  const current = activities.find((a) => a.key === active) || activities[0];
  const Active = current.Comp;

  return (
    <>
      <SEO
        title="Kids Zone"
        description="A fun, friendly Kids Zone from Jeevaas Hospital, Kanpur. Interactive games and activities that help children learn about the hospital, doctors, and healthy habits."
        path="/kids"
      />

      {/* Playful hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-brand-600 via-brand-700 to-teal-700">
        <div className="absolute inset-0 bg-plus-white opacity-60" aria-hidden="true" />
        <div className="pointer-events-none absolute -right-16 -top-16 h-72 w-72 rounded-full bg-teal-400/30 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 left-10 h-72 w-72 rounded-full bg-brand-400/30 blur-3xl" />
        <div className="container-x relative py-16 text-center sm:py-20">
          <nav aria-label="Breadcrumb" className="text-sm text-white/70">
            <Link to="/" className="hover:text-white">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-white">Kids Zone</span>
          </nav>
          <Reveal className="mx-auto mt-5 max-w-2xl">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-white ring-1 ring-white/25">
              <Icon name="smileBeam" className="h-4 w-4" /> Just for kids
            </span>
            <h1 className="mt-4 font-display text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-6xl">
              Welcome to the{" "}
              <span className="bg-gradient-to-r from-teal-200 to-white bg-clip-text text-transparent">
                Kids Zone!
              </span>
            </h1>
            <p className="mt-4 text-lg text-white/90">
              The hospital is a friendly, helpful place. Play games, meet our heroes, and learn how
              to keep your body strong and your smile shiny!
            </p>
          </Reveal>
          <div className="mt-8 flex justify-center gap-3">
            {floaties.map((f, i) => (
              <span
                key={f}
                className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/15 text-white ring-1 ring-white/20"
                style={{ animationDelay: `${i * 0.3}s` }}
              >
                <Icon name={f} className="h-6 w-6" />
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Parent / guardian note */}
      <section className="container-x pt-8">
        <div className="flex items-start gap-3 rounded-2xl bg-brand-50 p-4 text-sm text-brand-800 ring-1 ring-brand-100">
          <Icon name="handHeart" className="mt-0.5 h-5 w-5 shrink-0 text-brand-600" />
          <p>
            <strong>A note for grown-ups:</strong> these activities are just for fun and gentle
            learning. They are not medical advice. For any health concern, please{" "}
            <Link to="/book" className="font-semibold underline">book an appointment</Link>.
          </p>
        </div>
      </section>

      {/* Activity picker */}
      <section className="container-x py-10 sm:py-12">
        <div className="mb-8 flex flex-wrap justify-center gap-2.5">
          {activities.map((a) => {
            const isActive = a.key === active;
            return (
              <button
                key={a.key}
                type="button"
                onClick={() => setActive(a.key)}
                aria-pressed={isActive}
                className={`inline-flex items-center gap-2 rounded-full px-4 py-2.5 text-sm font-bold transition-all ${
                  isActive
                    ? "bg-brand-600 text-white shadow-soft"
                    : `${softOf(a.tone)} ring-1 ring-ink-100 hover:-translate-y-0.5`
                }`}
              >
                <Icon name={a.icon} className="h-4 w-4" /> {a.label}
              </button>
            );
          })}
        </div>

        <div className="rounded-3xl bg-white p-6 shadow-card ring-1 ring-ink-100 sm:p-8 lg:p-10">
          <h2 className="mb-6 text-center font-display text-2xl font-extrabold text-ink-900 sm:text-3xl">
            {current.title}
          </h2>
          <Active />
        </div>
      </section>

      {/* Grown-up CTA to relevant departments */}
      <section className="container-x pb-4">
        <div className="grid gap-4 sm:grid-cols-2">
          <Link to="/departments/paediatrics" className="card card-hover flex items-center gap-4 p-6">
            <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-50 text-sky-600">
              <Icon name="baby" className="h-6 w-6" />
            </span>
            <span>
              <span className="block font-bold text-ink-900">Paediatrics & Neonatology</span>
              <span className="text-sm text-ink-500">Complete healthcare for children</span>
            </span>
            <Icon name="arrow" className="ml-auto h-4 w-4 text-ink-300" />
          </Link>
          <Link to="/departments/dental" className="card card-hover flex items-center gap-4 p-6">
            <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-teal-50 text-teal-600">
              <Icon name="tooth" className="h-6 w-6" />
            </span>
            <span>
              <span className="block font-bold text-ink-900">Dental Care</span>
              <span className="text-sm text-ink-500">Gentle dental care for little smiles</span>
            </span>
            <Icon name="arrow" className="ml-auto h-4 w-4 text-ink-300" />
          </Link>
        </div>
      </section>

      <CTABand />
    </>
  );
}
