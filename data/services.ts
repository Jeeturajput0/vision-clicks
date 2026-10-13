import {
  Globe,
  Smartphone,
  Code2,
  PenTool,
  Sparkles,
  ShoppingCart,
  Cloud,
  Bot,
  Megaphone,
  type LucideIcon,
} from "lucide-react";

export type Service = {
  icon: LucideIcon;
  title: string;
  tagline: string;
  description: string;
  details: string;
  features: string[];
  deliverables: string[];
  timeline: string;
};

export const services: Service[] = [
  {
    icon: Globe,
    title: "Web Development",
    tagline: "Websites & web apps",
    description:
      "Blazing-fast, SEO-ready websites and web applications built with modern frameworks.",
    details:
      "From company websites to complex web platforms — we design and develop responsive, high-performance sites that rank on Google and convert visitors into customers. Every build includes speed optimisation, on-page SEO and analytics.",
    features: [
      "Business Websites",
      "Next.js Web Apps",
      "E-commerce Stores",
      "SEO & Performance",
    ],
    deliverables: [
      "Custom responsive design",
      "CMS so you can edit content",
      "Payment gateway integration",
      "Speed + SEO optimisation",
    ],
    timeline: "2–6 weeks",
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    tagline: "iOS & Android apps",
    description:
      "Beautiful native-quality mobile apps for iOS and Android from a single codebase.",
    details:
      "We build cross-platform apps with Flutter and React Native — one codebase, two stores, half the cost. From UI design to Play Store and App Store launch, including push notifications, payments and backend APIs.",
    features: [
      "iOS Apps",
      "Android Apps",
      "Flutter Apps",
      "App Store Launch",
    ],
    deliverables: [
      "App UI/UX design",
      "iOS + Android build",
      "Backend & API setup",
      "Store submission & ASO",
    ],
    timeline: "6–12 weeks",
  },
  {
    icon: Code2,
    title: "Software Development",
    tagline: "Custom software",
    description:
      "Tailor-made software, enterprise systems and APIs engineered for scale.",
    details:
      "Custom CRM, ERP, dashboards, SaaS products and integrations — engineered with clean architecture, automated testing and cloud deployment. You own 100% of the code, hosted in your own accounts.",
    features: [
      "Custom Software",
      "SaaS Products",
      "API Development",
      "Cloud & DevOps",
    ],
    deliverables: [
      "Requirement & scope doc",
      "Clean, tested codebase",
      "Cloud deployment (AWS)",
      "Docs + handover training",
    ],
    timeline: "4–12 weeks",
  },
  {
    icon: PenTool,
    title: "UI/UX Design",
    tagline: "Design that converts",
    description:
      "Research-backed interfaces, prototypes and design systems users love.",
    details:
      "Great software starts with great design. We research your users, map journeys, design pixel-perfect interfaces and deliver clickable prototypes plus a full design system your team can reuse forever.",
    features: [
      "UX Research",
      "UI Design",
      "Prototypes",
      "Design Systems",
    ],
    deliverables: [
      "User flows & wireframes",
      "High-fidelity UI screens",
      "Clickable prototype",
      "Reusable design system",
    ],
    timeline: "2–4 weeks",
  },
  {
    icon: Sparkles,
    title: "Digital Solutions",
    tagline: "Grow & automate",
    description:
      "Automation, digital strategy and ongoing support to grow your business online.",
    details:
      "Beyond launch — we help you automate operations, set up CRM and marketing tools, migrate to the cloud and keep everything running with proactive maintenance and monthly growth improvements.",
    features: [
      "Business Automation",
      "CRM & Tool Setup",
      "Cloud Migration",
      "Support & Growth",
    ],
    deliverables: [
      "Workflow automation",
      "CRM / ERP configuration",
      "Monthly growth reports",
      "Priority maintenance",
    ],
    timeline: "Flexible",
  },
];

// Extra services — ONLY shown on the /services page.
// Home page keeps using `services` (first 5), so it stays unchanged.
export const additionalServices: Service[] = [
  {
    icon: ShoppingCart,
    title: "E-commerce Development",
    tagline: "Online stores",
    description:
      "Complete online stores with payments, inventory and order management built to sell.",
    details:
      "End-to-end storefronts with payment gateways, inventory, order processing, customer accounts and analytics dashboards — optimised for speed, SEO and conversions from day one.",
    features: [
      "Online Storefront",
      "Payment Gateways",
      "Order Management",
      "Analytics Dashboard",
    ],
    deliverables: [
      "High-converting storefront",
      "Payments + shipping setup",
      "Inventory & order flow",
      "Sales analytics dashboard",
    ],
    timeline: "4–8 weeks",
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps",
    tagline: "Scale in the cloud",
    description:
      "Cloud setup, migration and DevOps pipelines for fast, secure, scalable releases.",
    details:
      "Cloud migration, infrastructure setup, CI/CD pipelines, security hardening and backup & recovery — engineered on AWS with monitoring and cost optimisation built in.",
    features: [
      "Cloud Migration",
      "CI/CD Pipelines",
      "Security Hardening",
      "Backup & Recovery",
    ],
    deliverables: [
      "Cloud infrastructure setup",
      "Automated deployments",
      "Monitoring & alerts",
      "Cost optimisation",
    ],
    timeline: "3–6 weeks",
  },
  {
    icon: Bot,
    title: "AI Solutions & Automation",
    tagline: "Automate with AI",
    description:
      "AI chatbots, workflow automation and smart integrations that save hours daily.",
    details:
      "From AI chatbots trained on your business data to CRM automation, document processing and custom AI integrations — practical AI that cuts manual work and improves customer experience.",
    features: [
      "AI Chatbots",
      "Workflow Automation",
      "CRM Integrations",
      "Custom AI Features",
    ],
    deliverables: [
      "AI chatbot trained on your data",
      "Automated lead & support flows",
      "Tool & API integrations",
      "Team training + docs",
    ],
    timeline: "3–8 weeks",
  },
  {
    icon: Megaphone,
    title: "Digital Marketing & SEO",
    tagline: "Grow online",
    description:
      "SEO, social media and ad campaigns that bring steady traffic and leads.",
    details:
      "Technical SEO, content strategy, social media management and PPC campaigns — tracked end-to-end with analytics so every rupee of spend ties back to visibility, leads and ROI.",
    features: [
      "SEO Optimisation",
      "Social Media",
      "PPC Campaigns",
      "Content Strategy",
    ],
    deliverables: [
      "SEO audit + fixes",
      "Content calendar",
      "Ad campaign setup",
      "Monthly growth report",
    ],
    timeline: "Monthly",
  },
];

// Full list for the /services page (home 5 + extra 4).
export const allServices: Service[] = [...services, ...additionalServices];
