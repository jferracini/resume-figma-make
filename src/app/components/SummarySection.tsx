import { SectionLayout } from "./SectionLayout";

interface SummarySectionProps {
  text: string;
}

export function SummarySection({ text }: SummarySectionProps) {
  return (
    <SectionLayout title="Summary" delay={0.15}>
      <p className="font-['Inter',sans-serif] font-normal leading-[1.42] text-[#121212] dark:text-[#f1f1ef] tracking-[-0.22px] whitespace-pre-wrap text-[14px]">
        {text}
      </p>
    </SectionLayout>
  );
}