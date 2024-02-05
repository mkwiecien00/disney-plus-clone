import { BASE_URL, API_KEY } from '@utils/http/constants'

export const fetchListForCategory = async ({ signal, resourceType, category }) => {
	try {
		const endpoint = resourceType === 'movie' ? 'discover/movie' : resourceType === 'series' ? 'discover/tv' : null

		if (!endpoint) {
			throw new Error('Invalid type.')
		}

		const response = await fetch(`${BASE_URL}/${endpoint}?with_watch_providers=337&with_genres=${category}&api_key=${API_KEY}`, {
			signal,
		})

		if (!response.ok) {
			throw new Error('Failed to fetch data based on selected category.')
		}

		const data = await response.json()

		const filteredData = data.results
			.filter(item => item.poster_path)
			.map(item => ({
				...item,
			}))

		return filteredData
	} catch (error) {
		console.error('An error occurred while fetching resource list for category. Please try again later.')
		return null
	}
}
