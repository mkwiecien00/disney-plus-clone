import styled from 'styled-components'

const Title = styled.h2`
	text-align: left;
	font-weight: bold;
	font-size: 18px;
	margin-bottom: 30px;

	@media (min-width: 600px) {
		font-size: 20px;
	}

	@media (min-width: 800px) {
		font-size: 25px;
	}
`

export default Title
