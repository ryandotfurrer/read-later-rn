import { useThemeColor } from "@/app-example/hooks/useThemeColor";
import { SignedIn, SignedOut, useUser } from "@clerk/clerk-expo";
import { Link } from "expo-router";
import { Text, View, StyleSheet, Appearance } from "react-native";

import { Colors, lightColors, ThemeColors } from "../styles/colors";

export default function Page() {
  const colorScheme = Appearance.getColorScheme() || "light";
  const themeColors: ThemeColors =
    Colors[colorScheme === "dark" ? "dark" : "light"];
  const { user } = useUser();

  return (
    <View style={styles.pageContainer}>
      <SignedIn>
        <Text>Hello {user?.emailAddresses[0].emailAddress}</Text>
      </SignedIn>
      <SignedOut>
        <View style={styles.sectionContainer}>
          <Text style={[styles.heading, styles.headingOne]}>read later</Text>
          <Text style={[styles.Text, styles.lastParagraph]}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
            corrupti similique et, aut nisi id praesentium, impedit consequatur
            quod atque dicta doloribus blanditiis assumenda deserunt.
          </Text>
          <Link
            href="/(auth)/sign-in"
            style={[styles.linkBtn, styles.linkBtnOutline]}
          >
            <Text>Sign in</Text>
          </Link>
          <Link
            href="/(auth)/sign-up"
            style={[styles.linkBtn, styles.linkBtnPrimary]}
          >
            <Text>Sign up</Text>
          </Link>
        </View>
      </SignedOut>
    </View>
  );
}

const styles = StyleSheet.create({
  pageContainer: {
    paddingHorizontal: 16,
    backgroundColor: useThemeColor(
      { light: lightColors.background, dark: Colors.dark.background },
      "background"
    ),
    height: "100%",
  },

  sectionContainer: {
    marginVertical: 64,
  },

  heading: {
    color: useThemeColor(
      { light: lightColors.primary, dark: Colors.dark.primary },
      "primary"
    ),
  },

  headingOne: {
    fontSize: 32,
    fontWeight: 600,
    letterSpacing: 0.25,
  },

  lastParagraph: {
    marginBottom: 16,
  },

  Text: {
    color: useThemeColor(
      { light: lightColors.foreground, dark: Colors.dark.foreground },
      "foreground"
    ),
  },

  linkBtn: {
    borderWidth: 1,
    padding: 16,
    borderRadius: 8,
    marginVertical: 4,
  },

  linkBtnPrimary: {
    borderColor: useThemeColor(
      { light: lightColors.border, dark: Colors.dark.border },
      "border"
    ),
    backgroundColor: useThemeColor(
      { light: lightColors.primary, dark: Colors.dark.primary },
      "primary"
    ),
    color: useThemeColor(
      {
        light: lightColors.primaryForeground,
        dark: Colors.dark.primaryForeground,
      },
      "primaryForeground"
    ),
  },

  linkBtnOutline: {
    backgroundColor: useThemeColor(
      { light: lightColors.card, dark: Colors.dark.card },
      "card"
    ),
    borderColor: useThemeColor(
      { light: lightColors.border, dark: Colors.dark.border },
      "border"
    ),
    color: useThemeColor(
      {
        light: lightColors.primary,
        dark: Colors.dark.primary,
      },
      "primary"
    ),
  },
});
