import { Link } from 'react-router-dom'
import { Box, Typography, Avatar, Button, styled as styledMUI } from '@mui/material'
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded'

function ProfileContent({ user, signoutHandler }) {
	return (
		<ProfileIconBox>
			<UserName sx={{ display: { xs: 'none', md: 'flex' } }}>{user.userName}</UserName>
			{user.userName && <Avatar alt='Profile Icon'>{user.userName.trim().charAt(0).toUpperCase()}</Avatar>}
			<LogoutLink to='/disney-plus-clone/signin'>
				<StyledButton variant='outlined' className='signout' onClick={signoutHandler}>
					<LogoutRoundedIcon />
				</StyledButton>
			</LogoutLink>
		</ProfileIconBox>
	)
}

export default ProfileContent

const ProfileIconBox = styledMUI(Box)({
	display: 'flex',
	flexDirection: 'row',
	alignItems: 'center',
	justifyContent: 'center',
	flexGrow: 0,
})

const UserName = styledMUI(Typography)({
	padding: '12px',
})

const LogoutLink = styledMUI(Link)({
	padding: '12px',
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
})

const StyledButton = styledMUI(Button)({
	fontWeight: 'normal',
	fontSize: '14px',
	color: 'white',
	backgroundColor: 'black',
	border: '1px solid white',
	transition: 'color 0.3s, background-color 0.3s, border 0.3s',

	'&.signout': {
		minWidth: 'auto',
		width: '40px',
		height: '40px',
		padding: '0',
		borderRadius: '50%',
	},

	'&:hover': {
		color: 'black',
		backgroundColor: 'white',
		border: 'white',
	},

	'@media (min-width: 1000px)': {
		fontSize: '16px',
	},
})
