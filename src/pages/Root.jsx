import { Outlet } from 'react-router-dom'

import MainNavigation from '../components/Layout/MainNavigation'
import Footer from '../components/Layout/Footer'

const RootLayout = () => {
	return (
		<>
			<MainNavigation />
			<main>
				<Outlet />
			</main>
			<Footer />
		</>
	)
}

export default RootLayout
