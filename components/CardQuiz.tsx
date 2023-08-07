import clsx from "clsx"
import { withExpoSnack } from "nativewind"
import { useState } from "react"
import { GestureResponderEvent, Pressable, View, Text } from "react-native"
import _ from "lodash"
import EditAbleText from "./EditableText"
import { CardQuizType } from "@/services/storage/model"

export default function CardQuiz({ mcq }: CardQuizType) {
	const [isFlipped, setFlipped] = useState<boolean>(false)
	const [isOptionCorrect, setSelection] = useState<boolean>(false)
	const [submitted, setSubmitted] = useState<boolean>(false)

	const [options, setOptions] = useState<number[]>([])
	// const correctOptions = [2]

	function handlePres(event: GestureResponderEvent, i: number): void {
		if (submitted) return
		if (mcq.correctOptions.length > 1) {
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

	return (
		<View className="bg-slate-200 p-2">
			{!isFlipped && (
				<View>
					<EditAbleText className="text-base py-2">{mcq.question}</EditAbleText>
					<View className="py-2">
						{mcq.options.map((v, i) => (
							<CardOption
								option={v}
								disabled={submitted}
								key={i}
								selected={options.indexOf(i) != -1}
								multiChoice={mcq.correctOptions.length > 1}
								handlePress={(ev) => handlePres(ev, i)}
							/>
						))}
					</View>

					<View className={!submitted ? "flex-row" : "flex-col"}>
						{!submitted && (
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
					</View>
				</View>
			)}
			{isFlipped && (
				<View className="flex">
					<Text className="text-xl font-bold my-2">Explaination</Text>
					<EditAbleText className="text-base my-4">
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
		<Pressable
			disabled={type === "disable"}
			onPress={handlePress}
			className={clsx(`flex justify-center items-start ${style}`)}>
			<Text className={commonStyle}>{content}</Text>
		</Pressable>
	)
}

type CardOptionProps = {
	option: string
	selected: boolean
	handlePress: (event: GestureResponderEvent) => void
	disabled?: boolean
	multiChoice: boolean
}
function CardOption({
	option,

	selected,
	handlePress,
	disabled,
	multiChoice,
}: CardOptionProps) {
	const [hovered, setHovered] = useState(false)

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
			<EditAbleText className="">{option}</EditAbleText>
		</Pressable>
	)
}

// export default withExpoSnack(CardQuiz)
