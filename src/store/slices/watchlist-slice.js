import { createSlice } from '@reduxjs/toolkit'

const initialWatchListState = {
	resources: [],
	changed: false,
}

const watchListSlice = createSlice({
	name: 'watchlist',
	initialState: initialWatchListState,
	reducers: {
		replaceWatchList(state, action) {
			state.resources = action.payload.resources
		},

		addResourceToList(state, action) {
			const newResource = action.payload
			const existingResource = state.resources.find(resource => resource.detailsId === newResource.id)

			if (!existingResource) {
				state.changed = true

				state.resources.push({
					userId: newResource.userId,
					detailsId: newResource.id,
					resourceType: newResource.type,
					path: newResource.path,
					title: newResource.title,
				})
			}
		},

		removeResourceFromList(state, action) {
			const id = action.payload
			state.changed = true

			state.resources = state.resources.filter(resource => resource.detailsId !== id)

			if (state.resources.length === 0) {
				state.resources = []
			}
		},
	},
})

export const watchListActions = watchListSlice.actions
export default watchListSlice
