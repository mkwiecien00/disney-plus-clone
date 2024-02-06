import MainNavigation from '@components/layout/navigation/MainNavigation'
import ErrorContent from '@components/ErrorContent'

const ErrorPage = () => {
	return (
		<>
			<MainNavigation />
			<main>
				<ErrorContent />
			</main>
		</>
	)
}

export default ErrorPage
