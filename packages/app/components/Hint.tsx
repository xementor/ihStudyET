import { MaterialIcons } from '@expo/vector-icons'
import React from 'react'
import { View, Text, Pressable } from 'react-native'
import EditAbleText from './EditableText'

type HintPros = {
  close: () => void
}

export function Hint({ close }: HintPros) {
  return (
    <View className="absolute top-24 z-20 m-4 bg-white p-4 shadow-lg">
      {/* <IconButton
        icon="close"
        size={15}
        iconColor="white"
        className="bg-black relative self-end top-[-30px] mb-[-40px] left-8"
        onPress={close}
      /> */}
      <EditAbleText className="text-base">
        What does the left scale have that the right scale doesn't What's te
        difference i weight
      </EditAbleText>
      <Pressable className="mt-2 flex-row items-center">
        <MaterialIcons name="library-books" className="" size={20} />
        <Text className="ml-2 text-base">Show Explaination</Text>
      </Pressable>
    </View>
  )
}
