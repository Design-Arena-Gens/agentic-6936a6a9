import { CalendarCheck, Timer } from "lucide-react";
import type { Product } from "@/data/products";
import { nextPublishingSlot } from "@/lib/script-generator";

type PublishingCalendarProps = {
  products: Product[];
};

export function PublishingCalendar({ products }: PublishingCalendarProps) {
  return (
    <section className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6 shadow-lg shadow-cyan-500/10">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-xs uppercase tracking-widest text-cyan-300/70">
            Calendrier automatisé
          </p>
          <h2 className="text-2xl font-semibold text-white">
            Plan de diffusion optimisé
          </h2>
        </div>
        <CalendarCheck className="h-12 w-12 text-cyan-400/80" />
      </div>

      <div className="mt-6 grid gap-4 md:grid-cols-3">
        {products.map((product, index) => (
          <div
            key={product.id}
            className="rounded-2xl border border-slate-800 bg-slate-950/60 p-4"
          >
            <div className="flex items-center justify-between">
              <p className="text-xs uppercase tracking-wider text-slate-400">
                Slot #{index + 1}
              </p>
              <Timer className="h-4 w-4 text-cyan-400" />
            </div>
            <h3 className="mt-2 text-lg font-semibold text-white">
              {product.name}
            </h3>
            <p className="text-sm text-slate-300">{product.tagline}</p>
            <p className="mt-3 text-sm font-semibold text-cyan-300">
              {nextPublishingSlot(index)}
            </p>
            <p className="mt-1 text-xs text-slate-400">
              Sequence : Hook → Démo → CTA vitrine
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
