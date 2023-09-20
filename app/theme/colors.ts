const palette = {
  neutral100: "#FFFFFF",
  neutral200: "#FCFCFD",
  neutral800: "#141416",

  gray: "#f0f0f0",

  primary: "#0339d7",

  green: "#00b67a",
} as const;

export const colors = {
  /**
   * The palette is available to use, but prefer using the name.
   * This is only included for rare, one-off cases. Try to use
   * semantic names as much as possible.
   */
  palette,
  /**
   * A helper for making something see-thru.
   */
  transparent: "rgba(0, 0, 0, 0)",
  /**
   * The default text color in many components.
   */
  textPrimary: palette.neutral800,

  /**
   * The default icon color in many components.
   */
  icon: palette.neutral800,

  /**
   * The default color of the screen background.
   */
  background: palette.neutral100,
  backgroundSecondary: palette.gray,

  /**
   * The main tinting color.
   */
  tint: palette.primary,
};
