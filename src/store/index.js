import { configureStore } from '@reduxjs/toolkit'

import watchListSlice from './watchlist-slice'
import userSlice from './user-slice'

const store = configureStore({
	reducer: {
		watchList: watchListSlice.reducer,
		user: userSlice.reducer,
	},
})

export default store
