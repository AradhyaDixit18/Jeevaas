import emailjs from "@emailjs/browser";
import { emailjsConfig } from "../config/emailjs";

/** Generate a short, human-readable client-side reference number. */
export function generateReference() {
  const now = new Date();
  const y = String(now.getFullYear()).slice(2);
  const m = String(now.getMonth() + 1).padStart(2, "0");
  const d = String(now.getDate()).padStart(2, "0");
  const rand = Math.random().toString(36).slice(2, 6).toUpperCase();
  return `JV-${y}${m}${d}-${rand}`;
}

/**
 * Build the exact EmailJS template variables from the form state.
 * Variable names MUST match the EmailJS template dashboard fields.
 */
export function buildTemplateParams(form, reference) {
  return {
    patient_name: form.patient_name?.trim() || "",
    phone: form.phone?.trim() || "",
    email: form.email?.trim() || "",
    age: form.age?.trim() || "Not provided",
    department: form.department || "",
    doctor: form.doctor?.trim() || "No preference",
    appointment_date: form.appointment_date || "",
    appointment_time: form.appointment_time || "",
    appointment_type: form.appointment_type || "",
    message: form.message?.trim() || "No additional notes",
    submitted_at: new Date().toLocaleString("en-IN", {
      dateStyle: "medium",
      timeStyle: "short",
    }),
    reference,
    // Helps the template set a Reply-To to the patient
    reply_to: form.email?.trim() || "",
  };
}

/**
 * Send an appointment request via EmailJS.
 * Returns { ok: true, reference } or throws for the caller to handle.
 */
export async function sendAppointment(form) {
  const { serviceId, templateId, publicKey, autoReplyTemplateId } = emailjsConfig;
  const reference = generateReference();
  const params = buildTemplateParams(form, reference);

  // Primary: notify the hospital admin.
  await emailjs.send(serviceId, templateId, params, { publicKey });

  // Optional: patient auto-reply, only if a template ID has been supplied.
  if (autoReplyTemplateId) {
    try {
      await emailjs.send(serviceId, autoReplyTemplateId, params, { publicKey });
    } catch (err) {
      // Auto-reply failure must not fail the whole request; log for devs only.
      if (process.env.NODE_ENV === "development") {
        // eslint-disable-next-line no-console
        console.warn("Auto-reply email failed:", err);
      }
    }
  }

  return { ok: true, reference };
}
