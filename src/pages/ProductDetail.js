import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import SEO from "../components/SEO";
import Reveal from "../components/Reveal";
import Icon from "../components/Icon";
import ProductImage from "../components/products/ProductImage";
import ProductCard from "../components/products/ProductCard";
import { useCart } from "../lib/cart";
import { products, productBySlug, formatINR } from "../data/products";
import { site } from "../config/site";

export default function ProductDetail() {
  const { slug } = useParams();
  const product = productBySlug(slug);
  const { addAndOpen } = useCart();
  const [imgIndex, setImgIndex] = useState(0);
  const [qty, setQty] = useState(1);

  if (!product) {
    return (
      <>
        <SEO title="Product not found" path={`/store/${slug}`} noindex />
        <section className="container-x py-24 text-center">
          <h1 className="text-2xl font-bold text-ink-900">Product not found</h1>
          <p className="mt-2 text-ink-600">This product may have moved or is no longer listed.</p>
          <Link to="/store" className="btn-primary btn-md mt-6">
            <Icon name="arrow" className="h-4 w-4" /> Back to the store
          </Link>
        </section>
      </>
    );
  }

  const hasPhotos = product.photos && product.photos.length > 1;
  const related = products
    .filter((p) => p.category === product.category && p.slug !== product.slug)
    .slice(0, 4);

  const schema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.desc,
    category: product.category,
    brand: { "@type": "Organization", name: site.name },
    offers: {
      "@type": "Offer",
      priceCurrency: "INR",
      price: product.price,
      availability: "https://schema.org/InStock",
      seller: { "@type": "Organization", name: site.name },
      url: `${site.url}/store/${product.slug}`,
    },
  };

  return (
    <>
      <SEO
        title={product.name}
        description={product.desc}
        path={`/store/${product.slug}`}
        schema={schema}
      />

      <section className="container-x pt-10 sm:pt-12">
        <nav aria-label="Breadcrumb" className="text-sm text-ink-500">
          <Link to="/" className="hover:text-brand-700">Home</Link>
          <span className="mx-2 text-ink-300">/</span>
          <Link to="/store" className="hover:text-brand-700">Store</Link>
          <span className="mx-2 text-ink-300">/</span>
          <span className="text-ink-800">{product.name}</span>
        </nav>

        <div className="mt-6 grid gap-8 lg:grid-cols-2 lg:gap-12">
          {/* Gallery */}
          <Reveal>
            <div className="overflow-hidden rounded-3xl bg-ink-50 ring-1 ring-ink-100">
              <div className="aspect-square">
                <ProductImage product={product} index={hasPhotos ? imgIndex : 0} />
              </div>
            </div>
            {hasPhotos && (
              <div className="mt-3 flex gap-3">
                {product.photos.map((src, i) => (
                  <button
                    key={src}
                    type="button"
                    onClick={() => setImgIndex(i)}
                    className={`h-20 w-20 overflow-hidden rounded-2xl bg-ink-50 ring-1 transition ${
                      imgIndex === i ? "ring-2 ring-brand-500" : "ring-ink-200 hover:ring-brand-300"
                    }`}
                    aria-label={`View image ${i + 1}`}
                  >
                    <img src={src} alt="" className="h-full w-full object-cover" loading="lazy" />
                  </button>
                ))}
              </div>
            )}
          </Reveal>

          {/* Info */}
          <Reveal delay={0.05}>
            <span className="chip">{product.category}</span>
            <h1 className="mt-3 text-2xl font-extrabold text-ink-900 sm:text-3xl">
              {product.name}
            </h1>
            <p className="mt-1 text-sm text-ink-500">{product.pack}</p>

            <div className="mt-5 flex flex-wrap items-end gap-3">
              <span className="text-3xl font-extrabold text-ink-900">
                {formatINR(product.price)}
              </span>
              {product.mrp > product.price && (
                <span className="pb-1 text-lg text-ink-400 line-through">
                  {formatINR(product.mrp)}
                </span>
              )}
              <span className="pb-1 text-sm font-semibold text-ink-500">/ {product.unit}</span>
              {product.discount > 0 && (
                <span className="mb-1 rounded-full bg-emergency-600 px-2.5 py-1 text-xs font-bold text-white">
                  {product.discount}% OFF
                </span>
              )}
            </div>
            {product.mrp > product.price && (
              <p className="mt-1 text-sm font-semibold text-teal-700">
                You save {formatINR(product.mrp - product.price)}
              </p>
            )}

            <p className="mt-5 text-sm leading-relaxed text-ink-700">{product.desc}</p>

            {/* Qty + actions */}
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <div className="flex items-center rounded-full ring-1 ring-ink-200">
                <button
                  type="button"
                  onClick={() => setQty((q) => Math.max(1, q - 1))}
                  className="flex h-11 w-11 items-center justify-center text-lg text-ink-700 hover:text-brand-700"
                  aria-label="Reduce quantity"
                >
                  –
                </button>
                <span className="w-8 text-center font-bold text-ink-900">{qty}</span>
                <button
                  type="button"
                  onClick={() => setQty((q) => Math.min(999, q + 1))}
                  className="flex h-11 w-11 items-center justify-center text-lg text-ink-700 hover:text-brand-700"
                  aria-label="Increase quantity"
                >
                  +
                </button>
              </div>
              <button
                type="button"
                onClick={() => addAndOpen(product.slug, qty)}
                className="btn-primary btn-lg flex-1 sm:flex-none"
              >
                <Icon name="list" className="h-4 w-4" /> Add to order
              </button>
              <a
                href={`https://wa.me/${site.whatsapp.number}?text=${encodeURIComponent(
                  `Hi ${site.name}, I'm interested in: ${product.name} (${formatINR(product.price)} / ${product.unit}). Please confirm availability and delivery.`
                )}`}
                target="_blank"
                rel="noreferrer"
                className="btn-teal btn-lg"
              >
                <Icon name="whatsapp" className="h-4 w-4" /> Enquire
              </a>
            </div>

            {/* Trust row */}
            <div className="mt-7 grid gap-3 rounded-2xl bg-ink-50 p-4 sm:grid-cols-3">
              {[
                ["shield", "Quality checked"],
                ["ambulance", "Local delivery"],
                ["whatsapp", "WhatsApp support"],
              ].map(([icon, t]) => (
                <div key={t} className="flex items-center gap-2">
                  <Icon name={icon} className="h-5 w-5 text-brand-600" />
                  <span className="text-xs font-semibold text-ink-700">{t}</span>
                </div>
              ))}
            </div>

            <p className="mt-4 text-xs leading-relaxed text-ink-500">
              <strong className="text-ink-700">Marketed &amp; supplied by {site.name}.</strong>{" "}
              Sourced from third-party manufacturers. {site.name} is the distributor and marketer,
              not the manufacturer. Image is representative; price is indicative and taxes or delivery
              may apply. Final price is confirmed before payment.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Specs */}
      <section className="container-x py-12">
        <div className="grid gap-4 rounded-3xl bg-white p-6 shadow-card ring-1 ring-ink-100 sm:grid-cols-2 lg:grid-cols-4">
          {[
            ["Category", product.category],
            ["Pack", product.pack],
            ["Sold as", `Per ${product.unit}`],
            ["Supplied by", site.name],
          ].map(([k, v]) => (
            <div key={k}>
              <p className="text-[11px] font-semibold uppercase tracking-wide text-ink-400">{k}</p>
              <p className="mt-1 text-sm font-semibold text-ink-800">{v}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Related */}
      {related.length > 0 && (
        <section className="container-x pb-16 sm:pb-20">
          <h2 className="text-xl font-bold text-ink-900">More in {product.category}</h2>
          <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {related.map((p) => (
              <ProductCard key={p.slug} product={p} />
            ))}
          </div>
        </section>
      )}
    </>
  );
}
