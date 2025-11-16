"use client";

import { useMemo, useState } from "react";
import { Activity, BarChart3, Rocket } from "lucide-react";
import { products } from "@/data/products";
import { Hero } from "@/components/hero";
import { MetricCard } from "@/components/metric-card";
import { ProductPanel } from "@/components/product-panel";
import { PublishingCalendar } from "@/components/publishing-calendar";
import { AutomationPipeline } from "@/components/automation-pipeline";
import { TaskBoard } from "@/components/task-board";
import { ProductSelector } from "@/components/product-selector";

export default function Home() {
  const [activeProductId, setActiveProductId] = useState(products[0].id);
  const activeProduct = useMemo(
    () => products.find((product) => product.id === activeProductId) ?? products[0],
    [activeProductId]
  );

  return (
    <main className="mx-auto flex min-h-screen max-w-7xl flex-col gap-8 px-6 py-10">
      <Hero />

      <section className="grid gap-4 md:grid-cols-3">
        <MetricCard label="Vidéos auto publiées" value="27" delta="32%" />
        <MetricCard label="Taux conversion vitrine" value="7,8%" delta="1,2 pts" />
        <MetricCard label="AOV TikTok Shop" value="52,40€" delta="14%" />
      </section>

      <AutomationPipeline />

      <div className="space-y-6">
        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-xs uppercase tracking-widest text-cyan-200/70">
              Produits vitrine
            </p>
            <h2 className="text-2xl font-semibold text-white">
              Sélectionne un produit pour générer la vidéo
            </h2>
          </div>
          <div className="flex gap-2 text-sm text-slate-400">
            <span className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-900/80 px-3 py-1">
              <Activity className="h-3.5 w-3.5 text-emerald-300" />
              Agents actifs
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-900/80 px-3 py-1">
              <BarChart3 className="h-3.5 w-3.5 text-cyan-300" />
              Performances live
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-900/80 px-3 py-1">
              <Rocket className="h-3.5 w-3.5 text-purple-300" />
              Boost Ads prêt
            </span>
          </div>
        </div>
        <ProductSelector
          products={products}
          activeId={activeProductId}
          onSelect={setActiveProductId}
        />

        <ProductPanel product={activeProduct} />
      </div>

      <PublishingCalendar products={products} />
      <TaskBoard />

      <footer className="pb-10 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} TikTok Shop Automation Studio — Agents IA pour
        creators e-commerce.
      </footer>
    </main>
  );
}
