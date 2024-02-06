import styled from 'styled-components'
import { OpacityMotionContainer } from '@components/ui/MotionContainer'
import ReactPlayer from 'react-player'

const VideoPlayer = ({ onClick, videoUrl }) => {
	return (
		<VideoWrapper onClick={onClick}>
			<OpacityMotionContainer>
				<>
					{videoUrl && <ReactPlayer width='70vw' height='50vh' url={videoUrl} controls={true} />}
					{!videoUrl && <p>Unfortunately no trailer has been provided for this resource.</p>}
				</>
			</OpacityMotionContainer>
		</VideoWrapper>
	)
}

export default VideoPlayer

const VideoWrapper = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background-color: rgba(0, 0, 0, 0.8);
	display: flex;
	justify-content: center;
	align-items: center;
	z-index: 1;
`
