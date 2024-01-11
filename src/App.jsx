import { useState, useEffect, lazy, Suspense } from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClient } from './util/http.js'

const RootLayout = lazy(() => import('./pages/Root'))
const ErrorPage = lazy(() => import('./pages/Error'))
const HomePage = lazy(() => import('./pages/Home'))
const MovieDetailsPage = lazy(() => import('./pages/MovieDetails'))
const SeriesDetailsPage = lazy(() => import('./pages/SeriesDetails'))
const SearchPage = lazy(() => import('./pages/Search'))
const CollectionResourcesPage = lazy(() => import('./components/CollectionResources.jsx'))
const DiscoverMoviesPage = lazy(() => import('./pages/DiscoverMovies.jsx'))
const DiscoverSeriesPage = lazy(() => import('./pages/DiscoveSeries.jsx'))

import PreLoader from './components/Layout/PreLoader.jsx'

const router = createBrowserRouter([
	{
		path: '/disney-plus-clone/',
		element: <RootLayout />,
		errorElement: <ErrorPage />,
		children: [
			{ index: true, element: <HomePage /> },
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
		],
	},
])

const App = () => {
	const [isLoading, setIsLoading] = useState(true)

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
