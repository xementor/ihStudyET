import { useEffect, useState } from 'react'
import { TextInput, Text as RNText } from 'react-native'
import { clsx } from 'clsx'
import { View, Text, Pressable } from 'app/design/styled'
import { HeroOutline } from '@nandorojo/heroicons'

export default function EditAbleText({
  lineNum,
  onSave,
  ...props
}: RNText['props'] & { onSave?: (edited: string) => void; lineNum?: number }) {
  const [isEditing, setIsEditing] = useState(false)
  const [editedText, setEditedText] = useState(props.children)

  useEffect(() => {
    setEditedText(props.children) // Reset editedText when props.children (onePageLesson.title) changes
  }, [props.children])

  const startEditing = () => {
    setIsEditing(true)
  }

  const saveEditedText = () => {
    setIsEditing(false)
    if (onSave) onSave!(editedText ? editedText.toString() : '')
  }

  return (
    <View className="flex-1">
      {isEditing ? (
        <View className="flex-row items-center">
          <TextInput
            multiline
            numberOfLines={lineNum ? lineNum : 4}
            className={clsx(props.className, 'w-full')}
            value={editedText?.toString()}
            onChangeText={setEditedText}
            autoFocus
          />
          <Pressable onPress={saveEditedText}>
            <HeroOutline.Fire height={25} width={25} />
          </Pressable>
        </View>
      ) : (
        <Pressable onPress={startEditing}>
          <Text className={props.className} {...props} />
        </Pressable>
      )}
    </View>
  )
}
