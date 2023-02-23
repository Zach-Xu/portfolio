import React from 'react'

type Props = {}

const Projects = (props: Props) => {
    return (
        <div id='projects' className='h-screen flex flex-col justify-center items-center relative p-10'>
            <h3 className='uppercase absolute md:top-28 top-24 text-gray-400 text-xl tracking-[1rem]'>Projects</h3>
        </div>
    )
}

export default Projects