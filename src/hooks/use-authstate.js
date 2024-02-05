import { useEffect } from 'react'
import { redirect } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import { auth } from '@/firebase.js'
import { userActions } from '@store/slices/user-slice'
import { fetchWatchListData } from '@store/actions/watchlist-actions'

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
			}
		})
	}, [dispatch])
}

export default useAuthState
