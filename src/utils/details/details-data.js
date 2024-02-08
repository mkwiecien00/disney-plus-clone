export const detailsData = data => {
	let mainData = {
		backdropUrl: '',
		logoUrl: '',
		releaseDate: '',
		releaseYear: '',
		numberOfSeasons: '',
		genres: '',
		overview: '',
		videoUrl: '',
	}

	if (data) {
		// backdropUrl
		switch (true) {
			case data.backdrops !== undefined && data.backdrops !== null && data.backdrops.length > 0:
				mainData.backdropUrl = `https://image.tmdb.org/t/p/original${data.backdrops[0].file_path}`
				break
			case data.backdrops !== undefined && data.backdrops !== null:
				mainData.backdropUrl = `https://image.tmdb.org/t/p/original${data.backdrops}`
				break
			case data.posterPath !== undefined && data.posterPath !== null:
				mainData.backdropUrl = `https://image.tmdb.org/t/p/original${data.posterPath}`
				break
			default:
				mainData.backdropUrl = null
		}

		// logo
		const englishLogo = data.logos.find(logo => logo.iso_639_1 === 'en')

		switch (true) {
			case englishLogo !== undefined && englishLogo !== null:
				mainData.logoUrl = `https://image.tmdb.org/t/p/original${englishLogo.file_path}`
				break
			case data.logos !== undefined && data.logos !== null && data.logos.length > 0:
				mainData.logoUrl = `https://image.tmdb.org/t/p/original${data.logos[0].file_path}`
				break
			default:
				mainData.logoUrl = null
		}

		// releaseDate
		switch (true) {
			case data.releaseDate !== undefined && data.releaseDate !== null && data.releaseDate !== '':
				mainData.releaseDate = data.releaseDate
				break
			default:
				mainData.releaseDate = 'No release date provided'
		}

		// releaseYear
		switch (true) {
			case mainData.releaseDate !== 'No release date provided':
				mainData.releaseYear = new Date(mainData.releaseDate).getFullYear()
				break
			default:
				mainData.releaseYear = 'No release date provided'
		}

		// numberOfSeasons
		switch (true) {
			case data.numberOfSeasons !== undefined && data.numberOfSeasons !== null:
				mainData.numberOfSeasons = data.numberOfSeasons
				break
			default:
				mainData.numberOfSeasons = null
		}

		// genres
		switch (true) {
			case data.genres !== undefined && data.genres !== null && data.genres.length > 0:
				mainData.genres = data.genres.join(', ')
				break
			default:
				mainData.genres = 'No genres provided'
		}

		// overview
		switch (true) {
			case data.overview !== undefined && data.overview !== null && data.overview.trim() !== '':
				mainData.overview = data.overview
				break
			default:
				mainData.overview = null
		}

		// trailerVideo
		const trailerVideo = data.videoResults.find(
			video => video.name.toLowerCase().includes('official trailer') || video.name.toLowerCase().includes('trailer')
		)

		switch (true) {
			case trailerVideo !== undefined && trailerVideo !== null:
				mainData.videoUrl = `https://www.youtube.com/watch?v=${trailerVideo.key}`
				break
			case data.videoResults !== undefined && data.videoResults !== null && data.videoResults.length > 0:
				mainData.videoUrl = `https://www.youtube.com/watch?v=${data.videoResults[0].key}`
				break
			default:
				mainData.videoUrl = null
		}
	}

	return mainData
}
