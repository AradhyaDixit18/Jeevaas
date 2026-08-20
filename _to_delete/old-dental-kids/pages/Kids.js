import { Link } from "react-router-dom";
import SEO from "../components/SEO";
import Reveal from "../components/Reveal";
import Icon from "../components/Icon";
import FoodGame from "../components/kids/FoodGame";
import BrushingGuide from "../components/kids/BrushingGuide";
import HabitsQuiz from "../components/kids/HabitsQuiz";
import BodyParts from "../components/kids/BodyParts";
import { HandWash, Hydration, FactShuffler, MeetDentist } from "../components/kids/MiniWidgets";

const parentTips = [
  { icon: "calendar", title: "Start early", text: "A child's first dental visit is best around age one, or when the first tooth appears." },
  { icon: "shield", title: "Sealants & fluoride", text: "Simple protective treatments help guard growing teeth against decay." },
  { icon: "smile", title: "Make it positive", text: "Talk about the dentist in a happy, calm way so visits feel friendly, not scary." },
];

export default function Kids() {
  return (
    <>
      <SEO
        title="Jeevaas Kids Health Zone"
        description="A fun, friendly space where children learn about teeth and healthy habits through games and activities, part of Jeevaas Hospital's gentle dental care."
        path="/kids"
      />

      {/* Playful hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-brand-500 via-brand-600 to-teal-600 text-white">
        <div className="pointer-events-none absolute inset-0 opacity-20">
          <div className="absolute left-10 top-10 text-6xl">🦷</div>
          <div className="absolute right-16 top-24 text-5xl">😁</div>
          <div className="absolute bottom-10 left-1/3 text-5xl">🪥</div>
          <div className="absolute bottom-16 right-10 text-6xl">✨</div>
        </div>
        <div className="container-x relative py-16 text-center sm:py-20">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-1.5 text-sm font-bold backdrop-blur">
              🎈 Just for kids
            </span>
            <h1 className="mt-4 text-4xl font-extrabold sm:text-5xl">
              Jeevaas Kids Health Zone
            </h1>
            <p className="mx-auto mt-4 max-w-xl text-lg text-white/90">
              Play games, learn cool facts, and become a Smile Superstar! A friendly
              corner of {`Jeevaas Hospital`} made just for you.
            </p>
          </Reveal>
        </div>
        <div className="h-8 rounded-t-[2.5rem] bg-white" />
      </section>

      {/* Activities grid */}
      <section className="container-x -mt-2 pb-16">
        <div className="grid gap-6 lg:grid-cols-2">
          <Reveal><FactShuffler /></Reveal>
          <Reveal delay={0.05}><Hydration /></Reveal>
          <Reveal><BrushingGuide /></Reveal>
          <Reveal delay={0.05}><FoodGame /></Reveal>
          <Reveal><HandWash /></Reveal>
          <Reveal delay={0.05}><MeetDentist /></Reveal>
        </div>

        <div className="mt-6 grid gap-6 lg:grid-cols-2">
          <Reveal>
            <div className="rounded-3xl bg-white p-6 shadow-card ring-1 ring-ink-100 sm:p-8">
              <BodyParts />
            </div>
          </Reveal>
          <Reveal delay={0.05}><HabitsQuiz /></Reveal>
        </div>
      </section>

      {/* Parents section */}
      <section className="bg-brand-50/60 py-16 sm:py-20">
        <div className="container-x">
          <div className="max-w-2xl">
            <span className="eyebrow">
              <span className="h-2 w-2 rounded-sm bg-teal-500" /> For parents
            </span>
            <h2 className="mt-3 text-3xl font-bold text-ink-900">
              Helping little smiles grow strong
            </h2>
            <p className="mt-3 text-ink-600">
              Our team makes children's visits calm and positive, focusing on
              prevention and gentle care. Here are a few things that help.
            </p>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {parentTips.map((t, i) => (
              <Reveal key={t.title} delay={i * 0.05}>
                <div className="card h-full p-7">
                  <Icon name={t.icon} className="h-7 w-7 text-brand-600" />
                  <h3 className="mt-4 text-lg font-bold text-ink-900">{t.title}</h3>
                  <p className="mt-2 text-sm text-ink-600">{t.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Link to="/book?service=kids-dental" className="btn-primary btn-lg">
              <Icon name="calendar" className="h-4 w-4" /> Book kids dental care
            </Link>
            <Link to="/services/kids-dental" className="btn-ghost btn-lg">
              About kids dental care
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
