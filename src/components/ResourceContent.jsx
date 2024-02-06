import React from 'react'
import PropTypes from 'prop-types'
import GridContainer from '@components/ui/GridContainer'
import { OpacityMotionContainer } from '@components/ui/MotionContainer'
import Loader from '@components/ui/Loader'
import ErrorBlock from '@components/ui/ErrorBlock'

const ResourceContent = ({ isPending, isError, isSuccess, data, resourceList, type }) => (
	<>
		{isPending && <Loader />}
		{isError && <ErrorBlock message='Something went wrong, please try again later.' />}
		{isSuccess && !data.length && <p>No data available for the selected category.</p>}
		{isSuccess && data.length > 0 && (
			<OpacityMotionContainer>
				<GridContainer movies={resourceList} path={type} />
			</OpacityMotionContainer>
		)}
	</>
)

ResourceContent.propTypes = {
	isPending: PropTypes.bool,
	isError: PropTypes.bool,
	isSuccess: PropTypes.bool,
	data: PropTypes.array,
	resourceList: PropTypes.array,
	type: PropTypes.string,
}

export default ResourceContent
