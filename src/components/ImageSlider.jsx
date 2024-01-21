import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'

import imgSlideOne from '@images/slides/imgslide-1.jpg'
import imgSlideTwo from '@images/slides/imgslide-2.jpg'
import imgSlideThree from '@images/slides/imgslide-3.jpg'
import imgSlideFour from '@images/slides/imgslide-4.jpg'

import overlayImgOne from '@images/overlays/imgslide-1-overlay.jpg'
import overlayImgTwo from '@images/overlays/imgslide-2-overlay.jpg'
import overlayImgThree from '@images/overlays/imgslide-3-overlay.jpg'
import overlayImgFour from '@images/overlays/imgslide-4-overlay.jpg'

import { MotionContainer } from '@components/UI/MotionContainer'
import ItemContainer from '@components/UI/ItemContainer'

const slideImages = [
	{ img: imgSlideOne, overlay: overlayImgOne, title: 'Home Alone 2: Lost in New York', path: 'movie', id: '772' },
	{ img: imgSlideTwo, overlay: overlayImgTwo, title: 'Doctor Who: The Giggle', path: 'series', id: '239770' },
	{ img: imgSlideThree, overlay: overlayImgThree, title: 'The Simpsons', path: 'series', id: '456' },
	{ img: imgSlideFour, overlay: overlayImgFour, title: 'Indiana Jones and the Dial of Destiny', path: 'movie', id: '335977' },
]

const ImageSlider = () => {
	return (
		<Wrapper>
			<MotionContainer>
				<StyledCarousel
					autoPlay
					infiniteLoop
					showArrows={true}
					showStatus={false}
					showIndicators={true}
					showThumbs={false}
					interval={5000}
					useKeyboardArrows={true}
					swipeable={true}
					centerMode={true}
					centerSlidePercentage={90}>
					{slideImages.map((image, index) => (
						<Link to={`/disney-plus-clone/${image.path}/${image.id}`} key={index}>
							<SlideContainer key={index}>
								<img src={image.img} alt={image.title} loading='lazy' />
								<OverlayImage overlay={image.overlay} />
							</SlideContainer>
						</Link>
					))}
				</StyledCarousel>
			</MotionContainer>
		</Wrapper>
	)
}

export default ImageSlider

const Wrapper = styled.section`
	margin-top: 10px;
`

const StyledCarousel = styled(Carousel)`
	.carousel .slide {
		padding: 20px 10px 50px;
	}

	.carousel .control-dots {
		position: absolute;
		bottom: 55px;
		right: 8vw;
		width: 100%;
		display: flex;
		justify-content: flex-end;
	}

	.carousel.carousel-slider .control-arrow {
		padding: 1.75%;

		&:hover {
			background: transparent;
		}
	}
`

const SlideContainer = styled(ItemContainer)`
	img {
		z-index: 0;
	}

	&:hover {
		box-shadow: 0px 25px 30px -10px rgba(0, 0, 0, 0.7);
		transform: scale(1.02);
	}
`

const OverlayImage = styled.div`
	content: '';
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background-image: ${({ overlay }) => `url(${overlay})`};
	background-size: contain;
	background-position: center;
	opacity: 0;
	transition: opacity 2.5s ease, transform 2s ease;

	.slide.selected & {
		opacity: 1;
		transform: translateX(-2%);
	}
`
