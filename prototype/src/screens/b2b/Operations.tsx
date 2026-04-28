import { ProtoFunnelProgress, ProtoHomeIndicator, ProtoStatusBar } from '../../components/proto/Chrome';
import { BrandLogo } from '../../components/proto/BrandLogo';
import { ProtoIcon } from '../../components/proto/Icon';
import { B2bTabBar, B2bTopbarMobile, OnboardStepper } from '../../components/proto/TabBars';
import { useProto } from '../../context/ProtoContext';
import { ScreenWrap } from '../shared/ScreenWrap';

export function B2bDashboard() {
  const { show, t } = useProto();
  const lineUp = [
    [t('demo.slot.t1100', '11:00'), t('demo.customer.youssef_s', 'Youssef S.'), t('demo.b2b.svc.oil_std', 'Oil (std)'), 'new', 'b-blue', true],
    [t('demo.slot.t1000', '10:00'), t('demo.customer.karim_h', 'Karim H.'), t('demo.b2b.svc.brake_pads', 'Brake pads'), 'in_progress', 'b-amber', true],
    [t('demo.slot.t0900', '09:00'), t('demo.customer.layla_m', 'Layla M.'), t('demo.b2b.svc.oil_filter', 'Oil+filter'), 'done', 'b-green', true],
  ] as const;
  const lineupStatus = (k: string) =>
    k === 'new'
      ? t('b2b.ops.new', 'New')
      : k === 'in_progress'
        ? t('b2b.ops.in_progress', 'In progress')
        : t('b2b.ops.done', 'Done');
  return (
    <ScreenWrap id="b2b-dashboard">
      <ProtoStatusBar />
      <div className="flex-1 flex flex-col min-h-0 app-surface">
        <B2bTopbarMobile title={t('b2b.top.today', 'AutoPro · Today')} />
        <div className="flex-1 overflow-y-auto p-3 space-y-3 min-h-0">
          <div className="grid grid-cols-2 gap-2">
            <div className="kpi-tile kpi-tile--teal p-3 pl-4">
              <div className="text-[10px] text-slate-500 dark:text-slate-400 font-semibold uppercase tracking-wide">{t('b2b.dash.kpi.book', 'Bookings')}</div>
              <div className="text-2xl font-bold text-slate-900 dark:text-slate-100">{t('demo.b2b.kpi.bookings_n', '7')}</div>
              <div className="text-[10px] text-emerald-600 dark:text-emerald-400 font-semibold">{t('b2b.dash.kpi.vs_y', '+2 vs yesterday')}</div>
            </div>
            <div className="kpi-tile kpi-tile--violet p-3 pl-4">
              <div className="text-[10px] text-slate-500 dark:text-slate-400 font-semibold uppercase tracking-wide">{t('b2b.dash.kpi.rev', 'Revenue')}</div>
              <div className="text-2xl font-bold text-slate-900 dark:text-slate-100">{t('demo.b2b.kpi.revenue_k', '3.4k')}</div>
              <div className="text-[10px] text-violet-600 dark:text-violet-400 font-medium">{t('b2b.dash.kpi.egp', 'EGP')}</div>
            </div>
            <div className="kpi-tile kpi-tile--amber p-3 pl-4">
              <div className="text-[10px] text-slate-500 dark:text-slate-400 font-semibold uppercase tracking-wide">{t('b2b.dash.kpi.rating', 'Rating')}</div>
              <div className="text-2xl font-bold text-slate-900 dark:text-slate-100">{t('demo.search.r1_stars', '4.8')}</div>
              <div className="text-[10px] text-amber-700 dark:text-amber-300">
                {t('demo.b2b.kpi.rev_n', '62')} {t('b2b.dash.kpi.rev_suffix', 'rev.')}
              </div>
            </div>
            <div className="kpi-tile kpi-tile--emerald p-3 pl-4">
              <div className="text-[10px] text-slate-500 dark:text-slate-400 font-semibold uppercase tracking-wide">{t('b2b.dash.kpi.accept', 'Accept')}</div>
              <div className="text-2xl font-bold text-slate-900 dark:text-slate-100">{t('demo.b2b.kpi.accept_pct', '96%')}</div>
              <div className="text-[10px] text-emerald-600 dark:text-emerald-400 font-semibold">{t('b2b.dash.kpi.ok', 'OK')}</div>
            </div>
          </div>
          <div className="app-panel p-3">
            <div className="flex justify-between items-center mb-2">
              <div className="font-bold text-sm text-slate-900 dark:text-slate-100">{t('b2b.dash.lineup', 'Today’s line-up')}</div>
              <span className="text-xs text-slate-500 dark:text-slate-400 flex items-center gap-1">
                <span className="dot bg-red-500" />
                {t('demo.b2b.dash_new_n', '1')} {t('b2b.dash.new', 'new')}
              </span>
            </div>
            {lineUp.map(([time, cust, svc, label, badge, act]) => (
              <div
                key={time + cust}
                className="tap border border-slate-100 dark:border-slate-600/90 rounded-xl p-2.5 mb-2 flex justify-between items-center bg-gradient-to-r from-white to-slate-50/80 dark:from-slate-900 dark:to-slate-800/95 hover:border-teal-200/60 dark:hover:border-teal-500/35"
                onClick={act ? () => show('b2b-booking') : undefined}
                onKeyDown={act ? (e) => e.key === 'Enter' && show('b2b-booking') : undefined}
                role={act ? 'button' : undefined}
                tabIndex={act ? 0 : undefined}
              >
                <div>
                  <div className="text-xs font-bold text-slate-900 dark:text-slate-100">{time}</div>
                  <div className="text-sm font-semibold text-slate-900 dark:text-slate-100">{cust}</div>
                  <div className="text-xs text-slate-500 dark:text-slate-400">{svc}</div>
                </div>
                <span className={`badge ${badge} text-[10px]`}>{lineupStatus(label)}</span>
              </div>
            ))}
            <div className="text-center text-xs text-teal-700 dark:text-teal-400 font-semibold pt-1 tap" onClick={() => show('b2b-bookings')}>
              {t('b2b.dash.full_cal', 'Full calendar')}
            </div>
          </div>
          <div className="app-panel p-3">
            <div className="font-bold text-sm mb-2 text-slate-900 dark:text-slate-100">{t('b2b.dash.mech', 'Mechanics')}</div>
            {(
              [
                [t('demo.b2b.mech_ahmed', 'Ahmed'), 2, 3],
                [t('demo.b2b.mech_hassan', 'Hassan'), 3, 3],
                [t('demo.b2b.mech_karim', 'Karim'), 0, 3],
              ] as const
            ).map(([n, b, cap], ix) => (
              <div key={n} className="mb-2 last:mb-0">
                <div className="flex justify-between text-xs">
                  <span className="font-semibold text-slate-900 dark:text-slate-100">{n}</span>
                  <span className="text-slate-500 dark:text-slate-400">
                    {t(
                      ix === 0 ? 'demo.b2b.mech_slots_1' : ix === 1 ? 'demo.b2b.mech_slots_2' : 'demo.b2b.mech_slots_3',
                      `${b}/${cap}`,
                    )}
                  </span>
                </div>
                <div className="h-1.5 rounded-full bg-slate-100 dark:bg-slate-800/80 overflow-hidden mt-0.5">
                  <div className="h-full bg-teal-600" style={{ width: `${(b / cap) * 100}%` }} />
                </div>
              </div>
            ))}
          </div>
          <div className="rounded-xl p-3 text-xs bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-950/40 dark:to-orange-950/35 border border-amber-200/70 dark:border-amber-800/50 shadow-sm text-amber-950 dark:text-amber-100">
            {t('demo.b2b.rev_need_banner_n', '3')} {t('b2b.dash.rev_banner', 'reviews')} {t('b2b.dash.rev_need', 'need a reply.')}{' '}
            <span className="text-teal-800 dark:text-teal-300 font-semibold tap" onClick={() => show('b2b-reviews')}>
              {t('b2b.dash.open', 'Open')}
            </span>
          </div>
        </div>
      </div>
      <B2bTabBar active="dashboard" />
      <ProtoHomeIndicator />
    </ScreenWrap>
  );
}

