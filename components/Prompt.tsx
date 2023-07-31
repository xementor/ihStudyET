import { View, Text, Pressable } from "react-native";
import { CardButton } from "./CardQuiz";

export default function Prompt() {
  return (
    <View className="flex-row m-2">
      <CardButton content="Yes" style="mr-2" />
      <CardButton content="No" />
    </View>
  )
}