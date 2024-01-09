import styled from 'styled-components'
import Grid from '@mui/material/Grid'

import collectionImgOne from '../assets/images/collection/disney.jpg'
import collectionImgTwo from '../assets/images/collection/pixar.jpg'
import collectionImgThree from '../assets/images/collection/marvel.jpg'
import collectionImgFour from '../assets/images/collection/starwars.jpg'
import collectionImgFive from '../assets/images/collection/national-geographic.jpg'
import collectionImgSix from '../assets/images/collection/star.jpg'

import collectionVideoOne from '../assets/videos/disney.mp4'
import collectionVideoTwo from '../assets/videos/pixar.mp4'
import collectionVideoThree from '../assets/videos/marvel.mp4'
import collectionVideoFour from '../assets/videos/starwars.mp4'
import collectionVideoFive from '../assets/videos/national-geographic.mp4'
import collectionVideoSix from '../assets/videos/star.mp4'

import {MotionContainer} from './UI/MotionContainer'
import ItemContainer from './UI/ItemContainer'

const collectionItems = [
	{ img: collectionImgOne, video: collectionVideoOne, title: 'Disney collection' },
	{ img: collectionImgTwo, video: collectionVideoTwo, title: 'Pixar collection' },
	{ img: collectionImgThree, video: collectionVideoThree, title: 'Marvel collection' },
	{ img: collectionImgFour, video: collectionVideoFour, title: 'Star Wars collection' },
	{ img: collectionImgFive, video: collectionVideoFive, title: 'National Geographic collection' },
	{ img: collectionImgSix, video: collectionVideoSix, title: 'Star collection' },
]

const Collections = () => {
	return (
		<Wrapper>
			<MotionContainer delay={0.5}>
				<Grid container spacing={2} columns={6}>
					{collectionItems.map((item, index) => (
						<Grid item key={index} xs={3} md={1}>
							<StyledItemContainer>
								<img src={item.img} alt={item.title} loading='lazy' />
								<video autoPlay loop muted playsInline>
									<source src={item.video} type='video/mp4' />
								</video>
							</StyledItemContainer>
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
