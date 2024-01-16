import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../firebase'
import { MotionContainer } from '../components/UI/MotionContainer'
import AuthenticationForm from '../components/AuthenticationForm'

const SignupPage = () => {
	const navigate = useNavigate()
	const [error, setError] = useState(null)
	let errorText

	const handleSubmission = async data => {
		try {
			await createUserWithEmailAndPassword(auth, data.email, data.password)
			await signInWithEmailAndPassword(auth, data.email, data.password)

			navigate('/disney-plus-clone/')

			localStorage.setItem('signInEmail', data.email)
			localStorage.removeItem('signUpEmail')
		} catch (error) {
			console.error(error)
			if (error.code === 'auth/email-already-in-use') {
				errorText = 'This email is already in use. Please sign in.'
				setError(errorText)

				localStorage.setItem('signInEmail', data.email)
			}
		}
	}

	return (
		<MotionContainer>
			<AuthenticationForm mode='signup' onSignup={handleSubmission} error={error} />
		</MotionContainer>
	)
}

export default SignupPage
