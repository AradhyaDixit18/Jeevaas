import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { handWashSteps, kidFacts } from "../../data/kids";

/** Auto-playing hand-washing animation. */
export function HandWash() {
  const [i, setI] = useState(0);
  const [playing, setPlaying] = useState(true);

  useEffect(() => {
    if (!playing) return;
    const t = setInterval(() => setI((v) => (v + 1) % handWashSteps.length), 1800);
    return () => clearInterval(t);
  }, [playing]);

  const step = handWashSteps[i];
  return (
    <div className="rounded-3xl bg-white p-6 text-center shadow-card ring-1 ring-ink-100 sm:p-8">
      <h3 className="text-xl font-bold text-ink-900">🧼 Clean Hands Dance</h3>
      <div className="mt-5 flex min-h-[8rem] items-center justify-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.4 }}
          >
            <div className="text-6xl" role="img" aria-label="hand washing step">{step.emoji}</div>
            <p className="mt-3 font-semibold text-ink-700">{step.text}</p>
          </motion.div>
        </AnimatePresence>
      </div>
      <div className="mt-4 flex justify-center gap-2">
        {handWashSteps.map((_, j) => (
          <span key={j} className={`h-2 w-2 rounded-full ${j === i ? "bg-brand-600" : "bg-ink-200"}`} />
        ))}
      </div>
      <button
        onClick={() => setPlaying((p) => !p)}
        className="btn-ghost btn-md mt-5"
      >
        {playing ? "Pause" : "Play"}
      </button>
    </div>
  );
}

/** Tap-a-glass hydration reminder. */
export function Hydration() {
  const total = 6;
  const [filled, setFilled] = useState(0);
  return (
    <div className="rounded-3xl bg-gradient-to-br from-brand-500 to-brand-700 p-6 text-center text-white shadow-card sm:p-8">
      <h3 className="text-xl font-bold">💧 Water Tracker</h3>
      <p className="mt-1 text-sm text-white/85">
        Water washes away sugar bugs. Tap a glass each time you drink!
      </p>
      <div className="mt-5 flex flex-wrap justify-center gap-2">
        {Array.from({ length: total }).map((_, i) => {
          const on = i < filled;
          return (
            <button
              key={i}
              onClick={() => setFilled(i + 1 === filled ? i : i + 1)}
              className="text-4xl transition-transform hover:scale-110"
              aria-label={`Glass ${i + 1} ${on ? "full" : "empty"}`}
            >
              {on ? "🥛" : "🫙"}
            </button>
          );
        })}
      </div>
      <p className="mt-4 font-bold">
        {filled === 0
          ? "Let's start drinking!"
          : filled >= total
          ? "🌟 Amazing! You're super hydrated!"
          : `${filled} glass${filled > 1 ? "es" : ""} down. Keep going!`}
      </p>
    </div>
  );
}

/** Shuffleable "Did you know?" fact card. */
export function FactShuffler() {
  const [i, setI] = useState(0);
  return (
    <div className="rounded-3xl bg-teal-500 p-6 text-center text-white shadow-card sm:p-8">
      <h3 className="text-xl font-bold">✨ Did You Know?</h3>
      <AnimatePresence mode="wait">
        <motion.p
          key={i}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.3 }}
          className="mx-auto mt-4 min-h-[3.5rem] max-w-sm text-lg font-semibold"
        >
          {kidFacts[i]}
        </motion.p>
      </AnimatePresence>
      <button
        onClick={() => setI((v) => (v + 1) % kidFacts.length)}
        className="mt-4 rounded-full bg-white px-6 py-2 text-sm font-bold text-teal-700"
      >
        Tell me another! 🔀
      </button>
    </div>
  );
}

/** Friendly "meet the dentist" illustrated card. */
export function MeetDentist() {
  const [waved, setWaved] = useState(false);
  return (
    <div className="rounded-3xl bg-white p-6 text-center shadow-card ring-1 ring-ink-100 sm:p-8">
      <h3 className="text-xl font-bold text-ink-900">👋 Meet Your Tooth Friend</h3>
      <motion.div
        className="mx-auto mt-4 text-7xl"
        animate={waved ? { rotate: [0, 18, -18, 18, 0] } : {}}
        transition={{ duration: 0.9 }}
        role="img"
        aria-label="smiling tooth"
      >
        🦷
      </motion.div>
      <p className="mt-3 text-ink-600">
        The dentist counts your teeth, keeps them clean, and helps them stay strong.
        The chair goes up and down like a fun ride!
      </p>
      <button onClick={() => setWaved(true)} className="btn-teal btn-md mt-4">
        Say hello! 👋
      </button>
    </div>
  );
}
