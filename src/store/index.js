import { configureStore } from '@reduxjs/toolkit'

import watchListSlice from '@store/watchlist-slice'
import userSlice from '@store/user-slice'

const store = configureStore({
	reducer: {
		watchList: watchListSlice.reducer,
		user: userSlice.reducer,
	},
})

export default store
