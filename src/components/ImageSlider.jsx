import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Carousel from '@components/ui/Carousel'

import { MotionContainer } from '@components/ui/MotionContainer'
import ItemContainer from '@components/ui/ItemContainer'
import { slideImages } from '@utils/carousel/slide-images'

const ImageSlider = () => {
	const sliderSettings = {
		autoplay: true,
		slidesToShow: 1,
		dots: true,
	}

	return (
		<Wrapper>
			<MotionContainer>
				<StyledCarousel additionalSettings={sliderSettings}>
					{slideImages.map((image, index) => (
						<Link to={`/disney-plus-clone/${image.path}/${image.id}`} key={index}>
							<StyledItemContainer key={index}>
								<img src={image.img} alt={image.title} loading='lazy' />
								<OverlayImage overlay={image.overlay} />
							</StyledItemContainer>
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
	.slick-track {
		padding: 20px 0 50px;
	}
`

const StyledItemContainer = styled(ItemContainer)`
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

	.slick-center & {
		opacity: 1;
		transform: translateX(-2%);
	}
`
