import { B2cTabBar } from '../../../components/proto/TabBars';
import { ProtoHomeIndicator, ProtoStatusBar } from '../../../components/proto/Chrome';
import { ProtoIcon } from '../../../components/proto/Icon';
import { B2cMapMainColumn } from '../../../components/proto/MapColumn';
import { useProto } from '../../../context/ProtoContext';
import { ScreenWrap } from '../../shared/ScreenWrap';

export function B2cMarketplace() {
  const { t } = useProto();
  const rows: [string, string, string, string, string][] = [
    [
      t('demo.market.p1_title', 'Bosch cabin filter'),
      t('demo.market.p1_price', 'EGP 185'),
      t('demo.market.p1_star', '4.7'),
      t('demo.market.p1_extra', '1.2k sold'),
      t('demo.market.p1_seller', 'Cairo Parts'),
    ],
    [
      t('demo.market.p2_title', 'Michelin 205/55 R16'),
      t('demo.market.p2_price', 'EGP 2,890'),
      t('demo.market.p2_star', '4.8'),
      t('demo.market.p2_extra', 'In stock'),
      t('demo.market.p2_seller', 'Elite Tires'),
    ],
    [
      t('demo.market.p3_title', 'AGM battery 60Ah'),
      t('demo.market.p3_price', 'EGP 3,200'),
      t('demo.market.p3_star', '4.6'),
      t('demo.market.p3_extra', '2–3d ship'),
      t('demo.market.p3_seller', 'AutoBatt'),
    ],
    [
      t('demo.market.p4_title', 'Castrol 5W-30 (4L)'),
      t('demo.market.p4_price', 'EGP 450'),
      t('demo.market.p4_star', '4.8'),
      t('demo.market.p4_extra', 'EGP 50 delivery'),
      t('demo.market.p4_seller', 'Lubrico'),
    ],
  ];
  return (
    <ScreenWrap id="b2c-marketplace">
      <ProtoStatusBar />
      <div className="px-4 pt-2 pb-2 bg-white dark:bg-slate-900 border-b border-slate-100 dark:border-slate-700/80">
        <div className="font-bold text-lg text-slate-900 dark:text-slate-100">{t('disc.market.title', 'Shop')}</div>
        <div className="text-xs text-slate-500 dark:text-slate-400">{t('disc.market.sub', 'Parts & accessories from verified sellers')}</div>
        <div className="flex items-center gap-2 mt-3">
          <div className="flex-1 rounded-2xl border border-slate-200 dark:border-slate-600 bg-slate-50 dark:bg-slate-800/90 px-3 py-2.5 flex items-center gap-2">
            <ProtoIcon name="search" className="w-4 h-4 text-slate-400 dark:text-slate-500" />
            <input
              className="flex-1 bg-transparent text-sm text-slate-900 dark:text-slate-100 outline-none placeholder:text-slate-400 dark:placeholder:text-slate-500"
              placeholder={t('disc.market.search_ph', 'Search parts, oil, VIN…')}
            />
          </div>
          <div className="relative w-10 h-10 rounded-2xl bg-slate-100 dark:bg-slate-800/80 flex items-center justify-center tap">
            <ProtoIcon name="shopping-bag" className="w-5 h-5 text-slate-600 dark:text-slate-400" />
            <span className="absolute -top-0.5 -right-0.5 w-4 h-4 rounded-full bg-orange-500 text-white text-[9px] font-bold flex items-center justify-center">
              {t('demo.market.cart_badge', '2')}
            </span>
          </div>
        </div>
        <div className="flex gap-2 mt-3 overflow-x-auto no-scrollbar">
          <span className="chip on">{t('disc.market.chip_for_car', 'For your car')}</span>
          <span className="chip">{t('disc.market.chip_filters', 'Filters')}</span>
          <span className="chip">{t('disc.market.chip_oil', 'Oil & fluids')}</span>
          <span className="chip">{t('disc.market.chip_batt', 'Batteries')}</span>
          <span className="chip">{t('disc.market.chip_tires', 'Tires')}</span>
          <span className="chip">{t('disc.market.chip_brakes', 'Brakes')}</span>
        </div>
      </div>
      <div className="flex-1 overflow-y-auto px-4 py-3 app-surface">
        <div className="p-3 rounded-2xl promo-banner-market text-white mb-4">
          <div className="text-xs font-semibold opacity-90">{t('disc.market.deal', 'Weekend deal')}</div>
          <div className="font-bold mt-0.5">{t('disc.market.deal_title', 'Bosch oil filter + 4L 5W-30')}</div>
          <div className="flex items-end justify-between mt-2">
            <div>
              <span className="text-lg font-bold">{t('demo.market.promo_now', 'EGP 620')}</span>
              <span className="text-xs line-through opacity-80 ml-2">{t('demo.market.promo_was', 'EGP 780')}</span>
            </div>
            <button type="button" className="px-3 py-1.5 rounded-xl bg-white dark:bg-slate-900/20 text-xs font-semibold">
              {t('disc.market.add', 'Add')}
            </button>
          </div>
        </div>
        <div className="label mb-2">{t('disc.market.popular', 'Popular this week')}</div>
        <div className="grid grid-cols-2 gap-3">
          {rows.map(([title, price, r, sell, seller]) => (
            <div
              key={title}
              className="tap p-3 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-600/90 shadow-sm ring-1 ring-black/[0.02]"
            >
              <div className="h-20 rounded-xl bg-gradient-to-br from-slate-100 to-indigo-50/80 flex items-center justify-center mb-2">
                <ProtoIcon name="package" className="w-8 h-8 text-indigo-400" />
              </div>
              <div className="text-xs font-semibold leading-tight line-clamp-2">{title}</div>
              <div className="mt-1 flex items-center gap-0.5 text-[10px] text-slate-500 dark:text-slate-400">
                <ProtoIcon name="star" className="w-2.5 h-2.5 text-amber-500 fill-amber-500" />
                {r} · {sell}
              </div>
              <div className="mt-2 font-bold text-sm">{price}</div>
              <div className="text-[10px] text-slate-500 dark:text-slate-400">{seller}</div>
            </div>
          ))}
        </div>
      </div>
      <B2cTabBar active="market" />
      <ProtoHomeIndicator />
    </ScreenWrap>
  );
}

