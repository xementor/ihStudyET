import { View, Text, Pressable } from 'app/design/styled'
import { PromptType } from 'app/services/storage/model'
import { useState } from 'react'
import { clsx } from 'clsx'
import EditAbleText from './EditableText'
import { useAppDispatch, useAppSelector } from 'app/services/hooks/hook'
import {
  UpdatePromptExplaination,
  UpdatePromptOption,
  addPromptOption,
} from 'app/store/editLesson'
import { Hoverable } from './Themed'
import { HeroOutline } from '@nandorojo/heroicons'

type PromptProps = {
  prompt: PromptType
  ids: { cid: number; lid: number }
}
export default function Prompt({ prompt, ids }: PromptProps) {
  const { edible } = useAppSelector((state) => state.editLesson)
  const dispatch = useAppDispatch()
  const [wantEdit, setEdit] = useState(false)

  const [explaination, setExp] = useState<string>()
  const [selected, setSelected] = useState<number>()
  const [selectedOption, setSelectedOption] = useState<number[]>([])

  const { text, options, answerIdx } = prompt
  const { cid, lid } = ids

  const handlePress = (i: number) => {
    if (!selectedOption.includes(i)) {
      setSelectedOption((prev) => [...prev, i])
    }
    setSelected(i)
    setExp(options[i]!.explaination)
  }

  const handleAdd = () => {
    dispatch(addPromptOption({ cid, lid }))
  }

  const onSave = (text: string, pid: number) => {
    dispatch(UpdatePromptOption({ cid, lid, pid, text }))
  }
  return (
    <View>
      <View>
        <EditAbleText>{text}</EditAbleText>
      </View>
      <View className="m-2 flex-row flex-wrap">
        {options.map((v, i) => {
          return (
            <PromptButton
              content={v.option}
              key={i}
              style={clsx(
                'mr-2 rounded-lg',
                selectedOption.includes(i) && i == answerIdx && 'bg-blue-300',
                selectedOption.includes(i) && i != answerIdx && 'bg-red-300',
                i == selected && ' rounded-none border-slate-400'
              )}
              handlePress={() => handlePress(i)}
              onSave={wantEdit ? (text) => onSave(text, i) : undefined}
            />
          )
        })}
        {edible && (
          <View className="flex-row items-center ">
            <HeroOutline.Plus
              className="bg-blue-100"
              onPress={handleAdd}
              width={15}
              height={15}
            />
            <Text onPress={() => setEdit(!wantEdit)}>
              {wantEdit ? 'Editable' : 'Edit'}
            </Text>
          </View>
        )}
      </View>
      <EditAbleText
        className="ml-3"
        onSave={(exp) =>
          dispatch(UpdatePromptExplaination({ lid, cid, pid: selected!, exp }))
        }
      >
        {explaination}
      </EditAbleText>
    </View>
  )
}

type PromptButtonProps = {
  style?: string
  content: string
  handlePress?: () => void
  onSave?: (text: string) => void
}
function PromptButton({
  style,
  content,
  handlePress,
  onSave,
}: PromptButtonProps) {
  return (
    <Hoverable
      onPress={handlePress}
      hoveredStyle="bg-slate-200"
      className={clsx(
        'm-2 flex justify-center rounded-lg border-2 border-slate-200',
        style
      )}
    >
      {onSave ? (
        <EditAbleText
          className="mx-1 rounded-lg  p-2"
          lineNum={1}
          onSave={(text) => onSave!(text)}
        >
          {content}
        </EditAbleText>
      ) : (
        <Text className="mx-1 rounded-lg  p-2">{content}</Text>
      )}
    </Hoverable>
  )
}
