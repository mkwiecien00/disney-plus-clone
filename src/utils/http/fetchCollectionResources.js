import { BASE_URL, API_KEY } from '@utils/http/constants'

export const fetchCollectionResources = async ({ signal, fetchQuery }) => {
	try {
		const response = await fetch(`${BASE_URL}/${fetchQuery}&api_key=${API_KEY}`, { signal })

		if (!response.ok) {
			throw new Error('Failed to fetch data based on entered query.')
		}
		const data = await response.json()

		const filteredData = data.results
			.filter(item => item.poster_path)
			.map(item => ({
				...item,
			}))

		return filteredData
	} catch (error) {
		console.error('An error occurred while fetching search results. Please try again later.')
		return null
	}
}
