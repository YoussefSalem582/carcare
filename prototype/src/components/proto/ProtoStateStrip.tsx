import type { ReactNode } from 'react';

type Opt<T extends string> = { key: T; label: string };

/**
 * Horizontal demo state toggles for prototype handoff (catalog `states`). Not production UI.
 */
export function ProtoStateStrip<T extends string>({
  ariaLabel,
  label,
  options,
  value,
  onChange,
}: {
  ariaLabel: string;
  label: ReactNode;
  options: Opt<T>[];
  value: T;
  onChange: (next: T) => void;
}) {
  return (
    <div className="proto-state-strip pb-3 mb-px border-b border-slate-200/90 dark:border-slate-700/90">
      <div className="text-[11px] font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">{label}</div>
      <div className="flex flex-wrap gap-1.5 mt-2" role="group" aria-label={ariaLabel}>
        {options.map((o) => (
          <button
            key={o.key}
            type="button"
            aria-pressed={value === o.key}
            onClick={() => onChange(o.key)}
            className={`text-[11px] font-semibold px-2.5 py-1 rounded-lg transition-colors tap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500/80 dark:focus-visible:ring-sky-400/70 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-slate-900 ${
              value === o.key
                ? 'bg-teal-600 text-white dark:bg-teal-500 shadow-sm'
                : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
            }`}
          >
            {o.label}
          </button>
        ))}
      </div>
    </div>
  );
}
