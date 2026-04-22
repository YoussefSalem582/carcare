import type { FC, ReactNode } from 'react';
import { useProto } from '../context/ProtoContext';
import { ProtoFunnelProgress, ProtoHomeIndicator, ProtoStatusBar } from '../components/proto/Chrome';
import { ProtoIcon } from '../components/proto/Icon';

function ScreenWrap({ id, children }: { id: string; children: ReactNode }) {
  return (
    <div className="screen active" data-screen={id}>
      {children}
    </div>
  );
}

export function B2cSplash() {
  const { show, t } = useProto();
  return (
    <ScreenWrap id="b2c-splash">
      <ProtoStatusBar trailing="icons" />
      <ProtoFunnelProgress step={1} total={6} />
      <div className="flex-1 flex flex-col items-center justify-center px-8 text-center funnel-hero-b2c">
        <div className="preauth-splash-mark">
          <ProtoIcon name="wrench" className="w-11 h-11" />
        </div>
        <h1 className="preauth-splash-title">{t('b2c.splash.title', 'CarCare')}</h1>
        <p className="preauth-splash-tagline mx-auto">
          {t('b2c.splash.tagline', 'Verified workshops near you. Book maintenance in minutes.')}
        </p>
        <button type="button" className="preauth-splash-cta tap" onClick={() => show('b2c-lang')}>
          {t('b2c.splash.cta', 'Get started')}
        </button>
        <button type="button" className="preauth-secondary-text tap" onClick={() => show('b2c-auth')}>
          {t('b2c.splash.have_account', 'I already have an account')}
        </button>
      </div>
      <ProtoHomeIndicator />
    </ScreenWrap>
  );
}

export function B2cLang() {
  const { show, t, locale, setLocale } = useProto();
  return (
    <ScreenWrap id="b2c-lang">
      <ProtoStatusBar />
      <ProtoFunnelProgress step={2} total={6} />
      <div className="preauth-funnel-surface preauth-funnel-surface--white min-h-0">
        <div className="funnel-nav">
          <button
            type="button"
            className="funnel-back tap"
            onClick={() => show('b2c-splash')}
            aria-label={t('a11y.back', 'Back')}
          >
            <ProtoIcon name="arrow-left" className="w-5 h-5" />
          </button>
          <span className="funnel-nav-title">{t('b2c.lang.nav_title', 'Language')}</span>
        </div>
        <div className="preauth-funnel-scroll px-6 pt-5 pb-5 flex flex-col">
          <span className="preauth-eyebrow">{t('b2c.lang.eyebrow', 'Preferences')}</span>
          <h2 className="preauth-headline">{t('b2c.lang.headline', 'Choose your language')}</h2>
          <p className="preauth-sub">{t('b2c.lang.sub', 'You can change this anytime in Settings.')}</p>
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
          <button type="button" className="btn-primary btn-primary-lg w-full tap" onClick={() => show('b2c-onboarding')}>
            {t('common.continue', 'Continue')}
          </button>
        </div>
      </div>
      <ProtoHomeIndicator />
    </ScreenWrap>
  );
}

