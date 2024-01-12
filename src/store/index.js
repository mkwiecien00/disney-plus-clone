import { configureStore } from '@reduxjs/toolkit'

import watchListSlice from './watchlist-slice'

const store = configureStore({
	reducer: {
		watchList: watchListSlice.reducer,
	},
})

export default store
