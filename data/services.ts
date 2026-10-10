import {
  Globe,
  Smartphone,
  Code2,
  PenTool,
  Sparkles,
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
