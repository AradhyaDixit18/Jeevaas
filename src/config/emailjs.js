/**
 * ============================================================================
 *  EMAILJS CONFIGURATION
 * ============================================================================
 *  These are PUBLIC EmailJS identifiers. The EmailJS public key is designed to
 *  be exposed in the browser — it is NOT a secret. Never place a *private*
 *  EmailJS key in frontend code or in an environment variable that ships to
 *  the client.
 *
 *  Values fall back to the known production identifiers if no environment
 *  variable is set, so the app works out of the box locally and on Vercel.
 *  To override per-environment, set these in .env / Vercel Project Settings:
 *
 *    REACT_APP_EMAILJS_SERVICE_ID
 *    REACT_APP_EMAILJS_TEMPLATE_ID
 *    REACT_APP_EMAILJS_PUBLIC_KEY
 *    REACT_APP_EMAILJS_AUTOREPLY_TEMPLATE_ID   (optional, see note below)
 * ============================================================================
 */

export const emailjsConfig = {
  serviceId: process.env.REACT_APP_EMAILJS_SERVICE_ID || "service_8mucvfn",
  templateId: process.env.REACT_APP_EMAILJS_TEMPLATE_ID || "template_02ssqcc",
  publicKey: process.env.REACT_APP_EMAILJS_PUBLIC_KEY || "BHX1Ca4sSWoOpfmMq",

  // Where appointment requests are delivered (configured in the EmailJS
  // template dashboard, mirrored here for reference / the template's To field).
  adminEmail: "admin@jeevaashospital.com",

  // OPTIONAL PATIENT AUTO-REPLY (not enabled yet).
  // To send the patient a confirmation copy, create a SECOND EmailJS template
  // addressed to {{email}} and put its ID here (or in the env var above).
  // When this is a non-empty string, sendAppointment() will also fire the
  // auto-reply. No template ID has been invented — leave blank until supplied.
  autoReplyTemplateId: process.env.REACT_APP_EMAILJS_AUTOREPLY_TEMPLATE_ID || "",
};

export default emailjsConfig;
