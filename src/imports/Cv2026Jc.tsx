import imgNubank from "figma:asset/123d065eb40be6b6b2cea93d0a1224194ad9841b.png";
import imgPicpay from "figma:asset/9d52d65b353dfdc54492a54b714ea6cfdbc63b0d.png";
import imgItau from "figma:asset/76ef527c08d294d42c2c0ae679bcd99eada38b8c.png";
import imgTw from "figma:asset/2340e96d4c1baa8ad37a87322e9414aba2edb5f4.png";
import imgBtg from "figma:asset/8e15a58e102e76a08fc486407a04b2c36dfdd2c8.png";
import imgCcee from "figma:asset/ad36f843da7b646a2eff56520cf4f93255ce96ee.png";
import imgCcee1 from "figma:asset/2abfb6dc43d519dc9ecb81c7a661178efa25f0cd.png";
import imgCcee2 from "figma:asset/1c19751b3b45b9008ee38dba6462c907bba152ad.png";

function ContactDetails() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-end relative shrink-0 text-[#787878] text-[12px] tracking-[-0.24px]" data-name="Contact Details">
      <a className="block leading-[0] relative shrink-0 whitespace-nowrap" href="https://julioferracini.net">
        <p className="cursor-pointer decoration-solid leading-[normal] underline">julioferracini.net</p>
      </a>
      <p className="leading-[0] relative shrink-0 text-[0px]">
        <span className="leading-[normal]">{`LinkedIn `}</span>
        <a className="cursor-pointer decoration-solid leading-[normal] underline" href="https://www.linkedin.com/in/julioferracini/">
          <span className="decoration-solid leading-[normal]" href="https://www.linkedin.com/in/julioferracini/">
            @julioferracini
          </span>
        </a>
      </p>
      <p className="leading-[normal] relative shrink-0">jferracini@gmail.com</p>
      <p className="leading-[normal] relative shrink-0">+55 11 99594-6740</p>
    </div>
  );
}

function ContactInfo() {
  return (
    <div className="absolute content-stretch flex items-start justify-between left-[151px] top-[4px] w-[482px]" data-name="Contact Info">
      <p className="leading-[normal] relative shrink-0 text-[#121212] text-[14px] tracking-[-0.28px]">Staff Product Designer</p>
      <ContactDetails />
    </div>
  );
}

function Container() {
  return (
    <div className="font-['Inter:Medium',sans-serif] font-medium h-[76px] not-italic relative shrink-0 w-full" data-name="Container">
      <div className="absolute h-[84px] leading-[46px] left-0 text-[#121212] text-[32px] top-[-8px] tracking-[-0.96px] w-[151px] whitespace-pre-wrap">
        <p className="mb-0">Julio</p>
        <p>Ferracini</p>
      </div>
      <ContactInfo />
    </div>
  );
}

function Description() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[470px]" data-name="Description">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.42] not-italic relative shrink-0 text-[#121212] text-[11px] tracking-[-0.22px] w-full whitespace-pre-wrap">Staff Product Designer with 15+ years of experience leading end-to-end product design, design systems, and AI-driven solutions in fintech and platform products. Strong background in product strategy, cross-functional leadership, discovery, experimentation, and scaling design maturity across large organizations in LATAM.</p>
    </div>
  );
}

function Content1() {
  return (
    <div className="content-stretch flex items-start justify-end mb-[-17px] relative shrink-0 w-[620px]" data-name="Content">
      <Description />
    </div>
  );
}

function Summary() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[17px] relative shrink-0" data-name="Summary">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#121212] text-[14px] uppercase">SUMMARY</p>
      <Content1 />
    </div>
  );
}

function CompanyInfo() {
  return (
    <div className="capitalize content-stretch flex flex-col gap-[2px] items-start not-italic relative shrink-0" data-name="Company Info">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[1.42] relative shrink-0 text-[#121212] text-[15px] tracking-[-0.3px] w-[125px] whitespace-pre-wrap">Nubank</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.42] relative shrink-0 text-[#787878] text-[12px] tracking-[-0.24px] w-[125px] whitespace-pre-wrap">Staff Product Designer</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#787878] text-[12px]">Jun 2024 - Present</p>
    </div>
  );
}

function ExperienceItem() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-[470px]" data-name="Experience Item">
      <CompanyInfo />
    </div>
  );
}

