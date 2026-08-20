import { useState } from "react";
import Icon from "../Icon";
import { gradientOf } from "../../lib/tones";
import { heroes } from "../../data/kids";

/** Flip cards — tap a hero to learn what they do. */
export default function HospitalHeroes() {
  const [flipped, setFlipped] = useState({});
  const toggle = (i) => setFlipped((f) => ({ ...f, [i]: !f[i] }));

  return (
    <div>
      <p className="mb-6 text-center text-ink-600">
        Tap a card to meet the friendly people who help you at the hospital.
      </p>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {heroes.map((h, i) => {
          const isFlipped = !!flipped[i];
          return (
            <button
              key={h.name}
              type="button"
              onClick={() => toggle(i)}
              aria-pressed={isFlipped}
              aria-label={`${h.name}: ${h.role}. Tap to ${isFlipped ? "hide" : "learn more"}.`}
              className="h-52 w-full [perspective:1000px] focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2 rounded-3xl"
            >
              <div
                className={`relative h-full w-full rounded-3xl transition-transform duration-500 [transform-style:preserve-3d] ${
                  isFlipped ? "[transform:rotateY(180deg)]" : ""
                }`}
              >
                {/* Front */}
                <div
                  className={`absolute inset-0 flex flex-col items-center justify-center gap-3 rounded-3xl bg-gradient-to-br p-5 text-center text-white shadow-card [backface-visibility:hidden] ${gradientOf(
                    h.tone
                  )}`}
                >
                  <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/20 ring-1 ring-white/30">
                    <Icon name={h.icon} className="h-8 w-8" />
                  </span>
                  <span className="font-display text-lg font-extrabold">{h.name}</span>
                  <span className="text-sm text-white/90">{h.role}</span>
                  <span className="mt-1 rounded-full bg-white/20 px-3 py-0.5 text-[11px] font-semibold">
                    Tap me!
                  </span>
                </div>
                {/* Back */}
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 rounded-3xl bg-white p-5 text-center shadow-card ring-1 ring-ink-100 [backface-visibility:hidden] [transform:rotateY(180deg)]">
                  <Icon name={h.icon} className="h-7 w-7 text-brand-600" />
                  <span className="font-display text-base font-bold text-ink-900">{h.name}</span>
                  <p className="text-sm leading-relaxed text-ink-600">{h.fact}</p>
                </div>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
