import { counterContextObj } from "./Context/ContextProvider.jsx"
import { useContext } from "react"

function Counter({ counterNum }) {
  const { counter, increment, decrement, reset } = useContext(counterContextObj)

  return (
    <div className='text-center p-6 border-2 border-blue-500 rounded-lg m-4'>
      <h1 className='text-4xl font-bold mb-4'>Counter {counterNum}: {counter}</h1>
      <div className='flex gap-2 justify-center'>
        <button className='bg-green-600 p-2 px-4 text-white rounded hover:bg-green-700' onClick={() => increment()}>+</button>
        <button className='bg-red-600 p-2 px-4 text-white rounded hover:bg-red-700' onClick={() => decrement()}>-</button>
        <button className='bg-yellow-600 p-2 px-4 text-white rounded hover:bg-yellow-700' onClick={() => reset()}>Reset</button>
      </div>
    </div>
  )
}

export default Counter