function ExperienceDetails() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0" data-name="Experience Details">
      <ExperienceItem />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.42] lowercase not-italic relative shrink-0 text-[#121212] text-[11px] tracking-[-0.22px] w-[470px] whitespace-pre-wrap">Led cross-functional teams to create AI-driven design solutions tailored for LATAM markets, enhancing user engagement and adoption in Brazil, Mexico, and Colombia.</p>
    </div>
  );
}

function SectionTitle() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Section Title">
      <ExperienceDetails />
    </div>
  );
}

function CompanyInfo1() {
  return (
    <div className="capitalize content-stretch flex flex-col gap-[2px] items-start not-italic relative shrink-0" data-name="Company Info">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[1.42] relative shrink-0 text-[#121212] text-[15px] tracking-[-0.3px]">PicPay</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.42] relative shrink-0 text-[#787878] text-[12px] tracking-[-0.24px]">Head of Product Design Design System</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#787878] text-[12px]">Apr 2023 - Jun 2024</p>
    </div>
  );
}

function ExperienceItem1() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-[470px]" data-name="Experience Item">
      <CompanyInfo1 />
    </div>
  );
}

function ExperienceDetails1() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0" data-name="Experience Details">
      <ExperienceItem1 />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.42] lowercase not-italic relative shrink-0 text-[#121212] text-[11px] tracking-[-0.22px] w-[470px] whitespace-pre-wrap">Directed the development and implementation of comprehensive design foundations enhancing system scalability and performance across multiple product lines.</p>
    </div>
  );
}

function SectionTitle1() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Section Title">
      <ExperienceDetails1 />
    </div>
  );
}

function CompanyInfo2() {
  return (
    <div className="capitalize content-stretch flex flex-col gap-[2px] items-start not-italic relative shrink-0" data-name="Company Info">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[1.42] relative shrink-0 text-[#121212] text-[15px] tracking-[-0.3px]">Itau</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.42] relative shrink-0 text-[#787878] text-[12px] tracking-[-0.24px]">Design Expert</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#787878] text-[12px]">Jan 2023- Apr 2023</p>
    </div>
  );
}

function ExperienceItem2() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-[470px]" data-name="Experience Item">
      <CompanyInfo2 />
    </div>
  );
}

function ExperienceDetails2() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0" data-name="Experience Details">
      <ExperienceItem2 />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.42] lowercase not-italic relative shrink-0 text-[#121212] text-[11px] tracking-[-0.22px] w-[470px] whitespace-pre-wrap">Directed the development and implementation of comprehensive design foundations enhancing system scalability and performance across multiple product lines.</p>
    </div>
  );
}

function SectionTitle2() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Section Title">
      <ExperienceDetails2 />
    </div>
  );
}

function CompanyInfo3() {
  return (
    <div className="capitalize content-stretch flex flex-col gap-[2px] items-start not-italic relative shrink-0" data-name="Company Info">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[1.42] relative shrink-0 text-[#121212] text-[15px] tracking-[-0.3px]">Thoughtworks</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.42] relative shrink-0 text-[#787878] text-[12px] tracking-[-0.24px]">Experience Design Lead</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#787878] text-[12px]">Feb 2022 - Jan 2023</p>
    </div>
  );
}

function ExperienceItem3() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-[470px]" data-name="Experience Item">
      <CompanyInfo3 />
    </div>
  );
}

function ExperienceDetails3() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0" data-name="Experience Details">
      <ExperienceItem3 />
      <div className="font-['Inter:Regular',sans-serif] font-normal leading-[1.42] lowercase not-italic relative shrink-0 text-[#121212] text-[11px] tracking-[-0.22px] w-[470px] whitespace-pre-wrap">
        <p className="mb-0">Led UX strategy for self-service platform, improving developer experience and</p>
        <p>accelerating product launches.</p>
      </div>
    </div>
  );
}

