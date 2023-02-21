import React, { Fragment } from 'react'
import { motion } from 'framer-motion'
import { useTypewriter, Cursor } from 'react-simple-typewriter'

type Props = {}

const intro: string[] = [
    "< Hi there, my name's Zhen />",
    "< You can call me Zach />",
    "< I enjoy Web Development />",
    "< Also a casual 4 fun gamer />"
]

const Hero = (props: Props) => {

    const [text] = useTypewriter({
        words: intro,
        loop: 0,
        typeSpeed: 100,
        deleteSpeed: 50,
        delaySpeed: 1000
    })

    return (
        <div className='h-screen flex flex-col items-center justify-center pt-16'>
            <div className='relative flex items-center justify-center'>
                <motion.div
                    initial={{
                        opacity: 0
                    }}
                    animate={{
                        rotate: 180,
                        opacity: 1

                    }}
                    transition={{
                        duration: 4,
                    }}
                    whileInView={{
                        borderRadius: '25px'
                    }}
                    className='absolute h-[375px] w-[375px] md:h-[600px] md:w-[600px] border border-gray-400  z-0'>
                </motion.div>
                <img src="selfie.jpg" alt="A picture of me" className='w-28 h-28 md:w-40 md:h-40' />
            </div>

            <div className='flex flex-col items-center space-y-5 justify-center mt-2 p-2'>
                <p className='uppercase tracking-[0.8rem] text-[0.7rem] text-gray-400'>Software Engineer</p>
                <div className='flex text-3xl justify-center' >
                    <span className='flex-shrink-0'>{text}</span>
                    <Cursor cursorColor='orange' />
                </div>
            </div>
            <div className='mt-24 md:mt-5 uppercase'>
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