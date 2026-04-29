import { useEffect, useState } from 'react';
import { B2cTabBar } from '../../../components/proto/TabBars';
import { ProtoHomeIndicator, ProtoStatusBar } from '../../../components/proto/Chrome';
import { ProtoIcon } from '../../../components/proto/Icon';
import { useProto } from '../../../context/ProtoContext';
import { ScreenWrap } from '../../shared/ScreenWrap';

export function B2cGarage() {
  const { show, t } = useProto();
  return (
    <ScreenWrap id="b2c-garage">
      <ProtoStatusBar />
      <div className="px-5 pt-3 pb-2 flex items-center justify-between bg-white dark:bg-slate-900 border-b border-slate-100 dark:border-slate-700/80">
        <div className="font-bold text-xl tracking-tight text-slate-900 dark:text-slate-100">{t('acct.garage.title', 'My garage')}</div>
        <button
          type="button"
          aria-label={t('acct.garage.add_a11y', 'Add car')}
          className="w-10 h-10 rounded-xl bg-gradient-to-br from-teal-600 to-cyan-600 flex items-center justify-center text-white shadow-md tap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 focus-visible:ring-offset-2"
        >
          <ProtoIcon name="plus" className="w-4 h-4" aria-hidden />
        </button>
      </div>
      <div className="flex-1 overflow-y-auto px-5 pt-4 space-y-3 app-surface min-h-0">
        <button
          type="button"
          className="tap w-full text-left p-4 rounded-2xl text-white shadow-lg shadow-teal-900/25 gradient-garage-primary ring-1 ring-white/20 active:scale-[0.992] transition-transform focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900"
          onClick={() => show('b2c-cardetail')}
          aria-label={t('acct.garage.primary_open', 'Open vehicle details: Toyota Corolla')}
        >
          <div className="flex justify-between items-start">
            <div>
              <div className="text-xs uppercase tracking-wider opacity-80">{t('acct.garage.primary', 'Primary')}</div>
              <div className="text-xl font-bold mt-0.5">{t('demo.garage.corolla_title', 'Toyota Corolla')}</div>
              <div className="text-sm opacity-80">{t('demo.garage.meta_line', '2019 · 82,450 km · س ب ج 7421')}</div>
            </div>
            <ProtoIcon name="car" className="w-10 h-10 opacity-70" aria-hidden />
          </div>
          <div className="divider my-3 opacity-30" />
          <div className="grid grid-cols-3 gap-2 text-xs">
            <div>
              <div className="opacity-70">{t('acct.garage.last', 'Last service')}</div>
              <div className="font-semibold mt-0.5">{t('demo.garage.last_detail', '29 Mar · AC')}</div>
            </div>
            <div>
              <div className="opacity-70">{t('acct.garage.next', 'Next due')}</div>
              <div className="font-semibold mt-0.5">{t('demo.garage.next_detail', 'Oil · 1.2k km')}</div>
            </div>
            <div>
              <div className="opacity-70">{t('acct.garage.spent', 'Spent YTD')}</div>
              <div className="font-semibold mt-0.5">{t('demo.garage.spent_ytd', 'EGP 2,430')}</div>
            </div>
          </div>
        </button>
        <button
          type="button"
          className="tap w-full text-left p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-600/90 shadow-sm ring-1 ring-indigo-500/5 active:bg-slate-50/90 dark:active:bg-slate-800/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500"
          onClick={() => show('b2c-cardetail')}
          aria-label={t('acct.garage.secondary_open', 'Open vehicle details: Hyundai Tucson')}
        >
          <div className="flex justify-between items-center gap-2">
            <div className="min-w-0">
              <div className="font-semibold text-slate-900 dark:text-slate-100">{t('demo.garage.tucson_title', 'Hyundai Tucson')}</div>
              <div className="text-sm text-slate-500 dark:text-slate-400">{t('demo.garage.tucson_meta', '2022 · 24,100 km')}</div>
            </div>
            <ProtoIcon name="chevron-right" className="w-5 h-5 text-slate-400 dark:text-slate-500 shrink-0" aria-hidden />
          </div>
        </button>
        <button
          type="button"
          className="tap w-full p-4 rounded-2xl border-2 border-dashed border-teal-300/80 dark:border-teal-600/50 text-teal-800 dark:text-teal-200 bg-teal-50/40 dark:bg-teal-950/35 text-sm font-semibold flex items-center justify-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 focus-visible:ring-offset-2"
        >
          <ProtoIcon name="plus" className="w-4 h-4" aria-hidden />
          {t('acct.garage.add', 'Add another car')}
        </button>
      </div>
      <B2cTabBar active="garage" />
      <ProtoHomeIndicator />
    </ScreenWrap>
  );
}

