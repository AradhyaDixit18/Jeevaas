import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import MobileStickyCTA from "./MobileStickyCTA";
import ScrollToTop from "./ScrollToTop";

export default function Layout() {
  return (
    <>
      <ScrollToTop />
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-brand-600 focus:px-4 focus:py-2 focus:text-white"
      >
        Skip to main content
      </a>
      <Navbar />
      {/* pt clears the fixed navbar (taller on desktop due to the utility bar);
          pb clears the mobile sticky action bar. */}
      <main id="main" className="min-h-screen pt-[68px] pb-16 lg:pt-[104px] lg:pb-0">
        <Outlet />
      </main>
      <Footer />
      <MobileStickyCTA />
    </>
  );
}
