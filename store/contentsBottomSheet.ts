import {createSlice} from "@reduxjs/toolkit";


const slice = createSlice({
    name: 'bottomSheetOpen',
    initialState: false,
    reducers: {
        showSheet: (state) => {
            return true
        },

        hideSheet: (state) => {
            return false
        },

        reverseSheet: (state) => {
            return !state;
        },

    }
})
export const {showSheet, hideSheet, reverseSheet} = slice.actions;
export default slice.reducer;