export const lightColors = {
  primary: "#18181b",
  primaryForeground: "#fafafa",

  secondary: "#e4e4e7",
  secondaryForeground: "#18181b",

  background: "#f4f4f5",
  foreground: "#52525b",

  card: "#fafafa",
  cardForeground: "#52525b",

  text: "#52525b",
  border: "#d4d4d8",
};

export const darkColors = {
  primary: "#fafafa",
  primaryForeground: "#18181b",

  secondary: "#27272a",
  secondaryForeground: "#18181b",

  background: "#18181b",
  foreground: "#a1a1aa",

  card: "#27272a",
  cardForeground: "#a1a1aa",

  text: "#a1a1aa",
  border: "#3f3f46",
};

export const Colors = {
  light: lightColors,
  dark: darkColors,
};

export type ThemeColors = typeof lightColors;
