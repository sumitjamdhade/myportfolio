import React from 'react'

const Contact = () => {
  return (
    <section id='contact' className='py-24 px-4 relative bg-background/30'>
      <div className='container max-w-5xl mx-auto'>
        <h2 className='text-3xl md:text-4xl font-bold mb-12 text'> Let's <span className='text-white'>Connect</span>  </h2>
      </div>

      <p className='text-white mx-auto'>Got a challenge or idea? I’d love to help bring it to life.</p>

      <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
        <div className='space-y-10 mx-auto'>

            <h3 className='text-2xl font-semibold mb-5 mt-10'>Contact Me</h3>

            <div className='space-y-8  w-100 flex  items-center'>
                <div className='flex items-center w-full justify-baseline space-x-8'>
                    <div className='p-3 flex rounded-full bg-primary/10 items-center'>
                     <img className='h-12 invert' src="/src/assets/mail.svg" alt="" />
                    </div>
                    <div className='text-white flex flex-col items-center'>
                        <h4>Email</h4>
                        <a className="hover:text-amber-200" href="">sumitvjamdhade@gmail.com</a>
                    </div>
                </div>
            </div>


             <div className='space-y-8  w-100 flex items-center'>
                <div className='flex items-center w-full justify-baseline  space-x-8'>
                    <div className='p-3 rounded-full bg-primary/10 items-center'>
                    <img className="h-10 " src="/src/assets/phone.svg" alt="" />
                    </div>
                    <div className='text-white flex flex-col items-center'>
                        <h4>Phone</h4>
                        <a className="hover:text-amber-200" href="">+91 73850 18228</a>
                    </div>
                </div>
            </div>

            
             <div className='space-y-8   w-100 flex items-center'>
                <div className='flex items-center w-full justify-baseline  space-x-8'>
                    <div className='p-3 rounded-full bg-primary/10 items-center'>
                    <img className="h-15 " src="/src/assets/location.svg" alt="" />
                    </div>
                    <div className='text-white flex flex-col items-center'>
                        <h4>Location</h4>
                        <a className="hover:text-amber-200" href="">sumitvjamdhade@gmail.com</a>
                    </div>
                </div>
            </div>

        </div>
      </div>
    </section>
  )
}

export default Contact