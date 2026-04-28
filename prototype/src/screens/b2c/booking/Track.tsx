import { B2cTabBar } from '../../../components/proto/TabBars';
import { ProtoHomeIndicator, ProtoStatusBar } from '../../../components/proto/Chrome';
import { ProtoIcon } from '../../../components/proto/Icon';
import { useProto } from '../../../context/ProtoContext';
import { ScreenWrap } from '../../shared/ScreenWrap';

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
              <div className="font-semibold">{t('demo.track.job_oil_corolla', 'Oil change — Toyota Corolla')}</div>
              <div className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                {t('demo.track.meta_autopro_km', 'AutoPro Heliopolis · 0.8 km')}
              </div>
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
                {t('demo.track.when_tue', 'Tue 21 Apr · 16:00')}
              </div>
              <div className="font-semibold">{t('demo.track.job_brake_tucson', 'Brake inspection — Hyundai Tucson')}</div>
              <div className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                {t('demo.track.meta_toyota_km', 'Toyota Authorized · 2.4 km')}
              </div>
            </div>
            <span className="badge b-amber">{t('book.list.badge.await', 'Awaiting shop')}</span>
          </div>
        </div>
        <div className="label mt-5 mb-2">{t('book.list.past_lbl', 'Past')}</div>
        <div className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-600">
          <div className="flex justify-between items-start">
            <div>
              <div className="text-xs text-slate-500 dark:text-slate-400 font-bold uppercase tracking-wide mb-1">
                {t('demo.track.past_when_done', '29 Mar · Completed')}
              </div>
              <div className="font-semibold">{t('demo.track.job_ac_corolla', 'AC recharge — Toyota Corolla')}</div>
              <div className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                {t('demo.track.meta_quickfix_pay', 'QuickFix Nasr City · EGP 450')}
              </div>
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
    [t('book.progress.step1', 'Booking confirmed'), t('demo.track.step_t1', '11:02 AM'), true],
    [t('book.progress.step2', 'Checked in at center'), t('demo.track.step_t2', '11:15 AM'), true],
    [t('book.progress.step3', 'In progress'), t('demo.track.step_t3', '11:22 AM'), 'active'],
    [t('book.progress.step4', 'Ready for pickup'), t('demo.track.step_t4', '~ 12:00 PM'), false],
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
            <div className="font-semibold text-sm">{t('demo.search.r1_name', 'AutoPro Heliopolis')}</div>
            <div className="text-xs text-slate-500 dark:text-slate-400">
              {t('demo.track.booking_ref', 'Booking #CC-4A1F9')}
            </div>
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
            <span>{t('demo.track.inv_line_oil', 'Oil change (standard)')}</span>
            <span>{t('demo.track.price_350', 'EGP 350')}</span>
          </div>
          <div className="flex justify-between text-slate-400 dark:text-slate-500 italic">
            <span>{t('book.progress.addon', '+ Cabin filter (pending approval)')}</span>
            <span>{t('demo.track.price_180', 'EGP 180')}</span>
          </div>
          <div className="divider my-2" />
          <div className="flex justify-between font-bold">
            <span>{t('book.pay.total', 'Total')}</span>
            <span>{t('demo.track.price_350', 'EGP 350')}</span>
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
          <div className="font-bold text-lg">{t('demo.search.r1_name', 'AutoPro Heliopolis')}</div>
          <div className="text-xs text-slate-500 dark:text-slate-400">
            {t('demo.track.review_ctx', 'AC recharge · 29 Mar')}
          </div>
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

