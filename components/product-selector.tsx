import type { Product } from "@/data/products";

type ProductSelectorProps = {
  products: Product[];
  activeId: string;
  onSelect: (id: string) => void;
};

export function ProductSelector({
  products,
  activeId,
  onSelect
}: ProductSelectorProps) {
  return (
    <div className="flex w-full snap-x overflow-x-auto rounded-3xl border border-slate-800 bg-slate-900/70 p-4">
      <div className="flex w-full min-w-full gap-4">
        {products.map((product) => {
          const active = product.id === activeId;
          return (
            <button
              key={product.id}
              onClick={() => onSelect(product.id)}
              className={`flex min-w-[220px] flex-col items-start rounded-2xl border p-4 text-left transition ${
                active
                  ? "border-purple-400/60 bg-gradient-to-br from-purple-600/20 to-cyan-500/20 text-white shadow-lg shadow-purple-500/30"
                  : "border-slate-800 bg-slate-950/40 text-slate-300 hover:border-slate-700 hover:bg-slate-900/70"
              }`}
            >
              <p className="text-xs uppercase tracking-widest text-slate-400">
                Produit
              </p>
              <h3 className="mt-2 text-lg font-semibold">{product.name}</h3>
              <p className="mt-1 text-sm text-slate-400">{product.usp}</p>
              <span className="mt-3 rounded-full border border-slate-700 px-3 py-1 text-xs text-slate-300">
                {product.price.toFixed(2)} {product.currency}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
