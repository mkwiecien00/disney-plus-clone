import { createSlice } from '@reduxjs/toolkit'

const initialUserState = {
	user: null,
}

const userSlice = createSlice({
	name: 'user',
	initialState: initialUserState,
	reducers: {
		signInUser(state, action) {
			state.user = action.payload
		},
		signOutUser(state) {
			state.user = null
		},
	},
})

export const userActions = userSlice.actions
export default userSlice
