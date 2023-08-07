import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import {
	CardQuizType,
	Content,
	ContentType,
	Info,
} from "@/services/storage/model"
import { chapter } from "@/services/storage/chapter"

const lessons = chapter.subChapters[0].lessons

const initialState = {
	lessons: lessons,
}

const slice = createSlice({
	name: "editLesson",
	initialState,
	reducers: {
		updateLessonTitle: (
			state,
			action: PayloadAction<{ lid: number; title: string }>
		) => {
			const { lid, title } = action.payload
			state.lessons[lid]
			state.lessons[lid].title = title
		},
		updateContentText: (
			state,
			action: PayloadAction<{ lid: number; cid: number; content: string }>
		) => {
			const { lid, cid, content } = action.payload
			const upDatedContent: Content = {
				type: ContentType.info,
				content: { text: content },
			}
			state.lessons[lid].contents[cid] = upDatedContent
		},
		addNewTextContent: (state, action: PayloadAction<{ lid: number }>) => {
			const { lid } = action.payload
			const textContent: Info = { text: "write something" }
			state.lessons[lid].contents.push({
				type: ContentType.info,
				content: textContent,
			})
		},
		addNewMCQ: (state, action: PayloadAction<{ lid: number }>) => {
			const { lid } = action.payload
			const mcq = {
				question: "Write you questio here?",
				options: ["option 1", "option 2", "option 3", "option 4"],
				correctOptions: [3],
				explaination: "explanation here",
			}

			const textContent: CardQuizType = { mcq: mcq }
			state.lessons[lid].contents.push({
				type: ContentType.question,
				content: textContent,
			})
		},
		updateMCQQuestion: (
			state,
			action: PayloadAction<{ lid: number; cid: number; question: string }>
		) => {
			const { lid, cid, question } = action.payload
			const quest = state.lessons[lid].contents[cid]
			if (quest.type == ContentType.question) {
				quest.content.mcq.question = question
			}
		},
		updateMCQOption: (
			state,
			action: PayloadAction<{
				lid: number
				cid: number
				option: string
				oid: number
			}>
		) => {
			const { lid, cid, option, oid } = action.payload
			const quest = state.lessons[lid].contents[cid]
			if (quest.type == ContentType.question) {
				quest.content.mcq.options[oid] = option
			}
		},
		updateMCQExplaination: (
			state,
			action: PayloadAction<{ lid: number; cid: number; explaination: string }>
		) => {
			const { lid, cid, explaination } = action.payload
			const quest = state.lessons[lid].contents[cid]
			if (quest.type == ContentType.question) {
				quest.content.mcq.explaination = explaination
			}
		},
	},
})

export const {
	updateContentText,
	updateLessonTitle,
	addNewTextContent,
	addNewMCQ,
	updateMCQQuestion,
	updateMCQOption,
	updateMCQExplaination,
} = slice.actions
export default slice.reducer
