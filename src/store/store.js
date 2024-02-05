import { configureStore } from '@reduxjs/toolkit'

import watchListSlice from '@store/slices/watchlist-slice'
import userSlice from '@store/slices/user-slice'

const store = configureStore({
	reducer: {
		watchList: watchListSlice.reducer,
		user: userSlice.reducer,
	},
})

export default store
