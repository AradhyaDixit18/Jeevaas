import { useMemo, useState } from "react";
import { foodGame } from "../../data/kids";

/** Click a food to sort it into "Smile Food" or "Sometimes Treat". */
export default function FoodGame() {
  const items = useMemo(() => {
    const all = [
      ...foodGame.healthy.map((f) => ({ ...f, healthy: true })),
      ...foodGame.treats.map((f) => ({ ...f, healthy: false })),
    ];
    // deterministic-ish shuffle (no Math.random dependency needed for correctness)
    return all
      .map((f, i) => ({ f, k: (i * 7) % all.length }))
      .sort((a, b) => a.k - b.k)
      .map((x) => x.f);
  }, []);

  const [choices, setChoices] = useState({});
  const answered = Object.keys(choices).length;
  const correct = Object.values(choices).filter((c) => c.correct).length;
  const done = answered === items.length;

  const choose = (name, healthy, pickedHealthy) => {
    if (choices[name]) return;
    setChoices((c) => ({ ...c, [name]: { correct: healthy === pickedHealthy } }));
  };

  return (
    <div className="rounded-3xl bg-white p-6 shadow-card ring-1 ring-ink-100 sm:p-8">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <h3 className="text-xl font-bold text-ink-900">🍎 Feed the Smile</h3>
        <span className="rounded-full bg-teal-100 px-4 py-1 text-sm font-bold text-teal-700">
          Score: {correct} / {items.length}
        </span>
      </div>
      <p className="mt-2 text-sm text-ink-600">
        Is it a <strong>Smile Food</strong> or a <strong>Sometimes Treat</strong>? Tap a food, then tap where it goes!
      </p>

      <div className="mt-6 grid grid-cols-3 gap-3 sm:grid-cols-4">
        {items.map((it) => {
          const c = choices[it.name];
          return (
            <div
              key={it.name}
              className={`flex flex-col items-center rounded-2xl p-3 ring-1 transition ${
                c
                  ? c.correct
                    ? "bg-teal-50 ring-teal-300"
                    : "bg-warm-500/10 ring-warm-500/40"
                  : "bg-brand-50/60 ring-brand-100"
              }`}
            >
              <span className="text-3xl" role="img" aria-label={it.name}>{it.emoji}</span>
              <span className="mt-1 text-xs font-semibold text-ink-700">{it.name}</span>
              {!c ? (
                <div className="mt-2 flex w-full gap-1">
                  <button
                    onClick={() => choose(it.name, it.healthy, true)}
                    className="flex-1 rounded-lg bg-teal-500 py-1 text-[11px] font-bold text-white hover:bg-teal-600"
                    aria-label={`${it.name} is a smile food`}
                  >
                    😀
                  </button>
                  <button
                    onClick={() => choose(it.name, it.healthy, false)}
                    className="flex-1 rounded-lg bg-warm-500 py-1 text-[11px] font-bold text-white hover:bg-warm-600"
                    aria-label={`${it.name} is a sometimes treat`}
                  >
                    🍬
                  </button>
                </div>
              ) : (
                <span className="mt-2 text-lg">{c.correct ? "✅" : "❌"}</span>
              )}
            </div>
          );
        })}
      </div>

      {done && (
        <div className="mt-6 rounded-2xl bg-brand-600 p-4 text-center text-white">
          <p className="font-bold">
            {correct === items.length
              ? "🌟 Perfect! You're a Smile Superstar!"
              : `Great try! You got ${correct} right. Smile foods keep teeth strong!`}
          </p>
          <button
            onClick={() => setChoices({})}
            className="mt-3 rounded-full bg-white px-5 py-1.5 text-sm font-bold text-brand-700"
          >
            Play again
          </button>
        </div>
      )}
    </div>
  );
}
