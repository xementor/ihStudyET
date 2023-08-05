import { useEffect, useState } from "react"
import { Provider } from "react-redux"
import { useFonts } from "expo-font"
import { Text } from "react-native"
import { SplashScreen, Stack } from "expo-router"
import FontAwesome from "@expo/vector-icons/FontAwesome"

import { useColorScheme } from "nativewind"
import ThemeProvider from "@/constants/theming/ThemeProvider"
import { DarkTheme, DefaultTheme } from "@/constants/Colors"
import { store } from "../store/configureStore"
// import "../main.css";
import useTheme from "@/constants/theming/useTheme"
import { getAuth, onAuthStateChanged } from "firebase/auth"
import { useAppDispatch } from "./hook"
import { updateUser } from "@/store/user"

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from "expo-router"

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: "login",
}

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync()

export default function RootLayout() {
  const [loaded, error] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
    ...FontAwesome.font,
  })

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error
  }, [error])

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync()
    }
  }, [loaded])

  if (!loaded) {
    return null
  }

  return (
    <Provider store={store}>
      <RootLayoutNav />
    </Provider>
  )
}

function RootLayoutNav() {
  const { colorScheme } = useColorScheme()
  const { colors } = useTheme()
  const dispatch = useAppDispatch();

  const [loading, setLoading] = useState(true)



  // useEffect(() => {
  //   console.log('hi')
  //   const auth = getAuth()
  //   onAuthStateChanged(auth, (user) => {
  //     if (user) {
  //       const uid = user
  //       dispatch(updateUser(user))
  //       setLoading(false)
  //     } else {
  //       setLoading(false)
  //     }
  //   })
  // }, [])


  // if (loading) {
  //   return (
  //     <>
  //       <Text>Loading</Text>
  //     </>
  //   )
  // }

  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="modal" options={{ presentation: "modal" }} />
        <Stack.Screen name="content" options={{ headerShown: false }} />
        <Stack.Screen name="login" options={{ headerShown: false }} />
        <Stack.Screen name="registration" options={{ headerShown: false }} />
      </Stack>
    </ThemeProvider>
  )
}

