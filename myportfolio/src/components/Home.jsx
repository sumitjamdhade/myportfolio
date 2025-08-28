import React from 'react'
import Navbar from './navbar'
import LineBackground from './LineBackground'

const Home = () => {
  return (
    <div className='min-h-screen bg-background overflow-x-hidden '>

      {/* Navigation Bar */}
      <Navbar />

      {/* Lines Background */}
      <LineBackground />

    </div>
  )
}

export default Home
