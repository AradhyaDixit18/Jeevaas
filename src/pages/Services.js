import SEO from "../components/SEO";
import PageHeader from "../components/PageHeader";
import Reveal from "../components/Reveal";
import ServiceCard from "../components/ServiceCard";
import CTABand from "../components/CTABand";
import { services } from "../data/content";
import { site } from "../config/site";

export default function Services() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: services.map((s, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: s.title,
      url: `${site.url}/departments/${s.slug}`,
    })),
  };

  return (
    <>
      <SEO
        title="Departments & Specialties"
        description="Explore the departments at Jeevaas Hospital: General Medicine, Cardiology, Orthopaedics, Paediatrics, Gynaecology, Surgery, ENT, Ophthalmology, Neurology, Dermatology, Emergency care, and more."
        path="/departments"
        schema={schema}
      />
      <PageHeader
        eyebrow="Our departments"
        title="Specialist care across every major field"
        intro="A complete range of medical and surgical departments, working together so you get the right care in one place. Choose a department to learn more, or book directly."
        crumb="Departments"
      />
      <section className="container-x py-16 sm:py-20">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <Reveal key={s.slug} delay={(i % 3) * 0.05}>
              <ServiceCard service={s} />
            </Reveal>
          ))}
        </div>
      </section>
      <CTABand />
    </>
  );
}
