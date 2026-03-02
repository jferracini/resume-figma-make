import { motion } from "motion/react";
import { ThemeToggle } from "./ThemeToggle";
import { RollingText } from "./RollingText";

const linkButtonClass =
  "flex items-center gap-2 px-3 py-2 rounded-full bg-[#121212]/5 dark:bg-[#f1f1ef]/10 cursor-pointer transition-colors hover:bg-[#121212]/10 dark:hover:bg-[#f1f1ef]/20";

export function TopBar() {
  return (
    <div className="w-full max-w-[960px] mx-auto relative z-50">
      <div className="flex items-center justify-between rounded-full bg-white/60 dark:bg-[#1a1a1a]/60 backdrop-blur-md px-2 py-1.5 shadow-[0_1px_6px_rgba(0,0,0,0.04)] dark:shadow-[0_1px_6px_rgba(0,0,0,0.2)]">
        {/* Left — Social links */}
        <div className="flex items-center gap-1">
          <motion.a
            href="https://www.linkedin.com/in/julioferracini/"
            target="_blank"
            rel="noopener noreferrer"
            className={linkButtonClass}
            whileTap={{ scale: 0.97 }}
            aria-label="LinkedIn profile"
          >
            <RollingText className="text-[13px] font-['Inter',sans-serif] text-[#787878] select-none">
              LinkedIn
            </RollingText>
          </motion.a>

          <motion.a
            href="https://savee.com/jferracini/"
            target="_blank"
            rel="noopener noreferrer"
            className={linkButtonClass}
            whileTap={{ scale: 0.97 }}
            aria-label="Savee profile"
          >
            <RollingText className="text-[13px] font-['Inter',sans-serif] text-[#787878] select-none">
              Savee
            </RollingText>
          </motion.a>

          <motion.a
            href="https://julioferracini.net"
            target="_blank"
            rel="noopener noreferrer"
            className={linkButtonClass}
            whileTap={{ scale: 0.97 }}
            aria-label="Portfolio website"
          >
            <RollingText className="text-[13px] font-['Inter',sans-serif] text-[#787878] select-none">
              Portfolio
            </RollingText>
          </motion.a>
        </div>

        {/* Right — Theme toggle */}
        <ThemeToggle />
      </div>
    </div>
  );
}