import { CheckCircle2, Heart, Zap, Shield } from "lucide-react";
import Reveal from "./Reveal";

export default function About() {
  const values = [
    {
      icon: <Heart className="text-pink-400" size={20} />,
      title: "Crafted with care",
      desc: "Every line of code is written with intention and clarity.",
    },
    {
      icon: <Zap className="text-amber-400" size={20} />,
      title: "Fast & performant",
      desc: "Optimized backends and queries for low-latency responses.",
    },
    {
      icon: <Shield className="text-emerald-400" size={20} />,
      title: "Secure by default",
      desc: "Auth, role-based access and best practices baked in from day one.",
    },
    {
      icon: <CheckCircle2 className="text-cyan-400" size={20} />,
      title: "Clean & scalable",
      desc: "Built to grow — easy to maintain, extend and hand over.",
    },
  ];

  return (
    <section id="about" className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <div className="text-center mb-16 font-mono">
            <p className="text-xs text-emerald-400 mb-2">
              <span className="text-gray-500">/* </span>section 01
              <span className="text-gray-500"> */</span>
            </p>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-100">
              <span className="text-cyan-400">&lt;</span>about
              <span className="text-cyan-400">/&gt;</span>{" "}
              <span className="neon-gradient">Me</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              A passionate builder who turns ideas into real, working software.
            </p>
          </div>
        </Reveal>

        <Reveal delay={1}>
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="flex flex-col items-center md:items-start space-y-6">
              <div className="w-64 h-64 code-card rounded-2xl flex items-center justify-center neon-glow">
                <span className="text-7xl neon-gradient font-extrabold">
                  {"{ }"}
                </span>
              </div>

              <div className="code-card rounded-xl p-6 w-full font-mono">
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                  <p className="text-xs text-gray-500 uppercase tracking-wider">
                    quick_facts.json
                  </p>
                </div>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-400">▸</span>
                    <span>full_stack: true</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-400">▸</span>
                    <span>lifelong_learner: always</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-400">▸</span>
                    <span>
                      strengths: [&quot;DSA&quot;, &quot;system_design&quot;]
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-400">▸</span>
                    <span>
                      open_to: [&quot;freelance&quot;, &quot;full_time&quot;]
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="space-y-6">
              <p className="text-lg text-gray-300 leading-relaxed">
                I&apos;m{" "}
                <span className="text-cyan-400 font-semibold">
                  Gayathri N R
                </span>
                , a developer who loves crafting things from scratch — backend
                systems, REST APIs, dashboards and complete software solutions.
                I work comfortably across the entire stack.
              </p>

              <p className="text-lg text-gray-300 leading-relaxed">
                Whether you need a simple tool or an enterprise-grade
                application with secure authentication, scalable architecture
                and a polished UI, I can design, build and ship it. I believe
                great software is a balance of{" "}
                <em className="text-emerald-400 not-italic">
                  solid engineering
                </em>{" "}
                and{" "}
                <em className="text-purple-400 not-italic">
                  delightful design
                </em>
                .
              </p>

              <div className="grid sm:grid-cols-2 gap-4 pt-2">
                {values.map((v, i) => (
                  <div
                    key={i}
                    className="p-4 code-card rounded-xl tilt-hover transition-all duration-300"
                  >
                    <div className="flex items-center gap-2 mb-2">
                      {v.icon}
                      <p className="font-semibold text-gray-100 text-sm font-mono">
                        {v.title}
                      </p>
                    </div>
                    <p className="text-sm text-gray-400">{v.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
