import { useState, useEffect } from 'react'
import { RouterProvider } from 'react-router-dom'
import { router } from '@utils/routes/router'
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClient } from '@utils/query-client/query-client'
import { useSelector, useDispatch } from 'react-redux'
import { sendWatchListData } from '@store/actions/watchlist-actions'
import useIdle from '@hooks/use-idle'
import useAuthState from '@hooks/use-authstate'
import useLocalStorageCleanup from '@hooks/use-cleanup'

import PreLoader from '@components/layout/preloader/PreLoader'
import { auth } from '@/firebase.js'

let isInitial = true

const App = () => {
	const [isLoading, setIsLoading] = useState(true)
	const dispatch = useDispatch()
	const watchlist = useSelector(state => state.watchList)

	useIdle()
	useAuthState()
	useLocalStorageCleanup()

	useEffect(() => {
		if (isInitial) {
			isInitial = false
			return
		}

		if (auth.currentUser && watchlist.changed) {
			dispatch(sendWatchListData({ watchlist, user: auth.currentUser.uid }))
		}
	}, [watchlist, dispatch])

	useEffect(() => {
		const preloading = setTimeout(() => {
			setIsLoading(false)
		}, 3000)

		return () => clearTimeout(preloading)
	}, [])

	return (
		<QueryClientProvider client={queryClient}>
			{isLoading && <PreLoader />}
			{!isLoading && <RouterProvider router={router} />}
		</QueryClientProvider>
	)
}

export default App
