import { useState, useEffect } from 'react'

const useSearchQuery = () => {
	const storedQuery = localStorage.getItem('searchQuery')
	const [query, setQuery] = useState(storedQuery || '')
	const [apiQuery, setApiQuery] = useState(storedQuery || '')
	const [isInitial, setIsInitial] = useState(true)
	const queryIsValid = query.trim().length > 0

	useEffect(() => {
		localStorage.setItem('searchQuery', query)

		if (queryIsValid) {
			const settingApiQuery = setTimeout(() => {
				setIsInitial(false)
				setApiQuery(query.trim())
			}, 1000)

			return () => clearTimeout(settingApiQuery)
		} else {
			setIsInitial(true)
		}
	}, [query, queryIsValid])

	const onChangeHandler = e => {
		setQuery(e.target.value)
	}

	return { query, apiQuery, isInitial, queryIsValid, onChangeHandler }
}

export default useSearchQuery
