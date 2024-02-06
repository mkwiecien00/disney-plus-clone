import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { auth } from '@/firebase'

const useWatchList = () => {
	const watchList = useSelector(state => state.watchList)
	const [resourceArray, setResourceArray] = useState([])

	useEffect(() => {
		const filteredResources = watchList.resources.filter(resource => {
			return resource.userId === auth.currentUser.uid
		})

		setResourceArray(filteredResources)
	}, [watchList.resources])

	return resourceArray
}

export default useWatchList
