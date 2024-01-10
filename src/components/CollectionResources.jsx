import { useParams } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'

import styled from 'styled-components'
import { fetchCollectionResources } from '../util/http'

import Container from './UI/Container'
import Loader from './UI/Loader'
import ErrorBlock from './UI/ErrorBlock'
import CollectionGrid from './UI/CollectionGrid'
import { OpacityMotionContainer } from './UI/MotionContainer'

const collectionInfo = {
	disney: {
		fetchQuery: 'discover/movie?with_companies=2',
		mediaType: 'movie',
		collectionHeader: 'Explore Disney Collection',
	},
	pixar: {
		fetchQuery: 'discover/movie?with_companies=3',
		mediaType: 'movie',
		collectionHeader: 'Explore Pixar Collection',
	},
	marvel: {
		fetchQuery: 'discover/movie?with_companies=420',
		mediaType: 'movie',
		collectionHeader: 'Explore Marvel Collection',
	},
	starwars: {
		fetchQuery: 'search/movie?query=star%20wars',
		mediaType: 'movie',
		collectionHeader: 'Explore Star Wars Collection',
	},
	nationalgeographic: {
		fetchQuery: 'discover/movie?with_companies=7521',
		mediaType: 'movie',
		collectionHeader: 'Explore National Geographic Collection',
	},
	star: {
		fetchQuery: 'discover/tv?with_networks=2739',
		mediaType: 'series',
		collectionHeader: 'Explore Star Collection',
	},
}

const CollectionResourcesPage = () => {
	const params = useParams()
	const { fetchQuery, mediaType, collectionHeader } = collectionInfo[params.id]

	const { data, isPending, isError } = useQuery({
		queryKey: ['collection-data', params.id],
		queryFn: ({ signal }) => fetchCollectionResources({ signal, fetchQuery }),
		staleTime: 10000,
	})

	return (
		<StyledContainer>
			{isPending && <Loader />}
			{isError && <ErrorBlock message='Something went wrong, please try again later.' />}
			{data && (
				<OpacityMotionContainer>
					<CollectionGrid movies={data} path={mediaType} title={collectionHeader} />
				</OpacityMotionContainer>
			)}
		</StyledContainer>
	)
}

export default CollectionResourcesPage

const StyledContainer = styled(Container)`
	display: flex;
	justify-content: center;
	align-items: center;
	margin-top: 30px;
	padding: 60px;
	text-align: center;
`
