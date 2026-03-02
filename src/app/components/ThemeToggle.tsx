import { Moon, Sun } from "lucide-react";
import { motion } from "motion/react";
import { useTheme } from "../context/ThemeContext";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.button
      onClick={toggleTheme}
      className="flex items-center gap-2 px-3 py-2 rounded-full bg-[#121212]/5 dark:bg-[#f1f1ef]/10 backdrop-blur-sm cursor-pointer transition-colors hover:bg-[#121212]/10 dark:hover:bg-[#f1f1ef]/20"
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.97 }}
      aria-label={theme === "light" ? "Switch to dark mode" : "Switch to light mode"}
    >
      <motion.div
        key={theme}
        initial={{ rotate: -90, opacity: 0 }}
        animate={{ rotate: 0, opacity: 1 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="flex items-center"
      >
        {theme === "light" ? (
          <Moon className="size-[14px] text-[#121212]" />
        ) : (
          <Sun className="size-[14px] text-[#f1f1ef]" />
        )}
      </motion.div>
      <span className="hidden sm:inline text-[13px] font-['Inter',sans-serif] text-[#787878] select-none">
        {theme === "light" ? "Dark" : "Light"}
      </span>
    </motion.button>
  );
}