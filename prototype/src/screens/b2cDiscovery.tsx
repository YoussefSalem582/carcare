import type { FC, ReactNode } from 'react';
import { B2cTabBar } from '../components/proto/TabBars';
import { ProtoHomeIndicator, ProtoStatusBar } from '../components/proto/Chrome';
import { ProtoIcon } from '../components/proto/Icon';
import { B2cMapMainColumn } from '../components/proto/MapColumn';
import { useProto } from '../context/ProtoContext';

function ScreenWrap({ id, children }: { id: string; children: ReactNode }) {
  return (
    <div className="screen active" data-screen={id}>
      {children}
    </div>
  );
}

export function B2cAddcar() {
  const { show } = useProto();
  return (
    <ScreenWrap id="b2c-addcar">
      <ProtoStatusBar />
      <div className="screen-topbar">
        <button type="button" className="funnel-back tap -ml-1" onClick={() => show('b2c-login')} aria-label="Back">
          <ProtoIcon name="arrow-left" className="w-5 h-5" />
        </button>
        <button type="button" className="funnel-skip tap" onClick={() => show('b2c-map')}>
          Skip
        </button>
      </div>
      <div className="flex-1 app-surface px-6 pt-2 pb-4 flex flex-col overflow-y-auto min-h-0">
        <span className="preauth-eyebrow">Your garage</span>
        <h2 className="text-2xl font-extrabold leading-tight tracking-tight text-slate-900 dark:text-slate-100">Add your car</h2>
        <p className="text-sm text-slate-600 dark:text-slate-400 mt-1.5">We’ll auto-log services you book through CarCare.</p>
        <button type="button" className="callout-violet mt-6 w-full text-left p-4 flex items-center gap-3 tap">
          <div className="w-11 h-11 rounded-xl flex items-center justify-center bg-white dark:bg-slate-900 shadow-sm border border-violet-100">
            <ProtoIcon name="scan-line" className="w-5 h-5 text-violet-600" />
          </div>
          <div className="flex-1 min-w-0">
            <div className="text-sm font-semibold text-slate-900 dark:text-slate-100">Scan VIN with camera</div>
            <div className="text-xs text-slate-600 dark:text-slate-400">Autofill brand, model, year</div>
          </div>
          <ProtoIcon name="chevron-right" className="w-5 h-5 text-violet-400 flex-shrink-0" />
        </button>
        <div className="app-panel p-4 mt-5 space-y-3">
          <div>
            <div className="label mb-1.5">Brand</div>
            <div className="proto-input px-3.5 py-3 text-sm flex justify-between items-center">
              Toyota <ProtoIcon name="chevron-down" className="w-4 h-4 text-slate-400 dark:text-slate-500" />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div>
              <div className="label mb-1.5">Model</div>
              <div className="proto-input px-3.5 py-3 text-sm">Corolla</div>
            </div>
            <div>
              <div className="label mb-1.5">Year</div>
              <div className="proto-input px-3.5 py-3 text-sm">2019</div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div>
              <div className="label mb-1.5">Mileage (km)</div>
              <div className="proto-input px-3.5 py-3 text-sm">82,450</div>
            </div>
            <div>
              <div className="label mb-1.5">
                Plate <span className="text-slate-400 dark:text-slate-500 normal-case font-normal">optional</span>
              </div>
              <div className="proto-input px-3.5 py-3 text-sm">س ب ج 7421</div>
            </div>
          </div>
        </div>
        <div className="flex-1 min-h-3" />
        <button type="button" className="btn-primary btn-primary-lg w-full tap shadow-md" onClick={() => show('b2c-map')}>
          Save &amp; continue
        </button>
      </div>
      <ProtoHomeIndicator />
    </ScreenWrap>
  );
}

export function B2cMap() {
  return (
    <ScreenWrap id="b2c-map">
      <ProtoStatusBar />
      <B2cMapMainColumn />
      <B2cTabBar active="map" />
      <ProtoHomeIndicator />
    </ScreenWrap>
  );
}

