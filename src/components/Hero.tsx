import { ArrowRight, Mail, Code2 } from "lucide-react";
import { FaJava, FaDatabase } from "react-icons/fa";
import { SiSpringboot, SiTypescript } from "react-icons/si";
import { TbApi } from "react-icons/tb";
import LiveTerminal from "./LiveTerminal";

const START_YEAR = 2023;

export default function Hero() {
  const yearsExp = Math.max(1, new Date().getFullYear() - START_YEAR);

  const orbitIcons = [
    {
      icon: <FaJava />,
      color: "text-orange-400",
      cls: "orbit-item",
      delay: "0s",
    },
    {
      icon: <SiSpringboot />,
      color: "text-emerald-400",
      cls: "orbit-item",
      delay: "-4s",
    },
    {
      icon: <FaDatabase />,
      color: "text-red-400",
      cls: "orbit-item",
      delay: "-8s",
    },
    {
      icon: <TbApi />,
      color: "text-fuchsia-400",
      cls: "orbit-rev",
      delay: "-2s",
    },
    {
      icon: <FaDatabase />,
      color: "text-amber-400",
      cls: "orbit-rev",
      delay: "-10s",
    },
    {
      icon: <SiTypescript />,
      color: "text-sky-400",
      cls: "orbit-rev",
      delay: "-14s",
    },
  ];

  return (
    <section
      id="home"
      className="pt-32 pb-20 px-4 min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      <div className="absolute top-20 right-10 w-80 h-80 bg-cyan-500/20 rounded-full blur-3xl float-slow"></div>
      <div className="absolute bottom-10 left-10 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl float-med"></div>
      <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-emerald-500/15 rounded-full blur-3xl float-fast"></div>

      <div className="max-w-6xl mx-auto w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div className="space-y-5 font-mono">
            <p className="inline-flex items-center gap-2 text-emerald-400 text-sm px-3 py-1 rounded-full bg-slate-900/80 border border-emerald-500/30 bounce-in">
              <span className="w-2 h-2 rounded-full bg-emerald-400 dot-pulse"></span>
              <span>status: available for new projects</span>
            </p>

            <div className="bounce-in" style={{ animationDelay: "0.05s" }}>
              <p className="text-sm text-gray-500 mb-1">
                <span className="text-emerald-400">$</span> whoami
              </p>
              <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-2">
                <span className="neon-gradient">Gayathri N R</span>
              </h1>
              <p className="text-xl text-gray-300 flex items-baseline gap-2">
                <span className="text-cyan-400">&gt;</span>
                <span className="roles-window text-amber-400 glow-cyan">
                  <span className="roles-track">
                    {[
                      "Java Developer",
                      "Backend Builder",
                      "Problem Solver",
                      "System Designer",
                      "Java Developer",
                    ].map((r, i) => (
                      <span key={i} className="h-[1.4em] block">
                        {r}
                      </span>
                    ))}
                  </span>
                </span>
                <span className="cursor-blink text-cyan-400">|</span>
              </p>
            </div>

            <p
              className="text-gray-400 leading-relaxed text-sm max-w-md bounce-in"
              style={{ animationDelay: "0.15s" }}
            >
              I build enterprise-grade software end-to-end — Java backends,
              Spring Boot microservices, REST APIs and full database-driven
              systems. Give me an idea and I&apos;ll ship it.
            </p>

            <div className="flex gap-3 flex-wrap">
              <a
                href="#projects"
                className="px-5 py-2.5 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-lg font-semibold hover:shadow-2xl transition-all duration-300 flex items-center gap-2 transform hover:scale-105 neon-glow text-sm"
              >
                <Code2 size={16} />
                ./view_work
                <ArrowRight size={16} />
              </a>
            </div>

            <div className="grid grid-cols-3 gap-3 pt-2 max-w-md">
              {[
                { v: `${yearsExp}+`, l: "years.coding", c: "text-cyan-400" },
                { v: "20+", l: "projects.shipped", c: "text-emerald-400" },
                { v: "100%", l: "commit.rate", c: "text-purple-400" },
              ].map((s, i) => (
                <div
                  key={i}
                  className="bounce-in text-center code-card rounded-lg p-3"
                  style={{ animationDelay: `${0.3 + i * 0.15}s` }}
                >
                  <p className={`text-2xl font-bold ${s.c} glow-cyan`}>{s.v}</p>
                  <p className="text-[10px] text-gray-500 mt-1">{s.l}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <div className="bounce-in" style={{ animationDelay: "0.2s" }}>
              <LiveTerminal />
            </div>

            <div className="hidden lg:flex justify-center">
              <div className="relative w-80 h-80">
                <div className="absolute inset-0 rounded-full border border-cyan-500/20"></div>
                <div className="absolute inset-12 rounded-full border border-purple-500/20"></div>

                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-28 h-28 rounded-full bg-slate-900/90 border-2 border-cyan-500/50 flex items-center justify-center neon-glow">
                    <span className="text-4xl neon-gradient font-extrabold">
                      {"</>"}
                    </span>
                  </div>
                </div>

                <div className="absolute inset-0 flex items-center justify-center">
                  {orbitIcons.map((o, i) => (
                    <div
                      key={i}
                      className={`absolute ${o.cls}`}
                      style={{ animationDelay: o.delay }}
                    >
                      <div className="w-11 h-11 rounded-xl bg-slate-900/90 border border-cyan-500/30 flex items-center justify-center shadow-lg shadow-cyan-500/20">
                        <span className={`text-xl ${o.color}`}>{o.icon}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
