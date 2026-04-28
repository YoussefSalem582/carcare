import { B2cTabBar } from '../../../components/proto/TabBars';
import { ProtoHomeIndicator, ProtoStatusBar } from '../../../components/proto/Chrome';
import { ProtoIcon } from '../../../components/proto/Icon';
import { useProto } from '../../../context/ProtoContext';
import { ScreenWrap } from '../../shared/ScreenWrap';

export function B2cService() {
  const { show, t, bookingReturnTarget } = useProto();
  const rows = [
    [
      t('demo.flow.svc_std_title', 'Oil change (standard)'),
      t('demo.flow.svc_std_sub', '5W-30 semi-synthetic · 4L'),
      t('demo.flow.svc_std_dur', '45 min'),
      t('demo.flow.price_350', 'EGP 350'),
      'fixed',
      true,
    ],
    [
      t('demo.flow.svc_prem_title', 'Oil change (premium)'),
      t('demo.flow.svc_prem_sub', '5W-30 full synthetic · 4L'),
      t('demo.flow.svc_std_dur', '45 min'),
      t('demo.flow.price_620', 'EGP 620'),
      'fixed',
      false,
    ],
    [
      t('demo.flow.svc_combo_title', 'Oil + filter combo'),
      t('demo.flow.svc_combo_sub', 'Standard oil + OEM filter'),
      t('demo.flow.svc_combo_dur', '1 h'),
      t('demo.flow.price_450', 'EGP 450'),
      'fixed',
      false,
    ],
    [
      t('demo.flow.svc_insp_title', 'Brake inspection'),
      t('demo.flow.svc_insp_sub', 'Free with any service'),
      t('demo.flow.svc_insp_dur', '15 min'),
      t('demo.flow.price_free', 'Free'),
      'range',
      false,
    ],
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
            {t('demo.flow.car_corolla_2019', 'Toyota Corolla 2019')}
          </div>
          <div className="chip whitespace-nowrap">
            <ProtoIcon name="car" className="w-3.5 h-3.5" />
            {t('demo.flow.car_tucson_2022', 'Hyundai Tucson 2022')}
          </div>
          <div className="chip whitespace-nowrap">
            <ProtoIcon name="plus" className="w-3.5 h-3.5" />
            {t('book.add_car', 'Add car')}
          </div>
        </div>
        <div className="label mb-2">{t('book.services', 'Services')}</div>
        <div className="space-y-2">
          {rows.map(([rowTitle, d, dur, p, typ, on], idx) => (
            <label
              key={idx}
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
            <div className="text-sm font-semibold">{t('demo.flow.addon_180', '+EGP 180')}</div>
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
  const days = [
    t('demo.slot.d1', 'Sat 18'),
    t('demo.slot.d2', 'Sun 19'),
    t('demo.slot.d3', 'Mon 20'),
    t('demo.slot.d4', 'Tue 21'),
    t('demo.slot.d5', 'Wed 22'),
    t('demo.slot.d6', 'Thu 23'),
    t('demo.slot.d7', 'Fri 24'),
  ];
  const morning = [
    t('demo.slot.t0900', '09:00'),
    t('demo.slot.t0930', '09:30'),
    t('demo.slot.t1000', '10:00'),
    t('demo.slot.t1030', '10:30'),
    t('demo.slot.t1100', '11:00'),
    t('demo.slot.t1130', '11:30'),
  ];
  const afternoon = [
    t('demo.slot.t1200', '12:00'),
    t('demo.slot.t1230', '12:30'),
    t('demo.slot.t1300', '13:00'),
    t('demo.slot.t1400', '14:00'),
    t('demo.slot.t1430', '14:30'),
    t('demo.slot.t1500', '15:00'),
  ];
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
              <span>{t('demo.pay.line_oil', 'Oil change (standard)')}</span>
              <span>{t('demo.flow.price_350', 'EGP 350')}</span>
            </div>
            <div className="flex justify-between text-slate-500 dark:text-slate-400">
              <span>{t('book.pay.fee', 'Service fee')}</span>
              <span>{t('demo.pay.fee_15', 'EGP 15')}</span>
            </div>
            <div className="flex justify-between text-green-700">
              <span>{t('book.pay.promo', 'Promo FIRST50')}</span>
              <span>{t('demo.pay.discount_50', '−EGP 50')}</span>
            </div>
          </div>
          <div className="divider my-3" />
          <div className="flex justify-between font-bold">
            <span>{t('book.pay.total', 'Total')}</span>
            <span>{t('demo.pay.total_315', 'EGP 315')}</span>
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
              <div className="text-sm font-semibold">{t('demo.pay.card_mask', 'Visa •• 4242')}</div>
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
              <div className="text-xs text-slate-500 dark:text-slate-400">{t('demo.pay.vf_phone', '+20 100 555 0142')}</div>
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
            <span>{t('demo.track.booking_id', '#CC-4A1F9')}</span>
          </div>
          <div className="divider my-2" />
          <div className="space-y-2 text-sm">
            <div className="flex items-center gap-2">
              <ProtoIcon name="calendar" className="w-4 h-4 text-slate-500 dark:text-slate-400" />
              <span>{t('demo.confirmed.when_detail', 'Sat 18 Apr · 11:00 AM')}</span>
            </div>
            <div className="flex items-center gap-2">
              <ProtoIcon name="map-pin" className="w-4 h-4 text-slate-500 dark:text-slate-400" />
              <span>{t('demo.confirmed.address', 'AutoPro, 12 Baghdad St, Heliopolis')}</span>
            </div>
            <div className="flex items-center gap-2">
              <ProtoIcon name="car" className="w-4 h-4 text-slate-500 dark:text-slate-400" />
              <span>{t('demo.confirmed.car_line', 'Toyota Corolla 2019')}</span>
            </div>
            <div className="flex items-center gap-2">
              <ProtoIcon name="wrench" className="w-4 h-4 text-slate-500 dark:text-slate-400" />
              <span>{t('demo.pay.line_oil', 'Oil change (standard)')}</span>
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

