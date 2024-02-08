import { Link } from 'react-router-dom'
import styled from 'styled-components'

const AuthenticationInfo = ({ isSignin }) => {
	return (
		<InfoText>
			{isSignin ? 'New to Disney Plus?' : 'Already on Disney Plus?'}
			<Link to={`${isSignin ? '/disney-plus-clone/signup' : '/disney-plus-clone/signin'}`}>
				<span>{isSignin ? 'Sign up now' : 'Sign in'}</span>
			</Link>
		</InfoText>
	)
}

export default AuthenticationInfo

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
