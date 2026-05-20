import { Rocket, Gauge, Wrench, ShieldCheck } from "lucide-react";
import Reveal from "./Reveal";

const highlights = [
  {
    icon: <Rocket size={18} />,
    category: "Delivery",
    text: "Re-architected the admin console with a multithreaded build pipeline, meaningfully shortening release cycles.",
    accent: "amber",
  },
  {
    icon: <Gauge size={18} />,
    category: "Performance",
    text: "Refactored payload contracts to direct JSON REST, cutting serialization overhead across services.",
    accent: "emerald",
  },
  {
    icon: <Wrench size={18} />,
    category: "Architecture",
    text: "Led the Struts → PrimeFaces migration, modernizing the UI layer and reducing long-term technical debt.",
    accent: "cyan",
  },
  {
    icon: <ShieldCheck size={18} />,
    category: "Security",
    text: "Designed a secure multitenant data layer with strict boundary enforcement and zero cross-tenant leakage.",
    accent: "violet",
  },
];

const accentMap: Record<string, { text: string; border: string; bg: string }> =
  {
    amber: {
      text: "text-amber-300",
      border: "hover:border-amber-400/40",
      bg: "bg-amber-400/10",
    },
    emerald: {
      text: "text-emerald-300",
      border: "hover:border-emerald-400/40",
      bg: "bg-emerald-400/10",
    },
    cyan: {
      text: "text-cyan-300",
      border: "hover:border-cyan-400/40",
      bg: "bg-cyan-400/10",
    },
    violet: {
      text: "text-violet-300",
      border: "hover:border-violet-400/40",
      bg: "bg-violet-400/10",
    },
  };

export default function Achievements() {
  return (
    <section id="achievements" className="py-24 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <div className="mb-14 max-w-3xl">
            <div className="flex items-center gap-3 mb-4">
              <span className="h-px w-10 bg-gradient-to-r from-cyan-400 to-transparent" />
              <p className="text-[11px] uppercase tracking-[0.25em] text-cyan-400 font-mono">
                Section 09 — Impact
              </p>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-100 leading-tight">
              Engineering decisions that shaped{" "}
              <span className="neon-gradient">production systems</span>.
            </h2>
            <p className="text-gray-400 mt-4 text-base md:text-lg leading-relaxed">
              A snapshot of the work I&apos;m proudest of — the kind that
              compounds into faster releases, leaner runtimes, and safer
              architectures.
            </p>
          </div>
        </Reveal>

        <div className="grid sm:grid-cols-2 gap-4">
          {highlights.map((h, i) => {
            const a = accentMap[h.accent];
            return (
              <Reveal key={i} delay={((i % 4) + 1) as 1 | 2 | 3 | 4}>
                <article
                  className={`group h-full rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.04] to-transparent backdrop-blur-sm p-6 transition-all duration-300 ${a.border} hover:-translate-y-1 hover:shadow-[0_10px_40px_-15px_rgba(0,200,255,0.25)]`}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div
                      className={`flex items-center justify-center w-9 h-9 rounded-lg ${a.bg} ${a.text}`}
                    >
                      {h.icon}
                    </div>
                    <span
                      className={`text-[11px] font-mono uppercase tracking-[0.2em] ${a.text}`}
                    >
                      {h.category}
                    </span>
                  </div>
                  <p className="text-gray-300 leading-relaxed text-[15px]">
                    {h.text}
                  </p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
