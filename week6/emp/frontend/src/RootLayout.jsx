import Header from './Header'
import {Outlet} from 'react-router'

function RootLayout() {
  return (
    <div className='bg-pink-400'>
      <Header />
      <div className='min-h-screen mx-20 p-20 bg-gray-200'>
        <Outlet />
      </div>
    </div>
  )
}

export default RootLayout