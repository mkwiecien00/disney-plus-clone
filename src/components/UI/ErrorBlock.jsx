import PropTypes from 'prop-types'
import styled from 'styled-components'

const ErrorBlock = ({ message }) => {
	return <ErrorParagraph>{message}</ErrorParagraph>
}

ErrorBlock.propTypes = {
	message: PropTypes.string,
}

export default ErrorBlock

const ErrorParagraph = styled.p`
	margin: 0 60px 50px;
`
