import ThemeProvider from 'app/design/theming/ThemeProvider'
import { DarkTheme, DefaultTheme } from 'app/design/Colors'
import { useColorScheme } from 'nativewind'

export function PaperThemeProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const { colorScheme } = useColorScheme()
  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      {children}
    </ThemeProvider>
  )
}
