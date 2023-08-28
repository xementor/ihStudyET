import { NavigationProvider } from './navigation'
import { SafeArea } from './safe-area'
import { StoreReduxProvider } from './store-redux'

export function Provider({ children }: { children: React.ReactNode }) {
  return (
    <StoreReduxProvider>
      <SafeArea>
        <NavigationProvider>{children}</NavigationProvider>
      </SafeArea>
    </StoreReduxProvider>
  )
}
