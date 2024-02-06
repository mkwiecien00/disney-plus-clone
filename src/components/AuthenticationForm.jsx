import PropTypes from 'prop-types'

import styled from 'styled-components'

import disneyAppLogo from '@images/disney-logo-color.svg'
import Container from '@components/ui/Container'
import useCredentials from '@hooks/use-credentials'
import AuthenticationInfo from '@components/ui/AuthenticationInfo'
import AuthenticationInputBox from '@components/ui/AuthenticationInputBox'

const AuthenticationForm = ({ mode, onSignin, onSignup, error }) => {
	const {
		email,
		password,
		passwordError,
		userName,
		userNameError,
		isSignin,
		emailChangeHandler,
		passwordChangeHandler,
		userNameChangeHandler,
		submitHandler,
	} = useCredentials({ mode, onSignin, onSignup })

	return (
		<StyledContainer>
			<AuthenticationBox>
				<Logo src={disneyAppLogo} alt='Logo of Disney+ App' />
				<form onSubmit={submitHandler}>
					<FormHeader>{isSignin ? 'Sign in' : 'Sign up'}</FormHeader>
					<AuthenticationInputBox
						isSignin={isSignin}
						userName={userName}
						userNameChangeHandler={userNameChangeHandler}
						userNameError={userNameError}
						email={email}
						emailChangeHandler={emailChangeHandler}
						password={password}
						passwordChangeHandler={passwordChangeHandler}
						passwordError={passwordError}
						error={error}
					/>
					<SubmitButton type='submit'>{isSignin ? 'Sign in' : 'Sign up'}</SubmitButton>
				</form>
			</AuthenticationBox>
			<AuthenticationInfo isSignin={isSignin} />
		</StyledContainer>
	)
}

AuthenticationForm.propTypes = {
	mode: PropTypes.string,
	onSignin: PropTypes.func,
	onSignup: PropTypes.func,
	error: PropTypes.string,
}

export default AuthenticationForm

const StyledContainer = styled(Container)`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`

const AuthenticationBox = styled.div`
	display: flex;
	max-width: 350px;
	max-height: 500px;
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

const Error = styled.p`
	padding: 0;
	margin: 0;
	font-size: 11px;
	color: #0158e1;
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

	@media (min-width: 1000px) {
		height: 40px;
		font-size: 15px;
	}
`
