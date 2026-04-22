import type { FC, ReactNode } from 'react';
import { B2cTabBar } from '../components/proto/TabBars';
import { ProtoHomeIndicator, ProtoStatusBar } from '../components/proto/Chrome';
import { ProtoIcon } from '../components/proto/Icon';
import { useProto } from '../context/ProtoContext';

function ScreenWrap({ id, children }: { id: string; children: ReactNode }) {
  return (
    <div className="screen active" data-screen={id}>
      {children}
    </div>
  );
}

export function B2cService() {
  const { show, t, bookingReturnTarget } = useProto();
  const rows = [
    ['Oil change (standard)', '5W-30 semi-synthetic · 4L', '45 min', 'EGP 350', 'fixed', true],
    ['Oil change (premium)', '5W-30 full synthetic · 4L', '45 min', 'EGP 620', 'fixed', false],
    ['Oil + filter combo', 'Standard oil + OEM filter', '1 h', 'EGP 450', 'fixed', false],
    ['Brake inspection', 'Free with any service', '15 min', 'Free', 'range', false],
  ] as const;
  return (
    <ScreenWrap id="b2c-service">
      <ProtoStatusBar />
      <div className="screen-topbar">
        <button type="button" className="funnel-back tap -ml-1" onClick={() => show(bookingReturnTarget)}>
          <ProtoIcon name="arrow-left" className="w-5 h-5" />
        </button>
        <div className="font-semibold text-slate-900 dark:text-slate-100">{t('book.service.title', 'Select service')}</div>
        <div className="w-10" />
      </div>
      <div className="flex-1 app-surface px-5 pt-4 overflow-y-auto min-h-0">
        <div className="label mb-2">{t('book.pick_car', 'Pick your car')}</div>
        <div className="flex gap-2 mb-5 overflow-x-auto">
          <div className="chip on whitespace-nowrap">
            <ProtoIcon name="car" className="w-3.5 h-3.5" />
            Toyota Corolla 2019
          </div>
          <div className="chip whitespace-nowrap">
            <ProtoIcon name="car" className="w-3.5 h-3.5" />
            Hyundai Tucson 2022
          </div>
          <div className="chip whitespace-nowrap">
            <ProtoIcon name="plus" className="w-3.5 h-3.5" />
            {t('book.add_car', 'Add car')}
          </div>
        </div>
        <div className="label mb-2">{t('book.services', 'Services')}</div>
        <div className="space-y-2">
          {rows.map(([rowTitle, d, dur, p, typ, on]) => (
            <label
              key={rowTitle}
              className={`flex items-center gap-3 p-3 rounded-xl border tap ${
                on
                  ? 'border-teal-500 bg-teal-50 dark:bg-teal-950/35 dark:border-teal-500'
                  : 'border-slate-200 dark:border-slate-600'
              }`}
            >
              <div
                className={`w-5 h-5 rounded-full border-2 ${
                  on ? 'border-teal-600' : 'border-slate-300 dark:border-slate-600'
                } flex items-center justify-center`}
              >
                {on ? <div className="w-2.5 h-2.5 rounded-full bg-teal-600" /> : null}
              </div>
              <div className="flex-1">
                <div className="font-semibold text-sm">{rowTitle}</div>
                <div className="text-xs text-slate-500 dark:text-slate-400">
                  {d} · {dur}
                </div>
              </div>
              <div className="text-right">
                <div className="font-semibold">{p}</div>
                <div className="text-[10px] uppercase text-slate-400 dark:text-slate-500">
                  {typ === 'range' ? t('book.from', 'from') : t('book.fixed', 'fixed')}
                </div>
              </div>
            </label>
          ))}
        </div>
        <div className="label mt-6 mb-2">{t('book.addons', 'Add-ons')}</div>
        <div className="p-3 rounded-xl border border-slate-200 dark:border-slate-600 flex justify-between items-center">
          <div>
            <div className="font-semibold text-sm">{t('book.cabin_filter', 'Cabin air filter')}</div>
            <div className="text-xs text-slate-500 dark:text-slate-400">{t('book.cabin_sub', 'OEM · +10 min')}</div>
          </div>
          <div className="flex items-center gap-2">
            <div className="text-sm font-semibold">+EGP 180</div>
            <div className="w-6 h-6 rounded-md border border-slate-300 dark:border-slate-600 flex items-center justify-center">
              <ProtoIcon name="plus" className="w-3.5 h-3.5" />
            </div>
          </div>
        </div>
      </div>
      <div className="cta-bar">
        <button type="button" className="btn-primary btn-primary-lg w-full tap shadow-md" onClick={() => show('b2c-slot')}>
          {t('book.continue_price', 'Continue · EGP 350')}
        </button>
      </div>
      <ProtoHomeIndicator />
    </ScreenWrap>
  );
}