export function B2cMarketplace() {
  const rows = [
    ['Bosch cabin filter', 'EGP 185', '4.7', '1.2k sold', 'Cairo Parts'],
    ['Michelin 205/55 R16', 'EGP 2,890', '4.8', 'In stock', 'Elite Tires'],
    ['AGM battery 60Ah', 'EGP 3,200', '4.6', '2–3d ship', 'AutoBatt'],
    ['Castrol 5W-30 (4L)', 'EGP 450', '4.8', 'EGP 50 delivery', 'Lubrico'],
  ] as const;
  return (
    <ScreenWrap id="b2c-marketplace">
      <ProtoStatusBar />
      <div className="px-4 pt-2 pb-2 bg-white dark:bg-slate-900 border-b border-slate-100">
        <div className="font-bold text-lg">Shop</div>
        <div className="text-xs text-slate-500 dark:text-slate-400">Parts &amp; accessories from verified sellers</div>
        <div className="flex items-center gap-2 mt-3">
          <div className="flex-1 rounded-2xl border border-slate-200 dark:border-slate-600 bg-slate-50 dark:bg-slate-800/90 px-3 py-2.5 flex items-center gap-2">
            <ProtoIcon name="search" className="w-4 h-4 text-slate-400 dark:text-slate-500" />
            <input className="flex-1 bg-transparent text-sm outline-none" placeholder="Search parts, oil, VIN…" />
          </div>
          <div className="relative w-10 h-10 rounded-2xl bg-slate-100 dark:bg-slate-800/80 flex items-center justify-center tap">
            <ProtoIcon name="shopping-bag" className="w-5 h-5 text-slate-600 dark:text-slate-400" />
            <span className="absolute -top-0.5 -right-0.5 w-4 h-4 rounded-full bg-orange-500 text-white text-[9px] font-bold flex items-center justify-center">
              2
            </span>
          </div>
        </div>
        <div className="flex gap-2 mt-3 overflow-x-auto no-scrollbar">
          <span className="chip on">For your car</span>
          <span className="chip">Filters</span>
          <span className="chip">Oil &amp; fluids</span>
          <span className="chip">Batteries</span>
          <span className="chip">Tires</span>
          <span className="chip">Brakes</span>
        </div>
      </div>
      <div className="flex-1 overflow-y-auto px-4 py-3 app-surface">
        <div className="p-3 rounded-2xl promo-banner-market text-white mb-4">
          <div className="text-xs font-semibold opacity-90">Weekend deal</div>
          <div className="font-bold mt-0.5">Bosch oil filter + 4L 5W-30</div>
          <div className="flex items-end justify-between mt-2">
            <div>
              <span className="text-lg font-bold">EGP 620</span>
              <span className="text-xs line-through opacity-80 ml-2">EGP 780</span>
            </div>
            <button type="button" className="px-3 py-1.5 rounded-xl bg-white dark:bg-slate-900/20 text-xs font-semibold">
              Add
            </button>
          </div>
        </div>
        <div className="label mb-2">Popular this week</div>
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
  const { show } = useProto();
  const services = ['Oil change', 'Brakes', 'Tires', 'AC', 'Battery', 'Engine', 'Body & paint', 'Electrical'];
  return (
    <ScreenWrap id="b2c-filters">
      <ProtoStatusBar />
      <div className="screen-topbar">
        <button type="button" className="funnel-back tap -ml-1" onClick={() => show('b2c-map')} aria-label="Close">
          <ProtoIcon name="x" className="w-5 h-5" />
        </button>
        <div className="font-semibold text-slate-900 dark:text-slate-100">Filters</div>
        <button type="button" className="text-sm text-teal-700 font-semibold tap py-2 px-1">
          Reset
        </button>
      </div>
      <div className="flex-1 app-surface px-5 pt-4 pb-4 overflow-y-auto space-y-4 min-h-0">
        <div className="filters-section">
          <div className="label mb-2 text-indigo-700">Service</div>
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
            <div className="label text-cyan-800">Price range</div>
            <div className="text-xs font-bold text-cyan-900 bg-cyan-50 px-2 py-0.5 rounded-lg">EGP 200–1500</div>
          </div>
          <div className="h-1.5 rounded-full bg-slate-200 relative">
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
          <div className="label mb-2 text-amber-800">Minimum rating</div>
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
          <div className="label mb-2 text-violet-800">Distance</div>
          <div className="flex gap-2 flex-wrap">
            {['1 km', '5 km', '10 km', '25 km'].map((d, i) => (
              <span key={d} className={`chip ${i === 1 ? 'on' : ''}`}>
                {d}
              </span>
            ))}
          </div>
        </div>
        <div className="filters-section space-y-3">
          <div className="label text-slate-600 dark:text-slate-400">Options</div>
          {(
            [
              ['Open now', true],
              ['Verified only', true],
              ['Female-friendly staff', false],
              ['Home pickup available', false],
              ['Accepts card', true],
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
          Show 17 centers
        </button>
      </div>
      <ProtoHomeIndicator />
    </ScreenWrap>
  );
}

export function B2cSearch() {
  const { show } = useProto();
  const list = [
    ['AutoPro Heliopolis', '0.8 km', '4.8', '312', 'EGP 350–900', true, '11:30', 'Open'],
    ['QuickFix Nasr City', '1.6 km', '4.6', '188', 'EGP 250–1200', true, '12:15', 'Open'],
    ['City Tow 24/7 – Heliopolis', '1.1 km', '4.7', '201', 'from EGP 400', true, '~15 min', 'Tow'],
    ['Toyota Authorized – El Nozha', '2.4 km', '4.9', '421', 'EGP 450–1800', true, '14:00', 'Open'],
    ['Cairo Motors Workshop', '3.1 km', '4.3', '94', 'EGP 200–700', false, 'Tomorrow 09:00', 'Closes 6pm'],
    ['Mobile Mechanic — Khaled', ' on-demand', '4.7', '66', 'EGP 300–600', false, 'Now', 'Mobile'],
  ] as const;
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
            <input className="flex-1 bg-transparent text-sm outline-none" defaultValue="Oil change" />
          </div>
        </div>
        <div className="flex justify-between items-center mt-2">
          <div className="text-xs text-slate-500 dark:text-slate-400">17 centers · sorted by distance</div>
          <div className="text-xs font-semibold text-teal-700 flex items-center gap-1 tap">
            <ProtoIcon name="arrow-up-down" className="w-3.5 h-3.5" />
            Sort
          </div>
        </div>
      </div>
      <div className="flex-1 overflow-y-auto px-4 pb-4 space-y-3 app-surface min-h-0">
        {list.map(([n, d, r, c, p, v, next, state], idx) => (
          <div
            key={n}
            className={`listing-card tap p-3.5 rounded-2xl border ${
              idx === 0
                ? 'border-2 border-teal-300/80 bg-gradient-to-br from-teal-50 to-white shadow-sm'
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
                  idx === 0 ? 'bg-slate-100 dark:bg-slate-800/80 ring-1 ring-slate-200/80' : 'bg-slate-200'
                } flex items-center justify-center`}
              >
                {state === 'Tow' ? (
                  <ProtoIcon name="truck" className="w-7 h-7 text-blue-700" />
                ) : (
                  <ProtoIcon name="wrench" className="w-7 h-7 text-slate-500 dark:text-slate-400" />
                )}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-1.5">
                  <span className="font-semibold text-slate-900 dark:text-slate-100 truncate">{n}</span>
                  {v ? <ProtoIcon name="badge-check" className="w-4 h-4 text-teal-700 flex-shrink-0" /> : null}
                  {state === 'Tow' ? <span className="badge b-blue">Tow</span> : null}
                </div>
                <div className="text-xs text-slate-600 dark:text-slate-400 mt-0.5">
                  {d} · {state}
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
                  <div className="text-xs text-teal-700 font-semibold">Next {next}</div>
                  {idx === 0 ? (
                    <span className="btn-primary py-2 px-3.5 text-xs rounded-xl flex-shrink-0">Book</span>
                  ) : (
                    <span className="btn-secondary py-2 px-3.5 text-xs flex-shrink-0">View</span>
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

export function B2cShop() {
  const { show, setBookingReturnTarget } = useProto();
  const goBook = () => {
    setBookingReturnTarget('b2c-shop');
    show('b2c-service');
  };
  const services = [
    ['Oil change (standard)', '45 min', 'EGP 350'],
    ['Brake pads — front', '1.5 h', 'EGP 650'],
    ['AC recharge', '1 h', 'EGP 450'],
    ['Full engine diagnostic', '30 min', 'From EGP 200 (quote)'],
  ] as const;
  return (
    <ScreenWrap id="b2c-shop">
      <div className="flex-1 overflow-y-auto">
        <div className="relative h-52 gradient-hero-shop">
          <div className="status-bar absolute top-0 left-0 right-0" style={{ color: 'white' }}>
            <span>9:41</span>
            <span />
          </div>
          <button
            type="button"
            className="absolute top-12 left-4 w-9 h-9 rounded-full bg-white dark:bg-slate-900/90 flex items-center justify-center tap"
            onClick={() => show('b2c-map')}
          >
            <ProtoIcon name="arrow-left" className="w-4 h-4" />
          </button>
          <div className="absolute top-12 right-4 flex gap-2">
            <div className="w-9 h-9 rounded-full bg-white dark:bg-slate-900/90 flex items-center justify-center tap">
              <ProtoIcon name="share-2" className="w-4 h-4" />
            </div>
            <div className="w-9 h-9 rounded-full bg-white dark:bg-slate-900/90 flex items-center justify-center tap">
              <ProtoIcon name="heart" className="w-4 h-4" />
            </div>
          </div>
          <div className="absolute bottom-3 right-3 bg-black/50 text-white text-xs px-2 py-0.5 rounded">1/12</div>
        </div>
        <div className="px-5 -mt-6 relative z-10">
          <div className="bg-white dark:bg-slate-900 rounded-2xl p-4 shadow-lg border border-slate-200 dark:border-slate-600/80 ring-1 ring-black/[0.03]">
            <div className="flex items-start justify-between gap-3">
              <div>
                <div className="flex items-center gap-2">
                  <div className="text-xl font-bold">AutoPro Heliopolis</div>
                  <ProtoIcon name="badge-check" className="w-5 h-5 text-teal-700" />
                </div>
                <div className="text-xs text-slate-500 dark:text-slate-400 mt-1">Authorized dealer · Independent workshop</div>
                <div className="flex items-center gap-2 mt-2 text-xs">
                  <span className="flex items-center gap-0.5 font-semibold">
                    <ProtoIcon name="star" className="w-3 h-3 text-amber-500 fill-amber-500" />
                    4.8
                  </span>
                  <span className="text-slate-400 dark:text-slate-500">(312 reviews)</span>
                  <span className="text-slate-300">·</span>
                  <span className="text-green-600 font-semibold">Open · closes 10pm</span>
                </div>
              </div>
              <div className="text-right">
                <div className="text-sm font-semibold">0.8 km</div>
                <div className="text-xs text-slate-500 dark:text-slate-400">Heliopolis</div>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-2 mt-3">
              <button type="button" className="btn-ghost py-2.5 text-xs flex flex-col items-center">
                <ProtoIcon name="phone" className="w-4 h-4 mb-1" />
                Call
              </button>
              <button type="button" className="btn-ghost py-2.5 text-xs flex flex-col items-center">
                <ProtoIcon name="navigation" className="w-4 h-4 mb-1" />
                Directions
              </button>
              <button type="button" className="btn-ghost py-2.5 text-xs flex flex-col items-center">
                <ProtoIcon name="message-circle" className="w-4 h-4 mb-1" />
                Message
              </button>
            </div>
          </div>
        </div>
        <div className="px-5 pt-5">
          <div className="label mb-2">Popular services</div>
          <div className="space-y-2">
            {services.map(([title, dur, price]) => (
              <button
                key={title}
                type="button"
                className="tap flex items-center justify-between p-3 rounded-xl border border-slate-200 dark:border-slate-600/90 bg-white dark:bg-slate-900 shadow-sm hover:border-teal-200/80 w-full text-left font-inherit"
                onClick={goBook}
              >
                <div>
                  <div className="font-semibold text-sm">{title}</div>
                  <div className="text-xs text-slate-500 dark:text-slate-400">{dur}</div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="font-semibold text-sm">{price}</div>
                  <ProtoIcon name="chevron-right" className="w-4 h-4 text-slate-400 dark:text-slate-500" />
                </div>
              </button>
            ))}
          </div>
        </div>
        <div className="px-5 pt-5">
          <div className="label mb-2">Photos</div>
          <div className="flex gap-2 overflow-x-auto">
            {[0, 1, 2, 3].map((i) => (
              <div key={i} className="w-28 h-20 rounded-xl bg-slate-200 flex-shrink-0" />
            ))}
          </div>
        </div>
        <div className="px-5 pt-5">
          <div className="flex justify-between items-end mb-2">
            <div className="label">Reviews · 4.8</div>
            <div className="text-xs text-teal-700 font-semibold">See all</div>
          </div>
          <div className="grid grid-cols-4 gap-2 mb-3">
            {(
              [
                ['Quality', '4.9', 'teal'],
                ['Price', '4.6', 'amber'],
                ['Speed', '4.8', 'cyan'],
                ['Honesty', '4.9', 'violet'],
              ] as const
            ).map(([l, v, tone]) => (
              <div
                key={l}
                className={`p-2 rounded-xl text-center ${
                  tone === 'teal'
                    ? 'bg-teal-50 text-teal-900'
                    : tone === 'amber'
                      ? 'bg-amber-50 text-amber-900'
                      : tone === 'cyan'
                        ? 'bg-cyan-50 text-cyan-900'
                        : 'bg-violet-50 text-violet-900'
                }`}
              >
                <div className="text-[10px] font-semibold uppercase tracking-wide opacity-80">{l}</div>
                <div className="font-bold">{v}</div>
              </div>
            ))}
          </div>
          <div className="p-3 rounded-xl border border-slate-200 dark:border-slate-600">
            <div className="flex items-center gap-2 mb-1">
              <div className="w-7 h-7 rounded-full bg-teal-100 flex items-center justify-center text-xs font-semibold text-teal-700">
                MH
              </div>
              <div className="text-sm font-semibold">Mohamed H.</div>
              <div className="text-xs text-slate-400 dark:text-slate-500 ml-auto">2 days ago</div>
            </div>
            <div className="flex gap-0.5 mb-1">
              {[1, 1, 1, 1, 1].map((_, i) => (
                <ProtoIcon key={i} name="star" className="w-3 h-3 text-amber-500 fill-amber-500" />
              ))}
            </div>
            <div className="text-sm text-slate-700 dark:text-slate-300">
              Fast, clean, honest pricing. Texted me when the car was ready.
            </div>
          </div>
        </div>
        <div className="h-24" />
      </div>
      <div className="p-4 border-t border-slate-200 dark:border-slate-600/90 bg-white dark:bg-slate-900/95 backdrop-blur-sm shadow-[0_-8px_30px_rgba(15,23,42,.08)]">
        <button type="button" className="btn-primary w-full tap rounded-2xl py-3.5 shadow-md" onClick={goBook}>
          Book service · from EGP 350
        </button>
      </div>
      <ProtoHomeIndicator />
    </ScreenWrap>
  );
}

export function B2cTow() {
  const { show, setBookingReturnTarget } = useProto();
  const svcRows = [
    ['layers', 'Flatbed', 'Cars & SUVs · low clearance OK', 'from EGP 450'],
    ['battery-charging', 'Jump & lockout', 'Battery boost · unlock', 'from EGP 200'],
    ['anchor', 'Winch recovery', 'Stuck / off-road add-on', 'Quote'],
    ['droplet', 'Fuel delivery', '5L emergency top-up', 'EGP 120 + fuel'],
  ] as const;
  return (
    <ScreenWrap id="b2c-tow">
      <div className="flex-1 overflow-y-auto min-h-0 bg-slate-50 dark:bg-slate-800/90">
        <div className="relative h-56 gradient-hero-tow tow-hero">
          <div className="relative z-10">
            <div className="status-bar" style={{ color: 'rgba(255,255,255,.95)' }}>
              <span>9:41</span>
              <span />
            </div>
            <div className="flex items-center justify-between px-4 pt-1">
              <button
                type="button"
                className="w-10 h-10 rounded-full bg-white dark:bg-slate-900/95 shadow-md flex items-center justify-center tap ring-1 ring-white/40"
                onClick={() => show('b2c-map')}
                aria-label="Back"
              >
                <ProtoIcon name="arrow-left" className="w-5 h-5 text-slate-800 dark:text-slate-200" />
              </button>
              <div className="flex gap-2">
                <button
                  type="button"
                  className="w-10 h-10 rounded-full bg-white dark:bg-slate-900/95 shadow-md flex items-center justify-center tap ring-1 ring-white/40"
                  aria-label="Share"
                >
                  <ProtoIcon name="share-2" className="w-[18px] h-[18px] text-slate-800 dark:text-slate-200" />
                </button>
                <button
                  type="button"
                  className="w-10 h-10 rounded-full bg-white dark:bg-slate-900/95 shadow-md flex items-center justify-center tap ring-1 ring-white/40"
                  aria-label="Save"
                >
                  <ProtoIcon name="heart" className="w-[18px] h-[18px] text-slate-800 dark:text-slate-200" />
                </button>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center pt-1 pb-2 relative z-10">
              <div className="tow-hero-icon-wrap flex items-center justify-center">
                <ProtoIcon name="truck" className="w-14 h-14 text-white opacity-95" />
              </div>
              <div className="mt-3 inline-flex items-center gap-2 rounded-full bg-white dark:bg-slate-900/15 backdrop-blur-md border border-white/25 px-3 py-1.5 text-[11px] font-semibold text-white shadow-sm">
                <span className="relative flex h-2 w-2">
                  <span className="tow-live-dot absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400 ring-2 ring-white/30" />
                </span>
                Live dispatch · high demand
              </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 z-10 px-4 pb-3 pt-6 flex gap-2">
              <div className="flex-1 rounded-2xl bg-white dark:bg-slate-900/95 backdrop-blur-md border border-white/50 shadow-lg px-3 py-2.5">
                <div className="flex items-center gap-2">
                  <div className="w-9 h-9 rounded-xl bg-blue-100 flex items-center justify-center flex-shrink-0">
                    <ProtoIcon name="clock" className="w-4 h-4 text-blue-700" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-[10px] font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
                      Avg. arrival
                    </div>
                    <div className="text-sm font-bold text-slate-900 dark:text-slate-100 leading-tight">12–18 min</div>
                  </div>
                </div>
              </div>
              <div className="flex-1 rounded-2xl bg-white dark:bg-slate-900/95 backdrop-blur-md border border-white/50 shadow-lg px-3 py-2.5">
                <div className="flex items-center gap-2">
                  <div className="w-9 h-9 rounded-xl bg-slate-100 dark:bg-slate-800/80 flex items-center justify-center flex-shrink-0">
                    <ProtoIcon name="truck" className="w-4 h-4 text-slate-700 dark:text-slate-300" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-[10px] font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">On shift</div>
                    <div className="text-sm font-bold text-slate-900 dark:text-slate-100 leading-tight">4 trucks</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute bottom-14 right-4 z-20 rounded-full bg-black/45 text-white text-[11px] font-medium px-2.5 py-1 backdrop-blur-sm">
            Photos · 1/6
          </div>
        </div>
        <div className="px-4 -mt-7 relative z-20 pb-6">
          <div className="bg-white dark:bg-slate-900 rounded-[22px] p-4 shadow-xl border border-slate-200 dark:border-slate-600/90 ring-1 ring-black/[0.04]">
            <div className="flex gap-3">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center flex-shrink-0 shadow-md shadow-blue-900/25">
                <ProtoIcon name="truck" className="w-7 h-7 text-white" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <h1 className="text-[19px] font-extrabold text-slate-900 dark:text-slate-100 leading-snug tracking-tight">
                      City Tow 24/7
                    </h1>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">Heliopolis · East Cairo</p>
                  </div>
                  <div className="text-right flex-shrink-0">
                    <div className="text-base font-bold text-slate-900 dark:text-slate-100">1.1 km</div>
                    <div className="text-[11px] text-slate-500 dark:text-slate-400">straight line</div>
                  </div>
                </div>
                <div className="flex flex-wrap gap-1.5 mt-2.5">
                  <span className="inline-flex items-center gap-1 rounded-full bg-teal-50 text-teal-900 border border-teal-100 px-2 py-0.5 text-[11px] font-semibold">
                    <ProtoIcon name="badge-check" className="w-3 h-3" />
                    Verified
                  </span>
                  <span className="inline-flex items-center gap-1 rounded-full bg-blue-50 text-blue-900 border border-blue-100 px-2 py-0.5 text-[11px] font-semibold">
                    Tow partner
                  </span>
                  <span className="inline-flex items-center gap-1 rounded-full bg-slate-100 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-600/80 px-2 py-0.5 text-[11px] font-semibold">
                    24/7
                  </span>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-2 mt-4">
              <div className="rounded-2xl bg-slate-50 dark:bg-slate-800/90 border border-slate-100 px-2 py-2.5 text-center">
                <div className="flex items-center justify-center gap-0.5 text-amber-500">
                  <ProtoIcon name="star" className="w-3.5 h-3.5 fill-amber-500" />
                  <span className="text-sm font-bold text-slate-900 dark:text-slate-100">4.7</span>
                </div>
                <div className="text-[10px] text-slate-500 dark:text-slate-400 mt-0.5">201 reviews</div>
              </div>
              <div className="rounded-2xl bg-slate-50 dark:bg-slate-800/90 border border-slate-100 px-2 py-2.5 text-center">
                <div className="text-sm font-bold text-slate-900 dark:text-slate-100 flex items-center justify-center gap-1">
                  <ProtoIcon name="zap" className="w-3.5 h-3.5 text-amber-500" />
                  ~15m
                </div>
                <div className="text-[10px] text-slate-500 dark:text-slate-400 mt-0.5">response</div>
              </div>
              <div className="rounded-2xl bg-slate-50 dark:bg-slate-800/90 border border-slate-100 px-2 py-2.5 text-center">
                <div className="text-sm font-bold text-slate-900 dark:text-slate-100">15 km</div>
                <div className="text-[10px] text-slate-500 dark:text-slate-400 mt-0.5">radius</div>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-2 mt-3">
              <button
                type="button"
                className="tap flex flex-col items-center justify-center rounded-2xl bg-blue-50 border border-blue-100 py-3 text-[11px] font-semibold text-blue-900"
              >
                <ProtoIcon name="phone" className="w-[18px] h-[18px] mb-1 text-blue-700" />
                Call
              </button>
              <button
                type="button"
                className="tap flex flex-col items-center justify-center rounded-2xl bg-slate-50 dark:bg-slate-800/90 border border-slate-200 dark:border-slate-600 py-3 text-[11px] font-semibold text-slate-800 dark:text-slate-200"
              >
                <ProtoIcon name="navigation" className="w-[18px] h-[18px] mb-1 text-slate-600 dark:text-slate-400" />
                Garage
              </button>
              <button
                type="button"
                className="tap flex flex-col items-center justify-center rounded-2xl bg-slate-50 dark:bg-slate-800/90 border border-slate-200 dark:border-slate-600 py-3 text-[11px] font-semibold text-slate-800 dark:text-slate-200"
              >
                <ProtoIcon name="message-circle" className="w-[18px] h-[18px] mb-1 text-slate-600 dark:text-slate-400" />
                Chat
              </button>
            </div>
          </div>
          <div className="mt-4 rounded-2xl border border-amber-200/90 bg-gradient-to-br from-amber-50 to-orange-50/80 p-3.5 flex gap-3 shadow-sm">
            <div className="w-10 h-10 rounded-xl bg-white dark:bg-slate-900/90 border border-amber-100 flex items-center justify-center flex-shrink-0 shadow-sm">
              <ProtoIcon name="alert-triangle" className="w-5 h-5 text-amber-700" />
            </div>
            <div className="min-w-0 flex-1">
              <div className="text-sm font-bold text-amber-950">Unsafe to drive?</div>
              <p className="text-xs text-amber-900/85 leading-relaxed mt-0.5">
                Stay parked with hazards on. Call dispatch for priority routing — mention “roadside emergency”.
              </p>
              <button type="button" className="mt-2 text-xs font-bold text-amber-900 underline underline-offset-2 tap">
                Call priority line
              </button>
            </div>
          </div>
          <div className="callout-info p-4 rounded-2xl flex gap-3 mt-4 border border-blue-100 shadow-sm">
            <div className="w-11 h-11 rounded-2xl bg-white dark:bg-slate-900 border border-blue-100 flex items-center justify-center flex-shrink-0 shadow-sm">
              <ProtoIcon name="shield-check" className="w-5 h-5 text-blue-700" />
            </div>
            <div className="min-w-0">
              <div className="text-sm font-bold text-slate-900 dark:text-slate-100">Licensed &amp; insured</div>
              <p className="text-xs text-slate-600 dark:text-slate-400 mt-1 leading-relaxed">
                Commercial registration on file. Cargo cover up to{' '}
                <span className="font-semibold text-slate-800 dark:text-slate-200">EGP 500k</span> per job.
              </p>
            </div>
          </div>
          <div className="mt-5">
            <div className="flex items-end justify-between mb-2 px-0.5">
              <div className="label mb-0">What they can do</div>
              <span className="text-[11px] font-semibold text-blue-700 tap">Compare</span>
            </div>
            <div className="space-y-2">
              {svcRows.map(([icon, title, sub, price]) => (
                <button
                  key={title}
                  type="button"
                  className="tap w-full flex items-center gap-3 p-3.5 rounded-2xl border border-slate-200 dark:border-slate-600/90 bg-white dark:bg-slate-900 shadow-sm text-left ring-1 ring-black/[0.02] hover:border-blue-200/80 hover:shadow-md transition-shadow font-inherit"
                >
                  <div className="w-11 h-11 rounded-xl bg-slate-50 dark:bg-slate-800/90 border border-slate-100 flex items-center justify-center flex-shrink-0">
                    <ProtoIcon name={icon} className="w-5 h-5 text-blue-700" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="font-semibold text-sm text-slate-900 dark:text-slate-100">{title}</div>
                    <div className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">{sub}</div>
                  </div>
                  <div className="text-right flex-shrink-0 pl-1">
                    <div className="text-xs font-bold text-slate-900 dark:text-slate-100">{price}</div>
                    <ProtoIcon name="chevron-right" className="w-4 h-4 text-slate-300 inline-block mt-1" />
                  </div>
                </button>
              ))}
            </div>
          </div>
          <div className="mt-5 rounded-2xl border border-slate-200 dark:border-slate-600/90 bg-white dark:bg-slate-900 p-4 shadow-sm">
            <div className="flex items-center justify-between gap-2 mb-3">
              <div className="label mb-0">Fleet availability</div>
              <span className="text-xs font-bold text-blue-700">4 of 6 active</span>
            </div>
            <div className="tow-fleet-bar">
              <span className="tow-fleet-bar-fill" style={{ width: '66.67%' }} />
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-2 leading-relaxed">
              Busy nights can add a few minutes — you’ll see live ETA after you request.
            </p>
          </div>
          <div className="mt-5 rounded-2xl border border-slate-200 dark:border-slate-600/90 bg-white dark:bg-slate-900 p-4 shadow-sm">
            <div className="label mb-3">Pricing snapshot</div>
            <div className="space-y-2 mb-4">
              {(
                [
                  ['Hook + dispatch', 'from EGP 400'],
                  ['Per km (loaded)', 'EGP 12–18'],
                  ['After hours', '+25% · 11pm–6am'],
                ] as const
              ).map(([rowTitle, rowPrice]) => (
                <div
                  key={rowTitle}
                  className="flex items-center justify-between py-2 border-b border-slate-100 last:border-0 last:pb-0"
                >
                  <span className="text-sm text-slate-600 dark:text-slate-400">{rowTitle}</span>
                  <span className="text-sm font-bold text-slate-900 dark:text-slate-100">{rowPrice}</span>
                </div>
              ))}
            </div>
            <div className="rounded-xl bg-blue-50 border border-blue-100 px-3 py-3">
              <div className="flex justify-between items-start gap-2">
                <div>
                  <div className="text-[11px] font-semibold uppercase tracking-wide text-blue-800/80">Example estimate</div>
                  <div className="text-xs text-slate-600 dark:text-slate-400 mt-1">8 km tow · weekday · standard car</div>
                </div>
                <div className="text-lg font-extrabold text-blue-900">~EGP 520</div>
              </div>
              <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-2 leading-relaxed">
                Final price confirmed before dispatch. Surge possible in storms.
              </p>
            </div>
          </div>
          <div className="mt-5">
            <div className="flex justify-between items-center mb-2 px-0.5">
              <div className="label mb-0">Reviews · 4.7</div>
              <button type="button" className="text-xs font-bold text-blue-700 tap py-1">
                See all
              </button>
            </div>
            <div className="grid grid-cols-4 gap-1.5 mb-3">
              {(
                [
                  ['Response', '4.8', 'teal'],
                  ['Price', '4.5', 'amber'],
                  ['Care', '4.7', 'cyan'],
                  ['Safety', '4.9', 'violet'],
                ] as const
              ).map(([l, v, tone]) => (
                <div
                  key={l}
                  className={`p-2 rounded-xl text-center ${
                    tone === 'teal'
                      ? 'bg-teal-50 text-teal-900'
                      : tone === 'amber'
                        ? 'bg-amber-50 text-amber-900'
                        : tone === 'cyan'
                          ? 'bg-cyan-50 text-cyan-900'
                          : 'bg-violet-50 text-violet-900'
                  }`}
                >
                  <div className="text-[9px] font-semibold uppercase tracking-wide opacity-80">{l}</div>
                  <div className="font-bold text-sm">{v}</div>
                </div>
              ))}
            </div>
            <div className="p-4 rounded-2xl border border-slate-200 dark:border-slate-600/90 bg-white dark:bg-slate-900 shadow-sm">
              <div className="flex items-center gap-2.5 mb-2">
                <div className="w-9 h-9 rounded-full bg-gradient-to-br from-blue-100 to-blue-50 flex items-center justify-center text-xs font-bold text-blue-800 ring-2 ring-white shadow-sm">
                  SK
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-sm font-bold text-slate-900 dark:text-slate-100">Sara K.</div>
                  <div className="text-[11px] text-slate-400 dark:text-slate-500">Verified ride · 1 week ago</div>
                </div>
                <div className="flex gap-0.5">
                  {[1, 1, 1, 1, 1].map((_, i) => (
                    <ProtoIcon key={i} name="star" className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
                  ))}
                </div>
              </div>
              <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                Arrived in 12 minutes, driver was careful with my lowered car. Fair price.
              </p>
            </div>
          </div>
          <div className="h-20" />
        </div>
      </div>
      <div className="flex-shrink-0 p-4 pt-3 border-t border-slate-200 dark:border-slate-600/90 bg-white dark:bg-slate-900/98 backdrop-blur-md shadow-[0_-12px_40px_rgba(15,23,42,.1)]">
        <button
          type="button"
          className="w-full tap rounded-2xl py-3.5 px-4 shadow-lg shadow-blue-900/20 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold text-[15px] ring-1 ring-blue-500/30"
          onClick={() => {
            setBookingReturnTarget('b2c-tow');
            show('b2c-service');
          }}
        >
          Request tow · from EGP 400
        </button>
        <div className="flex items-center justify-center gap-4 mt-3 text-xs font-semibold text-slate-600 dark:text-slate-400">
          <button type="button" className="tap flex items-center gap-1.5 py-1">
            <ProtoIcon name="phone" className="w-3.5 h-3.5 text-blue-600" />
            19255
          </button>
          <span className="text-slate-300">·</span>
          <button type="button" className="tap py-1 text-blue-700">
            Share live location
          </button>
        </div>
      </div>
      <ProtoHomeIndicator />
    </ScreenWrap>
  );
}

export const b2cDiscoveryScreens: Record<string, FC> = {
  'b2c-addcar': B2cAddcar,
  'b2c-map': B2cMap,
  'b2c-marketplace': B2cMarketplace,
  'b2c-filters': B2cFilters,
  'b2c-search': B2cSearch,
  'b2c-shop': B2cShop,
  'b2c-tow': B2cTow,
};
