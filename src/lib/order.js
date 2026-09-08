import emailjs from "@emailjs/browser";
import { emailjsConfig } from "../config/emailjs";
import { site } from "../config/site";
import { formatINR } from "../data/products";

/**
 * ============================================================================
 *  STORE ORDER — turns a cart into an order enquiry
 * ============================================================================
 *  Primary channel is WhatsApp: it opens the hospital chat pre-filled with an
 *  itemised order, which is the fastest way for the team to confirm stock,
 *  final price and delivery. A copy is also emailed to the admin inbox using
 *  the same EmailJS service as the appointment form. No card details are ever
 *  collected in the browser.
 * ============================================================================
 */

export function generateOrderRef() {
  const now = new Date();
  const y = String(now.getFullYear()).slice(2);
  const m = String(now.getMonth() + 1).padStart(2, "0");
  const d = String(now.getDate()).padStart(2, "0");
  const rand = Math.random().toString(36).slice(2, 6).toUpperCase();
  return `JV-ORD-${y}${m}${d}-${rand}`;
}

/** Human-readable itemised order body, shared by WhatsApp and email. */
export function buildOrderText(items, customer, totals, reference) {
  const lines = [];
  lines.push(`*${site.name} — Product Order*`);
  lines.push(`Ref: ${reference}`);
  lines.push("");
  items.forEach((l, i) => {
    lines.push(
      `${i + 1}. ${l.product.name} x${l.qty} — ${formatINR(l.lineTotal)}`
    );
  });
  lines.push("");
  lines.push(`Items: ${totals.count}`);
  lines.push(`Subtotal: ${formatINR(totals.subtotal)}`);
  if (totals.saved > 0) lines.push(`You save: ${formatINR(totals.saved)}`);
  lines.push("");
  lines.push(`Name: ${customer.name}`);
  lines.push(`Phone: ${customer.phone}`);
  if (customer.email) lines.push(`Email: ${customer.email}`);
  if (customer.clinic) lines.push(`Clinic / Institution: ${customer.clinic}`);
  if (customer.address) lines.push(`Delivery: ${customer.address}`);
  if (customer.notes) lines.push(`Notes: ${customer.notes}`);
  lines.push("");
  lines.push(
    "Please confirm availability, final price and delivery. (Prices are indicative; taxes/delivery may apply.)"
  );
  return lines.join("\n");
}

export function buildWhatsAppUrl(text) {
  return `https://wa.me/${site.whatsapp.number}?text=${encodeURIComponent(text)}`;
}

/** Fire-and-forget admin email using the existing EmailJS service/template. */
async function emailAdmin(items, customer, totals, reference, orderText) {
  const { serviceId, templateId, publicKey } = emailjsConfig;
  const params = {
    patient_name: customer.name,
    phone: customer.phone,
    email: customer.email || "",
    age: "-",
    department: "Medical & Dental Store",
    doctor: customer.clinic || "-",
    appointment_date: new Date().toLocaleDateString("en-IN"),
    appointment_time: "-",
    appointment_type: "Product Order",
    message: orderText,
    submitted_at: new Date().toLocaleString("en-IN", {
      dateStyle: "medium",
      timeStyle: "short",
    }),
    reference,
    reply_to: customer.email || "",
  };
  await emailjs.send(serviceId, templateId, params, { publicKey });
}

/**
 * Submit an order. Always returns { ok, reference, whatsappUrl }. The email is
 * best-effort: a failure there never blocks the WhatsApp hand-off.
 */
export async function submitOrder(items, customer, totals) {
  const reference = generateOrderRef();
  const orderText = buildOrderText(items, customer, totals, reference);
  const whatsappUrl = buildWhatsAppUrl(orderText);

  let emailed = false;
  try {
    await emailAdmin(items, customer, totals, reference, orderText);
    emailed = true;
  } catch (err) {
    if (process.env.NODE_ENV === "development") {
      // eslint-disable-next-line no-console
      console.warn("Order email failed (WhatsApp hand-off still available):", err);
    }
  }

  return { ok: true, reference, whatsappUrl, emailed };
}
