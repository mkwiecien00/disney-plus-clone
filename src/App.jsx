import { useState, useEffect, Suspense } from 'react'
import { RouterProvider, redirect } from 'react-router-dom'
import { router } from '@utils/routes/BrowserRouter'
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClient } from '@utils/queryClient/queryClient'
import { useSelector, useDispatch } from 'react-redux'
import { sendWatchListData } from '@store/watchlist-actions.js'
import useIdle from '@hooks/use-idle'
import useAuthState from '@hooks/use-authstate'
import useLocalStorageCleanup from '@hooks/use-cleanup'

import PreLoader from '@components/Layout/PreLoader.jsx'

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
			{!isLoading && (
				<Suspense fallback={null}>
					<RouterProvider router={router} />
				</Suspense>
			)}
		</QueryClientProvider>
	)
}

export default App
