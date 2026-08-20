import { Link } from "react-router-dom";
import SEO from "../components/SEO";
import PageHeader from "../components/PageHeader";
import Reveal from "../components/Reveal";
import Icon from "../components/Icon";
import CTABand from "../components/CTABand";
import { testimonials } from "../data/content";
import { links } from "../config/site";

export default function Testimonials() {
  return (
    <>
      <SEO
        title="Patient Stories"
        description="Reviews and stories from patients of Jeevaas Hospital, Kanpur."
        path="/testimonials"
      />
      <PageHeader
        eyebrow="Patient stories"
        title="What our patients say"
        intro="Real experiences from the people we care for."
      />

      <section className="container-x py-16 sm:py-20">
        {testimonials.length > 0 ? (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((t, i) => (
              <Reveal key={i} delay={i * 0.05}>
                <figure className="card h-full p-7">
                  <div className="flex gap-0.5 text-warm-500">
                    {Array.from({ length: t.rating || 5 }).map((_, j) => (
                      <Icon key={j} name="star" className="h-4 w-4" />
                    ))}
                  </div>
                  <blockquote className="mt-4 text-ink-700">"{t.review}"</blockquote>
                  <figcaption className="mt-4 font-semibold text-ink-900">
                    {t.name}
                    {t.location && <span className="font-normal text-ink-500"> · {t.location}</span>}
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        ) : (
          <Reveal>
            <div className="mx-auto max-w-2xl rounded-3xl bg-brand-50/60 p-10 text-center ring-1 ring-brand-100">
              <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-white text-warm-500 shadow-soft">
                <Icon name="star" className="h-8 w-8" />
              </span>
              <h2 className="mt-6 text-2xl font-bold text-ink-900">
                We're gathering patient stories
              </h2>
              <p className="mx-auto mt-3 max-w-md text-ink-600">
                Genuine, consented patient reviews will appear here soon. If you've
                visited us, we'd love to hear about your experience.
              </p>
              <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
                <a href={links.whatsapp} target="_blank" rel="noreferrer" className="btn-teal btn-lg">
                  <Icon name="whatsapp" className="h-4 w-4" /> Share your experience
                </a>
                <Link to="/book" className="btn-ghost btn-lg">
                  Book a visit
                </Link>
              </div>
            </div>
          </Reveal>
        )}
      </section>

      <CTABand />
    </>
  );
}
