import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { CardQuizType, Content, Info } from "../services/storage/model"

interface SubLessonState {
	index: number
	contents: (Info | CardQuizType)[]
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
		addInfo: (state, action: PayloadAction<Info | CardQuizType>) => {
			state.contents.push(action.payload)
		},
		resetIndex: (state) => {
			state.index = 0
			state.contents = []
		},
	},
})

export const { incrementIndex, addInfo, resetIndex } = slice.actions
export default slice.reducer
