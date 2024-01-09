import PropTypes from 'prop-types'
import styled from 'styled-components'
import { styled as styledMUI } from '@mui/system'

import SearchRoundedIcon from '@mui/icons-material/SearchRounded'
import InputBase from '@mui/material/InputBase'

const SearchInput = ({ onChange, query }) => {
	return (
		<SearchContainer>
			<SearchIcon />
			<Input
				id='searchInput'
				value={query}
				onChange={onChange}
				placeholder='Search for movies or series...'
				inputProps={{ 'aria-label': 'Search for movies or series' }}
				fullWidth
			/>
		</SearchContainer>
	)
}

SearchInput.propTypes = {
	onChange: PropTypes.func,
	query: PropTypes.string,
}

export default SearchInput

const SearchContainer = styled.div`
	display: flex;
	align-items: center;
	width: 85%;
	margin: 20px 0;
	padding: 10px;
	background-color: rgb(75, 78, 90);
	border-radius: 8px;

	@media (min-width: 700px) {
		width: 90%;
		margin: 40px 0;
		padding: 15px;
	}

	@media (min-width: 1200px) {
		width: 95%;
		margin: 60px 0;
		padding: 20px;
	}
`

const SearchIcon = styledMUI(SearchRoundedIcon)({
	marginRight: '10px',
	fontSize: '27px',
})

const Input = styledMUI(InputBase)({
	color: 'white',
	fontSize: '16px',

	'@media (min-width: 700px)': {
		fontSize: '18px',
	},

	'@media (min-width: 1200px)': {
		fontSize: '20px',
	},
})
