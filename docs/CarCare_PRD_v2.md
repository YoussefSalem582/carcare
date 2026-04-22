# CarCare — Product Requirements Document (v2)

**Positioning:** A map-first maintenance platform connecting car owners (B2C) with verified service centers (B2B).

**North Star:** Every car owner finds the right service center in under 60 seconds, and every service center gets a steady flow of verified customers.

**Build profile:** Flutter-only mobile apps on a managed backend (Supabase recommended; Firebase as alternative). One team, one language, one codebase per surface. No custom web clients in the roadmap.

---

## 1. Strategic Shift from v1

| Area | v1 | v2 (this doc) |
|---|---|---|
| Core value | Personal car maintenance tracker | Map-based marketplace for maintenance services |
| Map feature | Phase 3 (post-launch) | **Phase 1 — core MVP pillar** |
| Business model | B2C only | **Dual: B2C app + B2B app** |
| Monetization | Deferred | Built-in from day one (commissions, subscriptions, ads) |
| Primary user action | Log maintenance record | Find → Book → Service → Review |
| Stack | Undecided | **Flutter mobile + managed BaaS (Supabase / Firebase)** |

The tracker features (fuel, expenses, reminders) remain valuable, but they become **retention layers**, not the core pitch. The core pitch is: *"Your car needs service — we'll show you where, when, and for how much."*

---

## 2. Product Surfaces

CarCare is three coordinated surfaces, all built in Flutter on the same backend:

### 2.1 CarCare App (B2C — car owners)
Flutter mobile (iOS + Android). Map as the home screen.

### 2.2 CarCare Business App (B2B — service centers)
Flutter app optimized for tablet (reception desk) and phone (owner on the go). Same codebase, adaptive layouts. Dashboard to manage bookings, profile, pricing, and customers. **No web portal.**

### 2.3 CarCare Admin (Internal)
Verification queue, disputes, payouts, content moderation. Delivered as a minimal Flutter app for ops, backed by the native Supabase/Firebase dashboard for ad-hoc data work. No custom web admin is built.

---

## 2A. Team & Stack Constraints

This product is scoped around a concrete team and stack profile. All phasing and priorities in this doc assume these constraints.

**Team:** 5 Flutter engineers (no dedicated backend, web, or native-iOS/Android engineers). Design and QA are shared resources. One of the five acts as tech lead / BaaS owner.

**Client stack:**
- Flutter (stable channel) for all three surfaces (B2C, B2B, Admin)
- Single monorepo with shared design system, shared domain models, shared API client
- Adaptive layouts for phone + tablet (no Flutter Web at MVP)

**Backend stack — recommended: Supabase**
- Postgres + PostGIS for geospatial queries on the map (first-class fit for "centers within X km")
- Row-Level Security for B2C vs B2B vs Admin access boundaries
- Supabase Auth (phone OTP + email) — matches MVP auth needs
- Supabase Realtime for live booking state changes on the B2B dashboard
- Edge Functions (Deno/TypeScript) for slot-hold logic, webhook handlers, and booking SLA timers
- Supabase Storage for center photos and verification docs
- Supabase Studio as the day-one admin surface while the Flutter admin app is catching up

**Backend stack — alternative: Firebase**
Usable, with trade-offs. Firestore does not do native geospatial queries — needs GeoFlutterFire or geohash shards, which are harder to maintain as supply grows. Firebase Auth + Cloud Functions + Firestore + Cloud Storage + FCM covers everything else cleanly.

**Decision rule:** Default to Supabase. Only switch to Firebase if the team has deep Firebase experience AND is willing to accept the geospatial workarounds. Pick in Week 0 and do not revisit mid-build.

**Explicitly out of scope for this team:**
- Any custom web client (B2C, B2B, or admin)
- Self-hosted Postgres, Kubernetes, VMs
- Native-only iOS or Android code outside a Flutter plugin wrapper
- A custom API layer when BaaS primitives cover the use case

---

## 3. B2C App — Feature Set

### 3.1 Map-First Home Screen *(CORE — moved from Phase 3)*
- Real-time map showing nearby service centers
- Filters: service type, price range, rating, open now, distance, authorized/verified
- Search by service (e.g., "oil change", "brake pads", "AC repair")
- Service center pins with quick preview: rating, distance, price tier, ETA
- Directions + one-tap call
- "Emergency service" toggle surfaces 24/7 providers

**Why core:** This is the acquisition hook. Solves the immediate pain ("my car needs X, where do I go?") before the app has any of the user's data.

### 3.2 Service Center Profiles
- Verified badge (authorized dealer / independent / mobile)
- Services offered + price list
- Photos, working hours, team info
- Ratings + reviews (category-based: quality, price, speed, honesty)
- Live availability / next open slot

### 3.3 Booking System
- Pick service → pick slot → confirm
- Quote request flow for custom jobs
- Reschedule / cancel with policy enforcement
- In-app chat between customer and service center
- Post-service invoice + digital receipt

### 3.4 Car Management
- Add / edit / delete cars
- Brand, model, year, mileage, plate, VIN (optional)
- Multiple cars per user

