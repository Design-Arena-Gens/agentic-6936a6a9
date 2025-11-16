import { BrainCircuit, Film, Rocket, Sparkle, Workflow } from "lucide-react";

const steps = [
  {
    id: 1,
    title: "Analyse produit",
    description:
      "Extraction des bénéfices, preuves sociales et objections depuis vos fiches vitrine.",
    icon: BrainCircuit,
    accent: "from-purple-500/30 to-indigo-500/10"
  },
  {
    id: 2,
    title: "Script vidéo",
    description:
      "Génération de scripts court format (15-60s) adaptés TikTok Shop par IA multilingue.",
    icon: Sparkle,
    accent: "from-cyan-400/40 to-sky-500/10"
  },
  {
    id: 3,
    title: "Templates montage",
    description:
      "Insertion automatique dans vos templates CapCut/After Effects avec branding cohérent.",
    icon: Film,
    accent: "from-emerald-400/40 to-lime-500/10"
  },
  {
    id: 4,
    title: "Programmation",
    description:
      "Push direct dans la vitrine TikTok Shop avec planification aux créneaux performants.",
    icon: Workflow,
    accent: "from-orange-400/40 to-amber-500/10"
  },
  {
    id: 5,
    title: "Boost ventes",
    description:
      "Tracking conversions, tests A/B CTA, optimisation budget Ads en un clic.",
    icon: Rocket,
    accent: "from-rose-400/40 to-fuchsia-500/10"
  }
];

export function AutomationPipeline() {
  return (
    <section className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6 shadow-lg shadow-purple-600/10">
      <p className="text-xs uppercase tracking-widest text-purple-200/70">
        Pipeline automatisé
      </p>
      <h2 className="mt-1 text-2xl font-semibold text-white">
        De la fiche produit à la vidéo TikTok Shop publiée
      </h2>

      <div className="mt-6 grid gap-4 lg:grid-cols-5">
        {steps.map((step) => (
          <div
            key={step.id}
            className="group relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-950/50 p-4 transition hover:-translate-y-1 hover:border-purple-400/50 hover:bg-slate-900/70"
          >
            <div
              className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${step.accent}`}
            />
            <step.icon className="h-6 w-6 text-purple-200" />
            <p className="mt-3 text-lg font-semibold text-white">{step.title}</p>
            <p className="mt-2 text-sm text-slate-300">{step.description}</p>
            <span className="absolute bottom-4 right-4 text-xs font-semibold text-purple-200/70">
              Étape {step.id}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
