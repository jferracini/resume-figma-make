import { motion } from "motion/react";
import type { ExperienceEntry } from "../data/cv-data";
import { SectionLayout } from "./SectionLayout";
import { ExternalLink } from "lucide-react";
import { useTheme } from "../context/ThemeContext";
import { RollingText } from "./RollingText";

interface ExperienceSectionProps {
  entries: ExperienceEntry[];
}

function ExperienceCard({
  entry,
  index,
}: {
  entry: ExperienceEntry;
  index: number;
}) {
  const hasLink = entry.link && entry.link !== "#";
  const hasCompanyUrl = entry.companyUrl && entry.companyUrl !== "#";
  const { theme } = useTheme();
  const isDark = theme === "dark";

  // If the whole card is already a link, render company name as styled span to avoid nested <a>
  const companyName = hasCompanyUrl && !hasLink ? (
    <a
      href={entry.companyUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="font-['Inter',sans-serif] font-medium leading-[1.42] text-[#121212] dark:text-[#f1f1ef] text-[17px] tracking-[-0.3px] underline decoration-[#787878]/40 underline-offset-2 hover:decoration-[#121212] dark:hover:decoration-[#f1f1ef] transition-colors"
    >
      <RollingText>{entry.company}</RollingText>
    </a>
  ) : (
    <p
      className={`font-['Inter',sans-serif] font-medium leading-[1.42] text-[#121212] dark:text-[#f1f1ef] text-[17px] tracking-[-0.3px]${
        hasCompanyUrl ? " underline decoration-[#787878]/40 underline-offset-2" : ""
      }`}
    >
      {entry.company}
    </p>
  );

  const content = (
    <div className="flex items-start gap-3 relative w-full">
      {/* Logo — only in light mode */}
      {entry.logo && (
        <motion.div
          animate={{ opacity: isDark ? 0 : 1, scale: isDark ? 0.85 : 1, width: isDark ? 0 : 20, marginRight: isDark ? -12 : 0 }}
          transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
          className="shrink-0 rounded-full size-[20px] relative mt-[2px] overflow-hidden"
          style={{ pointerEvents: isDark ? "none" : "auto" }}
        >
          <div className="absolute inset-0 pointer-events-none rounded-full overflow-hidden">
            <img
              alt={`${entry.company} logo`}
              className="absolute max-w-none object-cover rounded-full size-full"
              src={entry.logo}
            />
            <div className="absolute bg-black inset-0 mix-blend-hue rounded-full" />
          </div>
        </motion.div>
      )}

      {/* Details */}
      <div className="flex flex-col gap-[8px] items-start flex-1 min-w-0">
        <div className="flex flex-col gap-[2px] items-start capitalize not-italic">
          {companyName}
          <p className="font-['Inter',sans-serif] font-normal leading-[1.42] text-[#787878] text-[14px] tracking-[-0.24px]">
            {entry.role}
          </p>
          <p className="font-['Inter',sans-serif] font-normal leading-[normal] text-[#787878] text-[14px]">
            {entry.period}
          </p>
        </div>
        <p className="font-['Inter',sans-serif] font-normal leading-[1.42] lowercase not-italic text-[#121212] dark:text-[#f1f1ef] tracking-[-0.22px] w-full whitespace-pre-wrap text-[14px]">
          {entry.description}
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
        duration: 0.5,
        delay: index * 0.08,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      className="relative group"
    >
      {hasLink ? (
        <a
          href={entry.link}
          target="_blank"
          rel="noopener noreferrer"
          className="block no-underline rounded-lg -mx-3 -my-2 px-3 py-2 transition-colors hover:bg-[#121212]/[0.03] dark:hover:bg-[#f1f1ef]/5"
        >
          {content}
          <ExternalLink className="absolute top-2 right-3 size-3 text-[#787878] opacity-0 group-hover:opacity-100 transition-opacity" />
        </a>
      ) : (
        content
      )}
    </motion.div>
  );
}

export function ExperienceSection({ entries }: ExperienceSectionProps) {
  return (
    <SectionLayout title="Experience" delay={0.2}>
      <div className="flex flex-col gap-[24px]">
        {entries.map((entry, i) => (
          <ExperienceCard key={`${entry.company}-${entry.period}`} entry={entry} index={i} />
        ))}
      </div>
    </SectionLayout>
  );
}