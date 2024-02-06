import styled from 'styled-components'
import PulseLoader from 'react-spinners/PulseLoader'

const Loader = () => {
	return (
		<LoaderBlock>
			<PulseLoader color='rgba(255, 255, 255, 0.7)' margin={4} size={10} />
		</LoaderBlock>
	)
}
export default Loader

const LoaderBlock = styled.div`
	margin: 0 60px 50px;
`
