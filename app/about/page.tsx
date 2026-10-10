import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import About from "@/components/About";
import Stats from "@/components/Stats";
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
      <PageHero
        eyebrow="About us"
        title="A team built for"
        highlight="your growth"
        description="Since 2014, we've helped startups and enterprises turn ambitious ideas into reliable, revenue-driving software."
        crumb="About"
        trail={false}
      />
      <Stats />
      <About />
      <Values />
      <CTA />
    </>
  );
}
