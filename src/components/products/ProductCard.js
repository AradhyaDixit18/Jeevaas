import { Link } from "react-router-dom";
import Icon from "../Icon";
import ProductImage from "./ProductImage";
import { useCart } from "../../lib/cart";
import { formatINR } from "../../data/products";

export default function ProductCard({ product }) {
  const { addAndOpen, qtyOf, setQty } = useCart();
  const inCart = qtyOf(product.slug);

  return (
    <article className="card card-hover group flex h-full flex-col overflow-hidden">
      <Link
        to={`/store/${product.slug}`}
        className="relative block aspect-square overflow-hidden bg-ink-50"
        aria-label={product.name}
      >
        <ProductImage
          product={product}
          className="transition-transform duration-500 group-hover:scale-[1.04]"
        />
        {product.discount > 0 && (
          <span className="absolute left-3 top-3 rounded-full bg-emergency-600 px-2.5 py-1 text-[11px] font-bold text-white shadow-soft">
            {product.discount}% OFF
          </span>
        )}
        <span className="absolute right-3 top-3 rounded-full bg-white/90 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-brand-700 ring-1 ring-brand-100">
          {product.category.split(" ")[0]}
        </span>
      </Link>

      <div className="flex flex-1 flex-col p-4">
        <h3 className="text-sm font-bold leading-snug text-ink-900">
          <Link to={`/store/${product.slug}`} className="hover:text-brand-700">
            {product.name}
          </Link>
        </h3>
        <p className="mt-1 text-xs text-ink-500">{product.pack}</p>

        <div className="mt-3 flex items-end gap-2">
          <span className="text-lg font-extrabold text-ink-900">
            {formatINR(product.price)}
          </span>
          {product.mrp > product.price && (
            <span className="pb-0.5 text-sm text-ink-400 line-through">
              {formatINR(product.mrp)}
            </span>
          )}
          <span className="pb-0.5 text-[11px] font-semibold text-teal-700">
            / {product.unit}
          </span>
        </div>
        {product.mrp > product.price && (
          <p className="mt-0.5 text-[11px] font-semibold text-teal-700">
            Save {formatINR(product.mrp - product.price)}
          </p>
        )}

        <div className="mt-4 flex-1" />

        {inCart > 0 ? (
          <div className="flex items-center justify-between gap-2">
            <div className="flex items-center rounded-full ring-1 ring-ink-200">
              <button
                type="button"
                onClick={() => setQty(product.slug, inCart - 1)}
                className="flex h-9 w-9 items-center justify-center rounded-full text-ink-700 hover:text-brand-700"
                aria-label={`Reduce ${product.name} quantity`}
              >
                –
              </button>
              <span className="w-7 text-center text-sm font-bold text-ink-900" aria-live="polite">
                {inCart}
              </span>
              <button
                type="button"
                onClick={() => setQty(product.slug, inCart + 1)}
                className="flex h-9 w-9 items-center justify-center rounded-full text-ink-700 hover:text-brand-700"
                aria-label={`Increase ${product.name} quantity`}
              >
                +
              </button>
            </div>
            <span className="inline-flex items-center gap-1 text-xs font-semibold text-teal-700">
              <Icon name="check" className="h-4 w-4" /> Added
            </span>
          </div>
        ) : (
          <button
            type="button"
            onClick={() => addAndOpen(product.slug, 1)}
            className="btn-primary btn-md w-full"
          >
            <Icon name="list" className="h-4 w-4" /> Add to Order
          </button>
        )}
      </div>
    </article>
  );
}