function SectionTitle3() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Section Title">
      <ExperienceDetails3 />
    </div>
  );
}

function CompanyInfo4() {
  return (
    <div className="capitalize content-stretch flex flex-col gap-[2px] items-start not-italic relative shrink-0" data-name="Company Info">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[1.42] relative shrink-0 text-[#121212] text-[15px] tracking-[-0.3px]">BTG Pactual</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.42] relative shrink-0 text-[#787878] text-[12px] tracking-[-0.24px]">Associate Design Director</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#787878] text-[12px]">Feb 2020 - Feb 2022</p>
    </div>
  );
}

function ExperienceItem4() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-[470px]" data-name="Experience Item">
      <CompanyInfo4 />
    </div>
  );
}

function ExperienceDetails4() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0" data-name="Experience Details">
      <ExperienceItem4 />
      <div className="font-['Inter:Regular',sans-serif] font-normal leading-[1.42] lowercase not-italic relative shrink-0 text-[#121212] text-[11px] tracking-[-0.22px] w-[470px] whitespace-pre-wrap">
        <p className="mb-0">Launched BTG Banking, Brazil’s highest-rated retail banking app (4.9★).</p>
        <p className="mb-0">Increased account activations by 35%, reduced journey drop-offs by 27%, and</p>
        <p>drove significant MRR growth.</p>
      </div>
    </div>
  );
}

function SectionTitle4() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Section Title">
      <ExperienceDetails4 />
    </div>
  );
}

function CompanyInfo5() {
  return (
    <div className="capitalize content-stretch flex flex-col gap-[2px] items-start not-italic relative shrink-0" data-name="Company Info">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[1.42] relative shrink-0 text-[#121212] text-[15px] tracking-[-0.3px]">CCEE</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.42] relative shrink-0 text-[#787878] text-[12px] tracking-[-0.24px]">DesignOps Lead • Design Systems</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#787878] text-[12px]">Jan 2007 - Dec 2019</p>
    </div>
  );
}

function ExperienceItem5() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-[470px]" data-name="Experience Item">
      <CompanyInfo5 />
    </div>
  );
}

function ExperienceDetails5() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0" data-name="Experience Details">
      <ExperienceItem5 />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.42] lowercase not-italic relative shrink-0 text-[#121212] text-[11px] tracking-[-0.22px] w-[470px] whitespace-pre-wrap">Created the company’s first design system, standardized legacy platforms, and integrated design with DevOps workflows, raising design maturity and accelerating delivery.</p>
    </div>
  );
}

function SectionTitle5() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Section Title">
      <ExperienceDetails5 />
    </div>
  );
}

function Experience1() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-end mb-[-17px] relative shrink-0 w-[621px]" data-name="Experience">
      <SectionTitle />
      <SectionTitle1 />
      <SectionTitle2 />
      <SectionTitle3 />
      <SectionTitle4 />
      <SectionTitle5 />
      <div className="absolute left-[125px] rounded-[200px] size-[20px] top-px" data-name="nubank">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[200px]">
          <img alt="" className="absolute max-w-none object-cover rounded-[200px] size-full" src={imgNubank} />
          <div className="absolute bg-black inset-0 mix-blend-hue rounded-[200px]" />
        </div>
      </div>
      <div className="absolute left-[125px] rounded-[200px] size-[20px] top-[122px]" data-name="picpay">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[200px]">
          <div className="absolute inset-0 overflow-hidden rounded-[200px]">
            <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgPicpay} />
          </div>
          <div className="absolute bg-black inset-0 mix-blend-hue rounded-[200px]" />
        </div>
      </div>
      <div className="absolute left-[125px] mix-blend-multiply rounded-[200px] size-[20px] top-[243px]" data-name="itau">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[200px]">
          <img alt="" className="absolute max-w-none object-cover rounded-[200px] size-full" src={imgItau} />
          <div className="absolute bg-black inset-0 mix-blend-hue rounded-[200px]" />
        </div>
      </div>
      <div className="absolute left-[125px] mix-blend-multiply rounded-[200px] size-[20px] top-[364px]" data-name="tw">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[200px]">
          <img alt="" className="absolute max-w-none object-cover rounded-[200px] size-full" src={imgTw} />
          <div className="absolute bg-black inset-0 mix-blend-hue rounded-[200px]" />
        </div>
      </div>
      <div className="absolute left-[125px] mix-blend-multiply rounded-[200px] size-[20px] top-[485px]" data-name="btg">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[200px]">
          <img alt="" className="absolute max-w-none object-cover rounded-[200px] size-full" src={imgBtg} />
          <div className="absolute bg-black inset-0 mix-blend-hue rounded-[200px]" />
        </div>
      </div>
      <div className="absolute left-[125px] mix-blend-multiply rounded-[200px] size-[20px] top-[622px]" data-name="ccee">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[200px]">
          <img alt="" className="absolute max-w-none object-cover rounded-[200px] size-full" src={imgCcee} />
          <div className="absolute bg-black inset-0 mix-blend-hue rounded-[200px]" />
        </div>
      </div>
    </div>
  );
}

