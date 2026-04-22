import type { FC } from 'react';
import { B2cCardetail, B2cGarage } from './GarageCar';
import { B2cDashboard, B2cExpenses, B2cReminder } from './HomeRetention';

export const b2cAccountScreens: Record<string, FC> = {
  'b2c-garage': B2cGarage,
  'b2c-cardetail': B2cCardetail,
  'b2c-dashboard': B2cDashboard,
  'b2c-reminder': B2cReminder,
  'b2c-expenses': B2cExpenses,
};
