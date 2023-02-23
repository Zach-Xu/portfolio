import React, { useState } from 'react'
import Skill from './Skill'

type Props = {}


const Skills = (props: Props) => {

    const isMobile: boolean = window.innerWidth <= 680

    const skills = new Array(17).fill(0)


    return (
        <div id='skills' className='h-screen flex flex-col relative items-center justify-center p-10 '>
            <h3 className='uppercase absolute md:top-28 top-24 text-gray-400 text-xl tracking-[1rem] overflow-hidden'>Skills</h3>
            <h3 className='uppercase my-10 bg-[rgb(36,36,36)] text-base text-gray-400'>Hover over a skill for current proficiency</h3>
            <div className='grid grid-cols-4 gap-5 md:grid-cols-5 '>
                {
                    skills.map((skill, index) => (
                        <Skill key={index} isMobile={isMobile} isFromLeft={index < skills.length / 2} />
                    ))
                }

            </div>

        </div>
    )
}

export default Skills