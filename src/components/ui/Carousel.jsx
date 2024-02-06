import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import styled from 'styled-components'

const Carousel = ({ children, additionalSettings, className }) => {
	const combinedSettings = {
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: true,
		autoplaySpeed: 5000,
		centerMode: true,
		centerPadding: '5%',
		swipeToSlide: true,
		focusOnSelect: true,
		...additionalSettings,
	}

	return (
		<StyledSlider {...combinedSettings} className={className}>
			{children}
		</StyledSlider>
	)
}

export default Carousel

const StyledSlider = styled(Slider)`
	.slick-slide {
		padding: 0 10px;
		position: relative;
	}

	button {
		z-index: 1;
		top: 40%;
		height: 100%;
		width: 5%;
		margin: 5px;

		&.slick-next {
			right: 0;
		}

		&.slick-prev {
			left: 0;
		}

		&.slick-prev::before,
		&.slick-next::before {
			font-size: 20px;
		}
	}

	.slick-dots {
		position: absolute;
		bottom: 60px;
		right: 12%;
		width: auto;

		li button::before {
			font-size: 8px;
			color: black;
		}

		li.slick-active button::before {
			color: white;
		}
	}

	@media (min-width: 700px) {
		.slick-dots li button::before {
			font-size: 10px;
		}

		button.slick-prev::before,
		button.slick-next::before {
			font-size: 25px;
		}
	}

	@media (min-width: 900px) {
		.slick-dots {
			bottom: 65px;
			right: 10%;
		}

		button.slick-prev::before,
		button.slick-next::before {
			font-size: 30px;
		}
	}

	@media (min-width: 1200px) {
		button {
			top: 45%;

			&.slick-prev::before,
			&.slick-next::before {
				font-size: 40px;
			}
		}

		.slick-dots {
			right: 8%;

			li button::before {
				font-size: 14px;
			}
		}
	}
`
