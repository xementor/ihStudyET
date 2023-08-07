import { useAppDispatch } from "@/app/hook"
import { SubLesson } from "@/services/storage/model"
import { updateSubChapterTitle } from "@/store/editCourse"
import { MaterialIcons, MaterialCommunityIcons } from "@expo/vector-icons"
import { Link } from "expo-router"
import { View, Pressable, Text } from "react-native"
import EditAbleText from "./EditableText"

export enum subLessonState {
	"completed",
	"current",
	"notCompleted",
}

interface LessonItemProps {
	subChapter: {
		title: string
		lessons: SubLesson[]
	}
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
					className="bg-blue-500 w-16 
          h-16 mr-5 rounded-md flex 
          items-center justify-center">
					<MaterialIcons name="check" size={35} color={"white"} />
				</View>
			)
		} else if (state == subLessonState.current) {
			return (
				<View className="ml-[-10]">
					<View className="mb-[-10]">
						<Text className="ml-[-5] text-base w-24 rounded-sm py-1 text-center  bg-blue-500 text-slate-100">
							Continue
						</Text>
						<View className=" w-10 mt-[-13] ml-7">
							<MaterialCommunityIcons name="menu-down" color="blue" size={30} />
						</View>
					</View>
					<View className="border-4 mr-5 p-1  border-blue-500 rounded-md">
						<Pressable className="bg-slate-700 w-16 h-16  rounded-md border-b-4 flex items-center justify-center">
							<MaterialIcons name="play-arrow" color={"white"} size={30} />
						</Pressable>
					</View>
				</View>
			)
		} else state == subLessonState.notCompleted
		return (
			<Pressable className="bg-slate-400 w-16 h-16 mr-5 rounded-md border-b-4 flex items-center justify-center">
				<MaterialIcons name="lock" size={30} />
			</Pressable>
		)
	}
	return (
		<View className="pl-7">
			<View className="w-1 h-6 bg-slate-400 ml-10 sm" />

			<Link href="/content" asChild>
				<View className="flex flex-row items-center p-2 bg-slate-100 ">
					{ui()}
					<EditAbleText
						className="text-base"
						onSave={(title) =>
							dispatch(updateSubChapterTitle({ chapterId, id, title }))
						}>
						{subChapter.title}
					</EditAbleText>
				</View>
			</Link>
		</View>
	)
}
