import { useState } from "react";
import Icon from "../Icon";
import { tools } from "../../data/kids";

const shuffle = (arr) => {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
};

/** Match each tool to what it does. Tap a tool, then tap its job. */
export default function ToolMatch() {
  const [uses] = useState(() => shuffle(tools));
  const [selected, setSelected] = useState(null); // tool name
  const [matched, setMatched] = useState({}); // { toolName: true }
  const [wrong, setWrong] = useState(null); // use name flashing red

  const allDone = Object.keys(matched).length === tools.length;

  const pickTool = (name) => {
    if (matched[name]) return;
    setSelected((s) => (s === name ? null : name));
  };

  const pickUse = (toolName) => {
    if (matched[toolName]) return;
    if (!selected) return;
    if (selected === toolName) {
      setMatched((m) => ({ ...m, [toolName]: true }));
      setSelected(null);
    } else {
      setWrong(toolName);
      setSelected(null);
      setTimeout(() => setWrong(null), 600);
    }
  };

  const reset = () => {
    setSelected(null);
    setMatched({});
    setWrong(null);
  };

  return (
    <div className="mx-auto max-w-3xl">
      <p className="mb-6 text-center text-ink-600">
        Tap a tool on the left, then tap the job it does on the right. Can you match them all?
      </p>

      <div className="grid gap-4 sm:grid-cols-2">
        {/* Tools */}
        <div className="space-y-3">
          <p className="text-xs font-semibold uppercase tracking-wide text-ink-400">Tools</p>
          {tools.map((t) => {
            const isMatched = matched[t.name];
            const isSel = selected === t.name;
            return (
              <button
                key={t.name}
                type="button"
                onClick={() => pickTool(t.name)}
                disabled={isMatched}
                className={`flex w-full items-center gap-3 rounded-2xl border-2 px-4 py-3 text-left font-semibold transition-all ${
                  isMatched
                    ? "border-teal-400 bg-teal-50 text-teal-700"
                    : isSel
                    ? "-translate-y-0.5 border-brand-500 bg-brand-50 text-brand-700 shadow-soft"
                    : "border-ink-200 bg-white text-ink-800 hover:border-brand-300"
                }`}
              >
                <span
                  className={`inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${
                    isMatched ? "bg-teal-500 text-white" : "bg-brand-50 text-brand-600"
                  }`}
                >
                  <Icon name={isMatched ? "check" : t.icon} className="h-5 w-5" />
                </span>
                {t.name}
              </button>
            );
          })}
        </div>

        {/* Uses */}
        <div className="space-y-3">
          <p className="text-xs font-semibold uppercase tracking-wide text-ink-400">What it does</p>
          {uses.map((t) => {
            const isMatched = matched[t.name];
            const isWrong = wrong === t.name;
            return (
              <button
                key={t.name}
                type="button"
                onClick={() => pickUse(t.name)}
                disabled={isMatched}
                className={`flex w-full items-center gap-2 rounded-2xl border-2 px-4 py-3 text-left text-sm font-medium transition-all ${
                  isMatched
                    ? "border-teal-400 bg-teal-50 text-teal-700"
                    : isWrong
                    ? "border-emergency-400 bg-emergency-50 text-emergency-700"
                    : "border-ink-200 bg-white text-ink-700 hover:border-brand-300"
                }`}
              >
                {isMatched && <Icon name="check" className="h-4 w-4 shrink-0 text-teal-500" />}
                {t.use}
              </button>
            );
          })}
        </div>
      </div>

      {allDone && (
        <div className="mt-5 flex flex-col items-center justify-between gap-3 rounded-3xl bg-gradient-to-br from-brand-50 to-teal-50 p-5 text-center ring-1 ring-brand-100 sm:flex-row sm:text-left">
          <p className="flex items-center gap-2 font-bold text-ink-900">
            <Icon name="medal" className="h-5 w-5 text-warm-500" /> You matched them all! You're a hospital expert!
          </p>
          <button type="button" onClick={reset} className="btn-primary btn-md">
            <Icon name="arrow" className="h-4 w-4 rotate-180" /> Play Again
          </button>
        </div>
      )}
    </div>
  );
}
