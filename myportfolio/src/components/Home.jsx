import React from 'react'
import Navbar from './navbar'
import LineBackground from './LineBackground'
import Hi from './Hi'

const Home = () => {
  return (
    <div className='min-h-screen bg-background overflow-x-hidden '>

      {/* Navigation Bar */}
      <Navbar />

      {/* Lines Background */}
      <LineBackground />

      {/* Hello */}
      <Hi />

    </div>
  )
}

export default Home
