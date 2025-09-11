import React from 'react'

const Hi = () => {
  return (
    <section id="hi" className='min-h-screen flex flex-col justify-center items-center relative z-20 space-y-6'>
      <div className='text-white text-6xl bold'>

        <span className='opacity-0 animate-fade-in' >Hi, I am </span>
        <span className='opacity-0 text-amber-200 animate-fade-in-delay-1'>Sumit </span>
        <span className='opacity-0 text-amber-200 animate-fade-in-delay-2'>Jamdhade</span>
         
      </div>

      <p className='h-2 w-1/2 text-amber-50 text-justify animate-fade-in-delay-3 opacity-0'>
        I'm a front-end developer passionate about crafting clean, responsive, and user-friendly web interfaces. I specialize in turning design concepts into interactive experiences using technologies like HTML, CSS, JavaScript, and React. Whether it's building sleek dashboards or optimizing performance, I love solving real-world problems through elegant code.
      </p>
    </section>
  )
}

export default Hi