export function B2cSlot() {
  const { show, t } = useProto();
  const days = ['Sat 18', 'Sun 19', 'Mon 20', 'Tue 21', 'Wed 22', 'Thu 23', 'Fri 24'];
  const morning = ['09:00', '09:30', '10:00', '10:30', '11:00', '11:30'];
  const afternoon = ['12:00', '12:30', '13:00', '14:00', '14:30', '15:00'];
  return (
    <ScreenWrap id="b2c-slot">
      <ProtoStatusBar />
      <div className="screen-topbar">
        <button type="button" className="funnel-back tap -ml-1" onClick={() => show('b2c-service')}>
          <ProtoIcon name="arrow-left" className="w-5 h-5" />
        </button>
        <div className="font-semibold text-slate-900 dark:text-slate-100">{t('book.slot.title', 'Pick a slot')}</div>
        <div className="w-10" />
      </div>
      <div className="flex-1 app-surface px-5 pt-4 overflow-y-auto min-h-0">
        <div className="flex gap-2 overflow-x-auto pb-2">
          {days.map((d, i) => (
            <div
              key={d}
              className={`min-w-[58px] text-center p-2 rounded-xl ${
                i === 0
                  ? 'bg-gradient-to-br from-teal-600 to-cyan-600 text-white shadow-md'
                  : 'border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-900'
              }`}
            >
              <div className={`text-xs ${i === 0 ? 'text-white/85' : 'text-slate-500 dark:text-slate-400'}`}>
                {d.split(' ')[0]}
              </div>
              <div className="font-bold">{d.split(' ')[1]}</div>
            </div>
          ))}
        </div>
        <div className="label mt-5 mb-2">{t('book.slot.morning', 'Morning')}</div>
        <div className="grid grid-cols-3 gap-2">
          {morning.map((time, i) => (
            <div
              key={time}
              className={`text-center py-2.5 rounded-xl text-sm ${
                i === 4
                  ? 'bg-gradient-to-br from-teal-600 to-emerald-600 text-white font-semibold shadow-md'
                  : i === 1 || i === 3
                    ? 'bg-slate-100 dark:bg-slate-800/80 text-slate-400 dark:text-slate-500 line-through'
                    : 'border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-900 font-medium'
              }`}
            >
              {time}
            </div>
          ))}
        </div>
        <div className="label mt-5 mb-2">{t('book.slot.afternoon', 'Afternoon')}</div>
        <div className="grid grid-cols-3 gap-2">
          {afternoon.map((time) => (
            <div
              key={time}
              className="text-center py-2.5 rounded-xl border border-slate-200 dark:border-slate-600 font-medium text-sm"
            >
              {time}
            </div>
          ))}
        </div>
        <div className="mt-5 p-3 rounded-xl bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200/80 flex gap-2 items-start shadow-sm">
          <ProtoIcon name="timer" className="w-4 h-4 text-amber-700 dark:text-amber-400 mt-0.5" />
          <div className="text-xs text-amber-950">
            <b>{t('book.slot.hold', 'Slot held for 10:00')}</b> · {t('book.slot.hold_sub', 'expires in 9m 42s. Complete payment to confirm.')}
          </div>
        </div>
      </div>
      <div className="cta-bar">
        <button type="button" className="btn-primary btn-primary-lg w-full tap shadow-md" onClick={() => show('b2c-payment')}>
          {t('common.continue', 'Continue')}
        </button>
      </div>
      <ProtoHomeIndicator />
    </ScreenWrap>
  );
}

