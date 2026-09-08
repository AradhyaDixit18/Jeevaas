import { FaShoppingBag } from "react-icons/fa";
import { useCart } from "../../lib/cart";

/** Compact cart button for the navbar, with a live item-count badge. */
export function CartButton({ className = "" }) {
  const { count, openCart } = useCart();
  return (
    <button
      type="button"
      onClick={openCart}
      className={`relative inline-flex h-11 w-11 items-center justify-center rounded-full text-ink-800 ring-1 ring-ink-200 transition-colors hover:text-brand-700 hover:ring-brand-300 ${className}`}
      aria-label={`Open your order${count ? `, ${count} item${count === 1 ? "" : "s"}` : ""}`}
    >
      <FaShoppingBag className="h-4.5 w-4.5" />
      {count > 0 && (
        <span className="absolute -right-1 -top-1 flex h-5 min-w-[20px] items-center justify-center rounded-full bg-emergency-600 px-1 text-[11px] font-bold text-white">
          {count > 99 ? "99+" : count}
        </span>
      )}
    </button>
  );
}

/** Floating cart button — appears once the order has items. */
export function CartFab() {
  const { count, openCart } = useCart();
  if (count <= 0) return null;
  return (
    <button
      type="button"
      onClick={openCart}
      className="fixed bottom-20 right-4 z-[55] inline-flex items-center gap-2 rounded-full bg-brand-600 px-4 py-3 text-sm font-bold text-white shadow-lift transition-transform hover:-translate-y-0.5 lg:bottom-6 lg:right-6"
      aria-label={`Open your order, ${count} item${count === 1 ? "" : "s"}`}
    >
      <FaShoppingBag className="h-4 w-4" />
      <span>View order</span>
      <span className="flex h-5 min-w-[20px] items-center justify-center rounded-full bg-white/25 px-1 text-[11px] font-bold">
        {count > 99 ? "99+" : count}
      </span>
    </button>
  );
}

export default CartButton;
