import { useState, useEffect, Suspense } from 'react'
import { RouterProvider, redirect } from 'react-router-dom'
import { router } from '@utils/routes/BrowserRouter'
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClient } from '@utils/queryClient/queryClient'
import { useSelector, useDispatch } from 'react-redux'
import { sendWatchListData, fetchWatchListData } from '@store/watchlist-actions.js'
import { useIdleTimer } from 'react-idle-timer'

import PreLoader from '@components/Layout/PreLoader.jsx'

import { auth } from '@/firebase.js'
import { signOut } from 'firebase/auth'
import { userActions } from '@store/user-slice.js'

let isInitial = true

const App = () => {
	const [isLoading, setIsLoading] = useState(true)
	const dispatch = useDispatch()
	const watchlist = useSelector(state => state.watchList)

	useEffect(() => {
		auth.onAuthStateChanged(authUser => {
			if (authUser) {
				dispatch(
					userActions.signInUser({
						uid: authUser.uid,
						email: authUser.email,
						userName: authUser.displayName,
					})
				),
					dispatch(fetchWatchListData({ user: authUser.uid }))

				redirect('/disney-plus-clone/')
			} else {
				console.log('User is not logged in.')
			}
		})
	}, [dispatch])

	const onIdle = () => {
		dispatch(userActions.signOutUser())
		signOut(auth)
		redirect('/disney-plus-clone/')
	}

	useIdleTimer({
		onIdle,
		timeout: 5 * (60 * 1000),
	})

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
		Object.keys(localStorage).forEach(key => {
			if (key.includes('searchQuery') || key.includes('selectedCategory')) {
				localStorage.removeItem(key)
			}
		})

		const preloading = setTimeout(() => {
			setIsLoading(false)
		}, 3000)

		return () => clearTimeout(preloading)
	}, [])

	return (
		<QueryClientProvider client={queryClient}>
			{isLoading ? (
				<>
					<PreLoader />
				</>
			) : (
				<Suspense fallback={null}>
					<RouterProvider router={router} />
				</Suspense>
			)}
		</QueryClientProvider>
	)
}

export default App
