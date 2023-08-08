import { useAppDispatch } from "@/app/hook"
import { CardQuizType } from "@/services/storage/model"
import {
	updateMCQExplaination,
	updateMCQOption,
	updateMCQQuestion,
	updateMCQanswer,
} from "@/store/editLesson"
import clsx from "clsx"
import _ from "lodash"
import { useEffect, useState } from "react"
import { GestureResponderEvent, Pressable, Text, View } from "react-native"
import { useDispatch } from "react-redux"
import EditAbleText from "./EditableText"
import { Hoverable } from "./Themed"

type CardQuizProps = {
	question: CardQuizType
	lid: number
	cid: number
}

export default function CardQuiz({ question, lid, cid }: CardQuizProps) {
	const [editabl, setEditable] = useState(true)
	const mcq = question.mcq
	const [isFlipped, setFlipped] = useState<boolean>(false)
	const [isOptionCorrect, setSelection] = useState<boolean>(false)
	const [submitted, setSubmitted] = useState<boolean>(false)

	const dispatch = useAppDispatch()
	const [options, setOptions] = useState<number[]>([])
	// const correctOptions = [2]
	useEffect(() => {
		if (editabl) {
			setOptions(mcq.correctOptions)
		} else {
			setOptions([])
		}
	}, [editabl])

	function handlePres(event: GestureResponderEvent, i: number): void {
		if (submitted) return
		if (mcq.correctOptions.length > 1 || editabl) {
			setOptions((prevOptions) => {
				const index = prevOptions.indexOf(i)
				if (index !== -1) {
					return prevOptions.filter((item) => item !== i)
				} else {
					return [...prevOptions, i]
				}
			})
		} else {
			setOptions([i])
		}
	}
	function handleButtonPress(event: GestureResponderEvent): void {
		setFlipped(!isFlipped)
	}

	function handleSubmit(event: GestureResponderEvent): void {
		setSubmitted(true)
		if (_.isEqual(options, mcq.correctOptions)) {
			setSelection(true)
		} else {
			setSelection(false)
		}
	}

	function renderResult() {
		if (submitted) {
			if (isOptionCorrect) {
				return <Text className="text-base p-3 font-bold">Correct</Text>
			} else {
				return <Text className="text-base p-3 font-bold">Incorrect</Text>
			}
		}
	}
	const getSelected = (i: number) => {
		return options.indexOf(i) != -1
	}

	function setCorrectOption(event: GestureResponderEvent): void {
		dispatch(updateMCQanswer({ lid, cid, ans: options }))
	}

	return (
		<View className="bg-slate-200 p-2">
			{!isFlipped && (
				<View>
					<EditAbleText
						className="text-base py-2"
						onSave={(question) =>
							dispatch(updateMCQQuestion({ question, cid, lid }))
						}>
						{mcq.question}
					</EditAbleText>
					<View className="py-2">
						{mcq.options.map((v, i) => (
							<CardOption
								option={v}
								disabled={submitted && !editabl}
								key={i}
								ids={{ oid: i, cid, lid }}
								selected={options.indexOf(i) != -1}
								isCorrect={mcq.correctOptions.indexOf(i) != -1}
								submitted={submitted}
								multiChoice={mcq.correctOptions.length > 1}
								handlePress={(ev) => handlePres(ev, i)}
							/>
						))}
					</View>

					<View className={!submitted ? "flex-row" : "flex-col"}>
						{!editabl && !submitted && (
							<CardButton
								handlePress={handleSubmit}
								type={_.isEmpty(options) ? "disable" : "background"}
								content="Submit"
								style="mr-2"
							/>
						)}
						{renderResult()}
						<CardButton
							content="Explaination"
							handlePress={handleButtonPress}
						/>
						{editabl && (
							<CardButton content="setCorrect" handlePress={setCorrectOption} />
						)}
					</View>
				</View>
			)}
			{isFlipped && (
				<View className="flex">
					<Text className="text-xl font-bold my-2">Explaination</Text>
					<EditAbleText
						className="text-base my-4"
						onSave={(explaination) =>
							dispatch(updateMCQExplaination({ lid, cid, explaination }))
						}>
						{mcq.explaination}
					</EditAbleText>

					<CardButton
						content="Back To the Problem"
						handlePress={handleButtonPress}
					/>
				</View>
			)}
		</View>
	)
}

type CardButtonProps = {
	type?: "outline" | "background" | "disable"
	content: string
	style?: String
	handlePress?: (event: GestureResponderEvent) => void
}

export function CardButton({
	type = "outline",
	content,
	style,
	handlePress,
}: CardButtonProps) {
	let commonStyle = "text-base font-bold flex-nowrap p-2 rounded-lg "
	if (type == "outline") commonStyle = commonStyle + "border-2 border-slate-400"
	else if (type == "disable")
		commonStyle += "border-slate-300 border-2 text-slate-300"
	else commonStyle += "bg-black text-white"

	return (
		<Hoverable
			hoveredStyle="bg-blue-300 rounded-lg"
			disabled={type === "disable"}
			onPress={handlePress}
			className={clsx(
				`flex justify-center items-start active:bg-blue-600 ${style}`
			)}>
			<Text className={commonStyle}>{content}</Text>
		</Hoverable>
	)
}

type CardOptionProps = {
	ids: { oid: number; cid: number; lid: number }
	option: string
	selected: boolean
	handlePress: (event: GestureResponderEvent) => void
	disabled?: boolean
	multiChoice: boolean
	isCorrect: boolean
	submitted: boolean
}
function CardOption({
	option,
	ids,
	selected,
	handlePress,
	disabled,
	multiChoice,
	isCorrect,
	submitted,
}: CardOptionProps) {
	const dispatch = useDispatch()
	const [hovered, setHovered] = useState(false)
	const { cid, lid, oid } = ids

	return (
		<Pressable
			disabled={disabled}
			onHoverIn={() => setHovered(true)}
			onHoverOut={() => setHovered(false)}
			onPress={handlePress}
			className={clsx(
				"flex-row items-center my-1   p-2",
				hovered && "bg-slate-300",
				!disabled && "active:bg-slate-400"
			)}
			// style={selected && { transform: [{ rotateY: '180deg' }] }}
		>
			<View
				className={clsx(
					"border-2 border-slate-400 p-1 h-7 w-7",
					multiChoice ? "rounded-sm" : "rounded-full",
					"mr-2 flex justify-center items-center"
				)}>
				<View
					className={clsx(
						"bg-black w-4 h-4",
						multiChoice ? "rounded-sm" : "rounded-full",
						!selected && "hidden"
					)}
				/>
			</View>
			<EditAbleText
				onSave={(option) =>
					dispatch(updateMCQOption({ option, cid, lid, oid }))
				}
				className={clsx(
					submitted && isCorrect && "text-blue-800",
					submitted && selected && !isCorrect && "text-red-600"
				)}>
				{option}
			</EditAbleText>
		</Pressable>
	)
}

// export default withExpoSnack(CardQuiz)
