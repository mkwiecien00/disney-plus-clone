import { categories } from '@utils/http/constants'

export const fetchHomePageData = async ({ signal }) => {
	const fetchCategoryData = async () => {
		const categoryData = await Promise.all(
			categories.map(async category => {
				try {
					const response = await fetch(category.path, { signal })
					if (!response.ok) {
						throw new Error('Failed to fetch data.')
					}
					const data = await response.json()
					return { ...category, data }
				} catch (error) {
					console.error(`An error occurred while fetching data for ${category.category}. Please try again later.`)
					return { ...category }
				}
			})
		)
		return categoryData
	}

	return fetchCategoryData()
}
