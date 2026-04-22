import type { FC } from 'react';
import { B2cMap, B2cAddcar } from './AddcarMap';
import { B2cFilters, B2cMarketplace, B2cSearch } from './Browse';
import { B2cShop, B2cTow } from './ShopTow';

export const b2cDiscoveryScreens: Record<string, FC> = {
  'b2c-addcar': B2cAddcar,
  'b2c-map': B2cMap,
  'b2c-marketplace': B2cMarketplace,
  'b2c-filters': B2cFilters,
  'b2c-search': B2cSearch,
  'b2c-shop': B2cShop,
  'b2c-tow': B2cTow,
};
