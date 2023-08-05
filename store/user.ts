import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { User } from "firebase/auth"

export interface UserLogin {
	displayName: string | null
	email: string | null
}

interface userState {
	user: UserLogin | false
}

const initialState: userState = {
	user: false,
}

const slice = createSlice({
	name: "user",
	initialState,
	reducers: {
		updateUser: (state, action: PayloadAction<User>) => {
			const user = action.payload
			state.user = { displayName: user.displayName, email: user.email }
		},
	},
})

export const { updateUser } = slice.actions
export default slice.reducer
