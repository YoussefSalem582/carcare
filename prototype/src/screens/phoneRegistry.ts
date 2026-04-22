import type { FC } from 'react';
import { b2cAccountScreens } from './b2cAccount';
import { b2cBookingScreens } from './b2cBooking';
import { b2cDiscoveryScreens } from './b2cDiscovery';
import { b2cFunnelScreens } from './b2cFunnel';
import { b2bScreens } from './b2bScreens';

export const PHONE_SCREENS: Record<string, FC> = {
  ...b2cFunnelScreens,
  ...b2cDiscoveryScreens,
  ...b2cBookingScreens,
  ...b2cAccountScreens,
  ...b2bScreens,
};