export function B2bBookings() {
  const { show, t } = useProto();
  const days = [
    t('demo.b2b.cal_d1', 'S13'),
    t('demo.b2b.cal_d2', 'M14'),
    t('demo.b2b.cal_d3', 'T15'),
    t('demo.b2b.cal_d4', 'W16'),
    t('demo.b2b.cal_d5', 'T17'),
    t('demo.b2b.cal_d6', 'T18'),
    t('demo.b2b.cal_d7', 'F19'),
  ];
  const list = [
    [t('demo.slot.t1100', '11:00'), t('demo.customer.youssef_s', 'Youssef S.'), t('demo.b2b.svc.oil_std', 'Oil (std)'), 'b-blue', 'new'],
    [t('demo.slot.t1000', '10:00'), t('demo.customer.karim_h', 'Karim H.'), t('demo.b2b.svc.brake_pads', 'Brake pads'), 'b-amber', 'in_progress'],
    [t('demo.slot.t0900', '09:00'), t('demo.customer.layla_m', 'Layla M.'), t('demo.b2b.svc.oil_filter', 'Oil+filter'), 'b-green', 'done'],
  ] as const;
  const listStatus = (k: string) =>
    k === 'new'
      ? t('b2b.ops.new', 'New')
      : k === 'in_progress'
        ? t('b2b.ops.in_progress', 'In progress')
        : t('b2b.ops.done', 'Done');
  return (
    <ScreenWrap id="b2b-bookings">
      <ProtoStatusBar />
      <div className="flex-1 flex flex-col min-h-0 app-surface">
        <B2bTopbarMobile title={t('b2b.cal.title', 'Bookings')} />
        <div className="px-3 pt-2 flex items-center justify-between">
          <div className="rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-600 p-0.5 flex text-xs font-semibold shadow-sm">
            <span className="px-2.5 py-1 rounded-lg bg-gradient-to-r from-teal-600 to-cyan-600 text-white shadow-sm">{t('b2b.cal.week', 'Week')}</span>
            <span className="px-2.5 py-1 rounded-lg text-slate-500 dark:text-slate-400">{t('b2b.cal.day', 'Day')}</span>
          </div>
          <div className="flex items-center gap-1">
            <button type="button" className="w-8 h-8 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-600 flex items-center justify-center text-slate-700 dark:text-slate-300">
              <ProtoIcon name="chevron-left" className="w-4 h-4" />
            </button>
            <div className="text-xs font-semibold text-slate-900 dark:text-slate-100">{t('b2b.cal.range', 'Apr 13 – 19')}</div>
            <button type="button" className="w-8 h-8 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-600 flex items-center justify-center text-slate-700 dark:text-slate-300">
              <ProtoIcon name="chevron-right" className="w-4 h-4" />
            </button>
          </div>
        </div>
        <div className="flex-1 overflow-y-auto p-3">
          <div className="overflow-x-auto pb-2 -mx-1">
            <div className="inline-flex gap-1 min-w-max">
              {days.map((d, i) => (
                <div
                  key={d}
                  className={`w-10 text-center p-1.5 rounded-lg text-xs font-semibold ${
                    i === 5
                      ? 'bg-gradient-to-br from-teal-600 to-emerald-600 text-white shadow-md'
                      : 'bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-600 text-slate-600 dark:text-slate-400'
                  }`}
                >
                  {d}
                </div>
              ))}
            </div>
          </div>
          <button type="button" className="btn-primary w-full text-xs py-2.5 mb-3">
            {t('b2b.cal.manual', '+ Manual booking')}
          </button>
          <div className="space-y-2">
            {list.map(([time, cust, svc, badge, l]) => (
              <div
                key={time}
                className="tap bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-600 rounded-xl p-3 flex justify-between"
                onClick={() => show('b2b-booking')}
                onKeyDown={(e) => e.key === 'Enter' && show('b2b-booking')}
                role="button"
                tabIndex={0}
              >
                <div>
                  <div className="text-xs text-slate-500 dark:text-slate-400">{time}</div>
                  <div className="text-sm font-semibold text-slate-900 dark:text-slate-100">{cust}</div>
                  <div className="text-xs text-slate-500 dark:text-slate-400">{svc}</div>
                </div>
                <span className={`badge ${badge} text-[10px] self-start`}>{listStatus(l)}</span>
              </div>
            ))}
          </div>
          <div className="mt-3 text-[10px] text-slate-500 dark:text-slate-400 flex flex-wrap gap-2">
            <span className="flex items-center gap-0.5">
              <span className="dot bg-blue-500" />
              {t('b2b.cal.legend.new', 'New')}
            </span>
            <span className="flex items-center gap-0.5">
              <span className="dot bg-amber-500" />
              {t('b2b.cal.legend.active', 'Active')}
            </span>
            <span className="flex items-center gap-0.5">
              <span className="dot bg-green-500" />
              {t('b2b.cal.legend.done', 'Done')}
            </span>
          </div>
        </div>
      </div>
      <B2bTabBar active="bookings" />
      <ProtoHomeIndicator />
    </ScreenWrap>
  );
}