export function B2cOnboarding() {
  const { show, t } = useProto();
  return (
    <ScreenWrap id="b2c-onboarding">
      <ProtoStatusBar />
      <ProtoFunnelProgress step={3} total={6} />
      <div className="preauth-funnel-surface min-h-0">
        <div className="funnel-nav">
          <button
            type="button"
            className="funnel-back tap"
            onClick={() => show('b2c-lang')}
            aria-label={t('a11y.back', 'Back')}
          >
            <ProtoIcon name="arrow-left" className="w-5 h-5" />
          </button>
          <span className="funnel-nav-spacer" />
          <button type="button" className="funnel-skip tap" onClick={() => show('b2c-auth')}>
            {t('common.skip', 'Skip')}
          </button>
        </div>
        <div className="preauth-funnel-scroll px-6 pt-4 pb-6 flex flex-col">
          <span className="preauth-eyebrow">{t('b2c.onb.eyebrow', 'Why CarCare')}</span>
          <h2 className="preauth-headline">{t('b2c.onb.headline', 'Maintain your car with less guesswork')}</h2>
          <p className="preauth-sub">{t('b2c.onb.sub', 'Three ways we save you time before you even book.')}</p>
          <div className="preauth-feature-stack">
            <div className="preauth-feature-card">
              <div className="preauth-feature-icon">
                <ProtoIcon name="map-pin" className="w-5 h-5" />
              </div>
              <div className="preauth-feature-title">{t('b2c.onb.f1.title', 'Map-first discovery')}</div>
              <p className="preauth-feature-desc">
                {t('b2c.onb.f1.desc', 'See trusted centers around you with distance, hours, and ratings at a glance.')}
              </p>
            </div>
            <div className="preauth-feature-card">
              <div className="preauth-feature-icon">
                <ProtoIcon name="badge-check" className="w-5 h-5" />
              </div>
              <div className="preauth-feature-title">{t('b2c.onb.f2.title', 'Verified for quality')}</div>
              <p className="preauth-feature-desc">
                {t('b2c.onb.f2.desc', 'We highlight vetted partners so you can book with confidence.')}
              </p>
            </div>
            <div className="preauth-feature-card">
              <div className="preauth-feature-icon">
                <ProtoIcon name="calendar-check" className="w-5 h-5" />
              </div>
              <div className="preauth-feature-title">{t('b2c.onb.f3.title', 'Book & track')}</div>
              <p className="preauth-feature-desc">
                {t('b2c.onb.f3.desc', 'Pick a slot, pay your way, and follow status until pickup.')}
              </p>
            </div>
          </div>
          <button type="button" className="btn-primary btn-primary-lg w-full tap mt-6" onClick={() => show('b2c-auth')}>
            {t('common.continue', 'Continue')}
          </button>
        </div>
      </div>
      <ProtoHomeIndicator />
    </ScreenWrap>
  );
}

export function B2cAuth() {
  const { show, t } = useProto();
  return (
    <ScreenWrap id="b2c-auth">
      <ProtoStatusBar />
      <ProtoFunnelProgress step={4} total={6} />
      <div className="preauth-funnel-surface min-h-0">
        <div className="funnel-nav funnel-nav--ghost">
          <button
            type="button"
            className="funnel-back tap"
            onClick={() => show('b2c-onboarding')}
            aria-label={t('a11y.back', 'Back')}
          >
            <ProtoIcon name="arrow-left" className="w-5 h-5" />
          </button>
        </div>
        <div className="preauth-funnel-scroll px-7 pt-2 pb-4 flex flex-col">
          <h2 className="preauth-page-title">{t('b2c.auth.title', 'Sign in or sign up')}</h2>
          <p className="preauth-page-lead">
            {t('b2c.auth.lead', 'Use your email and password — no SMS codes in this prototype.')}
          </p>
          <div className="preauth-auth-panel">
            <button type="button" className="btn-primary btn-primary-lg w-full tap" onClick={() => show('b2c-login')}>
              {t('b2c.auth.login', 'Log in')}
            </button>
            <button
              type="button"
              className="btn-ghost btn-ghost-lg w-full tap border border-slate-200 dark:border-slate-600 bg-slate-50 dark:bg-slate-800/80"
              onClick={() => show('b2c-register')}
            >
              {t('b2c.auth.register', 'Create account')}
            </button>
          </div>
          <div className="flex-1 min-h-2" />
          <p className="preauth-legal">
            {t('b2c.auth.legal', 'By continuing you agree to our')}{' '}
            <button type="button" className="preauth-link-ghost">
              {t('b2c.auth.terms', 'Terms')}
            </button>{' '}
            {t('common.and', 'and')}{' '}
            <button type="button" className="preauth-link-ghost">
              {t('b2c.auth.privacy', 'Privacy Policy')}
            </button>
            .
          </p>
        </div>
      </div>
      <ProtoHomeIndicator />
    </ScreenWrap>
  );
}

