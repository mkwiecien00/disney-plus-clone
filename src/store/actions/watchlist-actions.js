import { watchListActions } from '@store/slices/watchlist-slice'

export const fetchWatchListData = ({ user }) => {
	return async dispatch => {
		const fetchWatchListData = async () => {
			const response = await fetch(`https://disney-plus-mk-default-rtdb.firebaseio.com//${user}.json`)
			if (!response.ok) {
				throw new Error('Could not fetch watchlist data.')
			}

			const data = await response.json()

			return data
		}

		try {
			const watchListData = await fetchWatchListData()

			const resources = watchListData && watchListData.resources ? watchListData.resources : []

			dispatch(
				watchListActions.replaceWatchList({
					resources,
				})
			)
		} catch (error) {
			console.error('An error occurred while fetching watchlist data. Please try again later.')
		}
	}
}

export const sendWatchListData =
	({ watchlist, user }) =>
	async () => {
		const sendData = async () => {
			const response = await fetch(`https://disney-plus-mk-default-rtdb.firebaseio.com//${user}.json`, {
				method: 'PUT',
				body: JSON.stringify({ resources: watchlist.resources }),
			})

			if (!response.ok) {
				throw new Error('Sending watchlist data failed.')
			}
		}

		try {
			await sendData()
		} catch (error) {
			console.error('An error occurred while sending watchlist data. Please try again later.')
		}
	}
