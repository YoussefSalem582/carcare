import type { FC } from 'react';
import { b2cAccountScreens } from './b2c/account/registry';
import { b2cBookingScreens } from './b2c/booking/registry';
import { b2cDiscoveryScreens } from './b2c/discovery/registry';
import { b2cFunnelScreens } from './b2c/funnel/registry';
import { b2bScreens } from './b2b/registry';

export const PHONE_SCREENS: Record<string, FC> = {
  ...b2cFunnelScreens,
  ...b2cDiscoveryScreens,
  ...b2cBookingScreens,
  ...b2cAccountScreens,
  ...b2bScreens,
};