### 3.5 Maintenance Tracker
- Auto-logged from completed bookings (key advantage vs. manual-only trackers)
- Manual entry for services done elsewhere
- Timeline view per car
- Predefined + custom service types

### 3.6 Smart Reminders
- Mileage-based and time-based
- Derived from booking history (e.g., "last oil change was 4,800 km ago")
- Push notifications + in-app inbox

### 3.7 Expense & Fuel Tracker
- Manual + auto (from bookings)
- Categorization: fuel, maintenance, insurance, fines, other
- Monthly / yearly summaries
- Cost per km, fuel consumption trends

### 3.8 Dashboard
- Car health snapshot
- Upcoming maintenance
- Expense summary
- Nearby service recommendations (contextual)

### 3.9 Authentication & Profile
- Email / phone / social login
- Profile, saved addresses, payment methods

---

## 4. B2B App — Feature Set

This is the new pillar. Without it, the marketplace is a directory, not a platform. Delivered as a single Flutter app with adaptive layouts — tablet for reception desk, phone for the owner on the move. No web portal.

### 4.1 Service Center Onboarding
- Business registration (name, address, tax ID, commercial registration)
- Document upload for verification
- Service categories + pricing setup
- Working hours + capacity per slot
- Team members (mechanics, reception) with roles

### 4.2 Business Dashboard
- Today's bookings (live)
- Upcoming bookings (week / month view)
- Revenue: daily, weekly, monthly
- Customer stats: new vs. returning
- Rating breakdown + review management

### 4.3 Booking Management
- Accept / reject / reschedule
- Assign jobs to mechanics
- Job status: received → in progress → completed → invoiced
- Internal notes per customer/car

### 4.4 Customer & Vehicle CRM
- Customer history (all bookings, cars serviced)
- Service history per vehicle
- Follow-up reminders (e.g., "customer's next oil change due")
- Broadcast offers to past customers

### 4.5 Catalog & Pricing
- Service menu with fixed prices, price ranges, or "get a quote"
- Promotions and discounts
- Seasonal campaigns

### 4.6 Payments & Payouts
- In-app payment collection (card, wallet)
- Commission calculation transparency
- Weekly / monthly payout schedule
- Invoice generation

### 4.7 Reviews & Reputation
- Respond to reviews
- Dispute flagging
- Performance score (acceptance rate, on-time rate, rating)

### 4.8 Analytics
- Conversion funnel: views → bookings → completed
- Service-level revenue breakdown
- Peak hours / busiest days
- Benchmarks vs. local centers (anonymized)

### 4.9 Business Tiers (Monetization)
| Tier | Price | What they get |
|---|---|---|
| Free | 0 | Basic listing, limited bookings/month, standard commission |
| Pro | Monthly sub | Priority in search, unlimited bookings, lower commission, analytics |
| Authorized Partner | Annual contract | Verified badge, featured placement, dedicated account manager |

---

## 5. Roadmap

### Phase 1 — MVP (0 → Launch) | 13 weeks
**Goal:** Launch a working two-sided marketplace in one city with a team of 5 Flutter engineers on a managed backend (Supabase default; Firebase alternative).

B2C (Flutter mobile):
- Auth (phone OTP via Supabase Auth / Firebase Auth)
- Car management
- **Map with service centers + filters + search** *(core)*
- Service center profiles
- **Booking happy path** *(core)* — in-app chat replaced by one-tap call + SMS for MVP
- Basic maintenance tracker (auto-logged from bookings + manual)
- Basic reminders (via FCM push)
- Simple dashboard

B2B (Flutter, tablet-optimized):
- Onboarding + verification doc upload
- Business dashboard (bookings view, realtime updates)
- Service catalog + pricing + hours + capacity
- Accept / reject bookings
- Basic review management

Admin:
- Verification queue (minimal Flutter admin app + Supabase Studio / Firebase console for ops)
- Dispute handling (manual, via admin app + direct data access)
- Payout workflow (semi-manual spreadsheet for MVP)

**Team load:** ~2 Flutter engineers on B2C, ~2 on B2B, 1 tech-lead owning shared packages, admin app, BaaS config (RLS/security rules, Edge/Cloud Functions, schema + migrations).

**Success metric:** 50+ verified service centers, 1,000+ active car owners, 500+ completed bookings/month in launch city.

### Phase 2 — Retention & Monetization | +4–6 weeks
**Goal:** Lock in habit and turn on revenue.

B2C:
- Fuel tracker + expense tracker
- Advanced analytics (cost/km, trends)
- Smart reminders (predictive, based on booking history)
- Saved favorites, re-book flow

B2B:
- Pro tier rollout (subscription)
- Customer CRM + follow-up tools
- Promotions engine
- Payment collection + automated payouts
- Business analytics dashboard

### Phase 3 — Smart Layer | +6 weeks
- Car health score
- Predictive maintenance suggestions
- Insurance / license expiry tracking
- Service center performance benchmarks
- Push campaigns for B2B

