import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'

import styled from 'styled-components'

import { fetchDataFromQuery } from '../util/http'

import Container from '../components/UI/Container'
import { OpacityMotionContainer } from '../components/UI/MotionContainer'
import ItemContainer from '../components/UI/ItemContainer'
import Grid from '@mui/material/Grid'
import SearchInput from '../components/UI/SearchInput'
import Title from '../components/UI/Title'
import Loader from '../components/UI/Loader'
import ErrorBlock from '../components/UI/ErrorBlock'
import UpcomingMovies from '../components/UpcomingMovies'

const SearchPage = () => {
	const storedQuery = localStorage.getItem('searchQuery')
	const [query, setQuery] = useState(storedQuery || '')
	const [apiQuery, setApiQuery] = useState(storedQuery || '')
	const [isInitial, setIsInitial] = useState(true)
	const queryIsValid = query.trim().length > 0

	useEffect(() => {
		localStorage.setItem('searchQuery', query)

		if (queryIsValid) {
			const settingApiQuery = setTimeout(() => {
				setIsInitial(false)
				setApiQuery(query.trim())
			}, 1000)

			return () => clearTimeout(settingApiQuery)
		} else {
			setIsInitial(true)
		}
	}, [query, queryIsValid])

	const { data, isLoading, isError } = useQuery({
		queryKey: ['search-data', apiQuery],
		queryFn: ({ signal }) => fetchDataFromQuery({ signal, query: apiQuery }),
		enabled: !isInitial && queryIsValid,
	})

	const onChangeHandler = e => {
		setQuery(e.target.value)
	}

	return (
		<StyledContainer>
			<SearchInput onChange={onChangeHandler} query={query} />
			<Wrapper>
				{!isInitial && (
					<OpacityMotionContainer>
						<>
							<Title>Search results for {query}</Title>
							{isLoading && <Loader />}
							{isError && <ErrorBlock message='Something went wrong, please try again later.' />}
							{data?.length > 0 ? (
								<OpacityMotionContainer>
									<Grid container spacing={2} columns={12} alignItems='center'>
										{data.map((item, index) => (
											<Grid item key={index} xs={12} sm={4} md={3} lg={2}>
												<Link to={`/disney-plus-clone/${item.media_type}/${item.id}`} key={index}>
													<ItemContainer key={index}>
														<img src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`} alt={item.title || item.name} />
													</ItemContainer>
												</Link>
											</Grid>
										))}
									</Grid>
								</OpacityMotionContainer>
							) : (
								!isLoading && <p>No movie or series containing your search term was found.</p>
							)}
						</>
					</OpacityMotionContainer>
				)}
				{isInitial && (
					<OpacityMotionContainer>
						<UpcomingMovies />
					</OpacityMotionContainer>
				)}
			</Wrapper>
		</StyledContainer>
	)
}

export default SearchPage

const StyledContainer = styled(Container)`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	align-content: start;
`

const Wrapper = styled.section`
	padding: 0 60px 60px;
	width: 100%;
	text-align: center;
`
