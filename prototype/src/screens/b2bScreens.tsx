import type { FC, ReactNode } from 'react';
import { ProtoFunnelProgress, ProtoHomeIndicator, ProtoStatusBar } from '../components/proto/Chrome';
import { ProtoIcon } from '../components/proto/Icon';
import { B2bTabBar, B2bTopbarMobile, OnboardStepper } from '../components/proto/TabBars';
import { useProto } from '../context/ProtoContext';

function ScreenWrap({ id, children }: { id: string; children: ReactNode }) {
  return (
    <div className="screen active" data-screen={id}>
      {children}
    </div>
  );
}

export function B2bSplash() {
  const { show, t } = useProto();
  return (
    <ScreenWrap id="b2b-splash">
      <ProtoStatusBar />
      <ProtoFunnelProgress step={1} total={6} />
      <div className="flex-1 flex flex-col items-center justify-center px-8 text-center funnel-hero-b2b">
        <div className="preauth-splash-b2b-mark">
          <ProtoIcon name="wrench" className="w-11 h-11" />
        </div>
        <h1 className="preauth-splash-b2b-title">{t('b2b.splash.title', 'CarCare Business')}</h1>
        <p className="preauth-splash-b2b-tagline mx-auto">
          {t('b2b.splash.tagline', 'Take bookings, manage your catalog, get paid.')}
        </p>
        <button type="button" className="preauth-splash-b2b-cta tap" onClick={() => show('b2b-lang')}>
          {t('b2c.splash.cta', 'Get started')}
        </button>
        <button type="button" className="preauth-splash-b2b-secondary tap" onClick={() => show('b2b-auth')}>
          {t('b2b.splash.have_account', 'I already have an account')}
        </button>
      </div>
      <ProtoHomeIndicator />
    </ScreenWrap>
  );
}

export function B2bLang() {
  const { show, t, locale, setLocale } = useProto();
  return (
    <ScreenWrap id="b2b-lang">
      <ProtoStatusBar />
      <ProtoFunnelProgress step={2} total={6} />
      <div className="preauth-funnel-surface preauth-funnel-surface--white min-h-0">
        <div className="funnel-nav">
          <button
            type="button"
            className="funnel-back tap"
            onClick={() => show('b2b-splash')}
            aria-label={t('a11y.back', 'Back')}
          >
            <ProtoIcon name="arrow-left" className="w-5 h-5" />
          </button>
          <span className="funnel-nav-title">{t('b2c.lang.nav_title', 'Language')}</span>
        </div>
        <div className="preauth-funnel-scroll px-6 pt-5 pb-5 flex flex-col">
          <span className="preauth-eyebrow">{t('b2b.lang.eyebrow', 'Business app')}</span>
          <h2 className="preauth-headline">{t('b2c.lang.headline', 'Choose your language')}</h2>
          <p className="preauth-sub">
            {t('b2b.lang.sub', 'Applies to your dashboard and customer-facing copy. Change anytime in Settings.')}
          </p>
          <div className="preauth-lang-grid">
            <button
              type="button"
              className={`preauth-lang-option ${locale === 'en' ? 'preauth-lang-option--active' : ''} tap`}
              onClick={() => setLocale('en')}
            >
              <span className="preauth-lang-label">{t('b2c.lang.en', 'English')}</span>
              {locale === 'en' ? (
                <ProtoIcon name="check" className="w-5 h-5 text-teal-700 dark:text-teal-400 flex-shrink-0" />
              ) : null}
            </button>
            <button
              type="button"
              className={`preauth-lang-option ${locale === 'ar-EG' ? 'preauth-lang-option--active' : ''} tap`}
              onClick={() => setLocale('ar-EG')}
            >
              <span className="preauth-lang-label">{t('b2c.lang.ar_eg', 'العربية (مصر)')}</span>
              <span className="preauth-lang-meta">{t('b2c.lang.ar_meta', 'RTL layout')}</span>
              {locale === 'ar-EG' ? (
                <ProtoIcon name="check" className="w-5 h-5 text-teal-700 dark:text-teal-400 flex-shrink-0" />
              ) : null}
            </button>
          </div>
          <div className="flex-1 min-h-4" />
          <button type="button" className="btn-primary btn-primary-lg w-full tap" onClick={() => show('b2b-onboarding')}>
            {t('common.continue', 'Continue')}
          </button>
        </div>
      </div>
      <ProtoHomeIndicator />
    </ScreenWrap>
  );
}

