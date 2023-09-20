/**
  Use these sizing for fonts and other sizes in the app
 */
export const sizing = {
  micro: 2,
  tiny: 4,
  mediumTiny: 6,
  extraSmall: 8,
  small: 12,
  mediumSmall: 14,
  medium: 16,
  large: 24,
  mediumLarge: 28,
  extraLarge: 32,
  huge: 48,
  massive: 64,
  ex: 96,
  h1: 64,
  h2: 48,
  h3: 40,
} as const

export type Sizing = keyof typeof sizing
