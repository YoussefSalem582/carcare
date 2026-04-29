import type { FC } from 'react';
import { B2bAuth, B2bLogin, B2bSignup } from './funnel/Auth';
import { B2bLang, B2bOnboarding, B2bSplash } from './funnel/PreAuth';
import { B2bOnboard1 } from './onboarding/BusinessInfo';
import { B2bOnboard3 } from './onboarding/CatalogSetup';
import { B2bPending } from './onboarding/VerificationPending';
import { B2bBooking } from './operations/BookingDetail';
import { B2bBookings } from './operations/Bookings';
import { B2bCatalog } from './operations/Catalog';
import { B2bDashboard } from './operations/Dashboard';
import { B2bMore } from './operations/More';
import { B2bPayouts } from './operations/Payouts';
import { B2bReviews } from './operations/Reviews';

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
