export type Technology = {
  name: string;
  symbol: string;
  color: string;
};

export const technologies: Technology[] = [
  { name: "React", symbol: "Re", color: "bg-cyan-50 text-cyan-600" },
  { name: "Next.js", symbol: "N", color: "bg-slate-900 text-white" },
  { name: "Node.js", symbol: "No", color: "bg-green-50 text-green-600" },
  { name: "Python", symbol: "Py", color: "bg-amber-50 text-amber-600" },
  { name: "TypeScript", symbol: "Ts", color: "bg-blue-50 text-blue-700" },
  { name: "Flutter", symbol: "Fl", color: "bg-sky-50 text-sky-600" },
  { name: "AWS Cloud", symbol: "Aws", color: "bg-orange-50 text-orange-600" },
  { name: "Docker", symbol: "Do", color: "bg-blue-50 text-sky-700" },
];
