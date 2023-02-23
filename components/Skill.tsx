import React from 'react'
import { motion } from 'framer-motion'

type Props = {}

const Skill = (props: Props) => {
    return (
        <motion.div
            initial={{
                x: -300,
                opacity: 0
            }}
            whileInView={{
                x: 0,
                opacity: 1
            }}
            transition={{
                duration: 1.5
            }}
            className='relative group rounded-full overflow-hidden  '>
            <img src="icons/javascript.svg" alt="" className='w-20 h-20' />
            <div className='text-4xl absolute text-black font-bold hidden transition-opacity ease-in duration-500 opacity-0
                group-hover:bg-gray-300 group-hover:inline-block w-20 h-20 top-0 left-0 text-center leading-[5rem] hover:opacity-90 cursor-default'>85%</div>
        </motion.div>
    )
}

export default Skill