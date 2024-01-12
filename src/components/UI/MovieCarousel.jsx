import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

import styled from 'styled-components'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'

import Title from './Title'
import Loader from './Loader'
import ErrorBlock from './ErrorBlock'
import { MotionContainer } from './MotionContainer'
import ItemContainer from '../UI/ItemContainer'

const MovieCarousel = ({ data, isPending, isError }) => {
	const [centerSlidePercentage, setCenterSlidePercentage] = useState(40)

	useEffect(() => {
		const handleResize = () => {
			const width = window.innerWidth
			let percentage

			switch (true) {
				case width <= 400:
					percentage = 40
					break
				case width <= 600:
					percentage = 35
					break
				case width <= 900:
					percentage = 25
					break
				case width <= 1100:
					percentage = 20
					break
				default:
					percentage = 15
					break
			}

			setCenterSlidePercentage(percentage)
		}

		handleResize()
		window.addEventListener('resize', handleResize)

		return () => {
			window.removeEventListener('resize', handleResize)
		}
	}, [])

	return (
		<Wrapper>
			<MotionContainer delay={1}>
				<>
					{isPending && <Loader />}
					{isError && <ErrorBlock message='Something went wrong, please try again later.' />}
					{data &&
						data.map(category => {
							return (
								<div key={category.category}>
									<StyledTitle>{category.title}</StyledTitle>
									{category.data ? (
										<StyledCarousel
											key={category.category}
											showArrows={true}
											showStatus={false}
											showIndicators={false}
											showThumbs={false}
											useKeyboardArrows={true}
											swipeable={true}
											centerMode={true}
											centerSlidePercentage={centerSlidePercentage}>
											{category.data.results.map((item, index) => (
												<Link to={`/disney-plus-clone/${category.type}/${item.id}`} key={index}>
													<DataContainer key={index}>
														<img src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`} alt={item.title || item.name} />
													</DataContainer>
												</Link>
											))}
										</StyledCarousel>
									) : (
										<ErrorBlock message={`Failed to fetch ${category.title} data, please try again later.`} />
									)}
								</div>
							)
						})}
				</>
			</MotionContainer>
		</Wrapper>
	)
}

MovieCarousel.propTypes = {
	data: PropTypes.array,
	isPending: PropTypes.bool,
	isError: PropTypes.bool,
}

export default MovieCarousel

const Wrapper = styled.section`
	margin: 60px 0 10px;
`

const StyledTitle = styled(Title)`
	margin: 0 60px 10px;
`

const StyledCarousel = styled(Carousel)`
	.carousel .slide {
		padding: 10px 10px 40px;
	}

	.carousel.carousel-slider .control-arrow {
		padding: 2%;

		&:hover {
			background: transparent;
		}
	}
`

const DataContainer = styled(ItemContainer)`
	&:hover {
		box-shadow: 0px 25px 30px -10px rgba(0, 0, 0, 0.7);
		transform: scale(1.05);
	}
`
