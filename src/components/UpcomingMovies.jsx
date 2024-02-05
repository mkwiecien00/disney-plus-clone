import { useQuery } from '@tanstack/react-query'

import styled from 'styled-components'
import { fetchHomePageData } from '@/utils/http/fetchHomePageData'

import Container from '@components/UI/Container'
import GridContainer from '@components/UI/GridContainer'
import Loader from '@components/UI/Loader'
import ErrorBlock from '@components/UI/ErrorBlock'

const UpcomingMovies = () => {
	const { data, isPending, isError } = useQuery({
		queryKey: ['homepage-data'],
		queryFn: ({ signal }) => fetchHomePageData({ signal }),
	})

	let upcomingMovies = []

	if (data) {
		const upcomingMoviesData = data.find(item => item.category === 'upcoming-movies')
		if (upcomingMoviesData) {
			upcomingMovies = upcomingMoviesData.data.results || []
		}
	}

	return (
		<StyledContainer>
			{isPending && <Loader />}
			{isError && <ErrorBlock message='Something went wrong, please try again later.' />}
			{data && <GridContainer movies={upcomingMovies} title='Explore' path='movie' />}
		</StyledContainer>
	)
}

export default UpcomingMovies

const StyledContainer = styled(Container)`
	padding-top: 10px;
`
