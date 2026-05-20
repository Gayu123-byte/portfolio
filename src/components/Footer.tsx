export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-cyan-500/20 py-8 px-4 bg-slate-950/60 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto text-center font-mono">
        <p className="text-2xl font-bold neon-gradient mb-2">
          {"<Gayathri />"}
        </p>
        <p className="text-gray-400 text-sm mb-3">
          <span className="text-emerald-400">$</span> echo &quot;Crafted with
          care &amp; lots of coffee ☕&quot;
        </p>
        <p className="text-gray-600 text-xs">
          // &copy; {currentYear} Gayathri N R. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
