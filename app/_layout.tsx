import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import "react-native-reanimated";

import { useColorScheme } from "@/hooks/useColorScheme";
import ProviderTree from "@/providers";

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });

  if (!loaded) {
    // Async font loading only occurs in development.
    return null;
  }

  return (
    <ProviderTree>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="+not-found" />
        <Stack.Screen name="settings" />
        <Stack.Screen
          name="connect-partner"
          options={{
            headerShown: false,
            presentation: "modal",
            animation: "fade",
          }}
        />
        <Stack.Screen
          options={{
            headerShown: false,
            presentation: "modal",
            animation: "fade",
          }}
          name="chat"
        />
        <Stack.Screen options={{ headerShown: false }} name="paywall" />
        <Stack.Screen options={{ headerShown: true, presentation: 'modal'}} name="modal" />
      </Stack>
      <StatusBar style="auto" />
    </ProviderTree>
  );
}