export function B2bBooking() {
  const { show, t } = useProto();
  const mechs = [
    [t('demo.b2b.mech_ahmed', 'Ahmed'), 2, 3, 0],
    [t('demo.b2b.mech_hassan', 'Hassan'), 3, 3, 1],
    [t('demo.b2b.mech_karim', 'Karim'), 0, 3, 2],
  ];
  return (
    <ScreenWrap id="b2b-booking">
      <ProtoStatusBar />
      <div className="flex-1 flex flex-col min-h-0 app-surface">
        <div className="b2b-topbar h-12 flex items-center px-3 flex-shrink-0">
          <button
            type="button"
            className="tap w-9 h-9 flex items-center justify-center -ml-1 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800/80"
            onClick={() => show('b2b-bookings')}
          >
            <ProtoIcon name="arrow-left" className="w-5 h-5" />
          </button>
          <div className="font-semibold text-sm truncate flex-1 text-slate-900 dark:text-slate-100">{t('demo.track.booking_id', '#CC-4A1F9')}</div>
        </div>
        <div className="flex-1 overflow-y-auto p-3 space-y-3">
          <div className="app-panel p-4 ring-1 ring-indigo-500/10">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="badge b-indigo">{t('b2b.booking.badge', 'New · 14m')}</span>
              <span className="text-xs text-slate-500 dark:text-slate-400">{t('b2b.booking.when', 'Sat 18 Apr · 11:00')}</span>
            </div>
            <div className="text-xl font-bold mt-2 text-slate-900 dark:text-slate-100">{t('b2b.on3.s1', 'Oil change (standard)')}</div>
            <div className="text-sm text-slate-500 dark:text-slate-400">{t('b2b.booking.vehicle', 'Corolla 2019 · 82,450 km')}</div>
            <div className="mt-2 flex justify-between">
              <span className="text-xs text-slate-500 dark:text-slate-400">{t('b2b.booking.quote', 'Quote')}</span>
              <span className="text-lg font-bold text-slate-900 dark:text-slate-100">{t('demo.track.price_350', 'EGP 350')}</span>
            </div>
            <div className="flex flex-col gap-2 mt-3">
              <button type="button" className="btn-accent w-full shadow-md shadow-orange-500/20">
                {t('b2b.booking.accept', 'Accept booking')}
              </button>
              <button type="button" className="btn-ghost w-full text-sm border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-900">
                {t('b2b.booking.propose', 'Propose new time')}
              </button>
              <button type="button" className="btn-ghost w-full text-sm text-red-600 dark:text-red-400 bg-red-50 dark:bg-red-950/35 border border-red-100 dark:border-red-900/50">
                {t('b2b.booking.reject', 'Reject')}
              </button>
            </div>
          </div>
          <div className="app-panel p-4">
            <div className="label mb-2">{t('b2b.booking.customer', 'Customer')}</div>
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-teal-100 to-cyan-100 dark:from-teal-950/55 dark:to-cyan-950/40 text-teal-900 dark:text-teal-100 font-bold flex items-center justify-center border border-teal-200/60 dark:border-teal-700/50">
                {t('demo.b2b.customer_ini', 'YS')}
              </div>
              <div>
                <div className="font-semibold text-sm text-slate-900 dark:text-slate-100">{t('demo.customer.youssef_salem', 'Youssef Salem')}</div>
                <div className="text-[10px] text-slate-500 dark:text-slate-400">{t('b2b.booking.bookings_count', '4 bookings')}</div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-2 mt-3">
              <button type="button" className="btn-ghost text-xs py-2">
                <ProtoIcon name="phone" className="w-3.5 h-3.5 inline" /> {t('b2b.booking.call', 'Call')}
              </button>
              <button type="button" className="btn-ghost text-xs py-2">
                <ProtoIcon name="message-circle" className="w-3.5 h-3.5 inline" /> {t('b2b.booking.message', 'Message')}
              </button>
            </div>
          </div>
          <div className="app-panel p-4">
            <div className="label mb-2">{t('b2b.booking.assign', 'Assign mechanic')}</div>
            {mechs.map(([n, b, cap, ix]) => (
              <div
                key={n}
                className={`flex items-center justify-between p-2 rounded-xl border ${
                  ix === 2
                    ? 'border-teal-500 bg-teal-50 dark:bg-teal-950/40 dark:border-teal-500'
                    : 'border-slate-200 dark:border-slate-600'
                } mb-2 last:mb-0`}
              >
                <div>
                  <div className="text-sm font-semibold text-slate-900 dark:text-slate-100">{n}</div>
                  <div className="text-xs text-slate-500 dark:text-slate-400">
                    {t(
                      ix === 0 ? 'demo.b2b.mech_slots_1' : ix === 1 ? 'demo.b2b.mech_slots_2' : 'demo.b2b.mech_slots_3',
                      `${b}/${cap}`,
                    )}{' '}
                    {t('b2b.booking.slots', 'slots')}
                  </div>
                </div>
                {ix === 2 ? (
                  <div className="w-2.5 h-2.5 rounded-full bg-teal-600" />
                ) : (
                  <div className="w-4 h-4 rounded-full border-2 border-slate-200 dark:border-slate-600" />
                )}
              </div>
            ))}
          </div>
          <div className="app-panel p-4">
            <div className="label mb-2">{t('b2b.booking.invoice', 'Invoice (draft)')}</div>
            <div className="text-sm flex justify-between py-1 text-slate-900 dark:text-slate-100">
              <span>{t('b2b.booking.line_oil', 'Oil (std)')}</span>
              <span>{t('demo.track.price_350', 'EGP 350')}</span>
            </div>
            <div className="text-xs text-slate-400 dark:text-slate-500 flex justify-between py-1">
              {t('b2b.booking.comm', 'Commission 10%')}
              <span>{t('demo.b2b.comm_deduct', '−35')}</span>
            </div>
            <div className="divider my-2" />
            <div className="font-bold flex justify-between text-slate-900 dark:text-slate-100">
              <span>{t('b2b.booking.payout_label', 'Your payout')}</span>
              <span>{t('demo.pay.total_315', 'EGP 315')}</span>
            </div>
          </div>
        </div>
      </div>
      <ProtoHomeIndicator />
    </ScreenWrap>
  );
}

