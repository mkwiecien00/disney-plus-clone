import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import Title from './Title'
import { Grid } from '@mui/material'
import ItemContainer from './ItemContainer'

const CollectionGrid = ({ movies, path, title }) => {
	return (
		<>
			<Title>{title}</Title>
			<Grid container spacing={2} columns={12} alignItems='center'>
				{movies.map((movie, index) => (
					<Grid item key={index} xs={12} sm={4} md={3} lg={2}>
						<Link to={`/disney-plus-clone/${path}/${movie.id}`} key={index}>
							<ItemContainer key={index}>
								<img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title || movie.name} />
							</ItemContainer>
						</Link>
					</Grid>
				))}
			</Grid>
		</>
	)
}

CollectionGrid.propTypes = {
	movies: PropTypes.array,
	title: PropTypes.string,
	path: PropTypes.string,
}

export default CollectionGrid
