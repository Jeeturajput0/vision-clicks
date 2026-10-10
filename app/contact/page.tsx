import type { Metadata } from "next";
import CTA from "@/components/CTA";
import SectionHeading from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "Contact Us | Vision Clicks",
  description:
    "Reach Vision Clicks for custom software development and digital transformation. Sanjay Place, Agra, India.",
};

export default function ContactPage() {
  return (
    <>
      <section className="mx-auto max-w-3xl px-4 pt-36 pb-10 text-center sm:px-6">
        <SectionHeading
          eyebrow="Contact"
          title="Let's build"
          highlight="together"
          description="Shop No. 6, 2nd Floor, Sanjay Place, Agra, Uttar Pradesh, India-282002 — +91 707946603 — info@thevisionclicks.com"
        />
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          <a
            href="mailto:info@thevisionclicks.com"
            className="rounded-2xl bg-gradient-to-r from-blue-600 to-violet-600 px-6 py-4 text-sm font-bold text-white shadow-lg"
          >
            Get Free Consultation
          </a>
          <a
            href="tel:+91707946603"
            className="rounded-2xl border border-slate-200 bg-white px-6 py-4 text-sm font-bold text-slate-800"
          >
            Call +91 707946603
          </a>
        </div>
      </section>
      <CTA />
    </>
  );
}
