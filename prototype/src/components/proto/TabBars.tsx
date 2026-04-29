import { Fragment } from 'react';
import { useProto } from '../../context/ProtoContext';
import { ProtoIcon } from './Icon';

export function B2cTabBar({ active }: { active: string }) {
  const { show, t } = useProto();
  /** Order: Home first (conventional), then map → bookings → shop → garage. */
  const items: [string, string, string, string][] = [
    ['b2c-dashboard', t('tabs.b2c.home', 'Home'), 'home', 'home'],
    ['b2c-map', t('tabs.b2c.map', 'Map'), 'map', 'map'],
    ['b2c-bookings', t('tabs.b2c.bookings', 'Bookings'), 'calendar-check', 'bookings'],
    ['b2c-marketplace', t('tabs.b2c.shop', 'Shop'), 'store', 'market'],
    ['b2c-garage', t('tabs.b2c.garage', 'Garage'), 'car', 'garage'],
  ];
  return (
    <nav className="tab-bar" aria-label={t('tabs.b2c.nav_label', 'Primary navigation')}>
      {items.map(([id, label, icon, key]) => {
        const isOn = active === key;
        if (isOn) {
          return (
            <span key={id} className="tab on" aria-current="page">
              <ProtoIcon name={icon} className="ic" strokeWidth={1.65} aria-hidden />
              {label}
            </span>
          );
        }
        return (
          <button key={id} type="button" className="tab tap" onClick={() => show(id)}>
            <ProtoIcon name={icon} className="ic" strokeWidth={1.65} aria-hidden />
            {label}
          </button>
        );
      })}
    </nav>
  );
}

export function B2bTopbarMobile({ title }: { title: string }) {
  return (
    <div className="b2b-topbar h-12 flex items-center px-4 justify-between flex-shrink-0">
      <div className="font-semibold text-sm truncate max-w-[200px] text-slate-900 dark:text-slate-100">{title}</div>
      <div className="flex items-center gap-1">
        <button
          type="button"
          className="w-9 h-9 rounded-xl border border-slate-200 dark:border-slate-600 flex items-center justify-center tap"
        >
          <ProtoIcon name="search" className="w-4 h-4 text-slate-500 dark:text-slate-400" />
        </button>
        <div className="relative w-9 h-9 flex items-center justify-center tap">
          <ProtoIcon name="bell" className="w-5 h-5 text-slate-500 dark:text-slate-400" />
          <span className="absolute top-0.5 right-0.5 w-3.5 h-3.5 rounded-full bg-red-500 text-white text-[8px] font-bold flex items-center justify-center">
            3
          </span>
        </div>
      </div>
    </div>
  );
}

export function B2bTabBar({ active }: { active: string }) {
  const { show, t } = useProto();
  const items: [string, string, string, string][] = [
    ['b2b-dashboard', t('tabs.b2b.today', 'Today'), 'layout-dashboard', 'dashboard'],
    ['b2b-bookings', t('tabs.b2b.bookings', 'Bookings'), 'calendar', 'bookings'],
    ['b2b-catalog', t('tabs.b2b.catalog', 'Catalog'), 'tag', 'catalog'],
    ['b2b-more', t('tabs.b2b.more', 'More'), 'menu', 'more'],
  ];
  return (
    <nav className="b2b-tab-bar" aria-label={t('tabs.b2b.nav_label', 'Workshop navigation')}>
      {items.map(([id, label, icon, key]) => {
        const isOn = active === key;
        if (isOn) {
          return (
            <span key={id} className="tab on" aria-current="page">
              <ProtoIcon name={icon} className="ic" strokeWidth={1.65} aria-hidden />
              {label}
            </span>
          );
        }
        return (
          <button key={id} type="button" className="tab tap" onClick={() => show(id)}>
            <ProtoIcon name={icon} className="ic" strokeWidth={1.65} aria-hidden />
            {label}
          </button>
        );
      })}
    </nav>
  );
}

export function OnboardStepper({ active }: { active: number }) {
  const { t } = useProto();
  const steps = [t('onboard.step_business', 'Business'), t('onboard.step_catalog', 'Catalog')];
  return (
    <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-4">
      {steps.map((s, i) => (
        <Fragment key={s}>
          <div className="flex items-center gap-2">
            <div
              className={`w-7 h-7 rounded-full ${
                i <= active
                  ? 'bg-teal-600 text-white'
                  : 'bg-slate-200 dark:bg-slate-600 text-slate-500 dark:text-slate-300'
              } flex items-center justify-center text-xs font-bold`}
            >
              {i < active ? '✓' : i + 1}
            </div>
            <div
              className={`text-sm font-medium ${i === active ? 'text-slate-900 dark:text-slate-100' : 'text-slate-500 dark:text-slate-400'}`}
            >
              {s}
            </div>
          </div>
          {i < steps.length - 1 ? (
            <div
              className={`w-8 h-px ${i < active ? 'bg-teal-600' : 'bg-slate-200 dark:bg-slate-600'}`}
            />
          ) : null}
        </Fragment>
      ))}
    </div>
  );
}
