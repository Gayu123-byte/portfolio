import Link from "next/link";
import { Home, TerminalSquare } from "lucide-react";

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-20 pointer-events-none" />

      <div className="relative max-w-xl w-full code-card rounded-2xl p-8 md:p-10 font-mono">
        <div className="flex items-center gap-2 pb-3 mb-5 border-b border-cyan-500/15">
          <span className="w-3 h-3 rounded-full bg-rose-500" />
          <span className="w-3 h-3 rounded-full bg-amber-400" />
          <span className="w-3 h-3 rounded-full bg-emerald-400" />
          <p className="ml-2 text-xs text-gray-500 uppercase tracking-wider">
            error_404.log
          </p>
        </div>

        <p className="text-xs text-emerald-400 mb-2">
          <span className="text-gray-500">$ </span>cat /tmp/page.txt
        </p>

        <h1 className="text-6xl md:text-7xl font-extrabold neon-gradient leading-none mb-4">
          404
        </h1>

        <p className="text-gray-300 text-base mb-2">
          <span className="text-rose-400">Error:</span> page not found.
        </p>
        <p className="text-gray-500 text-sm mb-8 leading-relaxed">
          The route you requested doesn&apos;t exist — it may have been moved,
          renamed, or never deployed. Try heading back home.
        </p>

        <div className="flex flex-wrap gap-3">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-gradient-to-r from-cyan-500 to-purple-500 text-white text-sm font-semibold hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] neon-glow"
          >
            <Home size={16} /> ./home
          </Link>
          <Link
            href="/#contact"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-cyan-500/30 text-cyan-300 text-sm font-semibold hover:bg-cyan-500/10 transition"
          >
            <TerminalSquare size={16} /> ./contact
          </Link>
        </div>
      </div>
    </main>
  );
}
