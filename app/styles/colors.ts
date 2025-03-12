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
  primary: "#0A84FF", // Example primary color (slightly different for dark mode)
  secondary: "#5E5CE6", // Example secondary color
  background: "#000000", // Black background
  text: "#FFFFFF", // White text
  // ... other dark mode colors
};

export const Colors = {
  light: lightColors,
  dark: darkColors,
};

export type ThemeColors = typeof lightColors; // Or typeof darkColors, as the structure is the same
