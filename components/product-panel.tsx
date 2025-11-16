import { Fragment } from "react";
import { PlayCircle, ShoppingBag, Sparkles, Star } from "lucide-react";
import type { Product } from "@/data/products";
import { buildVideoPlan } from "@/lib/script-generator";

type ProductPanelProps = {
  product: Product;
};

export function ProductPanel({ product }: ProductPanelProps) {
  const plan = buildVideoPlan(product);

  return (
    <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6 text-slate-100 shadow-2xl shadow-purple-700/20">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <h2 className="text-lg font-semibold uppercase tracking-wider text-purple-200">
            Fiche produit
          </h2>
          <p className="text-3xl font-bold text-white">{product.name}</p>
          <p className="mt-1 text-base text-slate-300">{product.tagline}</p>
        </div>
        <div className="rounded-2xl border border-purple-500/40 bg-gradient-to-tr from-purple-900/60 to-cyan-900/50 px-4 py-3 text-right">
          <p className="text-sm uppercase tracking-widest text-purple-200">
            Prix vitrine
          </p>
          <p className="text-2xl font-bold text-white">
            {product.price.toFixed(2)} {product.currency}
          </p>
          <p className="text-xs text-slate-200/70">
            Stock live : {product.inventory} unités
          </p>
        </div>
      </div>

      <div className="mt-6 grid gap-6 md:grid-cols-2">
        <div className="space-y-4">
          <SectionTitle icon={<Sparkles className="h-4 w-4" />}>
            Promesse & bénéfices
          </SectionTitle>
          <ul className="space-y-2">
            {product.benefits.map((benefit) => (
              <li
                key={benefit}
                className="rounded-xl border border-slate-800 bg-slate-950/50 px-4 py-3 text-sm text-slate-200"
              >
                {benefit}
              </li>
            ))}
          </ul>

          <SectionTitle icon={<Star className="h-4 w-4" />}>
            Hashtags recommandés
          </SectionTitle>
          <div className="flex flex-wrap gap-2">
            {product.hashtags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-purple-600/70 bg-purple-600/20 px-3 py-1 text-xs text-purple-100"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <SectionTitle icon={<PlayCircle className="h-4 w-4" />}>
            Plan vidéo automatisé
          </SectionTitle>
          <div className="space-y-3">
            {plan.sceneSequence.map((scene) => (
              <div
                key={scene.id}
                className="rounded-2xl border border-slate-800 bg-gradient-to-br from-slate-950/70 to-slate-900/60 p-4"
              >
                <p className="text-xs uppercase tracking-wider text-cyan-300/70">
                  Scène {scene.id}
                </p>
                <h3 className="mt-1 text-lg font-semibold text-white">
                  {scene.title}
                </h3>
                <p className="mt-1 text-sm text-slate-300">{scene.description}</p>
              </div>
            ))}
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-950/60 p-4">
            <p className="text-xs uppercase tracking-wider text-cyan-300/70">
              Script & CTA
            </p>
            <p className="mt-2 text-sm text-slate-200">{plan.callToAction}</p>
            <div className="mt-3 text-xs text-slate-400">
              <p>🎵 Tracks : {plan.soundtrack.join(" · ")}</p>
              <p>⏱ Durée idéale : {plan.recommendedLength}</p>
              <p>📝 Sous-titres : {plan.captions.join(" / ")}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 rounded-2xl border border-cyan-500/40 bg-cyan-500/10 p-5">
        <SectionTitle icon={<ShoppingBag className="h-4 w-4" />}>
          Scénario live TikTok Shop
        </SectionTitle>
        <ol className="mt-3 list-decimal space-y-2 pl-4 text-sm text-slate-200">
          <li>Teaser 10s avec hook : {product.hook}</li>
          <li>Présentation + bénéfices clés en 3 bullet points.</li>
          <li>Démonstration rapide : {product.demoIdeas[0]}.</li>
          <li>Mise en avant de la vitrine TikTok Shop + offre spéciale.</li>
          <li>Closing CTA : {plan.callToAction}.</li>
        </ol>
      </div>
    </div>
  );
}

function SectionTitle({
  children,
  icon
}: {
  children: React.ReactNode;
  icon: React.ReactNode;
}) {
  return (
    <div className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-slate-200/80">
      <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-slate-700 bg-slate-900">
        {icon}
      </span>
      <span>{children}</span>
    </div>
  );
}
