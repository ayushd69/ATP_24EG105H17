import { createContext, useState, useCallback } from "react"


export const counterContextObj = createContext()
function ContextProvider({ children }) {

  const [counter, setCounter] = useState(0)


  const increment = useCallback(() => {
    setCounter(prev => prev + 1)
  }, [])

  const decrement = useCallback(() => {
    setCounter(prev => prev - 1)
  }, [])

  const reset = useCallback(() => {
    setCounter(0)
  }, [])

  const value = {
    counter,
    increment,
    decrement,
    reset
  }

  return (
    <counterContextObj.Provider value={value}>
      {children}
    </counterContextObj.Provider>
  )
}

export default ContextProvider


