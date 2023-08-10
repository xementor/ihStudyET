import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {Info} from "../services/storage/model";

interface Lesson {
    lessonIdx: number,
}
const initialState: Lesson = {
    lessonIdx: 0
}

const slice = createSlice({
    name: 'lessons',
    initialState,
    reducers: {
        // action => action handler
        incrementLessonIdx: (state) => {
            state.lessonIdx++;
        },
        setLessonIndex: (state, action:PayloadAction<Lesson>) => {
            state.lessonIdx = action.payload.lessonIdx;
        }
    }
})

export const {incrementLessonIdx, setLessonIndex} = slice.actions;
export default slice.reducer;