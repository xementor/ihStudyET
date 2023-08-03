import { createSlice, PayloadAction } from "@reduxjs/toolkit"

export interface User {
	displayName: string | null
	email: string | null
	// readonly phoneNumber: string | null
	// readonly photoURL: string | null
	// readonly providerId: string
	// readonly uid: string
}

interface userState {
	user: User | false
}
const initialState: userState = {
	user: false,
}

const slice = createSlice({
	name: "user",
	initialState,
	reducers: {
		updateUser: (state, action: PayloadAction<User>) => {
			state.user = action.payload
		},
	},
})

export const { updateUser } = slice.actions
export default slice.reducer
