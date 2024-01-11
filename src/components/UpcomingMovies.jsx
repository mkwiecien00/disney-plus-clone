import { useQuery } from '@tanstack/react-query'

import styled from 'styled-components'
import { fetchHomePageData } from '../util/http'

import CollectionGrid from './UI/CollectionGrid'
import Container from './UI/Container'
import Loader from './UI/Loader'
import ErrorBlock from './UI/ErrorBlock'

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
			{data && <CollectionGrid movies={upcomingMovies} title='Explore' path='movie' />}
		</StyledContainer>
	)
}

export default UpcomingMovies

const StyledContainer = styled(Container)`
	padding-top: 10px;
`
