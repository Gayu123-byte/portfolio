"use client";

import { Menu, X, Terminal, Command } from "lucide-react";
import { useState, useEffect } from "react";
import { useScrollSpy } from "../hooks/useScrollSpy";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navItems = [
    { label: "~/home", id: "home", href: "#home" },
    { label: "./about", id: "about", href: "#about" },
    { label: "./experience", id: "experience", href: "#experience" },
    { label: "./work", id: "projects", href: "#projects" },
    { label: "./tech", id: "tech", href: "#tech" },
    { label: "./impact", id: "achievements", href: "#achievements" },
    { label: "./contact", id: "contact", href: "#contact" },
  ];

  const active = useScrollSpy(navItems.map((n) => n.id));

  const openPalette = () => {
    const event = new KeyboardEvent("keydown", {
      key: "k",
      ctrlKey: true,
      metaKey: true,
      bubbles: true,
    });
    window.dispatchEvent(event);
  };

  return (
    <header
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-slate-950/85 backdrop-blur-xl border-b border-cyan-500/20 shadow-lg shadow-cyan-500/5"
          : "bg-slate-950/40 backdrop-blur-md"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 font-mono">
        <div className="flex justify-between items-center h-16">
          <a
            href="#home"
            className="flex items-center gap-2 text-base sm:text-lg font-bold"
          >
            <Terminal size={20} className="text-emerald-400 glow-green" />
            <span className="text-emerald-400">gayathri</span>
            <span className="text-gray-500">@</span>
            <span className="text-cyan-400">dev</span>
            <span className="text-gray-500">:~$</span>
          </a>

          <div className="hidden md:flex items-center space-x-4 lg:space-x-6">
            {navItems.map((item) => {
              const isActive = active === item.id;
              return (
                <a
                  key={item.label}
                  href={item.href}
                  className={`transition-all duration-300 text-sm relative group ${
                    isActive
                      ? "text-cyan-300 glow-cyan"
                      : "text-gray-400 hover:text-cyan-300"
                  }`}
                >
                  {item.label}
                  <span
                    className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400 transition-all duration-300 ${
                      isActive ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  ></span>
                </a>
              );
            })}
            <button
              onClick={openPalette}
              className="flex items-center gap-1.5 text-xs text-gray-500 hover:text-cyan-300 border border-cyan-500/20 hover:border-cyan-500/50 rounded-md px-2 py-1 transition-all"
              aria-label="Open command palette"
              title="Command palette (Ctrl/Cmd + K)"
            >
              <Command size={12} />
              <kbd>K</kbd>
            </button>
          </div>

          <button
            className="md:hidden text-cyan-300"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden pb-4 space-y-2 border-t border-cyan-500/20">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className={`block px-4 py-2 hover:bg-cyan-500/10 rounded transition-all duration-300 text-sm ${
                  active === item.id
                    ? "text-cyan-300"
                    : "text-gray-400 hover:text-cyan-300"
                }`}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
}
