import { useState } from "react";
import Icon from "../Icon";
import { site } from "../../config/site";

/** Enter a name and print a fun "Certificate of Bravery". */
export default function BraveryCertificate() {
  const [name, setName] = useState("");
  const display = name.trim() || "________________";
  const today = new Date().toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <div className="mx-auto max-w-2xl">
      <p className="mb-6 text-center text-ink-600">
        Were you brave at the hospital today? You deserve a reward! Type your name and print your
        very own certificate.
      </p>

      <div className="mx-auto mb-6 max-w-sm">
        <label htmlFor="cert-name" className="mb-1.5 block text-sm font-semibold text-ink-800">
          Your name
        </label>
        <input
          id="cert-name"
          type="text"
          value={name}
          maxLength={28}
          onChange={(e) => setName(e.target.value)}
          placeholder="Type your name here"
          className="w-full rounded-xl border border-ink-200 bg-white px-4 py-3 text-center text-lg font-semibold text-ink-900 placeholder:text-ink-300 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500"
        />
      </div>

      {/* Certificate */}
      <div id="certificate" className="relative overflow-hidden rounded-3xl bg-white p-2 shadow-card">
        <div className="rounded-2xl border-4 border-dashed border-brand-200 bg-gradient-to-br from-white to-brand-50 p-8 text-center sm:p-10">
          <div className="pointer-events-none absolute inset-0 bg-plus-brand opacity-40" aria-hidden="true" />
          <div className="relative">
            <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-warm-400 to-warm-600 text-white shadow-soft">
              <Icon name="medal" className="h-8 w-8" />
            </span>
            <p className="mt-4 text-xs font-semibold uppercase tracking-[0.3em] text-brand-600">
              Certificate of Bravery
            </p>
            <p className="mt-4 text-sm text-ink-500">This certificate is proudly awarded to</p>
            <p className="mt-2 font-display text-3xl font-extrabold text-ink-900 sm:text-4xl">
              {display}
            </p>
            <p className="mx-auto mt-3 max-w-md text-ink-600">
              for being <span className="font-bold text-brand-700">super brave</span> and taking
              great care of their health at {site.name}.
            </p>
            <div className="mt-6 flex items-center justify-center gap-6 text-ink-500">
              <span className="inline-flex items-center gap-1.5 text-teal-600">
                <Icon name="star" className="h-5 w-5 text-warm-500" /> Health Hero
              </span>
              <span className="text-sm">{today}</span>
            </div>
            <p className="mt-4 font-display text-sm font-bold text-brand-700">{site.name}</p>
          </div>
        </div>
      </div>

      <div className="mt-6 text-center">
        <button type="button" onClick={() => window.print()} className="btn-primary btn-lg">
          <Icon name="award" className="h-4 w-4" /> Print my certificate
        </button>
        <p className="mt-3 text-xs text-ink-400">Ask a grown-up to help you print or save it.</p>
      </div>
    </div>
  );
}
