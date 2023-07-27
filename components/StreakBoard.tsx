import { View, Text } from "react-native";
import { ScoreComponent } from "./ProgressHeader";
import { FontAwesome } from "@expo/vector-icons";
import colors from "tailwindcss/colors";

export default function StreakBoard({ }) {
  return (
    <View className="flex md:flex-row md:justify-between md:items-center">
      <View className="flex flex-row py-4 px-2 items-center max-w-sm">
        <View className="w-1/3 p-4">
          <View
            className="w-20 h-20 rounded-full border-4 border-blue-300 flex items-center justify-center"
          >
            <ScoreComponent color="black" />
          </View>

        </View>
        <View className="flex">
          <Text className="text-2xl font-bold">Hello, IH!</Text>
          <Text className="text-base font-semibold">Solve 3 problems daily to start a streak</Text>
          <Text className="text-sm">1 Longest streak 5 Lesson completed</Text>
        </View>


      </View>

      <View className="h-[1px] mb-5   bg-slate-400 md:w-[1px] md:h-full" />

      <View className="flex flex-row justify-around w-full md:w-1/2">
        <StreakDay day="Th" isStreak={true} />
        <StreakDay day="F" />
        <StreakDay day="S" />
        <StreakDay day="Su" />
        <StreakDay day="M" />
      </View>
    </View>
  )

}

function StreakDay({ day, isStreak }: { day: String, isStreak?: boolean }) {

  let className = "flex justify-center items-center w-8  h-16 py-2 rounded-xl"
  if (isStreak) className = className + " border-2 border-slate-500"
  return <View className={className}>
    <Text>{day}</Text>
    <FontAwesome name="bolt" size={25} color={colors.slate[400]} />
  </View>;
}
