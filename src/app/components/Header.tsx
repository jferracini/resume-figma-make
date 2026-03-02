import type { PersonalInfo } from "../data/cv-data";
import { AnimatedSection } from "./AnimatedSection";
import { Globe, Linkedin, Mail, MessageCircle } from "lucide-react";
import { RollingText } from "./RollingText";

interface HeaderProps {
  data: PersonalInfo;
}

export function Header({ data }: HeaderProps) {
  return (
    <AnimatedSection delay={0}>
      {/* Desktop: 3-column layout | Mobile: stacked */}
      <div className="flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-0 w-full font-['Inter',sans-serif]">
        {/* Name */}
        <div className="shrink-0 sm:w-[150px] text-[#121212] dark:text-[#f1f1ef] text-[36px] leading-[48px] tracking-[-0.96px] font-medium">
          <p>{data.firstName}</p>
          <p>{data.lastName}</p>
        </div>

        {/* Role + Contact — fills remaining space */}
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between flex-1 gap-4 sm:gap-4 sm:pt-[8px]">
          <p className="dark:text-[#f1f1ef] tracking-[-0.28px] font-medium text-[#c4c4c4] font-[Inter] text-[20px] px-[0px] py-[5px] text-left">
            {data.role}
          </p>

          <div className="flex flex-col gap-[4px] sm:items-end text-[#787878] text-[14px] tracking-[-0.24px] font-normal">
            <a
              href={data.website}
              className="flex items-center gap-1.5 underline cursor-pointer hover:text-[#121212] dark:hover:text-[#f1f1ef] transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <RollingText>{data.websiteLabel}</RollingText>
              <Globe className="size-[13px] text-[#c4c4c4] shrink-0" />
            </a>
            <p className="flex items-center gap-1.5">
              LinkedIn{" "}
              <a
                href={data.linkedin}
                className="underline cursor-pointer hover:text-[#121212] dark:hover:text-[#f1f1ef] transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <RollingText>{data.linkedinHandle}</RollingText>
              </a>
              <Linkedin className="size-[13px] text-[#c4c4c4] shrink-0" />
            </p>
            <p className="flex items-center gap-1.5">
              <a
                href="mailto:jferracini@gmail.com"
                className="hover:underline"
              >
                <RollingText>{data.email}</RollingText>
              </a>
              <Mail className="size-[13px] text-[#c4c4c4] shrink-0" />
            </p>
            <p className="flex items-center gap-1.5">
              <a
                href={`https://wa.me/${data.phone.replace(/[^0-9]/g, "")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                <RollingText>{data.phone}</RollingText>
              </a>
              <MessageCircle className="size-[13px] text-[#c4c4c4] shrink-0" />
            </p>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}