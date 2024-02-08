import { useState, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { auth } from '@/firebase'
import { signOut } from 'firebase/auth'
import { userActions } from '@store/slices/user-slice'

const useNavigation = () => {
	const navigate = useNavigate()
	const user = useSelector(state => state.user.user)
	const dispatch = useDispatch()

	const signoutHandler = () => {
		dispatch(userActions.signOutUser())
		signOut(auth)
		navigate('/disney-plus-clone/')
	}

	const location = useLocation()

	useEffect(() => {
		if (!location.pathname.includes('/disney-plus-clone/movie/') && !location.pathname.includes('/disney-plus-clone/series/')) {
			localStorage.removeItem('searchQuery')
		}

		if (!location.pathname.includes('/disney-plus-clone/movie')) {
			Object.keys(localStorage).forEach(key => {
				if (key.includes('selectedCategory_movie')) {
					localStorage.removeItem(key)
				}
			})
		}

		if (!location.pathname.includes('/disney-plus-clone/series')) {
			Object.keys(localStorage).forEach(key => {
				if (key.includes('selectedCategory_series')) {
					localStorage.removeItem(key)
				}
			})
		}
	}, [location.pathname])

	const [anchorEl, setAnchorEl] = useState(null)

	const handleOpenNavMenu = event => {
		setAnchorEl(event.currentTarget)
	}

	const handleCloseNavMenu = () => {
		setAnchorEl(null)
	}

	return {
		anchorEl,
		setAnchorEl,
		handleCloseNavMenu,
		handleOpenNavMenu,
		user,
		signoutHandler,
	}
}

export default useNavigation
