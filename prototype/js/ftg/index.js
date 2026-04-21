/* =========================================================
   Flutter Team Guide — handbook mocks (structured + architecture)
   ========================================================= */
/**
 * @param {{ label: string, body?: string, subs?: string[] }[]} items
 * `body` may include <strong>…</strong> for inline emphasis.
 */
function ftgStructuredItemsHtml(items) {
  return items
    .map(item => {
      const subs =
        item.subs && item.subs.length
          ? `<ul class="ftg-sublist">${item.subs.map(s => `<li>${s}</li>`).join('')}</ul>`
          : '';
      const body = item.body ? `<span class="ftg-li-body">${item.body}</span>` : '';
      return `<li><span class="ftg-li-label">${item.label}</span>${body}${subs}</li>`;
    })
    .join('');
}

/** @param {string} id @param {string} eyebrow @param {string} title @param {{ label: string, body?: string, subs?: string[] }[]} items @param {string} [extraHtml] */
function ftgScreen(id, eyebrow, title, items, extraHtml = '') {
  return `
<div class="screen" data-screen="${id}">
  ${protoStatusBar({ trailing: 'icons' })}
  <div class="ftg-screen-inner">
    <span class="ftg-eyebrow">${eyebrow}</span>
    <h2 class="ftg-title">${title}</h2>
    <ul class="ftg-list ftg-list-structured">${ftgStructuredItemsHtml(items)}</ul>
    ${extraHtml}
  </div>
  ${protoHomeIndicator()}
</div>`;
}

function ftgArchitectureExtra() {
  const pkgs = [
    'go_router',
    'flutter_riverpod',
    'riverpod_annotation',
    'supabase_flutter',
    'freezed',
    'json_serializable',
    'google_maps_flutter',
    'geolocator',
    'permission_handler',
    'intl',
    'cached_network_image',
    'image_picker',
    'flutter_secure_storage',
  ];
  const pkgSpans = pkgs.map(p => `<span class="ftg-pkg">${p}</span>`).join('');
  return `
<div class="ftg-arch-diagram">
  <div class="ftg-arch-title">Project architecture (layer stack)</div>
  <div class="ftg-arch-row">
    <span class="ftg-arch-layer">Presentation</span>
    <span class="ftg-arch-desc">Screens & widgets, <strong>go_router</strong> (tabs + nested stacks), Material 3. <strong>MVVM-style:</strong> Notifier / Cubit / Bloc — no direct SDK calls in build().</span>
  </div>
  <div class="ftg-arch-row">
    <span class="ftg-arch-layer">Application (optional)</span>
    <span class="ftg-arch-desc">Thin use-case orchestration when a flow spans multiple repositories (e.g. hold slot → create booking).</span>
  </div>
  <div class="ftg-arch-row">
    <span class="ftg-arch-layer">Domain</span>
    <span class="ftg-arch-desc">Entities, value objects, <strong>repository interfaces</strong>, failures. <strong>Must not</strong> import <code style="font-size:0.9em">flutter</code> or <code style="font-size:0.9em">supabase_flutter</code>.</span>
  </div>
  <div class="ftg-arch-row">
    <span class="ftg-arch-layer">Data</span>
    <span class="ftg-arch-desc">Repository implementations, Supabase/PostgREST, Realtime channels, Storage, local cache. Maps DTOs ↔ domain models.</span>
  </div>
</div>
<div class="ftg-pkg-wrap">
  <div class="ftg-pkg-eyebrow">Suggested packages (pick one state stack)</div>
  <div class="ftg-pkg-row">${pkgSpans}<span class="ftg-pkg">bloc</span><span class="ftg-pkg">flutter_bloc</span></div>
  <p class="ftg-li-body" style="margin:0.5rem 0 0;font-size:0.72rem;color:#64748b;">Team rule: <strong>Riverpod or Bloc everywhere</strong> — not both in production features.</p>
</div>`;
}

