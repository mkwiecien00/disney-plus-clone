import { useQuery } from '@tanstack/react-query'

import styled from 'styled-components'
import { fetchHomePageData } from '@utils/http/fetch-homepage-data'

import { OpacityMotionContainer } from '@components/ui/MotionContainer'
import Container from '@components/ui/Container'
import GridContainer from '@components/ui/GridContainer'
import Loader from '@components/ui/Loader'
import ErrorBlock from '@components/ui/ErrorBlock'

const ExploreAllResources = () => {
	const { data, isPending, isError } = useQuery({
		queryKey: ['homepage-data'],
		queryFn: ({ signal }) => fetchHomePageData({ signal }),
	})

	let allMovies = []

	if (data) {
		for (const category of data) {
			if (category.data && category.data.results && category.type === 'movie') {
				allMovies.push(...category.data.results)
			}
		}
	}

	return (
		<OpacityMotionContainer>
			<StyledContainer>
				{isPending && <Loader />}
				{isError && <ErrorBlock message='Something went wrong, please try again later.' />}
				{data && <GridContainer movies={allMovies} title='Explore' path='movie' />}
			</StyledContainer>
		</OpacityMotionContainer>
	)
}

export default ExploreAllResources

const StyledContainer = styled(Container)`
	padding-top: 10px;
`
