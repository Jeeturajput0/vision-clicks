import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import About from "@/components/About";
import Services from "@/components/Services";
import Process from "@/components/Process";
import WhyChoose from "@/components/WhyChoose";
import Testimonials from "@/components/Testimonials";
import Technologies from "@/components/Technologies";


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
      {/* <Engagement /> */}
      <Technologies />
      <Testimonials />
      {/* <FAQ /> */}
      {/* <CTA /> */}
    </>
  );
}
