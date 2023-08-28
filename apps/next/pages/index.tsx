import { HomeScreen } from 'app/features/home/screen'
import { CourseScreen } from 'app/features/course/course-screen'
import { View as RNView, Text as RNText } from 'react-native'
import View from 'app/design/base/view'
import { Text } from 'app/design/styled'

export default function App() {
  return (
    <>
      <View className="bg-red-100 hover:bg-blue-100">
        <RNText>defaul text</RNText>
      </View>
      <p className="bg-red-100 hover:bg-blue-200">vong cong</p>
      <CourseScreen />
    </>
  )
}
