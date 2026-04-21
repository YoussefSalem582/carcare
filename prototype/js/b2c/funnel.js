const B2C_FUNNEL = {
  'b2c-splash': `
<div class="screen" data-screen="b2c-splash">
  ${protoStatusBar({ trailing: 'icons' })}
  ${protoFunnelProgress(1, 6)}
  <div class="flex-1 flex flex-col items-center justify-center px-8 text-center funnel-hero-b2c">
    <div class="preauth-splash-mark"><i data-lucide="wrench" class="w-11 h-11"></i></div>
    <h1 class="preauth-splash-title">${t('b2c.splash.title', 'CarCare')}</h1>
    <p class="preauth-splash-tagline mx-auto">${t('b2c.splash.tagline', 'Verified workshops near you. Book maintenance in minutes.')}</p>
    <button type="button" class="preauth-splash-cta tap" onclick="show('b2c-lang')">${t('b2c.splash.cta', 'Get started')}</button>
    <button type="button" class="preauth-secondary-text tap" onclick="show('b2c-auth')">${t('b2c.splash.have_account', 'I already have an account')}</button>
  </div>
  ${protoHomeIndicator()}
</div>`,

  'b2c-lang': `
<div class="screen" data-screen="b2c-lang">
  ${protoStatusBar()}
  ${protoFunnelProgress(2, 6)}
  <div class="preauth-funnel-surface preauth-funnel-surface--white min-h-0">
    <div class="funnel-nav">
      <button type="button" class="funnel-back tap" onclick="show('b2c-splash')" aria-label="${t('a11y.back', 'Back')}"><i data-lucide="arrow-left" class="w-5 h-5"></i></button>
      <span class="funnel-nav-title">${t('b2c.lang.nav_title', 'Language')}</span>
    </div>
    <div class="preauth-funnel-scroll px-6 pt-5 pb-5 flex flex-col">
      <span class="preauth-eyebrow">${t('b2c.lang.eyebrow', 'Preferences')}</span>
      <h2 class="preauth-headline">${t('b2c.lang.headline', 'Choose your language')}</h2>
      <p class="preauth-sub">${t('b2c.lang.sub', 'You can change this anytime in Settings.')}</p>
      <div class="preauth-lang-grid">
        <button type="button" class="preauth-lang-option ${getLocale() === 'en' ? 'preauth-lang-option--active' : ''} tap" onclick="protoSetLocaleEn()">
          <span class="preauth-lang-label">${t('b2c.lang.en', 'English')}</span>
          ${getLocale() === 'en' ? '<i data-lucide="check" class="w-5 h-5 text-teal-700 dark:text-teal-400 flex-shrink-0"></i>' : ''}
        </button>
        <button type="button" class="preauth-lang-option ${getLocale() === 'ar-EG' ? 'preauth-lang-option--active' : ''} tap" onclick="protoSetLocaleAr()">
          <span class="preauth-lang-label">${t('b2c.lang.ar_eg', 'العربية (مصر)')}</span>
          <span class="preauth-lang-meta">${t('b2c.lang.ar_meta', 'RTL layout')}</span>
          ${getLocale() === 'ar-EG' ? '<i data-lucide="check" class="w-5 h-5 text-teal-700 dark:text-teal-400 flex-shrink-0"></i>' : ''}
        </button>
      </div>
      <div class="flex-1 min-h-4"></div>
      <button type="button" class="btn-primary btn-primary-lg w-full tap" onclick="show('b2c-onboarding')">${t('common.continue', 'Continue')}</button>
    </div>
  </div>
  ${protoHomeIndicator()}
</div>`,

  'b2c-onboarding': `
<div class="screen" data-screen="b2c-onboarding">
  ${protoStatusBar()}
  ${protoFunnelProgress(3, 6)}
  <div class="preauth-funnel-surface min-h-0">
    <div class="funnel-nav">
      <button type="button" class="funnel-back tap" onclick="show('b2c-lang')" aria-label="${t('a11y.back', 'Back')}"><i data-lucide="arrow-left" class="w-5 h-5"></i></button>
      <span class="funnel-nav-spacer"></span>
      <button type="button" class="funnel-skip tap" onclick="show('b2c-auth')">${t('common.skip', 'Skip')}</button>
    </div>
    <div class="preauth-funnel-scroll px-6 pt-4 pb-6 flex flex-col">
      <span class="preauth-eyebrow">${t('b2c.onb.eyebrow', 'Why CarCare')}</span>
      <h2 class="preauth-headline">${t('b2c.onb.headline', 'Maintain your car with less guesswork')}</h2>
      <p class="preauth-sub">${t('b2c.onb.sub', 'Three ways we save you time before you even book.')}</p>
      <div class="preauth-feature-stack">
        <div class="preauth-feature-card">
          <div class="preauth-feature-icon"><i data-lucide="map-pin" class="w-5 h-5"></i></div>
          <div class="preauth-feature-title">${t('b2c.onb.f1.title', 'Map-first discovery')}</div>
          <p class="preauth-feature-desc">${t('b2c.onb.f1.desc', 'See trusted centers around you with distance, hours, and ratings at a glance.')}</p>
        </div>
        <div class="preauth-feature-card">
          <div class="preauth-feature-icon"><i data-lucide="badge-check" class="w-5 h-5"></i></div>
          <div class="preauth-feature-title">${t('b2c.onb.f2.title', 'Verified for quality')}</div>
          <p class="preauth-feature-desc">${t('b2c.onb.f2.desc', 'We highlight vetted partners so you can book with confidence.')}</p>
        </div>
        <div class="preauth-feature-card">
          <div class="preauth-feature-icon"><i data-lucide="calendar-check" class="w-5 h-5"></i></div>
          <div class="preauth-feature-title">${t('b2c.onb.f3.title', 'Book & track')}</div>
          <p class="preauth-feature-desc">${t('b2c.onb.f3.desc', 'Pick a slot, pay your way, and follow status until pickup.')}</p>
        </div>
      </div>
      <button type="button" class="btn-primary btn-primary-lg w-full tap mt-6" onclick="show('b2c-auth')">${t('common.continue', 'Continue')}</button>
    </div>
  </div>
  ${protoHomeIndicator()}
</div>`,

  'b2c-auth': `
<div class="screen" data-screen="b2c-auth">
  ${protoStatusBar()}
  ${protoFunnelProgress(4, 6)}
  <div class="preauth-funnel-surface min-h-0">
    <div class="funnel-nav funnel-nav--ghost">
      <button type="button" class="funnel-back tap" onclick="show('b2c-onboarding')" aria-label="${t('a11y.back', 'Back')}"><i data-lucide="arrow-left" class="w-5 h-5"></i></button>
    </div>
    <div class="preauth-funnel-scroll px-7 pt-2 pb-4 flex flex-col">
      <h2 class="preauth-page-title">${t('b2c.auth.title', 'Sign in or sign up')}</h2>
      <p class="preauth-page-lead">${t('b2c.auth.lead', 'Use your email and password — no SMS codes in this prototype.')}</p>
      <div class="preauth-auth-panel">
        <button type="button" class="btn-primary btn-primary-lg w-full tap" onclick="show('b2c-login')">${t('b2c.auth.login', 'Log in')}</button>
        <button type="button" class="btn-ghost btn-ghost-lg w-full tap border border-slate-200 dark:border-slate-600 bg-slate-50 dark:bg-slate-800/90/80 dark:bg-slate-800/80" onclick="show('b2c-register')">${t('b2c.auth.register', 'Create account')}</button>
      </div>
      <div class="flex-1 min-h-2"></div>
      <p class="preauth-legal">${t('b2c.auth.legal', 'By continuing you agree to our')} <button type="button" class="preauth-link-ghost">${t('b2c.auth.terms', 'Terms')}</button> ${t('common.and', 'and')} <button type="button" class="preauth-link-ghost">${t('b2c.auth.privacy', 'Privacy Policy')}</button>.</p>
    </div>
  </div>
  ${protoHomeIndicator()}
</div>`,

  'b2c-login': `
<div class="screen" data-screen="b2c-login">
  ${protoStatusBar({ trailing: 'icons' })}
  ${protoFunnelProgress(5, 6)}
  <div class="preauth-funnel-surface min-h-0">
    <div class="funnel-nav">
      <button type="button" class="funnel-back tap" onclick="show('b2c-auth')" aria-label="${t('a11y.back', 'Back')}"><i data-lucide="arrow-left" class="w-5 h-5"></i></button>
      <span class="funnel-nav-title">${t('b2c.login.nav', 'Log in')}</span>
    </div>
    <div class="preauth-funnel-scroll px-7 pt-5 pb-6 flex flex-col">
      <h2 class="preauth-page-title">${t('b2c.login.title', 'Welcome back')}</h2>
      <p class="preauth-page-lead">${t('b2c.login.lead', 'Enter the email and password for your CarCare account.')}</p>
      <div class="preauth-form-fields">
        <div>
          <div class="label mb-2">${t('common.email', 'Email')}</div>
          <input type="email" class="proto-input px-3.5 py-3.5 text-sm" value="you@example.com" autocomplete="off">
        </div>
        <div>
          <div class="label mb-2">${t('common.password', 'Password')}</div>
          <input type="password" class="proto-input px-3.5 py-3.5 text-sm" value="••••••••••" autocomplete="off">
        </div>
        <button type="button" class="text-right text-xs font-semibold text-teal-700 dark:text-teal-400 tap w-full" style="margin-top:-6px;">${t('b2c.login.forgot', 'Forgot password?')}</button>
      </div>
      <button type="button" class="btn-primary btn-primary-lg mt-8 tap w-full flex items-center justify-center gap-2" onclick="show('b2c-addcar')">
        <span>${t('b2c.login.submit', 'Log in')}</span><i data-lucide="arrow-right" class="w-4 h-4"></i>
      </button>
      <p class="preauth-form-footer">${t('b2c.login.no_account', 'No account?')} <button type="button" class="preauth-link-ghost" onclick="show('b2c-register')">${t('b2c.login.create', 'Create one')}</button></p>
    </div>
  </div>
  ${protoHomeIndicator()}
</div>`,

  'b2c-register': `
<div class="screen" data-screen="b2c-register">
  ${protoStatusBar()}
  ${protoFunnelProgress(6, 6)}
  <div class="preauth-funnel-surface min-h-0">
    <div class="funnel-nav">
      <button type="button" class="funnel-back tap" onclick="show('b2c-auth')" aria-label="${t('a11y.back', 'Back')}"><i data-lucide="arrow-left" class="w-5 h-5"></i></button>
      <span class="funnel-nav-title">${t('b2c.register.nav', 'Register')}</span>
    </div>
    <div class="preauth-funnel-scroll px-7 pt-5 pb-6 flex flex-col">
      <h2 class="preauth-page-title">${t('b2c.register.title', 'Create your account')}</h2>
      <p class="preauth-page-lead">${t('b2c.register.lead', 'Email and password — we’ll ask for your car next.')}</p>
      <div class="preauth-form-fields">
        <div>
          <div class="label mb-1.5">${t('b2c.register.fullname', 'Full name')} <span class="text-slate-400 dark:text-slate-500 dark:text-slate-400 normal-case font-normal">${t('common.optional', 'optional')}</span></div>
          <input class="proto-input px-3.5 py-3 text-sm" value="Youssef Salem" autocomplete="off">
        </div>
        <div>
          <div class="label mb-1.5">${t('common.email', 'Email')}</div>
          <input type="email" class="proto-input px-3.5 py-3 text-sm" value="you@example.com" autocomplete="off">
        </div>
        <div>
          <div class="label mb-1.5">${t('common.password', 'Password')}</div>
          <input type="password" class="proto-input px-3.5 py-3 text-sm" value="••••••••••" autocomplete="off">
        </div>
        <div>
          <div class="label mb-1.5">${t('b2c.register.confirm', 'Confirm password')}</div>
          <input type="password" class="proto-input px-3.5 py-3 text-sm" value="••••••••••" autocomplete="off">
        </div>
      </div>
      <button type="button" class="btn-primary btn-primary-lg w-full mt-6 tap" onclick="show('b2c-addcar')">${t('b2c.register.submit', 'Create account')}</button>
      <p class="preauth-form-footer mb-2">${t('b2c.register.have_account', 'Already have an account?')} <button type="button" class="preauth-link-ghost" onclick="show('b2c-login')">${t('b2c.login.submit', 'Log in')}</button></p>
    </div>
  </div>
  ${protoHomeIndicator()}
</div>`,
};
