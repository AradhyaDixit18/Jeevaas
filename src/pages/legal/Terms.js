import SEO from "../../components/SEO";
import PageHeader from "../../components/PageHeader";
import { site } from "../../config/site";

export default function Terms() {
  return (
    <>
      <SEO title="Terms of Use" path="/terms" noindex />
      <PageHeader eyebrow="Legal" title="Terms of Use" crumb="Terms of Use" />
      <section className="container-x py-14">
        <div className="mx-auto max-w-3xl space-y-6 text-ink-700">
          <p>
            By using this website you agree to the following terms. Please read them
            carefully.
          </p>
          <div>
            <h2 className="text-xl font-bold text-ink-900">General information only</h2>
            <p className="mt-2">
              The content on this site is provided for general information and does not
              constitute medical or dental advice, diagnosis, or treatment. Always seek
              the advice of a qualified professional for your specific situation.
            </p>
          </div>
          <div>
            <h2 className="text-xl font-bold text-ink-900">Appointments</h2>
            <p className="mt-2">
              Submitting an appointment request through this site is a request only and
              does not confirm a booking. Our team will contact you to confirm the date
              and time. Availability is not guaranteed until confirmed.
            </p>
          </div>
          <div>
            <h2 className="text-xl font-bold text-ink-900">Use of the site</h2>
            <p className="mt-2">
              You agree to use this website lawfully and not to misuse its forms or
              content. We may update or change the site and these terms at any time.
            </p>
          </div>
          <div>
            <h2 className="text-xl font-bold text-ink-900">Contact</h2>
            <p className="mt-2">
              Questions about these terms can be sent to{" "}
              <a href={`mailto:${site.email}`} className="link-underline">{site.email}</a>.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
