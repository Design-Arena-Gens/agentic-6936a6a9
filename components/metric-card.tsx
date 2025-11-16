type MetricCardProps = {
  label: string;
  value: string;
  delta?: string;
};

export function MetricCard({ label, value, delta }: MetricCardProps) {
  return (
    <div className="rounded-xl border border-slate-800 bg-slate-900/70 p-4 shadow-inner shadow-cyan-500/10">
      <p className="text-sm font-semibold uppercase tracking-wide text-cyan-300/70">
        {label}
      </p>
      <p className="mt-2 text-3xl font-semibold text-white">{value}</p>
      {delta ? (
        <p className="mt-1 text-xs text-emerald-400">+{delta} vs J-7</p>
      ) : null}
    </div>
  );
}
