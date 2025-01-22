import React from 'react'
import Sidebar from './Sidebar'
import Header from './Header'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div>
      <div className='flex'>
        <Sidebar/>
      </div>
      <div className='w-full ml-16'>
        <Header/>
        <Outlet/>
      </div>
    </div>
  )
}

export default Layout
