import { useState } from "react";
import { motion } from "framer-motion";
import { bodyParts } from "../../data/kids";

/** Tap-to-learn body-part cards. */
export default function BodyParts() {
  const [open, setOpen] = useState(null);
  return (
    <div>
      <h3 className="text-xl font-bold text-ink-900">👀 Tap & Learn</h3>
      <p className="mt-1 text-sm text-ink-600">Tap a card to discover what each part does!</p>
      <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3">
        {bodyParts.map((p, i) => {
          const isOpen = open === i;
          return (
            <motion.button
              key={p.name}
              onClick={() => setOpen(isOpen ? null : i)}
              whileTap={{ scale: 0.96 }}
              className={`rounded-2xl p-4 text-center ring-1 transition ${
                isOpen ? "bg-brand-600 text-white ring-brand-600" : "bg-white ring-ink-100 hover:ring-brand-200"
              }`}
              aria-expanded={isOpen}
            >
              <span className="text-4xl" role="img" aria-label={p.name}>{p.emoji}</span>
              <div className={`mt-2 text-sm font-bold ${isOpen ? "text-white" : "text-ink-900"}`}>
                {p.name}
              </div>
              {isOpen && <p className="mt-1 text-xs text-white/90">{p.text}</p>}
            </motion.button>
          );
        })}
      </div>
    </div>
  );
}
