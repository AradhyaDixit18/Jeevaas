import Reveal from "./Reveal";

/** Consistent section header: red-square eyebrow motif + title + optional intro. */
export default function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "center",
  light = false,
}) {
  const alignment = align === "center" ? "text-center mx-auto" : "text-left";
  return (
    <Reveal className={`max-w-2xl ${alignment}`}>
      {eyebrow && (
        <span className={`eyebrow ${light ? "text-teal-300" : ""} ${align === "center" ? "justify-center" : ""}`}>
          <span className="h-2 w-2 rounded-sm bg-teal-500" />
          {eyebrow}
        </span>
      )}
      <h2
        className={`mt-3 text-3xl font-bold sm:text-4xl ${
          light ? "text-white" : "text-ink-900"
        }`}
      >
        {title}
      </h2>
      {intro && (
        <p className={`mt-4 text-base leading-relaxed ${light ? "text-ink-100" : "text-ink-600"}`}>
          {intro}
        </p>
      )}
    </Reveal>
  );
}