export function B2cPayment() {
  const { show, t } = useProto();
  return (
    <ScreenWrap id="b2c-payment">
      <ProtoStatusBar />
      <div className="screen-topbar">
        <button type="button" className="funnel-back tap -ml-1" onClick={() => show('b2c-slot')}>
          <ProtoIcon name="arrow-left" className="w-5 h-5" />
        </button>
        <div className="font-semibold text-slate-900 dark:text-slate-100">{t('book.pay.title', 'Review & pay')}</div>
        <div className="w-10" />
      </div>
      <div className="flex-1 app-surface px-5 pt-4 overflow-y-auto min-h-0">
        <div className="app-panel p-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-teal-100 to-cyan-100 flex items-center justify-center">
              <ProtoIcon name="wrench" className="w-6 h-6 text-teal-700 dark:text-teal-400" />
            </div>
            <div className="flex-1">
              <div className="font-semibold text-sm">{t('book.pay.center', 'AutoPro Heliopolis')}</div>
              <div className="text-xs text-slate-500 dark:text-slate-400">{t('book.pay.when', 'Sat 18 Apr · 11:00 · ~45 min')}</div>
            </div>
          </div>
          <div className="divider my-3" />
          <div className="space-y-1.5 text-sm">
            <div className="flex justify-between">
              <span>Oil change (standard)</span>
              <span>EGP 350</span>
            </div>
            <div className="flex justify-between text-slate-500 dark:text-slate-400">
              <span>{t('book.pay.fee', 'Service fee')}</span>
              <span>EGP 15</span>
            </div>
            <div className="flex justify-between text-green-700">
              <span>{t('book.pay.promo', 'Promo FIRST50')}</span>
              <span>−EGP 50</span>
            </div>
          </div>
          <div className="divider my-3" />
          <div className="flex justify-between font-bold">
            <span>{t('book.pay.total', 'Total')}</span>
            <span>EGP 315</span>
          </div>
        </div>
        <div className="label mt-5 mb-2">{t('book.pay.method', 'Payment method')}</div>
        <div className="space-y-2">
          <label className="flex items-center gap-3 p-3 rounded-xl border-2 border-teal-500 bg-gradient-to-r from-teal-50 to-emerald-50/80 shadow-sm tap">
            <div className="w-5 h-5 rounded-full border-2 border-teal-600 flex items-center justify-center">
              <div className="w-2.5 h-2.5 rounded-full bg-teal-600" />
            </div>
            <ProtoIcon name="credit-card" className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
            <div className="flex-1">
              <div className="text-sm font-semibold">Visa •• 4242</div>
              <div className="text-xs text-slate-500 dark:text-slate-400">{t('book.pay.card_sub', 'Expires 08/27')}</div>
            </div>
          </label>
          <label className="flex items-center gap-3 p-3 rounded-xl border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-900 tap">
            <div className="w-5 h-5 rounded-full border-2 border-slate-300 dark:border-slate-600" />
            <ProtoIcon name="banknote" className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
            <div className="flex-1">
              <div className="text-sm font-semibold">{t('book.pay.cash', 'Cash on service')}</div>
              <div className="text-xs text-slate-500 dark:text-slate-400">{t('book.pay.cash_sub', 'Pay at the center')}</div>
            </div>
          </label>
          <label className="flex items-center gap-3 p-3 rounded-xl border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-900 tap">
            <div className="w-5 h-5 rounded-full border-2 border-slate-300 dark:border-slate-600" />
            <ProtoIcon name="wallet" className="w-5 h-5 text-violet-600 dark:text-violet-400" />
            <div className="flex-1">
              <div className="text-sm font-semibold">{t('book.pay.vf', 'Vodafone Cash')}</div>
              <div className="text-xs text-slate-500 dark:text-slate-400">+20 100 555 0142</div>
            </div>
          </label>
        </div>
        <div className="mt-5 callout-info flex items-start gap-2 text-xs text-slate-600 dark:text-slate-400 p-3">
          <ProtoIcon name="shield-check" className="w-4 h-4 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
          <div>
            {t('book.pay.refund', 'If the service can’t be completed as described, CarCare refunds within 48h.')}{' '}
            <span className="text-teal-700 dark:text-teal-400 font-semibold">{t('book.pay.learn', 'Learn more')}</span>
          </div>
        </div>
      </div>
      <div className="cta-bar">
        <button
          type="button"
          className="btn-accent btn-primary-lg w-full tap shadow-lg shadow-orange-500/25"
          onClick={() => show('b2c-confirmed')}
        >
          {t('book.pay.cta', 'Pay EGP 315 & confirm')}
        </button>
      </div>
      <ProtoHomeIndicator />
    </ScreenWrap>
  );
}

