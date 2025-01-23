import React from 'react'
import Sidebar from '../components/Sidebar'
import Header from '../components/Header'
import Overview from '../components/Overview'

const Home = () => {
  return (
    <div className='flex'>
      <Sidebar/>
      <div className='w-full'>
        <Header/>
        <Overview/>
      </div>
    </div>
  )
}

export default Home
