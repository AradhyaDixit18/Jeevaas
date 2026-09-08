import { useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { FaTimes } from "react-icons/fa";
import Icon from "../Icon";
import ProductImage from "./ProductImage";
import { useCart } from "../../lib/cart";
import { submitOrder } from "../../lib/order";
import { formatINR } from "../../data/products";
import { site } from "../../config/site";

const EMPTY = { name: "", phone: "", email: "", clinic: "", address: "", notes: "" };

export default function CartDrawer() {
  const cart = useCart();
  const { isOpen, closeCart, items, count, subtotal, subtotalMrp, saved } = cart;
  const [form, setForm] = useState(EMPTY);
  const [stage, setStage] = useState("cart"); // cart | form | done
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");
  const [result, setResult] = useState(null);

  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const startNew = () => {
    setForm(EMPTY);
    setStage("cart");
    setResult(null);
    setError("");
  };

  async function placeOrder(e) {
    e.preventDefault();
    setError("");
    if (!form.name.trim() || form.phone.trim().length < 8) {
      setError("Please enter your name and a valid phone number.");
      return;
    }
    setBusy(true);
    try {
      const totals = { count, subtotal, saved };
      const res = await submitOrder(items, form, totals);
      // Hand off to WhatsApp with the itemised order pre-filled.
      window.open(res.whatsappUrl, "_blank", "noopener,noreferrer");
      setResult(res);
      setStage("done");
      cart.clear();
    } catch (err) {
      setError("Something went wrong. Please try again, or call us directly.");
    } finally {
      setBusy(false);
    }
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            className="fixed inset-0 z-[60] bg-ink-900/50 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeCart}
          />
          <motion.aside
            className="fixed right-0 top-0 z-[70] flex h-full w-full max-w-md flex-col bg-white shadow-lift"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.3, ease: "easeInOut" }}
            role="dialog"
            aria-label="Your order"
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b border-ink-100 px-5 py-4">
              <div>
                <p className="font-display text-lg font-extrabold text-ink-900">
                  {stage === "done" ? "Order sent" : "Your order"}
                </p>
                {stage !== "done" && (
                  <p className="text-xs text-ink-500">
                    {count} item{count === 1 ? "" : "s"}
                  </p>
                )}
              </div>
              <button
                type="button"
                onClick={closeCart}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full text-ink-800 ring-1 ring-ink-200 hover:ring-brand-300"
                aria-label="Close order"
              >
                <FaTimes className="h-4 w-4" />
              </button>
            </div>

            {/* Body */}
            <div className="flex-1 overflow-y-auto px-5 py-4">
              {/* DONE STATE */}
              {stage === "done" && result && (
                <div className="flex h-full flex-col items-center justify-center text-center">
                  <span className="flex h-16 w-16 items-center justify-center rounded-full bg-teal-50 text-teal-600">
                    <Icon name="whatsapp" className="h-8 w-8" />
                  </span>
                  <h3 className="mt-4 text-xl font-bold text-ink-900">We opened WhatsApp</h3>
                  <p className="mt-2 text-sm text-ink-600">
                    Your itemised order is ready in a WhatsApp chat with our team. Press send there
                    and we will confirm stock, final price and delivery.
                  </p>
                  <p className="mt-3 rounded-full bg-ink-50 px-4 py-1.5 text-xs font-semibold text-ink-700">
                    Order ref: {result.reference}
                  </p>
                  <a
                    href={result.whatsappUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-teal btn-md mt-6 w-full"
                  >
                    <Icon name="whatsapp" className="h-4 w-4" /> Open WhatsApp again
                  </a>
                  <button type="button" onClick={startNew} className="btn-ghost btn-md mt-3 w-full">
                    Start a new order
                  </button>
                </div>
              )}

              {/* EMPTY STATE */}
              {stage !== "done" && items.length === 0 && (
                <div className="flex h-full flex-col items-center justify-center text-center">
                  <span className="flex h-16 w-16 items-center justify-center rounded-full bg-brand-50 text-brand-600">
                    <Icon name="list" className="h-8 w-8" />
                  </span>
                  <h3 className="mt-4 text-lg font-bold text-ink-900">Your order is empty</h3>
                  <p className="mt-2 text-sm text-ink-600">
                    Browse the store and add the supplies you need.
                  </p>
                  <Link to="/store" onClick={closeCart} className="btn-primary btn-md mt-6">
                    <Icon name="arrow" className="h-4 w-4" /> Go to the store
                  </Link>
                </div>
              )}

              {/* ITEM LIST */}
              {stage === "cart" && items.length > 0 && (
                <ul className="space-y-3">
                  {items.map((l) => (
                    <li key={l.slug} className="flex gap-3 rounded-2xl ring-1 ring-ink-100 p-2.5">
                      <div className="h-16 w-16 flex-shrink-0 overflow-hidden rounded-xl bg-ink-50">
                        <ProductImage product={l.product} />
                      </div>
                      <div className="flex flex-1 flex-col">
                        <p className="text-xs font-bold leading-snug text-ink-900">
                          {l.product.name}
                        </p>
                        <p className="text-[11px] text-ink-500">
                          {formatINR(l.product.price)} / {l.product.unit}
                        </p>
                        <div className="mt-auto flex items-center justify-between pt-1.5">
                          <div className="flex items-center rounded-full ring-1 ring-ink-200">
                            <button
                              type="button"
                              onClick={() => cart.setQty(l.slug, l.qty - 1)}
                              className="flex h-7 w-7 items-center justify-center text-ink-700"
                              aria-label="Reduce quantity"
                            >
                              –
                            </button>
                            <span className="w-6 text-center text-xs font-bold">{l.qty}</span>
                            <button
                              type="button"
                              onClick={() => cart.setQty(l.slug, l.qty + 1)}
                              className="flex h-7 w-7 items-center justify-center text-ink-700"
                              aria-label="Increase quantity"
                            >
                              +
                            </button>
                          </div>
                          <span className="text-sm font-bold text-ink-900">
                            {formatINR(l.lineTotal)}
                          </span>
                        </div>
                      </div>
                      <button
                        type="button"
                        onClick={() => cart.remove(l.slug)}
                        className="self-start text-ink-300 hover:text-emergency-600"
                        aria-label={`Remove ${l.product.name}`}
                      >
                        <FaTimes className="h-3.5 w-3.5" />
                      </button>
                    </li>
                  ))}
                </ul>
              )}

              {/* CHECKOUT FORM */}
              {stage === "form" && items.length > 0 && (
                <form id="order-form" onSubmit={placeOrder} className="space-y-3">
                  <p className="text-sm text-ink-600">
                    Share your details and we will confirm your order on WhatsApp.
                  </p>
                  <Field label="Full name" required value={form.name} onChange={set("name")} placeholder="Dr. / Name" />
                  <Field label="Phone / WhatsApp" required value={form.phone} onChange={set("phone")} placeholder="10-digit mobile" type="tel" />
                  <Field label="Email" value={form.email} onChange={set("email")} placeholder="Optional" type="email" />
                  <Field label="Clinic / Institution" value={form.clinic} onChange={set("clinic")} placeholder="Optional" />
                  <div>
                    <label className="text-xs font-semibold text-ink-700">Delivery address</label>
                    <textarea
                      value={form.address}
                      onChange={set("address")}
                      rows={2}
                      placeholder="Where should we deliver? (optional)"
                      className="mt-1 w-full rounded-xl border border-ink-200 px-3 py-2 text-sm focus:border-brand-400 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-ink-700">Notes</label>
                    <textarea
                      value={form.notes}
                      onChange={set("notes")}
                      rows={2}
                      placeholder="Anything else we should know? (optional)"
                      className="mt-1 w-full rounded-xl border border-ink-200 px-3 py-2 text-sm focus:border-brand-400 focus:outline-none"
                    />
                  </div>
                </form>
              )}

              {error && (
                <p className="mt-3 rounded-xl bg-emergency-50 px-3 py-2 text-xs font-semibold text-emergency-700">
                  {error}
                </p>
              )}
            </div>

            {/* Footer / totals */}
            {stage !== "done" && items.length > 0 && (
              <div className="border-t border-ink-100 px-5 py-4">
                <div className="space-y-1 text-sm">
                  {saved > 0 && (
                    <div className="flex items-center justify-between text-ink-500">
                      <span>List price</span>
                      <span className="line-through">{formatINR(subtotalMrp)}</span>
                    </div>
                  )}
                  <div className="flex items-center justify-between font-bold text-ink-900">
                    <span>Subtotal</span>
                    <span>{formatINR(subtotal)}</span>
                  </div>
                  {saved > 0 && (
                    <div className="flex items-center justify-between text-xs font-semibold text-teal-700">
                      <span>You save</span>
                      <span>{formatINR(saved)}</span>
                    </div>
                  )}
                </div>
                <p className="mt-2 text-[11px] leading-snug text-ink-400">
                  Indicative pricing. Taxes and delivery confirmed by our team before payment.
                </p>

                {stage === "cart" ? (
                  <button
                    type="button"
                    onClick={() => setStage("form")}
                    className="btn-primary btn-lg mt-3 w-full"
                  >
                    Continue <Icon name="arrow" className="h-4 w-4" />
                  </button>
                ) : (
                  <div className="mt-3 space-y-2">
                    <button
                      type="submit"
                      form="order-form"
                      disabled={busy}
                      className="btn-teal btn-lg w-full"
                    >
                      <Icon name="whatsapp" className="h-4 w-4" />
                      {busy ? "Preparing…" : "Place order on WhatsApp"}
                    </button>
                    <button
                      type="button"
                      onClick={() => setStage("cart")}
                      className="btn-ghost btn-md w-full"
                    >
                      Back to items
                    </button>
                  </div>
                )}
                <p className="mt-3 text-center text-[11px] text-ink-400">
                  {site.name} markets these products. We are the supplier, not the manufacturer.
                </p>
              </div>
            )}
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}

function Field({ label, required, ...props }) {
  return (
    <div>
      <label className="text-xs font-semibold text-ink-700">
        {label} {required && <span className="text-emergency-600">*</span>}
      </label>
      <input
        {...props}
        required={required}
        className="mt-1 w-full rounded-xl border border-ink-200 px-3 py-2 text-sm focus:border-brand-400 focus:outline-none"
      />
    </div>
  );
}
