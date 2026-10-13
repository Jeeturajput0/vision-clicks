import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import About from "@/components/About";
import Stats from "@/components/Stats";
import Values from "@/components/Values";
import CTA from "@/components/CTA";
import { Target, Eye } from "lucide-react";

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
        title="Building the Future"
        highlight=" of Technology"
        description="We are a team of passionate developers, designers, and innovators dedicated to creating software solutions that transform businesses and drive success."
        crumb="About"
        trail={false}
      />
      <Stats />
      <About />
      {/* Our Mission & Vision */}
      <section aria-label="Our mission and vision" className="relative py-4 sm:py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-3xl border border-slate-900/10 bg-white p-5 shadow-[0_14px_36px_-24px_rgb(16_52_108/0.3)]">
              <div className="grid h-11 w-11 place-items-center rounded-2xl bg-[#10346c] text-volt-300">
                <Target className="h-5 w-5" aria-hidden="true" />
              </div>
              <h2 className="font-display mt-4 text-xl font-bold text-[#10346c]">
                Our Mission
              </h2>
              <p className="mt-2 leading-relaxed text-slate-600">
                To empower businesses with innovative technology solutions that
                drive growth, efficiency, and success in the digital age.
              </p>
            </div>
            <div className="rounded-3xl border border-slate-900/10 bg-white p-5 shadow-[0_14px_36px_-24px_rgb(16_52_108/0.3)]">
              <div className="grid h-11 w-11 place-items-center rounded-2xl bg-[#10346c] text-volt-300">
                <Eye className="h-5 w-5" aria-hidden="true" />
              </div>
              <h2 className="font-display mt-4 text-xl font-bold text-[#10346c]">
                Our Vision
              </h2>
              <p className="mt-2 leading-relaxed text-slate-600">
                To be the leading technology partner for businesses worldwide,
                known for our innovation, reliability, and commitment to client
                success.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Values />
      <CTA />
    </>
  );
}
