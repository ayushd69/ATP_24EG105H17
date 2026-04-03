import React from 'react'
import Counter from './Counter'

function App() {
  return (
    <div className='min-h-screen bg-linear-to-b from-blue-100 to-purple-100 p-8'>
      <h1 className='text-5xl font-bold text-center mb-10 text-gray-800'>Multiple Counters</h1>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto'>
        <Counter counterNum={1} />
        <Counter counterNum={2} />
        <Counter counterNum={3} />
        <Counter counterNum={4} />
      </div>
    </div>
  )
}

export default App
