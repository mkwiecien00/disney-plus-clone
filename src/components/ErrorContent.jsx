import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { styled as styledMUI } from '@mui/system'

import { MotionContainer } from '@components/UI/MotionContainer'
import ErrorImg from '@images/error-img.png'
import Button from '@mui/material/Button'

const ErrorContent = () => {
	return (
		<MotionContainer delay={0.3}>
			<Wrapper>
				<ErrorImage src={ErrorImg} alt='Error image' loading='lazy' />
				<ErrorTextContainer>
					<h1>OOPS! PAGE NOT FOUND.</h1>
					<p>You must have picked the wrong door because we have not been able to lay our eyes on the page you are searching for.</p>
					<Link to='/disney-plus-clone/'>
						<StyledButton variant='contained'>BACK TO HOME</StyledButton>
					</Link>
				</ErrorTextContainer>
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

const ErrorTextContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	text-align: center;
	font-size: 12px;

	h1 {
		font-size: 20px;
		letter-spacing: 1px;
		margin-bottom: 0;
	}

	p {
		margin-bottom: 30px;
		width: 60%;
	}

	@media (min-width: 500px) {
		font-size: 14px;

		h1 {
			font-size: 22px;
		}
	}

	@media (min-width: 700px) {
		font-size: 16px;

		h1 {
			font-size: 24px;
		}
	}

	@media (min-width: 1000px) {
		font-size: 18px;

		h1 {
			font-size: 26px;
		}
	}
`

const StyledButton = styledMUI(Button)({
	backgroundColor: '#0158e1',
	fontSize: '10px',

	'@media (min-width: 600px)': {
		fontSize: '12px',
	},

	'@media (min-width: 900px)': {
		fontSize: '14px',
	},

	'@media (min-width: 1200px)': {
		fontSize: '16px',
	},

	'&:hover': {
		backgroundColor: '#0582f0',
	},
})
