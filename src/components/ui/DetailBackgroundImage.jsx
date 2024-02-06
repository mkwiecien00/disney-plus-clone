import styled from 'styled-components'

const DetailBackgroundImage = ({ backdropUrl, title }) => {
	return (
		<Background>
			<img src={backdropUrl} alt={`Background image of ${title}`} />
		</Background>
	)
}

export default DetailBackgroundImage

const Background = styled.div`
	position: fixed;
	right: 0;
	top: 0;
	width: 100%;
	height: 100%;
	opacity: 0.5;
	z-index: -1;

	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
`