export function B2cCardetail() {
  const { show, t } = useProto();
  const [manualOpen, setManualOpen] = useState(false);
  const [toast, setToast] = useState(false);
  const [svcDraft, setSvcDraft] = useState('');
  const [priceDraft, setPriceDraft] = useState('');

  useEffect(() => {
    if (!manualOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setManualOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [manualOpen]);

  useEffect(() => {
    if (!toast) return;
    const tm = window.setTimeout(() => setToast(false), 4400);
    return () => window.clearTimeout(tm);
  }, [toast]);

  const saveManualDemo = () => {
    setManualOpen(false);
    setSvcDraft('');
    setPriceDraft('');
    setToast(true);
  };

  const hist: [string, string, string, string, boolean][] = [
    [
      t('demo.card.hist1_date', '29 Mar'),
      t('demo.card.hist1_svc', 'AC recharge'),
      t('demo.card.hist1_shop', 'QuickFix Nasr City'),
      t('demo.card.hist1_price', 'EGP 450'),
      true,
    ],
    [
      t('demo.card.hist2_date', '8 Feb'),
      t('demo.card.hist2_svc', 'Oil + filter'),
      t('demo.card.hist2_shop', 'AutoPro Heliopolis'),
      t('demo.card.hist2_price', 'EGP 520'),
      true,
    ],
    [
      t('demo.card.hist3_date', '12 Dec'),
      t('demo.card.hist3_svc', 'Front brake pads'),
      t('demo.card.hist3_shop', 'Toyota Authorized'),
      t('demo.card.hist3_price', 'EGP 950'),
      true,
    ],
    [
      t('demo.card.hist4_date', '3 Nov'),
      t('demo.card.hist4_svc', 'Tire rotation'),
      t('demo.card.hist4_shop', 'Cairo Motors (manual entry)'),
      t('demo.card.hist4_price', 'EGP 120'),
      false,
    ],
  ];
  const stats = [
    [t('acct.card.stat.mileage', 'Mileage'), t('demo.card.stat_km', '82,450 km'), 'cyan'],
    [t('acct.card.stat.bookings', 'Bookings'), '14', 'violet'],
    [t('acct.card.stat.spent', 'Spent'), t('demo.card.stat_spent', 'EGP 7,820'), 'amber'],
  ];
  return (
    <ScreenWrap id="b2c-cardetail">
      <div className="flex flex-col flex-1 min-h-0 h-full relative">
        <ProtoStatusBar />
        <div className="screen-topbar">
          <button
            type="button"
            className="funnel-back tap -ml-1 rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500"
            onClick={() => show('b2c-garage')}
            aria-label={t('a11y.back', 'Back')}
          >
            <ProtoIcon name="arrow-left" className="w-5 h-5" />
          </button>
          <div className="font-semibold text-slate-900 dark:text-slate-100 truncate">{t('acct.card.title_bar', 'Toyota Corolla 2019')}</div>
          <button
            type="button"
            aria-label={t('acct.card.edit_a11y', 'Edit vehicle')}
            className="tap w-10 h-10 rounded-xl bg-violet-50 dark:bg-violet-950/45 text-violet-700 dark:text-violet-300 flex items-center justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400"
          >
            <ProtoIcon name="pencil" className="w-5 h-5" />
          </button>
        </div>
        <div className="flex-1 overflow-y-auto px-5 pt-4 app-surface min-h-0 pb-24">
          <div className="grid grid-cols-3 gap-2.5 mb-6">
          {stats.map(([l, v, tone]) => (
            <div
              key={l}
              className={`p-3.5 rounded-2xl text-center shadow-sm ring-1 ring-black/[0.04] dark:ring-white/[0.06] min-h-[4.75rem] flex flex-col justify-center ${
                tone === 'cyan'
                  ? 'bg-cyan-50 dark:bg-cyan-950/45 text-cyan-900 dark:text-cyan-100'
                  : tone === 'violet'
                    ? 'bg-violet-50 dark:bg-violet-950/45 text-violet-900 dark:text-violet-100'
                    : 'bg-amber-50 dark:bg-amber-950/45 text-amber-900 dark:text-amber-100'
              }`}
            >
              <div className="text-[10px] font-bold uppercase tracking-wide opacity-80 leading-none">{l}</div>
              <div className="font-bold text-[15px] mt-2 leading-none tabular-nums">{v}</div>
            </div>
          ))}
        </div>

        <h2 className="label mb-2.5">{t('acct.card.reminders', 'Reminders')}</h2>
        <div className="p-3.5 rounded-2xl bg-gradient-to-r from-orange-50 to-amber-50 dark:from-orange-950/50 dark:to-amber-950/45 border border-orange-200/80 dark:border-orange-800/55 flex items-start gap-3 shadow-sm">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-orange-500 to-amber-500 flex items-center justify-center flex-shrink-0 shadow-md" aria-hidden>
            <ProtoIcon name="bell" className="w-[18px] h-[18px] text-white" />
          </div>
          <div className="flex-1 min-w-0">
            <div className="font-semibold text-sm text-slate-900 dark:text-slate-100 leading-snug">{t('acct.card.oil_due', 'Oil change due in 1,200 km')}</div>
            <div className="text-xs text-slate-600 dark:text-slate-400 mt-1 leading-relaxed">{t('acct.card.oil_sub', 'Based on your last change on 8 Feb')}</div>
          </div>
          <button
            type="button"
            className="text-xs font-bold text-orange-700 dark:text-orange-300 tap py-1 px-1 -mr-1 rounded-lg shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-400"
            onClick={() => show('b2c-reminder')}
          >
            {t('acct.card.book', 'Book')}
          </button>
        </div>

        <h2 className="label mt-7 mb-3">{t('acct.card.history', 'Service history')}</h2>
        <ul className="space-y-3 list-none p-0 m-0">
          {hist.map(([d, s, shop, p, auto], i) => (
            <li
              key={i}
              className="p-4 rounded-2xl border border-slate-200/90 dark:border-slate-600/90 bg-white dark:bg-slate-900 shadow-sm ring-1 ring-black/[0.02] dark:ring-white/[0.04]"
            >
              <div className="flex justify-between gap-4 items-start">
                <div className="min-w-0 flex-1">
                  <div className="font-semibold text-[15px] text-slate-900 dark:text-slate-100 leading-snug">{s}</div>
                  <div className="text-xs text-slate-500 dark:text-slate-400 mt-1.5 leading-snug">{shop}</div>
                </div>
                <div className="text-end shrink-0">
                  <div className="font-bold text-[15px] text-slate-900 dark:text-slate-100 tabular-nums">{p}</div>
                  <div className="text-xs text-slate-500 dark:text-slate-400 mt-1 tabular-nums">{d}</div>
                </div>
              </div>
              {auto ? (
                <div className="mt-3 pt-3 border-t border-slate-100 dark:border-slate-700/80 text-[10px] uppercase tracking-wider text-teal-700 dark:text-teal-400 font-bold flex items-center gap-1.5">
                  <ProtoIcon name="zap" className="w-3.5 h-3.5 shrink-0" aria-hidden />
                  {t('acct.card.auto', 'Auto-logged from booking')}
                </div>
              ) : (
                <div className="mt-3 pt-3 border-t border-slate-100 dark:border-slate-700/80 text-[10px] uppercase tracking-wider text-slate-400 dark:text-slate-500 font-bold">
                  {t('acct.card.manual', 'Manual entry')}
                </div>
              )}
            </li>
          ))}
        </ul>
        <button
          type="button"
          className="mt-5 w-full py-3.5 rounded-2xl border-2 border-dashed border-slate-200 dark:border-slate-600 text-sm font-semibold tap text-slate-800 dark:text-slate-100 bg-slate-50/80 dark:bg-slate-800/40 hover:bg-slate-100 dark:hover:bg-slate-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 focus-visible:ring-offset-2"
          onClick={() => setManualOpen(true)}
        >
          {t('acct.card.add_manual', '+ Add manual entry')}
        </button>
        </div>

        {toast ? (
          <div
            role="status"
            className="absolute bottom-[5.25rem] left-5 right-5 z-[60] px-4 py-3 rounded-2xl bg-teal-900 text-white shadow-xl text-sm flex items-start gap-2 ring-2 ring-teal-500/35"
          >
            <ProtoIcon name="check-circle" className="w-5 h-5 shrink-0 text-teal-200" aria-hidden />
            <span className="leading-snug">{t('acct.card.manual_saved', 'Saved locally — Phase 2 will sync with your bookings.')}</span>
            <button
              type="button"
              className="ml-auto text-xs font-semibold text-teal-200 tap shrink-0"
              onClick={() => setToast(false)}
            >
              {t('common.dismiss', 'Dismiss')}
            </button>
          </div>
        ) : null}

        {manualOpen ? (
          <div className="absolute inset-0 z-[55] flex items-end justify-center sm:items-center p-4 sm:p-6">
            <button
              type="button"
              aria-label={t('acct.card.manual_close_a11y', 'Close')}
              className="absolute inset-0 bg-black/45 dark:bg-black/60 backdrop-blur-[2px]"
              onClick={() => setManualOpen(false)}
            />
            <div
              role="dialog"
              aria-modal="true"
              aria-labelledby="manual-sheet-title"
              className="relative w-full max-w-[22rem] rounded-2xl border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-900 shadow-2xl p-5 max-h-[min(92vh,32rem)] overflow-y-auto"
            >
              <div className="flex items-start justify-between gap-2 mb-4">
                <h2 id="manual-sheet-title" className="text-lg font-bold text-slate-900 dark:text-slate-100 leading-tight">
                  {t('acct.card.manual_sheet_title', 'Add service (manual)')}
                </h2>
                <button
                  type="button"
                  aria-label={t('acct.card.manual_close_a11y', 'Close')}
                  className="tap p-1.5 rounded-lg text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 focus-visible:ring-2 focus-visible:ring-teal-500"
                  onClick={() => setManualOpen(false)}
                >
                  <ProtoIcon name="x" className="w-5 h-5" />
                </button>
              </div>
              <label className="block text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400 mb-1.5" htmlFor="manual-svc">
                {t('acct.card.manual_svc_label', 'Service name')}
              </label>
              <input
                id="manual-svc"
                autoComplete="off"
                placeholder={t('acct.card.manual_svc_ph', 'e.g. Coolant flush')}
                value={svcDraft}
                onChange={(e) => setSvcDraft(e.target.value)}
                className="w-full mb-4 px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-600 bg-slate-50/80 dark:bg-slate-800/80 text-slate-900 dark:text-slate-100 text-[15px] focus:outline-none focus:ring-2 focus:ring-teal-500/80"
              />
              <label className="block text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400 mb-1.5" htmlFor="manual-price">
                {t('acct.card.manual_price_label', 'Amount (EGP)')}
              </label>
              <input
                id="manual-price"
                inputMode="decimal"
                autoComplete="off"
                placeholder="0"
                value={priceDraft}
                onChange={(e) => setPriceDraft(e.target.value)}
                className="w-full mb-6 px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-600 bg-slate-50/80 dark:bg-slate-800/80 text-slate-900 dark:text-slate-100 text-[15px] focus:outline-none focus:ring-2 focus:ring-teal-500/80 tabular-nums"
              />
              <div className="flex gap-2">
                <button
                  type="button"
                  className="flex-1 py-3 rounded-xl font-semibold border border-slate-200 dark:border-slate-600 tap text-slate-800 dark:text-slate-100"
                  onClick={() => setManualOpen(false)}
                >
                  {t('acct.card.manual_cancel', 'Cancel')}
                </button>
                <button type="button" className="flex-1 py-3 rounded-xl font-semibold btn-accent tap shadow-md" onClick={saveManualDemo}>
                  {t('acct.card.manual_save', 'Save')}
                </button>
              </div>
              <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-3 leading-relaxed">{t('acct.card.manual_footnote', 'Demo — not stored.')}</p>
            </div>
          </div>
        ) : null}
        <ProtoHomeIndicator />
      </div>
    </ScreenWrap>
  );
}

