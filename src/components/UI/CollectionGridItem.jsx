import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import Grid from '@mui/material/Grid'
import ItemContainer from '@components/ui/ItemContainer'

const CollectionGridItem = ({ item, index }) => {
	return (
		<Grid item key={index} xs={3} md={1}>
			<Link to={`/disney-plus-clone/collection/${item.query}`}>
				<StyledItemContainer>
					<img src={item.img} alt={item.title} loading='lazy' />
					<video autoPlay loop muted playsInline>
						<source src={item.video} type='video/mp4' />
					</video>
				</StyledItemContainer>
			</Link>
		</Grid>
	)
}

export default CollectionGridItem

const StyledItemContainer = styled(ItemContainer)`
	img {
		z-index: 1;
	}

	video {
		position: absolute;
		top: 0;
		width: 100%;
		height: 100%;
		opacity: 0;
		z-index: 0;
		border-radius: 10px;
	}

	&:hover {
		box-shadow: 0px 40px 58px -10px rgba(0, 0, 0, 0.7);
		transform: scale(1.05);

		video {
			opacity: 1;
		}
	}
`
