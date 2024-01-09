import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { styled as styledMUI } from '@mui/system'

import AppBar from '@mui/material/AppBar'
import Container from '@mui/material/Container'
import Toolbar from '@mui/material/Toolbar'
import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Avatar from '@mui/material/Avatar'

import { Divide as Hamburger } from 'hamburger-react'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined'
import SearchIcon from '@mui/icons-material/Search'
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd'

import LocalMoviesOutlinedIcon from '@mui/icons-material/LocalMoviesOutlined'
import MovieFilterOutlinedIcon from '@mui/icons-material/MovieFilterOutlined'
import LogoutIcon from '@mui/icons-material/Logout'

import disneyAppLogo from '../../assets/images/disney-logo.svg'

const menuItems = [
	{ text: 'Home', path: '/disney-plus-clone/', icon: <HomeOutlinedIcon /> },
	{ text: 'Search', path: '/disney-plus-clone/search', icon: <SearchIcon /> },
	{ text: 'My List', path: '/disney-plus-clone/watchlist', icon: <PlaylistAddIcon /> },
	{ text: 'Movies', path: '/disney-plus-clone/movies', icon: <LocalMoviesOutlinedIcon /> },
	{ text: 'Series', path: '/disney-plus-clone/series', icon: <MovieFilterOutlinedIcon /> },
]

const MainNavigation = () => {
	const location = useLocation()

	useEffect(() => {
		if (!location.pathname.includes('/disney-plus-clone/movie/') && !location.pathname.includes('/disney-plus-clone/series/')) {
			localStorage.removeItem('searchQuery')
		}
	}, [location.pathname])

	const [anchorElNav, setAnchorElNav] = useState(null)

	const handleOpenNavMenu = event => {
		setAnchorElNav(event.currentTarget)
	}

	const handleCloseNavMenu = () => {
		setAnchorElNav(null)
	}

	return (
		<StyledAppBar position='fixed'>
			<StyledContainer>
				<Toolbar disableGutters>
					<Link to='/disney-plus-clone/'>
						<LogoBox component='img' src={disneyAppLogo} alt='Logo of Disney+ App' />
					</Link>

					<MobileMenuBox
						sx={{
							display: { xs: 'flex', md: 'none' },
						}}>
						<MobileMenuBoxIcon
							aria-label='account of current user'
							aria-controls='menu-appbar'
							aria-haspopup='true'
							onClick={handleOpenNavMenu}
							color='inherit'>
							<Hamburger toggled={anchorElNav} size={20} rounded />
						</MobileMenuBoxIcon>

						<MobileMenu
							id='menu-appbar'
							anchorEl={anchorElNav}
							anchorOrigin={{
								vertical: 'bottom',
								horizontal: 'left',
							}}
							keepMounted
							transformOrigin={{
								vertical: 'top',
								horizontal: 'left',
							}}
							open={Boolean(anchorElNav)}
							onClose={handleCloseNavMenu}
							sx={{
								display: { xs: 'block', md: 'none' },
							}}>
							<AnimatePresence>
								{anchorElNav && (
									<>
										{menuItems.map((item, index) => (
											<MenuItem
												key={index}
												component={motion.li}
												initial={{ opacity: 0, x: -5 }}
												animate={{ opacity: 1, x: 0 }}
												exit={{ opacity: 0, x: -5 }}
												transition={{ duration: 0.3, delay: (index + 1.5) * 0.15 }}
												onClick={() => {
													handleCloseNavMenu()
													window.scrollTo({ top: 0, behavior: 'smooth' })
												}}>
												<MobileMenuLink component={Link} to={item.path}>
													{item.icon}
													<MobileMenuLinkText variant='subtitle'>{item.text}</MobileMenuLinkText>
												</MobileMenuLink>
											</MenuItem>
										))}
									</>
								)}
							</AnimatePresence>
						</MobileMenu>
					</MobileMenuBox>

					<DesktopMenuBox sx={{ display: { xs: 'none', md: 'flex' } }}>
						{menuItems.map((item, index) => (
							<DesktopMenuLink key={index} component={Link} to={item.path} onClick={handleCloseNavMenu}>
								{item.icon}
								<DesktopMenuLinkText variant='subtitle'>
									<span>{item.text}</span>
								</DesktopMenuLinkText>
							</DesktopMenuLink>
						))}
					</DesktopMenuBox>

					<ProfileIconBox>
						<Avatar alt='Profile Icon' src='https://i.imgur.com/tfnVE8n.png' />
						<LogoutLink to='/'>
							<LogoutIcon />
						</LogoutLink>
					</ProfileIconBox>
				</Toolbar>
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

const LogoBox = styledMUI(Box)({
	display: 'flex',
	marginRight: '15px',
	height: '50px',
})

const MobileMenuBox = styledMUI(Box)({
	flexGrow: 1,
	justifyContent: 'flex-end',
})

const MobileMenuBoxIcon = styledMUI(IconButton)({
	padding: '0',
})

const MobileMenu = styledMUI(Menu)({
	'& .MuiPaper-root': {
		maxHeight: '450px',
		maxWidth: '250px',
		backgroundColor: '#030408',
		borderRadius: '20px',
		filter: 'drop-shadow(0px 2px 8px rgba(42,49,65,0.32))',
	},
})

const MobileMenuLink = styledMUI(Button)({
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
	margin: '10px',
	color: 'white',
	textTransform: 'uppercase',
	'&:hover': {
		backgroundColor: 'transparent',
	},
})

const MobileMenuLinkText = styledMUI(Typography)({
	marginLeft: '10px',
	fontSize: '14px',
	letterSpacing: '3px',
})

const DesktopMenuBox = styledMUI(Box)({
	flexGrow: 1,
})

const DesktopMenuLink = styledMUI(Button)({
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
	margin: '8px 0 8px 5px',
	color: 'white',
	textTransform: 'uppercase',

	'&:hover span::after': {
		width: '100%',
	},
})

const DesktopMenuLinkText = styledMUI(Typography)({
	marginLeft: '10px',
	fontSize: '14px',
	letterSpacing: '2px',
	fontWeight: 'normal',

	'& > span': {
		position: 'relative',
	},
	'& > span::after': {
		content: "''",
		position: 'absolute',
		width: '0%',
		height: '2px',
		bottom: '-8px',
		left: '0',
		backgroundColor: 'white',
		transition: 'width 0.3s ease-in-out',
	},
})

const ProfileIconBox = styledMUI(Box)({
	display: 'flex',
	flexDirection: 'row',
	alignItems: 'center',
	justifyContent: 'center',
	flexGrow: 0,
})

const LogoutLink = styledMUI(Link)({
	padding: '12px',
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
})
