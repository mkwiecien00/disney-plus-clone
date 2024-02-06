import { auth } from '@/firebase'
import { useDispatch, useSelector } from 'react-redux'
import { watchListActions } from '@store/slices/watchlist-slice'

const useDetail = ({ type, id, data }) => {
	const dispatch = useDispatch()
	const watchList = useSelector(state => state.watchList.resources)
	const isAddedToWatchList = watchList.find(item => item.detailsId === id && item.userId === auth.currentUser.uid)

	let resourceType = ''

	if (type === 'movie') {
		resourceType = 'movie'
	} else if (type === 'tv') {
		resourceType = 'series'
	}

	const addToWatchListHandler = () => {
		const userId = auth.currentUser.uid

		dispatch(
			watchListActions.addResourceToList({
				userId,
				id,
				type: resourceType,
				path: data.posterPath,
				title: data.title,
			})
		)
	}

	const removeFromWatchListHandler = () => {
		dispatch(watchListActions.removeResourceFromList(id))
	}

	return { isAddedToWatchList, addToWatchListHandler, removeFromWatchListHandler }
}

export default useDetail
