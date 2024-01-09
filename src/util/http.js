import { QueryClient } from '@tanstack/react-query'

export const queryClient = new QueryClient()

const BASE_URL = 'https://api.themoviedb.org/3/'
const API_KEY = '35f3fea26d7c6bea37a8777ddbddbed3'

export const fetchHomePageData = async ({ signal }) => {
	const categories = [
		{
			category: 'popular-movies',
			type: 'movie',
			title: 'Popular Movies',
			path: `${BASE_URL}/discover/movie?with_watch_providers=337&watch_region=US&language=en-US&sort_by=popularity.desc&api_key=${API_KEY}`,
		},
		{
			category: 'popular-series',
			type: 'series',
			title: 'Popular Series',
			path: `${BASE_URL}/discover/tv?with_watch_providers=337&watch_region=US&language=en-US&sort_by=popularity.desc&api_key=${API_KEY}`,
		},
		{
			category: 'upcoming-movies',
			type: 'movie',
			title: 'Upcoming Movies',
			path: `${BASE_URL}/movie/upcoming?region=US&language=en-US&api_key=${API_KEY}`,
		},
		{
			category: 'top-rated-movies',
			type: 'movie',
			title: 'Top Rated Movies',
			path: `${BASE_URL}/movie/top_rated?region=US&language=en-US&api_key=${API_KEY}`,
		},
		{
			category: 'top-rated-series',
			type: 'series',
			title: 'Top Rated Series',
			path: `${BASE_URL}/tv/top_rated?region=US&language=en-US&api_key=${API_KEY}`,
		},
	]

	const fetchCategoryData = async () => {
		const categoryData = await Promise.all(
			categories.map(async category => {
				try {
					const response = await fetch(category.path, { signal })
					if (!response.ok) {
						throw new Error('Failed to fetch data.')
					}
					const data = await response.json()
					return { ...category, data }
				} catch (error) {
					console.error(`An error occurred while fetching data for ${category.category}. Please try again later.`)
					return { ...category }
				}
			})
		)
		return categoryData
	}

	return fetchCategoryData()
}

export const fetchDetailsFromId = async ({ signal, detailsId, resourceType }) => {
	try {
		const response = await fetch(`${BASE_URL}/${resourceType}/${detailsId}?api_key=${API_KEY}&append_to_response=videos,images`, {
			signal,
		})

		if (!response.ok) {
			throw new Error('Failed to fetch details.')
		}

		const data = await response.json()

		const filteredData = {
			releaseDate: data.release_date || data.first_air_date,
			genres: data.genres.map(genre => genre.name),
			videoResults: data.videos.results,
			logos: data.images.logos,
			backdrops: data.images.backdrops || data.images.backdrop_path,
			title: data.title || data.name,
			numberOfSeasons: data.number_of_seasons,
			overview: data.overview,
		}

		return filteredData
	} catch (error) {
		console.error('An error occurred while fetching details. Please try again later.')
		return null
	}
}

export const fetchDataFromQuery = async ({ signal, query }) => {
	try {
		const response = await fetch(`${BASE_URL}/search/multi?query=${query}&api_key=${API_KEY}`, { signal })

		if (!response.ok) {
			throw new Error('Failed to fetch data based on entered query.')
		}
		const data = await response.json()

		const filteredData = data.results
			.filter(item => (item.media_type === 'movie' || item.media_type === 'tv') && item.poster_path)
			.map(item => ({
				...item,
				media_type: item.media_type === 'movie' ? 'movie' : 'series',
			}))

		return filteredData
	} catch (error) {
		console.error('An error occurred while fetching search results. Please try again later.')
		return null
	}
}
