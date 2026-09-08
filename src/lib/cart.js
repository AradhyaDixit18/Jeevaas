import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useReducer,
  useState,
  useCallback,
} from "react";
import { products } from "../data/products";

/**
 * ============================================================================
 *  CART — client-side shopping cart for the Jeevaas medical & dental store
 * ============================================================================
 *  There is no online payment gateway. The cart collects the items the visitor
 *  wants and hands the itemised order to the hospital over WhatsApp / email
 *  (see lib/order.js), where a team member confirms stock, price and delivery.
 *  State persists in localStorage so a cart survives a refresh.
 * ============================================================================
 */

const STORAGE_KEY = "jeevaas_store_cart_v1";
const bySlug = Object.fromEntries(products.map((p) => [p.slug, p]));

function load() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];
    // keep only lines that still map to a real product
    return parsed
      .filter((l) => l && bySlug[l.slug] && Number(l.qty) > 0)
      .map((l) => ({ slug: l.slug, qty: Math.min(999, Math.max(1, Math.floor(l.qty))) }));
  } catch {
    return [];
  }
}

function reducer(state, action) {
  switch (action.type) {
    case "add": {
      const qty = Math.max(1, action.qty || 1);
      const existing = state.find((l) => l.slug === action.slug);
      if (existing) {
        return state.map((l) =>
          l.slug === action.slug ? { ...l, qty: Math.min(999, l.qty + qty) } : l
        );
      }
      return [...state, { slug: action.slug, qty: Math.min(999, qty) }];
    }
    case "setQty": {
      const qty = Math.floor(action.qty);
      if (qty <= 0) return state.filter((l) => l.slug !== action.slug);
      return state.map((l) =>
        l.slug === action.slug ? { ...l, qty: Math.min(999, qty) } : l
      );
    }
    case "remove":
      return state.filter((l) => l.slug !== action.slug);
    case "clear":
      return [];
    default:
      return state;
  }
}

const CartContext = createContext(null);

export function CartProvider({ children }) {
  const [lines, dispatch] = useReducer(reducer, undefined, load);
  const [isOpen, setOpen] = useState(false);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(lines));
    } catch {
      /* storage unavailable (private mode) — cart simply won't persist */
    }
  }, [lines]);

  const add = useCallback((slug, qty = 1) => {
    dispatch({ type: "add", slug, qty });
  }, []);
  const setQty = useCallback((slug, qty) => dispatch({ type: "setQty", slug, qty }), []);
  const remove = useCallback((slug) => dispatch({ type: "remove", slug }), []);
  const clear = useCallback(() => dispatch({ type: "clear" }), []);
  const openCart = useCallback(() => setOpen(true), []);
  const closeCart = useCallback(() => setOpen(false), []);

  const detailed = useMemo(
    () =>
      lines
        .map((l) => {
          const product = bySlug[l.slug];
          if (!product) return null;
          return {
            ...l,
            product,
            lineTotal: product.price * l.qty,
            lineMrp: product.mrp * l.qty,
          };
        })
        .filter(Boolean),
    [lines]
  );

  const value = useMemo(() => {
    const count = detailed.reduce((n, l) => n + l.qty, 0);
    const subtotal = detailed.reduce((n, l) => n + l.lineTotal, 0);
    const subtotalMrp = detailed.reduce((n, l) => n + l.lineMrp, 0);
    return {
      lines,
      items: detailed,
      count,
      subtotal,
      subtotalMrp,
      saved: subtotalMrp - subtotal,
      isOpen,
      add,
      setQty,
      remove,
      clear,
      openCart,
      closeCart,
      addAndOpen: (slug, qty = 1) => {
        add(slug, qty);
        setOpen(true);
      },
      qtyOf: (slug) => lines.find((l) => l.slug === slug)?.qty || 0,
    };
  }, [lines, detailed, isOpen, add, setQty, remove, clear, openCart, closeCart]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within a CartProvider");
  return ctx;
}

export default CartProvider;