export function B2bCatalog() {
  const { show, t } = useProto();
  const fixed = t('b2b.cat.fixed', 'Fixed');
  const rows: [string, string, string, string, boolean][] = [
    [t('demo.b2b.cat.oil_std', 'Oil (standard)'), t('demo.shop.svc1_price', 'EGP 350'), fixed, t('demo.b2b.cat.book_mo_1', '62'), true],
    [t('demo.b2b.cat.brake', 'Brake pads'), t('demo.shop.svc2_price', 'EGP 650'), fixed, t('demo.b2b.cat.book_mo_2', '22'), true],
    [t('demo.b2b.cat.ac', 'AC recharge'), t('demo.shop.svc3_price', 'EGP 450'), fixed, t('demo.b2b.cat.book_mo_3', '34'), true],
  ];
  return (
    <ScreenWrap id="b2b-catalog">
      <ProtoStatusBar />
      <div className="flex-1 flex flex-col min-h-0 app-surface">
        <B2bTopbarMobile title={t('b2b.cat.nav', 'Catalog')} />
        <div className="px-3 flex gap-2 overflow-x-auto no-scrollbar py-2">
          <span className="chip on flex-shrink-0">{t('b2b.cat.chip.all', 'All')}</span>
          <span className="chip flex-shrink-0">{t('b2b.cat.chip.oil', 'Oil')}</span>
          <span className="chip flex-shrink-0">{t('b2b.cat.chip.brakes', 'Brakes')}</span>
          <span className="chip flex-shrink-0">{t('b2b.cat.chip.ac', 'AC')}</span>
        </div>
        <div className="flex-1 overflow-y-auto p-3 space-y-2">
          <div className="flex gap-2">
            <button type="button" className="btn-ghost text-xs flex-1 py-2">
              {t('b2b.cat.import', 'Import')}
            </button>
            <button type="button" className="btn-primary text-xs flex-1 py-2">
              {t('b2b.cat.add_svc', '+ Service')}
            </button>
          </div>
          {rows.map(([s, p, priceType, b, live]) => (
            <div
              key={s}
              className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-600/90 rounded-xl p-3 flex justify-between items-start shadow-sm ring-1 ring-violet-500/5"
            >
              <div>
                <div className="text-sm font-semibold text-slate-900 dark:text-slate-100">{s}</div>
                <div className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                  <span className="badge b-slate">{priceType}</span> {b}
                  {t('b2b.cat.per_mo', '/mo')}
                </div>
                <div className="text-sm font-bold mt-1 text-slate-900 dark:text-slate-100">{p}</div>
              </div>
              <div className={`w-9 h-5 rounded-full ${live ? 'bg-teal-600' : 'bg-slate-300 dark:bg-slate-600'}`}>
                <div className="w-4 h-4 m-0.5 rounded-full bg-white dark:bg-slate-900 float-right" />
              </div>
            </div>
          ))}
        </div>
      </div>
      <B2bTabBar active="catalog" />
      <ProtoHomeIndicator />
    </ScreenWrap>
  );
}

