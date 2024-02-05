import { redirect } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { useIdleTimer } from 'react-idle-timer'

import { auth } from '@/firebase.js'
import { signOut } from 'firebase/auth'
import { userActions } from '@store/slices/user-slice'

const useIdle = () => {
	const dispatch = useDispatch()

	const onIdle = () => {
		dispatch(userActions.signOutUser())
		signOut(auth)
		redirect('/disney-plus-clone/')
	}

	useIdleTimer({
		onIdle,
		timeout: 5 * (60 * 1000),
	})
}

export default useIdle
