import { B2cTabBar } from '../../../components/proto/TabBars';
import { ProtoHomeIndicator, ProtoStatusBar } from '../../../components/proto/Chrome';
import { ProtoIcon } from '../../../components/proto/Icon';
import { useProto } from '../../../context/ProtoContext';
import { ScreenWrap } from '../../shared/ScreenWrap';

export function B2cDashboard() {
  const { show, t } = useProto();
  return (
    <ScreenWrap id="b2c-dashboard">
      <ProtoStatusBar />
      <div className="px-5 pt-3 pb-2 flex items-center justify-between bg-gradient-to-r from-white via-teal-50/30 to-indigo-50/40 dark:from-slate-900 dark:via-slate-900 dark:to-slate-800 border-b border-slate-100 dark:border-slate-700/80">
        <div>
          <div className="text-sm text-slate-600 dark:text-slate-400">{t('acct.dash.greet', 'Good morning,')}</div>
          <div className="font-bold text-xl tracking-tight text-slate-900 dark:text-slate-100">
            {t('acct.dash.demo_first_name', 'Youssef')}
          </div>
        </div>
        <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-teal-500 to-cyan-600 flex items-center justify-center text-white font-bold shadow-md">
          {t('acct.dash.demo_avatar_initial', 'Y')}
        </div>
      </div>
      <div className="flex-1 overflow-y-auto px-5 space-y-4 pt-3 app-surface min-h-0">
        <div className="p-4 rounded-2xl text-white bg-gradient-to-br from-orange-500 via-amber-500 to-rose-500 shadow-lg shadow-orange-500/25">
          <div className="flex items-start gap-3">
            <ProtoIcon name="bell" className="w-5 h-5" />
            <div className="flex-1">
              <div className="font-bold">{t('acct.dash.remind_title', 'Oil change due soon')}</div>
              <div className="text-sm opacity-90 mt-0.5">{t('acct.dash.remind_sub', '1,200 km away · 3 centers near you')}</div>
            </div>
          </div>
          <button
            type="button"
            className="mt-3 w-full py-2.5 rounded-xl bg-white dark:bg-slate-900/20 backdrop-blur text-sm font-semibold tap text-slate-900 dark:text-white"
            onClick={() => show('b2c-reminder')}
          >
            {t('acct.dash.recs', 'See recommendations')}
          </button>
        </div>
        <div className="app-panel p-4">
          <div className="label mb-2">{t('acct.dash.health', 'Car health')}</div>
          <div className="flex items-end gap-2 mb-3">
            <div className="text-3xl font-bold text-teal-700 dark:text-teal-300">{t('demo.dash.health_score', '82')}</div>
            <div className="text-xs text-slate-500 dark:text-slate-400 pb-1">{t('acct.dash.good', '/ 100 · Good')}</div>
          </div>
          <div className="h-2 rounded-full bg-slate-100 dark:bg-slate-800/80 overflow-hidden ring-1 ring-slate-200/80">
            <div className="h-full bg-gradient-to-r from-teal-500 via-emerald-500 to-cyan-500" style={{ width: '82%' }} />
          </div>
          <div className="mt-3 grid grid-cols-3 gap-2 text-xs text-center">
            <div className="p-2 rounded-xl bg-emerald-50 dark:bg-emerald-950/45 text-emerald-900 dark:text-emerald-100 font-medium border border-emerald-100 dark:border-emerald-800/55">
              {t('acct.dash.eng_ok', 'Engine: OK')}
            </div>
            <div className="p-2 rounded-xl bg-amber-50 dark:bg-amber-950/45 text-amber-900 dark:text-amber-100 font-medium border border-amber-100 dark:border-amber-800/55">
              {t('acct.dash.oil_due', 'Oil: Due')}
            </div>
            <div className="p-2 rounded-xl bg-cyan-50 dark:bg-cyan-950/45 text-cyan-900 dark:text-cyan-100 font-medium border border-cyan-100 dark:border-cyan-800/55">
              {t('acct.dash.tires_ok', 'Tires: OK')}
            </div>
          </div>
        </div>
        <div className="app-panel p-4">
          <div className="flex justify-between mb-3">
            <div className="label">{t('acct.dash.upcoming', 'Upcoming')}</div>
            <button type="button" className="text-xs text-teal-700 dark:text-teal-400 font-semibold tap" onClick={() => show('b2c-bookings')}>
              {t('acct.dash.see_all', 'See all')}
            </button>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-teal-100 to-cyan-100 dark:from-teal-950/70 dark:to-cyan-950/60 text-teal-800 dark:text-teal-100 border border-teal-200/60 dark:border-teal-700/50 flex flex-col items-center justify-center shadow-sm">
              <div className="text-[10px] font-bold">{t('demo.dash.cal_month_apr', 'APR')}</div>
              <div className="text-sm font-bold -mt-0.5">{t('demo.dash.cal_day_n', '18')}</div>
            </div>
            <div className="flex-1">
              <div className="font-semibold text-sm text-slate-900 dark:text-slate-100">{t('acct.dash.booking_line', 'Oil change · AutoPro')}</div>
              <div className="text-xs text-slate-500 dark:text-slate-400">{t('acct.dash.today', 'Today · 11:00')}</div>
            </div>
            <span className="badge b-indigo">{t('book.list.badge.confirmed', 'Confirmed')}</span>
          </div>
        </div>
        <div className="app-panel p-4">
          <div className="label mb-2">{t('acct.dash.month', 'This month')}</div>
          <div className="flex gap-3">
            <div className="flex-1">
              <div className="text-2xl font-bold text-slate-900 dark:text-slate-100">{t('demo.dash.spent_month', 'EGP 970')}</div>
              <div className="text-xs text-slate-500 dark:text-slate-400">{t('acct.dash.spent', 'Spent')}</div>
            </div>
            <div className="flex-1">
              <div className="text-2xl font-bold text-slate-900 dark:text-slate-100">{t('demo.dash.month_svc_n', '2')}</div>
              <div className="text-xs text-slate-500 dark:text-slate-400">{t('acct.dash.services', 'Services')}</div>
            </div>
            <div className="flex-1">
              <div className="text-2xl font-bold text-slate-900 dark:text-slate-100">{t('demo.dash.streak_n', '28')}</div>
              <div className="text-xs text-slate-500 dark:text-slate-400">{t('acct.dash.streak', 'Days streak')}</div>
            </div>
          </div>
        </div>
        <div className="h-2" />
      </div>
      <B2cTabBar active="home" />
      <ProtoHomeIndicator />
    </ScreenWrap>
  );
}