export function B2cConfirmed() {
  const { show, t } = useProto();
  return (
    <ScreenWrap id="b2c-confirmed">
      <ProtoStatusBar />
      <div className="flex-1 app-surface px-6 pt-12 pb-4 flex flex-col items-center text-center min-h-0 overflow-y-auto">
        <div className="confirmed-hero-icon mb-4">
          <ProtoIcon name="check" className="w-11 h-11" />
        </div>
        <div className="text-2xl font-bold">{t('book.confirmed.title', 'Booking confirmed')}</div>
        <div className="text-sm text-slate-500 dark:text-slate-400 mt-2 max-w-xs">{t('book.confirmed.lead', "You're booked at AutoPro Heliopolis on Sat 18 Apr at 11:00. We'll remind you an hour before.")}</div>
        <div className="mt-6 w-full app-panel p-4 text-left">
          <div className="flex justify-between text-xs text-slate-500 dark:text-slate-400">
            <span>{t('book.confirmed.id', 'Booking ID')}</span>
            <span>#CC-4A1F9</span>
          </div>
          <div className="divider my-2" />
          <div className="space-y-2 text-sm">
            <div className="flex items-center gap-2">
              <ProtoIcon name="calendar" className="w-4 h-4 text-slate-500 dark:text-slate-400" />
              <span>Sat 18 Apr · 11:00 AM</span>
            </div>
            <div className="flex items-center gap-2">
              <ProtoIcon name="map-pin" className="w-4 h-4 text-slate-500 dark:text-slate-400" />
              <span>AutoPro, 12 Baghdad St, Heliopolis</span>
            </div>
            <div className="flex items-center gap-2">
              <ProtoIcon name="car" className="w-4 h-4 text-slate-500 dark:text-slate-400" />
              <span>Toyota Corolla 2019</span>
            </div>
            <div className="flex items-center gap-2">
              <ProtoIcon name="wrench" className="w-4 h-4 text-slate-500 dark:text-slate-400" />
              <span>Oil change (standard)</span>
            </div>
          </div>
        </div>
        <div className="mt-4 w-full grid grid-cols-3 gap-2">
          <button type="button" className="btn-ghost py-2.5 text-xs flex flex-col items-center">
            <ProtoIcon name="calendar-plus" className="w-4 h-4 mb-1" />
            {t('book.confirmed.cal', 'Add to calendar')}
          </button>
          <button type="button" className="btn-ghost py-2.5 text-xs flex flex-col items-center">
            <ProtoIcon name="navigation" className="w-4 h-4 mb-1" />
            {t('book.confirmed.nav', 'Directions')}
          </button>
          <button type="button" className="btn-ghost py-2.5 text-xs flex flex-col items-center">
            <ProtoIcon name="phone" className="w-4 h-4 mb-1" />
            {t('book.confirmed.call', 'Call')}
          </button>
        </div>
      </div>
      <div className="cta-bar space-y-2">
        <button type="button" className="btn-primary btn-primary-lg w-full tap shadow-md" onClick={() => show('b2c-progress')}>
          {t('book.confirmed.view', 'View booking')}
        </button>
        <button
          type="button"
          className="text-sm w-full text-slate-600 dark:text-slate-400 font-medium tap py-2"
          onClick={() => show('b2c-map')}
        >
          {t('book.confirmed.map', 'Back to map')}
        </button>
      </div>
      <ProtoHomeIndicator />
    </ScreenWrap>
  );
}

