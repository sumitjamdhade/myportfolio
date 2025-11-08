import React from 'react'
import Navbar from './navbar'
import LineBackground from './LineBackground'
import Hi from './Hi'
import About from './About'
import Skills from './Skills'
import Projects from './Projects'
import Contact from './Contact'


const Home = () => {
  return (
    <div className='min-h-screen bg-background overflow-x-hidden '>

      {/* Navigation Bar */}
      <Navbar />


      {/* Lines Background */}
      <LineBackground />


      {/* Main Section */}

    <main>
      {/* Hello */}
      <Hi />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </main>

      
    </div>
  )
}

export default Home
