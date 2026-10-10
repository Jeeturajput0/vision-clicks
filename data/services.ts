import {
  Code2,
  Smartphone,
  Globe,
  Building2,
  Megaphone,
  type LucideIcon,
} from "lucide-react";

export type Service = {
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
};

export const services: Service[] = [
  {
    icon: Code2,
    title: "Custom Software Development",
    description:
      "Tailored software solutions designed specifically for your business needs, built with cutting-edge technology.",
    features: [
      "Web Applications",
      "Enterprise Software",
      "API Development",
      "System Integration",
    ],
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description:
      "Native and cross-platform mobile applications for iOS and Android, delivering exceptional user experiences.",
    features: [
      "iOS Development",
      "Android Development",
      "React Native",
      "Flutter Apps",
    ],
  },
  {
    icon: Globe,
    title: "Web Development",
    description:
      "Modern, responsive websites built with latest technologies for optimal performance, SEO and user experience.",
    features: [
      "Responsive Design",
      "SEO Optimization",
      "Performance",
      "Mobile First",
    ],
  },
  {
    icon: Building2,
    title: "Enterprise Solutions",
    description:
      "Complete online stores with payment gateways, inventory management, order processing, and analytics integration.",
    features: [
      "Business Integration",
      "Inventory Management",
      "Order Processing",
      "Customer Accounts",
    ],
  },
  {
    icon: Megaphone,
    title: "Digital Marketing",
    description:
      "Complete digital marketing strategies including SEO, social media, PPC campaigns, and content marketing to boost your online presence.",
    features: [
      "SEO Optimization",
      "Social Media",
      "PPC Campaigns",
      "Content Strategy",
    ],
  },
];
