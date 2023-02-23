import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

type Props = {
    isMobile: boolean,
    isFromLeft: boolean
}

const Skill = (props: Props) => {

    const { isMobile, isFromLeft } = props

    return (
        <div className='relative group'>
            <motion.img
                initial={{
                    x: isMobile ? 0 : isFromLeft ? -200 : 200,
                    opacity: 0
                }}
                whileInView={{
                    x: 0,
                    opacity: 1
                }}
                transition={{
                    duration: 1.5
                }}
                src="icons/javascript.svg" alt="" className='md:w-20 md:h-20 w-16 h-16 rounded-lg' >

            </motion.img>
            <div className='md:text-3xl text-2xl absolute text-black font-bold hidden transition-opacity ease-in duration-500 opacity-0
                group-hover:bg-gray-300 group-hover:inline-block md:w-20 md:h-20 w-16 h-16  rounded-lg
                 top-0 left-0 text-center hover:opacity-90 cursor-default'>
                <div className='flex items-center justify-center h-full'>
                    <p>85%</p>
                </div>
            </div>
        </div>
    )
}

export default Skill