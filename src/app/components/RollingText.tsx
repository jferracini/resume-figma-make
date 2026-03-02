import { motion } from "motion/react";

interface RollingTextProps {
  children: string;
  className?: string;
}

/**
 * Rolling text hover effect: on hover the text scrolls up
 * and a duplicate rolls in from below.
 */
export function RollingText({ children, className = "" }: RollingTextProps) {
  return (
    <motion.span
      className={`inline-flex flex-col overflow-hidden ${className}`}
      initial="idle"
      whileHover="hover"
      style={{ height: "1.42em", lineHeight: "1.42" }}
    >
      <motion.span
        className="block"
        variants={{
          idle: { y: 0 },
          hover: { y: "-100%" },
        }}
        transition={{ duration: 0.35, ease: [0.76, 0, 0.24, 1] }}
        aria-hidden={false}
      >
        {children}
      </motion.span>
      <motion.span
        className="block"
        variants={{
          idle: { y: 0 },
          hover: { y: "-100%" },
        }}
        transition={{ duration: 0.35, ease: [0.76, 0, 0.24, 1] }}
        aria-hidden
      >
        {children}
      </motion.span>
    </motion.span>
  );
}
