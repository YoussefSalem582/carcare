import type { FC } from 'react';
import {
  B2bAuth,
  B2bLang,
  B2bLogin,
  B2bOnboarding,
  B2bSignup,
  B2bSplash,
} from './Funnel';
import { B2bOnboard1, B2bOnboard3, B2bPending } from './OnboardingShop';
import {
  B2bBooking,
  B2bBookings,
  B2bCatalog,
  B2bDashboard,
  B2bMore,
  B2bPayouts,
  B2bReviews,
} from './Operations';

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
