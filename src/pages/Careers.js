import SEO from "../components/SEO";
import PageHeader from "../components/PageHeader";
import Reveal from "../components/Reveal";
import Icon from "../components/Icon";
import CTABand from "../components/CTABand";
import { careerBenefits, jobOpenings } from "../data/content";
import { site, links } from "../config/site";

// Build a prefilled application mail / WhatsApp link for a role.
const applyMail = (role) =>
  `mailto:${site.careersEmail}?subject=${encodeURIComponent(
    `Career Application — ${role}`
  )}&body=${encodeURIComponent(
    `Dear ${site.name} HR Team,\n\nI would like to apply for the position of ${role}. Please find my details below (attach your CV to this email):\n\nName:\nPhone:\nQualification:\nExperience:\n\nThank you.`
  )}`;

const applyWhatsApp = (role) =>
  `https://wa.me/${site.whatsapp.number}?text=${encodeURIComponent(
    `Hello ${site.name}, I would like to apply for the ${role} position.`
  )}`;

export default function Careers() {
  const hasOpenings = jobOpenings.length > 0;

  const schema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: jobOpenings.map((j, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: j.title,
    })),
  };

  return (
    <>
      <SEO
        title="Careers"
        description={`Join the team at ${site.name}, a multispeciality hospital in Kalyanpur, Kanpur. Explore openings for doctors, nurses, and support staff.`}
        path="/careers"
        schema={schema}
      />
      <PageHeader
        eyebrow="Careers at Jeevaas"
        title="Do work that matters, with people who care"
        intro="We are building a team of compassionate, skilled professionals, from doctors and nurses to diagnostics and support staff. If you want to make a real difference in patients' lives, we would love to hear from you."
      />

      {/* Why work with us */}
      <section className="container-x py-16 sm:py-20">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <span className="eyebrow justify-center">
            <span className="h-2 w-2 rounded-sm bg-teal-500" /> Life at Jeevaas
          </span>
          <h2 className="mt-3 text-3xl font-bold text-ink-900">Why build your career with us</h2>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {careerBenefits.map((b, i) => (
            <Reveal key={b.title} delay={i * 0.05}>
              <div className="card h-full p-7">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-50 text-brand-600">
                  <Icon name={b.icon} className="h-6 w-6" />
                </span>
                <h3 className="mt-5 text-lg font-bold text-ink-900">{b.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-600">{b.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Current openings */}
      <section className="bg-brand-50/50 py-16 sm:py-20">
        <div className="container-x">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <span className="eyebrow justify-center">
              <span className="h-2 w-2 rounded-sm bg-teal-500" /> Open positions
            </span>
            <h2 className="mt-3 text-3xl font-bold text-ink-900">Current openings</h2>
            <p className="mt-3 text-ink-600">
              Explore the roles we are hiring for right now. Don't see your role? We still
              welcome your application for future openings.
            </p>
          </div>

          {hasOpenings ? (
            <div className="space-y-4">
              {jobOpenings.map((job, i) => (
                <Reveal key={`${job.title}-${i}`} delay={(i % 4) * 0.05}>
                  <article className="card p-6 sm:p-7">
                    <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
                      <div className="lg:max-w-2xl">
                        <div className="flex flex-wrap items-center gap-2">
                          <h3 className="text-lg font-bold text-ink-900">{job.title}</h3>
                          <span className="chip">{job.department}</span>
                        </div>
                        <p className="mt-2 text-sm leading-relaxed text-ink-600">{job.summary}</p>
                        <ul className="mt-3 flex flex-wrap gap-4 text-xs font-medium text-ink-500">
                          <li className="inline-flex items-center gap-1.5">
                            <Icon name="briefcase" className="h-3.5 w-3.5 text-brand-500" /> {job.type}
                          </li>
                          <li className="inline-flex items-center gap-1.5">
                            <Icon name="pin" className="h-3.5 w-3.5 text-brand-500" /> {job.location}
                          </li>
                        </ul>
                      </div>
                      <div className="flex shrink-0 flex-col gap-2 sm:flex-row lg:flex-col xl:flex-row">
                        <a href={applyMail(job.title)} className="btn-primary btn-md">
                          <Icon name="email" className="h-4 w-4" /> Apply by Email
                        </a>
                        <a href={applyWhatsApp(job.title)} target="_blank" rel="noreferrer" className="btn-ghost btn-md">
                          <Icon name="whatsapp" className="h-4 w-4 text-teal-600" /> WhatsApp
                        </a>
                      </div>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          ) : (
            <Reveal>
              <div className="mx-auto max-w-2xl rounded-3xl bg-white p-10 text-center shadow-card ring-1 ring-ink-100">
                <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-brand-50 text-brand-600">
                  <Icon name="briefcase" className="h-8 w-8" />
                </span>
                <h3 className="mt-6 text-2xl font-bold text-ink-900">
                  No open positions right now
                </h3>
                <p className="mx-auto mt-3 max-w-md text-ink-600">
                  We're not actively hiring at the moment, but we're always glad to hear
                  from talented people. Send us your CV and we'll be in touch when a
                  suitable role opens.
                </p>
              </div>
            </Reveal>
          )}
        </div>
      </section>

      {/* General application */}
      <section className="container-x py-16 sm:py-20">
        <Reveal className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-brand-600 to-ink-900 px-6 py-14 text-center text-white shadow-lift sm:px-12">
          <div className="absolute inset-0 bg-plus-white opacity-50" aria-hidden="true" />
          <div className="relative mx-auto max-w-2xl">
            <Icon name="handHeart" className="mx-auto h-10 w-10 text-teal-300" />
            <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">Send us your application</h2>
            <p className="mt-4 text-brand-50">
              Email your CV with the role you're interested in, or message us on WhatsApp.
              Our team reviews every application and will reach out when there's a fit.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a href={applyMail("General Application")} className="btn bg-white text-brand-700 btn-lg hover:bg-brand-50">
                <Icon name="email" className="h-4 w-4" /> Email your CV
              </a>
              <a href={links.whatsapp} target="_blank" rel="noreferrer" className="btn-outline-white btn-lg">
                <Icon name="whatsapp" className="h-4 w-4" /> WhatsApp Us
              </a>
            </div>
            <p className="mt-6 text-sm text-brand-100">
              Applications:{" "}
              <a href={`mailto:${site.careersEmail}`} className="font-semibold underline">
                {site.careersEmail}
              </a>
            </p>
          </div>
        </Reveal>
      </section>

      <CTABand />
    </>
  );
}
