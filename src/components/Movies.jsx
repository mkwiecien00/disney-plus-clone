import { useQuery } from '@tanstack/react-query'

import { fetchHomePageData } from '../util/http'
import MovieCarousel from './UI/MovieCarousel'

const Movies = () => {
	const { data, isPending, isError } = useQuery({
		queryKey: ['homepage-data'],
		queryFn: ({ signal }) => fetchHomePageData({ signal }),
		staleTime: 10000,
	})

	return <MovieCarousel data={data} isPending={isPending} isError={isError} />
}

export default Movies
