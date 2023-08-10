import {createSlice} from "@reduxjs/toolkit";


const slice = createSlice({
    name: 'selectedOption',
    initialState: -1,
    reducers: {
        // action => action handler
        addSelectedOption: (option, action) => {
            option = action.payload.id;
        },
        resetSelectedOption: (option, action) => {
            option = -1;
        },
    }
})
export const {addSelectedOption, resetSelectedOption} = slice.actions;
export default slice.reducer;