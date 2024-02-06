import { useQuery } from '@tanstack/react-query'

import styled from 'styled-components'
import { fetchHomePageData } from '@/utils/http/fetchHomePageData'

import Container from '@components/UI/Container'
import GridContainer from '@components/UI/GridContainer'
import Loader from '@components/UI/Loader'
import ErrorBlock from '@components/UI/ErrorBlock'

const ExploreAllResources = () => {
	const { data, isPending, isError } = useQuery({
		queryKey: ['homepage-data'],
		queryFn: ({ signal }) => fetchHomePageData({ signal }),
	})

	let allMovies = []

	if (data) {
		for (const category of data) {
			if (category.data && category.data.results) {
				allMovies.push(...category.data.results)
			}
		}
	}

	return (
		<StyledContainer>
			{isPending && <Loader />}
			{isError && <ErrorBlock message='Something went wrong, please try again later.' />}
			{data && <GridContainer movies={allMovies} title='Explore' path='movie' />}
		</StyledContainer>
	)
}

export default ExploreAllResources

const StyledContainer = styled(Container)`
	padding-top: 10px;
`
