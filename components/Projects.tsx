import React from 'react'
import Project from './Project'

type Props = {}

const Projects = (props: Props) => {
    return (
        <div id='projects' className='h-screen flex flex-col justify-center items-center relative p-10'>
            <h3 className='section-header '>Projects</h3>
            <Project />
        </div>
    )
}

export default Projects