export function B2cBookings() {
  const { show, t } = useProto();
  return (
    <ScreenWrap id="b2c-bookings">
      <ProtoStatusBar />
      <div className="px-5 pt-3 pb-3 flex items-center justify-between bg-white dark:bg-slate-900/90 border-b border-slate-100 dark:border-slate-700/80">
        <div className="font-bold text-xl tracking-tight text-slate-900 dark:text-slate-100">{t('book.list.title', 'Bookings')}</div>
        <button
          type="button"
          className="w-10 h-10 rounded-xl bg-gradient-to-br from-slate-100 to-indigo-50 border border-slate-200 dark:border-slate-600/80 flex items-center justify-center tap"
        >
          <ProtoIcon name="search" className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
        </button>
      </div>
      <div className="px-5 flex gap-6 border-b border-slate-200 dark:border-slate-600 text-sm font-semibold bg-white dark:bg-slate-900">
        <div className="pb-3 border-b-2 border-teal-600 text-teal-700 dark:text-teal-400">{t('book.list.upcoming', 'Upcoming')}</div>
        <div className="pb-3 text-slate-500 dark:text-slate-400">{t('book.list.progress', 'In progress')}</div>
        <div className="pb-3 text-slate-500 dark:text-slate-400">{t('book.list.past', 'Past')}</div>
      </div>
      <div className="flex-1 overflow-y-auto px-5 pt-4 space-y-3 app-surface min-h-0">
        <div
          className="tap p-4 rounded-2xl bg-white dark:bg-slate-900 border border-teal-100 shadow-md shadow-teal-900/5 ring-1 ring-teal-500/10"
          onClick={() => show('b2c-progress')}
          onKeyDown={(e) => e.key === 'Enter' && show('b2c-progress')}
          role="button"
          tabIndex={0}
        >
          <div className="flex justify-between items-start">
            <div>
              <div className="text-xs text-teal-700 dark:text-teal-400 font-bold uppercase tracking-wide mb-1">{t('book.list.today', 'Today · 11:00')}</div>
              <div className="font-semibold">Oil change — Toyota Corolla</div>
              <div className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">AutoPro Heliopolis · 0.8 km</div>
            </div>
            <span className="badge b-indigo">{t('book.list.badge.confirmed', 'Confirmed')}</span>
          </div>
          <div className="divider my-3" />
          <div className="flex gap-2">
            <button type="button" className="btn-ghost py-2 text-xs flex-1">
              {t('book.list.resched', 'Reschedule')}
            </button>
            <button type="button" className="btn-ghost py-2 text-xs flex-1">
              {t('book.list.cancel', 'Cancel')}
            </button>
          </div>
        </div>
        <div className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-600">
          <div className="flex justify-between items-start">
            <div>
              <div className="text-xs text-slate-500 dark:text-slate-400 font-bold uppercase tracking-wide mb-1">
                Tue 21 Apr · 16:00
              </div>
              <div className="font-semibold">Brake inspection — Hyundai Tucson</div>
              <div className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">Toyota Authorized · 2.4 km</div>
            </div>
            <span className="badge b-amber">{t('book.list.badge.await', 'Awaiting shop')}</span>
          </div>
        </div>
        <div className="label mt-5 mb-2">{t('book.list.past_lbl', 'Past')}</div>
        <div className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-600">
          <div className="flex justify-between items-start">
            <div>
              <div className="text-xs text-slate-500 dark:text-slate-400 font-bold uppercase tracking-wide mb-1">
                29 Mar · Completed
              </div>
              <div className="font-semibold">AC recharge — Toyota Corolla</div>
              <div className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">QuickFix Nasr City · EGP 450</div>
            </div>
            <button type="button" className="text-xs font-semibold text-teal-700 dark:text-teal-400 tap" onClick={() => show('b2c-review')}>
              {t('book.list.review', 'Review')}
            </button>
          </div>
        </div>
      </div>
      <B2cTabBar active="bookings" />
      <ProtoHomeIndicator />
    </ScreenWrap>
  );
}

