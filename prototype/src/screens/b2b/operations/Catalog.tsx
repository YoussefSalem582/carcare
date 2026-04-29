import { useMemo, useState } from 'react';
import { ProtoHomeIndicator, ProtoStatusBar } from '../../../components/proto/Chrome';
import { ProtoIcon } from '../../../components/proto/Icon';
import { B2bTabBar, B2bTopbarMobile } from '../../../components/proto/TabBars';
import { useProto } from '../../../context/ProtoContext';
import { ScreenWrap } from '../../shared/ScreenWrap';

export function B2bCatalog() {
  const { t } = useProto();
  const fixed = t('b2b.cat.fixed', 'Fixed');
  type Chip = 'all' | 'oil' | 'brakes' | 'ac';
  const defs = useMemo(
    () =>
      [
        {
          key: 'oil_std',
          title: t('demo.b2b.cat.oil_std', 'Oil (standard)'),
          price: t('demo.shop.svc1_price', 'EGP 350'),
          bookings: t('demo.b2b.cat.book_mo_1', '62'),
          cat: 'oil' as const,
        },
        {
          key: 'brake',
          title: t('demo.b2b.cat.brake', 'Brake pads'),
          price: t('demo.shop.svc2_price', 'EGP 650'),
          bookings: t('demo.b2b.cat.book_mo_2', '22'),
          cat: 'brakes' as const,
        },
        {
          key: 'ac',
          title: t('demo.b2b.cat.ac', 'AC recharge'),
          price: t('demo.shop.svc3_price', 'EGP 450'),
          bookings: t('demo.b2b.cat.book_mo_3', '34'),
          cat: 'ac' as const,
        },
      ],
    [t],
  );

  const [chip, setChip] = useState<Chip>('all');
  const [live, setLive] = useState<Record<string, boolean>>({ oil_std: true, brake: true, ac: true });

  const filtered = defs.filter((d) => chip === 'all' || d.cat === chip);

  function chipLabel(c: Chip) {
    if (c === 'all') return t('b2b.cat.chip.all', 'All');
    if (c === 'oil') return t('b2b.cat.chip.oil', 'Oil');
    if (c === 'brakes') return t('b2b.cat.chip.brakes', 'Brakes');
    return t('b2b.cat.chip.ac', 'AC');
  }

  return (
    <ScreenWrap id="b2b-catalog">
      <ProtoStatusBar />
      <div className="flex min-h-0 flex-1 flex-col app-surface">
        <B2bTopbarMobile title={t('b2b.cat.nav', 'Catalog')} />
        <div className="no-scrollbar flex gap-2 overflow-x-auto px-3 py-2">
          {(['all', 'oil', 'brakes', 'ac'] as const).map((c) => (
            <button
              key={c}
              type="button"
              aria-pressed={chip === c}
              onClick={() => setChip(c)}
              className={`chip tap flex-shrink-0 ${chip === c ? 'on shadow-md shadow-teal-900/15' : ''}`}
            >
              {chipLabel(c)}
            </button>
          ))}
        </div>
        <div className="min-h-0 flex-1 space-y-2 overflow-y-auto p-3">
          <div className="flex gap-2">
            <button type="button" className="btn-ghost flex-1 py-2 text-xs tap active:bg-slate-100 dark:active:bg-slate-800">
              {t('b2b.cat.import', 'Import')}
            </button>
            <button type="button" className="btn-primary tap flex-1 py-2 text-xs active:translate-y-[0.5px]">
              {t('b2b.cat.add_svc', '+ Service')}
            </button>
          </div>
          {filtered.length === 0 ? (
            <div className="rounded-xl border border-dashed border-slate-300 px-4 py-8 text-center text-sm font-medium text-slate-600 dark:border-slate-600 dark:text-slate-400">
              {t('b2b.cat.none_filter', 'No services in this filter.')}
            </div>
          ) : (
            filtered.map((r) => {
              const on = live[r.key] ?? false;
              return (
                <div
                  key={r.key}
                  className={`flex flex-col gap-3 rounded-xl border border-slate-200 bg-white p-3 shadow-sm ring-1 ring-violet-500/5 dark:border-slate-600/90 dark:bg-slate-900 sm:flex-row sm:items-start sm:justify-between ${
                    on ? '' : 'opacity-[0.88]'
                  }`}
                >
                  <div className="min-w-0">
                    <div className="flex flex-wrap items-center gap-2">
                      <div className="text-sm font-semibold text-slate-900 dark:text-slate-100">{r.title}</div>
                      <span className="rounded-md bg-violet-100 px-2 py-0.5 text-[10px] font-semibold uppercase text-violet-900 dark:bg-violet-950/65 dark:text-violet-100">
                        {r.cat === 'oil'
                          ? t('b2b.cat.chip.oil', 'Oil')
                          : r.cat === 'brakes'
                            ? t('b2b.cat.chip.brakes', 'Brakes')
                            : t('b2b.cat.chip.ac', 'AC')}
                      </span>
                    </div>
                    <div className="mt-0.5 text-xs text-slate-500 dark:text-slate-400">
                      <span className="badge b-slate">{fixed}</span> {r.bookings}
                      {t('b2b.cat.per_mo', '/mo')}
                    </div>
                    <div className="mt-1 text-sm font-bold text-slate-900 dark:text-slate-100">{r.price}</div>
                  </div>
                  <button
                    type="button"
                    aria-pressed={on}
                    onClick={() => setLive((m) => ({ ...m, [r.key]: !on }))}
                    className={`relative h-[22px] w-11 shrink-0 self-start rounded-full border border-transparent tap transition-colors sm:self-center ${on ? 'bg-teal-600' : 'bg-slate-300 dark:bg-slate-600'}`}
                  >
                    <span
                      className={`absolute top-[2px] inline-block h-4 w-4 rounded-full bg-white shadow transition-transform dark:bg-slate-900 ${on ? 'right-[5px]' : 'left-[5px]'}`}
                    />
                  </button>
                </div>
              );
            })
          )}
        </div>
      </div>
      <B2bTabBar active="catalog" />
      <ProtoHomeIndicator />
    </ScreenWrap>
  );
}