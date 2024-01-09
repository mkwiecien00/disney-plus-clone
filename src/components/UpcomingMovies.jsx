import { Link } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'

import styled from 'styled-components'
import { Grid } from '@mui/material'
import { fetchHomePageData } from '../util/http'

import Container from './UI/Container'
import Loader from './UI/Loader'
import ErrorBlock from './UI/ErrorBlock'
import ItemContainer from './UI/ItemContainer'

const UpcomingMovies = () => {
	const { data, isPending, isError } = useQuery({
		queryKey: ['movie-data'],
		queryFn: ({ signal }) => fetchHomePageData({ signal }),
		staleTime: 20000,
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
			{data && (
				<>
					<CollectionTitle>Explore</CollectionTitle>
					<Grid container spacing={2} columns={12} alignItems='center'>
						{upcomingMovies.map((movie, index) => (
							<Grid item key={index} xs={12} sm={4} md={3} lg={2}>
								<Link to={`/disney-plus-clone/movie/${movie.id}`} key={index}>
									<ItemContainer key={index}>
										<img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title || movie.name} />
									</ItemContainer>
								</Link>
							</Grid>
						))}
					</Grid>
				</>
			)}
		</StyledContainer>
	)
}

export default UpcomingMovies

const StyledContainer = styled(Container)`
	padding-top: 10px;
`

const CollectionTitle = styled.h2`
	text-align: left;
	font-weight: bold;
	font-size: 18px;

	@media (min-width: 600px) {
		font-size: 20px;
	}
`
