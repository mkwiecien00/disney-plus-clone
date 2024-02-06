import { Link } from 'react-router-dom'
import { Box, IconButton, Menu, MenuItem, Button, Typography, styled as styledMUI } from '@mui/material'
import { motion, AnimatePresence } from 'framer-motion'
import { Divide as Hamburger } from 'hamburger-react'
import { menuItems } from '@utils/navigation/menu-items'

const MobileMenuContent = ({ handleOpenNavMenu, handleCloseNavMenu, anchorEl, setAnchorEl }) => {
	return (
		<MobileMenuBox sx={{ display: { xs: 'flex', md: 'none' } }}>
			<MobileMenuBoxIcon
				aria-label='account of current user'
				aria-controls='menu-appbar'
				aria-haspopup='true'
				onClick={handleOpenNavMenu}
				color='inherit'>
				<Hamburger toggled={anchorEl} toggle={setAnchorEl} size={20} rounded />
			</MobileMenuBoxIcon>

			<MobileMenu
				id='menu-appbar'
				className={anchorEl ?? 'MuiModal-hidden css-v557qn-MuiModal-root-MuiPopover-root-MuiMenu-root css-1eaqs5j'}
				anchorEl={anchorEl}
				anchorOrigin={{
					vertical: 'bottom',
					horizontal: 'left',
				}}
				keepMounted
				transformOrigin={{
					vertical: 'top',
					horizontal: 'left',
				}}
				open={Boolean(anchorEl)}
				onClose={handleCloseNavMenu}
				sx={{
					display: { xs: 'block', md: 'none' },
				}}>
				<AnimatePresence>
					{anchorEl && (
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
	)
}

export default MobileMenuContent

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
