const B2B_FUNNEL = {
  'b2b-splash': `
<div class="screen" data-screen="b2b-splash">
  ${protoStatusBar()}
  ${protoFunnelProgress(1, 6)}
  <div class="flex-1 flex flex-col items-center justify-center px-8 text-center funnel-hero-b2b">
    <div class="preauth-splash-b2b-mark"><i data-lucide="wrench" class="w-11 h-11"></i></div>
    <h1 class="preauth-splash-b2b-title">${t('b2b.splash.title', 'CarCare Business')}</h1>
    <p class="preauth-splash-b2b-tagline mx-auto">${t('b2b.splash.tagline', 'Take bookings, manage your catalog, get paid.')}</p>
    <button type="button" class="preauth-splash-b2b-cta tap" onclick="show('b2b-lang')">${t('b2c.splash.cta', 'Get started')}</button>
    <button type="button" class="preauth-splash-b2b-secondary tap" onclick="show('b2b-auth')">${t('b2b.splash.have_account', 'I already have an account')}</button>
  </div>
  ${protoHomeIndicator()}
</div>`,

  'b2b-lang': `
<div class="screen" data-screen="b2b-lang">
  ${protoStatusBar()}
  ${protoFunnelProgress(2, 6)}
  <div class="preauth-funnel-surface preauth-funnel-surface--white min-h-0">
    <div class="funnel-nav">
      <button type="button" class="funnel-back tap" onclick="show('b2b-splash')" aria-label="${t('a11y.back', 'Back')}"><i data-lucide="arrow-left" class="w-5 h-5"></i></button>
      <span class="funnel-nav-title">${t('b2c.lang.nav_title', 'Language')}</span>
    </div>
    <div class="preauth-funnel-scroll px-6 pt-5 pb-5 flex flex-col">
      <span class="preauth-eyebrow">${t('b2b.lang.eyebrow', 'Business app')}</span>
      <h2 class="preauth-headline">${t('b2c.lang.headline', 'Choose your language')}</h2>
      <p class="preauth-sub">${t('b2b.lang.sub', 'Applies to your dashboard and customer-facing copy. Change anytime in Settings.')}</p>
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
      <button type="button" class="btn-primary btn-primary-lg w-full tap" onclick="show('b2b-onboarding')">${t('common.continue', 'Continue')}</button>
    </div>
  </div>
  ${protoHomeIndicator()}
</div>`,

  'b2b-onboarding': `
<div class="screen" data-screen="b2b-onboarding">
  ${protoStatusBar()}
  ${protoFunnelProgress(3, 6)}
  <div class="preauth-funnel-surface min-h-0">
    <div class="funnel-nav">
      <button type="button" class="funnel-back tap" onclick="show('b2b-lang')" aria-label="${t('a11y.back', 'Back')}"><i data-lucide="arrow-left" class="w-5 h-5"></i></button>
      <span class="funnel-nav-spacer"></span>
      <button type="button" class="funnel-skip tap" onclick="show('b2b-auth')">${t('common.skip', 'Skip')}</button>
    </div>
    <div class="preauth-funnel-scroll px-6 pt-4 pb-6 flex flex-col">
      <span class="preauth-eyebrow">${t('b2b.onb.eyebrow', 'For service centers')}</span>
      <h2 class="preauth-headline">${t('b2b.onb.headline', 'Run your shop from one place')}</h2>
      <p class="preauth-sub">${t('b2b.onb.sub', 'What owners see after they download the Business app.')}</p>
      <div class="preauth-feature-stack">
        <div class="preauth-feature-card">
          <div class="preauth-feature-icon"><i data-lucide="calendar-check" class="w-5 h-5"></i></div>
          <div class="preauth-feature-title">${t('b2b.onb.f1.title', 'Live bookings')}</div>
          <p class="preauth-feature-desc">${t('b2b.onb.f1.desc', 'New jobs land on your calendar — assign techs and update status in one flow.')}</p>
        </div>
        <div class="preauth-feature-card">
          <div class="preauth-feature-icon"><i data-lucide="tag" class="w-5 h-5"></i></div>
          <div class="preauth-feature-title">${t('b2b.onb.f2.title', 'Catalog & pricing')}</div>
          <p class="preauth-feature-desc">${t('b2b.onb.f2.desc', 'Fixed, range, or quote-only services. Bulk-add common jobs to go live faster.')}</p>
        </div>
        <div class="preauth-feature-card">
          <div class="preauth-feature-icon"><i data-lucide="shield-check" class="w-5 h-5"></i></div>
          <div class="preauth-feature-title">${t('b2b.onb.f3.title', 'Verification & payouts')}</div>
          <p class="preauth-feature-desc">${t('b2b.onb.f3.desc', 'Get verified to appear on the map. Track commissions and payout cycles.')}</p>
        </div>
      </div>
      <button type="button" class="btn-primary btn-primary-lg w-full tap mt-6" onclick="show('b2b-auth')">${t('common.continue', 'Continue')}</button>
    </div>
  </div>
  ${protoHomeIndicator()}
</div>`,

  'b2b-auth': `
<div class="screen" data-screen="b2b-auth">
  ${protoStatusBar()}
  ${protoFunnelProgress(4, 6)}
  <div class="preauth-funnel-surface preauth-funnel-surface--white min-h-0">
    <div class="funnel-nav funnel-nav--ghost">
      <button type="button" class="funnel-back tap" onclick="show('b2b-onboarding')" aria-label="${t('a11y.back', 'Back')}"><i data-lucide="arrow-left" class="w-5 h-5"></i></button>
    </div>
    <div class="preauth-funnel-scroll px-7 pt-2 pb-4 flex flex-col">
      <h2 class="preauth-page-title">${t('b2b.auth.title', 'Business sign in')}</h2>
      <p class="preauth-page-lead">${t('b2b.auth.lead', 'Use your work email — same flow as production, without SMS.')}</p>
      <div class="preauth-auth-panel">
        <button type="button" class="btn-primary btn-primary-lg w-full tap" onclick="show('b2b-login')">${t('b2c.auth.login', 'Log in')}</button>
        <button type="button" class="btn-ghost btn-ghost-lg w-full tap border border-slate-200 dark:border-slate-600 bg-slate-50 dark:bg-slate-800/90/80 dark:bg-slate-800/80" onclick="show('b2b-signup')">${t('b2b.auth.create_business', 'Create business account')}</button>
      </div>
      <div class="flex-1 min-h-2"></div>
      <p class="preauth-legal">${t('b2b.auth.legal', 'By continuing you agree to')} <button type="button" class="preauth-link-ghost">${t('b2b.auth.terms', 'Business Terms')}</button> ${t('common.and', 'and')} <button type="button" class="preauth-link-ghost">${t('b2b.auth.privacy', 'Privacy')}</button>.</p>
    </div>
  </div>
  ${protoHomeIndicator()}
</div>`,

  'b2b-login': `
<div class="screen" data-screen="b2b-login">
  ${protoStatusBar()}
  ${protoFunnelProgress(5, 6)}
  <div class="preauth-funnel-surface preauth-funnel-surface--white min-h-0">
    <div class="funnel-nav">
      <button type="button" class="funnel-back tap" onclick="show('b2b-auth')" aria-label="${t('a11y.back', 'Back')}"><i data-lucide="arrow-left" class="w-5 h-5"></i></button>
      <span class="funnel-nav-title">${t('b2c.login.nav', 'Log in')}</span>
    </div>
    <div class="preauth-funnel-scroll px-7 pt-5 pb-6 flex flex-col">
      <h2 class="preauth-page-title">${t('b2c.login.title', 'Welcome back')}</h2>
      <p class="preauth-page-lead">${t('b2b.login.lead', 'Sign in with the email you use for your shop on CarCare.')}</p>
      <div class="preauth-form-fields">
        <div>
          <div class="label mb-2">${t('b2b.login.work_email', 'Work email')}</div>
          <input type="email" class="proto-input px-3.5 py-3.5 text-sm" value="omar@autopro.eg" autocomplete="off">
        </div>
        <div>
          <div class="label mb-2">${t('common.password', 'Password')}</div>
          <input type="password" class="proto-input px-3.5 py-3.5 text-sm" value="••••••••••" autocomplete="off">
        </div>
        <button type="button" class="text-right text-xs font-semibold text-teal-700 dark:text-teal-400 tap w-full" style="margin-top:-6px;">${t('b2c.login.forgot', 'Forgot password?')}</button>
      </div>
      <button type="button" class="btn-primary btn-primary-lg mt-8 tap w-full" onclick="show('b2b-dashboard')">${t('b2c.login.submit', 'Log in')}</button>
      <p class="preauth-form-footer">${t('b2b.login.new', 'New here?')} <button type="button" class="preauth-link-ghost" onclick="show('b2b-signup')">${t('b2b.login.create', 'Create account')}</button></p>
    </div>
  </div>
  ${protoHomeIndicator()}
</div>`,

  'b2b-signup': `
<div class="screen" data-screen="b2b-signup">
  ${protoStatusBar()}
  ${protoFunnelProgress(6, 6)}
  <div class="flex-1 overflow-y-auto min-h-0 bg-slate-100 dark:bg-slate-900/50">
    <div class="preauth-signup-hero funnel-hero-b2b">
      <div class="flex items-center gap-3 mb-5">
        <div class="w-10 h-10 rounded-xl bg-white dark:bg-slate-900/15 border border-white/25 flex items-center justify-center"><i data-lucide="wrench" class="w-5 h-5 text-white"></i></div>
        <span class="font-bold text-white text-[15px]">${t('b2b.signup.brand', 'CarCare for Business')}</span>
      </div>
      <h2 class="text-2xl font-extrabold leading-tight tracking-tight text-white">${t('b2b.signup.hero_title', 'Fill your schedule. Grow your shop.')}</h2>
      <p class="mt-3 text-sm text-white/90 leading-relaxed">${t('b2b.signup.hero_lead', 'Verified drivers book on your calendar. Service history per vehicle. Compete on quality, not ads.')}</p>
      <ul class="mt-5 space-y-2.5">
        ${[
          [t('b2b.signup.bullet1', 'Real-time bookings'), 'calendar-check'],
          [t('b2b.signup.bullet2', 'Service records / car'), 'clipboard-list'],
          [t('b2b.signup.bullet3', 'Payouts & commission'), 'coins'],
        ].map(([text, ic]) => `
        <li class="flex items-center gap-3 text-sm text-white/95">
          <span class="w-8 h-8 rounded-full bg-white dark:bg-slate-900/15 border border-white/20 flex items-center justify-center flex-shrink-0"><i data-lucide="${ic}" class="w-3.5 h-3.5"></i></span>
          <span>${text}</span>
        </li>`).join('')}
      </ul>
    </div>
    <div class="preauth-signup-sheet">
      <h3 class="preauth-page-title">${t('b2b.signup.sheet_title', 'Create your business account')}</h3>
      <p class="text-xs text-slate-500 dark:text-slate-400 leading-relaxed mt-2 mb-4">${t('b2b.signup.sheet_lead', 'Free to join. Commission on bookings only (tiered 8–15%). Phone may be requested later for verification.')}</p>
      <div class="space-y-3">
        <div><div class="label mb-1.5">${t('b2b.signup.biz_name', 'Business name')}</div><input class="proto-input w-full px-3.5 py-2.5 text-sm" value="AutoPro Heliopolis" autocomplete="off"></div>
        <div><div class="label mb-1.5">${t('b2b.signup.owner_name', 'Owner name')}</div><input class="proto-input w-full px-3.5 py-2.5 text-sm" value="Omar Saleh" autocomplete="off"></div>
        <div><div class="label mb-1.5">${t('b2b.login.work_email', 'Work email')}</div><input type="email" class="proto-input w-full px-3.5 py-2.5 text-sm" value="omar@autopro.eg" autocomplete="off"></div>
        <div><div class="label mb-1.5">${t('common.password', 'Password')}</div><input type="password" class="proto-input w-full px-3.5 py-2.5 text-sm" value="••••••••••" autocomplete="off"></div>
        <div><div class="label mb-1.5">${t('b2c.register.confirm', 'Confirm password')}</div><input type="password" class="proto-input w-full px-3.5 py-2.5 text-sm" value="••••••••••" autocomplete="off"></div>
      </div>
      <button type="button" class="btn-primary btn-primary-lg w-full mt-5 tap" onclick="show('b2b-onboard-1')">${t('b2b.signup.cta', 'Create account & continue')}</button>
      <p class="text-xs text-slate-500 dark:text-slate-400 text-center mt-4">${t('b2b.signup.have_account', 'Already have an account?')} <button type="button" class="preauth-link-ghost text-[13px]" onclick="show('b2b-login')">${t('b2b.signup.signin', 'Sign in')}</button></p>
    </div>
  </div>
  ${protoHomeIndicator()}
</div>`,
};