export function B2cProgress() {
  const { show, t } = useProto();
  const steps = [
    [t('book.progress.step1', 'Booking confirmed'), '11:02 AM', true],
    [t('book.progress.step2', 'Checked in at center'), '11:15 AM', true],
    [t('book.progress.step3', 'In progress'), '11:22 AM', 'active'],
    [t('book.progress.step4', 'Ready for pickup'), '~ 12:00 PM', false],
    [t('book.progress.step5', 'Invoiced & paid'), '', false],
  ] as const;
  return (
    <ScreenWrap id="b2c-progress">
      <ProtoStatusBar />
      <div className="screen-topbar">
        <button type="button" className="funnel-back tap -ml-1" onClick={() => show('b2c-bookings')}>
          <ProtoIcon name="arrow-left" className="w-5 h-5" />
        </button>
        <div className="font-semibold text-slate-900 dark:text-slate-100">{t('book.detail.title', 'Booking')}</div>
        <button type="button" className="tap w-10 h-10 flex items-center justify-center rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800/80">
          <ProtoIcon name="more-horizontal" className="w-5 h-5" />
        </button>
      </div>
      <div className="flex-1 app-surface overflow-y-auto px-5 pt-4 min-h-0">
        <div className="p-4 rounded-2xl gradient-hero-brand text-white shadow-lg shadow-teal-900/20">
          <div className="text-xs uppercase tracking-wider opacity-80">{t('book.progress.status', 'Status')}</div>
          <div className="text-2xl font-bold mt-1">{t('book.progress.doing', 'In progress')}</div>
          <div className="text-sm opacity-80 mt-1">{t('book.progress.mech', 'Mechanic Ahmed is working on your car')}</div>
        </div>
        <div className="label mt-5 mb-2">{t('book.progress.timeline', 'Timeline')}</div>
        <div className="space-y-3">
          {steps.map(([rowTitle, time, done], i) => (
            <div key={rowTitle} className="flex gap-3">
              <div className="flex flex-col items-center">
                <div
                  className={`w-6 h-6 rounded-full ${
                    done === true
                      ? 'bg-emerald-500'
                      : done === 'active'
                        ? 'timeline-dot-active'
                        : 'bg-slate-200'
                  } flex items-center justify-center`}
                >
                  {done === true ? <ProtoIcon name="check" className="w-3.5 h-3.5 text-white" /> : null}
                  {done === 'active' ? <div className="w-2 h-2 bg-white dark:bg-slate-900 rounded-full" /> : null}
                </div>
                {i < steps.length - 1 ? (
                  <div
                    className={`flex-1 w-0.5 ${done === true ? 'bg-gradient-to-b from-emerald-500 to-teal-500' : 'bg-slate-200'}`}
                    style={{ minHeight: 18 }}
                  />
                ) : null}
              </div>
              <div className="pb-3 flex-1">
                <div className={`text-sm font-semibold ${done ? '' : 'text-slate-400 dark:text-slate-500'}`}>{rowTitle}</div>
                <div className="text-xs text-slate-500 dark:text-slate-400">{time}</div>
              </div>
            </div>
          ))}
        </div>
        <div className="label mt-3 mb-2">{t('book.progress.shop', 'Shop')}</div>
        <div className="app-panel p-3 flex items-center gap-3">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-teal-100 to-cyan-50 flex items-center justify-center">
            <ProtoIcon name="wrench" className="w-6 h-6 text-teal-700 dark:text-teal-400" />
          </div>
          <div className="flex-1">
            <div className="font-semibold text-sm">AutoPro Heliopolis</div>
            <div className="text-xs text-slate-500 dark:text-slate-400">Booking #CC-4A1F9</div>
          </div>
          <button type="button" className="w-10 h-10 rounded-full bg-gradient-to-br from-teal-600 to-emerald-600 flex items-center justify-center text-white tap shadow-md">
            <ProtoIcon name="phone" className="w-4 h-4" />
          </button>
          <button type="button" className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center tap text-indigo-700">
            <ProtoIcon name="message-circle" className="w-4 h-4" />
          </button>
        </div>
        <div className="label mt-5 mb-2">{t('book.progress.invoice', 'Invoice (so far)')}</div>
        <div className="app-panel p-4 space-y-1 text-sm">
          <div className="flex justify-between">
            <span>Oil change (standard)</span>
            <span>EGP 350</span>
          </div>
          <div className="flex justify-between text-slate-400 dark:text-slate-500 italic">
            <span>{t('book.progress.addon', '+ Cabin filter (pending approval)')}</span>
            <span>EGP 180</span>
          </div>
          <div className="divider my-2" />
          <div className="flex justify-between font-bold">
            <span>{t('book.pay.total', 'Total')}</span>
            <span>EGP 350</span>
          </div>
        </div>
        <button type="button" className="mt-4 w-full py-3 rounded-xl text-sm font-semibold border border-slate-200 dark:border-slate-600 tap">
          {t('book.progress.add_btn', 'Add cabin filter (+EGP 180)')}
        </button>
        <div className="h-6" />
      </div>
      <ProtoHomeIndicator />
    </ScreenWrap>
  );
}

