import clsx from 'clsx'
import { useEffect, useState } from 'react'
import { TextInput, TouchableOpacity, Text as RNText } from 'react-native'
import { View, Text } from 'app/design/styled'

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
          <TouchableOpacity onPress={saveEditedText}>
            {/* <MaterialIcons name="save" size={25} /> */}
          </TouchableOpacity>
        </View>
      ) : (
        <TouchableOpacity onPress={startEditing}>
          <Text {...props} />
        </TouchableOpacity>
      )}
    </View>
  )
}
