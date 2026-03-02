import { motion } from "motion/react";
import type { EducationEntry } from "../data/cv-data";
import { SectionLayout } from "./SectionLayout";
import { RollingText } from "./RollingText";

interface EducationSectionProps {
  entries: EducationEntry[];
}

function EducationCard({
  entry,
  index,
}: {
  entry: EducationEntry;
  index: number;
}) {
  const content = (
    <div className="flex items-start gap-3 relative w-full">
      {/* Logo — only in light mode */}
      {entry.logo && (
        <div className="dark:hidden shrink-0 rounded-full size-[20px] relative mt-[2px] pointer-events-none overflow-hidden">
          <img
            alt={`${entry.title} logo`}
            className="absolute inset-0 max-w-none object-cover rounded-full size-full"
            src={entry.logo}
          />
          <div className="absolute border-[#d3d2d2] border-[0.5px] border-solid inset-0 rounded-full" />
        </div>
      )}

      {/* Details */}
      <div className="flex flex-col gap-[2px] items-start capitalize not-italic flex-1 min-w-0">
        {entry.link && entry.link !== "#" ? (
          <a
            href={entry.link}
            target="_blank"
            rel="noopener noreferrer"
            className="font-['Inter',sans-serif] font-medium leading-[1.42] text-[#121212] dark:text-[#f1f1ef] text-[17px] tracking-[-0.3px] underline decoration-[#787878]/40 underline-offset-2 hover:decoration-[#121212] dark:hover:decoration-[#f1f1ef] transition-colors"
          >
            <RollingText>{entry.title}</RollingText>
          </a>
        ) : (
          <p className="font-['Inter',sans-serif] font-medium leading-[1.42] text-[#121212] dark:text-[#f1f1ef] text-[17px] tracking-[-0.3px]">
            {entry.title}
          </p>
        )}
        <p className="font-['Inter',sans-serif] font-normal leading-[1.42] text-[#787878] text-[14px] tracking-[-0.24px]">
          {entry.degree}
        </p>
        <p className="font-['Inter',sans-serif] font-normal leading-[normal] text-[#787878] text-[14px]">
          {entry.period}
        </p>
      </div>
    </div>
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 16, filter: "blur(6px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{
        duration: 0.4,
        delay: index * 0.08,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      className="relative"
    >
      {content}
    </motion.div>
  );
}

export function EducationSection({ entries }: EducationSectionProps) {
  return (
    <SectionLayout title="Education" delay={0.3}>
      <div className="flex flex-col gap-[24px]">
        {entries.map((entry, i) => (
          <EducationCard key={`${entry.title}-${entry.period}`} entry={entry} index={i} />
        ))}
      </div>
    </SectionLayout>
  );
}