export function B2cReview() {
  const { show, t } = useProto();
  const breakdown = [
    ['Quality', 4],
    ['Price', 5],
    ['Speed', 4],
    ['Honesty', 5],
  ] as const;
  return (
    <ScreenWrap id="b2c-review">
      <ProtoStatusBar />
      <div className="screen-topbar">
        <button type="button" className="funnel-back tap -ml-1" onClick={() => show('b2c-bookings')}>
          <ProtoIcon name="x" className="w-5 h-5" />
        </button>
        <div className="font-semibold text-slate-900 dark:text-slate-100">{t('book.review.title', 'Rate your service')}</div>
        <div className="w-10" />
      </div>
      <div className="flex-1 app-surface px-5 pt-4 overflow-y-auto min-h-0">
        <div className="text-center pt-4">
          <div className="w-16 h-16 rounded-2xl bg-slate-200 mx-auto mb-3" />
          <div className="font-bold text-lg">AutoPro Heliopolis</div>
          <div className="text-xs text-slate-500 dark:text-slate-400">AC recharge · 29 Mar</div>
        </div>
        <div className="flex justify-center gap-2 mt-5">
          {[1, 1, 1, 1, 0].map((on, i) => (
            <ProtoIcon key={i} name="star" className={`w-10 h-10 ${on ? 'text-amber-500 fill-amber-500' : 'text-slate-300'}`} />
          ))}
        </div>
        <div className="text-center text-sm font-semibold mt-2">{t('book.rev.great', 'Great experience')}</div>
        <div className="label mt-6 mb-2">{t('book.rev.breakdown', 'Break it down')}</div>
        {breakdown.map(([label, r]) => (
          <div key={label} className="flex justify-between items-center py-2">
            <div className="text-sm">
              {label === 'Quality'
                ? t('disc.shop.rev.quality', 'Quality')
                : label === 'Price'
                  ? t('disc.shop.rev.price', 'Price')
                  : label === 'Speed'
                    ? t('disc.shop.rev.speed', 'Speed')
                    : t('disc.shop.rev.honesty', 'Honesty')}
            </div>
            <div className="flex gap-0.5">
              {[1, 2, 3, 4, 5].map((i) => (
                <ProtoIcon
                  key={i}
                  name="star"
                  className={`w-4 h-4 ${i <= r ? 'text-amber-500 fill-amber-500' : 'text-slate-300'}`}
                />
              ))}
            </div>
          </div>
        ))}
        <div className="label mt-4 mb-2">{t('book.rev.tell', 'Tell others (optional)')}</div>
        <textarea className="proto-input w-full p-3 text-sm h-24 resize-none" placeholder={t('book.rev.comment_ph', 'What stood out?')} />
        <div className="label mt-4 mb-2">{t('book.rev.photos', 'Add photos')}</div>
        <div className="flex gap-2">
          <div className="w-16 h-16 rounded-xl border-2 border-dashed border-slate-300 dark:border-slate-600 flex items-center justify-center">
            <ProtoIcon name="plus" className="w-5 h-5 text-slate-400 dark:text-slate-500" />
          </div>
          <div className="w-16 h-16 rounded-xl bg-slate-200" />
        </div>
      </div>
      <div className="cta-bar">
        <button type="button" className="btn-primary btn-primary-lg w-full tap shadow-md" onClick={() => show('b2c-bookings')}>
          {t('book.rev.submit', 'Submit review')}
        </button>
      </div>
      <ProtoHomeIndicator />
    </ScreenWrap>
  );
}

export const b2cBookingScreens: Record<string, FC> = {
  'b2c-service': B2cService,
  'b2c-slot': B2cSlot,
  'b2c-payment': B2cPayment,
  'b2c-confirmed': B2cConfirmed,
  'b2c-bookings': B2cBookings,
  'b2c-progress': B2cProgress,
  'b2c-review': B2cReview,
};
