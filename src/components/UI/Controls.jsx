import styled from 'styled-components'
import { styled as styledMUI } from '@mui/system'

import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
import PlayArrowRoundedIcon from '@mui/icons-material/PlayArrowRounded'
import DoneRoundedIcon from '@mui/icons-material/DoneRounded'
import AddRoundedIcon from '@mui/icons-material/AddRounded'

const Controls = ({ onVideoHandle, isAddedToWatchList, onRemove, onAdd }) => {
	return (
		<StyledControls>
			<StyledButton className='play' variant='contained' startIcon={<PlayArrowRoundedIcon />}>
				PLAY
			</StyledButton>

			<StyledButton onClick={onVideoHandle} className='trailer' variant='outlined' startIcon={<PlayArrowRoundedIcon />}>
				TRAILER
			</StyledButton>

			{isAddedToWatchList && (
				<StyledIconButton className='remove' variant='outlined' onClick={onRemove}>
					<DoneRoundedIcon />
				</StyledIconButton>
			)}

			{!isAddedToWatchList && (
				<StyledIconButton className='add' variant='outlined' onClick={onAdd}>
					<AddRoundedIcon />
				</StyledIconButton>
			)}
		</StyledControls>
	)
}

export default Controls

const StyledControls = styled.div`
	display: flex;
	gap: 10px;
	margin-bottom: 10px;
`

const StyledButton = styledMUI(Button)({
	fontWeight: 'normal',
	fontSize: '12px',
	transition: 'color 0.3s, background-color 0.3s, border 0.3s',

	'@media (min-width: 800px)': {
		fontSize: '14px',
	},

	'@media (min-width: 1000px)': {
		fontSize: '16px',
	},

	'&.play': {
		color: '#000',
		backgroundColor: '#F9F6EE',
		width: '100px',

		'&:hover': {
			color: '#F9F6EE',
			backgroundColor: 'rgba(0, 0, 0, 0.5)',
		},
	},

	'&.trailer': {
		color: '#F9F6EE',
		backgroundColor: 'rgba(0, 0, 0, 0.6)',
		border: 'transparent',
		width: '150px',

		'&:hover': {
			backgroundColor: 'rgb(0, 0, 0)',
			border: 'rgb(0, 0, 0)',
		},
	},
})

const StyledIconButton = styledMUI(IconButton)({
	color: '#F9F6EE',
	backgroundColor: 'rgba(0, 0, 0, 0.6)',
	borderColor: '#F9F6EE',
	transition: 'background-color 0.3s',

	'&:hover': {
		backgroundColor: '#000',
	},
})