export function B2bOnboarding() {
  const { show, t } = useProto();
  return (
    <ScreenWrap id="b2b-onboarding">
      <ProtoStatusBar />
      <ProtoFunnelProgress step={3} total={6} />
      <div className="preauth-funnel-surface min-h-0">
        <div className="funnel-nav">
          <button
            type="button"
            className="funnel-back tap"
            onClick={() => show('b2b-lang')}
            aria-label={t('a11y.back', 'Back')}
          >
            <ProtoIcon name="arrow-left" className="w-5 h-5" />
          </button>
          <span className="funnel-nav-spacer" />
          <button type="button" className="funnel-skip tap" onClick={() => show('b2b-auth')}>
            {t('common.skip', 'Skip')}
          </button>
        </div>
        <div className="preauth-funnel-scroll px-6 pt-4 pb-6 flex flex-col">
          <span className="preauth-eyebrow">{t('b2b.onb.eyebrow', 'For service centers')}</span>
          <h2 className="preauth-headline">{t('b2b.onb.headline', 'Run your shop from one place')}</h2>
          <p className="preauth-sub">{t('b2b.onb.sub', 'What owners see after they download the Business app.')}</p>
          <div className="preauth-feature-stack">
            <div className="preauth-feature-card">
              <div className="preauth-feature-icon">
                <ProtoIcon name="calendar-check" className="w-5 h-5" />
              </div>
              <div className="preauth-feature-title">{t('b2b.onb.f1.title', 'Live bookings')}</div>
              <p className="preauth-feature-desc">{t('b2b.onb.f1.desc', 'New jobs land on your calendar — assign techs and update status in one flow.')}</p>
            </div>
            <div className="preauth-feature-card">
              <div className="preauth-feature-icon">
                <ProtoIcon name="tag" className="w-5 h-5" />
              </div>
              <div className="preauth-feature-title">{t('b2b.onb.f2.title', 'Catalog & pricing')}</div>
              <p className="preauth-feature-desc">{t('b2b.onb.f2.desc', 'Fixed, range, or quote-only services. Bulk-add common jobs to go live faster.')}</p>
            </div>
            <div className="preauth-feature-card">
              <div className="preauth-feature-icon">
                <ProtoIcon name="shield-check" className="w-5 h-5" />
              </div>
              <div className="preauth-feature-title">{t('b2b.onb.f3.title', 'Verification & payouts')}</div>
              <p className="preauth-feature-desc">{t('b2b.onb.f3.desc', 'Get verified to appear on the map. Track commissions and payout cycles.')}</p>
            </div>
          </div>
          <button type="button" className="btn-primary btn-primary-lg w-full tap mt-6" onClick={() => show('b2b-auth')}>
            {t('common.continue', 'Continue')}
          </button>
        </div>
      </div>
      <ProtoHomeIndicator />
    </ScreenWrap>
  );
}

export function B2bAuth() {
  const { show, t } = useProto();
  return (
    <ScreenWrap id="b2b-auth">
      <ProtoStatusBar />
      <ProtoFunnelProgress step={4} total={6} />
      <div className="preauth-funnel-surface preauth-funnel-surface--white min-h-0">
        <div className="funnel-nav funnel-nav--ghost">
          <button
            type="button"
            className="funnel-back tap"
            onClick={() => show('b2b-onboarding')}
            aria-label={t('a11y.back', 'Back')}
          >
            <ProtoIcon name="arrow-left" className="w-5 h-5" />
          </button>
        </div>
        <div className="preauth-funnel-scroll px-7 pt-2 pb-4 flex flex-col">
          <h2 className="preauth-page-title">{t('b2b.auth.title', 'Business sign in')}</h2>
          <p className="preauth-page-lead">{t('b2b.auth.lead', 'Use your work email — same flow as production, without SMS.')}</p>
          <div className="preauth-auth-panel">
            <button type="button" className="btn-primary btn-primary-lg w-full tap" onClick={() => show('b2b-login')}>
              {t('b2c.auth.login', 'Log in')}
            </button>
            <button
              type="button"
              className="btn-ghost btn-ghost-lg w-full tap border border-slate-200 dark:border-slate-600 bg-slate-50 dark:bg-slate-800/80"
              onClick={() => show('b2b-signup')}
            >
              {t('b2b.auth.create_business', 'Create business account')}
            </button>
          </div>
          <div className="flex-1 min-h-2" />
          <p className="preauth-legal">
            {t('b2b.auth.legal', 'By continuing you agree to')}{' '}
            <button type="button" className="preauth-link-ghost">
              {t('b2b.auth.terms', 'Business Terms')}
            </button>{' '}
            {t('common.and', 'and')}{' '}
            <button type="button" className="preauth-link-ghost">
              {t('b2b.auth.privacy', 'Privacy')}
            </button>
            .
          </p>
        </div>
      </div>
      <ProtoHomeIndicator />
    </ScreenWrap>
  );
}

