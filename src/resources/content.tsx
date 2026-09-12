import type { About, Blog, Gallery, Newsletter, Person, Social, Work } from "@/types";

const person: Person = {
  firstName: "Avnee",
  lastName: "Malu",
  name: "Avnee Malu",
  role: "Financial Analysis & Risk Management Candidate",
  avatar: "/images/image.jpg",
  email: "avnee004@gmail.com",
  location: "Buffalo, NY",
  languages: ["English", "Hindi"],
};

const newsletter: Newsletter = {
  display: false,
  title: <>Notes from {person.firstName}</>,
  description: <>Thoughts on financial analysis, markets, and risk.</>,
};

const social: Social = [
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/avnee-malu-234653361/",
    essential: true,
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
    essential: true,
  },
];

const about: About = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, a financial analysis and risk management candidate based in ${person.location}.`,
  tableOfContent: { display: true, subItems: false },
  avatar: { display: true },
  calendar: { display: false, link: "" },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        I am a finance professional in training who enjoys turning financial data into clear
        business decisions. My work spans financial analysis, accounting, investment research,
        forecasting, and portfolio risk. I bring a practical mindset to every analysis: understand
        the numbers, test the assumptions, and explain what they mean for the decision at hand.
      </>
    ),
  },
  work: {
    display: true,
    title: "Experience",
    experiences: [
      {
        company: "M/s Chandra Industries",
        timeframe: "Jan 2025 – Jul 2025",
        role: "Accounting Intern",
        achievements: [
          "Managed day-to-day financial transactions and bookkeeping, helping improve accounting accuracy and compliance by 40%.",
          "Prepared financial statements and supported tax filing work, reducing financial data-entry errors by 30%.",
          "Streamlined reporting workflows and helped improve operational efficiency by 50%.",
          "Reviewed revenue and profitability trends to support budgeting and business decisions.",
        ],
        images: [],
      },
      {
        company: "Radiant Metal",
        timeframe: "Jun 2024 – Dec 2024",
        role: "Financial Analyst Intern",
        achievements: [
          "Evaluated pricing models and forecasted margins across 5+ product lines, improving margin accuracy by 12%.",
          "Analysed budgets and business performance, contributing to a 15% improvement in forecasting accuracy.",
          "Reviewed month-end reporting and helped reduce the close process by 20% while maintaining full compliance.",
          "Presented financial recommendations linked to an 8% increase in revenue and identified procurement savings of 10%.",
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true,
    title: "Education",
    institutions: [
      {
        name: "State University of New York at Buffalo",
        description: <>Master’s in Financial Risk Management · Buffalo, NY · Aug 2025 – Present</>,
      },
      {
        name: "Acropolis Institute of Management Studies",
        description: <>Bachelor of Business Administration · Indore, India · 2022 – 2025</>,
      },
    ],
  },
  technical: {
    display: true,
    title: "Capabilities",
    skills: [
      {
        title: "Finance & Investment",
        description: <>The core areas I use to evaluate performance, opportunities, and risk.</>,
        tags: [
          { name: "Financial Analysis", icon: "" },
          { name: "Financial Modeling", icon: "" },
          { name: "Portfolio Management", icon: "" },
          { name: "Asset Allocation", icon: "" },
          { name: "Equity Research", icon: "" },
          { name: "Risk Analysis", icon: "" },
          { name: "Investment Management", icon: "" },
        ],
        images: [],
      },
      {
        title: "Accounting & Reporting",
        description: (
          <>A strong foundation in financial statements and the story behind the numbers.</>
        ),
        tags: [
          { name: "Financial Statements", icon: "" },
          { name: "Balance Sheet Analysis", icon: "" },
          { name: "Budgeting", icon: "" },
          { name: "Forecasting", icon: "" },
          { name: "Profitability Analysis", icon: "" },
        ],
        images: [],
      },
      {
        title: "Tools & Analytics",
        description: (
          <>Tools used to build models, explore data, and communicate practical insights.</>
        ),
        tags: [
          { name: "Microsoft Excel", icon: "" },
          { name: "Python", icon: "" },
          { name: "Pandas", icon: "" },
          { name: "NumPy", icon: "" },
          { name: "SQL", icon: "" },
          { name: "Portfolio Analytics", icon: "" },
        ],
        images: [],
      },
    ],
  },
  certifications: {
    display: false,
    title: "Certifications",
    items: [],
  },
};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Notes on finance and risk",
  description: `Writing by ${person.name}`,
};

const work: Work = {
  path: "/work",
  label: "Projects",
  title: ` Projects by ${person.name}`,
  description: "Financial models and portfolio analytics built to turn data into decisions.",
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  images: [],
};

export { person, social, newsletter, about, blog, work, gallery };
