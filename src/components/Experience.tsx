import { Briefcase, Calendar, MapPin, TrendingUp } from "lucide-react";
import Reveal from "./Reveal";

export default function Experience() {
  const experiences = [
    {
      role: "Software Engineer",
      company: "Azentio Software",
      period: "Jan 2023 – Present",
      location: "India",
      highlights: [
        {
          title: "Enterprise Multitenant Architecture",
          desc: "Architected a Spring Boot multitenant platform with 100% data isolation and enterprise-grade security for multiple global clients.",
        },
        {
          title: "Automated Deployment Console",
          desc: "Built a multithreaded admin console that runs scripts across production environments concurrently — cutting deployment time by 50%.",
        },
        {
          title: "Modernization & Migration",
          desc: "Migrated core MPS/MRP manufacturing modules from Struts to PrimeFaces with multitenant support, improving maintainability by 40%.",
        },
        {
          title: "High-Performance REST APIs",
          desc: "Engineered Direct JSON REST APIs with optimized payloads — achieving 30% faster response times for client-specific integrations.",
        },
        {
          title: "Customer-Centric UI/UX",
          desc: "Led a PrimeFaces-powered redesign that boosted platform responsiveness, accessibility and client retention.",
        },
        {
          title: "Visualization & i18n",
          desc: "Built role-based hierarchical chart modules and automated multilingual property files — halving localization onboarding time.",
        },
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 px-4 relative">
      <div className="max-w-5xl mx-auto">
        <Reveal>
          <div className="text-center mb-16 font-mono">
            <p className="text-xs text-emerald-400 mb-2">
              <span className="text-gray-500">/* </span>section 02
              <span className="text-gray-500"> */</span>
            </p>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-100">
              <span className="text-cyan-400">$</span> git log{" "}
              <span className="neon-gradient">--experience</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Real-world impact, shipped to production.
            </p>
          </div>
        </Reveal>

        <div className="relative">
          {/* Vertical timeline */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500 via-purple-500 to-emerald-500 -translate-x-1/2 hidden sm:block opacity-50"></div>

          {experiences.map((exp, idx) => (
            <Reveal key={idx} delay={1}>
              <div className="relative sm:pl-16 md:pl-0 mb-12">
                <div className="absolute left-4 md:left-1/2 top-6 w-4 h-4 rounded-full bg-gradient-to-br from-cyan-400 to-purple-500 -translate-x-1/2 ring-4 ring-slate-950 shadow-lg hidden sm:block neon-glow"></div>

                <div className="md:w-1/2 md:ml-auto md:pl-12">
                  <div className="code-card rounded-xl p-6 tilt-hover transition-all duration-300">
                    <div className="flex items-start justify-between flex-wrap gap-2 mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-gray-100 flex items-center gap-2 font-mono">
                          <Briefcase size={20} className="text-cyan-400" />
                          {exp.role}
                        </h3>
                        <p className="text-emerald-400 font-semibold mt-1 font-mono text-sm">
                          @ {exp.company}
                        </p>
                      </div>
                      <span className="text-xs font-mono px-3 py-1 rounded-md bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                        ● live
                      </span>
                    </div>

                    <div className="flex flex-wrap gap-4 text-sm text-gray-400 mb-4 font-mono">
                      <span className="flex items-center gap-1">
                        <Calendar size={14} /> {exp.period}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin size={14} /> {exp.location}
                      </span>
                    </div>

                    <div className="space-y-2">
                      {exp.highlights.map((h, i) => (
                        <div
                          key={i}
                          className="flex gap-3 p-3 rounded-lg hover:bg-cyan-500/5 transition-colors border border-transparent hover:border-cyan-500/20"
                        >
                          <TrendingUp
                            size={16}
                            className="text-amber-400 flex-shrink-0 mt-1"
                          />
                          <div>
                            <p className="font-semibold text-gray-100 text-sm">
                              {h.title}
                            </p>
                            <p className="text-sm text-gray-400 leading-relaxed">
                              {h.desc}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
