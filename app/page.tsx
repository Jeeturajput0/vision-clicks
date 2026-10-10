import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Work from "@/components/Work";
import About from "@/components/About";
import Services from "@/components/Services";
import Process from "@/components/Process";
import WhyChoose from "@/components/WhyChoose";
import Engagement from "@/components/Engagement";
import Testimonials from "@/components/Testimonials";
import Technologies from "@/components/Technologies";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";

// Home page — clean paper narrative, ink + volt, no blue
export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      {/* <Work /> */}
      <About />
      <Services />
      <Process />
      <WhyChoose />
      <Engagement />
      <Technologies />
      <Testimonials />
      {/* <FAQ /> */}
      <CTA />
    </>
  );
}
