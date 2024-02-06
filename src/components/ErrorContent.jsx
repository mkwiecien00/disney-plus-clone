import styled from 'styled-components'

import { MotionContainer } from '@components/ui/MotionContainer'
import ErrorImg from '@images/error-img.png'
import ErrorTextContainer from '@components/ui/ErrorTextContainer'

const ErrorContent = () => {
	return (
		<MotionContainer delay={0.3}>
			<Wrapper>
				<ErrorImage src={ErrorImg} alt='Error image' loading='lazy' />
				<ErrorTextContainer />
			</Wrapper>
		</MotionContainer>
	)
}

export default ErrorContent

const Wrapper = styled.section`
	position: relative;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	width: 100%;
	min-height: 100vh;
	padding: 60px;
`

const ErrorImage = styled.img`
	position: relative;
	top: 0;
	width: 100%;
	padding: 10px;

	@media (min-width: 500px) {
		width: 300px;
	}
`
