/**
  Use these spacings for margins/paddings and other whitespace throughout your app.
 */
export const spacing = {
  micro: 2,
  tiny: 4,
  mediumTiny: 6,
  extraSmall: 8,
  small: 12,
  mediumSmall: 14,
  medium: 16,
  mediumLarge: 20,
  large: 24,
  extraLarge: 32,
  mediumHuge: 36,
  huge: 48,
  massive: 64,
  extraMassive: 72,
} as const

export type Spacing = keyof typeof spacing
