<p align="center">
  <img src="docs/logo.png" alt="CarCare logo" width="200" />
</p>

<h1 align="center">CarCare</h1>

**CarCare** is a map-first maintenance platform concept: connecting **car owners (B2C)** with **verified service centers (B2B)**. Strategic goals, phasing, and the intended production stack (Flutter + managed backend such as Supabase) are documented in **`docs/CarCare_PRD_v2.md`**.

This repository holds **planning artifacts** (`docs/`) plus an **interactive click-through prototype** (`prototype/`): phone-frame mocks, a canonical **screen catalog** with engineering handoff hints, bilingual copy (**English / Egyptian Arabic**), RTL layout patterns, and side panels for Flutter-oriented **tech** and **codeHint** snippets.

---

## Goals and feature areas

| Theme | Description |
|--------|--------------|
| **North star** | Help owners **find** the right workshop quickly; give centers a **steady flow** of bookings. Discovery is **map-led** from day one—not a roadmap afterthought. |
| **Dual surface** | **B2C** app for drivers; **B2B** app for reception and shop operations (adaptive layouts; tablet + phone—see PRD). |
| **Lifecycle** | Typical owner journey modeled in prototype: **pre-auth → map & discovery → booking & payment → in-progress & review**, plus garage / dashboard and phased items (tow, reminders, expenses, payouts). |
| **Trust & ops** | **Verified centers**, filters (service, rating, distance, etc.), realtime booking status syncing between consumer and shop, eventual admin verification (PRD)—not implemented in static prototype. |

The sections below summarize **screens registered in `prototype/src/data/screens.ts`** (implementation targets for phone mocks live under `prototype/src/screens/**/registry.ts`).

---

## B2C (car owner) — features and screens

**26 catalogued screens.** Group summary:

| Group | What it covers |
|--------|-----------------|
| **Pre-auth** | Cold start: splash, language (EN / AR‑EG), onboarding, auth hub, email login and registration. MVP auth is **email + password** (no OTP in prototype spec). |
| **Discovery** | **Map home (core)** with pins, filters, list search; **service center profile** and **tow** (phase 2). **Garage onboarding** (“add first car”) so booking and trackers have context. **Parts marketplace** browsing and **product detail (PDP)** for catalog items. |
| **Booking** | Full funnel: **pick service** → **slot** (hold model in spec) → **checkout / pay** → **confirmation** → **My bookings**, **live progress**, **post-service review**. |
| **Account** | **Garage** (vehicle list), **car detail / history**, **home dashboard**, **smart reminder → book** (phase 2), **expenses** (phase 2 placeholder). |

**Screen IDs and names** (mirror the catalog):

| ID | Catalog name |
|----|----------------|
| `b2c-splash` | Splash |
| `b2c-lang` | Language |
| `b2c-onboarding` | Onboarding (value props) |
| `b2c-auth` | Auth — choose path |
| `b2c-login` | Log in (email) |
| `b2c-register` | Register (email) |
| `b2c-addcar` | Add first car |
| `b2c-map` | Map — Home (CORE) |
| `b2c-marketplace` | Parts marketplace |
| `b2c-part-detail` | Part listing (PDP) |
| `b2c-filters` | Filters sheet |
| `b2c-search` | Search results (list) |
| `b2c-shop` | Service center profile |
| `b2c-tow` | Tow truck profile (phase 2) |
| `b2c-service` | Pick service |
| `b2c-slot` | Pick slot |
| `b2c-payment` | Review & pay |
| `b2c-confirmed` | Booking confirmed |
| `b2c-bookings` | My bookings |
| `b2c-progress` | Booking in progress |
| `b2c-review` | Rate & review |
| `b2c-garage` | Garage (cars) |
| `b2c-cardetail` | Car detail + history |
| `b2c-dashboard` | Dashboard |
| `b2c-reminder` | Reminder → Book (phase 2) |
| `b2c-expenses` | Expenses (phase 2) |

---

## B2B (service center) — features and screens

**16 catalogued screens.**

| Group | What it covers |
|--------|-----------------|
| **Pre-auth** | Business splash, language, shop-focused onboarding carousel, auth shell, login, signup (`shop_owner` role in spec metadata). |
| **Onboarding** | **Business/legal step**, **catalog & pricing**, **verification pending** until approved (blocks marketplace listing). |
| **Operations** | **Today dashboard**, **booking calendar/list**, **booking detail** (accept–progress–invoice), **catalog & pricing** CRUD, **reviews** inbox and responses, **More** hub, **payouts** (phase 2). |

