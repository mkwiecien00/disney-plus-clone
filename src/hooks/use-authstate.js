import { useEffect } from 'react'
import { redirect } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import { auth } from '@/firebase.js'
import { userActions } from '@store/user-slice.js'
import { fetchWatchListData } from '@store/watchlist-actions.js'

const useAuthState = () => {
	const dispatch = useDispatch()

	useEffect(() => {
		auth.onAuthStateChanged(authUser => {
			if (authUser) {
				dispatch(
					userActions.signInUser({
						uid: authUser.uid,
						email: authUser.email,
						userName: authUser.displayName,
					})
				),
					dispatch(fetchWatchListData({ user: authUser.uid }))

				redirect('/disney-plus-clone/')
			} else {
				console.log('User is not logged in.')
			}
		})
	}, [dispatch])
}

export default useAuthState
