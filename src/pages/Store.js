import { useMemo, useState } from "react";
import SEO from "../components/SEO";
import PageHeader from "../components/PageHeader";
import Reveal from "../components/Reveal";
import Icon from "../components/Icon";
import ProductCard from "../components/products/ProductCard";
import { products, productCategories } from "../data/products";
import { site } from "../config/site";


export default function Store() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");
  const [sort, setSort] = useState("featured");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    let list = products.filter((p) => {
      const inCat = category === "All" || p.category === category;
      const inText =
        !q ||
        p.name.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q) ||
        p.desc.toLowerCase().includes(q);
      return inCat && inText;
    });
    if (sort === "price-asc") list = [...list].sort((a, b) => a.price - b.price);
    else if (sort === "price-desc") list = [...list].sort((a, b) => b.price - a.price);
    else if (sort === "discount") list = [...list].sort((a, b) => b.discount - a.discount);
    else list = [...list].sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
    return list;
  }, [query, category, sort]);

  const schema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: `${site.name} Medical & Dental Store`,
    itemListElement: products.map((p, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: p.name,
      url: `${site.url}/store/${p.slug}`,
    })),
  };

  const cats = ["All", ...productCategories];

  return (
    <>
      <SEO
        title="Medical & Dental Store"
        description="Buy dental and hospital supplies from Jeevaas Hospital: stainless steel wire, sutures, burs, handpieces, acrylics, endodontic and restorative materials. Marketed and supplied by Jeevaas Hospital at discounted prices."
        path="/store"
        schema={schema}
      />
      <PageHeader
        eyebrow="Medical & dental supplies"
        title="The Jeevaas Store"
        intro="Quality dental and hospital consumables, instruments and equipment, supplied by Jeevaas Hospital at member-friendly prices. Add what you need and we confirm stock, price and delivery on WhatsApp."
        crumb="Store"
      />

      {/* Marketer disclosure + how it works */}
      <section className="container-x -mt-8 relative z-10">
        <Reveal className="rounded-3xl bg-white p-5 shadow-card ring-1 ring-ink-100 sm:p-6">
          <div className="grid gap-4 sm:grid-cols-3">
            {[
              ["list", "Add to your order", "Browse and add supplies. Prices already include the discount."],
              ["whatsapp", "Confirm on WhatsApp", "Send your order and we confirm stock, final price and delivery."],
              ["ambulance", "Fast local delivery", "Pickup from the hospital or delivery across Kanpur and nearby."],
            ].map(([icon, t, d]) => (
              <div key={t} className="flex items-start gap-3">
                <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                  <Icon name={icon} className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-sm font-bold text-ink-900">{t}</p>
                  <p className="text-xs text-ink-600">{d}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-4 rounded-xl bg-ink-50 px-4 py-2.5 text-xs leading-relaxed text-ink-600">
            <strong className="text-ink-800">Please note:</strong> {site.name} markets and
            supplies these products. They are sourced from third-party manufacturers. {site.name} is
            the distributor and marketer, not the manufacturer. Product images are representative;
            prices are indicative and taxes or delivery may apply.
          </p>
        </Reveal>
      </section>

      <section className="container-x py-12 sm:py-14">
        {/* Controls */}
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div className="relative w-full sm:max-w-xs">
              <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-ink-400">
                <Icon name="list" className="h-4 w-4" />
              </span>
              <input
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search products…"
                className="w-full rounded-full border border-ink-200 py-2.5 pl-9 pr-4 text-sm focus:border-brand-400 focus:outline-none"
                aria-label="Search products"
              />
            </div>
            <div className="flex items-center gap-2">
              <label className="text-xs font-semibold text-ink-500">Sort</label>
              <select
                value={sort}
                onChange={(e) => setSort(e.target.value)}
                className="rounded-full border border-ink-200 px-3 py-2 text-sm focus:border-brand-400 focus:outline-none"
              >
                <option value="featured">Featured</option>
                <option value="price-asc">Price: low to high</option>
                <option value="price-desc">Price: high to low</option>
                <option value="discount">Biggest discount</option>
              </select>
            </div>
          </div>

          {/* Category chips */}
          <div className="-mx-1 flex gap-2 overflow-x-auto pb-1">
            {cats.map((c) => (
              <button
                key={c}
                type="button"
                onClick={() => setCategory(c)}
                className={`whitespace-nowrap rounded-full px-3.5 py-1.5 text-xs font-semibold transition-colors ${
                  category === c
                    ? "bg-brand-600 text-white shadow-soft"
                    : "bg-white text-ink-700 ring-1 ring-ink-200 hover:ring-brand-300"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        <p className="mt-5 text-xs font-semibold text-ink-500">
          {filtered.length} product{filtered.length === 1 ? "" : "s"}
          {category !== "All" ? ` in ${category}` : ""}
        </p>

        {/* Grid */}
        {filtered.length > 0 ? (
          <div className="mt-4 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filtered.map((p, i) => (
              <Reveal key={p.slug} delay={(i % 4) * 0.04}>
                <ProductCard product={p} />
              </Reveal>
            ))}
          </div>
        ) : (
          <div className="mt-10 rounded-3xl bg-ink-50 py-16 text-center">
            <p className="font-bold text-ink-900">No products match your search.</p>
            <button
              type="button"
              onClick={() => {
                setQuery("");
                setCategory("All");
              }}
              className="btn-ghost btn-md mt-4"
            >
              Clear filters
            </button>
          </div>
        )}
      </section>

      {/* Bulk enquiry band */}
      <section className="container-x pb-16 sm:pb-20">
        <Reveal className="relative overflow-hidden rounded-3xl bg-ink-900 px-6 py-12 text-center shadow-lift sm:px-12">
          <div className="absolute inset-0 bg-plus-white opacity-60" aria-hidden="true" />
          <div className="pointer-events-none absolute -left-16 -top-16 h-56 w-56 rounded-full bg-brand-500/25 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-20 -right-10 h-64 w-64 rounded-full bg-teal-500/20 blur-3xl" />
          <div className="relative mx-auto max-w-2xl">
            <span className="eyebrow text-teal-300 justify-center">
              <span className="h-2 w-2 rounded-sm bg-teal-400" /> Bulk & clinic orders
            </span>
            <h2 className="mt-3 text-2xl font-bold text-white sm:text-3xl">
              Stocking a clinic or need a bulk quote?
            </h2>
            <p className="mt-3 text-ink-100">
              Tell us what you need and we will put together a price for your list. Regular buyers
              get preferential rates.
            </p>
            <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a href={`https://wa.me/${site.whatsapp.number}`} target="_blank" rel="noreferrer" className="btn-teal btn-lg w-full sm:w-auto">
                <Icon name="whatsapp" className="h-4 w-4" /> Enquire on WhatsApp
              </a>
              <a href={`tel:${site.phone.tel}`} className="btn-outline-white btn-lg w-full sm:w-auto">
                <Icon name="phone" className="h-4 w-4" /> Call {site.phone.display}
              </a>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