**Screen IDs and names**:

| ID | Catalog name |
|----|----------------|
| `b2b-splash` | Splash (Business) |
| `b2b-lang` | Language (Business) |
| `b2b-onboarding` | Onboarding (Business) |
| `b2b-auth` | Auth — choose path |
| `b2b-login` | Log in (Business) |
| `b2b-signup` | Register (Business) |
| `b2b-onboard-1` | Onboarding — Business |
| `b2b-onboard-3` | Onboarding — Catalog |
| `b2b-pending` | Verification pending |
| `b2b-dashboard` | Dashboard (today) |
| `b2b-bookings` | Bookings — calendar |
| `b2b-booking` | Booking detail |
| `b2b-catalog` | Catalog & pricing |
| `b2b-reviews` | Reviews |
| `b2b-more` | More (B2B hub) |
| `b2b-payouts` | Payouts (phase 2) |

---

## Flutter Tech Guide (`flutterGuide` surface)

Eleven handbook-style pseudo-screens bridge **product UX** with **engineering practice** (routing, DI, Supabase, maps/geo, RTL, testing). Examples: **`ftg-overview`**, **`ftg-architecture`**, **`ftg-supabase`**, **`ftg-maps-location`**, **`ftg-ui-i18n-rtl`**, **`ftg-quality-release`**.

Long-form Arabic/English handbook copy is split between **`prototype/src/data/ftgGuide.ts`** and **`prototype/src/i18n/ftgGuideAr.ts`**.

---

## Repository layout

| Path | Purpose |
|------|--------|
| **`prototype/`** | Vite + React + TypeScript + Tailwind CSS. Phone mocks; **`src/data/screens.ts`** is the source of truth for IDs and grouping. |
| **`docs/`** | PRD, PDF flows, **`logo.png`**, diagrams. |
| **`.github/workflows/`** | Deploy prototype build to GitHub Pages on push to **`main`** (paths under **`prototype/`**). |

Logo files (identical branding): **`docs/logo.png`** and **`prototype/public/logo.png`** — the readme references **`docs/logo.png`**.

---

## Interactive prototype (`prototype/`)

### Behavior

- **Screen-driven navigation** from **`screens.ts`**; each row includes **purpose**, **states**, **notes**, and Flutter-oriented **`tech`** / **`codeHint`** for implementations.
- **Localization**: **`prototype/src/i18n/stringsArEG.ts`** and related catalogs; dynamic group labels keyed from the catalog (`check:i18n` validates coverage).
- **Quality gates**: `npm run check:i18n` and `npm run check:screens` (see **`prototype/scripts/`**) ensure translation keys and **registry implementations** align with **`screens.ts`**.

### Prerequisites

- **Node.js** 22.x (matches `.github/workflows/deploy-prototype-pages.yml`).

### Commands

Run from **`prototype/`**:

```bash
cd prototype
npm ci
npm run dev
```

- **`npm run dev`** — Vite dev server.
- **`npm run build`** — TypeScript check, i18n + screen parity checks, production bundle (`dist/`).
- **`npm run preview`** — Preview the **`dist/`** build locally.

### GitHub Pages

The workflow builds **`prototype/`** and publishes **`prototype/dist`**. **`prototype/vite.config.ts`** sets **`base: '/carcare/'`**, consistent with **`https://<username>.github.io/carcare/`**.

Rename the repo or change the Pages path → adjust **`base`** in Vite accordingly.

---

## Product documentation

- **`docs/CarCare_PRD_v2.md`** — Full PRD v2 (strategy, B2C/B2B features, phased delivery, backend options).
- Other **`docs/*.pdf`** files — supplementary plans (app plan, flows, map/booking focus, extras).

---

## Contributing to the prototype

1. Add or change screens **first** (or alongside) **`prototype/src/data/screens.ts`**, wire components in **`prototype/src/screens/*/registry.ts`**, and extend **`stringsArEG.ts`** where UI strings are needed.
2. Run **`npm run build`** locally so **`check:i18n`** and **`check:screens`** pass before merging.

---

## License / status

Graduate project artifact; **`prototype/package.json`** is `"private": true`. Add a license file if you open-source publicly.
