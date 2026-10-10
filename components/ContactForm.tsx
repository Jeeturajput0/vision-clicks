"use client";

import { useState, type FormEvent } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, CheckCircle2, Send } from "lucide-react";
import { services } from "@/data/services";

// Contact form — no backend needed: opens the visitor's email app
// with a pre-filled enquiry to info@thevisionclicks.com
export default function ContactForm() {
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [service, setService] = useState(services[0].title);
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const subject = `Project Enquiry — ${service} — ${name}`;
    const body = `Name: ${name}\nContact: ${contact}\nService: ${service}\n\nProject details:\n${message}`;
    window.location.href = `mailto:info@thevisionclicks.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };

  const inputCls =
    "w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-slate-900 placeholder:font-normal placeholder:text-slate-400 transition outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200";

  return (
    <div className="relative overflow-hidden rounded-[1.75rem] border border-slate-200/70 bg-white p-7 shadow-[0_24px_60px_-28px_rgb(5_7_15/0.35)] sm:p-9">
      <AnimatePresence mode="wait">
        {sent ? (
          <motion.div
            key="done"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex min-h-[26rem] flex-col items-center justify-center text-center"
          >
            <span className="grid h-16 w-16 place-items-center rounded-full bg-volt-400">
              <CheckCircle2 className="h-8 w-8 text-[#05070f]" />
            </span>
            <h3 className="font-display mt-5 text-2xl font-bold text-slate-900">
              Opening your email app…
            </h3>
            <p className="mt-2 max-w-sm text-sm leading-relaxed text-slate-600">
              Just press <strong>send</strong> in your email app — your enquiry
              to <strong>info@thevisionclicks.com</strong> is already written.
              We reply within 24 hours.
            </p>
            <button
              type="button"
              onClick={() => setSent(false)}
              className="mt-6 rounded-xl border border-slate-200 px-5 py-2.5 text-sm font-bold text-slate-700 transition hover:bg-slate-50"
            >
              Send another enquiry
            </button>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            onSubmit={handleSubmit}
          >
            <p className="font-mono text-[11px] font-bold tracking-[0.2em] text-indigo-600 uppercase">
              Free quote in 24 hours
            </p>
            <h2 className="font-display mt-2 text-2xl font-bold text-slate-900 sm:text-3xl">
              Tell us about your <span className="font-accent font-normal text-gradient">project</span>
            </h2>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="cf-name" className="mb-1.5 block text-[13px] font-bold text-slate-700">
                  Your name *
                </label>
                <input
                  id="cf-name"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Rahul Sharma"
                  className={inputCls}
                  autoComplete="name"
                />
              </div>
              <div>
                <label htmlFor="cf-contact" className="mb-1.5 block text-[13px] font-bold text-slate-700">
                  Email or phone *
                </label>
                <input
                  id="cf-contact"
                  required
                  value={contact}
                  onChange={(e) => setContact(e.target.value)}
                  placeholder="rahul@company.com"
                  className={inputCls}
                  autoComplete="email"
                />
              </div>
            </div>

            <div className="mt-4">
              <label htmlFor="cf-service" className="mb-1.5 block text-[13px] font-bold text-slate-700">
                Service needed *
              </label>
              <select
                id="cf-service"
                value={service}
                onChange={(e) => setService(e.target.value)}
                className={inputCls}
              >
                {services.map((s) => (
                  <option key={s.title} value={s.title}>
                    {s.title} — {s.tagline}
                  </option>
                ))}
                <option value="Other">Other / Not sure yet</option>
              </select>
            </div>

            <div className="mt-4">
              <label htmlFor="cf-msg" className="mb-1.5 block text-[13px] font-bold text-slate-700">
                Project details *
              </label>
              <textarea
                id="cf-msg"
                required
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="What do you want to build? Timeline, budget range, links to references…"
                className={`${inputCls} resize-none`}
              />
            </div>

            <button
              type="submit"
              className="group mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#05070f] px-6 py-4 text-sm font-bold text-white transition hover:bg-indigo-700"
            >
              <Send className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-0.5" />
              Send enquiry — get free quote
              <ArrowUpRight className="h-4 w-4 text-volt-300" />
            </button>
            <p className="mt-3 text-center text-xs text-slate-400">
              No spam, no sharing your details. NDA available on request.
            </p>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}
