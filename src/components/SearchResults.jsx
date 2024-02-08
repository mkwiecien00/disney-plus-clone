import { OpacityMotionContainer } from '@components/ui/MotionContainer'
import GridContainer from '@components/ui/GridContainer'
import Title from '@components/ui/Title'
import Loader from '@components/ui/Loader'
import ErrorBlock from '@components/ui/ErrorBlock'

const SearchResults = ({ query, data, isLoading, isError }) => {
	return (
		<OpacityMotionContainer>
			<>
				<Title>Search results for {query}</Title>
				{isLoading && <Loader />}
				{isError && <ErrorBlock message='Something went wrong, please try again later.' />}
				{data?.length > 0 && (
					<OpacityMotionContainer>
						<GridContainer movies={data} />
					</OpacityMotionContainer>
				)}
				{data?.length === 0 && !isLoading && <p>No movie or series containing your search term was found.</p>}
			</>
		</OpacityMotionContainer>
	)
}

export default SearchResults
