export const BASE_URL = 'https://api.themoviedb.org/3'
export const API_KEY = '35f3fea26d7c6bea37a8777ddbddbed3'
export const categories = [
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