export function B2bLogin() {
  const { show, t } = useProto();
  return (
    <ScreenWrap id="b2b-login">
      <ProtoStatusBar />
      <ProtoFunnelProgress step={5} total={6} />
      <div className="preauth-funnel-surface preauth-funnel-surface--white min-h-0">
        <div className="funnel-nav">
          <button
            type="button"
            className="funnel-back tap"
            onClick={() => show('b2b-auth')}
            aria-label={t('a11y.back', 'Back')}
          >
            <ProtoIcon name="arrow-left" className="w-5 h-5" />
          </button>
          <span className="funnel-nav-title">{t('b2c.login.nav', 'Log in')}</span>
        </div>
        <div className="preauth-funnel-scroll px-7 pt-5 pb-6 flex flex-col">
          <h2 className="preauth-page-title">{t('b2c.login.title', 'Welcome back')}</h2>
          <p className="preauth-page-lead">{t('b2b.login.lead', 'Sign in with the email you use for your shop on CarCare.')}</p>
          <div className="preauth-form-fields">
            <div>
              <div className="label mb-2">{t('b2b.login.work_email', 'Work email')}</div>
              <input type="email" className="proto-input px-3.5 py-3.5 text-sm" defaultValue="omar@autopro.eg" autoComplete="off" />
            </div>
            <div>
              <div className="label mb-2">{t('common.password', 'Password')}</div>
              <input type="password" className="proto-input px-3.5 py-3.5 text-sm" defaultValue="••••••••••" autoComplete="off" />
            </div>
            <button type="button" className="text-right text-xs font-semibold text-teal-700 dark:text-teal-400 tap w-full" style={{ marginTop: -6 }}>
              {t('b2c.login.forgot', 'Forgot password?')}
            </button>
          </div>
          <button type="button" className="btn-primary btn-primary-lg mt-8 tap w-full" onClick={() => show('b2b-dashboard')}>
            {t('b2c.login.submit', 'Log in')}
          </button>
          <p className="preauth-form-footer">
            {t('b2b.login.new', 'New here?')}{' '}
            <button type="button" className="preauth-link-ghost" onClick={() => show('b2b-signup')}>
              {t('b2b.login.create', 'Create account')}
            </button>
          </p>
        </div>
      </div>
      <ProtoHomeIndicator />
    </ScreenWrap>
  );
}

