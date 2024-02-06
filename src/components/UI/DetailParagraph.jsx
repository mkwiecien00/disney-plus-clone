import styled from 'styled-components'

const DetailParagraph = ({ releaseYear, numberOfSeasons, genres }) => {
	return (
		<InfoParagraph>
			{releaseYear} {numberOfSeasons && (numberOfSeasons > 1 ? `• ${numberOfSeasons} Seasons` : '• 1 Season')} • {genres}
		</InfoParagraph>
	)
}

export default DetailParagraph

const InfoParagraph = styled.p`
	margin: 15px 0 25px;
	text-align: left;

	@media (min-width: 800px) {
		font-size: 16px;
	}

	@media (min-width: 1000px) {
		font-size: 18px;
	}
`
