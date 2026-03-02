import { AnimatedSection } from "./AnimatedSection";

export function Divider() {
  return (
    <AnimatedSection delay={0.1}>
      <div className="w-full h-px bg-[#787878]/40" />
    </AnimatedSection>
  );
}
