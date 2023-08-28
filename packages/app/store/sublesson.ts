import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { CardQuizType, Content, Info } from "../services/storage/model"

interface SubLessonState {
	index: number
	contents: Content[]
}
const initialState: SubLessonState = {
	index: 0,
	contents: [],
}

const slice = createSlice({
	name: "subLesson",
	initialState,
	reducers: {
		// action => action handler
		incrementIndex: (state) => {
			state.index++
		},
		addContent: (state, action: PayloadAction<Content>) => {
			state.contents.push(action.payload)
		},
		resetIndex: (state) => {
			state.index = 0
			state.contents = []
		},
	},
})

export const { incrementIndex, addContent, resetIndex } = slice.actions
export default slice.reducer
