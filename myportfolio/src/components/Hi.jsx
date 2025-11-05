import React from 'react'

const Hi = () => {
  return (
    <section id="hi" className='min-h-screen flex flex-col justify-center items-center relative z-20 space-y-6'>
      <div className='text-white text-6xl bold'>

        <span className='opacity-0 animate-fade-in' >Hi, I am </span>
        <span className='opacity-0 text-amber-200 animate-fade-in-delay-1 font-semibold'>Sumit </span>
        <span className='opacity-0 text-amber-200 animate-fade-in-delay-2 font-semibold'>Jamdhade</span>
         
      </div>

      <p className='h-2 w-1/2 text-indigo-50 animate-fade-in-delay-3 opacity-0 hidden md:flex text-justify'>
        I'm a front-end developer passionate about crafting clean, responsive, and user-friendly web interfaces. I specialize in turning design concepts into interactive experiences using technologies like HTML, CSS, JavaScript, and React. Whether it's building sleek dashboards or optimizing performance, I love solving real-world problems through elegant code.
      </p>

      <div className='absolute bottom-0 animate-bounce text-xs text-amber-200 opacity-70 mt-10'>
        scroll
      </div>
    </section>
  )
}

export default Hi
