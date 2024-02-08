import { Navigate, Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux'

export const ProtectedRoutes = () => {
	const user = useSelector(state => state.user.user)
	return user !== null ? <Outlet /> : <Navigate to='/disney-plus-clone/signin' replace />
}
