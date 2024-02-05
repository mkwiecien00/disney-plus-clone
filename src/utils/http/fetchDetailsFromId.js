import { BASE_URL, API_KEY } from '@utils/http/constants'

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
			posterPath: data.poster_path,
		}

		if (filteredData.backdrops && filteredData.backdrops.length === 0) {
			filteredData.backdrops = null
		}

		return filteredData
	} catch (error) {
		console.error('An error occurred while fetching details. Please try again later.')
		return null
	}
}
