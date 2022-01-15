import { Dispatch, SetStateAction, useEffect, useState } from 'react'

type SetValue<T> = Dispatch<SetStateAction<T>>

function useLocalStorage<T>(key: string, initialValue: T) {
	const readValue = () => {
		if (typeof window === 'undefined') {
			return initialValue
		}

		try {
			const item = window.localStorage.getItem(key)
			return item ? parseJSON(item) : initialValue
		} catch (error) {
			console.warn(`Error reading localStorage key “${key}”:`, error)
			return initialValue
		}
	}

	const [storedValue, setStoredValue] = useState(readValue)

	const setValue: SetValue<T> = (value) => {
		if (typeof window == 'undefined') {
			console.warn(
				`Tried setting localStorage key “${key}” even though environment is not a client`
			)
		}

		try {
			const newValue = value instanceof Function ? value(storedValue) : value
			window.localStorage.setItem(key, JSON.stringify(newValue))
			setStoredValue(newValue)
			window.dispatchEvent(new Event('local-storage'))
		} catch (error) {
			console.warn(`Error setting localStorage key “${key}”:`, error)
		}
	}

	useEffect(() => {
		setStoredValue(readValue())
	}, [])

	return [storedValue, setValue]
}

function parseJSON(value: string | null) {
	try {
		return value === 'undefined' ? undefined : JSON.parse(value ?? '')
	} catch (error) {
		console.log('parsing error on', { value })
		return undefined
	}
}

export default useLocalStorage
