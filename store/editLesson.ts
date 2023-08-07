import { lessons } from "@/components/ProgressHeader"
import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { ContentType, SubLesson } from "@/services/storage/model"

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
	},
})

export const { updateContentText, updateLessonTitle } = slice.actions
export default slice.reducer
