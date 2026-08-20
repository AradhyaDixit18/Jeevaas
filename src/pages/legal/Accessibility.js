import SEO from "../../components/SEO";
import PageHeader from "../../components/PageHeader";
import { site } from "../../config/site";

export default function Accessibility() {
  return (
    <>
      <SEO title="Accessibility" path="/accessibility" noindex />
      <PageHeader eyebrow="Legal" title="Accessibility Statement" crumb="Accessibility" />
      <section className="container-x py-14">
        <div className="mx-auto max-w-3xl space-y-6 text-ink-700">
          <p>
            {site.legalName} is committed to making this website usable for as many
            people as possible, including those who rely on assistive technology.
          </p>
          <div>
            <h2 className="text-xl font-bold text-ink-900">What we've done</h2>
            <p className="mt-2">
              This site is built with semantic HTML, clear heading structure, keyboard
              navigation, visible focus indicators, descriptive labels on form fields
              and buttons, alternative text on meaningful images, and colour contrast
              chosen for readability. It also respects the "reduced motion" setting in
              your device or browser.
            </p>
          </div>
          <div>
            <h2 className="text-xl font-bold text-ink-900">Ongoing work</h2>
            <p className="mt-2">
              Accessibility is an ongoing effort. If you encounter any barrier using
              this site, please let us know so we can put it right.
            </p>
          </div>
          <div>
            <h2 className="text-xl font-bold text-ink-900">Contact</h2>
            <p className="mt-2">
              Email us at{" "}
              <a href={`mailto:${site.email}`} className="link-underline">{site.email}</a>{" "}
              or call {site.phone.display} and we'll be glad to help.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
