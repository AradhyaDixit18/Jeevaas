/**
 * ============================================================================
 *  JEEVAAS HOSPITAL — CENTRAL SITE CONFIGURATION
 * ============================================================================
 *  This is the ONE place to edit hospital information. Every component reads
 *  from here. Do not hard-code contact details, links, or content anywhere
 *  else in the codebase.
 *
 *  Fields marked  // ⚠ CONFIRM  hold values that should be verified against the
 *  hospital's official records before go-live. Update them here and the whole
 *  site updates automatically.
 * ============================================================================
 */

export const site = {
  name: "Jeevaas Hospital",
  legalName: "Jeevaas Hospital Private Limited",
  shortName: "Jeevaas",
  // Positioning line shown under the logo and in metadata.
  discipline: "Multispeciality Hospital",
  tagline: "Compassionate Care, Advanced Medicine",
  description:
    "Jeevaas Hospital is a modern multispeciality hospital in Kalyanpur, Kanpur, bringing specialist doctors, advanced diagnostics, and 24x7 emergency care together under one roof — with a patient-first approach for the whole family.",
  url: "https://www.jeevaashospital.com", // ⚠ CONFIRM production domain
  logo: "/logo.jpeg",

  // --- CONTACT -------------------------------------------------------------
  phone: {
    display: "+91 96530 90717",
    tel: "+919653090717",
  },
  // 24x7 emergency & ambulance helpline. Uses the main line by default —
  // ⚠ CONFIRM whether a dedicated emergency number should be shown instead.
  emergency: {
    label: "24x7 Emergency & Ambulance",
    display: "+91 96530 90717",
    tel: "+919653090717",
  },
  whatsapp: {
    // digits only, international format, no "+"
    number: "919451951974",
    defaultMessage:
      "Hello Jeevaas Hospital, I would like to book an appointment / enquire about a consultation.",
  },
  email: "admin@jeevaashospital.com",
  // Where career applications are directed. ⚠ CONFIRM / replace with a dedicated
  // HR inbox if available.
  careersEmail: "admin@jeevaashospital.com",

  address: {
    line1: "G C, 45/1, Awas Vikas, Keshavpuram",
    line2: "Kalyanpur, Kanpur",
    city: "Kanpur",
    state: "Uttar Pradesh",
    postalCode: "208017",
    country: "India",
    full:
      "G C, 45/1, Awas Vikas, Keshavpuram, Kalyanpur, Kanpur, Uttar Pradesh 208017",
  },

  geo: { lat: 26.5096, lng: 80.2793 },

  // Google Maps: uses the coordinates + name for an embed and a directions link.
  map: {
    embedQuery:
      "Jeevaas Hospital Private Limited, Awas Vikas, Keshavpuram, Kalyanpur, Kanpur, Uttar Pradesh 208017",
    directionsUrl:
      "https://www.google.com/maps/dir/?api=1&destination=26.5096,80.2793",
  },

  // --- HOURS  ⚠ CONFIRM -----------------------------------------------------
  // OPD (outpatient) hours. Emergency runs 24x7 (see emergencyNote).
  hours: [
    { day: "Monday – Saturday", time: "OPD 9:00 AM – 8:00 PM" },
    { day: "Sunday", time: "OPD 9:00 AM – 2:00 PM" },
    { day: "Emergency", time: "Open 24 hours" },
  ],
  hoursConfirmed: false, // set true once verified to hide the "confirm hours" note
  emergencyNote:
    "Our emergency department and ambulance service operate 24x7. In a medical emergency, call the helpline immediately or come directly to the hospital.",

  // --- SOCIAL --------------------------------------------------------------
  // Only links with a real URL are rendered. Leave a url empty ("") to hide it.
  social: {
    instagram: "https://instagram.com/jeevaas_hospital", // confirmed in repo
    facebook: "", // ⚠ add when known
    youtube: "", // ⚠ add when known
    linkedin: "", // ⚠ add when known
  },
};

// Convenience derived links -------------------------------------------------
export const links = {
  call: `tel:${site.phone.tel}`,
  emergency: `tel:${site.emergency.tel}`,
  whatsapp: `https://wa.me/${site.whatsapp.number}?text=${encodeURIComponent(
    site.whatsapp.defaultMessage
  )}`,
  email: `mailto:${site.email}`,
  mapsEmbed: `https://www.google.com/maps?q=${encodeURIComponent(
    site.map.embedQuery
  )}&output=embed`,
  directions: site.map.directionsUrl,
};

export default site;