export function B2cReminder() {
  const { show, t } = useProto();
  const recs: (readonly [string, string, string, string, string, number])[] = [
    [
      t('demo.remind.shop1', 'AutoPro Heliopolis'),
      t('demo.search.r1_dist', '0.8 km'),
      t('demo.remind.stars_1', '4.8'),
      t('demo.track.price_350', 'EGP 350'),
      t('demo.remind.next1', 'Next: 11:30'),
      0,
    ],
    [
      t('demo.remind.shop2', 'QuickFix Nasr City'),
      t('demo.search.r2_dist', '1.6 km'),
      t('demo.remind.stars_2', '4.6'),
      t('demo.remind.price_320', 'EGP 320'),
      t('demo.remind.next2', 'Next: 12:15'),
      1,
    ],
    [
      t('demo.remind.shop3', 'Toyota Authorized'),
      t('demo.search.r4_dist', '2.4 km'),
      t('demo.remind.stars_3', '4.9'),
      t('demo.remind.price_520', 'EGP 520'),
      t('demo.remind.next3', 'Next: 14:00'),
      2,
    ],
  ];
  return (
    <ScreenWrap id="b2c-reminder">
      <ProtoStatusBar />
      <div className="screen-topbar">
        <button type="button" className="funnel-back tap -ml-1" onClick={() => show('b2c-dashboard')}>
          <ProtoIcon name="arrow-left" className="w-5 h-5" />
        </button>
        <div className="font-semibold text-slate-900 dark:text-slate-100">{t('acct.remind.title', 'Oil change')}</div>
        <div className="w-10" />
      </div>
      <div className="flex-1 overflow-y-auto px-5 pt-4 app-surface min-h-0">
        <div className="callout-success p-4 flex items-start gap-3 mb-4 border border-emerald-200/60 dark:border-emerald-700/45">
          <ProtoIcon name="sparkles" className="w-5 h-5 text-emerald-700 dark:text-emerald-400 mt-0.5" />
          <div className="text-sm text-emerald-950 dark:text-emerald-100">
            <b>{t('acct.remind.rec_title', 'Recommended for you')}</b>
            <br />
            <span className="text-xs text-emerald-900/80 dark:text-emerald-200/85">
              {t('acct.remind.rec_sub', 'Based on your car, location, and last oil change (8 Feb).')}
            </span>
          </div>
        </div>
        {recs.map(([n, d, r, p, s, i]) => (
          <div
            key={`${n}-${i}`}
            className={`tap p-3 rounded-2xl border mb-2 ${
              i === 0
                ? 'border-teal-500 bg-teal-50 dark:bg-teal-950/40 dark:border-teal-500'
                : 'border-slate-200 dark:border-slate-600'
            }`}
            onClick={() => show('b2c-shop')}
            onKeyDown={(e) => e.key === 'Enter' && show('b2c-shop')}
            role="button"
            tabIndex={0}
          >
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-xl bg-slate-200 dark:bg-slate-700" />
              <div className="flex-1">
                <div className="flex items-center gap-1 font-semibold text-sm text-slate-900 dark:text-slate-100">
                  {n}
                  {i < 2 ? <ProtoIcon name="badge-check" className="w-4 h-4 text-teal-700 dark:text-teal-400" /> : null}
                </div>
                <div className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                  {d} · <ProtoIcon name="star" className="w-3 h-3 text-amber-500 fill-amber-500 inline -mt-0.5" />
                  {r} · {s}
                </div>
              </div>
              <div className="text-right">
                <div className="font-bold text-sm text-slate-900 dark:text-slate-100">{p}</div>
                {i === 0 ? (
                  <div className="text-[10px] font-bold text-teal-700 dark:text-teal-400 uppercase">{t('acct.remind.best', 'Best')}</div>
                ) : null}
              </div>
            </div>
          </div>
        ))}
        <button type="button" className="btn-primary w-full tap mt-3" onClick={() => show('b2c-slot')}>
          {t('acct.remind.cta', 'Book at AutoPro · EGP 350')}
        </button>
        <div className="text-xs text-center text-slate-500 dark:text-slate-400 mt-2">
          {t('acct.remind.or', 'Or')}{' '}
          <button type="button" className="text-teal-700 dark:text-teal-400 font-semibold tap" onClick={() => show('b2c-map')}>
            {t('acct.remind.map', 'see all on map')}
          </button>
        </div>
      </div>
      <ProtoHomeIndicator />
    </ScreenWrap>
  );
}