export function B2cFilters() {
  const { show, t } = useProto();
  const services = [
    t('disc.filters.svc.oil', 'Oil change'),
    t('disc.filters.svc.brakes', 'Brakes'),
    t('disc.filters.svc.tires', 'Tires'),
    t('disc.filters.svc.ac', 'AC'),
    t('disc.filters.svc.battery', 'Battery'),
    t('disc.filters.svc.engine', 'Engine'),
    t('disc.filters.svc.body', 'Body & paint'),
    t('disc.filters.svc.elec', 'Electrical'),
  ];
  return (
    <ScreenWrap id="b2c-filters">
      <ProtoStatusBar />
      <div className="screen-topbar">
        <button type="button" className="funnel-back tap -ml-1" onClick={() => show('b2c-map')} aria-label={t('disc.filters.close', 'Close')}>
          <ProtoIcon name="x" className="w-5 h-5" />
        </button>
        <div className="font-semibold text-slate-900 dark:text-slate-100">{t('disc.filters.title', 'Filters')}</div>
        <button type="button" className="text-sm text-teal-700 dark:text-teal-400 font-semibold tap py-2 px-1">
          {t('disc.filters.reset', 'Reset')}
        </button>
      </div>
      <div className="flex-1 app-surface px-5 pt-4 pb-4 overflow-y-auto space-y-4 min-h-0">
        <div className="filters-section">
          <div className="label mb-2 text-indigo-700 dark:text-indigo-300">{t('disc.filters.service', 'Service')}</div>
          <div className="flex flex-wrap gap-2">
            {services.map((s, i) => (
              <span key={s} className={`chip ${i < 2 ? 'on' : ''}`}>
                {s}
              </span>
            ))}
          </div>
        </div>
        <div className="filters-section">
          <div className="flex justify-between mb-2">
            <div className="label text-cyan-800 dark:text-cyan-300">{t('disc.filters.price', 'Price range')}</div>
            <div className="text-xs font-bold text-cyan-900 dark:text-cyan-100 bg-cyan-50 dark:bg-cyan-950/45 px-2 py-0.5 rounded-lg">
              {t('demo.filters.price_chip', 'EGP 200–1500')}
            </div>
          </div>
          <div className="h-1.5 rounded-full bg-slate-200 dark:bg-slate-700 relative">
            <div className="absolute h-1.5 rounded-full bg-gradient-to-r from-teal-500 to-cyan-500" style={{ left: '10%', right: '30%' }} />
            <div
              className="absolute w-4 h-4 bg-white dark:bg-slate-900 border-2 border-teal-600 rounded-full -top-1 shadow-sm"
              style={{ left: '9%' }}
            />
            <div
              className="absolute w-4 h-4 bg-white dark:bg-slate-900 border-2 border-cyan-600 rounded-full -top-1 shadow-sm"
              style={{ left: '68%' }}
            />
          </div>
        </div>
        <div className="filters-section">
          <div className="label mb-2 text-amber-800 dark:text-amber-300">{t('disc.filters.rating', 'Minimum rating')}</div>
          <div className="flex gap-2 flex-wrap">
            {[3, 3.5, 4, 4.5].map((r, i) => (
              <span key={r} className={`chip ${i === 2 ? 'on' : ''}`}>
                <ProtoIcon name="star" className={`w-3 h-3 ${i === 2 ? '' : 'text-amber-500 fill-amber-500'}`} />
                {r}+
              </span>
            ))}
          </div>
        </div>
        <div className="filters-section">
          <div className="label mb-2 text-violet-800 dark:text-violet-300">{t('disc.filters.distance', 'Distance')}</div>
          <div className="flex gap-2 flex-wrap">
            {[
              t('demo.filters.dist_1', '1 km'),
              t('demo.filters.dist_5', '5 km'),
              t('demo.filters.dist_10', '10 km'),
              t('demo.filters.dist_25', '25 km'),
            ].map((d, i) => (
              <span key={d} className={`chip ${i === 1 ? 'on' : ''}`}>
                {d}
              </span>
            ))}
          </div>
        </div>
        <div className="filters-section space-y-3">
          <div className="label text-slate-600 dark:text-slate-400">{t('disc.filters.options', 'Options')}</div>
          {(
            [
              [t('disc.filters.opt.open', 'Open now'), true],
              [t('disc.filters.opt.verified', 'Verified only'), true],
              [t('disc.filters.opt.female', 'Female-friendly staff'), false],
              [t('disc.filters.opt.pickup', 'Home pickup available'), false],
              [t('disc.filters.opt.card', 'Accepts card'), true],
            ] as const
          ).map(([label, on]) => (
            <div key={label} className="flex justify-between items-center py-0.5">
              <div className="text-sm font-medium text-slate-800 dark:text-slate-200">{label}</div>
              <div
                className={`w-10 h-6 rounded-full ${on ? 'bg-gradient-to-r from-teal-600 to-emerald-500' : 'bg-slate-200'} relative transition-colors`}
              >
                <div
                  className={`absolute top-0.5 ${on ? 'right-0.5' : 'left-0.5'} w-5 h-5 rounded-full bg-white dark:bg-slate-900 shadow-md`}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="cta-bar">
        <button type="button" className="btn-primary btn-primary-lg w-full tap shadow-md" onClick={() => show('b2c-map')}>
          {t('disc.filters.show', 'Show 17 centers')}
        </button>
      </div>
      <ProtoHomeIndicator />
    </ScreenWrap>
  );
}

export function B2cSearch() {
  const { show, t } = useProto();
  const stateLabel = (s: string) => {
    if (s === 'Tow') return t('disc.search.badge_tow', 'Tow');
    if (s === 'Open') return t('disc.search.state.open', 'Open');
    if (s === 'Mobile') return t('disc.search.state.mobile', 'Mobile');
    if (s === 'Closes 6pm') return t('disc.search.state.closes', 'Closes 6pm');
    return s;
  };
  const list: [string, string, string, string, string, boolean, string, string][] = [
    [
      t('demo.search.r1_name', 'AutoPro Heliopolis'),
      t('demo.search.r1_dist', '0.8 km'),
      t('demo.search.r1_stars', '4.8'),
      t('demo.search.r1_rev_n', '312'),
      t('demo.search.r1_price', 'EGP 350–900'),
      true,
      t('demo.search.r1_next', '11:30'),
      'Open',
    ],
    [
      t('demo.search.r2_name', 'QuickFix Nasr City'),
      t('demo.search.r2_dist', '1.6 km'),
      t('demo.search.r2_stars', '4.6'),
      t('demo.search.r2_rev_n', '188'),
      t('demo.search.r2_price', 'EGP 250–1200'),
      true,
      t('demo.search.r2_next', '12:15'),
      'Open',
    ],
    [
      t('demo.search.r3_name', 'City Tow 24/7 – Heliopolis'),
      t('demo.search.r3_dist', '1.1 km'),
      t('demo.tow.stars_avg', '4.7'),
      t('demo.tow.rev_total_n', '201'),
      t('demo.search.r3_price', 'from EGP 400'),
      true,
      t('demo.search.r3_next', '~15 min'),
      'Tow',
    ],
    [
      t('demo.search.r4_name', 'Toyota Authorized – El Nozha'),
      t('demo.search.r4_dist', '2.4 km'),
      t('demo.search.r4_stars', '4.9'),
      t('demo.search.r4_rev_n', '421'),
      t('demo.search.r4_price', 'EGP 450–1800'),
      true,
      t('demo.search.r4_next', '14:00'),
      'Open',
    ],
    [
      t('demo.search.r5_name', 'Cairo Motors Workshop'),
      t('demo.search.r5_dist', '3.1 km'),
      t('demo.search.r5_stars', '4.3'),
      t('demo.search.r5_rev_n', '94'),
      t('demo.search.r5_price', 'EGP 200–700'),
      false,
      t('demo.search.r5_next', 'Tomorrow 09:00'),
      'Closes 6pm',
    ],
    [
      t('demo.search.r6_name', 'Mobile Mechanic — Khaled'),
      t('demo.search.r6_dist', ' on-demand'),
      t('demo.search.r6_stars', '4.7'),
      t('demo.search.r6_rev_n', '66'),
      t('demo.search.r6_price', 'EGP 300–600'),
      false,
      t('demo.search.r6_next', 'Now'),
      'Mobile',
    ],
  ];
  return (
    <ScreenWrap id="b2c-search">
      <ProtoStatusBar />
      <div className="px-4 pt-2 pb-2 bg-white dark:bg-slate-900">
        <div className="flex items-center gap-2">
          <button type="button" className="tap text-slate-500 dark:text-slate-400" onClick={() => show('b2c-map')}>
            <ProtoIcon name="arrow-left" className="w-5 h-5" />
          </button>
          <div className="flex-1 rounded-2xl border border-slate-200 dark:border-slate-600 bg-slate-50 dark:bg-slate-800/90 px-3 py-2.5 flex items-center gap-2">
            <ProtoIcon name="search" className="w-4 h-4 text-slate-400 dark:text-slate-500" />
            <input
              className="flex-1 bg-transparent text-sm text-slate-900 dark:text-slate-100 outline-none placeholder:text-slate-400 dark:placeholder:text-slate-500"
              defaultValue={t('demo.search.query_oil', 'Oil change')}
            />
          </div>
        </div>
        <div className="flex justify-between items-center mt-2">
          <div className="text-xs text-slate-500 dark:text-slate-400">{t('disc.search.meta', '17 centers · sorted by distance')}</div>
          <div className="text-xs font-semibold text-teal-700 dark:text-teal-400 flex items-center gap-1 tap">
            <ProtoIcon name="arrow-up-down" className="w-3.5 h-3.5" />
            {t('disc.search.sort', 'Sort')}
          </div>
        </div>
      </div>
      <div className="flex-1 overflow-y-auto px-4 pb-4 space-y-3 app-surface min-h-0">
        {list.map(([n, d, r, c, p, v, next, state], idx) => (
          <div
            key={n}
            className={`listing-card tap p-3.5 rounded-2xl border ${
              idx === 0
                ? 'border-2 border-teal-300/80 dark:border-teal-600/60 bg-gradient-to-br from-teal-50 to-white dark:from-teal-950/40 dark:to-slate-900 shadow-sm'
                : 'border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-900 shadow-sm'
            }`}
            onClick={() => show(state === 'Tow' ? 'b2c-tow' : 'b2c-shop')}
            onKeyDown={(e) => e.key === 'Enter' && show(state === 'Tow' ? 'b2c-tow' : 'b2c-shop')}
            role="button"
            tabIndex={0}
          >
            <div className="flex gap-3">
              <div
                className={`w-16 h-16 rounded-xl ${
                  idx === 0
                    ? 'bg-slate-100 dark:bg-slate-800/80 ring-1 ring-slate-200/80 dark:ring-slate-600/80'
                    : 'bg-slate-200 dark:bg-slate-700/90'
                } flex items-center justify-center`}
              >
                {state === 'Tow' ? (
                  <ProtoIcon name="truck" className="w-7 h-7 text-blue-700 dark:text-blue-400" />
                ) : (
                  <ProtoIcon name="wrench" className="w-7 h-7 text-slate-500 dark:text-slate-400" />
                )}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-1.5">
                  <span className="font-semibold text-slate-900 dark:text-slate-100 truncate">{n}</span>
                  {v ? <ProtoIcon name="badge-check" className="w-4 h-4 text-teal-700 dark:text-teal-400 flex-shrink-0" /> : null}
                  {state === 'Tow' ? <span className="badge b-blue">{t('disc.search.badge_tow', 'Tow')}</span> : null}
                </div>
                <div className="text-xs text-slate-600 dark:text-slate-400 mt-0.5">
                  {d} · {stateLabel(state)}
                </div>
                <div className="flex items-center gap-2 mt-1 text-xs">
                  <span className="flex items-center gap-0.5 font-semibold text-slate-800 dark:text-slate-200">
                    <ProtoIcon name="star" className="w-3 h-3 text-amber-500 fill-amber-500" />
                    {r}
                  </span>
                  <span className="text-slate-400 dark:text-slate-500">({c})</span>
                  <span className="text-slate-300">·</span>
                  <span className="text-slate-600 dark:text-slate-400">{p}</span>
                </div>
                <div className="mt-2 flex items-center justify-between gap-2">
                  <div className="text-xs text-teal-700 dark:text-teal-400 font-semibold">
                    {t('disc.search.next', 'Next')} {next}
                  </div>
                  {idx === 0 ? (
                    <span className="btn-primary py-2 px-3.5 text-xs rounded-xl flex-shrink-0">{t('disc.search.book', 'Book')}</span>
                  ) : (
                    <span className="btn-secondary py-2 px-3.5 text-xs flex-shrink-0">{t('disc.search.view', 'View')}</span>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <ProtoHomeIndicator />
    </ScreenWrap>
  );
}

