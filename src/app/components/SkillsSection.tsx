import { motion } from "motion/react";
import type { SkillCategory } from "../data/cv-data";
import { SectionLayout } from "./SectionLayout";

interface SkillsSectionProps {
  categories: SkillCategory[];
}

function SkillColumn({ category, index }: { category: SkillCategory; index: number }) {
  return (
    <motion.div
      className="flex flex-col gap-[11px] items-start not-italic"
      initial={{ opacity: 0, y: 12, filter: "blur(6px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{
        duration: 0.4,
        delay: index * 0.08,
        ease: [0.25, 0.1, 0.25, 1],
      }}
    >
      <p className="capitalize font-['Inter',sans-serif] font-medium leading-[1.42] text-[#121212] dark:text-[#f1f1ef] text-[17px] tracking-[-0.3px]">
        {category.title}
      </p>
      <div className="font-['Inter',sans-serif] font-normal leading-[1.465] text-[#787878] text-[13px]">
        {category.items.map((item) => (
          <p key={item} className="mb-[2px]">
            {item}
          </p>
        ))}
      </div>
    </motion.div>
  );
}

export function SkillsSection({ categories }: SkillsSectionProps) {
  return (
    <SectionLayout title="Skills" delay={0.35}>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 sm:gap-8">
        {categories.map((cat, i) => (
          <SkillColumn key={cat.title} category={cat} index={i} />
        ))}
      </div>
    </SectionLayout>
  );
}