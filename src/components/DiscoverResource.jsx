import { useState, useEffect } from 'react'
import { useQuery } from '@tanstack/react-query'
import { PropTypes } from 'prop-types'
import styled from 'styled-components'

import { fetchListForCategory } from '@/utils/http/fetchListForCategory'
import Container from '@components/ui/Container'
import GridContainer from '@components/ui/GridContainer'
import { OpacityMotionContainer } from '@components/ui/MotionContainer'
import Loader from '@components/ui/Loader'
import ErrorBlock from '@components/ui/ErrorBlock'
import { categoryOptions } from '@utils/resources/category-options'
import CategorySelector from '@components/ui/CategorySelector'
import useCategorySelection from '@hooks/use-categoryselection'

const DiscoverResource = ({ type }) => {
	const { selectedCategory, categorySelectHandler } = useCategorySelection(type, categoryOptions[type][0].id)
	const [resourceList, setResourceList] = useState([])

	const { data, isPending, isError, isSuccess } = useQuery({
		queryKey: [`${type}-data`, selectedCategory],
		queryFn: ({ signal }) => fetchListForCategory({ signal, resourceType: type, category: selectedCategory }),
	})

	useEffect(() => {
		if (isSuccess) {
			setResourceList(data)
		}
	}, [isSuccess, data])

	return (
		<StyledContainer>
			<CategorySelector
				type={type}
				selectedCategory={selectedCategory}
				onChange={categorySelectHandler}
				categoryOptions={categoryOptions}
			/>
			<>
				{isPending && <Loader />}
				{isError && <ErrorBlock message='Something went wrong, please try again later.' />}
				{isSuccess && !data.length && <p>No data available for the selected category.</p>}
				{isSuccess && data.length > 0 && (
					<OpacityMotionContainer>
						<GridContainer movies={resourceList} path={type} />
					</OpacityMotionContainer>
				)}
			</>
		</StyledContainer>
	)
}

DiscoverResource.propTypes = {
	type: PropTypes.string,
}

export default DiscoverResource

const StyledContainer = styled(Container)`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding: 60px;
	text-align: center;
`
