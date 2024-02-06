import { Link } from 'react-router-dom'
import { Box, Button, Typography, styled as styledMUI } from '@mui/material'
import { menuItems } from '@utils/navigation/menu-items'

const DesktopMenuContent = ({ handleCloseNavMenu }) => {
	return (
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
	)
}

export default DesktopMenuContent

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