export function B2cExpenses() {
  const { show, t } = useProto();
  const bars = [40, 55, 48, 62, 51, 67, 58, 72, 61, 55, 48, 62];
  return (
    <ScreenWrap id="b2c-expenses">
      <ProtoStatusBar />
      <div className="screen-topbar">
        <button type="button" className="funnel-back tap -ml-1" onClick={() => show('b2c-dashboard')}>
          <ProtoIcon name="arrow-left" className="w-5 h-5" />
        </button>
        <div className="font-semibold text-slate-900 dark:text-slate-100">{t('acct.exp.title', 'Expenses')}</div>
        <span className="badge b-amber">{t('acct.exp.phase2', 'Phase 2')}</span>
      </div>
      <div className="flex-1 overflow-y-auto px-5 pt-4 app-surface min-h-0">
        <div className="p-4 rounded-2xl bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 text-white shadow-xl border border-white/10">
          <div className="text-xs uppercase tracking-wider opacity-70">{t('acct.exp.year', 'Spent this year')}</div>
          <div className="text-3xl font-bold mt-1">{t('demo.exp.year_total', 'EGP 7,820')}</div>
          <div className="text-xs opacity-70 mt-1">{t('acct.exp.across', 'Across 14 services · 2 cars')}</div>
        </div>
        <div className="grid grid-cols-2 gap-3 mt-3">
          <div className="p-3 rounded-xl border border-teal-100 dark:border-teal-800/60 bg-teal-50/80 dark:bg-teal-950/40">
            <div className="text-xs text-teal-800 dark:text-teal-200 font-medium">{t('acct.exp.maintenance', 'Maintenance')}</div>
            <div className="font-bold text-teal-950 dark:text-teal-100">{t('demo.exp.maint', 'EGP 4,200')}</div>
          </div>
          <div className="p-3 rounded-xl border border-amber-100 dark:border-amber-800/60 bg-amber-50/80 dark:bg-amber-950/40">
            <div className="text-xs text-amber-800 dark:text-amber-200 font-medium">{t('acct.exp.fuel', 'Fuel')}</div>
            <div className="font-bold text-amber-950 dark:text-amber-100">{t('demo.exp.fuel_amt', 'EGP 3,120')}</div>
          </div>
          <div className="p-3 rounded-xl border border-violet-100 dark:border-violet-800/60 bg-violet-50/80 dark:bg-violet-950/40">
            <div className="text-xs text-violet-800 dark:text-violet-200 font-medium">{t('acct.exp.insurance', 'Insurance')}</div>
            <div className="font-bold text-violet-950 dark:text-violet-100">{t('demo.exp.ins_amt', 'EGP 500')}</div>
          </div>
          <div className="p-3 rounded-xl border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-900">
            <div className="text-xs text-slate-500 dark:text-slate-400">{t('acct.exp.other', 'Other')}</div>
            <div className="font-bold text-slate-900 dark:text-slate-100">{t('demo.exp.other_amt', 'EGP 0')}</div>
          </div>
        </div>
        <div className="label mt-5 mb-2">{t('acct.exp.cpk', 'Cost per km')}</div>
        <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-600 bg-white/50 dark:bg-slate-900/40">
          <div className="text-2xl font-bold text-slate-900 dark:text-slate-100">{t('demo.exp.cpk', 'EGP 0.84')}</div>
          <div className="text-xs text-slate-500 dark:text-slate-400">{t('acct.exp.rolling', 'Corolla · rolling 3 months')}</div>
          <div className="h-20 mt-2 bg-slate-50 dark:bg-slate-800/90 rounded flex items-end gap-1 p-1">
            {bars.map((h, i) => (
              <div
                key={i}
                className={`flex-1 rounded-t ${i % 3 === 0 ? 'bg-teal-500/85' : i % 3 === 1 ? 'bg-cyan-500/80' : 'bg-indigo-400/85'}`}
                style={{ height: `${h}%` }}
              />
            ))}
          </div>
        </div>
        <div className="p-4 rounded-xl bg-amber-50 dark:bg-amber-950/40 border border-amber-100 dark:border-amber-800/60 mt-4 text-xs text-amber-900 dark:text-amber-100">
          <b>{t('acct.exp.devnote_label', 'Dev note:')}</b>{' '}
          {t('acct.exp.devnote', 'This is a Phase 2 feature included here for spec completeness. Ship Phase 1 without it.')}
        </div>
      </div>
      <ProtoHomeIndicator />
    </ScreenWrap>
  );
}