export function B2cLogin() {
  const { show, t } = useProto();
  return (
    <ScreenWrap id="b2c-login">
      <ProtoStatusBar trailing="icons" />
      <ProtoFunnelProgress step={5} total={6} />
      <div className="preauth-funnel-surface min-h-0">
        <div className="funnel-nav">
          <button
            type="button"
            className="funnel-back tap"
            onClick={() => show('b2c-auth')}
            aria-label={t('a11y.back', 'Back')}
          >
            <ProtoIcon name="arrow-left" className="w-5 h-5" />
          </button>
          <span className="funnel-nav-title">{t('b2c.login.nav', 'Log in')}</span>
        </div>
        <div className="preauth-funnel-scroll px-7 pt-5 pb-6 flex flex-col">
          <h2 className="preauth-page-title">{t('b2c.login.title', 'Welcome back')}</h2>
          <p className="preauth-page-lead">{t('b2c.login.lead', 'Enter the email and password for your CarCare account.')}</p>
          <div className="preauth-form-fields">
            <div>
              <div className="label mb-2">{t('common.email', 'Email')}</div>
              <input type="email" className="proto-input px-3.5 py-3.5 text-sm" defaultValue="you@example.com" autoComplete="off" />
            </div>
            <div>
              <div className="label mb-2">{t('common.password', 'Password')}</div>
              <input type="password" className="proto-input px-3.5 py-3.5 text-sm" defaultValue="••••••••••" autoComplete="off" />
            </div>
            <button type="button" className="text-right text-xs font-semibold text-teal-700 dark:text-teal-400 tap w-full" style={{ marginTop: -6 }}>
              {t('b2c.login.forgot', 'Forgot password?')}
            </button>
          </div>
          <button
            type="button"
            className="btn-primary btn-primary-lg mt-8 tap w-full flex items-center justify-center gap-2"
            onClick={() => show('b2c-addcar')}
          >
            <span>{t('b2c.login.submit', 'Log in')}</span>
            <ProtoIcon name="arrow-right" className="w-4 h-4" />
          </button>
          <p className="preauth-form-footer">
            {t('b2c.login.no_account', 'No account?')}{' '}
            <button type="button" className="preauth-link-ghost" onClick={() => show('b2c-register')}>
              {t('b2c.login.create', 'Create one')}
            </button>
          </p>
        </div>
      </div>
      <ProtoHomeIndicator />
    </ScreenWrap>
  );
}

export function B2cRegister() {
  const { show, t } = useProto();
  return (
    <ScreenWrap id="b2c-register">
      <ProtoStatusBar />
      <ProtoFunnelProgress step={6} total={6} />
      <div className="preauth-funnel-surface min-h-0">
        <div className="funnel-nav">
          <button
            type="button"
            className="funnel-back tap"
            onClick={() => show('b2c-auth')}
            aria-label={t('a11y.back', 'Back')}
          >
            <ProtoIcon name="arrow-left" className="w-5 h-5" />
          </button>
          <span className="funnel-nav-title">{t('b2c.register.nav', 'Register')}</span>
        </div>
        <div className="preauth-funnel-scroll px-7 pt-5 pb-6 flex flex-col">
          <h2 className="preauth-page-title">{t('b2c.register.title', 'Create your account')}</h2>
          <p className="preauth-page-lead">{t('b2c.register.lead', 'Email and password — we’ll ask for your car next.')}</p>
          <div className="preauth-form-fields">
            <div>
              <div className="label mb-1.5">
                {t('b2c.register.fullname', 'Full name')}{' '}
                <span className="text-slate-400 dark:text-slate-500 normal-case font-normal">
                  {t('common.optional', 'optional')}
                </span>
              </div>
              <input className="proto-input px-3.5 py-3 text-sm" defaultValue="Youssef Salem" autoComplete="off" />
            </div>
            <div>
              <div className="label mb-1.5">{t('common.email', 'Email')}</div>
              <input type="email" className="proto-input px-3.5 py-3 text-sm" defaultValue="you@example.com" autoComplete="off" />
            </div>
            <div>
              <div className="label mb-1.5">{t('common.password', 'Password')}</div>
              <input type="password" className="proto-input px-3.5 py-3 text-sm" defaultValue="••••••••••" autoComplete="off" />
            </div>
            <div>
              <div className="label mb-1.5">{t('b2c.register.confirm', 'Confirm password')}</div>
              <input type="password" className="proto-input px-3.5 py-3 text-sm" defaultValue="••••••••••" autoComplete="off" />
            </div>
          </div>
          <button type="button" className="btn-primary btn-primary-lg w-full mt-6 tap" onClick={() => show('b2c-addcar')}>
            {t('b2c.register.submit', 'Create account')}
          </button>
          <p className="preauth-form-footer mb-2">
            {t('b2c.register.have_account', 'Already have an account?')}{' '}
            <button type="button" className="preauth-link-ghost" onClick={() => show('b2c-login')}>
              {t('b2c.login.submit', 'Log in')}
            </button>
          </p>
        </div>
      </div>
      <ProtoHomeIndicator />
    </ScreenWrap>
  );
}

export const b2cFunnelScreens: Record<string, FC> = {
  'b2c-splash': B2cSplash,
  'b2c-lang': B2cLang,
  'b2c-onboarding': B2cOnboarding,
  'b2c-auth': B2cAuth,
  'b2c-login': B2cLogin,
  'b2c-register': B2cRegister,
};
