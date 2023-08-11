import { View, Text } from 'app/design/styled'
import { ScoreComponent } from './ProgressHeader'
import { HeroOutline } from '@nandorojo/heroicons'

export default function StreakBoard({}) {
  return (
    <View className="flex md:flex-row md:items-center md:justify-between">
      <View className="flex max-w-sm flex-row items-center px-2 py-4">
        <View className="w-1/3 p-4">
          <View className="flex h-20 w-20 items-center justify-center rounded-full border-4 border-blue-300">
            <ScoreComponent color="black" />
          </View>
        </View>
        <View className="flex">
          <Text className="text-2xl font-bold">Hello, IH!</Text>
          <Text className="text-base font-semibold">
            Solve 3 problems daily to start a streak
          </Text>
          <Text className="text-sm">1 Longest streak 5 Lesson completed</Text>
        </View>
      </View>

      <View className="mb-5 h-[1px]   bg-slate-400 md:h-full md:w-[1px]" />

      <View className="flex w-full flex-row justify-around md:w-1/2">
        <StreakDay day="Th" isStreak={true} />
        <StreakDay day="F" />
        <StreakDay day="S" />
        <StreakDay day="Su" />
        <StreakDay day="M" />
      </View>
    </View>
  )
}

function StreakDay({ day, isStreak }: { day: String; isStreak?: boolean }) {
  let className = 'flex justify-center items-center w-8  h-16 py-2 rounded-xl'
  if (isStreak) className = className + ' border-2 border-slate-500'
  return (
    <View className={className}>
      <Text>{day}</Text>
      <HeroOutline.Bolt />
    </View>
  )
}