function Experience() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[17px] relative shrink-0" data-name="Experience">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#121212] text-[14px] uppercase">Experience</p>
      <Experience1 />
    </div>
  );
}

function CompanyInfo6() {
  return (
    <div className="capitalize content-stretch flex flex-col gap-[2px] items-start not-italic relative shrink-0" data-name="Company Info">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[1.42] relative shrink-0 text-[#121212] text-[15px] tracking-[-0.3px]">{`User Experience & Beyond`}</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.42] relative shrink-0 text-[#787878] text-[12px] tracking-[-0.24px]">Postgraduate Degree, UX Design and Beyond – PUC-RS</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#787878] text-[12px]">Jan 2021 - Sep 2022</p>
    </div>
  );
}

function ExperienceItem6() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-[470px]" data-name="Experience Item">
      <CompanyInfo6 />
    </div>
  );
}

function CompanyInfo7() {
  return (
    <div className="capitalize content-stretch flex flex-col gap-[2px] items-start not-italic relative shrink-0" data-name="Company Info">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[1.42] relative shrink-0 text-[#121212] text-[15px] tracking-[-0.3px]">Advertising</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.42] relative shrink-0 text-[#787878] text-[12px] tracking-[-0.24px]">Bachelor’s Degree In Advertising – USCS</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#787878] text-[12px]">Jan 2005 - Jan 2009</p>
    </div>
  );
}

function ExperienceItem7() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-[470px]" data-name="Experience Item">
      <CompanyInfo7 />
    </div>
  );
}

function ExperienceDetails6() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0" data-name="Experience Details">
      <ExperienceItem6 />
      <ExperienceItem7 />
    </div>
  );
}

function SectionTitle6() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Section Title">
      <ExperienceDetails6 />
    </div>
  );
}

function Education1() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-end mb-[-17px] relative shrink-0 w-[621px]" data-name="Education">
      <SectionTitle6 />
      <div className="absolute left-[125px] pointer-events-none rounded-[200px] size-[20px] top-px" data-name="ccee">
        <img alt="" className="absolute inset-0 max-w-none object-cover rounded-[200px] size-full" src={imgCcee1} />
        <div aria-hidden="true" className="absolute border-[#d3d2d2] border-[0.5px] border-solid inset-[-0.5px] rounded-[200.5px]" />
      </div>
      <div className="absolute left-[125px] pointer-events-none rounded-[200px] size-[20px] top-[82px]" data-name="ccee">
        <div className="absolute inset-0 overflow-hidden rounded-[200px]">
          <img alt="" className="absolute h-[71.76%] left-[10.97%] max-w-none top-[13.69%] w-[80.03%]" src={imgCcee2} />
        </div>
        <div aria-hidden="true" className="absolute border-[#d3d2d2] border-[0.5px] border-solid inset-[-0.5px] rounded-[200.5px]" />
      </div>
    </div>
  );
}

function Education() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[17px] relative shrink-0" data-name="Education">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#121212] text-[14px] uppercase">Education</p>
      <Education1 />
    </div>
  );
}

