import { useEffect } from 'react'

const useLocalStorageCleanup = () => {
	useEffect(() => {
		Object.keys(localStorage).forEach(key => {
			if (key.includes('searchQuery') || key.includes('selectedCategory')) {
				localStorage.removeItem(key)
			}
		})
	}, [])
}

export default useLocalStorageCleanup
