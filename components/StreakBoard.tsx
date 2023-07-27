import { View, Text } from "react-native";
import { ScoreComponent } from "./ProgressHeader";

export default function StreakBoard({ }) {
  return (
    <View className="flex flex-row py-4 px-2 items-center">
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
  )

}