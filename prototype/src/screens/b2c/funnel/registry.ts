import type { FC } from 'react';
import { B2cAuth, B2cLogin, B2cRegister } from './Auth';
import { B2cLang, B2cOnboarding, B2cSplash } from './PreAuth';

export const b2cFunnelScreens: Record<string, FC> = {
  'b2c-splash': B2cSplash,
  'b2c-lang': B2cLang,
  'b2c-onboarding': B2cOnboarding,
  'b2c-auth': B2cAuth,
  'b2c-login': B2cLogin,
  'b2c-register': B2cRegister,
};
