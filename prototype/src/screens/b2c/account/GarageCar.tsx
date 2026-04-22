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
          className="w-10 h-10 rounded-xl bg-gradient-to-br from-teal-600 to-cyan-600 flex items-center justify-center text-white shadow-md tap"
        >
          <ProtoIcon name="plus" className="w-4 h-4" />
        </button>
      </div>
      <div className="flex-1 overflow-y-auto px-5 pt-4 space-y-3 app-surface min-h-0">
        <div
          className="tap p-4 rounded-2xl text-white shadow-lg shadow-teal-900/25 gradient-garage-primary ring-1 ring-white/20"
          onClick={() => show('b2c-cardetail')}
          onKeyDown={(e) => e.key === 'Enter' && show('b2c-cardetail')}
          role="button"
          tabIndex={0}
        >
          <div className="flex justify-between items-start">
            <div>
              <div className="text-xs uppercase tracking-wider opacity-80">{t('acct.garage.primary', 'Primary')}</div>
              <div className="text-xl font-bold mt-0.5">Toyota Corolla</div>
              <div className="text-sm opacity-80">2019 · 82,450 km · س ب ج 7421</div>
            </div>
            <ProtoIcon name="car" className="w-10 h-10 opacity-70" />
          </div>
          <div className="divider my-3 opacity-30" />
          <div className="grid grid-cols-3 gap-2 text-xs">
            <div>
              <div className="opacity-70">{t('acct.garage.last', 'Last service')}</div>
              <div className="font-semibold mt-0.5">29 Mar · AC</div>
            </div>
            <div>
              <div className="opacity-70">{t('acct.garage.next', 'Next due')}</div>
              <div className="font-semibold mt-0.5">Oil · 1.2k km</div>
            </div>
            <div>
              <div className="opacity-70">{t('acct.garage.spent', 'Spent YTD')}</div>
              <div className="font-semibold mt-0.5">EGP 2,430</div>
            </div>
          </div>
        </div>
        <div className="tap p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-600/90 shadow-sm ring-1 ring-indigo-500/5">
          <div className="flex justify-between items-start">
            <div>
              <div className="font-semibold">Hyundai Tucson</div>
              <div className="text-sm text-slate-500 dark:text-slate-400">2022 · 24,100 km</div>
            </div>
            <ProtoIcon name="chevron-right" className="w-5 h-5 text-slate-400 dark:text-slate-500" />
          </div>
        </div>
        <button
          type="button"
          className="tap w-full p-4 rounded-2xl border-2 border-dashed border-teal-300/80 dark:border-teal-600/50 text-teal-800 dark:text-teal-200 bg-teal-50/40 dark:bg-teal-950/35 text-sm font-semibold flex items-center justify-center gap-2"
        >
          <ProtoIcon name="plus" className="w-4 h-4" />
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
  const hist = [
    ['29 Mar', 'AC recharge', 'QuickFix Nasr City', 'EGP 450', true],
    ['8 Feb', 'Oil + filter', 'AutoPro Heliopolis', 'EGP 520', true],
    ['12 Dec', 'Front brake pads', 'Toyota Authorized', 'EGP 950', true],
    ['3 Nov', 'Tire rotation', 'Cairo Motors (manual entry)', 'EGP 120', false],
  ] as const;
  const stats = [
    [t('acct.card.stat.mileage', 'Mileage'), '82,450 km', 'cyan'],
    [t('acct.card.stat.bookings', 'Bookings'), '14', 'violet'],
    [t('acct.card.stat.spent', 'Spent'), 'EGP 7,820', 'amber'],
  ] as const;
  return (
    <ScreenWrap id="b2c-cardetail">
      <ProtoStatusBar />
      <div className="screen-topbar">
        <button type="button" className="funnel-back tap -ml-1" onClick={() => show('b2c-garage')}>
          <ProtoIcon name="arrow-left" className="w-5 h-5" />
        </button>
        <div className="font-semibold text-slate-900 dark:text-slate-100 truncate">{t('acct.card.title_bar', 'Toyota Corolla 2019')}</div>
        <button type="button" className="tap w-10 h-10 rounded-xl bg-violet-50 text-violet-700 flex items-center justify-center">
          <ProtoIcon name="pencil" className="w-5 h-5" />
        </button>
      </div>
      <div className="flex-1 overflow-y-auto px-5 pt-4 app-surface min-h-0">
        <div className="grid grid-cols-3 gap-2 mb-5">
          {stats.map(([l, v, tone]) => (
            <div
              key={l}
              className={`p-3 rounded-xl text-center ${
                tone === 'cyan'
                  ? 'bg-cyan-50 text-cyan-900'
                  : tone === 'violet'
                    ? 'bg-violet-50 text-violet-900'
                    : 'bg-amber-50 text-amber-900'
              }`}
            >
              <div className="text-[10px] font-semibold uppercase tracking-wide opacity-80">{l}</div>
              <div className="font-bold text-sm mt-0.5">{v}</div>
            </div>
          ))}
        </div>
        <div className="label mb-2">{t('acct.card.reminders', 'Reminders')}</div>
        <div className="p-3 rounded-xl bg-gradient-to-r from-orange-50 to-amber-50 border border-orange-200/80 flex items-start gap-3 shadow-sm">
          <div className="w-9 h-9 rounded-full bg-gradient-to-br from-orange-500 to-amber-500 flex items-center justify-center flex-shrink-0 shadow-md">
            <ProtoIcon name="bell" className="w-4 h-4 text-white" />
          </div>
          <div className="flex-1">
            <div className="font-semibold text-sm">{t('acct.card.oil_due', 'Oil change due in 1,200 km')}</div>
            <div className="text-xs text-slate-600 dark:text-slate-400 mt-0.5">{t('acct.card.oil_sub', 'Based on your last change on 8 Feb')}</div>
          </div>
          <button type="button" className="text-xs font-semibold text-orange-700 tap" onClick={() => show('b2c-map')}>
            {t('acct.card.book', 'Book')}
          </button>
        </div>
        <div className="label mt-5 mb-2">{t('acct.card.history', 'Service history')}</div>
        <div className="space-y-3">
          {hist.map(([d, s, shop, p, auto]) => (
            <div
              key={d + s}
              className="p-3 rounded-xl border border-slate-200 dark:border-slate-600/90 bg-white dark:bg-slate-900 shadow-sm"
            >
              <div className="flex justify-between items-start">
                <div>
                  <div className="font-semibold text-sm">{s}</div>
                  <div className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">{shop}</div>
                </div>
                <div className="text-right">
                  <div className="font-semibold text-sm">{p}</div>
                  <div className="text-xs text-slate-500 dark:text-slate-400">{d}</div>
                </div>
              </div>
              {auto ? (
                <div className="mt-2 text-[10px] uppercase tracking-wider text-teal-700 font-semibold flex items-center gap-1">
                  <ProtoIcon name="zap" className="w-3 h-3" />
                  {t('acct.card.auto', 'Auto-logged from booking')}
                </div>
              ) : (
                <div className="mt-2 text-[10px] uppercase tracking-wider text-slate-400 dark:text-slate-500 font-semibold">
                  {t('acct.card.manual', 'Manual entry')}
                </div>
              )}
            </div>
          ))}
        </div>
        <button type="button" className="mt-4 w-full py-3 rounded-xl border border-slate-200 dark:border-slate-600 text-sm font-semibold tap">
          {t('acct.card.add_manual', '+ Add manual entry')}
        </button>
        <div className="h-6" />
      </div>
      <ProtoHomeIndicator />
    </ScreenWrap>
  );
}

