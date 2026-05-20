"use client";

import { useEffect, useState } from "react";
import { Search, Command } from "lucide-react";

type CmdItem = {
  label: string;
  hint: string;
  action: () => void;
  group: string;
};

export default function CommandPalette() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [active, setActive] = useState(0);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen((o) => !o);
      } else if (e.key === "Escape") {
        setOpen(false);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const close = () => {
    setOpen(false);
    setQuery("");
    setActive(0);
  };

  const go = (id: string) => {
    close();
    setTimeout(() => {
      const el = document.getElementById(id);
      el?.scrollIntoView({ behavior: "smooth" });
    }, 60);
  };

  const items: CmdItem[] = [
    {
      label: "Go to Home",
      hint: "#home",
      group: "Navigation",
      action: () => go("home"),
    },
    {
      label: "Go to About",
      hint: "#about",
      group: "Navigation",
      action: () => go("about"),
    },
    {
      label: "Go to Experience",
      hint: "#experience",
      group: "Navigation",
      action: () => go("experience"),
    },
    {
      label: "Go to Projects",
      hint: "#projects",
      group: "Navigation",
      action: () => go("projects"),
    },
    {
      label: "Go to Process",
      hint: "#process",
      group: "Navigation",
      action: () => go("process"),
    },
    {
      label: "Go to Tech Stack",
      hint: "#tech",
      group: "Navigation",
      action: () => go("tech"),
    },
    {
      label: "Go to Contact",
      hint: "#contact",
      group: "Navigation",
      action: () => go("contact"),
    },
    {
      label: "Send Email",
      hint: "nrgayathri5@gmail.com",
      group: "Actions",
      action: () => {
        close();
        window.location.href = "mailto:nrgayathri5@gmail.com";
      },
    },
    {
      label: "Copy Email Address",
      hint: "clipboard",
      group: "Actions",
      action: () => {
        navigator.clipboard.writeText("nrgayathri5@gmail.com");
        close();
      },
    },
    {
      label: "Open GitHub",
      hint: "github.com/Gayu123-byte",
      group: "Social",
      action: () => {
        close();
        window.open("https://github.com/Gayu123-byte", "_blank");
      },
    },
    {
      label: "Open LinkedIn",
      hint: "linkedin.com/in/gayathri-nr",
      group: "Social",
      action: () => {
        close();
        window.open("https://www.linkedin.com/in/gayathri-nr", "_blank");
      },
    },
    {
      label: "Scroll to top",
      hint: "↑",
      group: "Actions",
      action: () => {
        close();
        window.scrollTo({ top: 0, behavior: "smooth" });
      },
    },
  ];

  const filtered = query
    ? items.filter((i) =>
        (i.label + " " + i.hint).toLowerCase().includes(query.toLowerCase()),
      )
    : items;

  if (!open) return null;

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActive((a) => Math.min(a + 1, filtered.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActive((a) => Math.max(a - 1, 0));
    } else if (e.key === "Enter") {
      e.preventDefault();
      filtered[active]?.action();
    }
  };

  let lastGroup = "";

  return (
    <div
      className="fixed inset-0 z-[100] flex items-start justify-center pt-24 px-4 bg-slate-950/80 backdrop-blur-sm"
      onClick={close}
    >
      <div
        className="w-full max-w-xl code-card rounded-xl overflow-hidden shadow-2xl shadow-cyan-500/20 border border-cyan-500/40"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center gap-3 px-4 py-3 border-b border-cyan-500/20">
          <Search size={18} className="text-cyan-400" />
          <input
            autoFocus
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setActive(0);
            }}
            onKeyDown={onKeyDown}
            placeholder="Type a command or search…"
            className="flex-1 bg-transparent outline-none border-none text-gray-100 placeholder:text-gray-600 font-mono text-sm"
          />
          <kbd className="text-xs font-mono text-gray-500 border border-gray-700 rounded px-1.5 py-0.5">
            ESC
          </kbd>
        </div>
        <div className="max-h-80 overflow-y-auto py-1">
          {filtered.length === 0 && (
            <p className="text-gray-500 font-mono text-sm text-center py-6">
              no results for &quot;{query}&quot;
            </p>
          )}
          {filtered.map((it, i) => {
            const showGroup = it.group !== lastGroup;
            lastGroup = it.group;
            return (
              <div key={it.label + i}>
                {showGroup && (
                  <p className="px-4 pt-2 pb-1 text-[10px] uppercase tracking-wider text-emerald-400 font-mono">
                    {it.group}
                  </p>
                )}
                <button
                  onMouseEnter={() => setActive(i)}
                  onClick={it.action}
                  className={`w-full text-left px-4 py-2 flex items-center justify-between font-mono text-sm transition-colors ${
                    active === i
                      ? "bg-cyan-500/10 text-cyan-300"
                      : "text-gray-300 hover:bg-slate-800/50"
                  }`}
                >
                  <span>{it.label}</span>
                  <span className="text-xs text-gray-500">{it.hint}</span>
                </button>
              </div>
            );
          })}
        </div>
        <div className="flex items-center justify-between px-4 py-2 border-t border-cyan-500/20 text-xs font-mono text-gray-500">
          <span className="flex items-center gap-1">
            <Command size={12} /> palette
          </span>
          <span>↑↓ navigate • ↵ select</span>
        </div>
      </div>
    </div>
  );
}
