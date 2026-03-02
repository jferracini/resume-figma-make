// =============================================================================
// CV DATA - Edit this file to update your CV content
// =============================================================================
// To add a new experience, education, or skill, simply add a new entry to the
// corresponding array. Each entry follows a simple structure.
// Descriptions support simple text (add line breaks with \n).
// =============================================================================

// Logos: arquivos em public/assets/ (servidos em /assets/...)
const ASSETS = "/assets";

// -----------------------------------------------------------------------------
// Types
// -----------------------------------------------------------------------------

export interface PersonalInfo {
  firstName: string;
  lastName: string;
  role: string;
  website: string;
  websiteLabel: string;
  linkedin: string;
  linkedinHandle: string;
  email: string;
  phone: string;
}

export interface ExperienceEntry {
  company: string;
  role: string;
  period: string;
  description: string;
  logo?: string;
  /** Link to LinkedIn experience or portfolio — use "#" as placeholder */
  link?: string;
  /** URL for the company name (e.g. company website or LinkedIn page) — use "#" as placeholder */
  companyUrl?: string;
}

export interface EducationEntry {
  title: string;
  degree: string;
  period: string;
  logo?: string;
  link?: string;
}

export interface SkillCategory {
  title: string;
  items: string[];
}

export interface CVData {
  personal: PersonalInfo;
  summary: string;
  experience: ExperienceEntry[];
  education: EducationEntry[];
  skills: SkillCategory[];
}

// -----------------------------------------------------------------------------
// Data
// -----------------------------------------------------------------------------

const cvData: CVData = {
  personal: {
    firstName: "Julio",
    lastName: "Ferracini",
    role: "Staff Product Designer",
    website: "https://julioferracini.net",
    websiteLabel: "julioferracini.net",
    linkedin: "https://www.linkedin.com/in/julioferracini/",
    linkedinHandle: "@julioferracini",
    email: "jferracini@gmail.com",
    phone: "+55 11 99594-6740",
  },

  summary:
    "Staff Product Designer with 15+ years of experience leading end-to-end product design, design systems, and AI-driven solutions in fintech and platform products. Strong background in product strategy, cross-functional leadership, discovery, experimentation, and scaling design maturity across large organizations in LATAM.",

  experience: [
    {
      company: "Nubank",
      role: "Staff Product Designer",
      period: "Jun 2024 - Present",
      description:
        "Led cross-functional teams to create AI-driven design solutions tailored for LATAM markets, enhancing user engagement and adoption in Brazil, Mexico, and Colombia.",
      logo: `${ASSETS}/nubank.png`,
      link: "https://www.linkedin.com/in/julioferracini/", // placeholder — replace with LinkedIn or portfolio URL
      companyUrl: "https://www.nubank.com.br/",
    },
    {
      company: "PicPay",
      role: "Head of Product Design Design System",
      period: "Apr 2023 - Jun 2024",
      description:
        "Directed the development and implementation of comprehensive design foundations enhancing system scalability and performance across multiple product lines.",
      logo: `${ASSETS}/picpay.png`,
      link: "https://www.linkedin.com/in/julioferracini/",
      companyUrl: "https://www.picpay.com.br/",
    },
    {
      company: "Itau",
      role: "Design Expert",
      period: "Jan 2023- Apr 2023",
      description:
        "Directed the development and implementation of comprehensive design foundations enhancing system scalability and performance across multiple product lines.",
      logo: `${ASSETS}/itau.png`,
      link: "https://www.linkedin.com/in/julioferracini/",
      companyUrl: "https://www.itau.com.br/",
    },
    {
      company: "Thoughtworks",
      role: "Experience Design Lead",
      period: "Feb 2022 - Jan 2023",
      description:
        "Led UX strategy for self-service platform, improving developer experience and accelerating product launches.",
      logo: `${ASSETS}/tw.png`,
      link: "https://www.linkedin.com/in/julioferracini/",
      companyUrl: "https://www.thoughtworks.com/",
    },
    {
      company: "BTG Pactual",
      role: "Associate Design Director",
      period: "Feb 2020 - Feb 2022",
      description:
        "Launched BTG Banking, Brazil's highest-rated retail banking app (4.9\u2605). Increased account activations by 35%, reduced journey drop-offs by 27%, and drove significant MRR growth.",
      logo: `${ASSETS}/btg.png`,
      link: "https://www.linkedin.com/in/julioferracini/",
      companyUrl: "https://www.btgpactual.com/",
    },
    {
      company: "CCEE",
      role: "DesignOps Lead \u2022 Design Systems",
      period: "Jan 2007 - Dec 2019",
      description:
        "Created the company\u2019s first design system, standardized legacy platforms, and integrated design with DevOps workflows, raising design maturity and accelerating delivery.",
      logo: `${ASSETS}/ccee.png`,
      link: "https://www.linkedin.com/in/julioferracini/",
      companyUrl: "https://www.ccee.org.br/",
    },
  ],

  education: [
    {
      title: "User Experience & Beyond",
      degree: "Postgraduate Degree, UX Design and Beyond \u2013 PUC-RS",
      period: "Jan 2021 - Sep 2022",
      logo: `${ASSETS}/pucrs.png`,
      link: "https://drive.google.com/file/d/1FSMjqvJmzpOGDaaRNAyqm0nkjeAdkCfd/view?usp=sharing",
    },
    {
      title: "Advertising",
      degree: "Bachelor\u2019s Degree In Advertising \u2013 USCS",
      period: "Jan 2005 - Jan 2009",
      logo: `${ASSETS}/uscs.png`,
      link: "https://drive.google.com/file/d/1F4loUBO5T1S4uQ2h2YVLnxTel8ZufN0r/view?usp=sharing",
    },
  ],

  skills: [
    {
      title: "Design",
      items: [
        "Product Strategy",
        "Product AI-Design",
        "Visual Design",
        "User Research",
        "Experimentation",
        "Rapid prototyping",
        "Design Handoff",
      ],
    },
    {
      title: "Tools",
      items: [
        "Figma",
        "Figma Make",
        "Cursor",
        "Lovable",
        "Webflow",
        "Framer",
        "Wordpress",
        "Sketch",
        "HTML/CSS & JavaScript",
      ],
    },
    {
      title: "Languages",
      items: ["English", "Portuguese"],
    },
  ],
};

export default cvData;