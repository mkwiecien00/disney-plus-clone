import { Link } from 'react-router-dom'
import useNavigation from '@hooks/use-navigation'
import { AppBar, Container, Toolbar, Box, Button, styled as styledMUI } from '@mui/material'

import disneyAppLogo from '@images/disney-logo.svg'
import MobileMenuContent from '@components/layout/navigation/MobileMenuContent'
import DesktopMenuContent from '@components/layout/navigation/DesktopMenuContent'
import ProfileContent from '@components/layout/navigation/ProfileContent'

const MainNavigation = () => {
	const { anchorEl, setAnchorEl, handleCloseNavMenu, handleOpenNavMenu, user, signoutHandler } = useNavigation()

	return (
		<StyledAppBar position='fixed'>
			<StyledContainer>
				<StyledToolbar disableGutters>
					<Link to='/disney-plus-clone/'>
						<LogoBox component='img' src={disneyAppLogo} alt='Logo of Disney+ App' />
					</Link>

					{user === null && (
						<Link to='/disney-plus-clone/signin'>
							<StyledButton variant='outlined'>GET STARTED</StyledButton>
						</Link>
					)}
					{user !== null && (
						<>
							<MobileMenuContent
								handleOpenNavMenu={handleOpenNavMenu}
								handleCloseNavMenu={handleCloseNavMenu}
								anchorEl={anchorEl}
								setAnchorEl={setAnchorEl}
							/>
							<DesktopMenuContent handleCloseNavMenu={handleCloseNavMenu} />
							<ProfileContent user={user} signoutHandler={signoutHandler} />
						</>
					)}
				</StyledToolbar>
			</StyledContainer>
		</StyledAppBar>
	)
}

export default MainNavigation

const StyledAppBar = styledMUI(AppBar)({
	backgroundColor: '#030408',
})

const StyledContainer = styledMUI(Container)({
	minWidth: '100%',
})

const StyledToolbar = styledMUI(Toolbar)({
	display: 'flex',
	justifyContent: 'space-between;',
})

const LogoBox = styledMUI(Box)({
	display: 'flex',
	marginRight: '15px',
	height: '50px',
})

const StyledButton = styledMUI(Button)({
	width: '150px',
	fontWeight: 'normal',
	fontSize: '14px',
	color: 'white',
	backgroundColor: 'black',
	borderRadius: '8px',
	border: '1px solid white',
	transition: 'color 0.3s, background-color 0.3s, border 0.3s',

	'&:hover': {
		color: 'black',
		backgroundColor: 'white',
		border: 'white',
	},

	'@media (min-width: 1000px)': {
		fontSize: '16px',
	},
})
