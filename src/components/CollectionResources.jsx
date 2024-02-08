import { useParams } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'

import styled from 'styled-components'
import { fetchCollectionResources } from '@utils/http/fetch-collection-resources'
import { collectionInfo } from '@utils/resources/collection-info'

import Container from '@components/ui/Container'
import { OpacityMotionContainer } from '@components/ui/MotionContainer'
import GridContainer from '@components/ui/GridContainer'
import Loader from '@components/ui/Loader'
import ErrorBlock from '@components/ui/ErrorBlock'

const CollectionResourcesPage = () => {
	const params = useParams()
	const { fetchQuery, mediaType, collectionHeader } = collectionInfo[params.id]

	const { data, isPending, isError } = useQuery({
		queryKey: ['collection-data', params.id],
		queryFn: ({ signal }) => fetchCollectionResources({ signal, fetchQuery }),
	})

	return (
		<StyledContainer>
			{isPending && <Loader />}
			{isError && <ErrorBlock message='Something went wrong, please try again later.' />}
			{data && (
				<OpacityMotionContainer>
					<GridContainer movies={data} path={mediaType} title={collectionHeader} />
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
