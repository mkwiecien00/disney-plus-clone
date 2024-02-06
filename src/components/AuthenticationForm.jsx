import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

import styled from 'styled-components'

import disneyAppLogo from '@images/disney-logo-color.svg'
import Container from '@components/UI/Container'

const AuthenticationForm = ({ mode, onSignin, onSignup, error }) => {
	const isSignin = mode == 'signin'
	const minPasswordLength = 6
	const maxUserNameCharactersAmount = 10

	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [passwordError, setPasswordError] = useState('')
	const [userName, setUserName] = useState('')
	const [userNameError, setUserNameError] = useState('')

	useEffect(() => {
		const storedSignInEmail = localStorage.getItem('signInEmail')
		const storedSignUpEmail = localStorage.getItem('signUpEmail')
		const storedLastEnteredEmail = localStorage.getItem('lastEnteredEmail')

		if (!storedSignInEmail & !storedLastEnteredEmail & !storedSignUpEmail & isSignin) {
			setEmail('test@test.com')
			setPassword('test123')
		}

		if (storedSignInEmail && isSignin) {
			setEmail(storedSignInEmail)
		}

		if (storedSignUpEmail && !isSignin) {
			setEmail(storedSignUpEmail)
		}

		if (storedLastEnteredEmail && isSignin && storedSignInEmail) {
			setEmail(storedSignInEmail)
		}

		if (storedLastEnteredEmail && isSignin && !storedSignInEmail) {
			setEmail(storedLastEnteredEmail)

			if (storedLastEnteredEmail === 'test@test.com') {
				setPassword('test123')
			}
		}
	}, [isSignin])

	const emailChangeHandler = e => {
		setEmail(e.target.value)
	}

	const passwordChangeHandler = e => {
		setPassword(e.target.value)
	}

	const userNameChangeHandler = e => {
		setUserName(e.target.value)
	}

	const submitHandler = e => {
		e.preventDefault()

		if (isSignin) {
			onSignin({ email: email, password: password })
		} else {
			if (userName.trim() === '') {
				setUserNameError('Username cannot be empty.')
			} else if (userName.length > maxUserNameCharactersAmount) {
				setUserNameError('Username cannot be longer than 10 characters.')
			} else {
				setUserNameError('')
			}

			if (password.length < minPasswordLength) {
				setPasswordError('Password must be at least 6 characters long.')
			} else {
				setPasswordError('')
			}

			if (!userNameError && !passwordError) {
				onSignup({ email: email, password: password, userName: userName })
			}
		}
	}

	return (
		<StyledContainer>
			<AuthenticationBox>
				<Logo src={disneyAppLogo} alt='Logo of Disney+ App' />
				<form onSubmit={submitHandler}>
					<FormHeader>{isSignin ? 'Sign in' : 'Sign up'}</FormHeader>
					<InputBox>
						{!isSignin && (
							<div>
								<InputField type='name' name='username' placeholder='Username' value={userName} onChange={userNameChangeHandler} required />
								{userNameError ? <Error>{userNameError}</Error> : ''}
							</div>
						)}
						<InputField type='email' name='email' placeholder='Email' value={email} onChange={emailChangeHandler} required />
						<div>
							<InputField
								type='password'
								name='password'
								placeholder='Password'
								value={password}
								onChange={passwordChangeHandler}
								required
							/>
							{passwordError ? <Error>{passwordError}</Error> : ''}
							{error ? <Error>{error}</Error> : ''}
						</div>
					</InputBox>
					<SubmitButton type='submit'>{isSignin ? 'Sign in' : 'Sign up'}</SubmitButton>
				</form>
			</AuthenticationBox>
			<InfoText>
				{isSignin ? 'New to Disney Plus?' : 'Already on Disney Plus?'}
				<Link to={`${isSignin ? '/disney-plus-clone/auth/signup' : '/disney-plus-clone/auth/signin'}`}>
					<span>{isSignin ? 'Sign up now' : 'Sign in'}</span>
				</Link>
			</InfoText>
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
