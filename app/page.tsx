import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import About from "@/components/About";
import WhatWeDo from "@/components/WhatWeDo";
import Values from "@/components/Values";
import WhyChoose from "@/components/WhyChoose";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import Technologies from "@/components/Technologies";
import CTA from "@/components/CTA";

// Home page composing all premium sections
export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <About />
      <WhatWeDo />
      <Values />
      <WhyChoose />
      <Services />
      <Testimonials />
      <Technologies />
      <CTA />
    </>
  );
}
