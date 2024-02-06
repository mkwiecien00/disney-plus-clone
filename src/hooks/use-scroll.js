import { useEffect } from 'react'

const useScroll = () => {
	useEffect(() => {
		const scrollToTop = () => {
			window.scrollTo({
				top: 0,
				behavior: 'smooth',
			})
		}

		scrollToTop()
	}, [])
}

export default useScroll
