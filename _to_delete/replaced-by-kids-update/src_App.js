import { lazy, Suspense } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/Layout";

// Home loads eagerly (first paint); the rest are code-split for performance.
import Home from "./pages/Home";

const About = lazy(() => import("./pages/About"));
const Services = lazy(() => import("./pages/Services"));
const ServiceDetail = lazy(() => import("./pages/ServiceDetail"));
const Doctors = lazy(() => import("./pages/Doctors"));
const Facilities = lazy(() => import("./pages/Facilities"));
const Careers = lazy(() => import("./pages/Careers"));
const HealthWellness = lazy(() => import("./pages/HealthWellness"));
const PatientResources = lazy(() => import("./pages/PatientResources"));
const Gallery = lazy(() => import("./pages/Gallery"));
const Testimonials = lazy(() => import("./pages/Testimonials"));
const Contact = lazy(() => import("./pages/Contact"));
const Book = lazy(() => import("./pages/Book"));
const Privacy = lazy(() => import("./pages/legal/Privacy"));
const Terms = lazy(() => import("./pages/legal/Terms"));
const Accessibility = lazy(() => import("./pages/legal/Accessibility"));
const NotFound = lazy(() => import("./pages/NotFound"));

function PageLoader() {
  return (
    <div className="flex min-h-[50vh] items-center justify-center">
      <div className="h-10 w-10 animate-spin rounded-full border-4 border-brand-100 border-t-brand-600" />
      <span className="sr-only">Loading…</span>
    </div>
  );
}

export default function App() {
  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/departments" element={<Services />} />
          <Route path="/departments/:slug" element={<ServiceDetail />} />
          {/* Backwards-compatible redirects from the previous URLs */}
          <Route path="/services" element={<Navigate to="/departments" replace />} />
          <Route path="/services/:slug" element={<ServiceDetail />} />
          <Route path="/doctors" element={<Doctors />} />
          <Route path="/facilities" element={<Facilities />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/health-wellness" element={<HealthWellness />} />
          <Route path="/patient-resources" element={<PatientResources />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/book" element={<Book />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/accessibility" element={<Accessibility />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Suspense>
  );
}
