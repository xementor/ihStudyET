import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { ContentType, Info, SubLesson } from "@/services/storage/model"
import { cLesson1, cLesson2, cLesson3 } from "@/services/storage/c"

const lessons = [cLesson1, cLesson2, cLesson3]

const initialState = {
	lessons: lessons,
}
lessons[1].contents[0].content

const slice = createSlice({
	name: "editLesson",
	initialState,
	reducers: {
		updateLessonTitle: (
			state,
			action: PayloadAction<{ lid: number; title: string }>
		) => {
			const { lid, title } = action.payload
			console.log("lid", lid)
			state.lessons[lid].title = title
		},
		updateContentText: (
			state,
			action: PayloadAction<{ lid: number; cid: number; content: string }>
		) => {
			const { lid, cid, content } = action.payload
			state.lessons[lid].contents[cid].content.text = content
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
