import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {Info} from "../services/storage/model";

interface QuestionShownState {
    isQuestion: boolean;
    isSelected: boolean;
    selectedOption: number;
    bottomSheetVisible: boolean;

}
const initialState: QuestionShownState = {
    isQuestion: false,
    isSelected: false,
    selectedOption: -1,
    bottomSheetVisible: false
}

const slice = createSlice({
    name: 'ui',
    initialState,
    reducers: {
        // action => action handler
        uiHashQuestion: (state) => {
            state.isQuestion = true
        },
        uiDontHasQuestion: (state) => {
            state.isQuestion = false
        },

        selectOption: (state) => {
            state.isSelected = true;
        },

        deselectOption: (state) => {
            state.isSelected = false;
            state.selectedOption = -1;
        },

        offBottomSheetVisibility: (state) => {
            state.bottomSheetVisible = false;
        },
        onBottomSheetVisibility: (state) => {
            state.bottomSheetVisible = true;
        },

        addOption: (state, action: PayloadAction<{id: number}>) => {
            state.selectedOption = action.payload.id;
        }
    }
})

export const {uiHashQuestion, uiDontHasQuestion, selectOption, addOption, deselectOption, onBottomSheetVisibility, offBottomSheetVisibility} = slice.actions;
export default slice.reducer;