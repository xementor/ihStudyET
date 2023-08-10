import { useAppDispatch } from 'app/services/hooks/hook'
import { SubChapter } from 'app/services/storage/model'
import { updateSubChapterTitle } from 'app/store/editCourse'
import { MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons'
import { Link } from 'expo-router'
import { View, Pressable, Text } from 'react-native'
import EditAbleText from './EditableText'

export enum subLessonState {
  'completed',
  'current',
  'notCompleted',
}

interface LessonItemProps {
  subChapter: SubChapter
  state: subLessonState
  id: number
  chapterId: number
}

export const SubChapterItem: React.FC<LessonItemProps> = ({
  id,
  subChapter,
  state,
  chapterId,
}) => {
  const dispatch = useAppDispatch()

  const ui = () => {
    if (state == subLessonState.completed) {
      return (
        <View
          className="mr-5 flex 
          h-16 w-16 items-center justify-center 
          rounded-md bg-blue-500"
        >
          <MaterialIcons name="check" size={35} color={'white'} />
        </View>
      )
    } else if (state == subLessonState.current) {
      return (
        <View className="ml-[-10]">
          <View className="mb-[-10]">
            <Text className="ml-[-5] w-24 rounded-sm bg-blue-500 py-1 text-center  text-base text-slate-100">
              Continue
            </Text>
            <View className=" ml-7 mt-[-13] w-10">
              <MaterialCommunityIcons name="menu-down" color="blue" size={30} />
            </View>
          </View>
          <View className="mr-5 rounded-md border-4  border-blue-500 p-1">
            <Pressable className="flex h-16 w-16  items-center justify-center rounded-md border-b-4 bg-slate-700">
              <MaterialIcons name="play-arrow" color={'white'} size={30} />
            </Pressable>
          </View>
        </View>
      )
    } else state == subLessonState.notCompleted
    return (
      <Pressable className="mr-5 flex h-16 w-16 items-center justify-center rounded-md border-b-4 bg-slate-400">
        <MaterialIcons name="lock" size={30} />
      </Pressable>
    )
  }
  return (
    <View className="pl-7">
      <View className="sm ml-10 h-6 w-1 bg-slate-400" />

      <Link href="/content" asChild>
        <View className="flex flex-row items-center bg-slate-100 p-2 ">
          {ui()}
          <EditAbleText
            className="text-base"
            onSave={(title) =>
              dispatch(updateSubChapterTitle({ chapterId, id, title }))
            }
          >
            {subChapter.title}
          </EditAbleText>
        </View>
      </Link>
    </View>
  )
}