export function B2bSignup() {
  const { show, t } = useProto();
  const bullets: [string, string][] = [
    [t('b2b.signup.bullet1', 'Real-time bookings'), 'calendar-check'],
    [t('b2b.signup.bullet2', 'Service records / car'), 'clipboard-list'],
    [t('b2b.signup.bullet3', 'Payouts & commission'), 'coins'],
  ];
  return (
    <ScreenWrap id="b2b-signup">
      <ProtoStatusBar />
      <ProtoFunnelProgress step={6} total={6} />
      <div className="flex-1 overflow-y-auto min-h-0 bg-slate-100 dark:bg-slate-900/50">
        <div className="preauth-signup-hero funnel-hero-b2b">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-10 h-10 rounded-xl bg-white dark:bg-slate-900/15 border border-white/25 flex items-center justify-center">
              <ProtoIcon name="wrench" className="w-5 h-5 text-white" />
            </div>
            <span className="font-bold text-white text-[15px]">{t('b2b.signup.brand', 'CarCare for Business')}</span>
          </div>
          <h2 className="text-2xl font-extrabold leading-tight tracking-tight text-white">
            {t('b2b.signup.hero_title', 'Fill your schedule. Grow your shop.')}
          </h2>
          <p className="mt-3 text-sm text-white/90 leading-relaxed">
            {t('b2b.signup.hero_lead', 'Verified drivers book on your calendar. Service history per vehicle. Compete on quality, not ads.')}
          </p>
          <ul className="mt-5 space-y-2.5">
            {bullets.map(([text, ic]) => (
              <li key={text} className="flex items-center gap-3 text-sm text-white/95">
                <span className="w-8 h-8 rounded-full bg-white dark:bg-slate-900/15 border border-white/20 flex items-center justify-center flex-shrink-0">
                  <ProtoIcon name={ic} className="w-3.5 h-3.5" />
                </span>
                <span>{text}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="preauth-signup-sheet">
          <h3 className="preauth-page-title">{t('b2b.signup.sheet_title', 'Create your business account')}</h3>
          <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed mt-2 mb-4">
            {t('b2b.signup.sheet_lead', 'Free to join. Commission on bookings only (tiered 8–15%). Phone may be requested later for verification.')}
          </p>
          <div className="space-y-3">
            <div>
              <div className="label mb-1.5">{t('b2b.signup.biz_name', 'Business name')}</div>
              <input className="proto-input w-full px-3.5 py-2.5 text-sm" defaultValue="AutoPro Heliopolis" autoComplete="off" />
            </div>
            <div>
              <div className="label mb-1.5">{t('b2b.signup.owner_name', 'Owner name')}</div>
              <input className="proto-input w-full px-3.5 py-2.5 text-sm" defaultValue="Omar Saleh" autoComplete="off" />
            </div>
            <div>
              <div className="label mb-1.5">{t('b2b.login.work_email', 'Work email')}</div>
              <input type="email" className="proto-input w-full px-3.5 py-2.5 text-sm" defaultValue="omar@autopro.eg" autoComplete="off" />
            </div>
            <div>
              <div className="label mb-1.5">{t('common.password', 'Password')}</div>
              <input type="password" className="proto-input w-full px-3.5 py-2.5 text-sm" defaultValue="••••••••••" autoComplete="off" />
            </div>
            <div>
              <div className="label mb-1.5">{t('b2c.register.confirm', 'Confirm password')}</div>
              <input type="password" className="proto-input w-full px-3.5 py-2.5 text-sm" defaultValue="••••••••••" autoComplete="off" />
            </div>
          </div>
          <button type="button" className="btn-primary btn-primary-lg w-full mt-5 tap" onClick={() => show('b2b-onboard-1')}>
            {t('b2b.signup.cta', 'Create account & continue')}
          </button>
          <p className="text-xs text-slate-500 dark:text-slate-400 text-center mt-4">
            {t('b2b.signup.have_account', 'Already have an account?')}{' '}
            <button type="button" className="preauth-link-ghost text-[13px]" onClick={() => show('b2b-login')}>
              {t('b2b.signup.signin', 'Sign in')}
            </button>
          </p>
        </div>
      </div>
      <ProtoHomeIndicator />
    </ScreenWrap>
  );
}

export function B2bOnboard1() {
  const { show } = useProto();
  return (
    <ScreenWrap id="b2b-onboard-1">
      <ProtoStatusBar />
      <div className="flex-1 flex flex-col min-h-0 app-surface">
        <B2bTopbarMobile title="Welcome, Omar" />
        <div className="flex-1 overflow-y-auto p-4 min-h-0">
          <OnboardStepper active={0} />
          <div className="onboard-card-proto p-4">
            <div className="text-lg font-bold text-slate-900 dark:text-slate-100">Business information</div>
            <div className="text-sm text-slate-600 dark:text-slate-400 mt-0.5">Used for verification and on your public listing.</div>
            <div className="mt-4 space-y-3">
              <div>
                <div className="label mb-1.5">Legal name</div>
                <input className="proto-input w-full px-3.5 py-2.5 text-sm" defaultValue="AutoPro Automotive Services LLC" autoComplete="off" />
              </div>
              <div>
                <div className="label mb-1.5">Trade name (shown to users)</div>
                <input className="proto-input w-full px-3.5 py-2.5 text-sm" defaultValue="AutoPro Heliopolis" autoComplete="off" />
              </div>
              <div>
                <div className="label mb-1.5">Tax ID</div>
                <input className="proto-input w-full px-3.5 py-2.5 text-sm" defaultValue="415-228-9910" autoComplete="off" />
              </div>
              <div>
                <div className="label mb-1.5">Commercial registration #</div>
                <input className="proto-input w-full px-3.5 py-2.5 text-sm" defaultValue="CR-88421" autoComplete="off" />
              </div>
              <div>
                <div className="label mb-1.5">Address</div>
                <input className="proto-input w-full px-3.5 py-2.5 text-sm" defaultValue="12 Baghdad St, Heliopolis, Cairo" autoComplete="off" />
              </div>
              <div>
                <div className="label mb-1.5">City</div>
                <input className="proto-input w-full px-3.5 py-2.5 text-sm" defaultValue="Cairo" autoComplete="off" />
              </div>
              <div>
                <div className="label mb-1.5">Pin on map</div>
                <div className="proto-input px-3.5 py-2.5 text-sm flex justify-between items-center">
                  <span>30.0980°N · 31.3411°E</span>
                  <span className="text-teal-700 font-semibold tap">Adjust</span>
                </div>
              </div>
              <div>
                <div className="label mb-1.5">Business type</div>
                <div className="proto-input px-3.5 py-2.5 text-sm flex justify-between items-center">
                  Independent workshop <ProtoIcon name="chevron-down" className="w-4 h-4 text-slate-400 dark:text-slate-500" />
                </div>
              </div>
              <div>
                <div className="label mb-1.5">Year founded</div>
                <input className="proto-input w-full px-3.5 py-2.5 text-sm" defaultValue="2014" autoComplete="off" />
              </div>
            </div>
            <div className="mt-6 flex flex-col gap-2">
              <button type="button" className="btn-ghost tap w-full border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-900">
                Save draft
              </button>
              <button type="button" className="btn-primary tap shadow-md" onClick={() => show('b2b-onboard-3')}>
                Continue <ProtoIcon name="arrow-right" className="w-4 h-4" />
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
  const { show } = useProto();
  const svcs = [
    ['Oil change (standard)', '45 min', 'Fixed', '350'],
    ['Brake pads — front', '1.5 h', 'Fixed', '650'],
    ['AC recharge', '1 h', 'Fixed', '450'],
  ] as const;
  return (
    <ScreenWrap id="b2b-onboard-3">
      <ProtoStatusBar />
      <div className="flex-1 flex flex-col min-h-0 app-surface">
        <B2bTopbarMobile title="Welcome, Omar" />
        <div className="flex-1 overflow-y-auto p-4 min-h-0">
          <OnboardStepper active={1} />
          <div className="onboard-card-proto p-4">
            <div className="text-lg font-bold text-slate-900 dark:text-slate-100">Your service catalog</div>
            <div className="text-sm text-slate-600 dark:text-slate-400 mt-0.5">Start with presets — you can edit any time.</div>
            <button
              type="button"
              className="btn-ghost py-2 px-3 text-xs w-full mt-3 flex items-center justify-center gap-1 border border-violet-200 bg-violet-50/50 text-violet-900"
            >
              <ProtoIcon name="wand-2" className="w-3.5 h-3.5" />
              Add 12 common services
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
              Add custom service
            </button>
            <div className="mt-6 flex flex-col gap-2">
              <button
                type="button"
                className="btn-ghost tap border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-900"
                onClick={() => show('b2b-onboard-1')}
              >
                <ProtoIcon name="arrow-left" className="w-4 h-4" /> Back
              </button>
              <button type="button" className="btn-primary tap shadow-md" onClick={() => show('b2b-pending')}>
                Submit for verification <ProtoIcon name="arrow-right" className="w-4 h-4" />
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
  const { show } = useProto();
  const rows = [
    ['Business information', 'done'],
    ['Service catalog', 'done'],
    ['Account checks', 'review'],
    ['List on map', 'pending'],
  ] as const;
  return (
    <ScreenWrap id="b2b-pending">
      <ProtoStatusBar />
      <div className="flex-1 flex flex-col min-h-0 app-surface">
        <B2bTopbarMobile title="Welcome, Omar" />
        <div className="flex-1 overflow-y-auto p-4 flex items-start justify-center min-h-0">
          <div className="onboard-card-proto p-5 w-full text-center max-w-md">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-amber-200 to-orange-200 flex items-center justify-center mx-auto shadow-md border border-amber-300/50">
              <ProtoIcon name="shield-check" className="w-7 h-7 text-amber-900" />
            </div>
            <div className="text-xl font-bold mt-3">Verification in progress</div>
            <div className="text-sm text-slate-500 dark:text-slate-400 mt-2">
              We’re reviewing your business and catalog. Typical turnaround is 24–48 hours.
            </div>
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
                    {s === 'done' ? 'Done' : s === 'review' ? 'In review' : 'Wait'}
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-4 p-3 rounded-xl callout-success text-xs text-emerald-950 text-left border border-emerald-200/60">
              <b>While you wait</b> — add photos and your team. You can open the dashboard anytime.
            </div>
            <button type="button" className="btn-primary w-full mt-4 tap shadow-md" onClick={() => show('b2b-dashboard')}>
              Explore dashboard
            </button>
          </div>
        </div>
      </div>
      <ProtoHomeIndicator />
    </ScreenWrap>
  );
}

export function B2bDashboard() {
  const { show } = useProto();
  const lineUp = [
    ['11:00', 'Youssef S.', 'Oil (std)', 'New', 'b-blue', true],
    ['10:00', 'Karim H.', 'Brake pads', 'In progress', 'b-amber', true],
    ['09:00', 'Layla M.', 'Oil+filter', 'Done', 'b-green', true],
  ] as const;
  return (
    <ScreenWrap id="b2b-dashboard">
      <ProtoStatusBar />
      <div className="flex-1 flex flex-col min-h-0 app-surface">
        <B2bTopbarMobile title="AutoPro · Today" />
        <div className="flex-1 overflow-y-auto p-3 space-y-3 min-h-0">
          <div className="grid grid-cols-2 gap-2">
            <div className="kpi-tile kpi-tile--teal p-3 pl-4">
              <div className="text-[10px] text-slate-500 dark:text-slate-400 font-semibold uppercase tracking-wide">Bookings</div>
              <div className="text-2xl font-bold text-slate-900 dark:text-slate-100">7</div>
              <div className="text-[10px] text-emerald-600 font-semibold">+2 vs yesterday</div>
            </div>
            <div className="kpi-tile kpi-tile--violet p-3 pl-4">
              <div className="text-[10px] text-slate-500 dark:text-slate-400 font-semibold uppercase tracking-wide">Revenue</div>
              <div className="text-2xl font-bold text-slate-900 dark:text-slate-100">3.4k</div>
              <div className="text-[10px] text-violet-600 font-medium">EGP</div>
            </div>
            <div className="kpi-tile kpi-tile--amber p-3 pl-4">
              <div className="text-[10px] text-slate-500 dark:text-slate-400 font-semibold uppercase tracking-wide">Rating</div>
              <div className="text-2xl font-bold text-slate-900 dark:text-slate-100">4.8</div>
              <div className="text-[10px] text-amber-700">62 rev.</div>
            </div>
            <div className="kpi-tile kpi-tile--emerald p-3 pl-4">
              <div className="text-[10px] text-slate-500 dark:text-slate-400 font-semibold uppercase tracking-wide">Accept</div>
              <div className="text-2xl font-bold text-slate-900 dark:text-slate-100">96%</div>
              <div className="text-[10px] text-emerald-600 font-semibold">OK</div>
            </div>
          </div>
          <div className="app-panel p-3">
            <div className="flex justify-between items-center mb-2">
              <div className="font-bold text-sm">Today’s line-up</div>
              <span className="text-xs text-slate-500 dark:text-slate-400 flex items-center gap-1">
                <span className="dot bg-red-500" />1 new
              </span>
            </div>
            {lineUp.map(([time, cust, svc, label, badge, act]) => (
              <div
                key={time + cust}
                className="tap border border-slate-100 rounded-xl p-2.5 mb-2 flex justify-between items-center bg-gradient-to-r from-white to-slate-50/80 hover:border-teal-200/60"
                onClick={act ? () => show('b2b-booking') : undefined}
                onKeyDown={act ? (e) => e.key === 'Enter' && show('b2b-booking') : undefined}
                role={act ? 'button' : undefined}
                tabIndex={act ? 0 : undefined}
              >
                <div>
                  <div className="text-xs font-bold">{time}</div>
                  <div className="text-sm font-semibold">{cust}</div>
                  <div className="text-xs text-slate-500 dark:text-slate-400">{svc}</div>
                </div>
                <span className={`badge ${badge} text-[10px]`}>{label}</span>
              </div>
            ))}
            <div className="text-center text-xs text-teal-700 font-semibold pt-1 tap" onClick={() => show('b2b-bookings')}>
              Full calendar
            </div>
          </div>
          <div className="app-panel p-3">
            <div className="font-bold text-sm mb-2">Mechanics</div>
            {(
              [
                ['Ahmed', 2, 3],
                ['Hassan', 3, 3],
                ['Karim', 0, 3],
              ] as const
            ).map(([n, b, cap]) => (
              <div key={n} className="mb-2 last:mb-0">
                <div className="flex justify-between text-xs">
                  <span className="font-semibold">{n}</span>
                  <span className="text-slate-500 dark:text-slate-400">
                    {b}/{cap}
                  </span>
                </div>
                <div className="h-1.5 rounded-full bg-slate-100 dark:bg-slate-800/80 overflow-hidden mt-0.5">
                  <div className="h-full bg-teal-600" style={{ width: `${(b / cap) * 100}%` }} />
                </div>
              </div>
            ))}
          </div>
          <div className="rounded-xl p-3 text-xs bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200/70 shadow-sm">
            <b className="text-amber-950">3 reviews</b> need a reply.{' '}
            <span className="text-teal-800 font-semibold tap" onClick={() => show('b2b-reviews')}>
              Open
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
  const { show } = useProto();
  const days = ['S13', 'M14', 'T15', 'W16', 'T17', 'T18', 'F19'];
  const list = [
    ['11:00', 'Youssef S.', 'Oil (std)', 'b-blue', 'New'],
    ['10:00', 'Karim H.', 'Brake pads', 'b-amber', 'In progress'],
    ['09:00', 'Layla M.', 'Oil+filter', 'b-green', 'Done'],
  ] as const;
  return (
    <ScreenWrap id="b2b-bookings">
      <ProtoStatusBar />
      <div className="flex-1 flex flex-col min-h-0 app-surface">
        <B2bTopbarMobile title="Bookings" />
        <div className="px-3 pt-2 flex items-center justify-between">
          <div className="rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-600 p-0.5 flex text-xs font-semibold shadow-sm">
            <span className="px-2.5 py-1 rounded-lg bg-gradient-to-r from-teal-600 to-cyan-600 text-white shadow-sm">Week</span>
            <span className="px-2.5 py-1 rounded-lg text-slate-500 dark:text-slate-400">Day</span>
          </div>
          <div className="flex items-center gap-1">
            <button type="button" className="w-8 h-8 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-600 flex items-center justify-center">
              <ProtoIcon name="chevron-left" className="w-4 h-4" />
            </button>
            <div className="text-xs font-semibold">Apr 13 – 19</div>
            <button type="button" className="w-8 h-8 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-600 flex items-center justify-center">
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
            + Manual booking
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
                  <div className="text-sm font-semibold">{cust}</div>
                  <div className="text-xs text-slate-500 dark:text-slate-400">{svc}</div>
                </div>
                <span className={`badge ${badge} text-[10px] self-start`}>{l}</span>
              </div>
            ))}
          </div>
          <div className="mt-3 text-[10px] text-slate-500 dark:text-slate-400 flex flex-wrap gap-2">
            <span className="flex items-center gap-0.5">
              <span className="dot bg-blue-500" />
              New
            </span>
            <span className="flex items-center gap-0.5">
              <span className="dot bg-amber-500" />
              Active
            </span>
            <span className="flex items-center gap-0.5">
              <span className="dot bg-green-500" />
              Done
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
  const { show } = useProto();
  const mechs = [
    ['Ahmed', 2, 3, 0],
    ['Hassan', 3, 3, 1],
    ['Karim', 0, 3, 2],
  ] as const;
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
          <div className="font-semibold text-sm truncate flex-1">#CC-4A1F9</div>
        </div>
        <div className="flex-1 overflow-y-auto p-3 space-y-3">
          <div className="app-panel p-4 ring-1 ring-indigo-500/10">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="badge b-indigo">New · 14m</span>
              <span className="text-xs text-slate-500 dark:text-slate-400">Sat 18 Apr · 11:00</span>
            </div>
            <div className="text-xl font-bold mt-2">Oil change (standard)</div>
            <div className="text-sm text-slate-500 dark:text-slate-400">Corolla 2019 · 82,450 km</div>
            <div className="mt-2 flex justify-between">
              <span className="text-xs text-slate-500 dark:text-slate-400">Quote</span>
              <span className="text-lg font-bold">EGP 350</span>
            </div>
            <div className="flex flex-col gap-2 mt-3">
              <button type="button" className="btn-accent w-full shadow-md shadow-orange-500/20">
                Accept booking
              </button>
              <button type="button" className="btn-ghost w-full text-sm border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-900">
                Propose new time
              </button>
              <button type="button" className="btn-ghost w-full text-sm text-red-600 bg-red-50 border border-red-100">
                Reject
              </button>
            </div>
          </div>
          <div className="app-panel p-4">
            <div className="label mb-2">Customer</div>
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-teal-100 to-cyan-100 text-teal-900 font-bold flex items-center justify-center border border-teal-200/60">
                YS
              </div>
              <div>
                <div className="font-semibold text-sm">Youssef Salem</div>
                <div className="text-[10px] text-slate-500 dark:text-slate-400">4 bookings</div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-2 mt-3">
              <button type="button" className="btn-ghost text-xs py-2">
                <ProtoIcon name="phone" className="w-3.5 h-3.5 inline" /> Call
              </button>
              <button type="button" className="btn-ghost text-xs py-2">
                <ProtoIcon name="message-circle" className="w-3.5 h-3.5 inline" /> Message
              </button>
            </div>
          </div>
          <div className="app-panel p-4">
            <div className="label mb-2">Assign mechanic</div>
            {mechs.map(([n, b, cap, ix]) => (
              <div
                key={n}
                className={`flex items-center justify-between p-2 rounded-xl border ${
                  ix === 2 ? 'border-teal-500 bg-teal-50' : 'border-slate-200 dark:border-slate-600'
                } mb-2 last:mb-0`}
              >
                <div>
                  <div className="text-sm font-semibold">{n}</div>
                  <div className="text-xs text-slate-500 dark:text-slate-400">
                    {b}/{cap} slots
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
            <div className="label mb-2">Invoice (draft)</div>
            <div className="text-sm flex justify-between py-1">
              <span>Oil (std)</span>
              <span>EGP 350</span>
            </div>
            <div className="text-xs text-slate-400 dark:text-slate-500 flex justify-between py-1">
              Commission 10%<span>−35</span>
            </div>
            <div className="divider my-2" />
            <div className="font-bold flex justify-between">
              Your payout <span>EGP 315</span>
            </div>
          </div>
        </div>
      </div>
      <ProtoHomeIndicator />
    </ScreenWrap>
  );
}

export function B2bCatalog() {
  const { show } = useProto();
  const rows = [
    ['Oil (standard)', 'EGP 350', 'Fixed', '62', true],
    ['Brake pads', 'EGP 650', 'Fixed', '22', true],
    ['AC recharge', 'EGP 450', 'Fixed', '34', true],
  ] as const;
  return (
    <ScreenWrap id="b2b-catalog">
      <ProtoStatusBar />
      <div className="flex-1 flex flex-col min-h-0 app-surface">
        <B2bTopbarMobile title="Catalog" />
        <div className="px-3 flex gap-2 overflow-x-auto no-scrollbar py-2">
          <span className="chip on flex-shrink-0">All</span>
          <span className="chip flex-shrink-0">Oil</span>
          <span className="chip flex-shrink-0">Brakes</span>
          <span className="chip flex-shrink-0">AC</span>
        </div>
        <div className="flex-1 overflow-y-auto p-3 space-y-2">
          <div className="flex gap-2">
            <button type="button" className="btn-ghost text-xs flex-1 py-2">
              Import
            </button>
            <button type="button" className="btn-primary text-xs flex-1 py-2">
              + Service
            </button>
          </div>
          {rows.map(([s, p, t, b, live]) => (
            <div
              key={s}
              className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-600/90 rounded-xl p-3 flex justify-between items-start shadow-sm ring-1 ring-violet-500/5"
            >
              <div>
                <div className="text-sm font-semibold">{s}</div>
                <div className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                  <span className="badge b-slate">{t}</span> {b}/mo
                </div>
                <div className="text-sm font-bold mt-1">{p}</div>
              </div>
              <div className={`w-9 h-5 rounded-full ${live ? 'bg-teal-600' : 'bg-slate-300'}`}>
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
  const { show } = useProto();
  const reviews = [
    ['Mohamed H.', 'MH', 5, 'Great service & honest pricing.', 'responded'],
    ['Sara A.', 'SA', 4, 'Good, slight wait.', 'pending'],
  ] as const;
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
          <div className="font-semibold text-sm">Reviews</div>
        </div>
        <div className="flex-1 overflow-y-auto p-3 space-y-3">
          <div className="kpi-tile kpi-tile--amber p-3 pl-4">
            <div className="text-3xl font-bold text-slate-900 dark:text-slate-100">
              4.8 <span className="text-sm text-slate-500 dark:text-slate-400 font-normal">312 reviews</span>
            </div>
            <div className="text-xs text-amber-800 font-semibold mt-1">24 need reply</div>
          </div>
          <div className="flex gap-2 overflow-x-auto no-scrollbar">
            <span className="chip on flex-shrink-0">All</span>
            <span className="chip flex-shrink-0">Pending</span>
            <span className="chip flex-shrink-0">5★</span>
          </div>
          <div className="app-panel divide-y divide-slate-100 overflow-hidden p-0">
            {reviews.map(([n, ini, r, txt, state]) => (
              <div key={n} className="p-3">
                <div className="flex gap-2">
                  <div className="w-8 h-8 rounded-full bg-teal-100 text-xs font-bold text-teal-800 flex items-center justify-center">
                    {ini}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-start">
                      <span className="text-sm font-semibold">{n}</span>
                      {state === 'pending' ? <span className="badge b-amber text-[9px]">Reply</span> : null}
                    </div>
                    <div className="flex gap-0.5 mt-0.5">
                      {[1, 2, 3, 4, 5].map((i) => (
                        <ProtoIcon
                          key={i}
                          name="star"
                          className={`w-3 h-3 ${i <= r ? 'text-amber-500 fill-amber-500' : 'text-slate-300'}`}
                        />
                      ))}
                    </div>
                    <div className="text-sm mt-1">{txt}</div>
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
  const { show } = useProto();
  const recent = [
    ['11 Apr', 'EGP 7,578', 'paid'],
    ['4 Apr', 'EGP 8,892', 'paid'],
    ['28 Mar', 'EGP 9,486', 'paid'],
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
          <div className="font-semibold text-sm pl-1">
            Payouts <span className="badge b-amber text-[9px] ml-1">P2</span>
          </div>
        </div>
        <div className="flex-1 overflow-y-auto p-3 space-y-3">
          <div className="kpi-tile kpi-tile--teal p-3 pl-4 text-center">
            <div className="text-xs text-slate-500 dark:text-slate-400">Available</div>
            <div className="text-2xl font-bold">EGP 12,840</div>
            <button type="button" className="btn-primary w-full text-xs py-2 mt-2">
              Request payout
            </button>
          </div>
          <div className="grid grid-cols-2 gap-2">
            <div className="kpi-tile kpi-tile--violet p-2 pl-3 text-center text-xs">
              Gross (mo)
              <div className="font-bold text-sm mt-0.5 text-slate-900 dark:text-slate-100">42,310</div>
            </div>
            <div className="kpi-tile kpi-tile--amber p-2 pl-3 text-center text-xs">
              Comm. 10%
              <div className="font-bold text-sm mt-0.5 text-slate-900 dark:text-slate-100">4,231</div>
            </div>
          </div>
          <div className="text-xs text-slate-500 dark:text-slate-400">Recent</div>
          {recent.map(([d, pay, s]) => (
            <div key={d} className="app-panel p-3 flex justify-between text-sm">
              <div>
                <div className="font-semibold">{d}</div>
                <div className="text-xs text-slate-500 dark:text-slate-400">Payout to bank</div>
              </div>
              <div className="text-right">
                <div className="font-bold">{pay}</div>
                <span className={`badge ${s === 'paid' ? 'b-green' : 'b-amber'} text-[9px]`}>{s}</span>
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
  const { show } = useProto();
  return (
    <ScreenWrap id="b2b-more">
      <ProtoStatusBar />
      <div className="flex-1 flex flex-col min-h-0 app-surface">
        <B2bTopbarMobile title="More" />
        <div className="flex-1 overflow-y-auto p-3">
          <div className="text-xs text-slate-500 dark:text-slate-400 mb-2">Account</div>
          <div className="app-panel divide-y divide-slate-100 overflow-hidden p-0 shadow-md">
            <button
              type="button"
              className="w-full p-3 flex items-center justify-between text-left tap hover:bg-amber-50/50"
              onClick={() => show('b2b-reviews')}
            >
              <span className="flex items-center gap-2 text-sm font-medium">
                <ProtoIcon name="star" className="w-4 h-4 text-amber-500" /> Reviews
              </span>
              <ProtoIcon name="chevron-right" className="w-4 h-4 text-slate-400 dark:text-slate-500" />
            </button>
            <button
              type="button"
              className="w-full p-3 flex items-center justify-between text-left tap hover:bg-teal-50/50"
              onClick={() => show('b2b-payouts')}
            >
              <span className="flex items-center gap-2 text-sm font-medium">
                <ProtoIcon name="wallet" className="w-4 h-4 text-teal-600" /> Payouts
              </span>
              <span className="badge b-amber text-[9px]">P2</span>
            </button>
            <div className="p-3 flex items-center justify-between text-slate-400 dark:text-slate-500">
              <span className="flex items-center gap-2 text-sm">
                <ProtoIcon name="users" className="w-4 h-4" /> Team
              </span>
              <span className="text-xs">Soon</span>
            </div>
            <div className="p-3 flex items-center justify-between text-slate-400 dark:text-slate-500">
              <span className="flex items-center gap-2 text-sm">
                <ProtoIcon name="settings" className="w-4 h-4" /> Settings
              </span>
              <ProtoIcon name="chevron-right" className="w-4 h-4" />
            </div>
          </div>
        </div>
      </div>
      <B2bTabBar active="more" />
      <ProtoHomeIndicator />
    </ScreenWrap>
  );
}

export const b2bScreens: Record<string, FC> = {
  'b2b-splash': B2bSplash,
  'b2b-lang': B2bLang,
  'b2b-onboarding': B2bOnboarding,
  'b2b-auth': B2bAuth,
  'b2b-login': B2bLogin,
  'b2b-signup': B2bSignup,
  'b2b-onboard-1': B2bOnboard1,
  'b2b-onboard-3': B2bOnboard3,
  'b2b-pending': B2bPending,
  'b2b-dashboard': B2bDashboard,
  'b2b-bookings': B2bBookings,
  'b2b-booking': B2bBooking,
  'b2b-catalog': B2bCatalog,
  'b2b-reviews': B2bReviews,
  'b2b-payouts': B2bPayouts,
  'b2b-more': B2bMore,
};
