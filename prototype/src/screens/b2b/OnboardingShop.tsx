import { useMemo, useState } from 'react';
import { ProtoHomeIndicator, ProtoStatusBar } from '../../components/proto/Chrome';
import { ProtoIcon } from '../../components/proto/Icon';
import { B2bTopbarMobile, OnboardStepper } from '../../components/proto/TabBars';
import { useProto } from '../../context/ProtoContext';
import { ScreenWrap } from '../shared/ScreenWrap';

export function B2bOnboard1() {
  const { show, t } = useProto();
  type BizKey = 'independent' | 'dealer' | 'chain';

  const [kind, setKind] = useState<BizKey>('independent');
  const [mapOpen, setMapOpen] = useState(false);

  const bizChips: { id: BizKey; labelKey: string; fb: string }[] = [
    { id: 'independent', labelKey: 'b2b.on1.biz.ind', fb: 'Independent workshop' },
    { id: 'dealer', labelKey: 'b2b.on1.biz.dealer', fb: 'Authorized dealer' },
    { id: 'chain', labelKey: 'b2b.on1.biz.chain', fb: 'Multi-location chain' },
  ];

  return (
    <ScreenWrap id="b2b-onboard-1">
      <ProtoStatusBar />
      <div className="flex-1 flex flex-col min-h-0 app-surface">
        <B2bTopbarMobile title={t('b2b.top.welcome', 'Welcome, Omar')} />
        <div className="flex-1 overflow-y-auto p-4 min-h-0">
          <OnboardStepper active={0} interactive />
          <div className="onboard-card-proto p-4">
            <div className="text-lg font-bold text-slate-900 dark:text-slate-100">{t('b2b.on1.title', 'Business information')}</div>
            <div className="text-sm text-slate-600 dark:text-slate-400 mt-0.5">{t('b2b.on1.lead', 'Used for verification and on your public listing.')}</div>

            <div className="mt-4 rounded-xl border border-dashed border-teal-200/80 bg-gradient-to-br from-teal-50/40 to-transparent p-3 dark:border-teal-800/50 dark:from-teal-950/30">
              <div className="text-xs font-semibold uppercase tracking-wide text-teal-800 dark:text-teal-200">
                {t('b2b.on1.setup_label', 'Setup progress')}
              </div>
              <div className="mt-2 flex flex-wrap gap-2">
                <span className="inline-flex items-center gap-1 rounded-full bg-white/90 px-2.5 py-1 text-[11px] font-medium text-slate-700 shadow-sm ring-1 ring-teal-100 dark:bg-slate-900/80 dark:text-slate-200 dark:ring-teal-900/50">
                  <ProtoIcon name="check" className="h-3 w-3 text-teal-600" aria-hidden />
                  {t('b2b.on1.setup_trade', 'Trade name')}
                </span>
                <span className="inline-flex items-center gap-1 rounded-full bg-white/90 px-2.5 py-1 text-[11px] font-medium text-slate-700 shadow-sm ring-1 ring-slate-200 dark:bg-slate-900/80 dark:text-slate-200 dark:ring-slate-600">
                  <ProtoIcon name="map-pin" className="h-3 w-3 text-slate-400" aria-hidden />
                  {t('b2b.on1.setup_map', 'Map pin')}
                </span>
                <span className="inline-flex items-center gap-1 rounded-full bg-white/90 px-2.5 py-1 text-[11px] font-medium text-slate-700 shadow-sm ring-1 ring-slate-200 dark:bg-slate-900/80 dark:text-slate-200 dark:ring-slate-600">
                  <ProtoIcon name="file-text" className="h-3 w-3 text-slate-400" aria-hidden />
                  {t('b2b.on1.setup_cr', 'CR / Tax')}
                </span>
              </div>
            </div>

            <div className="mt-4 space-y-3">
              <div>
                <div className="label mb-1.5">{t('b2b.on1.legal', 'Legal name')}</div>
                <input className="proto-input w-full px-3.5 py-2.5 text-sm" defaultValue={t('demo.onboard.legal_name', 'AutoPro Automotive Services LLC')} autoComplete="off" />
              </div>
              <div>
                <div className="label mb-1.5">{t('b2b.on1.trade', 'Trade name (shown to users)')}</div>
                <input className="proto-input w-full px-3.5 py-2.5 text-sm" defaultValue={t('demo.shop.name', 'AutoPro Heliopolis')} autoComplete="off" />
              </div>
              <div>
                <div className="label mb-1.5">{t('b2b.on1.tax', 'Tax ID')}</div>
                <input className="proto-input w-full px-3.5 py-2.5 text-sm" defaultValue={t('demo.onboard.tax_id', '415-228-9910')} autoComplete="off" />
              </div>
              <div>
                <div className="label mb-1.5">{t('b2b.on1.cr', 'Commercial registration #')}</div>
                <input className="proto-input w-full px-3.5 py-2.5 text-sm" defaultValue={t('demo.onboard.cr', 'CR-88421')} autoComplete="off" />
              </div>
              <div>
                <div className="label mb-1.5">{t('b2b.on1.address', 'Address')}</div>
                <input className="proto-input w-full px-3.5 py-2.5 text-sm" defaultValue={t('demo.onboard.address_line', '12 Baghdad St, Heliopolis, Cairo')} autoComplete="off" />
              </div>
              <div>
                <div className="label mb-1.5">{t('b2b.on1.city', 'City')}</div>
                <input className="proto-input w-full px-3.5 py-2.5 text-sm" defaultValue={t('demo.onboard.city', 'Cairo')} autoComplete="off" />
              </div>
              <div>
                <div className="label mb-1.5">{t('b2b.on1.pin', 'Pin on map')}</div>
                <button
                  type="button"
                  className={`proto-input flex w-full items-center justify-between px-3.5 py-2.5 text-left text-sm tap ${mapOpen ? 'ring-2 ring-teal-400/70' : ''}`}
                  onClick={() => setMapOpen((o) => !o)}
                  aria-expanded={mapOpen}
                >
                  <span>{t('demo.onboard.coords', '30.0980°N · 31.3411°E')}</span>
                  <span className="font-semibold text-teal-700 dark:text-teal-400">{t('b2b.on1.adjust', 'Adjust')}</span>
                </button>
              </div>
              {mapOpen ? (
                <div className="rounded-xl border border-teal-200/90 bg-white p-3 shadow-inner dark:border-teal-800/55 dark:bg-slate-900/85">
                  <div className="relative aspect-[5/3] overflow-hidden rounded-lg bg-gradient-to-br from-slate-200 via-emerald-100/50 to-teal-200/70 dark:from-slate-800 dark:via-emerald-950/40 dark:to-slate-900">
                    <div
                      aria-hidden
                      className="absolute inset-0 opacity-55"
                      style={{
                        backgroundImage: `linear-gradient(to right,#94a3b822 1px,transparent 1px),linear-gradient(#94a3b822 1px,transparent 1px)`,
                        backgroundSize: '18px 18px',
                      }}
                    />
                    <div className="absolute left-[46%] top-[43%] flex -translate-x-1/2 -translate-y-1/2 flex-col items-center">
                      <span className="flex h-11 w-11 items-center justify-center rounded-full bg-teal-600 text-white shadow-lg ring-4 ring-white/90 dark:bg-teal-500 dark:ring-slate-800">
                        <ProtoIcon name="map-pin" className="h-6 w-6" aria-hidden />
                      </span>
                      <span className="mt-1 rounded-md bg-white/95 px-2 py-0.5 text-[10px] font-semibold text-slate-700 shadow dark:bg-slate-800 dark:text-slate-200">
                        {t('b2b.on1.map_drag', 'Drag to adjust')}
                      </span>
                    </div>
                  </div>
                  <p className="mt-2 text-xs leading-relaxed text-slate-600 dark:text-slate-400">{t('b2b.on1.map_hint', 'Drivers use this pin for navigation. Keep it inside your gates.')}</p>
                  <div className="mt-3 grid grid-cols-2 gap-2">
                    <button type="button" className="btn-ghost rounded-xl border border-slate-200 py-2.5 text-xs font-semibold dark:border-slate-600">
                      <ProtoIcon name="move-horizontal" className="mr-1 inline h-4 w-4" aria-hidden />
                      {t('b2b.on1.nudge', 'Fine-tune')}
                    </button>
                    <button
                      type="button"
                      className="btn-primary rounded-xl py-2.5 text-xs font-semibold shadow-sm"
                      onClick={() => setMapOpen(false)}
                    >
                      {t('b2b.on1.map_save', 'Save pin')}
                    </button>
                  </div>
                </div>
              ) : null}
              <div>
                <div className="label mb-2">{t('b2b.on1.biztype', 'Business type')}</div>
                <div className="flex flex-wrap gap-2">
                  {bizChips.map((chip) => {
                    const sel = kind === chip.id;
                    return (
                      <button
                        key={chip.id}
                        type="button"
                        onClick={() => setKind(chip.id)}
                        className={`tap rounded-xl border px-3 py-2 text-xs font-semibold transition shadow-sm ${sel ? 'border-teal-500 bg-teal-50 text-teal-950 ring-1 ring-teal-400 dark:border-teal-600 dark:bg-teal-950/50 dark:text-teal-50' : 'border-slate-200 bg-white text-slate-700 hover:border-slate-300 dark:border-slate-600 dark:bg-slate-900 dark:text-slate-200 dark:hover:border-slate-500'}`}
                        aria-pressed={sel}
                      >
                        {t(chip.labelKey, chip.fb)}
                      </button>
                    );
                  })}
                </div>
              </div>
              <div>
                <div className="label mb-1.5">{t('b2b.on1.founded', 'Year founded')}</div>
                <input className="proto-input w-full px-3.5 py-2.5 text-sm" defaultValue={t('demo.onboard.year', '2014')} autoComplete="off" />
              </div>
            </div>
            <div className="mt-6 flex flex-col gap-2">
              <button type="button" className="btn-ghost tap w-full border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-900">
                {t('b2b.on1.draft', 'Save draft')}
              </button>
              <button type="button" className="btn-primary tap shadow-md" onClick={() => show('b2b-onboard-3')}>
                {t('b2b.on1.cont', 'Continue')} <ProtoIcon name="arrow-right" className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
      <ProtoHomeIndicator />
    </ScreenWrap>
  );
}

