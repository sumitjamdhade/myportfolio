import React from 'react'
import Navbar from './navbar'
import LineBackground from './LineBackground'
import Hi from './Hi'
import About from './About'


const Home = () => {
  return (
    <div className='min-h-screen bg-background overflow-x-hidden '>

      {/* Navigation Bar */}
      <Navbar />

      {/* Lines Background */}
      <LineBackground />
    <main>
      {/* Hello */}
      <Hi />
      <About />
    </main>
      

    </div>
  )
}

export default Home
