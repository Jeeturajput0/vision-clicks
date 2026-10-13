import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import About from "@/components/About";
import Services from "@/components/Services";
import Process from "@/components/Process";
import WhyChoose from "@/components/WhyChoose";
import Testimonials from "@/components/Testimonials";
import Technologies from "@/components/Technologies";
import TrustedTeams from "@/components/TrustedTeams";
const logos = [
  "TechCorp",
  "Innovate Labs",
  "DigitalWorks",
  "CloudNova",
];

// Home page — clean paper narrative, ink + volt, no blue
export default function Home() {
  return (
    <>
      <Hero />
      <Stats /> 
      <TrustedTeams logos={logos} />
      {/* <Work /> */}
      <About />
      <Services limit={5} showViewAll />
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
