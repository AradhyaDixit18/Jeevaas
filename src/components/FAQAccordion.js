import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FaChevronDown } from "react-icons/fa";

/** Accessible FAQ accordion. */
export default function FAQAccordion({ items }) {
  const [open, setOpen] = useState(0);
  return (
    <div className="mx-auto max-w-3xl divide-y divide-ink-100 overflow-hidden rounded-3xl bg-white shadow-card ring-1 ring-ink-100">
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={item.q}>
            <h3>
              <button
                onClick={() => setOpen(isOpen ? -1 : i)}
                className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                aria-expanded={isOpen}
              >
                <span className="text-base font-semibold text-ink-900">{item.q}</span>
                <FaChevronDown
                  className={`h-4 w-4 shrink-0 text-brand-600 transition-transform ${
                    isOpen ? "rotate-180" : ""
                  }`}
                  aria-hidden="true"
                />
              </button>
            </h3>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.25 }}
                  className="overflow-hidden"
                >
                  <p className="px-6 pb-5 text-ink-600">{item.a}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
