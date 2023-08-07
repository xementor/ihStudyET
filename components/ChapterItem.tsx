import { useAppDispatch } from "@/app/hook"
import { Chapter } from "@/services/storage/model"
import { updateChapterTitle } from "@/store/editCourse"
import React, { useState } from "react"
import { View, Pressable, Text } from "react-native"
import { IconButton } from "react-native-paper"
import EditAbleText from "./EditableText"
import { SubChapterItem, subLessonState } from "./SubChapterItem"

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
				<View className="px-2 flex flex-row justify-between items-center bg-gray-100">
					<View className="flex flex-row items-center w-[90%]">
						<View className="bg-zinc-300 w-20 h-20 flex justify-center items-center rounded-lg mx-5">
							<Text className="text-3xl font-bold">{index + 1}</Text>
						</View>
						<EditAbleText
							className="text-2xl font-bold"
							onSave={(title) =>
								dispatch(updateChapterTitle({ id: index, title }))
							}>
							{chapter.title}
						</EditAbleText>
					</View>
					<IconButton
						icon={expanded ? "chevron-up" : "chevron-down"}
						size={25}
						onPress={handlePress}
					/>
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
				className="w-full h-[1px] bg-slate-400 mb-2"
				style={{ marginTop: expanded ? 28 : 0 }}
			/>
		</View>
	)
}
