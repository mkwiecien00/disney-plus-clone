import { useState, useEffect, lazy, Suspense } from 'react'
import { RouterProvider, createBrowserRouter, redirect } from 'react-router-dom'
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClient } from '@utils/queryClient/queryClient'
import { useSelector, useDispatch } from 'react-redux'
import { sendWatchListData, fetchWatchListData } from '@store/watchlist-actions.js'
import { useIdleTimer } from 'react-idle-timer'

const RootLayout = lazy(() => import('@pages/Root'))
const ErrorPage = lazy(() => import('@pages/Error'))
const HomePage = lazy(() => import('@pages/Home'))
const MovieDetailsPage = lazy(() => import('@pages/MovieDetails'))
const SeriesDetailsPage = lazy(() => import('@pages/SeriesDetails'))
const SearchPage = lazy(() => import('@pages/Search'))
const CollectionResourcesPage = lazy(() => import('@components/CollectionResources.jsx'))
const DiscoverMoviesPage = lazy(() => import('@pages/DiscoverMovies.jsx'))
const DiscoverSeriesPage = lazy(() => import('@pages/DiscoverSeries.jsx'))
const MyListPage = lazy(() => import('@pages/MyList.jsx'))
const SigninPage = lazy(() => import('@pages/Signin.jsx'))
const SignupPage = lazy(() => import('@pages/Signup.jsx'))

import PreLoader from '@components/Layout/PreLoader.jsx'
import ProtectedRoutes from '@utils/ProtectedRoutes.jsx'

import { auth } from '@/firebase.js'
import { signOut } from 'firebase/auth'
import { userActions } from '@store/user-slice.js'

const router = createBrowserRouter([
	{
		path: '/disney-plus-clone/',
		element: <RootLayout />,
		errorElement: <ErrorPage />,
		children: [
			{ index: true, element: <HomePage /> },
			{
				path: 'auth',
				children: [
					{ path: 'signin', element: <SigninPage /> },
					{ path: 'signup', element: <SignupPage /> },
				],
			},
			{
				element: <ProtectedRoutes />,
				children: [
					{
						path: 'movie/:id',
						element: <MovieDetailsPage />,
					},
					{
						path: 'series/:id',
						element: <SeriesDetailsPage />,
					},
					{
						path: 'search',
						element: <SearchPage />,
					},
					{
						path: 'collection/:id',
						element: <CollectionResourcesPage />,
					},
					{
						path: 'discover',
						children: [
							{ path: 'movies', element: <DiscoverMoviesPage /> },
							{ path: 'series', element: <DiscoverSeriesPage /> },
						],
					},
					{
						path: 'mylist',
						element: <MyListPage />,
					},
				],
			},
		],
	},
])

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
