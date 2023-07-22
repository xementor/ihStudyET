import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Info } from "../services/storage/model";

interface SubLessonState {
  index: number;
  infos: Info[];
}
const initialState: SubLessonState = {
  index: 0,
  infos: [],
};

const slice = createSlice({
  name: "subLesson",
  initialState,
  reducers: {
    // action => action handler
    incrementIndex: (state) => {
      state.index++;
    },
    addInfo: (state, action: PayloadAction<Info>) => {
      state.infos.push(action.payload);
    },
    resetIndex: (state) => {
      state.index = 0;
      state.infos = [];
    },
  },
});

export const { incrementIndex, addInfo, resetIndex } = slice.actions;
export default slice.reducer;