type SvcRow = [string, string, string, string];

export function B2bOnboard3() {
  const { show, t } = useProto();
  const fixed = t('b2b.cat.fixed', 'Fixed');
  const baseRows: SvcRow[] = useMemo(
    () => [
      [t('b2b.on3.s1', 'Oil change (standard)'), t('b2b.on3.s1.dur', '45 min'), fixed, t('demo.shop.svc1_price', 'EGP 350')],
      [t('b2b.on3.s2', 'Brake pads — front'), t('b2b.on3.s2.dur', '1.5 h'), fixed, t('demo.shop.svc2_price', 'EGP 650')],
      [t('b2b.on3.s3', 'AC recharge'), t('b2b.on3.s3.dur', '1 h'), fixed, t('demo.shop.svc3_price', 'EGP 450')],
    ],
    [t, fixed],
  );

  const extraRows: SvcRow[] = useMemo(
    () => [
      [t('b2b.on3.e1', 'Tire rotation'), t('b2b.on3.e1.dur', '30 min'), fixed, t('b2b.on3.e1.price', 'EGP 200')],
      [t('b2b.on3.e2', 'Battery diagnostic'), t('b2b.on3.e2.dur', '20 min'), fixed, t('b2b.on3.e2.price', 'EGP 120')],
      [t('b2b.on3.e3', 'Wheel alignment'), t('b2b.on3.e3.dur', '1 h'), fixed, t('b2b.on3.e3.price', 'EGP 500')],
    ],
    [t, fixed],
  );

  const [presetsMerged, setPresetsMerged] = useState(false);
  const rows = presetsMerged ? [...baseRows, ...extraRows] : baseRows;
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  return (
    <ScreenWrap id="b2b-onboard-3">
      <ProtoStatusBar />
      <div className="flex-1 flex flex-col min-h-0 app-surface">
        <B2bTopbarMobile title={t('b2b.top.welcome', 'Welcome, Omar')} />
        <div className="flex-1 overflow-y-auto p-4 min-h-0">
          <OnboardStepper active={1} interactive />
          <div className="onboard-card-proto p-4">
            <div className="flex flex-wrap items-start justify-between gap-2">
              <div className="min-w-0">
                <div className="text-lg font-bold text-slate-900 dark:text-slate-100">{t('b2b.cat.title', 'Your service catalog')}</div>
                <div className="text-sm text-slate-600 dark:text-slate-400 mt-0.5">{t('b2b.cat.lead', 'Start with presets — you can edit any time.')}</div>
              </div>
              <span className="shrink-0 rounded-full bg-teal-600/15 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-teal-950 dark:bg-teal-500/25 dark:text-teal-100">
                {t('b2b.on3.phase', 'Catalog')}
              </span>
            </div>

            <div className="mt-4 flex flex-wrap gap-2">
              {(['all', 'oil', 'brakes'] as const).map((chip) => (
                <button
                  key={chip}
                  type="button"
                  className={`tap rounded-full border px-3 py-1 text-[11px] font-semibold uppercase tracking-wide shadow-sm transition ${chip === 'all' ? 'border-teal-500 bg-teal-50 text-teal-950 dark:bg-teal-950/35 dark:text-teal-100' : 'border-slate-200 bg-white text-slate-600 hover:bg-slate-50 dark:border-slate-600 dark:bg-slate-900 dark:text-slate-300'}`}
                >
                  {chip === 'all'
                    ? t('b2b.cat.chip.all', 'All')
                    : chip === 'oil'
                      ? t('b2b.cat.chip.oil', 'Oil')
                      : t('b2b.cat.chip.brakes', 'Brakes')}
                </button>
              ))}
            </div>

            <button
              type="button"
              disabled={presetsMerged}
              onClick={() => setPresetsMerged(true)}
              className="btn-ghost mt-3 flex w-full items-center justify-center gap-2 rounded-xl border border-violet-200 bg-violet-50/60 py-2.5 text-xs font-semibold text-violet-900 shadow-sm hover:bg-violet-50 disabled:opacity-60 dark:border-violet-700/55 dark:bg-violet-950/55 dark:text-violet-100"
              aria-busy={presetsMerged}
            >
              <ProtoIcon name="wand-2" className="h-3.5 w-3.5" />
              {presetsMerged ? t('b2b.on3.presets_done', 'Common services added') : t('b2b.cat.presets', 'Add 12 common services')}
            </button>
            {presetsMerged ? (
              <p className="mt-2 rounded-lg bg-emerald-50/95 px-3 py-2 text-[11px] font-medium leading-relaxed text-emerald-950 dark:bg-emerald-950/35 dark:text-emerald-100" role="status">
                <ProtoIcon name="sparkles" className="mr-1 inline h-3.5 w-3.5" aria-hidden /> {t('b2b.on3.presets_banner', 'We matched services to Cairo pricing — edit durations before you publish.')}
              </p>
            ) : null}

            <div className="mt-4 space-y-2">
              {rows.map(([s, d, typ, p], ix) => {
                const expanded = openIdx === ix;
                const key = `${s}-${ix}`;
                return (
                  <div
                    key={key}
                    className={`overflow-hidden rounded-xl border bg-gradient-to-r from-white to-teal-50/30 shadow-sm transition dark:from-slate-900 dark:to-teal-950/25 ${expanded ? 'border-teal-400/90 ring-1 ring-teal-300/50 dark:border-teal-600 dark:ring-teal-800/70' : 'border-slate-200 dark:border-slate-600/90'} `}
                  >
                    <button
                      type="button"
                      className="flex w-full justify-between gap-2 p-3 text-left tap dark:hover:bg-slate-800/40"
                      onClick={() => setOpenIdx((prev) => (prev === ix ? null : ix))}
                      aria-expanded={expanded}
                    >
                      <div className="min-w-0">
                        <div className="font-semibold text-sm text-slate-900 dark:text-slate-100">{s}</div>
                        <div className="text-xs text-slate-600 dark:text-slate-400">
                          {d} · <span className="badge b-slate">{typ}</span>
                        </div>
                      </div>
                      <div className="flex flex-shrink-0 items-center gap-1">
                        <span className="text-sm font-bold text-teal-800 dark:text-teal-200">{p}</span>
                        <ProtoIcon name={expanded ? 'chevron-up' : 'chevron-down'} className="h-4 w-4 text-slate-400" aria-hidden />
                      </div>
                    </button>
                    {expanded ? (
                      <div className="space-y-2 border-t border-slate-100 px-3 py-3 text-xs dark:border-slate-700/80">
                        <div className="flex flex-wrap gap-2">
                          <button type="button" className="tap rounded-lg border border-slate-200 bg-white px-2.5 py-1.5 font-medium text-slate-700 dark:border-slate-600 dark:bg-slate-800 dark:text-slate-200">
                            {t('b2b.on3.adjust_price', 'Adjust price')}
                          </button>
                          <button type="button" className="tap rounded-lg border border-slate-200 bg-white px-2.5 py-1.5 font-medium text-slate-700 dark:border-slate-600 dark:bg-slate-800 dark:text-slate-200">
                            {t('b2b.on3.duplicate', 'Duplicate')}
                          </button>
                          <button type="button" className="tap rounded-lg border border-red-200 bg-red-50/80 px-2.5 py-1.5 font-medium text-red-800 dark:border-red-800/55 dark:bg-red-950/40 dark:text-red-100">
                            {t('b2b.on3.pause', 'Pause listing')}
                          </button>
                        </div>
                        <label className="flex items-start gap-2 rounded-lg bg-slate-50 px-3 py-2 dark:bg-slate-800/65">
                          <input type="checkbox" className="mt-0.5 h-4 w-4 accent-teal-600" defaultChecked />
                          <span>{t('b2b.on3.show_map', 'Show on map discovery & profile')}</span>
                        </label>
                      </div>
                    ) : null}
                  </div>
                );
              })}
            </div>
            <button type="button" className="mt-3 flex w-full items-center justify-center gap-1 rounded-xl py-2.5 text-sm font-semibold text-teal-700 tap dark:text-teal-400">
              <ProtoIcon name="plus" className="h-4 w-4" />
              {t('b2b.cat.custom', 'Add custom service')}
            </button>
            <div className="mt-6 flex flex-col gap-2">
              <button
                type="button"
                className="btn-ghost tap border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-900"
                onClick={() => show('b2b-onboard-1')}
              >
                <ProtoIcon name="arrow-left" className="w-4 h-4" /> {t('b2b.cat.back', 'Back')}
              </button>
              <button type="button" className="btn-primary tap shadow-md" onClick={() => show('b2b-pending')}>
                {t('b2b.cat.submit', 'Submit for verification')} <ProtoIcon name="arrow-right" className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
      <ProtoHomeIndicator />
    </ScreenWrap>
  );
}

