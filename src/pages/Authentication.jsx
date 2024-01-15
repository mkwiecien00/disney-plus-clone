// import { Link } from 'react-router-dom'
import styled from 'styled-components'

import disneyAppLogo from '../assets/images/disney-logo-color.svg'
import googleIcon from '../assets/images/google-icon.svg'
import Container from '../components/UI/Container'

const AuthenticationPage = () => {
	return (
		<StyledContainer>
			<AuthenticationBox>
				<Logo src={disneyAppLogo} alt='Logo of Disney+ App' />
				<form>
					<FormHeader>Sign in</FormHeader>
					<InputBox>
						<InputField type='email' name='email' placeholder='Email' required />
						<InputField id='password' type='password' name='password' placeholder='Password' required />
					</InputBox>
					<SubmitButton type='submit'>Sign in</SubmitButton>
					<Divider>
						<DividerText>or</DividerText>
					</Divider>
					<SubmitButton type='submit' className='google-submission'>
						<SubmitLogo src={googleIcon} alt='Logo of Google' />
						Sign in with Google
					</SubmitButton>
				</form>
			</AuthenticationBox>
			<InfoText>
				New to Disney Plus? <span>Sign up now</span>
			</InfoText>
		</StyledContainer>
	)
}

export default AuthenticationPage

const StyledContainer = styled(Container)`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`

const AuthenticationBox = styled.div`
	display: flex;
	max-width: 350px;
	max-height: 450px;
	flex-direction: column;
	justify-content: center;
	padding: 30px;
	width: 70%;
	color: black;
	background-color: #ffffff;
	border-radius: 16px;
	box-shadow: 0px 25px 30px -10px rgba(0, 0, 0, 0.7);
`

const Logo = styled.img`
	height: 50px;
	margin: 10px 0;

	@media (min-width: 1000px) {
		height: 60px;
	}
`

const FormHeader = styled.h2`
	margin: 30px 0 20px;

	@media (min-width: 1000px) {
		font-size: 23px;
	}
`

const InputBox = styled.div`
	display: flex;
	flex-direction: column;
	gap: 20px;
	margin-bottom: 30px;
`

const InputField = styled.input`
	width: 100%;
	padding: 10px;
	border: 1px solid rgba(0, 0, 0, 0.4);
	border-radius: 5px;

	@media (min-width: 1000px) {
		font-size: 15px;
	}
`

const SubmitButton = styled.button`
	width: 100%;
	height: 35px;
	padding: 10px 20px;
	color: white;
	background-color: #0158e1;
	border: none;
	border-radius: 20px;
	cursor: pointer;
	transition: background-color 0.3s, color 0.3s;

	&:hover {
		background-color: #0582f0;
	}

	&.google-submission {
		color: white;
		background-color: rgba(0, 0, 0);
		border: 1px solid rgba(0, 0, 0, 0.4);
		display: flex;
		justify-content: center;
		align-items: center;
	}

	&.google-submission:hover {
		color: black;
		background-color: white;
	}

	@media (min-width: 1000px) {
		height: 40px;
		font-size: 15px;
	}
`

const Divider = styled.div`
	display: flex;
	justify-content: center;
	position: relative;
	margin: 20px 0;
	height: 1px;
	background-color: rgba(0, 0, 0, 0.2);
`

const DividerText = styled.p`
	position: absolute;
	top: -12px;
	margin: 0;
	padding: 0;
	display: inline-block;
	width: 20px;
	text-align: center;
	font-size: 10px;
	color: rgba(0, 0, 0, 0.2);
	background-color: white;

	@media (min-width: 1000px) {
		font-size: 12px;
	}
`

const SubmitLogo = styled.img`
	height: 20px;
	margin-right: 4px;
`

const InfoText = styled.p`
	color: rgba(255, 255, 255, 0.7);
	padding: 5px;
	font-size: 13px;

	span {
		color: white;
		margin-left: 5px;
		font-weight: bold;
	}

	@media (min-width: 1000px) {
		font-size: 15px;
	}
`
