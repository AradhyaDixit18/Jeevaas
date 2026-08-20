import { motion, useReducedMotion } from "framer-motion";

/**
 * Scroll-reveal wrapper. Fades/slides content into view once. Automatically
 * disables motion for users who prefer reduced motion.
 */
export default function Reveal({
  children,
  delay = 0,
  y = 20,
  className = "",
  as = "div",
  once = true,
}) {
  const reduce = useReducedMotion();
  const MotionTag = motion[as] || motion.div;

  if (reduce) {
    const Tag = as;
    return <Tag className={className}>{children}</Tag>;
  }

  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, amount: 0.2 }}
      transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </MotionTag>
  );
}
