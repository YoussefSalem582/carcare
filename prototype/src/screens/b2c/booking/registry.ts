import type { FC } from 'react';
import { B2cConfirmed, B2cPayment, B2cService, B2cSlot } from './Flow';
import { B2cBookings, B2cProgress, B2cReview } from './Track';

export const b2cBookingScreens: Record<string, FC> = {
  'b2c-service': B2cService,
  'b2c-slot': B2cSlot,
  'b2c-payment': B2cPayment,
  'b2c-confirmed': B2cConfirmed,
  'b2c-bookings': B2cBookings,
  'b2c-progress': B2cProgress,
  'b2c-review': B2cReview,
};
