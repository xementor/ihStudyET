import { useAppDispatch } from 'app/services/hooks/hook'
import { Chapter } from 'app/services/storage/model'
import { updateChapterTitle } from 'app/store/editCourse'
import React, { useState } from 'react'
import { View, Pressable, Text } from 'app/design/styled'
import EditAbleText from './EditableText'
import { SubChapterItem, subLessonState } from './SubChapterItem'

interface ChapterItemProps {
  index: number
  chapter: Chapter
}

export const ChapterItem: React.FC<ChapterItemProps> = ({ index, chapter }) => {
  const [expanded, setExpanded] = useState(false)
  const dispatch = useAppDispatch()

  const getState = (i: number) => {
    if (i == 1) return subLessonState.current
    else if (i < 1) return subLessonState.completed
    else return subLessonState.notCompleted
  }

  const handlePress = () => setExpanded(!expanded)
  return (
    <View>
      <Pressable onPress={handlePress} className="py-7">
        <View className="flex flex-row items-center justify-between bg-gray-100 px-2">
          <View className="flex w-[90%] flex-row items-center">
            <View className="mx-5 flex h-20 w-20 items-center justify-center rounded-lg bg-zinc-300">
              <Text className="text-3xl font-bold">{index + 1}</Text>
            </View>
            <EditAbleText
              className="text-2xl font-bold"
              onSave={(title) =>
                dispatch(updateChapterTitle({ id: index, title }))
              }
            >
              {chapter.title}
            </EditAbleText>
          </View>
          {/* <IconButton
            icon={expanded ? 'chevron-up' : 'chevron-down'}
            size={25}
            onPress={handlePress}
          /> */}
        </View>
      </Pressable>
      {expanded &&
        chapter.subChapters.map((subChapter, i) => (
          <SubChapterItem
            chapterId={index}
            subChapter={subChapter}
            key={i}
            id={i}
            state={getState(i)}
          />
        ))}
      <View
        className="mb-2 h-[1px] w-full bg-slate-400"
        style={{ marginTop: expanded ? 28 : 0 }}
      />
    </View>
  )
}
