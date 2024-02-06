import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import Title from '@components/ui/Title'
import { Grid } from '@mui/material'
import ItemContainer from '@components/ui/ItemContainer'

const GridContainer = ({ movies, path, title }) => {
	return (
		<>
			{title && <Title>{title}</Title>}
			<Grid container spacing={2} columns={12} alignItems='center'>
				{movies.map((movie, index) => (
					<Grid item key={index} xs={12} sm={4} md={3} lg={2}>
						<Link to={`/disney-plus-clone/${path || movie.resourceType || movie.media_type}/${movie.id || movie.detailsId}`} key={index}>
							<ItemContainer key={index}>
								<img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path || movie.path}`} alt={movie.title || movie.name} />
							</ItemContainer>
						</Link>
					</Grid>
				))}
			</Grid>
		</>
	)
}

GridContainer.propTypes = {
	movies: PropTypes.array,
	title: PropTypes.string,
	path: PropTypes.string,
}

export default GridContainer
