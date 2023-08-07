import { useAppDispatch } from "@/app/hook"
import { ContentType } from "@/services/storage/model"
import { addNewMCQ, addNewTextContent } from "@/store/editLesson"
import clsx from "clsx"
import { useState } from "react"
import { View, Pressable, Text } from "react-native"
import { IconButton } from "react-native-paper"

export default function AddContent({ lid }: { lid: number }) {
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
		}
	}

	return (
		<View className="bg-red-100 flex-row items-center">
			<IconButton icon="plus" className="bg-blue-100" onPress={handleAdd} />

			<ContentTypeOpton type={ContentType.info} />
			<ContentTypeOpton type={ContentType.question} />
		</View>
	)

	function ContentTypeOpton({ type }: { type: ContentType }) {
		let text
		if (type == ContentType.info) {
			text = "Text"
		} else if (type == ContentType.question) {
			text = "MCQ"
		}

		return (
			<Pressable
				onPress={() => {
					handlePress(type)
				}}
				className={clsx(
					"bg-blue-100 active:bg-blue-400 mr-2",
					type == selectedType ? "bg-blue-500" : ""
				)}>
				<Text className=" p-2 rounded-sm">{text}</Text>
			</Pressable>
		)
	}
}