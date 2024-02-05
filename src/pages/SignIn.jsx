import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '@/firebase'
import { MotionContainer } from '@components/UI/MotionContainer'
import AuthenticationForm from '@components/AuthenticationForm'

const SignInPage = () => {
	const navigate = useNavigate()
	const [error, setError] = useState(null)
	let errorText

	const handleSubmission = async data => {
		try {
			await signInWithEmailAndPassword(auth, data.email, data.password)
			navigate('/disney-plus-clone/')

			localStorage.setItem('lastEnteredEmail', data.email)
			localStorage.removeItem('signInEmail')
			localStorage.removeItem('signUpEmail')
		} catch (error) {
			console.error(error)
			if (error.code === 'auth/invalid-credential') {
				errorText = 'Invalid password or email. Please try again.'
				setError(errorText)

				localStorage.setItem('signUpEmail', data.email)
			}
		}
	}

	return (
		<MotionContainer>
			<AuthenticationForm mode='signin' onSignin={handleSubmission} error={error} />
		</MotionContainer>
	)
}

export default SignInPage
