import React, { lazy } from 'react'
import { createBrowserRouter } from 'react-router-dom'
import ProtectedRoutes from '@utils/routes/ProtectedRoutes'

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

export const router = createBrowserRouter([
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
