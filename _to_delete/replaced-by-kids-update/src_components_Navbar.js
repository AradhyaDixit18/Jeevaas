import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";
import Icon from "./Icon";
import { nav, primaryNav } from "../config/nav";
import { site, links } from "../config/site";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on route change + lock body scroll while open
  useEffect(() => setOpen(false), [location.pathname]);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => (document.body.style.overflow = "");
  }, [open]);

  const linkBase = "text-sm font-semibold transition-colors hover:text-brand-700";

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      {/* ---- Top utility / emergency bar (desktop) ---- */}
      <div className="hidden bg-ink-950 text-ink-200 lg:block">
        <div className="container-x flex h-9 items-center justify-between text-xs">
          <div className="flex items-center gap-5">
            <span className="inline-flex items-center gap-1.5">
              <Icon name="pin" className="h-3 w-3 text-brand-400" />
              {site.address.line1}, {site.address.line2}
            </span>
            <a href={links.email} className="inline-flex items-center gap-1.5 hover:text-white">
              <Icon name="email" className="h-3 w-3 text-brand-400" />
              {site.email}
            </a>
          </div>
          <a
            href={links.emergency}
            className="inline-flex items-center gap-2 rounded-full bg-emergency-600 px-3 py-1 font-semibold text-white transition-colors hover:bg-emergency-700"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-pulse-ring rounded-full bg-white/70" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-white" />
            </span>
            {site.emergency.label}: {site.emergency.display}
          </a>
        </div>
      </div>

      {/* ---- Main navigation ---- */}
      <div
        className={`transition-all duration-300 ${
          scrolled ? "bg-white/90 shadow-soft backdrop-blur-md" : "bg-white/80 backdrop-blur-sm"
        }`}
      >
        <nav className="container-x flex items-center justify-between py-3" aria-label="Primary">
          <Link to="/" className="flex items-center gap-2.5" aria-label={`${site.name} home`}>
            <img
              src={site.logo}
              alt={`${site.name} logo`}
              className="h-11 w-11 rounded-xl object-cover ring-1 ring-ink-100"
              width="44"
              height="44"
            />
            <span className="flex flex-col leading-none">
              <span className="font-display text-lg font-extrabold text-ink-900">
                {site.name}
              </span>
              <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-brand-600">
                {site.discipline}
              </span>
            </span>
          </Link>

          <div className="hidden items-center gap-7 lg:flex">
            {primaryNav.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `${linkBase} ${isActive ? "text-brand-700" : "text-ink-700"}`
                }
                end={item.to === "/"}
              >
                {item.label}
              </NavLink>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <a
              href={links.emergency}
              className="btn-emergency btn-md hidden md:inline-flex"
              aria-label={`Call emergency ${site.emergency.display}`}
            >
              <Icon name="ambulance" className="h-4 w-4" /> Emergency
            </a>
            <Link to="/book" className="hidden btn-primary btn-md sm:inline-flex">
              <Icon name="calendar" className="h-4 w-4" /> Book
            </Link>
            <button
              type="button"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full text-ink-800 ring-1 ring-ink-200 lg:hidden"
              onClick={() => setOpen(true)}
              aria-label="Open menu"
              aria-expanded={open}
            >
              <FaBars className="h-5 w-5" />
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              className="fixed inset-0 z-40 bg-ink-900/40 backdrop-blur-sm lg:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
            />
            <motion.div
              className="fixed right-0 top-0 z-50 flex h-full w-[85%] max-w-sm flex-col bg-white p-6 shadow-lift lg:hidden"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.28, ease: "easeInOut" }}
              role="dialog"
              aria-label="Menu"
            >
              <div className="flex items-center justify-between">
                <span className="font-display text-lg font-extrabold text-ink-900">
                  {site.name}
                </span>
                <button
                  type="button"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full text-ink-800 ring-1 ring-ink-200"
                  onClick={() => setOpen(false)}
                  aria-label="Close menu"
                >
                  <FaTimes className="h-5 w-5" />
                </button>
              </div>

              <a
                href={links.emergency}
                className="btn-emergency btn-md mt-5 w-full"
              >
                <Icon name="ambulance" className="h-4 w-4" /> {site.emergency.label}
              </a>

              <div className="mt-4 flex flex-col gap-1 overflow-y-auto">
                {nav.map((item) => (
                  <NavLink
                    key={item.to}
                    to={item.to}
                    end={item.to === "/"}
                    className={({ isActive }) =>
                      `rounded-xl px-4 py-3 text-base font-semibold transition-colors ${
                        isActive ? "bg-brand-50 text-brand-700" : "text-ink-800 hover:bg-ink-50"
                      }`
                    }
                  >
                    {item.label}
                  </NavLink>
                ))}
              </div>

              <div className="mt-auto space-y-3 pt-6">
                <Link to="/book" className="btn-primary btn-lg w-full">
                  <Icon name="calendar" className="h-4 w-4" /> Book Appointment
                </Link>
                <div className="grid grid-cols-2 gap-3">
                  <a href={links.call} className="btn-ghost btn-md">
                    <Icon name="phone" className="h-4 w-4 text-brand-600" /> Call
                  </a>
                  <a href={links.whatsapp} target="_blank" rel="noreferrer" className="btn-ghost btn-md">
                    <Icon name="whatsapp" className="h-4 w-4 text-teal-600" /> WhatsApp
                  </a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
