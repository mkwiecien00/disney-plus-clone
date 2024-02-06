import { useState } from 'react'

const useCategorySelection = (type, initialCategory) => {
	const storedCategory = localStorage.getItem(`selectedCategory_${type}`)
	const [selectedCategory, setSelectedCategory] = useState(storedCategory || initialCategory)

	const categorySelectHandler = event => {
		localStorage.setItem(`selectedCategory_${type}`, event.target.value)
		setSelectedCategory(event.target.value)
	}

	return { selectedCategory, categorySelectHandler }
}

export default useCategorySelection
