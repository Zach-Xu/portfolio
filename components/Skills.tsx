import React from 'react'
import Skill from './Skill'

type Props = {}

const Skills = (props: Props) => {
    return (
        <div id='skills' className='h-screen flex flex-col relative items-center justify-center p-10 '>
            <h3 className='uppercase absolute md:top-28 top-24 text-gray-400 text-xl tracking-[1rem]'>Skills</h3>
            <h3 className='uppercase mb-20'>Hover over a skill for current proficiency</h3>
            <div className='grid grid-cols-4 gap-5'>
                <Skill />
                <Skill />
                <Skill />
                <Skill />
                <Skill />
                <Skill />
                <Skill />
                <Skill />
                <Skill />
                <Skill />
                <Skill />
            </div>

        </div>
    )
}

export default Skills