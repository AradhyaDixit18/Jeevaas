import { useState } from "react";
import { habitsQuiz } from "../../data/kids";

/** Friendly healthy-habits quiz with instant, positive feedback. */
export default function HabitsQuiz() {
  const [i, setI] = useState(0);
  const [picked, setPicked] = useState(null);
  const [score, setScore] = useState(0);
  const [done, setDone] = useState(false);

  const q = habitsQuiz[i];

  const answer = (idx) => {
    if (picked !== null) return;
    setPicked(idx);
    if (idx === q.answer) setScore((s) => s + 1);
  };

  const next = () => {
    if (i === habitsQuiz.length - 1) {
      setDone(true);
    } else {
      setI((v) => v + 1);
      setPicked(null);
    }
  };

  const restart = () => {
    setI(0);
    setPicked(null);
    setScore(0);
    setDone(false);
  };

  if (done) {
    return (
      <div className="rounded-3xl bg-white p-8 text-center shadow-card ring-1 ring-ink-100">
        <div className="text-5xl">🏆</div>
        <h3 className="mt-3 text-2xl font-bold text-ink-900">
          You scored {score} / {habitsQuiz.length}!
        </h3>
        <p className="mt-2 text-ink-600">
          {score === habitsQuiz.length
            ? "Amazing! You're a Healthy Habits Hero!"
            : "Well done! Keep those healthy habits going."}
        </p>
        <button onClick={restart} className="btn-teal btn-md mt-5">
          Try again
        </button>
      </div>
    );
  }

  return (
    <div className="rounded-3xl bg-white p-6 shadow-card ring-1 ring-ink-100 sm:p-8">
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-bold text-ink-900">🧠 Healthy Habits Quiz</h3>
        <span className="text-sm font-semibold text-ink-500">
          {i + 1} / {habitsQuiz.length}
        </span>
      </div>
      <p className="mt-4 text-lg font-semibold text-ink-800">{q.question}</p>
      <div className="mt-4 grid gap-2 sm:grid-cols-2">
        {q.options.map((opt, idx) => {
          const isCorrect = idx === q.answer;
          const isPicked = picked === idx;
          let cls = "bg-brand-50/60 ring-brand-100 hover:ring-brand-300 text-ink-800";
          if (picked !== null) {
            if (isCorrect) cls = "bg-teal-50 ring-teal-400 text-teal-800";
            else if (isPicked) cls = "bg-warm-500/10 ring-warm-500/40 text-warm-600";
            else cls = "bg-ink-50 ring-ink-100 text-ink-400";
          }
          return (
            <button
              key={opt}
              onClick={() => answer(idx)}
              disabled={picked !== null}
              className={`rounded-2xl px-4 py-3 text-left text-sm font-semibold ring-1 transition ${cls}`}
            >
              {opt}
              {picked !== null && isCorrect && " ✅"}
              {picked !== null && isPicked && !isCorrect && " ❌"}
            </button>
          );
        })}
      </div>
      {picked !== null && (
        <div className="mt-5 text-right">
          <button onClick={next} className="btn-primary btn-md">
            {i === habitsQuiz.length - 1 ? "See my score" : "Next question"}
          </button>
        </div>
      )}
    </div>
  );
}
