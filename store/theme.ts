import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface themeState {
  isDark: boolean

}
const initialState: themeState = {
  isDark: false
}

const slice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    // action => action handler
    toggleTheme: (state) => {
      state.isDark = !state.isDark;
    },
  }
})

export const { toggleTheme } = slice.actions;
export default slice.reducer;