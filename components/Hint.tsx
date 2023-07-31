import { MaterialIcons } from "@expo/vector-icons";
import React from "react";
import { View, Text, Pressable } from "react-native";
import { IconButton } from "react-native-paper";

export function Hint() {
  return (
    <View className="absolute z-20 top-24 bg-white m-4 p-4 shadow-lg">
      <IconButton
        icon="close"
        size={15}
        iconColor="white"
        className="bg-black relative self-end top-[-30px] mb-[-40px] left-8" />
      <Text className="text-base">
        What does the left scale have that the right scale doesn't
        What's te difference i weight
      </Text>
      <Pressable className="mt-2 flex-row items-center">
        <MaterialIcons name="library-books" className="" size={20} />
        <Text className="ml-2 text-base">Show Explaination</Text>
      </Pressable>
    </View>
  )
}