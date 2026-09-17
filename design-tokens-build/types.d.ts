/* build: v1.22.0 */
import type {} from '@digdir/designsystemet-types';

// Augment types based on theme
declare module '@digdir/designsystemet-types' {
  export interface ColorDefinitions {
    brand1: never;
    brand2: never;
    neutral: never;
    'color-3': never;
  }
  export interface SeverityColorDefinitions {
    info: never;
    success: never;
    warning: never;
    danger: never;
  }
}
