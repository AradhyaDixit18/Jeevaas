import { useState } from "react";
import Icon from "../Icon";
import { foods } from "../../data/kids";

const baskets = [
  { key: "everyday", label: "Everyday Foods", hint: "Great for growing", tone: "teal" },
  { key: "sometimes", label: "Sometimes Treats", hint: "Yummy now and then", tone: "amber" },
];

const correctBasket = (food) => (food.healthy ? "everyday" : "sometimes");

/** Tap a food, then tap a basket. Sort everyday foods from sometimes treats. */
export default function HealthyPlate() {
  const [placed, setPlaced] = useState({}); // { foodName: 'everyday' | 'sometimes' }
  const [selected, setSelected] = useState(null);

  const tray = foods.filter((f) => !placed[f.name]);
  const allPlaced = tray.length === 0;
  const correctCount = foods.filter((f) => placed[f.name] === correctBasket(f)).length;

  const pick = (name) => setSelected((s) => (s === name ? null : name));
  const drop = (basketKey) => {
    if (!selected) return;
    setPlaced((p) => ({ ...p, [selected]: basketKey }));
    setSelected(null);
  };
  const removeItem = (name) =>
    setPlaced((p) => {
      const n = { ...p };
      delete n[name];
      return n;
    });
  const reset = () => {
    setPlaced({});
    setSelected(null);
  };

  return (
    <div className="mx-auto max-w-3xl">
      <p className="mb-6 text-center text-ink-600">
        Tap a food to pick it up, then tap a basket to sort it. Everyday foods help you grow,
        treats are for sometimes!
      </p>

      {/* Tray */}
      <div className="rounded-3xl bg-white p-5 shadow-card ring-1 ring-ink-100">
        <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-ink-400">
          {allPlaced ? "All sorted! Great job." : "Food tray — pick one"}
        </p>
        <div className="flex min-h-[3.5rem] flex-wrap gap-2.5">
          {tray.map((f) => (
            <button
              key={f.name}
              type="button"
              onClick={() => pick(f.name)}
              className={`inline-flex items-center gap-2 rounded-2xl border-2 px-3.5 py-2 font-semibold transition-all ${
                selected === f.name
                  ? "-translate-y-0.5 border-brand-500 bg-brand-50 text-brand-700 shadow-soft"
                  : "border-ink-200 bg-white text-ink-700 hover:border-brand-300"
              }`}
            >
              <Icon name={f.icon} className="h-5 w-5" /> {f.name}
            </button>
          ))}
          {allPlaced && <span className="text-sm text-ink-400">Tray is empty.</span>}
        </div>
      </div>

      {/* Baskets */}
      <div className="mt-5 grid gap-4 sm:grid-cols-2">
        {baskets.map((b) => {
          const items = foods.filter((f) => placed[f.name] === b.key);
          const isTeal = b.tone === "teal";
          return (
            <button
              key={b.key}
              type="button"
              onClick={() => drop(b.key)}
              className={`min-h-[10rem] rounded-3xl border-2 border-dashed p-5 text-left transition-colors ${
                selected
                  ? isTeal
                    ? "border-teal-400 bg-teal-50/60"
                    : "border-amber-400 bg-amber-50/60"
                  : "border-ink-200 bg-ink-50/40"
              }`}
            >
              <div className="flex items-center gap-2">
                <span
                  className={`inline-flex h-9 w-9 items-center justify-center rounded-xl text-white ${
                    isTeal ? "bg-teal-500" : "bg-amber-500"
                  }`}
                >
                  <Icon name={isTeal ? "apple" : "candy"} className="h-4 w-4" />
                </span>
                <span className="font-display font-bold text-ink-900">{b.label}</span>
              </div>
              <p className="mt-1 text-xs text-ink-400">{b.hint}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {items.map((f) => {
                  const right = correctBasket(f) === b.key;
                  return (
                    <span
                      key={f.name}
                      onClick={(e) => {
                        e.stopPropagation();
                        removeItem(f.name);
                      }}
                      className={`inline-flex cursor-pointer items-center gap-1.5 rounded-full px-2.5 py-1 text-sm font-semibold ring-1 ${
                        right
                          ? "bg-teal-100 text-teal-800 ring-teal-200"
                          : "bg-emergency-50 text-emergency-700 ring-emergency-200"
                      }`}
                    >
                      <Icon name={f.icon} className="h-4 w-4" /> {f.name}
                      <Icon name={right ? "check" : "arrow"} className={`h-3.5 w-3.5 ${right ? "" : "rotate-180"}`} />
                    </span>
                  );
                })}
                {items.length === 0 && <span className="text-xs text-ink-300">Drop foods here</span>}
              </div>
            </button>
          );
        })}
      </div>

      {/* Result */}
      {allPlaced && (
        <div className="mt-5 flex flex-col items-center justify-between gap-3 rounded-3xl bg-gradient-to-br from-brand-50 to-teal-50 p-5 text-center ring-1 ring-brand-100 sm:flex-row sm:text-left">
          <p className="flex items-center gap-2 font-bold text-ink-900">
            <Icon name="star" className="h-5 w-5 text-warm-500" />
            You sorted {correctCount} of {foods.length} correctly!
          </p>
          <button type="button" onClick={reset} className="btn-primary btn-md">
            <Icon name="arrow" className="h-4 w-4 rotate-180" /> Play Again
          </button>
        </div>
      )}
      {!allPlaced && (
        <p className="mt-3 text-center text-xs text-ink-400">
          Tip: tap a food already in a basket to send it back to the tray.
        </p>
      )}
    </div>
  );
}
