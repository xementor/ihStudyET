import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { Content, ContentType, Info } from "@/services/storage/model"
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
			const textContent: Info = { text: "write something" }
			state.lessons[lid].contents.push({
				type: ContentType.info,
				content: textContent,
			})
		},
	},
})

export const { updateContentText, updateLessonTitle, addNewTextContent } =
	slice.actions
export default slice.reducer
