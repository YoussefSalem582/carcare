/* =========================================================
   Flutter Team Guide — lightweight phone mocks (handbook)
   ========================================================= */
/** @param {string} id @param {string} eyebrow @param {string} title @param {string[]} bullets */
function ftgBlock(id, eyebrow, title, bullets) {
  const lis = bullets.map(b => `<li>${b}</li>`).join('');
  return `
<div class="screen" data-screen="${id}">
  ${protoStatusBar({ trailing: 'icons' })}
  <div class="ftg-screen-inner">
    <span class="ftg-eyebrow">${eyebrow}</span>
    <h2 class="ftg-title">${title}</h2>
    <ul class="ftg-list">${lis}</ul>
  </div>
  ${protoHomeIndicator()}
</div>`;
}

const FTG_HTML = {
  'ftg-overview': ftgBlock(
    'ftg-overview',
    'Start here',
    'Orientation & reading order',
    [
      'Sources of truth: CarCare_PRD_v2.md, this prototype, ADRs in repo.',
      'Surfaces: B2C mobile, B2B adaptive tablet/phone, minimal admin + Supabase Studio.',
      'Split ownership: ~2 B2C, ~2 B2B, 1 tech lead / shared packages & BaaS.',
      'Read first: auth (email/password MVP), map + PostGIS discovery, booking + Realtime status.',
    ]
  ),
  'ftg-repo-flavors': ftgBlock(
    'ftg-repo-flavors',
    'Project setup',
    'Repo, flavors, environments',
    [
      'apps/carcare_b2c, apps/carcare_b2b, packages/core, packages/ui, packages/features/*.',
      'Flavors: dev / staging / prod via --dart-define; bundle IDs and display names per surface.',
      'Secrets: CI env vars and local .env (gitignored); never commit Supabase anon misuse as “secret”.',
      'New machine: Flutter stable, melos optional, codegen (build_runner) where used.',
    ]
  ),
  'ftg-architecture': ftgBlock(
    'ftg-architecture',
    'Architecture',
    'Layers & dependency rules',
    [
      'Clean-ish: presentation → domain (entities + repository interfaces) → data (Supabase impl).',
      'Domain must not import flutter or supabase_flutter.',
      'Use Result/Failure for domain errors; map to snackbars vs silent logs in UI.',
      'Feature modules when a boundary is stable (e.g. booking, map).',
    ]
  ),
  'ftg-routing-deeplinks': ftgBlock(
    'ftg-routing-deeplinks',
    'Architecture',
    'Navigation & deep links',
    [
      'go_router: shell routes for tabs (map vs account), nested stacks per tab.',
      'Redirect: unauthenticated users away from booking; preserve intended route after login.',
      'Deep links: /booking/:id, /shop/:id — align with FCM/APNS payloads later.',
      'Test back behavior on Android and state restoration after process death.',
    ]
  ),
  'ftg-state-di': ftgBlock(
    'ftg-state-di',
    'Architecture',
    'State & dependency injection',
    [
      'Pick one primary pattern: Riverpod (AsyncNotifier) or Bloc — team-wide.',
      'UI talks to repositories through Notifier/Bloc; no Supabase calls in widgets.',
      'Prefer AsyncValue for single-async screens; local ValueNotifier only for ephemeral UI.',
      'Tests: ProviderScope overrides or bloc_test; fake repositories.',
    ]
  ),
  'ftg-supabase': ftgBlock(
    'ftg-supabase',
    'Platform',
    'Supabase from Flutter',
    [
      'supabase_flutter: init in main; listen to auth state; clear caches on signOut.',
      'RLS: document policies for map reads, booking CRUD, shop owner rows.',
      'Realtime: subscribe per booking or shop channel; reconnect + backoff.',
      'Edge Functions: e.g. slot hold TTL; Storage: shop photos, verification uploads.',
    ]
  ),
  'ftg-maps-location': ftgBlock(
    'ftg-maps-location',
    'Platform',
    'Maps & location',
    [
      'google_maps_flutter (or Mapbox if licensing fits); geolocator + permission_handler.',
      'Contract: API returns pins with id, lat, lng, verified, distance, open-now.',
      'UX: loading, empty, permission denied, optional “browse without GPS” mode.',
      'Clustering + bottom sheet for top pins; keep jank low on pan/zoom.',
    ]
  ),
  'ftg-media-forms': ftgBlock(
    'ftg-media-forms',
    'Platform',
    'Forms & uploads',
    [
      'Validated forms with intl’d error strings; focus order and screen reader labels.',
      'image_picker → compress (e.g. flutter_image_compress) → Supabase Storage upload.',
      'Show progress and retry; surface quota / permission errors clearly.',
      'Reuse field components for VIN, service selection, and B2B catalog edits.',
    ]
  ),
  'ftg-ui-i18n-rtl': ftgBlock(
    'ftg-ui-i18n-rtl',
    'UX foundations',
    'Design system, i18n, RTL',
    [
      'Map prototype tokens (e.g. --brand) to ThemeExtension / ColorScheme.',
      'Material 3; English + العربية; flutter_localizations + intl + ARB files.',
      'RTL: mirror map controls and list layouts; golden tests on critical screens.',
      'Phase 2: larger text / contrast audit.',
    ]
  ),
  'ftg-quality-release': ftgBlock(
    'ftg-quality-release',
    'Delivery',
    'Testing & release',
    [
      'CI: dart format, analyze, test; optional integration build per PR.',
      'Unit: domain + repositories; widget: golden + interaction; integration: booking happy path.',
      'Observability: Sentry or Crashlytics; scrub PII in logs.',
      'Release: versioning, signing in CI, phased rollout playbook.',
    ]
  ),
};
