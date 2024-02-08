import { BASE_URL, API_KEY } from '@utils/http/constants'

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
