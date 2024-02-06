import { MotionContainer } from '@components/ui/MotionContainer'
import AuthenticationForm from '@components/AuthenticationForm'
import useAuthentication from '@hooks/use-authentication'

const SignInPage = () => {
	const { signIn, error } = useAuthentication()

	return (
		<MotionContainer>
			<AuthenticationForm mode='signin' onSignin={signIn} error={error} />
		</MotionContainer>
	)
}

export default SignInPage
