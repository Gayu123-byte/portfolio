import Reveal from "./Reveal";
import { TECH, TechBadge } from "./TechIcons";

const groups = [
  {
    title: "languages/",
    techs: [
      TECH.Java,
      TECH.JavaScript,
      TECH.TypeScript,
      TECH.SQL,
      TECH.HTML,
      TECH.CSS,
    ],
  },
  {
    title: "frameworks/",
    techs: [TECH["Spring Boot"], TECH.Spring, TECH.Tailwind, TECH.PrimeFaces],
  },
  {
    title: "database/",
    techs: [TECH.Oracle, TECH.MySQL, TECH.RDBMS],
  },
  {
    title: "concepts/",
    techs: [
      TECH["REST API"],
      TECH.Microservices,
      TECH.Multitenancy,
      TECH["Design Patterns"],
      TECH.DSA,
    ],
  },
  {
    title: "tools/",
    techs: [
      TECH.Git,
      TECH.Maven,
      TECH.Ant,
      TECH.Docker,
      TECH.Postman,
      TECH.IntelliJ,
      TECH.VSCode,
    ],
  },
];

export default function TechStack() {
  return (
    <section id="tech" className="py-20 px-4 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <div className="text-center mb-16 font-mono">
            <p className="text-xs text-emerald-400 mb-2">
              <span className="text-gray-500">/* </span>section 05
              <span className="text-gray-500"> */</span>
            </p>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-100">
              <span className="text-cyan-400">$</span> npm list{" "}
              <span className="neon-gradient">--tech</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              A versatile toolkit to handle any kind of software.
            </p>
          </div>
        </Reveal>

        {groups.map((g, gi) => (
          <Reveal key={gi} delay={1}>
            <div className="mb-10">
              <h3 className="text-sm font-mono text-emerald-400 mb-4 flex items-center gap-2">
                <span className="text-gray-500">▸</span>
                {g.title}
                <span className="text-gray-500 text-xs">
                  ({g.techs.length} items)
                </span>
              </h3>
              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-7 gap-3">
                {g.techs.map((t, i) => (
                  <div
                    key={t.name}
                    className="bounce-in"
                    style={{ animationDelay: `${i * 0.05}s` }}
                  >
                    <TechBadge tech={t} />
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
