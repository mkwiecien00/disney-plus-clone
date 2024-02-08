import { useState, useEffect } from 'react'
import { useQuery } from '@tanstack/react-query'
import { PropTypes } from 'prop-types'
import styled from 'styled-components'

import { fetchListForCategory } from '@utils/http/fetch-list-for-category'
import Container from '@components/ui/Container'
import { categoryOptions } from '@utils/resources/category-options'
import CategorySelector from '@components/ui/CategorySelector'
import useCategorySelection from '@hooks/use-categoryselection'
import ResourceContent from '@components/ResourceContent'

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
			<ResourceContent isPending={isPending} isError={isError} isSuccess={isSuccess} data={data} resourceList={resourceList} type={type} />
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
