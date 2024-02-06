import { useQuery } from '@tanstack/react-query'

import { fetchHomePageData } from '@/utils/http/fetchHomePageData'
import ResourcesCarousel from '@components/ui/ResourcesCarousel'

const Movies = () => {
	const { data, isPending, isError } = useQuery({
		queryKey: ['homepage-data'],
		queryFn: ({ signal }) => fetchHomePageData({ signal }),
	})

	return <ResourcesCarousel data={data} isPending={isPending} isError={isError} />
}

export default Movies
