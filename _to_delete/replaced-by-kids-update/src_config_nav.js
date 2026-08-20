/** Primary navigation — edit once, updates navbar, mobile menu, and footer. */
export const nav = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Departments", to: "/departments" },
  { label: "Doctors", to: "/doctors" },
  { label: "Facilities", to: "/facilities" },
  { label: "Patient Info", to: "/patient-resources" },
  { label: "Health Tips", to: "/health-wellness" },
  { label: "Careers", to: "/careers" },
  { label: "Gallery", to: "/gallery" },
  { label: "Contact", to: "/contact" },
];

// A trimmed set for the top navbar (the rest live in the mobile menu / footer)
export const primaryNav = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Departments", to: "/departments" },
  { label: "Doctors", to: "/doctors" },
  { label: "Careers", to: "/careers" },
  { label: "Contact", to: "/contact" },
];

export const footerQuickLinks = [
  { label: "About Us", to: "/about" },
  { label: "Departments", to: "/departments" },
  { label: "Find a Doctor", to: "/doctors" },
  { label: "Facilities", to: "/facilities" },
  { label: "Patient Info", to: "/patient-resources" },
  { label: "Health Tips", to: "/health-wellness" },
  { label: "Careers", to: "/careers" },
  { label: "Gallery", to: "/gallery" },
  { label: "Contact", to: "/contact" },
];

export const footerLegalLinks = [
  { label: "Privacy Policy", to: "/privacy" },
  { label: "Terms of Use", to: "/terms" },
  { label: "Accessibility", to: "/accessibility" },
];

export default nav;
