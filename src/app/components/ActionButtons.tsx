import { FileText, Share2 } from "lucide-react";
import { motion } from "motion/react";
import { toast } from "sonner";
import { AnimatedSection } from "./AnimatedSection";
import { RollingText } from "./RollingText";

const buttonBase =
  "flex-1 flex items-center justify-center gap-2.5 px-4 py-3.5 rounded-xl font-['Inter',sans-serif] font-medium text-[15px] tracking-[-0.26px] cursor-pointer transition-colors";

export function ActionButtons() {
  const handleDownload = () => {
    window.open("https://drive.google.com/file/d/151R_-r7bPNsbN3ZSD5JMy6X3pBsax5f7/view", "_blank");
  };

  const handleShare = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      toast("Link copied to clipboard");
    } catch {
      toast.error("Failed to copy link");
    }
  };

  return (
    <AnimatedSection delay={0.45}>
      <div className="flex flex-col sm:flex-row gap-3 w-full">
        {/* Download PDF */}
        <motion.button
          onClick={handleDownload}
          className={`${buttonBase} bg-[#121212] dark:bg-[#f1f1ef] text-white dark:text-[#121212] hover:bg-[#2a2a2a] dark:hover:bg-[#e0e0e0]`}
          whileHover={{ scale: 1.01 }}
          whileTap={{ scale: 0.98 }}
        >
          <FileText className="size-[15px]" />
          <RollingText>Download in PDF</RollingText>
        </motion.button>

        {/* Share CV */}
        <motion.button
          onClick={handleShare}
          className={`${buttonBase} bg-[#121212]/[0.06] dark:bg-[#f1f1ef]/10 text-[#121212] dark:text-[#f1f1ef] hover:bg-[#121212]/[0.1] dark:hover:bg-[#f1f1ef]/[0.16]`}
          whileHover={{ scale: 1.01 }}
          whileTap={{ scale: 0.98 }}
        >
          <Share2 className="size-[15px]" />
          <RollingText>Share this CV</RollingText>
        </motion.button>
      </div>
    </AnimatedSection>
  );
}