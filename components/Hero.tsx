import React, { Fragment } from 'react'
import { motion } from 'framer-motion'
import { useTypewriter, Cursor } from 'react-simple-typewriter'

type Props = {}

const intro: string[] = [
    "< Hi there, my name's Zach />",
    "< Love Web Development />",
    "< Casual 4 fun gamer />"
]

const Hero = (props: Props) => {

    const [text] = useTypewriter({
        words: intro,
        loop: 0,
        delaySpeed: 100
    })

    return (
        <div className='h-screen flex flex-col items-center justify-center pt-16'>
            <div className='relative flex items-center justify-center'>
                <div className='absolute h-[375px] w-[375px] md:h-[600px] md:w-[600px] border border-gray-400 rounded-full  z-0'>
                </div>
                <img src="selfie.jpg" alt="A picture of me" className='w-28 h-28 md:w-40 md:h-40' />
            </div>

            <div className='flex flex-col items-center space-y-5 justify-center mt-2 p-2'>
                <p className='uppercase tracking-[0.8rem] text-[0.7rem] text-gray-400'>Software Engineer</p>
                <div className='flex text-3xl justify-center' >
                    <span className='flex-shrink-0'>{text}</span>
                    <Cursor cursorColor='orange' />
                </div>
            </div>
            <div className='mt-24 md:mt-5'>
                <ul className='list-none flex space-x-5'>
                    <li className='px-2 cursor-pointer'>Education</li>
                    <li className='px-2 cursor-pointer'>About</li>
                    <li className='px-2 cursor-pointer'>Skills</li>
                    <li className='px-2 cursor-pointer'>Project</li>
                </ul>
            </div>
        </div>

    )
}

export default Hero