const FTG_HTML = {
  'ftg-overview': ftgScreen('ftg-overview', 'Start here', 'Orientation & reading order', [
    {
      label: 'Sources of truth',
      body: 'Treat these as canonical before writing code or schema.',
      subs: [
        '<strong>CarCare_PRD_v2.md</strong> — product scope, surfaces, MVP vs phase 2.',
        '<strong>This HTML prototype</strong> — screen IDs, groups, and UX copy for handoff.',
        '<strong>ADRs in repo</strong> — locked decisions (BaaS, auth shape, map provider).',
      ],
    },
    {
      label: 'Surfaces (what we ship in Flutter)',
      body: 'One language, multiple apps or flavors; no custom web client in roadmap.',
      subs: [
        '<strong>B2C mobile</strong> — map-first discovery, booking, garage, account (phone).',
        '<strong>B2B adaptive</strong> — tablet at reception + phone for owner; dashboard, calendar, catalog.',
        '<strong>Minimal admin</strong> — lightweight ops app; heavy ad-hoc work in <strong>Supabase Studio</strong> early on.',
      ],
    },
    {
      label: 'Split ownership (5 engineers)',
      body: 'Rough RACI so shared work does not stall.',
      subs: [
        '<strong>~2 engineers — B2C</strong> — map, booking funnel, consumer account.',
        '<strong>~2 engineers — B2B</strong> — ops dashboard, catalog, booking detail, realtime toasts.',
        '<strong>1 tech lead</strong> — shared <strong>packages</strong> (design tokens, core, auth shell), <strong>BaaS</strong> (RLS, Edge Functions, migrations).',
      ],
    },
    {
      label: 'Read first (Week 0–1)',
      body: 'Implement in this order to unblock integration.',
      subs: [
        '<strong>Auth</strong> — email/password MVP (prototype + PRD); session lifecycle and guards.',
        '<strong>Map + PostGIS</strong> — pin contract, filters, list/map toggle, permission UX.',
        '<strong>Booking + Realtime</strong> — state machine, holds, B2B ↔ B2C status sync.',
      ],
    },
  ]),

  'ftg-repo-flavors': ftgScreen('ftg-repo-flavors', 'Project setup', 'Repo, flavors, environments', [
    {
      label: 'Monorepo layout',
      body: 'Keeps shared domain and UI consistent across B2C and B2B.',
      subs: [
        '<strong>apps/carcare_b2c</strong> — consumer entrypoint, product icons.',
        '<strong>apps/carcare_b2b</strong> — business entrypoint, adaptive breakpoints.',
        '<strong>packages/core</strong> — env, logging, errors, Supabase client wiring.',
        '<strong>packages/ui</strong> — CarCare widgets, theme extensions.',
        '<strong>packages/features/&lt;name&gt;</strong> — optional; extract when API is stable (booking, map).',
      ],
    },
    {
      label: 'Flavors & env matrix',
      body: 'Use <strong>--dart-define</strong> or flavor-specific config — not hard-coded keys.',
      subs: [
        '<strong>dev / staging / prod</strong> — different Supabase URL + anon key.',
        '<strong>Bundle IDs & app names</strong> per surface so store listings stay clear.',
      ],
    },
    {
      label: 'Secrets & CI',
      body: '<strong>Never commit</strong> service-role keys or signing passwords.',
      subs: [
        'Local: <strong>.env</strong> gitignored; document variable names in README.',
        'CI: GitHub (or Codemagic) secrets for defines and signing; same names as local.',
      ],
    },
    {
      label: 'New machine checklist',
      body: 'Onboarding path for a new Flutter dev.',
      subs: [
        'Flutter <strong>stable</strong>; accept Android SDK / Xcode licenses.',
        'Optional: <strong>melos</strong> for multi-package scripts.',
        '<strong>build_runner</strong> where freezed/json_serializable/riverpod_codegen are used.',
      ],
    },
  ]),

  'ftg-architecture': ftgScreen(
    'ftg-architecture',
    'Architecture',
    'Layers & dependency rules',
    [
      {
        label: 'Feature-first + Clean boundaries',
        body: 'Each feature owns its <strong>domain + data + presentation</strong> folder slice. Shared code moves to <strong>packages/</strong> only when two apps need it.',
        subs: [
          'Extract <strong>packages/features/booking</strong> when booking API and states stabilize.',
          'Until then, a <strong>feature/</strong> directory inside each app is fine.',
        ],
      },
      {
        label: 'Dependency rule (non-negotiable)',
        body: '<strong>Domain</strong> depends on nothing Flutter-specific. <strong>Data</strong> implements domain ports and talks to Supabase.',
        subs: [
          'Forbidden: <code style="font-size:0.85em">import \'package:flutter/…\';</code> under domain/.',
          'UI may depend on domain; never the reverse.',
        ],
      },
      {
        label: 'Error & result model',
        body: 'Return <strong>Result / Either</strong> or typed <strong>Failure</strong> from repositories — avoid throwing for expected cases.',
        subs: [
          '<strong>User-visible</strong> — map to snackbar / inline field error + i18n.',
          '<strong>Log-only</strong> — network parse issues, 5xx; send to observability with correlation id.',
        ],
      },
    ],
    ftgArchitectureExtra()
  ),

  'ftg-routing-deeplinks': ftgScreen('ftg-routing-deeplinks', 'Architecture', 'Navigation & deep links', [
    {
      label: 'go_router route tree',
      body: 'Single <strong>RouterConfig</strong> per app; nested branches for each bottom tab.',
      subs: [
        '<strong>ShellRoute</strong> for map / bookings / account tabs (B2C).',
        '<strong>Separate stacks</strong> inside each tab so back pops the local stack only.',
      ],
    },
    {
      label: 'Auth redirects',
      body: '<strong>Guest</strong> routes: splash, login, public browse if product allows. <strong>Authed</strong> routes: booking, garage, B2B ops.',
      subs: [
        'Persist <strong>pending deep link</strong> across login success.',
        'B2B: redirect unapproved shops to verification pending screen.',
      ],
    },
    {
      label: 'Deep links & push',
      body: 'Align path shapes with future FCM/APNS payloads.',
      subs: [
        'Examples: <strong>/booking/:id</strong>, <strong>/shop/:id</strong>, <strong>/b2b/booking/:id</strong>.',
        'Invalid or expired ids → friendly error + fallback home.',
      ],
    },
    {
      label: 'Android back & restoration',
      body: 'Test on real devices: system back, predictive back, process death.',
      subs: [
        'Document which routes are <strong>root</strong> (exit app vs switch tab).',
        'Restore <strong>scroll + form state</strong> where MVP needs it (e.g. long booking form).',
      ],
    },
  ]),

  'ftg-state-di': ftgScreen('ftg-state-di', 'Architecture', 'State & dependency injection', [
    {
      label: 'Pick one primary pattern',
      body: '<strong>Riverpod</strong> (AsyncNotifier / Notifier) <em>or</em> <strong>Bloc/Cubit</strong> — document the choice in an ADR.',
      subs: [
        'Avoid mixing patterns in the same feature without a bridge layer.',
        'Tech lead resolves disputes; update onboarding docs when choice changes.',
      ],
    },
    {
      label: 'Repositories as the seam',
      body: 'Widgets and view-models call <strong>abstract repositories</strong>; tests inject fakes.',
      subs: [
        'No <strong>Supabase.instance</strong> in presentation code.',
        'Async UI: <strong>AsyncValue</strong> (Riverpod) or explicit loading/error/data states (Bloc).',
      ],
    },
    {
      label: 'Local vs app-wide state',
      body: 'Keep ephemeral UI (sheet open, current tab index) close to the widget tree.',
      subs: [
        'Use <strong>ValueNotifier</strong> or local Cubit for throwaway UI state.',
        'Session, user profile, and cart-like flows use <strong>global</strong> providers/blocs.',
      ],
    },
    {
      label: 'Testing hooks',
      body: 'Every feature should ship with at least one <strong>widget test</strong> using overrides.',
      subs: [
        'Riverpod: <strong>ProviderScope(overrides: …)</strong>.',
        'Bloc: <strong>bloc_test</strong> + mock repositories.',
      ],
    },
  ]),

  'ftg-supabase': ftgScreen('ftg-supabase', 'Platform', 'Supabase from Flutter', [
    {
      label: 'Client lifecycle',
      body: 'Initialize <strong>Supabase</strong> once at startup; listen to <strong>auth state</strong> for router refresh.',
      subs: [
        'On <strong>signOut</strong>: clear in-memory caches, cancel Realtime subscriptions.',
        'Handle <strong>token refresh</strong> failures with re-auth flow.',
      ],
    },
    {
      label: 'RLS & data access',
      body: 'Flutter assumes <strong>RLS</strong> is correct — document policies per table in Notion or repo docs.',
      subs: [
        '<strong>Map pins</strong> — public read of verified centers within constraints.',
        '<strong>Bookings</strong> — car owner vs shop staff rows.',
        '<strong>Reviews</strong> — insert by completed booking only.',
      ],
    },
    {
      label: 'Realtime',
      body: 'Name channels predictably, e.g. <strong>booking:&lt;id&gt;</strong> or <strong>shop:&lt;id&gt;:bookings</strong>.',
      subs: [
        'B2B dashboard: toast + optional sound on <strong>new booking</strong>.',
        'Reconnect with backoff; surface “connection lost” banner if needed.',
      ],
    },
    {
      label: 'Edge Functions & Storage',
      body: 'Use Edge Functions for <strong>short-lived rules</strong> (slot hold TTL, idempotency).',
      subs: [
        '<strong>Storage buckets</strong> for shop photos, verification docs; signed URLs from Flutter.',
        'Validate file type & size before upload to save bandwidth.',
      ],
    },
  ]),

  'ftg-maps-location': ftgScreen('ftg-maps-location', 'Platform', 'Maps & location', [
    {
      label: 'SDK choice',
      body: '<strong>google_maps_flutter</strong> is the default; Mapbox if licensing or design needs it — ADR required.',
      subs: [
        'Account for API key restrictions (SHA-1 / bundle id) per flavor.',
      ],
    },
    {
      label: 'Backend contract',
      body: 'Map reads come from <strong>PostGIS</strong>-backed API or RPC — agree JSON shape once.',
      subs: [
        'Pin fields: <strong>id, lat, lng, name, verified, distance_m, open_now</strong> (example).',
        'Support <strong>filter chips</strong> server-side where possible.',
      ],
    },
    {
      label: 'Permissions UX',
      body: 'Explain <strong>why</strong> location is needed; offer browse-without-GPS if product allows.',
      subs: [
        '<strong>Denied</strong> — center on city or last known; prominent settings CTA.',
        '<strong>Emergency mode</strong> — prototype placeholder; document MVP behavior.',
      ],
    },
    {
      label: 'Performance',
      body: 'Cluster pins; debounce camera-driven refetches; keep bottom sheet cheap to rebuild.',
      subs: [
        'Target smooth pan/zoom on mid-range Android devices.',
      ],
    },
  ]),

  'ftg-media-forms': ftgScreen('ftg-media-forms', 'Platform', 'Forms & uploads', [
    {
      label: 'Forms & validation',
      body: 'Use consistent field components with <strong>i18n</strong> error strings.',
      subs: [
        'Show errors on submit and on blur where helpful.',
        'Accessibility: semantics, focus order, error announcement.',
      ],
    },
    {
      label: 'Upload pipeline',
      body: '<strong>image_picker</strong> → compress (e.g. flutter_image_compress) → <strong>Storage</strong>.',
      subs: [
        'Show <strong>progress</strong> and allow cancel.',
        'Retry on transient failures; map Storage errors to user copy.',
      ],
    },
    {
      label: 'Shared fields',
      body: 'Reuse widgets for <strong>VIN</strong>, vehicle model, and <strong>catalog</strong> rows across B2C/B2B where models match.',
      subs: [
        'Keep validation rules in one place (domain or shared form package).',
      ],
    },
  ]),

  'ftg-ui-i18n-rtl': ftgScreen('ftg-ui-i18n-rtl', 'UX foundations', 'Design system, i18n, RTL', [
    {
      label: 'Design tokens',
      body: 'Map CSS variables from the prototype (<strong>--brand</strong>, radii, type) to <strong>ThemeExtension</strong>.',
      subs: [
        'Single source for <strong>CarCareButton</strong>, cards, chips.',
      ],
    },
    {
      label: 'i18n workflow',
      body: '<strong>flutter_localizations</strong> + <strong>intl</strong> + ARB files; no hard-coded user strings in widgets.',
      subs: [
        'Pseudo-locale optional for overflow testing.',
      ],
    },
    {
      label: 'RTL (العربية)',
      body: 'Mirror map controls, list leading icons, and booking steppers.',
      subs: [
        '<strong>Golden tests</strong> for map chrome + booking on RTL.',
        'Phase 2: large text & contrast audit.',
      ],
    },
  ]),

  'ftg-quality-release': ftgScreen('ftg-quality-release', 'Delivery', 'Testing & release', [
    {
      label: 'Test pyramid',
      body: '<strong>Unit</strong> — domain + mappers; <strong>widget</strong> — critical flows; <strong>integration</strong> — one happy path per milestone.',
      subs: [
        'Patrol or <strong>integration_test</strong> for end-to-end when stable.',
      ],
    },
    {
      label: 'CI gates',
      body: 'Every PR: <strong>dart format</strong>, <strong>analyze</strong>, <strong>test</strong>; periodic release build.',
      subs: [
        'Fail PRs on analyzer <strong>errors</strong>; treat infos/warnings per team policy.',
      ],
    },
    {
      label: 'Observability',
      body: 'Pick <strong>Sentry</strong> or <strong>Crashlytics</strong>; scrub PII from logs and breadcrumbs.',
      subs: [
        'Tag releases with version + flavor for triage.',
      ],
    },
    {
      label: 'Release',
      body: '<strong>Versioning</strong> scheme + store signing in CI; hotfix branch policy documented.',
      subs: [
        'Phase 2: staged rollout, feature flags if needed.',
      ],
    },
  ]),
};
