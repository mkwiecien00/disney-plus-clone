import { MotionContainer } from '@components/ui/MotionContainer'
import AuthenticationForm from '@components/AuthenticationForm'
import useAuthentication from '@hooks/use-authentication'

const SignUpPage = () => {
	const { signUp, error } = useAuthentication()

	return (
		<MotionContainer>
			<AuthenticationForm mode='signup' onSignup={signUp} error={error} />
		</MotionContainer>
	)
}

export default SignUpPage
