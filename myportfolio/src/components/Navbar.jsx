import React, { use } from 'react'
import { useEffect, useState } from 'react'
import cn from 'classnames'

const Navbar = () => {

  const Navigation =
    [
      { name: "Home", href: "#home" },
      { name: "Skills", href: "#skills" },
      { name: "Projects", href: "#projects" },
      { name: "Contact", href: "#contact" },
    ]


  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    }

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  })



  return (


    <div className={
      cn("fixed w-full z-40 transition-all duration-300",
        isScrolled ? "py-3 bg-background/50 backdrop-blur-md shadow-xs " : "py-5"
      )
    }>
      <div className="nav-container gradient-border h-15 border-border bg-[#0f0f0f] text-[18px] w-screen flex justify-between items-center px-20 rounded-full my-5 absolute z-100">
        <p id='hi' className="logo text-glow font-bold text-yellow-200">sumitjamdhade</p>

        <div className='flex items-center'>

          {/* desktop */}
          <div className="hidden justify-center md:flex gap-5">

            {Navigation.map((item, key) => (
              <a className=' text-white text-sm hover:text-amber-200 transition-colors duration-500'
                key={key} href={item.href}>{item.name}</a>

            ))}

          </div>



          {/* mobile */}
          <button
            aria-label={isMenuOpen ? "Open Menu" : "Close Menu"}
            className='md:hidden' onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {!isMenuOpen
              ? <img className='relative z-40 invert h-5 w-5' src="/src/assets/hamburger.svg" alt="" />
              : <img className='relative z-40 invert h-7 w-7 ' src="/src/assets/cross.svg" alt="" />
            }
          </button>

          {/* mobile menu */}
          <div className={cn(' fixed inset-0 flex flex-col bg-background/90 backdrop-blur-md z-30 transition-all duration-300',
            ' md:hidden justify-center items-center '
            , isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none')}>


            <div className="flex flex-col space-y-10">

              {Navigation.map((item, key) => (
                <a onClick={() => setIsMenuOpen(false)}
                  className=' text-white/70 text-sm hover:text-amber-200 transition-colors duration-300'
                  key={key} href={item.href}>{item.name}</a>

              ))}

            </div>



          </div>


        </div>

      </div>

    </div>
  )
}

export default Navbar
