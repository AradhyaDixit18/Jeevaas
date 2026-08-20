import { Link } from "react-router-dom";
import SEO from "../components/SEO";
import Icon from "../components/Icon";
import { site, links } from "../config/site";

export default function NotFound() {
  return (
    <>
      <SEO title="Page Not Found" path="/404" noindex />
      <section className="container-x flex min-h-[70vh] flex-col items-center justify-center py-20 text-center">
        <img src={site.logo} alt={`${site.name} logo`} className="h-16 w-16 rounded-2xl object-cover ring-1 ring-ink-100" />
        <p className="mt-8 font-display text-7xl font-extrabold text-brand-600">404</p>
        <h1 className="mt-2 text-2xl font-bold text-ink-900">This page took a wrong turn</h1>
        <p className="mx-auto mt-3 max-w-md text-ink-600">
          The page you're looking for doesn't exist or has moved. Let's get you back to
          the care you need.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Link to="/" className="btn-primary btn-lg">
            <Icon name="arrow" className="h-4 w-4 rotate-180" /> Return Home
          </Link>
          <Link to="/departments" className="btn-teal btn-lg">
            <Icon name="hospital" className="h-4 w-4" /> Our Departments
          </Link>
          <a href={links.call} className="btn-ghost btn-lg">
            <Icon name="phone" className="h-4 w-4 text-brand-600" /> Contact Hospital
          </a>
        </div>
      </section>
    </>
  );
}
