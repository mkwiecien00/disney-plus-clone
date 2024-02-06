import { useState, useEffect } from 'react'

const useCredentials = ({ mode, onSignin, onSignup }) => {
	const isSignin = mode == 'signin'
	const minPasswordLength = 6
	const maxUserNameCharactersAmount = 10

	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [passwordError, setPasswordError] = useState('')
	const [userName, setUserName] = useState('')
	const [userNameError, setUserNameError] = useState('')
	const [isFormSubmitted, setIsFormSubmitted] = useState(false)

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
			onSignin({ email, password })
		}

		if (!isSignin) {
			if (userName.trim() === '') {
				setUserNameError('Username cannot be empty.')
			} else if (userName.trim().length > maxUserNameCharactersAmount) {
				setUserNameError('Username cannot be longer than 10 characters.')
			} else {
				setUserNameError('')
			}

			if (password.length < minPasswordLength) {
				setPasswordError('Password must be at least 6 characters long.')
			} else {
				setPasswordError('')
			}
		}

		setIsFormSubmitted(true)
	}

	useEffect(() => {
		if (isFormSubmitted && !userNameError && !passwordError && !isSignin) {
			if (email && password && userName) {
				onSignup({ email, password, userName })
			}
		}
		setIsFormSubmitted(false)
	}, [userNameError, passwordError, email, password, userName, isSignin, isFormSubmitted])

	return {
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
	}
}

export default useCredentials
