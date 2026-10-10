import type { Metadata } from "next";
import WhatWeDo from "@/components/WhatWeDo";
import WhyChoose from "@/components/WhyChoose";
import CTA from "@/components/CTA";

export const metadata: Metadata = {
  title: "Solutions | Vision Clicks",
  description:
    "Scalable, future-ready digital solutions: custom software, web and mobile apps, and enterprise platforms.",
};

export default function SolutionsPage() {
  return (
    <>
      <div className="pt-28" />
      <WhatWeDo />
      <WhyChoose />
      <CTA />
    </>
  );
}
