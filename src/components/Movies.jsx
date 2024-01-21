import { useQuery } from '@tanstack/react-query'

import { fetchHomePageData } from '@util/http'
import MovieCarousel from '@components/UI/MovieCarousel'

const Movies = () => {
	const { data, isPending, isError } = useQuery({
		queryKey: ['homepage-data'],
		queryFn: ({ signal }) => fetchHomePageData({ signal }),
	})

	return <MovieCarousel data={data} isPending={isPending} isError={isError} />
}

export default Movies
