import { Search, Palette, Hammer, Rocket } from "lucide-react";
import Reveal from "./Reveal";

export default function Process() {
  const steps = [
    {
      icon: <Search size={26} className="text-cyan-400" />,
      step: "01",
      title: "Discover",
      cmd: "$ analyze --requirements",
      desc: "We talk through your idea, goals and users. I dig into the details to deeply understand what you need.",
    },
    {
      icon: <Palette size={26} className="text-purple-400" />,
      step: "02",
      title: "Design",
      cmd: "$ sketch --ui --architecture",
      desc: "I sketch the experience and shape clean architecture & intuitive interfaces.",
    },
    {
      icon: <Hammer size={26} className="text-amber-400" />,
      step: "03",
      title: "Build",
      cmd: "$ code --clean --tested",
      desc: "Code is written carefully — clean architecture, secure backend, responsive UI, tested as we go.",
    },
    {
      icon: <Rocket size={26} className="text-emerald-400" />,
      step: "04",
      title: "Ship",
      cmd: "$ deploy --monitor",
      desc: "Deploy to production with monitoring, documentation and a smooth handover.",
    },
  ];

  return (
    <section id="process" className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <div className="text-center mb-16 font-mono">
            <p className="text-xs text-emerald-400 mb-2">
              <span className="text-gray-500">/* </span>section 04
              <span className="text-gray-500"> */</span>
            </p>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-100">
              <span className="text-cyan-400">function</span>{" "}
              <span className="neon-gradient">myProcess()</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              A simple, transparent flow from your idea to a live product.
            </p>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((s, i) => (
            <div
              key={i}
              className="relative p-6 code-card rounded-xl transition-all duration-300 hover:-translate-y-2 tilt-hover bounce-in"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <p className="absolute -top-3 -right-3 text-5xl font-extrabold text-cyan-500/20 select-none font-mono">
                {s.step}
              </p>
              <div className="w-12 h-12 rounded-xl bg-slate-800/80 border border-cyan-500/20 flex items-center justify-center mb-4">
                {s.icon}
              </div>
              <h3 className="text-lg font-bold text-gray-100 mb-1 font-mono">
                {s.title}
              </h3>
              <p className="text-xs text-emerald-400 mb-3 font-mono">{s.cmd}</p>
              <p className="text-sm text-gray-400 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
