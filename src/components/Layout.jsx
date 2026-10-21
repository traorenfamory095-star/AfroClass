import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'

const Layout = () => {
  return (
    <div className='min-h-screen flex flex-col'>
      <Navbar />
      <main className='flex-1 pt-20 pb-8 px-4 md:px-10'>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default Layout