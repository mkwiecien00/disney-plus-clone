import { createBrowserRouter } from 'react-router-dom'
import { ProtectedRoutes } from '@utils/routes/protected-routes'

import RootLayout from '@pages/Root'
import ErrorPage from '@pages/Error'
import HomePage from '@pages/Home'
import MovieDetailsPage from '@pages/MovieDetails'
import SeriesDetailsPage from '@pages/SeriesDetails'
import SearchPage from '@pages/Search'
import CollectionResourcesPage from '@components/CollectionResources'
import DiscoverMoviesPage from '@pages/DiscoverMovies'
import DiscoverSeriesPage from '@pages/DiscoverSeries'
import MyListPage from '@pages/MyList'
import SignInPage from '@pages/SignIn'
import SignUpPage from '@pages/SignUp'

export const router = createBrowserRouter([
	{
		path: '/disney-plus-clone/',
		element: <RootLayout />,
		errorElement: <ErrorPage />,
		children: [
			{ index: true, element: <HomePage /> },
			{ path: 'signin', element: <SignInPage /> },
			{ path: 'signup', element: <SignUpPage /> },
			{
				element: <ProtectedRoutes />,
				children: [
					{
						path: 'movie',
						children: [
							{ index: true, element: <DiscoverMoviesPage /> },
							{ path: ':id', element: <MovieDetailsPage /> },
						],
					},
					{
						path: 'series',
						children: [
							{ index: true, element: <DiscoverSeriesPage /> },
							{ path: ':id', element: <SeriesDetailsPage /> },
						],
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
						path: 'mylist',
						element: <MyListPage />,
					},
				],
			},
		],
	},
])
