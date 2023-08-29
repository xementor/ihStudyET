import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { ContentScreen } from 'app/features/content'
import { CourseScreen } from 'app/features/course/course-screen'
import { HomeScreen } from 'app/features/home/screen'

const Tab = createBottomTabNavigator()

export function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Course" component={CourseScreen} />
      <Tab.Screen name="Content" component={ContentScreen} />
    </Tab.Navigator>
  )
}
