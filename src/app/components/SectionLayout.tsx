import type { ReactNode } from "react";
import { AnimatedSection } from "./AnimatedSection";

interface SectionLayoutProps {
  title: string;
  children: ReactNode;
  delay?: number;
}

/**
 * Consistent two-column section layout:
 * - Desktop: label on left (~150px), content on right
 * - Mobile: stacked
 */
export function SectionLayout({ title, children, delay = 0 }: SectionLayoutProps) {
  return (
    <AnimatedSection delay={delay} className="w-full">
      <div className="flex flex-col sm:flex-row gap-3 sm:gap-2 w-full">
        {/* Section label */}
        <div className="shrink-0 sm:w-[150px]">
          <p className="font-['Inter',sans-serif] font-bold text-[#121212] dark:text-[#f1f1ef] text-[16px] uppercase">
            {title}
          </p>
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0">
          {children}
        </div>
      </div>
    </AnimatedSection>
  );
}