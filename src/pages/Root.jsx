import { Outlet } from 'react-router-dom'

import MainNavigation from '@components/layout/navigation/MainNavigation'
import Footer from '@components/layout/footer/Footer'

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
