import React, { useState } from 'react'
import Skill from './Skill'

type Props = {}

export interface MySkill {
    icon: string
    proficiency: number
}


const Skills: React.FC<Props> = (props) => {

    const isMobile: boolean = window.innerWidth <= 680

    // const skills = new Array(17).fill(0)

    const skills: MySkill[] = [
        { icon: '/icons/javascript.svg', proficiency: 85 },
        { icon: '/icons/typescript-icon.svg', proficiency: 72 },
        { icon: '/icons/react.svg', proficiency: 81 },
        { icon: '/icons/nextjs-icon.svg', proficiency: 80 },
        { icon: '/icons/nodejs-icon.svg', proficiency: 75 },
        { icon: '/icons/redux.svg', proficiency: 70 },
        { icon: '/icons/mongodb-icon.svg', proficiency: 75 },
        { icon: '/icons/graphql.svg', proficiency: 79 },
        { icon: '/icons/material-ui.svg', proficiency: 71 },
        { icon: '/icons/tailwindcss-icon.svg', proficiency: 78 },
        { icon: '/icons/java.svg', proficiency: 90 },
        { icon: '/icons/spring.svg', proficiency: 87 },
        { icon: '/icons/c-sharp.svg', proficiency: 83 },
        { icon: '/icons/nestjs.svg', proficiency: 70 },
        { icon: '/icons/mysql.svg', proficiency: 73 },
        { icon: '/icons/aws.svg', proficiency: 63 },
        { icon: '/icons/azure-icon.svg', proficiency: 55 },


    ]


    return (
        <div id='skills' className='section'>
            <h3 className='section-header'>Skills</h3>
            <h3 className='uppercase my-10 bg-[rgb(36,36,36)] text-base text-gray-400'>Hover over a skill for current proficiency</h3>
            <div className='grid grid-cols-4 gap-5 md:grid-cols-5 '>
                {
                    skills.map((skill, index) => (
                        <Skill key={index} isMobile={isMobile} isFromLeft={index < skills.length / 2} skill={skill} />
                    ))
                }

            </div>

        </div>
    )
}

export default Skills