export function B2bPending() {
  const { show, t } = useProto();
  const rows: [string, 'done' | 'review' | 'pending'][] = [
    [t('b2b.pend.row1', 'Business information'), 'done'],
    [t('b2b.pend.row2', 'Service catalog'), 'done'],
    [t('b2b.pend.row3', 'Account checks'), 'review'],
    [t('b2b.pend.row4', 'List on map'), 'pending'],
  ];
  return (
    <ScreenWrap id="b2b-pending">
      <ProtoStatusBar />
      <div className="flex-1 flex flex-col min-h-0 app-surface">
        <B2bTopbarMobile title={t('b2b.top.welcome', 'Welcome, Omar')} />
        <div className="flex-1 overflow-y-auto p-4 flex items-start justify-center min-h-0">
          <div className="onboard-card-proto p-5 w-full text-center max-w-md">
            <div className="relative mx-auto w-14">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-amber-200 to-orange-200 dark:from-amber-900/50 dark:to-orange-900/45 flex items-center justify-center shadow-md border border-amber-300/50 dark:border-amber-700/50">
                <ProtoIcon name="shield-check" className="w-7 h-7 text-amber-900 dark:text-amber-200" />
              </div>
              <span
                aria-hidden
                className="absolute -bottom-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-amber-500 text-[9px] font-bold text-white ring-2 ring-white dark:bg-amber-400 dark:text-amber-950 dark:ring-slate-900 animate-pulse"
              >
                24h
              </span>
            </div>
            <div className="text-xl font-bold mt-3 text-slate-900 dark:text-slate-100">{t('b2b.pend.title', 'Verification in progress')}</div>
            <div className="text-sm text-slate-500 dark:text-slate-400 mt-2">{t('b2b.pend.lead', 'We’re reviewing your business and catalog. Typical turnaround is 24–48 hours.')}</div>
            <ol className="mt-5 rounded-2xl border border-slate-200/95 bg-white/95 p-4 text-left dark:border-slate-600 dark:bg-slate-900/40">
              {rows.map(([rowTitle, s], ix) => (
                <li key={rowTitle} className={`flex gap-3 ${ix > 0 ? 'mt-4 border-t border-slate-100 pt-4 dark:border-slate-700' : ''}`}>
                  <span
                    className={`mt-0.5 flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full border-2 text-[11px] font-bold tracking-tight ${
                      s === 'done'
                        ? 'border-teal-500 bg-teal-600 text-white shadow-sm shadow-teal-700/40'
                        : s === 'review'
                          ? 'animate-pulse border-amber-400 bg-amber-100 text-amber-900 shadow-[0_0_0_3px_rgba(251,191,36,0.25)] dark:border-amber-500 dark:bg-amber-900/60 dark:text-amber-100'
                          : 'border-dashed border-slate-300 bg-slate-100 text-slate-400 dark:border-slate-500 dark:bg-slate-700 dark:text-slate-500'
                    }`}
                  >
                    {s === 'done' ? '✓' : s === 'review' ? '…' : ix + 1}
                  </span>
                  <div className="min-w-0 flex-1">
                    <div className="text-sm font-semibold text-slate-900 dark:text-slate-50">{rowTitle}</div>
                    <p className="mt-1 text-[11px] font-medium uppercase tracking-wide text-slate-400 dark:text-slate-500">
                      {s === 'done'
                        ? t('b2b.pend.done', 'Done')
                        : s === 'review'
                          ? t('b2b.pend.review', 'In review')
                          : t('b2b.pend.wait', 'Wait')}
                    </p>
                    {s === 'review' ? (
                      <p className="mt-1 text-xs leading-relaxed text-slate-500 dark:text-slate-400">
                        {t('b2b.pend.review_note', 'Compliance is checking registrations — no action needed.')}
                      </p>
                    ) : null}
                  </div>
                </li>
              ))}
            </ol>
            <div className="mt-4 p-3 rounded-xl callout-success text-xs text-emerald-950 dark:text-emerald-100 text-left border border-emerald-200/60 dark:border-emerald-700/45">
              <b>{t('b2b.pend.note_title', 'While you wait')}</b> — {t('b2b.pend.note_body', 'add photos and your team. You can open the dashboard anytime.')}
            </div>
            <button type="button" className="btn-primary w-full mt-4 tap shadow-md" onClick={() => show('b2b-dashboard')}>
              {t('b2b.pend.explore', 'Explore dashboard')}
            </button>
          </div>
        </div>
      </div>
      <ProtoHomeIndicator />
    </ScreenWrap>
  );
}
