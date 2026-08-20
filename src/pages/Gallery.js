import SEO from "../components/SEO";
import PageHeader from "../components/PageHeader";
import Reveal from "../components/Reveal";
import Icon from "../components/Icon";
import CTABand from "../components/CTABand";
import { facilitySpaces } from "../data/content";
import { gradientOf } from "../lib/tones";

export default function Gallery() {
  return (
    <>
      <SEO
        title="Gallery"
        description="A look inside Jeevaas Hospital, a multispeciality hospital in Kalyanpur, Kanpur."
        path="/gallery"
      />
      <PageHeader
        eyebrow="Gallery"
        title="A look inside Jeevaas Hospital"
        intro="A tour of our departments and spaces. Photographs of the hospital will be added here soon."
      />

      <section className="container-x py-16 sm:py-20">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {facilitySpaces.map((s, i) => (
            <Reveal key={s.title} delay={(i % 3) * 0.05}>
              <div className="group overflow-hidden rounded-3xl shadow-card ring-1 ring-ink-100">
                <div className={`relative flex h-56 items-center justify-center bg-gradient-to-br ${gradientOf(s.tone)}`}>
                  <div className="absolute inset-0 bg-plus-white opacity-70" aria-hidden="true" />
                  <Icon name={s.icon} className="relative h-16 w-16 text-white transition-transform duration-500 group-hover:scale-110" />
                  <span className="absolute bottom-4 left-5 rounded-full bg-black/25 px-3 py-1 text-sm font-semibold text-white backdrop-blur-sm">
                    {s.title}
                  </span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <p className="mx-auto mt-10 max-w-2xl rounded-2xl bg-ink-50 px-5 py-4 text-center text-sm text-ink-500">
          <Icon name="sparkle" className="mr-2 inline h-4 w-4 text-brand-500" />
          Real photographs of our facilities, team, and patient areas will be published
          here as they become available.
        </p>
      </section>

      <CTABand />
    </>
  );
}
