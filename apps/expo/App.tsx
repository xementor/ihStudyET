import { NativeNavigation } from 'app/navigation/native'
import { MyTabs } from 'app/navigation/native/tab'
import { Provider } from 'app/provider'

export default function App() {
  return (
    <Provider>
      {/* <NativeNavigation /> */}
      <MyTabs />
    </Provider>
  )
}
