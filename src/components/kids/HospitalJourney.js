import { useState } from "react";
import Icon from "../Icon";
import { journeySteps } from "../../data/kids";

/** Step-through story of what happens at a check-up (calms first-visit nerves). */
export default function HospitalJourney() {
  const [step, setStep] = useState(0);
  const total = journeySteps.length;
  const s = journeySteps[step];
  const last = step === total - 1;

  return (
    <div className="mx-auto max-w-2xl">
      <p className="mb-6 text-center text-ink-600">
        A hospital visit, step by step. Press <strong>Next</strong> to see what happens.
      </p>

      {/* Progress dots */}
      <div className="mb-6 flex items-center justify-center gap-2" aria-hidden="true">
        {journeySteps.map((_, i) => (
          <span
            key={i}
            className={`h-2.5 rounded-full transition-all ${
              i === step ? "w-7 bg-brand-600" : i < step ? "w-2.5 bg-teal-400" : "w-2.5 bg-ink-200"
            }`}
          />
        ))}
      </div>

      <div className="rounded-3xl bg-gradient-to-br from-brand-50 to-teal-50 p-8 text-center ring-1 ring-brand-100">
        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-3xl bg-white text-brand-600 shadow-soft">
          <Icon name={s.icon} className="h-10 w-10" />
        </div>
        <h3 className="mt-5 font-display text-2xl font-extrabold text-ink-900">{s.title}</h3>
        <p className="mx-auto mt-3 max-w-md text-ink-600">{s.text}</p>
        <p className="mt-4 text-xs font-semibold uppercase tracking-wide text-brand-500">
          Step {step + 1} of {total}
        </p>
      </div>

      <div className="mt-6 flex items-center justify-between gap-3">
        <button
          type="button"
          onClick={() => setStep((v) => Math.max(0, v - 1))}
          className="btn-ghost btn-md"
          disabled={step === 0}
        >
          Back
        </button>
        {last ? (
          <button type="button" onClick={() => setStep(0)} className="btn-teal btn-md">
            <Icon name="arrow" className="h-4 w-4 rotate-180" /> Start Again
          </button>
        ) : (
          <button type="button" onClick={() => setStep((v) => Math.min(total - 1, v + 1))} className="btn-primary btn-md">
            Next <Icon name="arrow" className="h-4 w-4" />
          </button>
        )}
      </div>
    </div>
  );
}
