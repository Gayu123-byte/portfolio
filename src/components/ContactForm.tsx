"use client";

import { useState } from "react";
import { Send, Loader2, CheckCircle2, AlertCircle } from "lucide-react";

// Replace this with your Formspree endpoint after creating one at https://formspree.io
// e.g. https://formspree.io/f/abcdwxyz
const FORMSPREE_ENDPOINT = "https://formspree.io/f/YOUR_FORM_ID";

type Status = "idle" | "sending" | "sent" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errMsg, setErrMsg] = useState("");

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");
    setErrMsg("");
    const form = e.currentTarget;
    const data = new FormData(form);

    // If the endpoint isn't configured, fall back to a mailto:
    if (FORMSPREE_ENDPOINT.includes("YOUR_FORM_ID")) {
      const name = data.get("name");
      const email = data.get("email");
      const message = data.get("message");
      window.location.href = `mailto:nrgayathri5@gmail.com?subject=${encodeURIComponent(
        `Portfolio inquiry from ${name}`,
      )}&body=${encodeURIComponent(`${message}\n\nFrom: ${name} <${email}>`)}`;
      setStatus("sent");
      form.reset();
      return;
    }

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: data,
      });
      if (res.ok) {
        setStatus("sent");
        form.reset();
      } else {
        setStatus("error");
        setErrMsg("Could not send right now. Try the email link below.");
      }
    } catch {
      setStatus("error");
      setErrMsg("Network error. Try the email link below.");
    }
  };

  return (
    <form
      onSubmit={onSubmit}
      className="code-card rounded-xl p-6 space-y-4 font-mono h-full flex flex-col"
    >
      <div className="flex items-center gap-2 pb-2 border-b border-cyan-500/15">
        <span className="w-2 h-2 rounded-full bg-emerald-400 dot-pulse"></span>
        <p className="text-xs text-gray-500 uppercase tracking-wider">
          send_message.sh
        </p>
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <label className="block">
          <span className="text-xs text-emerald-400">$ name</span>
          <input
            name="name"
            required
            placeholder="your name"
            className="mt-1 w-full bg-slate-900/60 border border-cyan-500/20 rounded-lg px-3 py-2 text-sm text-gray-100 placeholder:text-gray-600 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition"
          />
        </label>
        <label className="block">
          <span className="text-xs text-emerald-400">$ email</span>
          <input
            name="email"
            type="email"
            required
            placeholder="you@example.com"
            className="mt-1 w-full bg-slate-900/60 border border-cyan-500/20 rounded-lg px-3 py-2 text-sm text-gray-100 placeholder:text-gray-600 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition"
          />
        </label>
      </div>

      <label className="block">
        <span className="text-xs text-emerald-400">$ subject</span>
        <input
          name="subject"
          placeholder="what's this about?"
          className="mt-1 w-full bg-slate-900/60 border border-cyan-500/20 rounded-lg px-3 py-2 text-sm text-gray-100 placeholder:text-gray-600 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition"
        />
      </label>

      <label className="block flex-1 flex flex-col">
        <span className="text-xs text-emerald-400">$ message</span>
        <textarea
          name="message"
          required
          rows={5}
          placeholder="tell me about your idea..."
          className="mt-1 w-full flex-1 min-h-[120px] bg-slate-900/60 border border-cyan-500/20 rounded-lg px-3 py-2 text-sm text-gray-100 placeholder:text-gray-600 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition resize-y"
        />
      </label>

      {/* Honeypot */}
      <input
        type="text"
        name="_gotcha"
        className="hidden"
        tabIndex={-1}
        autoComplete="off"
      />

      <button
        type="submit"
        disabled={status === "sending"}
        className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-lg font-semibold hover:shadow-2xl transition-all duration-300 transform hover:scale-[1.02] disabled:opacity-60 disabled:cursor-not-allowed neon-glow"
      >
        {status === "sending" ? (
          <>
            <Loader2 size={18} className="animate-spin" /> sending...
          </>
        ) : (
          <>
            <Send size={18} /> ./send_message
          </>
        )}
      </button>

      {status === "sent" && (
        <p className="flex items-center gap-2 text-emerald-400 text-sm">
          <CheckCircle2 size={16} /> Message ready — check your mail client /
          I&apos;ll reply soon.
        </p>
      )}
      {status === "error" && (
        <p className="flex items-center gap-2 text-rose-400 text-sm">
          <AlertCircle size={16} /> {errMsg}
        </p>
      )}
    </form>
  );
}
