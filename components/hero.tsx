import { Sparkles } from "lucide-react";

export function Hero() {
  return (
    <header className="relative overflow-hidden rounded-3xl border border-slate-800 bg-gradient-to-br from-slate-900 via-slate-950 to-purple-950 p-10 shadow-2xl shadow-purple-700/30">
      <div className="absolute -right-12 -top-12 h-64 w-64 rounded-full bg-purple-600/20 blur-3xl" />
      <div className="relative z-10 max-w-3xl">
        <div className="inline-flex items-center gap-2 rounded-full border border-purple-500/50 bg-purple-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-purple-100">
          <Sparkles className="h-4 w-4" />
          TikTok Shop Automation Suite
        </div>
        <h1 className="mt-6 text-4xl font-extrabold leading-tight text-white md:text-5xl">
          Automatisez vos vidéos TikTok Shop et boostez vos ventes vitrine
        </h1>
        <p className="mt-4 text-lg text-slate-200">
          Génération de scripts, templates montage, planification et suivi des
          conversions — tout est orchestré par des agents IA conçus pour le live
          commerce.
        </p>
        <div className="mt-6 flex flex-wrap gap-3 text-sm text-slate-300">
          <span className="rounded-full border border-cyan-500/60 bg-cyan-500/10 px-4 py-2">
            Scripts multilingues
          </span>
          <span className="rounded-full border border-purple-500/60 bg-purple-500/10 px-4 py-2">
            Templates CapCut / AE
          </span>
          <span className="rounded-full border border-emerald-500/60 bg-emerald-500/10 px-4 py-2">
            Publication vitrine auto
          </span>
        </div>
      </div>
    </header>
  );
}
