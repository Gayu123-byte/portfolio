import {
  FaJava,
  FaGitAlt,
  FaHtml5,
  FaCss3Alt,
  FaDocker,
  FaJsSquare,
  FaDatabase,
} from "react-icons/fa";
import {
  SiSpringboot,
  SiSpring,
  SiTypescript,
  SiTailwindcss,
  SiPostman,
  SiApachemaven,
  SiMysql,
  SiPrimefaces,
  SiApacheant,
  SiIntellijidea,
} from "react-icons/si";
import { TbApi, TbHierarchy, TbBinaryTree } from "react-icons/tb";
import { VscCode } from "react-icons/vsc";
import { GoWorkflow } from "react-icons/go";
import { GiArchiveResearch } from "react-icons/gi";

export type Tech = {
  name: string;
  icon: React.ReactNode;
  color: string;
};

export const TECH: Record<string, Tech> = {
  // Languages
  Java: { name: "Java", color: "text-orange-400", icon: <FaJava /> },
  JavaScript: {
    name: "JavaScript",
    color: "text-yellow-400",
    icon: <FaJsSquare />,
  },
  TypeScript: {
    name: "TypeScript",
    color: "text-sky-400",
    icon: <SiTypescript />,
  },
  SQL: { name: "SQL", color: "text-cyan-400", icon: <SiMysql /> },
  HTML: { name: "HTML", color: "text-orange-500", icon: <FaHtml5 /> },
  CSS: { name: "CSS", color: "text-blue-400", icon: <FaCss3Alt /> },

  // Frameworks
  "Spring Boot": {
    name: "Spring Boot",
    color: "text-emerald-400",
    icon: <SiSpringboot />,
  },
  Spring: { name: "Spring", color: "text-green-400", icon: <SiSpring /> },
  Tailwind: {
    name: "Tailwind",
    color: "text-cyan-400",
    icon: <SiTailwindcss />,
  },
  PrimeFaces: {
    name: "PrimeFaces",
    color: "text-blue-300",
    icon: <SiPrimefaces />,
  },

  // Database
  Oracle: { name: "Oracle", color: "text-red-500", icon: <FaDatabase /> },
  MySQL: { name: "MySQL", color: "text-sky-500", icon: <SiMysql /> },
  RDBMS: { name: "RDBMS", color: "text-amber-400", icon: <FaDatabase /> },

  // Concepts
  "REST API": { name: "REST API", color: "text-fuchsia-400", icon: <TbApi /> },
  Microservices: {
    name: "Microservices",
    color: "text-purple-400",
    icon: <GoWorkflow />,
  },
  Multitenancy: {
    name: "Multitenancy",
    color: "text-pink-400",
    icon: <TbHierarchy />,
  },
  "Design Patterns": {
    name: "Design Patterns",
    color: "text-violet-400",
    icon: <GiArchiveResearch />,
  },
  DSA: { name: "DSA", color: "text-teal-400", icon: <TbBinaryTree /> },

  // Tools
  Git: { name: "Git", color: "text-orange-500", icon: <FaGitAlt /> },
  Maven: { name: "Maven", color: "text-red-400", icon: <SiApachemaven /> },
  Ant: { name: "Ant", color: "text-amber-500", icon: <SiApacheant /> },
  Docker: { name: "Docker", color: "text-sky-400", icon: <FaDocker /> },
  Postman: { name: "Postman", color: "text-orange-400", icon: <SiPostman /> },
  IntelliJ: {
    name: "IntelliJ",
    color: "text-pink-400",
    icon: <SiIntellijidea />,
  },
  VSCode: { name: "VS Code", color: "text-sky-400", icon: <VscCode /> },
};

interface TechBadgeProps {
  tech: Tech;
  size?: "sm" | "md" | "lg";
  showLabel?: boolean;
}

export function TechBadge({
  tech,
  size = "md",
  showLabel = true,
}: TechBadgeProps) {
  const sz =
    size === "lg" ? "text-5xl" : size === "sm" ? "text-xl" : "text-3xl";
  return (
    <div className="group flex flex-col items-center gap-2 p-4 rounded-xl code-card hover:-translate-y-2 transition-all duration-300 cursor-default">
      <span
        className={`${sz} ${tech.color} group-hover:scale-125 group-hover:rotate-12 transition-transform duration-300`}
        title={tech.name}
      >
        {tech.icon}
      </span>
      {showLabel && (
        <span className="text-xs font-mono text-gray-400 group-hover:text-white transition-colors text-center">
          {tech.name}
        </span>
      )}
    </div>
  );
}

export function TechChip({ tech }: { tech: Tech }) {
  return (
    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-mono bg-slate-800/60 border border-cyan-500/20 hover:border-cyan-500/60 hover:bg-slate-700/60 transition-all">
      <span className={`${tech.color} text-base`}>{tech.icon}</span>
      <span className="text-gray-300">{tech.name}</span>
    </span>
  );
}
