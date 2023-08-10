import { useEffect, useState } from 'react'
import { useFonts } from 'expo-font'
import { SplashScreen, Stack } from 'expo-router'
import FontAwesome from '@expo/vector-icons/FontAwesome'
import { Provider } from 'app/provider'

// import "../main.css";
// import { getAuth, onAuthStateChanged } from "firebase/auth"

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from 'expo-router'

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: 'login',
}

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync()

export default function RootLayout() {
  const [loaded, error] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
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
    <Provider>
      <RootLayoutNav />
    </Provider>
  )
}

function RootLayoutNav() {
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
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen name="modal" options={{ presentation: 'modal' }} />
      <Stack.Screen name="content" options={{ headerShown: false }} />
      <Stack.Screen name="login" options={{ headerShown: false }} />
      <Stack.Screen name="registration" options={{ headerShown: false }} />
    </Stack>
  )
}
