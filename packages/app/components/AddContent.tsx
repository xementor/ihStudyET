import { HeroOutline } from '@nandorojo/heroicons'
import { useAppDispatch } from 'app/services/hooks/hook'
import { ContentType } from 'app/services/storage/model'
import { addNewMCQ, addNewTextContent, addPrompt } from 'app/store/editLesson'
import { clsx } from 'clsx'
import { useState } from 'react'
import { View, Pressable, Text } from 'app/design/styled'
import { withExpoSnack } from 'nativewind'

function AddContent({ lid }: { lid: number }) {
  const [selectedType, setType] = useState(ContentType.info)
  const dispatch = useAppDispatch()

  const handlePress = (type: ContentType) => {
    setType(type)
  }

  const handleAdd = () => {
    if (selectedType == ContentType.info) {
      dispatch(addNewTextContent({ lid }))
    } else if (selectedType == ContentType.question) {
      dispatch(addNewMCQ({ lid }))
    } else if (selectedType == ContentType.prompt) {
      dispatch(addPrompt({ lid }))
    }
  }

  return (
    <View className="flex-row items-center bg-red-100">
      <HeroOutline.Plus className="bg-blue-100" onPress={handleAdd} />
      <ContentTypeOpton type={ContentType.info} />
      <ContentTypeOpton type={ContentType.question} />
      <ContentTypeOpton type={ContentType.prompt} />
      <ContentTypeOpton type={ContentType.image} />
    </View>
  )

  function ContentTypeOpton({ type }: { type: ContentType }) {
    let text
    if (type == ContentType.info) {
      text = 'Text'
    } else if (type == ContentType.question) {
      text = 'MCQ'
    } else if (type == ContentType.prompt) {
      text = 'Prompt'
    } else if (type == ContentType.image) {
      text = 'Image'
    }

    return (
      <Pressable
        onPress={() => {
          handlePress(type)
        }}
        className={clsx(
          'mr-2 bg-blue-100 active:bg-blue-400',
          type == selectedType ? 'bg-blue-500' : ''
        )}
      >
        <Text className=" rounded-sm p-2">{text}</Text>
      </Pressable>
    )
  }
}

export default AddContent
