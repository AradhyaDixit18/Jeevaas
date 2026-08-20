import { useEffect, useState } from "react";
import Icon from "../Icon";

const TOTAL = 120; // 2 minutes
const QUADRANTS = [
  { label: "Top Left", icon: "tooth" },
  { label: "Top Right", icon: "tooth" },
  { label: "Bottom Left", icon: "tooth" },
  { label: "Bottom Right", icon: "tooth" },
];

const fmt = (s) => `${Math.floor(s / 60)}:${String(s % 60).padStart(2, "0")}`;

/** A friendly 2-minute brushing timer (dental tie-in). */
export default function BrushingTimer() {
  const [seconds, setSeconds] = useState(0);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    if (!running) return undefined;
    const id = setInterval(() => setSeconds((s) => Math.min(TOTAL, s + 1)), 1000);
    return () => clearInterval(id);
  }, [running]);

  useEffect(() => {
    if (seconds >= TOTAL) setRunning(false);
  }, [seconds]);

  const done = seconds >= TOTAL;
  const activeQuad = Math.min(3, Math.floor(seconds / 30));
  const pct = Math.round((seconds / TOTAL) * 100);

  const reset = () => {
    setRunning(false);
    setSeconds(0);
  };

  return (
    <div className="mx-auto max-w-2xl text-center">
      <p className="mb-6 text-ink-600">
        Brushing works best for two whole minutes. Press start, then brush one corner of your
        mouth at a time. Ready, set, sparkle!
      </p>

      <div className="rounded-3xl bg-gradient-to-br from-teal-50 to-brand-50 p-8 ring-1 ring-teal-100">
        {/* Timer readout */}
        <div className="mx-auto flex h-32 w-32 flex-col items-center justify-center rounded-full bg-white shadow-soft ring-4 ring-teal-200">
          <span className="font-display text-3xl font-extrabold text-ink-900">{fmt(seconds)}</span>
          <span className="text-xs font-semibold text-teal-600">{done ? "Done!" : `${pct}%`}</span>
        </div>

        {/* Progress bar */}
        <div className="mx-auto mt-6 h-3 max-w-sm overflow-hidden rounded-full bg-white ring-1 ring-teal-100">
          <div
            className="h-full rounded-full bg-gradient-to-r from-teal-400 to-teal-600 transition-all duration-500"
            style={{ width: `${pct}%` }}
          />
        </div>

        {/* Quadrants */}
        <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
          {QUADRANTS.map((q, i) => {
            const isDone = seconds >= (i + 1) * 30;
            const isActive = running && !done && i === activeQuad;
            return (
              <div
                key={q.label}
                className={`rounded-2xl p-4 ring-1 transition-colors ${
                  isDone
                    ? "bg-teal-500 text-white ring-teal-500"
                    : isActive
                    ? "bg-white text-teal-700 ring-teal-300 animate-pulse"
                    : "bg-white/70 text-ink-400 ring-ink-100"
                }`}
              >
                <Icon name={isDone ? "check" : q.icon} className="mx-auto h-6 w-6" />
                <span className="mt-2 block text-xs font-semibold">{q.label}</span>
              </div>
            );
          })}
        </div>

        {done && (
          <p className="mt-6 flex items-center justify-center gap-2 font-display text-lg font-extrabold text-teal-700">
            <Icon name="star" className="h-6 w-6 text-warm-500" /> Sparkling clean! Amazing brushing!
          </p>
        )}

        <div className="mt-6 flex items-center justify-center gap-3">
          {!done && (
            <button
              type="button"
              onClick={() => setRunning((r) => !r)}
              className={running ? "btn-ghost btn-lg" : "btn-teal btn-lg"}
            >
              {running ? "Pause" : seconds > 0 ? "Keep Going" : "Start Brushing"}
            </button>
          )}
          <button type="button" onClick={reset} className="btn-ghost btn-lg">
            <Icon name="arrow" className="h-4 w-4 rotate-180" /> Reset
          </button>
        </div>
      </div>
    </div>
  );
}
