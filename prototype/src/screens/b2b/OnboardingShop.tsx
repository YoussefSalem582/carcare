import { ProtoFunnelProgress, ProtoHomeIndicator, ProtoStatusBar } from '../../components/proto/Chrome';
import { BrandLogo } from '../../components/proto/BrandLogo';
import { ProtoIcon } from '../../components/proto/Icon';
import { B2bTabBar, B2bTopbarMobile, OnboardStepper } from '../../components/proto/TabBars';
import { useProto } from '../../context/ProtoContext';
import { ScreenWrap } from '../shared/ScreenWrap';

export function B2bOnboard1() {
  const { show, t } = useProto();
  return (
    <ScreenWrap id="b2b-onboard-1">
      <ProtoStatusBar />
      <div className="flex-1 flex flex-col min-h-0 app-surface">
        <B2bTopbarMobile title={t('b2b.top.welcome', 'Welcome, Omar')} />
        <div className="flex-1 overflow-y-auto p-4 min-h-0">
          <OnboardStepper active={0} />
          <div className="onboard-card-proto p-4">
            <div className="text-lg font-bold text-slate-900 dark:text-slate-100">{t('b2b.on1.title', 'Business information')}</div>
            <div className="text-sm text-slate-600 dark:text-slate-400 mt-0.5">{t('b2b.on1.lead', 'Used for verification and on your public listing.')}</div>
            <div className="mt-4 space-y-3">
              <div>
                <div className="label mb-1.5">{t('b2b.on1.legal', 'Legal name')}</div>
                <input
                  className="proto-input w-full px-3.5 py-2.5 text-sm"
                  defaultValue={t('demo.onboard.legal_name', 'AutoPro Automotive Services LLC')}
                  autoComplete="off"
                />
              </div>
              <div>
                <div className="label mb-1.5">{t('b2b.on1.trade', 'Trade name (shown to users)')}</div>
                <input
                  className="proto-input w-full px-3.5 py-2.5 text-sm"
                  defaultValue={t('demo.shop.name', 'AutoPro Heliopolis')}
                  autoComplete="off"
                />
              </div>
              <div>
                <div className="label mb-1.5">{t('b2b.on1.tax', 'Tax ID')}</div>
                <input
                  className="proto-input w-full px-3.5 py-2.5 text-sm"
                  defaultValue={t('demo.onboard.tax_id', '415-228-9910')}
                  autoComplete="off"
                />
              </div>
              <div>
                <div className="label mb-1.5">{t('b2b.on1.cr', 'Commercial registration #')}</div>
                <input className="proto-input w-full px-3.5 py-2.5 text-sm" defaultValue={t('demo.onboard.cr', 'CR-88421')} autoComplete="off" />
              </div>
              <div>
                <div className="label mb-1.5">{t('b2b.on1.address', 'Address')}</div>
                <input
                  className="proto-input w-full px-3.5 py-2.5 text-sm"
                  defaultValue={t('demo.onboard.address_line', '12 Baghdad St, Heliopolis, Cairo')}
                  autoComplete="off"
                />
              </div>
              <div>
                <div className="label mb-1.5">{t('b2b.on1.city', 'City')}</div>
                <input className="proto-input w-full px-3.5 py-2.5 text-sm" defaultValue={t('demo.onboard.city', 'Cairo')} autoComplete="off" />
              </div>
              <div>
                <div className="label mb-1.5">{t('b2b.on1.pin', 'Pin on map')}</div>
                <div className="proto-input px-3.5 py-2.5 text-sm flex justify-between items-center">
                  <span>{t('demo.onboard.coords', '30.0980°N · 31.3411°E')}</span>
                  <span className="text-teal-700 font-semibold tap">{t('b2b.on1.adjust', 'Adjust')}</span>
                </div>
              </div>
              <div>
                <div className="label mb-1.5">{t('b2b.on1.biztype', 'Business type')}</div>
                <div className="proto-input px-3.5 py-2.5 text-sm flex justify-between items-center">
                  {t('b2b.on1.independent', 'Independent workshop')}{' '}
                  <ProtoIcon name="chevron-down" className="w-4 h-4 text-slate-400 dark:text-slate-500" />
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

export function B2bOnboard3() {
  const { show, t } = useProto();
  const fixed = t('b2b.cat.fixed', 'Fixed');
  const svcs = [
    [t('b2b.on3.s1', 'Oil change (standard)'), t('b2b.on3.s1.dur', '45 min'), fixed, '350'],
    [t('b2b.on3.s2', 'Brake pads — front'), t('b2b.on3.s2.dur', '1.5 h'), fixed, '650'],
    [t('b2b.on3.s3', 'AC recharge'), t('b2b.on3.s3.dur', '1 h'), fixed, '450'],
  ];
  return (
    <ScreenWrap id="b2b-onboard-3">
      <ProtoStatusBar />
      <div className="flex-1 flex flex-col min-h-0 app-surface">
        <B2bTopbarMobile title={t('b2b.top.welcome', 'Welcome, Omar')} />
        <div className="flex-1 overflow-y-auto p-4 min-h-0">
          <OnboardStepper active={1} />
          <div className="onboard-card-proto p-4">
            <div className="text-lg font-bold text-slate-900 dark:text-slate-100">{t('b2b.cat.title', 'Your service catalog')}</div>
            <div className="text-sm text-slate-600 dark:text-slate-400 mt-0.5">{t('b2b.cat.lead', 'Start with presets — you can edit any time.')}</div>
            <button
              type="button"
              className="btn-ghost py-2 px-3 text-xs w-full mt-3 flex items-center justify-center gap-1 border border-violet-200 bg-violet-50/50 text-violet-900"
            >
              <ProtoIcon name="wand-2" className="w-3.5 h-3.5" />
              {t('b2b.cat.presets', 'Add 12 common services')}
            </button>
            <div className="mt-4 space-y-2">
              {svcs.map(([s, d, typ, p]) => (
                <div
                  key={s}
                  className="p-3 rounded-xl border border-slate-200 dark:border-slate-600/90 bg-gradient-to-r from-white to-teal-50/30 flex justify-between items-center gap-2 shadow-sm"
                >
                  <div className="min-w-0">
                    <div className="font-semibold text-sm text-slate-900 dark:text-slate-100">{s}</div>
                    <div className="text-xs text-slate-600 dark:text-slate-400">
                      {d} · <span className="badge b-slate">{typ}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 flex-shrink-0">
                    <span className="text-sm font-bold text-teal-800">{p}</span>
                    <ProtoIcon name="pencil" className="w-4 h-4 text-violet-500" />
                  </div>
                </div>
              ))}
            </div>
            <button type="button" className="mt-3 text-sm text-teal-700 font-semibold flex items-center gap-1 w-full justify-center tap py-2">
              <ProtoIcon name="plus" className="w-4 h-4" />
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
  const rows = [
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
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-amber-200 to-orange-200 flex items-center justify-center mx-auto shadow-md border border-amber-300/50">
              <ProtoIcon name="shield-check" className="w-7 h-7 text-amber-900" />
            </div>
            <div className="text-xl font-bold mt-3">{t('b2b.pend.title', 'Verification in progress')}</div>
            <div className="text-sm text-slate-500 dark:text-slate-400 mt-2">{t('b2b.pend.lead', 'We’re reviewing your business and catalog. Typical turnaround is 24–48 hours.')}</div>
            <div className="mt-5 text-left space-y-1.5">
              {rows.map(([rowTitle, s]) => (
                <div key={rowTitle} className="flex items-center gap-2 p-1.5">
                  <div
                    className={`w-5 h-5 rounded-full ${
                      s === 'done' ? 'bg-teal-600' : s === 'review' ? 'bg-amber-500' : 'bg-slate-200'
                    } flex items-center justify-center text-white text-[10px] font-bold`}
                  >
                    {s === 'done' ? '✓' : s === 'review' ? '…' : ''}
                  </div>
                  <div className="flex-1 text-xs font-medium">{rowTitle}</div>
                  <div className="text-[10px] text-slate-500 dark:text-slate-400">
                    {s === 'done' ? t('b2b.pend.done', 'Done') : s === 'review' ? t('b2b.pend.review', 'In review') : t('b2b.pend.wait', 'Wait')}
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-4 p-3 rounded-xl callout-success text-xs text-emerald-950 text-left border border-emerald-200/60">
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

