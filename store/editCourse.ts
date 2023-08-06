import { course, CourseType } from "@/services/storage/course"
import { createSlice, PayloadAction } from "@reduxjs/toolkit"

const initialState = {
	course: course,
}

const slice = createSlice({
	name: "editLesson",
	initialState,
	reducers: {
		updateCourseTitle: (state, action: PayloadAction<string>) => {
			const title = action.payload
			state.course.title = title
		},
		updateCourseDes: (state, action: PayloadAction<string>) => {
			const description = action.payload
			state.course.description = description
		},
	},
})

export const { updateCourseTitle, updateCourseDes } = slice.actions
export default slice.reducer
