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
          <Text style={styles.headingOne}>read later</Text>
          <Text style={styles.lastParagraph}>
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
  },

  sectionContainer: {
    marginVertical: 64,
  },

  headingOne: {
    fontSize: 32,
    fontWeight: 600,
    letterSpacing: 0.25,
  },

  lastParagraph: {
    marginBottom: 16,
  },

  linkBtn: {
    borderWidth: 1,
    padding: 16,
    borderRadius: 8,
    marginVertical: 4,
  },

  linkBtnPrimary: {
    borderColor: lightColors.primary,
    backgroundColor: lightColors.primary,
    color: lightColors.primaryForeground,
  },

  linkBtnOutline: {
    backgroundColor: lightColors.card,
    borderColor: lightColors.border,
  },
});
