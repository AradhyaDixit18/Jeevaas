import { Link } from "react-router-dom";
import Reveal from "./Reveal";
import Icon from "./Icon";

/** Consistent interior-page hero with breadcrumb + eyebrow motif. */
export default function PageHeader({ eyebrow, title, intro, crumb }) {
  return (
    <section className="relative overflow-hidden bg-ink-950">
      <div className="pointer-events-none absolute -right-20 -top-24 h-72 w-72 rounded-full bg-brand-600/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 left-1/4 h-64 w-64 rounded-full bg-teal-500/15 blur-3xl" />
      <div className="container-x relative py-14 sm:py-16">
        <nav aria-label="Breadcrumb" className="text-sm text-ink-300">
          <Link to="/" className="hover:text-white">Home</Link>
          <span className="mx-2 text-ink-500">/</span>
          <span className="text-white">{crumb || title}</span>
        </nav>
        <Reveal className="mt-4 max-w-2xl">
          {eyebrow && (
            <span className="eyebrow text-teal-300">
              <span className="h-2 w-2 rounded-sm bg-teal-400" /> {eyebrow}
            </span>
          )}
          <h1 className="mt-3 text-3xl font-extrabold text-white sm:text-4xl lg:text-5xl">
            {title}
          </h1>
          {intro && <p className="mt-4 text-lg text-ink-100">{intro}</p>}
        </Reveal>
      </div>
    </section>
  );
}

export { Icon };
