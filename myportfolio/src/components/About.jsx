import React from 'react'

const About = () => {
    return (
        <section id='about' className='py-25 px-4 relative'>
            <div className='container mx-auto max-w-5xl'>
                <h2 className='text-3xl md:text-4xl font-bold mb-12 text'>
                    About <span className=''>Me</span>
                </h2>

                <div className='grid grid-cols-1 md:grid-cols-2 items-center gap-8'>
                    <div className='space-y-6'>
                        <div className='space-y-5 text-2xl text-white font-bold '>
                            <h3>Obsessed Web Developer & Tech Enthusiast</h3>
                        </div>

                        <p className='text-indigo-50'>
                            I like to bring ideas to life by coding. I specialize in creating responsive and user-friendly web applications.
                        </p>

                        <p className='text-indigo-50'>
                            My expertise includes HTML, CSS, JavaScript, and React. I enjoy solving complex problems and continuously learning new technologies to enhance my skills.
                        </p>

                        <div className='flex flex-col md:flex-row justify-around items-center'>
                            <a href="#contact" className='font-bold border-2 rounded-full border-amber-100 px-3 py-2 hover:bg-amber-50/5 hover:shadow-amber-100'>
                                Get in Touch
                            </a>

                            <a href="" className='ultra-button font-bold'>
                                Download CV
                            </a>
                        </div>
                    </div>

                    <div className='flex flex-col text-indigo-50 gap-4 '>
                        <p className='card-hover h-10 bg-gray-700/20 border-2 border-gray-900 rounded-xl flex justify-center items-center'>Frontend Development</p>
                        <p className='card-hover h-10 bg-gray-700/20 border-2 border-gray-900 rounded-xl flex justify-center items-center'>Java</p>
                        <p className='card-hover h-10 bg-gray-700/20 border-2 border-gray-900 rounded-xl flex justify-center items-center'>Problem Solving</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About
