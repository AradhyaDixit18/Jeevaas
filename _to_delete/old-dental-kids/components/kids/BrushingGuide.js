import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { brushingSteps } from "../../data/kids";

/** Step-through tooth-brushing guide with friendly animation. */
export default function BrushingGuide() {
  const [i, setI] = useState(0);
  const step = brushingSteps[i];
  const last = i === brushingSteps.length - 1;

  return (
    <div className="rounded-3xl bg-gradient-to-br from-brand-600 to-teal-600 p-6 text-white shadow-card sm:p-8">
      <h3 className="text-xl font-bold">🪥 Brushing Superstar Guide</h3>
      <p className="mt-1 text-sm text-white/80">
        Follow along, step {i + 1} of {brushingSteps.length}
      </p>

      <div className="mt-6 flex min-h-[9rem] items-center justify-center rounded-2xl bg-white/10 p-6 text-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.8, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              className="text-6xl"
              animate={{ rotate: [0, -12, 12, -12, 0] }}
              transition={{ duration: 1.2, repeat: Infinity, repeatDelay: 0.6 }}
              role="img"
              aria-label={step.title}
            >
              {step.emoji}
            </motion.div>
            <h4 className="mt-3 text-lg font-bold">{step.title}</h4>
            <p className="mt-1 text-sm text-white/85">{step.text}</p>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* progress dots */}
      <div className="mt-5 flex justify-center gap-2">
        {brushingSteps.map((_, j) => (
          <span
            key={j}
            className={`h-2 rounded-full transition-all ${
              j === i ? "w-6 bg-white" : "w-2 bg-white/40"
            }`}
          />
        ))}
      </div>

      <div className="mt-5 flex justify-between gap-3">
        <button
          onClick={() => setI((v) => Math.max(0, v - 1))}
          disabled={i === 0}
          className="rounded-full bg-white/15 px-5 py-2 text-sm font-bold disabled:opacity-40"
        >
          Back
        </button>
        <button
          onClick={() => setI((v) => (last ? 0 : v + 1))}
          className="rounded-full bg-white px-6 py-2 text-sm font-bold text-brand-700"
        >
          {last ? "Start over 🎉" : "Next"}
        </button>
      </div>
    </div>
  );
}
