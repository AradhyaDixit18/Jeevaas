/**
 * Colour "tones" for department cards and banners. Full class strings are kept
 * as literals so Tailwind's compiler includes them in the build.
 */

// Strong gradient (card headers, detail banners)
export const toneGradient = {
  blue: "from-brand-500 to-brand-700",
  sky: "from-sky-500 to-blue-600",
  cyan: "from-cyan-500 to-teal-600",
  teal: "from-teal-500 to-teal-700",
  emerald: "from-emerald-500 to-teal-700",
  indigo: "from-indigo-500 to-brand-700",
  violet: "from-violet-500 to-indigo-600",
  rose: "from-rose-500 to-pink-600",
  amber: "from-amber-500 to-orange-600",
  orange: "from-orange-500 to-rose-600",
  red: "from-emergency-500 to-emergency-700",
};

// Soft chip (icon pills on light backgrounds)
export const toneSoft = {
  blue: "bg-brand-50 text-brand-700",
  sky: "bg-sky-50 text-sky-700",
  cyan: "bg-cyan-50 text-cyan-700",
  teal: "bg-teal-50 text-teal-700",
  emerald: "bg-emerald-50 text-emerald-700",
  indigo: "bg-indigo-50 text-indigo-700",
  violet: "bg-violet-50 text-violet-700",
  rose: "bg-rose-50 text-rose-700",
  amber: "bg-amber-50 text-amber-700",
  orange: "bg-orange-50 text-orange-700",
  red: "bg-emergency-50 text-emergency-600",
};

export const gradientOf = (tone) => toneGradient[tone] || toneGradient.blue;
export const softOf = (tone) => toneSoft[tone] || toneSoft.blue;
