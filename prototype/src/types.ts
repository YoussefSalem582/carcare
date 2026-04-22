import type { SCREENS } from './data/screens';

export type ScreenRow =
  | (typeof SCREENS)['b2c'][number]
  | (typeof SCREENS)['b2b'][number]
  | (typeof SCREENS)['flutterGuide'][number];
export type Locale = 'en' | 'ar-EG';
export type ThemeMode = 'light' | 'dark';
export type Surface = 'b2c' | 'b2b' | 'flutterGuide';
