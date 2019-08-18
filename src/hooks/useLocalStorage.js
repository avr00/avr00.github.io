import { useState, useEffect } from "react"

// Hook
function useLocalStorage(key, initialValue) {
  //set initial state after component mounts for when window.object is undefined
  useEffect(() => {
    try {
      // Get from local storage by key
      const item =
        typeof window !== `undefined` ? window.localStorage.getItem(key) : null
      // Parse stored json or if none return initialValue
      setStoredValue(item ? JSON.parse(item) : initialValue)
    } catch (error) {
      // If error also return initialValue
      console.log(error)
      setStoredValue(initialValue)
    }
  }, [])

  // State to store our value
  // Pass initial state function to useState so logic is only executed once
  const [storedValue, setStoredValue] = useState("")

  // Return a wrapped version of useState's setter function that ...
  // ... persists the new value to localStorage.
  const setValue = value => {
    try {
      // Allow value to be a function so we have same API as useState
      const valueToStore =
        value instanceof Function ? value(storedValue) : value
      // Save state
      setStoredValue(valueToStore)
      // Save to local storage
      if (typeof window !== "undefined") {
        window.localStorage.setItem(key, JSON.stringify(valueToStore))
      }
    } catch (error) {
      // A more advanced implementation would handle the error case
      console.log(error)
    }
  }

  return [storedValue, setValue]
}

export default useLocalStorage
