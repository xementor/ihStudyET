import { useEffect } from 'react';
import { Provider } from 'react-redux';
import { useFonts } from 'expo-font';
import { SplashScreen, Stack } from 'expo-router';
import FontAwesome from '@expo/vector-icons/FontAwesome';

import { useColorScheme } from 'nativewind'
import ThemeProvider from '@/constants/theming/ThemeProvider'
import { DarkTheme, DefaultTheme } from "@/constants/Colors"
import { store } from "../store/configureStore";
import "../main.css";
import useTheme from '@/constants/theming/useTheme';

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from 'expo-router';

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: '(tabs)',
};

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
    ...FontAwesome.font,
  });

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return <RootLayoutNav />;
}

function RootLayoutNav() {
  const { colorScheme } = useColorScheme();
  const { colors } = useTheme()


  return (
    <Provider store={store}>
      <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
        <Stack>
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          <Stack.Screen name="modal" options={{ presentation: 'modal' }} />
          <Stack.Screen name="content" options={{ headerShown: false }} />
          <Stack.Screen name="courses" options={{ headerShown: false, }} />
          <Stack.Screen
            name="course"
            options={{
              presentation: 'modal',
              headerShown: false,
            }}
          />
        </Stack>
      </ThemeProvider>
    </Provider>
  );
}
