import React from 'react'
import Sidebar from '../components/Sidebar'
import Header from '../components/Header'

const Home = () => {
  return (
    <div className='flex'>
      <Sidebar/>
      <div className='w-full'>
        <Header/>
      </div>
    </div>
  )
}

export default Home
