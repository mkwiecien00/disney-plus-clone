import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Grid from '@mui/material/Grid'

import collectionImgOne from '@images/collection/disney.jpg'
import collectionImgTwo from '@images/collection/pixar.jpg'
import collectionImgThree from '@images/collection/marvel.jpg'
import collectionImgFour from '@images/collection/starwars.jpg'
import collectionImgFive from '@images/collection/national-geographic.jpg'
import collectionImgSix from '@images/collection/star.jpg'

import collectionVideoOne from '@videos/disney.mp4'
import collectionVideoTwo from '@videos/pixar.mp4'
import collectionVideoThree from '@videos/marvel.mp4'
import collectionVideoFour from '@videos/starwars.mp4'
import collectionVideoFive from '@videos/national-geographic.mp4'
import collectionVideoSix from '@videos/star.mp4'

import { MotionContainer } from '@components/ui/MotionContainer'
import ItemContainer from '@components/ui/ItemContainer'

const collectionItems = [
	{ img: collectionImgOne, video: collectionVideoOne, title: 'Disney collection', query: 'disney' },
	{ img: collectionImgTwo, video: collectionVideoTwo, title: 'Pixar collection', query: 'pixar' },
	{ img: collectionImgThree, video: collectionVideoThree, title: 'Marvel collection', query: 'marvel' },
	{ img: collectionImgFour, video: collectionVideoFour, title: 'Star Wars collection', query: 'starwars' },
	{ img: collectionImgFive, video: collectionVideoFive, title: 'National Geographic collection', query: 'nationalgeographic' },
	{ img: collectionImgSix, video: collectionVideoSix, title: 'Star collection', query: 'star' },
]

const Collections = () => {
	return (
		<Wrapper>
			<MotionContainer delay={0.5}>
				<Grid container spacing={2} columns={6}>
					{collectionItems.map((item, index) => (
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
					))}
				</Grid>
			</MotionContainer>
		</Wrapper>
	)
}

const Wrapper = styled.section`
	padding: 0 60px;
`

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

export default Collections
