import { useState, useEffect } from 'react'
import { useQuery } from '@tanstack/react-query'

import styled from 'styled-components'

import { fetchDataFromQuery } from '@utils/http/fetchDataFromQuery'
import Container from '@components/ui/Container'
import { OpacityMotionContainer } from '@components/ui/MotionContainer'
import GridContainer from '@components/ui/GridContainer'
import SearchInput from '@components/ui/SearchInput'
import Title from '@components/ui/Title'
import Loader from '@components/ui/Loader'
import ErrorBlock from '@components/ui/ErrorBlock'
import ExploreAllResources from '@components/ExploreAllResources'
import useSearchQuery from '@hooks/use-searchquery'

const SearchPage = () => {
	const { query, apiQuery, isInitial, queryIsValid, onChangeHandler } = useSearchQuery()

	const { data, isLoading, isError } = useQuery({
		queryKey: ['search-data', apiQuery],
		queryFn: ({ signal }) => fetchDataFromQuery({ signal, query: apiQuery }),
		enabled: !isInitial && queryIsValid,
	})

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
							{data?.length > 0 && (
								<OpacityMotionContainer>
									<GridContainer movies={data} />
								</OpacityMotionContainer>
							)}
							{data?.length === 0 && !isLoading && <p>No movie or series containing your search term was found.</p>}
						</>
					</OpacityMotionContainer>
				)}
				{isInitial && (
					<OpacityMotionContainer>
						<ExploreAllResources />
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
