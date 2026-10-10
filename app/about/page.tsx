import type { Metadata } from "next";
import About from "@/components/About";
import Values from "@/components/Values";
import CTA from "@/components/CTA";

export const metadata: Metadata = {
  title: "About Us | Vision Clicks",
  description:
    "Since 2014, Vision Clicks has delivered custom enterprise applications, web and mobile solutions and digital excellence.",
};

export default function AboutPage() {
  return (
    <>
      <div className="pt-28" />
      <About />
      <Values />
      <CTA />
    </>
  );
}
