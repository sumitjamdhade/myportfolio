import React from 'react'

const skills = [

    // frontend 
    { name: "HTML", level: 90, category: "frontend" },
    { name: "CSS", level: 85, category: "frontend" },
    { name: "JavaSript", level: 90, category: "frontend" },
    { name: "React", level: 90, category: "frontend" },
    { name: "Tailwind CSS", level: 85, category: "frontend" },

    // tools
    { name: "Git", level: 80, category: "tools" },
    { name: "GitHub", level: 85, category: "tools" },
    { name: "VS Code", level: 90, category: "tools" },

    // others
    { name: "Java", level: 87, category: "others" },

]


const Skills = () => {
    return (
        <section id='skills'
            className='py-24 px-4 relative '>

            <div className='container mx-auto max-w-5xl'>
                <h2 className='text-3xl md:text-4xl font-bold mb-12 text-white'>
                    My <span className='text-amber-200'>Skills</span>
                </h2>

                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'>

                    {skills.map((skill, key) => (
                        <div key={key}
                            className='bg-card p-6 rounded-lg h-24 m-0.5 shadow-2xs card-hover flex-col'>
                            <div className='text-left'>
                                <h3 className='text-lg font-semibold text-white '>{skill.name}</h3>
                            </div>

                            <div className='bg-amber-400 h-2 rounded-full origin-left animate-[grow_1.4s_ease-out]'
                                style={{ width: skill.level + "%" }}>
                            </div>

                            <div>
                                {skill.level}%
                            </div>

                        </div>
                    ))}
                </div>

            </div>

        </section>
    )
}

export default Skills
