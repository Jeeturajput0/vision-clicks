import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Services from "@/components/Services";
import Technologies from "@/components/Technologies";
import CTA from "@/components/CTA";

export const metadata: Metadata = {
  title: "Services | Vision Clicks",
  description:
    "Web development, mobile apps, custom software, UI/UX, e-commerce, cloud, AI automation, digital marketing and more — nine services, one senior team.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Capabilities across"
        highlight="the full journey"
        description="Design, engineering, cloud and growth — one senior team covering your full product journey."
        crumb="Services"
      />
      <Services showAll />
      <Technologies />
      <CTA />
    </>
  );
}
