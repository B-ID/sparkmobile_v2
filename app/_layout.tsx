import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import 'react-native-reanimated';

import { useColorScheme } from '@/hooks/useColorScheme';
import ProviderTree from '@/providers';

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  if (!loaded) {
    // Async font loading only occurs in development.
    return null;
  }

  //?Todo => Replace with actual authentication logic
  const isLoggedIn = true;


  return (
    <ProviderTree>
      <Stack>
        <Stack.Protected guard={isLoggedIn}>
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          <Stack.Screen name="settings" />
          <Stack.Screen
            name="connect-partner"
            options={{
              headerShown: false,
              presentation: 'modal',
              animation: 'fade',
            }}
          />
          <Stack.Screen
            options={{
              headerShown: false,
              presentation: 'modal',
              animation: 'fade',
            }}
            name="chat"
          />
          <Stack.Screen
            name="(modals)"
            options={{
              headerShown: false,
              presentation: 'modal',
              animation: 'slide_from_bottom',
              animationDuration: 1000,
            }}
          />
          <Stack.Screen name="(onboarding)" />
        </Stack.Protected>
        <Stack.Protected guard={!isLoggedIn}>
          <Stack.Screen
            name="(auth)"
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen name="+not-found" />
        </Stack.Protected>
      </Stack>
      <StatusBar style="auto" />
    </ProviderTree>
  );
}
