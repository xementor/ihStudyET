import { Text, View, Pressable } from 'app/design/styled'
import AppButton from './AppButton'
import { Link } from 'solito/link'

interface CourseCoverProps {
  hasButton?: boolean
}

const CourseCover = ({ hasButton }: CourseCoverProps) => {
  return (
    <Link href="/content">
      <Pressable className="max-w-sm rounded-md border-2 border-slate-300 p-5">
        <View className="h-[150px] bg-slate-500">
          {/* <Image
          className="w-full"
          source={require('/assets/images/favicon.png')}
          style={{ width: 120, height: 120 }}
        /> */}
        </View>
        <Text className="mt-2 text-sm">
          Programing with python . Lesson 2 of 19
        </Text>
        <Text className="my-2 text-base font-bold">Solving Equation</Text>
        <Text className="text-sm">
          See how python handle differnent type fo data.
        </Text>
        <View className="my-4 h-2 bg-blue-200">
          <View className="h-2 w-4 bg-blue-500" />
        </View>

        {hasButton && <AppButton content="Resume course" />}
      </Pressable>
    </Link>
  )
}

export default CourseCover
