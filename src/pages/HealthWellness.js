import SEO from "../components/SEO";
import PageHeader from "../components/PageHeader";
import Reveal from "../components/Reveal";
import Icon from "../components/Icon";
import FAQAccordion from "../components/FAQAccordion";
import CTABand from "../components/CTABand";
import { healthTips, faqs, wellnessDisclaimer } from "../data/content";
import { site } from "../config/site";

export default function HealthWellness() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <>
      <SEO
        title="Health Tips & FAQs"
        description="General health and wellness tips and frequently asked questions from the team at Jeevaas Hospital, Kanpur."
        path="/health-wellness"
        schema={schema}
      />
      <PageHeader
        eyebrow="Health & wellness"
        title="Simple habits for a healthier life"
        intro="Practical, everyday guidance from our team, plus answers to the questions patients ask us most."
      />

      <section className="container-x py-16 sm:py-20">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {healthTips.map((t, i) => (
            <Reveal key={t.title} delay={(i % 3) * 0.05}>
              <div className="card h-full p-7">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-50 text-brand-600">
                  <Icon name={t.icon} className="h-6 w-6" />
                </span>
                <h3 className="mt-5 text-lg font-bold text-ink-900">{t.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-600">{t.text}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <p className="mx-auto mt-10 max-w-2xl rounded-2xl bg-ink-50 px-5 py-4 text-center text-sm text-ink-500">
          <Icon name="shield" className="mr-2 inline h-4 w-4 text-brand-500" />
          {wellnessDisclaimer}
        </p>
      </section>

      {/* FAQ */}
      <section className="bg-brand-50/50 py-16 sm:py-20">
        <div className="container-x">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <span className="eyebrow justify-center">
              <span className="h-2 w-2 rounded-sm bg-teal-500" /> Common questions
            </span>
            <h2 className="mt-3 text-3xl font-bold text-ink-900">Frequently asked questions</h2>
          </div>
          <FAQAccordion items={faqs} />
          <p className="mt-8 text-center text-sm text-ink-500">
            Have another question?{" "}
            <a href={`tel:${site.phone.tel}`} className="link-underline">
              Call {site.phone.display}
            </a>
          </p>
        </div>
      </section>

      <CTABand />
    </>
  );
}
