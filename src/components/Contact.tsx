"use client";

import { Mail, Linkedin, Github, Copy, Check } from "lucide-react";
import { useState } from "react";
import Reveal from "./Reveal";
import ContactForm from "./ContactForm";

const EMAIL = "nrgayathri5@gmail.com";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copy = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    navigator.clipboard.writeText(EMAIL);
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  };

  return (
    <section id="contact" className="py-20 px-4 relative">
      <div className="max-w-5xl mx-auto">
        <Reveal>
          <div className="text-center mb-16 font-mono">
            <p className="text-xs text-emerald-400 mb-2">
              <span className="text-gray-500">/* </span>section 06
              <span className="text-gray-500"> */</span>
            </p>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-100">
              <span className="text-cyan-400">$</span> ./connect{" "}
              <span className="neon-gradient">--with-me</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Have an idea? Let&apos;s build something cool together.
            </p>
          </div>
        </Reveal>

        <div className="grid lg:grid-cols-5 gap-6 items-stretch">
          <Reveal delay={1} className="lg:col-span-2">
            <div className="flex flex-col gap-4 h-full">
              <a
                href={`mailto:${EMAIL}`}
                className="flex items-start gap-4 p-5 code-card rounded-xl hover:-translate-y-1 transition-all duration-300 group"
              >
                <Mail className="text-cyan-400 flex-shrink-0 mt-1" size={26} />
                <div className="flex-1 min-w-0">
                  <p className="text-gray-100 font-semibold font-mono text-sm mb-0.5">
                    email
                  </p>
                  <p className="text-gray-400 text-xs break-all font-mono">
                    {EMAIL}
                  </p>
                </div>
                <button
                  onClick={copy}
                  className="flex-shrink-0 p-2 rounded-md text-gray-500 hover:text-cyan-300 hover:bg-cyan-500/10 transition"
                  aria-label="Copy email"
                  title="Copy email"
                >
                  {copied ? (
                    <Check size={16} className="text-emerald-400" />
                  ) : (
                    <Copy size={16} />
                  )}
                </button>
              </a>

              <a
                href="https://www.linkedin.com/in/gayathri-nr"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4 p-5 code-card rounded-xl hover:-translate-y-1 transition-all duration-300"
              >
                <Linkedin
                  className="text-purple-400 flex-shrink-0 mt-1"
                  size={26}
                />
                <div>
                  <p className="text-gray-100 font-semibold font-mono text-sm mb-0.5">
                    linkedin
                  </p>
                  <p className="text-gray-400 text-xs font-mono">gayathri-nr</p>
                </div>
              </a>

              <a
                href="https://github.com/Gayu123-byte"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4 p-5 code-card rounded-xl hover:-translate-y-1 transition-all duration-300"
              >
                <Github
                  className="text-emerald-400 flex-shrink-0 mt-1"
                  size={26}
                />
                <div>
                  <p className="text-gray-100 font-semibold font-mono text-sm mb-0.5">
                    github
                  </p>
                  <p className="text-gray-400 text-xs font-mono">
                    Gayu123-byte
                  </p>
                </div>
              </a>

              <div className="p-4 rounded-xl border border-emerald-500/30 bg-emerald-500/5 font-mono">
                <p className="text-xs text-emerald-400 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 dot-pulse"></span>
                  currently_accepting: freelance + full-time
                </p>
                <p className="text-xs text-gray-500 mt-1">
                  Need my resume? Drop a note and I&apos;ll send it personally.
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={2} className="lg:col-span-3">
            <div className="h-full">
              <ContactForm />
            </div>
          </Reveal>
        </div>

        {copied && (
          <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 px-4 py-2 rounded-lg bg-emerald-500/20 border border-emerald-500/50 text-emerald-300 font-mono text-sm backdrop-blur-md shadow-xl bounce-in">
            ✓ email copied to clipboard
          </div>
        )}
      </div>
    </section>
  );
}
