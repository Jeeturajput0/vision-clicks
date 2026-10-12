"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { Plus, MessageCircle } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { cn } from "@/lib/utils";

const faqs = [
  {
    q: "How much does a project cost?",
    a: "MVPs typically start at ₹80k, web platforms at ₹1.5L and enterprise builds are scoped individually. After a free 30-minute discovery call you get a fixed quote with zero hidden costs.",
  },
  {
    q: "How long will my project take?",
    a: "A landing page ships in 1–2 weeks, an MVP in 4–8 weeks and complex platforms in 3–6 months. We work in weekly sprints with live demos, so you see progress from week one.",
  },
  {
    q: "Do I own the code and designs?",
    a: "100%. From day one, all code, designs, credentials and documentation belong to you — hosted in your own accounts. No lock-in, ever.",
  },
  {
    q: "Can you take over my existing project?",
    a: "Yes. We start with a free code audit, flag risks and quick wins, then stabilise and extend your product. Most takeovers are productive within two weeks.",
  },
  {
    q: "Do you sign NDAs?",
    a: "Absolutely. We're happy to sign your NDA before the very first call, and every engagement includes strict confidentiality by default.",
  },
  {
    q: "What happens after launch?",
    a: "Every build includes 30 days of free fixes. After that, our Care & Scale plans cover monitoring, updates and continuous improvement from ₹40k/month.",
  },
];

// FAQ accordion — answers objections before the call
export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section aria-label="Frequently asked questions" className="py-16 sm:py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="FAQ"
          title="Questions?"
          highlight="Answered."
          description="Everything clients usually ask before starting. Something else on your mind?"
        />
        <div className="mt-10 overflow-hidden rounded-[1.75rem] border border-slate-200/70 bg-white shadow-[0_14px_36px_-24px_rgb(16_52_108/0.3)]">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={f.q} className={cn(i > 0 && "border-t border-slate-100")}>
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left transition hover:bg-slate-50 sm:px-8"
                >
                  <span className="font-display text-[15px] font-bold text-slate-900 sm:text-base">
                    {f.q}
                  </span>
                  <span
                    className={cn(
                      "grid h-9 w-9 shrink-0 place-items-center rounded-full transition-all duration-300",
                      isOpen ? "rotate-45 bg-[#10346c] text-volt-300" : "bg-slate-100 text-slate-600"
                    )}
                  >
                    <Plus className="h-4 w-4" />
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <p className="px-6 pb-6 text-sm leading-relaxed text-slate-600 sm:px-8 sm:text-[15px]">
                        {f.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
        <p className="mt-6 text-center text-sm text-slate-500">
          Still curious?{" "}
          <Link href="/contact" className="inline-flex items-center gap-1 font-bold text-brand-800 hover:text-[#10346c]">
            <MessageCircle className="h-4 w-4" /> Ask us anything
          </Link>
        </p>
      </div>
    </section>
  );
}
