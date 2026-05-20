import { GraduationCap, Award, BookOpen } from "lucide-react";
import Reveal from "./Reveal";

const education = [
  {
    icon: <GraduationCap className="text-cyan-400" size={24} />,
    degree: "Bachelor of Technology",
    school: "Sri Venkateswara College of Engineering",
    period: "2019 – 2023",
    detail: "Information Technology",
  },
];

const certifications = [
  {
    title: "Java SE Programming",
    issuer: "Self / Coursework",
    color: "text-orange-400",
  },
  {
    title: "Spring Boot Fundamentals",
    issuer: "Pluralsight / Docs",
    color: "text-emerald-400",
  },
  {
    title: "Oracle SQL & PL/SQL",
    issuer: "Hands-on Practice",
    color: "text-red-400",
  },
  {
    title: "REST API Design",
    issuer: "Industry Project",
    color: "text-fuchsia-400",
  },
  {
    title: "Microservices Architecture",
    issuer: "Azentio Software",
    color: "text-purple-400",
  },
  {
    title: "DSA & System Design",
    issuer: "Continuous Learning",
    color: "text-amber-400",
  },
];

export default function Education() {
  return (
    <section id="education" className="py-20 px-4 relative">
      <div className="max-w-5xl mx-auto">
        <Reveal>
          <div className="text-center mb-16 font-mono">
            <p className="text-xs text-emerald-400 mb-2">
              <span className="text-gray-500">/* </span>section 08
              <span className="text-gray-500"> */</span>
            </p>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-100">
              <span className="text-cyan-400">$</span> ls{" "}
              <span className="neon-gradient">./credentials</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Education and a growing list of skills earned the hard way.
            </p>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-8">
          <Reveal delay={1}>
            <div className="space-y-4">
              <h3 className="text-sm font-mono text-emerald-400 flex items-center gap-2">
                <BookOpen size={16} /> education/
              </h3>
              {education.map((e, i) => (
                <div
                  key={i}
                  className="code-card rounded-xl p-6 tilt-hover transition-all"
                >
                  <div className="flex items-start gap-3 mb-3">
                    {e.icon}
                    <div>
                      <p className="font-bold text-gray-100 font-mono">
                        {e.degree}
                      </p>
                      <p className="text-cyan-300 text-sm font-mono">
                        {e.school}
                      </p>
                    </div>
                  </div>
                  <p className="text-xs text-gray-500 font-mono">{e.period}</p>
                  <p className="text-sm text-gray-400 mt-2">{e.detail}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
