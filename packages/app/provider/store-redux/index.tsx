import { store } from 'app/store/configureStore'
import { Provider } from 'react-redux'

export function StoreReduxProvider({
  children,
}: {
  children: React.ReactNode
}) {
  return <Provider store={store}>{children}</Provider>
}
