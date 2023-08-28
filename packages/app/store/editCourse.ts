import { course } from 'app/services/storage/course'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState = {
  course: course,
}

const slice = createSlice({
  name: 'editCourse',
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
    updateChapterTitle: (
      state,
      action: PayloadAction<{ id: number; title: string }>
    ) => {
      const { id, title } = action.payload
      state.course.chapters[id]!.title = title
    },
    updateSubChapterTitle: (
      state,
      action: PayloadAction<{ chapterId: number; title: string; id: number }>
    ) => {
      const { id, title, chapterId } = action.payload
      state.course.chapters[chapterId]!.subChapters[id]!.title = title
    },
  },
})

export const {
  updateCourseTitle,
  updateCourseDes,
  updateChapterTitle,
  updateSubChapterTitle,
} = slice.actions
export default slice.reducer
