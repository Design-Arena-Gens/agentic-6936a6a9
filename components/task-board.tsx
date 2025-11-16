import type { ComponentType } from "react";
import { CheckCircle2, Loader, Wand2 } from "lucide-react";

const tasks = [
  {
    id: "autogen-scripts",
    title: "Génération scripts FR/EN",
    status: "done",
    owner: "IA Copy",
    eta: "Terminé",
    description: "Scripts 45s générés pour les 3 produits vitrine."
  },
  {
    id: "capcut-sync",
    title: "Synchronisation templates CapCut",
    status: "in-progress",
    owner: "Automation Studio",
    eta: "2 min",
    description: "Export des scènes + overlays CTA dans template #capsell-03."
  },
  {
    id: "publishing",
    title: "Planification vitrine",
    status: "ready",
    owner: "Scheduler",
    eta: "20:30",
    description: "Slot prime time FR selon data (Mercredi/Dimanche)."
  }
];

const statusStyles: Record<
  "done" | "in-progress" | "ready",
  { label: string; className: string; icon: ComponentType<{ className?: string }> }
> = {
  done: {
    label: "Automatisé",
    className: "border-emerald-500/40 bg-emerald-500/10 text-emerald-200",
    icon: CheckCircle2
  },
  "in-progress": {
    label: "En cours",
    className: "border-cyan-400/40 bg-cyan-500/10 text-cyan-200",
    icon: Loader
  },
  ready: {
    label: "Prêt à publier",
    className: "border-purple-400/40 bg-purple-500/10 text-purple-200",
    icon: Wand2
  }
};

export function TaskBoard() {
  return (
    <section className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6 shadow-lg shadow-emerald-500/15">
      <p className="text-xs uppercase tracking-widest text-emerald-200/70">
        Statut automatisations
      </p>
      <h2 className="mt-1 text-2xl font-semibold text-white">
        Orchestration des flux
      </h2>

      <div className="mt-6 grid gap-4 md:grid-cols-3">
        {tasks.map((task) => {
          const status = statusStyles[task.status as keyof typeof statusStyles];
          const Icon = status.icon;
          return (
            <article
              key={task.id}
              className="flex h-full flex-col justify-between rounded-2xl border border-slate-800 bg-slate-950/60 p-4"
            >
              <div>
                <div
                  className={`inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-semibold ${status.className}`}
                >
                  <Icon className="h-3.5 w-3.5" />
                  {status.label}
                </div>
                <h3 className="mt-3 text-lg font-semibold text-white">
                  {task.title}
                </h3>
                <p className="mt-1 text-sm text-slate-300">{task.description}</p>
              </div>
              <div className="mt-3 flex items-center justify-between text-xs text-slate-400">
                <span>Agent : {task.owner}</span>
                <span>{task.eta}</span>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
