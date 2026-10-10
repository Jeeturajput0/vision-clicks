export type Testimonial = {
  name: string;
  role: string;
  initials: string;
  quote: string;
};

export const testimonials: Testimonial[] = [
  {
    name: "Manav Garg",
    role: "CEO, TechCorp",
    initials: "MG",
    quote:
      "\u201CFrom day one we were understood and guided. They truly built a perfect fit for our business and helped us achieve our goals. With their continuous support, we've achieved what we couldn't imagine.\u201D",
  },
  {
    name: "Alan Gupta",
    role: "CTO, Finance",
    initials: "AG",
    quote:
      "\u201CTheir team's expertise was a game changer. The Vision Clicks understand and really don't just develop software, they deliver solutions that work. Amazing support and they just continue to drive deep.\u201D",
  },
  {
    name: "Rishik Khan",
    role: "Founder, FinTech",
    initials: "RK",
    quote:
      "\u201CWe needed a reliable partner for our web and mobile apps. The Vision Clicks understood exactly what we needed, built the solution, and provided the support we needed.\u201D",
  },
];
