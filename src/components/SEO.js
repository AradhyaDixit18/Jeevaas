import { Helmet } from "react-helmet-async";
import { site } from "../config/site";

/**
 * Per-page SEO. Sets title, description, canonical, Open Graph, and optional
 * JSON-LD structured data. Falls back to sensible site-wide defaults.
 */
export default function SEO({
  title,
  description,
  path = "/",
  image = "/logo.jpeg",
  schema,
  noindex = false,
}) {
  const fullTitle = title ? `${title} | ${site.name}` : `${site.name} | ${site.discipline} in Kanpur`;
  const desc = description || site.description;
  const url = `${site.url}${path}`;
  const img = image.startsWith("http") ? image : `${site.url}${image}`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={desc} />
      <link rel="canonical" href={url} />
      {noindex && <meta name="robots" content="noindex,nofollow" />}

      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={site.name} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={desc} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={img} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={desc} />
      <meta name="twitter:image" content={img} />

      {schema && (
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
      )}
    </Helmet>
  );
}
