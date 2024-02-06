import styled from 'styled-components'
import Grid from '@mui/material/Grid'

import { MotionContainer } from '@components/ui/MotionContainer'
import { collectionItems } from '@utils/resources/collection-items'
import CollectionGridItem from '@components/ui/CollectionGridItem'

const Collections = () => {
	return (
		<Wrapper>
			<MotionContainer delay={0.5}>
				<Grid container spacing={2} columns={6}>
					{collectionItems.map((item, index) => (
						<CollectionGridItem key={index} item={item} index={index} />
					))}
				</Grid>
			</MotionContainer>
		</Wrapper>
	)
}

export default Collections

const Wrapper = styled.section`
	padding: 0 60px;
`