function SkillCategory() {
  return (
    <div className="capitalize content-stretch flex flex-col gap-[11px] items-start leading-[1.42] not-italic relative shrink-0" data-name="Skill Category">
      <p className="font-['Inter:Medium',sans-serif] font-medium relative shrink-0 text-[#121212] text-[15px] tracking-[-0.3px]">Design</p>
      <div className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#787878] text-[11px] tracking-[-0.22px] whitespace-nowrap">
        <p className="mb-[2px]">Product Strategy</p>
        <p className="mb-[2px]">Visual Design</p>
        <p className="mb-[2px]">User Research</p>
        <p className="mb-[2px]">Experimentation</p>
        <p>{`Design  Handoff`}</p>
      </div>
    </div>
  );
}

function SkillCategory1() {
  return (
    <div className="content-stretch flex flex-col gap-[11px] items-start not-italic relative shrink-0" data-name="Skill Category">
      <p className="capitalize font-['Inter:Medium',sans-serif] font-medium leading-[1.42] relative shrink-0 text-[#121212] text-[15px] tracking-[-0.3px]">Tools</p>
      <div className="font-['Inter:Regular',sans-serif] font-normal leading-[1.465] relative shrink-0 text-[#787878] text-[11px] whitespace-nowrap">
        <p className="mb-0">Figma</p>
        <p className="mb-0">Webflow</p>
        <p className="mb-0">Framer</p>
        <p className="mb-0">Wordpress</p>
        <p className="mb-0">Sketch</p>
        <p className="mb-0">HTML/CSS</p>
        <p className="mb-0">Cursor</p>
        <p>Lovable</p>
      </div>
    </div>
  );
}

function SkillCategory2() {
  return (
    <div className="content-stretch flex flex-col gap-[11px] items-start not-italic relative shrink-0" data-name="Skill Category">
      <p className="capitalize font-['Inter:Medium',sans-serif] font-medium leading-[1.42] relative shrink-0 text-[#121212] text-[15px] tracking-[-0.3px]">Languages</p>
      <div className="font-['Inter:Regular',sans-serif] font-normal leading-[1.465] relative shrink-0 text-[#787878] text-[11px] whitespace-nowrap">
        <p className="mb-0">English</p>
        <p>Portuguese</p>
      </div>
    </div>
  );
}

function SkillCategory3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Skill Category">
      <p className="capitalize font-['Inter:Medium',sans-serif] font-medium leading-[1.42] not-italic opacity-0 relative shrink-0 text-[#121212] text-[15px] tracking-[-0.3px]">2026</p>
    </div>
  );
}

function SkillsDetails() {
  return (
    <div className="content-stretch flex items-start justify-between mr-[-18px] relative shrink-0 w-[470px]" data-name="Skills Details">
      <SkillCategory />
      <SkillCategory1 />
      <SkillCategory2 />
      <SkillCategory3 />
    </div>
  );
}

function Skills() {
  return (
    <div className="content-stretch flex items-start justify-between pr-[18px] relative shrink-0 w-full" data-name="Skills">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] mr-[-18px] not-italic relative shrink-0 text-[#121212] text-[14px] uppercase">Skills</p>
      <SkillsDetails />
    </div>
  );
}

function Content() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0" data-name="Content">
      <Summary />
      <Experience />
      <Education />
      <Skills />
    </div>
  );
}

export default function Cv2026Jc() {
  return (
    <div className="bg-[#f1f1ef] content-stretch flex flex-col gap-[53px] items-center px-[26px] py-[54px] relative size-full" data-name="CV 2026 JC">
      <Container />
      <div className="h-0 relative shrink-0 w-[633px]">
        <div className="absolute inset-[-0.5px_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 633 1">
            <path d="M0 0.5H633" id="Vector 1" stroke="var(--stroke-0, #787878)" style={{ stroke: "color(display-p3 0.4706 0.4706 0.4706)", strokeOpacity: "1" }} />
          </svg>
        </div>
      </div>
      <Content />
    </div>
  );
}