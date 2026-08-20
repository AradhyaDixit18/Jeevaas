import { useState } from "react";
import Icon from "../Icon";
import { quiz } from "../../data/kids";

/** Kid-friendly multiple-choice quiz with instant, encouraging feedback. */
export default function HealthyHabitsQuiz() {
  const [idx, setIdx] = useState(0);
  const [picked, setPicked] = useState(null);
  const [score, setScore] = useState(0);
  const [done, setDone] = useState(false);

  const q = quiz[idx];
  const isCorrect = picked === q.answer;

  const choose = (i) => {
    if (picked !== null) return;
    setPicked(i);
    if (i === q.answer) setScore((s) => s + 1);
  };

  const next = () => {
    if (idx + 1 >= quiz.length) {
      setDone(true);
    } else {
      setIdx((v) => v + 1);
      setPicked(null);
    }
  };

  const restart = () => {
    setIdx(0);
    setPicked(null);
    setScore(0);
    setDone(false);
  };

  if (done) {
    const perfect = score === quiz.length;
    return (
      <div className="mx-auto max-w-xl rounded-3xl bg-gradient-to-br from-brand-50 to-teal-50 p-10 text-center ring-1 ring-brand-100">
        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-white text-warm-500 shadow-soft">
          <Icon name={perfect ? "medal" : "star"} className="h-10 w-10" />
        </div>
        <h3 className="mt-5 font-display text-2xl font-extrabold text-ink-900">
          You scored {score} / {quiz.length}!
        </h3>
        <p className="mx-auto mt-3 max-w-sm text-ink-600">
          {perfect
            ? "Wow, a perfect score! You are a real health hero."
            : "Great job! Every healthy habit you learn helps you grow strong."}
        </p>
        <button type="button" onClick={restart} className="btn-primary btn-lg mt-6">
          <Icon name="arrow" className="h-4 w-4 rotate-180" /> Play Again
        </button>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-xl">
      <div className="mb-4 flex items-center justify-between text-sm font-semibold text-ink-500">
        <span>Question {idx + 1} of {quiz.length}</span>
        <span className="inline-flex items-center gap-1.5 text-warm-500">
          <Icon name="star" className="h-4 w-4" /> {score}
        </span>
      </div>

      <div className="rounded-3xl bg-white p-7 shadow-card ring-1 ring-ink-100">
        <h3 className="font-display text-xl font-bold text-ink-900">{q.q}</h3>
        <div className="mt-5 grid gap-3">
          {q.options.map((opt, i) => {
            const chosen = picked === i;
            const correct = i === q.answer;
            let cls = "border-ink-200 bg-white text-ink-800 hover:border-brand-300 hover:bg-brand-50";
            if (picked !== null) {
              if (correct) cls = "border-teal-400 bg-teal-50 text-teal-800";
              else if (chosen) cls = "border-emergency-300 bg-emergency-50 text-emergency-700";
              else cls = "border-ink-100 bg-white text-ink-400";
            }
            return (
              <button
                key={opt}
                type="button"
                onClick={() => choose(i)}
                disabled={picked !== null}
                className={`flex items-center justify-between gap-3 rounded-2xl border-2 px-5 py-3.5 text-left font-semibold transition-colors ${cls}`}
              >
                <span>{opt}</span>
                {picked !== null && correct && <Icon name="check" className="h-5 w-5 text-teal-500" />}
              </button>
            );
          })}
        </div>

        {picked !== null && (
          <div
            className={`mt-5 rounded-2xl p-4 text-sm ${
              isCorrect ? "bg-teal-50 text-teal-800" : "bg-brand-50 text-brand-800"
            }`}
          >
            <p className="font-bold">{isCorrect ? "That's right! 🎉" : "Good try!"}</p>
            <p className="mt-1">{q.explain}</p>
          </div>
        )}

        {picked !== null && (
          <button type="button" onClick={next} className="btn-primary btn-lg mt-5 w-full">
            {idx + 1 >= quiz.length ? "See my score" : "Next question"}{" "}
            <Icon name="arrow" className="h-4 w-4" />
          </button>
        )}
      </div>
    </div>
  );
}
