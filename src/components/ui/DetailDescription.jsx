import styled from 'styled-components'

const DetailDescription = ({ overview }) => {
	return <DescriptionParagraph>{overview}</DescriptionParagraph>
}

export default DetailDescription

const DescriptionParagraph = styled.p`
	margin: 0;
	line-height: 2;
	text-align: left;

	@media (min-width: 800px) {
		font-size: 16px;
	}

	@media (min-width: 1000px) {
		font-size: 18px;
		margin-right: 200px;
	}
`
