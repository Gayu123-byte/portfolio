"use client";

import { useState } from "react";
import {
  Github,
  Code2,
  Layout,
  Database,
  Cpu,
  BarChart3,
  Bot,
  Check,
} from "lucide-react";
import Reveal from "./Reveal";
import { TechChip, TECH } from "./TechIcons";

type Category = "all" | "frontend" | "backend" | "fullstack" | "data" | "ai";

const projects = [
  {
    category: "frontend" as Category,
    icon: <Layout className="text-cyan-400" size={28} />,
    title: "Modern Websites",
    description:
      "Beautiful, responsive websites and landing pages built to convert.",
    features: ["Pixel-perfect UI", "SEO optimized", "Lightning fast"],
    tags: [TECH.HTML, TECH.CSS, TECH.Tailwind],
  },
  {
    category: "fullstack" as Category,
    icon: <Cpu className="text-emerald-400" size={28} />,
    title: "Enterprise Web Apps",
    description:
      "Full-stack applications with secure auth, role-based access and multi-tenant architecture.",
    features: ["Multi-tenancy", "Role-based access", "Audit-ready"],
    tags: [TECH["Spring Boot"], TECH.Java, TECH.Microservices],
  },
  {
    category: "backend" as Category,
    icon: <Code2 className="text-amber-400" size={28} />,
    title: "REST APIs & Backend",
    description:
      "High-performance JSON REST APIs with optimized payloads and low latency.",
    features: ["Low-latency", "Versioned APIs", "OpenAPI docs"],
    tags: [TECH.Java, TECH["Spring Boot"], TECH["REST API"]],
  },
  {
    category: "data" as Category,
    icon: <Database className="text-purple-400" size={28} />,
    title: "Database-Driven Software",
    description:
      "Robust software backed by relational databases — schema design, queries and tuning.",
    features: ["Schema design", "Query optimization", "Data integrity"],
    tags: [TECH.Oracle, TECH.SQL, TECH.RDBMS],
  },
  {
    category: "fullstack" as Category,
    icon: <BarChart3 className="text-fuchsia-400" size={28} />,
    title: "Dashboards & Visualizations",
    description:
      "Interactive admin dashboards and hierarchical charts that turn data into clear insights.",
    features: ["Real-time charts", "Drill-downs", "Export-ready"],
    tags: [TECH.JavaScript, TECH.PrimeFaces, TECH.Multitenancy],
  },
  {
    category: "ai" as Category,
    icon: <Bot className="text-pink-400" size={28} />,
    title: "Automation & AI Integrations",
    description:
      "Smart automation, chatbot integrations and AI-powered tools that save time.",
    features: ["Chatbot APIs", "Workflow automation", "AI integrations"],
    tags: [TECH["REST API"], TECH.Java, TECH["Spring Boot"]],
  },
];

const filters: { id: Category; label: string }[] = [
  { id: "all", label: "--all" },
  { id: "frontend", label: "--frontend" },
  { id: "backend", label: "--backend" },
  { id: "fullstack", label: "--fullstack" },
  { id: "data", label: "--data" },
  { id: "ai", label: "--ai" },
];

export default function Projects() {
  const [filter, setFilter] = useState<Category>("all");
  const list =
    filter === "all" ? projects : projects.filter((p) => p.category === filter);

  return (
    <section id="projects" className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <div className="text-center mb-10 font-mono">
            <p className="text-xs text-emerald-400 mb-2">
              <span className="text-gray-500">/* </span>section 03
              <span className="text-gray-500"> */</span>
            </p>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-100">
              <span className="text-cyan-400">$</span> ls{" "}
              <span className="neon-gradient">./what_i_build</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              From simple tools to complete software systems — production-ready
              solutions.
            </p>
          </div>
        </Reveal>

        <Reveal delay={1}>
          <div className="flex flex-wrap justify-center gap-2 mb-10 font-mono">
            {filters.map((f) => {
              const isActive = filter === f.id;
              const count =
                f.id === "all"
                  ? projects.length
                  : projects.filter((p) => p.category === f.id).length;
              return (
                <button
                  key={f.id}
                  onClick={() => setFilter(f.id)}
                  className={`px-3 py-1.5 rounded-md text-xs border transition-all ${
                    isActive
                      ? "bg-gradient-to-r from-cyan-500 to-purple-500 text-white border-transparent shadow-lg shadow-cyan-500/30"
                      : "bg-slate-900/60 text-gray-400 border-cyan-500/20 hover:border-cyan-500/60 hover:text-cyan-300"
                  }`}
                >
                  {f.label}{" "}
                  <span
                    className={isActive ? "text-white/70" : "text-gray-600"}
                  >
                    ({count})
                  </span>
                </button>
              );
            })}
          </div>
        </Reveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {list.map((project, index) => (
            <div
              key={project.title}
              className="group code-card rounded-xl overflow-hidden transition-all duration-300 hover:-translate-y-2 tilt-hover bounce-in"
              style={{ animationDelay: `${index * 0.08}s` }}
            >
              <div className="p-6 space-y-4">
                <div className="w-14 h-14 rounded-xl bg-slate-800/80 border border-cyan-500/20 flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 group-hover:border-cyan-400/60">
                  {project.icon}
                </div>

                <h3 className="text-xl font-bold text-gray-100 group-hover:text-cyan-300 transition-colors font-mono">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {project.description}
                </p>

                <ul className="space-y-1.5">
                  {project.features.map((f, idx) => (
                    <li
                      key={idx}
                      className="flex items-center gap-2 text-sm text-gray-300 font-mono"
                    >
                      <Check
                        size={14}
                        className="text-emerald-400 flex-shrink-0"
                      />
                      {f}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tags.map((t, idx) => (
                    <TechChip key={idx} tech={t} />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {list.length === 0 && (
          <p className="text-center text-gray-500 font-mono py-12">
            $ no projects found for filter &quot;{filter}&quot;
          </p>
        )}

        <div className="mt-12 text-center">
          <a
            href="https://github.com/Gayu123-byte"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-slate-900/80 border-2 border-cyan-500/40 text-cyan-300 rounded-lg font-semibold hover:border-cyan-400 hover:bg-cyan-500/10 transition-all duration-300 font-mono"
          >
            <Github size={20} />
            git clone --more
          </a>
        </div>
      </div>
    </section>
  );
}