### Phase 4 — On-Demand & Emergency | +4 weeks
- Roadside assistance (tow, battery, mobile mechanic)
- Live tracking of mechanic ETA
- One-tap emergency button
- Emergency-only B2B partner type

### Phase 5 — AI & Integrations | +6–8 weeks
- AI diagnostics from user description
- Car damage scanner (photo → estimate)
- Dashboard warning light scanner
- OBD-II integration for real-time car data
- AI-assisted quote generation for B2B

### Phase 6 — Platform Expansion | Long-term
- Spare parts marketplace (B2B → B2C and B2B → B2B)
- Car resale + valuation
- Insurance comparison & renewal
- Community / forum
- Multi-city / multi-country expansion

---

## 6. Core User Flows

### 6.1 B2C: Find & Book (primary flow)
1. Open app → map loads with nearby centers
2. Search or filter by service
3. Tap pin → view profile, price, slots
4. Pick slot → confirm booking
5. Chat with center if needed
6. Service happens → invoice in app → pay
7. Rate & review → auto-logged to maintenance history

### 6.2 B2C: Reminder → Book (retention flow)
1. Push: "Oil change due in 200 km"
2. Tap → see 3 recommended nearby centers, sorted by rating + price
3. Book in 2 taps

### 6.3 B2B: Receive & Complete Booking
1. Dashboard notification → new booking
2. Accept / propose alternative slot
3. Assign to mechanic
4. Update status as job progresses
5. Generate invoice → send to customer
6. Get paid (in-app) → payout on schedule
7. Prompt customer for review

### 6.4 B2B: Onboarding
1. Register business → upload docs
2. Admin verifies (24–48h)
3. Set up catalog + pricing + hours
4. Go live on map
5. First booking → activation email with tips

---

## 7. Feature Priority Matrix

**Must-have for MVP (both sides must work):**
- Map + search + filters (B2C)
- Service center profiles (B2C)
- Booking flow (B2C)
- Business dashboard + catalog + booking management (B2B)
- Verification pipeline (Admin)
- Car management + auto-logged maintenance (B2C)

**High retention value (Phase 2):**
- Fuel + expense trackers
- Smart reminders
- CRM for B2B
- Payments + payouts

**High monetization value:**
- Subscription tiers for B2B
- Featured placement / ads
- Commission on bookings
- Authorized partner program

**Differentiation (Phase 4–5):**
- Roadside assistance
- AI diagnostics & scanning
- OBD integration

---

## 8. Monetization Model

Three revenue streams live from day one:

1. **Commission per booking** — 8–15% of service value, tiered by B2B plan
2. **B2B subscriptions** — Pro tier monthly fee for visibility + tools
3. **Featured placement** — Paid slots in map search results (clearly labeled)

Future streams: parts marketplace commission, insurance referrals, resale platform fees.

---

## 9. Success Metrics

**Marketplace health:**
- GMV (total booking value / month)
- Take rate (revenue / GMV)
- Supply: active verified service centers
- Demand: MAU car owners
- Liquidity: % of searches that convert to bookings

**B2C engagement:**
- D1 / D7 / D30 retention
- Bookings per user per month
- Reminders → bookings conversion
- NPS

**B2B health:**
- Service center retention (monthly churn)
- Avg. bookings per center per week
- B2B NPS
- % centers on Pro tier

---

## 10. Strategic Recommendations

1. **Launch in one city first.** Marketplaces need local density. Pick one with high car density + willingness to pay (e.g., Cairo, Alexandria, Riyadh).
2. **Supply side first.** Sign up 30–50 quality service centers *before* any marketing to drivers. An empty map kills the product on day one.
3. **Solve the trust problem.** Verification badge + honest ratings + money-back on bad service = the moat. Without this, users go back to word-of-mouth.
4. **Auto-logged maintenance is the sticky feature.** Every booking fills the tracker automatically. This is what competitors without the marketplace can't replicate.
5. **First 1,000 bookings matter more than first 1,000 users.** Users without bookings churn; users with one completed booking have 3–5× higher retention.

---

## 11. Open Questions

- Payments: start with cash-on-service only, or launch with in-app payment? (Trade-off: faster MVP vs. slower monetization)
- Verification depth: self-serve with docs + spot checks, or mandatory in-person visit?
- Pricing transparency: require fixed prices, or allow "quote on request"? (Fixed = better UX, but scares some centers away)
- Backend: Supabase or Firebase? Default is Supabase for PostGIS and RLS; revisit only if the team's Firebase depth dramatically outweighs that. **Decide in Week 0.**
- Language: Arabic-first, English-first, or dual from day one?

## 12. Resolved (previously open)

- **B2B mobile app or web-first?** → **Resolved: Flutter mobile/tablet app only.** Flutter team has no web capacity. Adaptive layouts cover tablet (reception desk) and phone (owner on the go). A browser-based portal is not on the roadmap.
- **Tech stack?** → **Resolved: Flutter clients on Supabase (recommended) or Firebase.** Locked to minimize infra load on a 5-engineer team.
