import type { Metadata } from "next";
import Services from "@/components/Services";
import Technologies from "@/components/Technologies";
import CTA from "@/components/CTA";

export const metadata: Metadata = {
  title: "Services | Vision Clicks",
  description:
    "Custom software development, mobile apps, web development, enterprise solutions and digital marketing services.",
};

export default function ServicesPage() {
  return (
    <>
      <div className="pt-28" />
      <Services />
      <Technologies />
      <CTA />
    </>
  );
}
