"use client";

import { useEffect, useState } from "react";
import { Terminal as TerminalIcon } from "lucide-react";

type Line = { kind: "in" | "out" | "err"; text: string };

const HELP = [
  "available commands:",
  "  help        — show this menu",
  "  about       — who is gayathri",
  "  skills      — tech stack",
  "  experience  — work history",
  "  projects    — what i build",
  "  contact     — get in touch",
  "  social      — social links",
  "  resume      — request my resume",
  "  clear       — clear the screen",
  "  whoami, date, echo, ls — bonus",
];

const ABOUT = [
  "Gayathri N R — Java/Backend developer based in India.",
  "I ship enterprise-grade software end-to-end:",
  "  • Spring Boot microservices & REST APIs",
  "  • Multitenant architectures with secure auth",
  "  • Dashboards, automations & polished UIs",
];

const SKILLS = [
  "languages : Java • TypeScript • JavaScript • SQL • HTML • CSS",
  "frameworks: Spring Boot • Spring • Tailwind • PrimeFaces",
  "database  : Oracle • MySQL • RDBMS",
  "concepts  : REST APIs • Microservices • Multitenancy • DSA",
  "tools     : Git • Maven • Ant • Docker • Postman • IntelliJ",
];

const EXP = [
  "Azentio Software — Software Engineer (Jan 2023 – Present)",
  "  ▸ Enterprise multitenant platform (Spring Boot)",
  "  ▸ Automated multithreaded deployment console (-50% time)",
  "  ▸ Migrated Struts → PrimeFaces (+40% maintainability)",
  "  ▸ Optimized Direct JSON REST APIs (-30% latency)",
];

const PROJECTS = [
  "▸ Modern Websites           — responsive, fast, pixel-perfect",
  "▸ Enterprise Web Apps       — multi-tenant, role-based access",
  "▸ REST APIs & Backend       — low-latency, versioned, documented",
  "▸ Database-Driven Software  — schema design + query tuning",
  "▸ Dashboards & Charts       — real-time, drill-down ready",
  "▸ Automation & AI           — workflow + chatbot integrations",
];

const SOCIAL = [
  "email   : nrgayathri5@gmail.com",
  "github  : https://github.com/Gayu123-byte",
  "linkedin: https://www.linkedin.com/in/gayathri-nr",
];

function runCommand(raw: string): { lines: Line[]; clear?: boolean } {
  const input = raw.trim();
  if (!input) return { lines: [] };
  const [cmd, ...args] = input.split(/\s+/);
  const arg = args.join(" ");

  const out = (arr: string[]): Line[] =>
    arr.map((text) => ({ kind: "out", text }));

  switch (cmd.toLowerCase()) {
    case "help":
      return { lines: out(HELP) };
    case "about":
      return { lines: out(ABOUT) };
    case "skills":
    case "tech":
      return { lines: out(SKILLS) };
    case "experience":
    case "exp":
      return { lines: out(EXP) };
    case "projects":
    case "work":
      return { lines: out(PROJECTS) };
    case "contact":
    case "email":
      return {
        lines: out([
          "📧  nrgayathri5@gmail.com",
          "→ scroll to #contact for the form",
        ]),
      };
    case "social":
      return { lines: out(SOCIAL) };
    case "resume":
      return {
        lines: out([
          "Ping me at nrgayathri5@gmail.com — I'll send it over personally.",
        ]),
      };
    case "whoami":
      return { lines: out(["gayathri"]) };
    case "date":
      return { lines: out([new Date().toString()]) };
    case "ls":
      return {
        lines: out(["about  experience  projects  process  tech  contact"]),
      };
    case "echo":
      return { lines: out([arg]) };
    case "sudo":
      return {
        lines: [{ kind: "err", text: "Permission denied: nice try 😏" }],
      };
    case "rm":
      return {
        lines: [
          {
            kind: "err",
            text: "Refusing to delete the portfolio. Try `help`.",
          },
        ],
      };
    case "clear":
      return { lines: [], clear: true };
    default:
      return {
        lines: [
          { kind: "err", text: `command not found: ${cmd}. Type 'help'.` },
        ],
      };
  }
}

export default function LiveTerminal() {
  const [lines, setLines] = useState<Line[]>([
    { kind: "out", text: "Welcome to gayathri.sh — type 'help' to explore." },
  ]);
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<string[]>([]);
  const [hIndex, setHIndex] = useState(-1);

  // Auto-demo: type a few commands on mount
  useEffect(() => {
    const demo = ["whoami", "about"];
    let i = 0;
    const run = () => {
      if (i >= demo.length) return;
      const cmd = demo[i++];
      setLines((prev) => [
        ...prev,
        { kind: "in", text: cmd },
        ...runCommand(cmd).lines,
      ]);
      setTimeout(run, 1100);
    };
    const t = setTimeout(run, 800);
    return () => clearTimeout(t);
  }, []);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = runCommand(input);
    if (result.clear) {
      setLines([]);
    } else {
      setLines((prev) => [
        ...prev,
        { kind: "in", text: input },
        ...result.lines,
      ]);
    }
    if (input.trim()) setHistory((h) => [input, ...h].slice(0, 50));
    setInput("");
    setHIndex(-1);
  };

  const onKey = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "ArrowUp") {
      e.preventDefault();
      const next = Math.min(hIndex + 1, history.length - 1);
      if (next >= 0) {
        setHIndex(next);
        setInput(history[next]);
      }
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      const next = hIndex - 1;
      if (next >= 0) {
        setHIndex(next);
        setInput(history[next]);
      } else {
        setHIndex(-1);
        setInput("");
      }
    }
  };

  return (
    <div className="code-card rounded-lg overflow-hidden">
      <div className="flex items-center gap-2 px-4 py-2 bg-slate-900/80 border-b border-cyan-500/20">
        <span className="w-3 h-3 rounded-full bg-red-500"></span>
        <span className="w-3 h-3 rounded-full bg-yellow-500"></span>
        <span className="w-3 h-3 rounded-full bg-green-500"></span>
        <span className="ml-2 text-xs text-gray-500 flex items-center gap-1.5">
          <TerminalIcon size={12} /> gayathri@dev: ~/portfolio
        </span>
      </div>
      <div
        className="p-4 max-h-72 overflow-y-auto font-mono text-sm space-y-0.5"
        onClick={() => document.getElementById("term-input")?.focus()}
      >
        {lines.map((l, i) =>
          l.kind === "in" ? (
            <div key={i} className="text-gray-200">
              <span className="text-emerald-400">➜</span>{" "}
              <span className="text-cyan-400">~</span> {l.text}
            </div>
          ) : l.kind === "err" ? (
            <div key={i} className="text-rose-400 whitespace-pre-wrap">
              {l.text}
            </div>
          ) : (
            <div key={i} className="text-gray-400 whitespace-pre-wrap">
              {l.text}
            </div>
          ),
        )}
        <form onSubmit={submit} className="flex items-center gap-2 pt-1">
          <span className="text-emerald-400">➜</span>
          <span className="text-cyan-400">~</span>
          <input
            id="term-input"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={onKey}
            spellCheck={false}
            autoComplete="off"
            className="flex-1 bg-transparent border-none outline-none text-gray-100 placeholder:text-gray-600"
            placeholder="type 'help'..."
          />
          <span className="cursor-blink text-cyan-400">█</span>
        </form>
      </div>
    </div>
  );
}
