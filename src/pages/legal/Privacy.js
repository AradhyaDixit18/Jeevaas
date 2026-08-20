import SEO from "../../components/SEO";
import PageHeader from "../../components/PageHeader";
import { site } from "../../config/site";

export default function Privacy() {
  return (
    <>
      <SEO title="Privacy Policy" path="/privacy" noindex />
      <PageHeader eyebrow="Legal" title="Privacy Policy" crumb="Privacy Policy" />
      <section className="container-x py-14">
        <div className="mx-auto max-w-3xl space-y-6 text-ink-700">
          <p>
            {site.legalName} ("we", "us") respects your privacy. This policy explains
            how we handle the information you share with us through this website.
          </p>
          <div>
            <h2 className="text-xl font-bold text-ink-900">Information we collect</h2>
            <p className="mt-2">
              When you submit an appointment request or contact form, we collect the
              details you provide, such as your name, phone number, email address, and
              any message or appointment preferences. We do not collect this information
              for any purpose other than responding to your request.
            </p>
          </div>
          <div>
            <h2 className="text-xl font-bold text-ink-900">How we use it</h2>
            <p className="mt-2">
              We use your information solely to contact you about your enquiry or
              appointment and to provide the care you have requested. We do not sell
              your personal information.
            </p>
          </div>
          <div>
            <h2 className="text-xl font-bold text-ink-900">Third-party services</h2>
            <p className="mt-2">
              Form submissions are delivered to our team by email using a third-party
              email delivery service. Your information is transmitted for the purpose of
              reaching our team and is subject to that provider's own handling practices.
            </p>
          </div>
          <div>
            <h2 className="text-xl font-bold text-ink-900">Your choices</h2>
            <p className="mt-2">
              You may contact us at any time to ask what information we hold about you or
              to request that we update or remove it. Reach us at{" "}
              <a href={`mailto:${site.email}`} className="link-underline">{site.email}</a>.
            </p>
          </div>
          <p className="text-sm text-ink-400">
            This policy may be updated from time to time. Please review it periodically.
          </p>
        </div>
      </section>
    </>
  );
}
