export const personalInfo = {
  name: "Edward D. Abrams",
  title: "Software Developer III",
  location: "Detroit",
  email: "abramsed17@gmail.com",
  linkedin: "https://linkedin.com/in/edward-abrams-05873299",
  summary:
    "Accomplished fullstack engineer with 6+ years of continuous growth and leadership in software development. Designs scalable, performant web applications with intuitive, reliable user experiences.",
};

export interface Experience {
  title: string;
  product: string;
  period: string;
  bullets: string[];
}

export const experiences: Experience[] = [
  {
    title: "Software Developer III",
    product: "Brand 360",
    period: "July 2024 – Present",
    bullets: [
      "Frontend development lead for a CRM and content creation platform built with React and Next.js",
      "Established SAML and OAuth connectivity for the Canva API, leveraging PKCE flow with SHA-256 encoding and verification",
      "Scoped contexts for persistent state management within defined boundaries to reduce network traffic and optimize memory consumption",
    ],
  },
  {
    title: "Team Leader, Product Development",
    product: "UWM Portal",
    period: "June 2023 – July 2024",
    bullets: [
      "Launched the company's first public-facing .NET APIs, opening the platform to external partners",
      "Directed engineering teams in onboarding third-party vendors, defining connectivity standards",
      "Championed a structured testing discipline with quality benchmarks to reduce regression risk",
    ],
  },
  {
    title: "Software Developer II",
    product: "Edge",
    period: "Sept 2021 – June 2023",
    bullets: [
      "Introduced the organization to enterprise NoSQL platforms with auto-scaling cloud infrastructure",
      "Migrated a terabyte of SQL Server data to Azure Cosmos DB, alleviating costs of on-premises servers",
      "Developed eventually consistent data replication pipelines with Apache Spark to maintain legacy reports",
    ],
  },
  {
    title: "Trainee → Software Developer I",
    product: "Bolt",
    period: "Sept 2019 – Sept 2021",
    bullets: [
      "Earned MVP recognition during the developer training program for peer mentorship and technical merit",
      "Delivered regulatory compliance updates ahead of competitors using a stangler pattern to route loans based on submission date",
      "Led development of RESTful income calculation APIs, eliminating manual underwriting processes performed in Excel macros",
    ],
  },
];

export interface SkillCategory {
  label: string;
  icon: string;
  items: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    label: "Languages",
    icon: "💻",
    items: ["C#", "TypeScript", "Python", "T-SQL"],
  },
  {
    label: "Frameworks",
    icon: "⚙️",
    items: [".NET", "React", "Next.js", "Svelte"],
  },
  {
    label: "Tools & Data",
    icon: "🛠️",
    items: ["Azure", "GCP", "MongoDB", "PostgreSQL", "Kafka", "Redis", "Docker", "Terraform"],
  },
];

export const education = {
  school: "Michigan State University",
  degree: "Elementary Education",
  level: "Bachelor of Arts",
  date: "May 2015",
};
