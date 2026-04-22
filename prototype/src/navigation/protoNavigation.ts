import type { Surface } from '../types';

/** Infer app surface from screen id prefix (b2c- / b2b- / ftg-). */
export function surfaceForScreenId(id: string): Surface {
  if (id.startsWith('b2b-')) return 'b2b';
  if (id.startsWith('ftg-')) return 'flutterGuide';
  return 'b2c';
}

/** First screen to show when entering a surface without a valid id for that app. */
export function defaultScreenForSurface(surface: Surface): string {
  switch (surface) {
    case 'b2b':
      return 'b2b-splash';
    case 'flutterGuide':
      return 'ftg-overview';
    case 'b2c':
    default:
      return 'b2c-map';
  }
}
