import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
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
      <PageHero
        eyebrow="Solutions"
        title="Future-ready solutions"
        highlight="that scale"
        description="From MVP to enterprise platform — scalable builds for startups, SMEs and large organisations."
        crumb="Solutions"
      />
      <WhatWeDo />
      <WhyChoose />
      <CTA />
    </>
  );
}