export function B2bReviews() {
  const { show, t } = useProto();
  const reviews: [string, string, number, string, string][] = [
    [
      t('demo.b2b.rev1_name', 'Mohamed H.'),
      t('demo.b2b.rev1_ini', 'MH'),
      5,
      t('demo.b2b.rev1_txt', 'Great service & honest pricing.'),
      'responded',
    ],
    [
      t('demo.b2b.rev2_name', 'Sara A.'),
      t('demo.b2b.rev2_ini', 'SA'),
      4,
      t('demo.b2b.rev2_txt', 'Good, slight wait.'),
      'pending',
    ],
  ];
  return (
    <ScreenWrap id="b2b-reviews">
      <ProtoStatusBar />
      <div className="flex-1 flex flex-col min-h-0 app-surface">
        <div className="b2b-topbar h-12 flex items-center px-2 flex-shrink-0">
          <button
            type="button"
            className="tap w-9 h-9 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800/80"
            onClick={() => show('b2b-dashboard')}
          >
            <ProtoIcon name="arrow-left" className="w-5 h-5" />
          </button>
          <div className="font-semibold text-sm text-slate-900 dark:text-slate-100">{t('b2b.rev.title', 'Reviews')}</div>
        </div>
        <div className="flex-1 overflow-y-auto p-3 space-y-3">
          <div className="kpi-tile kpi-tile--amber p-3 pl-4">
            <div className="text-3xl font-bold text-slate-900 dark:text-slate-100">
              {t('demo.search.r1_stars', '4.8')}{' '}
              <span className="text-sm text-slate-500 dark:text-slate-400 font-normal">{t('b2b.rev.reviews_n', '312 reviews')}</span>
            </div>
            <div className="text-xs text-amber-800 dark:text-amber-300 font-semibold mt-1">{t('b2b.rev.need_n', '24 need reply')}</div>
          </div>
          <div className="flex gap-2 overflow-x-auto no-scrollbar">
            <span className="chip on flex-shrink-0">{t('b2b.rev.chip.all', 'All')}</span>
            <span className="chip flex-shrink-0">{t('b2b.rev.chip.pending', 'Pending')}</span>
            <span className="chip flex-shrink-0">{t('b2b.rev.chip.5', '5★')}</span>
          </div>
          <div className="app-panel divide-y divide-slate-100 dark:divide-slate-700 overflow-hidden p-0">
            {reviews.map(([n, ini, r, txt, state]) => (
              <div key={n} className="p-3">
                <div className="flex gap-2">
                  <div className="w-8 h-8 rounded-full bg-teal-100 dark:bg-teal-950/55 text-xs font-bold text-teal-800 dark:text-teal-200 flex items-center justify-center">
                    {ini}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-start">
                      <span className="text-sm font-semibold text-slate-900 dark:text-slate-100">{n}</span>
                      {state === 'pending' ? <span className="badge b-amber text-[9px]">{t('b2b.rev.reply', 'Reply')}</span> : null}
                    </div>
                    <div className="flex gap-0.5 mt-0.5">
                      {[1, 2, 3, 4, 5].map((i) => (
                        <ProtoIcon
                          key={i}
                          name="star"
                          className={`w-3 h-3 ${i <= r ? 'text-amber-500 fill-amber-500' : 'text-slate-300 dark:text-slate-600'}`}
                        />
                      ))}
                    </div>
                    <div className="text-sm mt-1 text-slate-700 dark:text-slate-300">{txt}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <ProtoHomeIndicator />
    </ScreenWrap>
  );
}

export function B2bPayouts() {
  const { show, t } = useProto();
  const recent = [
    [t('demo.b2b.pay.row1_date', '11 Apr'), t('demo.b2b.pay.row1_amt', 'EGP 7,578'), 'paid'],
    [t('demo.b2b.pay.row2_date', '4 Apr'), t('demo.b2b.pay.row2_amt', 'EGP 8,892'), 'paid'],
    [t('demo.b2b.pay.row3_date', '28 Mar'), t('demo.b2b.pay.row3_amt', 'EGP 9,486'), 'paid'],
  ] as const;
  return (
    <ScreenWrap id="b2b-payouts">
      <ProtoStatusBar />
      <div className="flex-1 flex flex-col min-h-0 app-surface">
        <div className="b2b-topbar h-12 flex items-center px-2 flex-shrink-0">
          <button
            type="button"
            className="tap w-9 h-9 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800/80"
            onClick={() => show('b2b-more')}
          >
            <ProtoIcon name="arrow-left" className="w-5 h-5" />
          </button>
          <div className="font-semibold text-sm pl-1 text-slate-900 dark:text-slate-100">
            {t('b2b.pay.title', 'Payouts')}{' '}
            <span className="badge b-amber text-[9px] ml-1">{t('common.phase_p2', 'P2')}</span>
          </div>
        </div>
        <div className="flex-1 overflow-y-auto p-3 space-y-3">
          <div className="kpi-tile kpi-tile--teal p-3 pl-4 text-center">
            <div className="text-xs text-slate-500 dark:text-slate-400">{t('b2b.pay.available', 'Available')}</div>
            <div className="text-2xl font-bold text-slate-900 dark:text-slate-100">{t('demo.b2b.pay.available_amt', 'EGP 12,840')}</div>
            <button type="button" className="btn-primary w-full text-xs py-2 mt-2">
              {t('b2b.pay.request', 'Request payout')}
            </button>
          </div>
          <div className="grid grid-cols-2 gap-2">
            <div className="kpi-tile kpi-tile--violet p-2 pl-3 text-center text-xs">
              {t('b2b.pay.gross_mo', 'Gross (mo)')}
              <div className="font-bold text-sm mt-0.5 text-slate-900 dark:text-slate-100">
                {t('demo.b2b.pay.gross_amt', '42,310')}
              </div>
            </div>
            <div className="kpi-tile kpi-tile--amber p-2 pl-3 text-center text-xs">
              {t('b2b.pay.comm_pct', 'Comm. 10%')}
              <div className="font-bold text-sm mt-0.5 text-slate-900 dark:text-slate-100">
                {t('demo.b2b.pay.comm_amt', '4,231')}
              </div>
            </div>
          </div>
          <div className="text-xs text-slate-500 dark:text-slate-400">{t('b2b.pay.recent', 'Recent')}</div>
          {recent.map(([d, pay, s]) => (
            <div key={d} className="app-panel p-3 flex justify-between text-sm">
              <div>
                <div className="font-semibold text-slate-900 dark:text-slate-100">{d}</div>
                <div className="text-xs text-slate-500 dark:text-slate-400">{t('b2b.pay.to_bank', 'Payout to bank')}</div>
              </div>
              <div className="text-right">
                <div className="font-bold text-slate-900 dark:text-slate-100">{pay}</div>
                <span className={`badge ${s === 'paid' ? 'b-green' : 'b-amber'} text-[9px]`}>
                  {s === 'paid' ? t('b2b.pay.status.paid', 'paid') : s === 'pending' ? t('b2b.pay.status.pending', 'pending') : s}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <ProtoHomeIndicator />
    </ScreenWrap>
  );
}

export function B2bMore() {
  const { show, t } = useProto();
  return (
    <ScreenWrap id="b2b-more">
      <ProtoStatusBar />
      <div className="flex-1 flex flex-col min-h-0 app-surface">
        <B2bTopbarMobile title={t('b2b.more.title', 'More')} />
        <div className="flex-1 overflow-y-auto p-3">
          <div className="text-xs text-slate-500 dark:text-slate-400 mb-2">{t('b2b.more.account', 'Account')}</div>
          <div className="app-panel divide-y divide-slate-100 dark:divide-slate-700 overflow-hidden p-0 shadow-md">
            <button
              type="button"
              className="w-full p-3 flex items-center justify-between text-left tap hover:bg-amber-50/50 dark:hover:bg-slate-800/80"
              onClick={() => show('b2b-reviews')}
            >
              <span className="flex items-center gap-2 text-sm font-medium">
                <ProtoIcon name="star" className="w-4 h-4 text-amber-500" /> {t('b2b.more.reviews', 'Reviews')}
              </span>
              <ProtoIcon name="chevron-right" className="w-4 h-4 text-slate-400 dark:text-slate-500" />
            </button>
            <button
              type="button"
              className="w-full p-3 flex items-center justify-between text-left tap hover:bg-teal-50/50 dark:hover:bg-teal-950/25"
              onClick={() => show('b2b-payouts')}
            >
              <span className="flex items-center gap-2 text-sm font-medium">
                <ProtoIcon name="wallet" className="w-4 h-4 text-teal-600 dark:text-teal-400" /> {t('b2b.more.payouts', 'Payouts')}
              </span>
              <span className="badge b-amber text-[9px]">{t('common.phase_p2', 'P2')}</span>
            </button>
            <div className="p-3 flex items-center justify-between text-slate-400 dark:text-slate-500">
              <span className="flex items-center gap-2 text-sm">
                <ProtoIcon name="users" className="w-4 h-4" /> {t('b2b.more.team', 'Team')}
              </span>
              <span className="text-xs">{t('b2b.more.soon', 'Soon')}</span>
            </div>
            <div className="p-3 flex items-center justify-between text-slate-400 dark:text-slate-500">
              <span className="flex items-center gap-2 text-sm">
                <ProtoIcon name="settings" className="w-4 h-4" /> {t('b2b.more.settings', 'Settings')}
              </span>
              <ProtoIcon name="chevron-right" className="w-4 h-4 text-slate-400 dark:text-slate-500" />
            </div>
          </div>
        </div>
      </div>
      <B2bTabBar active="more" />
      <ProtoHomeIndicator />
    </ScreenWrap>
  );
}

