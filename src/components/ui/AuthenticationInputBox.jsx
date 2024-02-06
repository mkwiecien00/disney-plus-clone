import styled from 'styled-components'

const AuthenticationInputBox = ({
	isSignin,
	userName,
	userNameChangeHandler,
	userNameError,
	email,
	emailChangeHandler,
	password,
	passwordChangeHandler,
	passwordError,
	error,
}) => {
	return (
		<InputBox>
			{!isSignin && (
				<div>
					<InputField type='name' name='username' placeholder='Username' value={userName} onChange={userNameChangeHandler} required />
					{userNameError ? <Error>{userNameError}</Error> : ''}
				</div>
			)}
			<InputField type='email' name='email' placeholder='Email' value={email} onChange={emailChangeHandler} required />
			<div>
				<InputField type='password' name='password' placeholder='Password' value={password} onChange={passwordChangeHandler} required />
				{passwordError ? <Error>{passwordError}</Error> : ''}
				{error ? <Error>{error}</Error> : ''}
			</div>
		</InputBox>
	)
}

export default AuthenticationInputBox

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
