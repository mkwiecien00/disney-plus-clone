import { useState } from 'react'

const useVideo = () => {
	const [videoIsVisible, setVideoIsVisible] = useState(false)

	const videoHandler = () => {
		setVideoIsVisible(prevState => !prevState)
	}

	const closeVideoHandler = () => {
		setVideoIsVisible(false)
	}

	return { videoIsVisible, videoHandler, closeVideoHandler }
}

export default useVideo
