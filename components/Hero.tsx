import React, { Fragment } from 'react'
import { motion } from 'framer-motion'
import { useTypewriter, Cursor } from 'react-simple-typewriter'

type Props = {}

const intro: string[] = [
    "< Hi there, my name's Zhen />",
    "< I go by Zach />",
    "< I enjoy coding />",
    "< Futrue full-stack developer />"
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
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 2 }} className='h-screen flex flex-col items-center justify-center pt-40 '>
            <div className='relative flex items-center justify-center '>
                <motion.div
                    initial={{
                        opacity: 0,
                    }}
                    animate={{
                        rotate: 90,
                        opacity: 1,
                        borderRadius: '20px',
                    }}
                    transition={{
                        duration: 2,
                    }}

                    className='absolute h-[375px] w-[375px] md:h-[575px] md:w-[575px] border border-gray-400 '>
                </motion.div>
                <img src="selfie.jpg" alt="A picture of me" className='w-28 h-28 md:w-40 md:h-40 rounded-lg opacity-75 hover:opacity-90 z-10' />
            </div>

            <div className='flex flex-col relative items-center space-y-5 justify-center mt-2 pt-2'>
                <p className='uppercase tracking-[0.8rem] text-[0.7rem] text-gray-400'>Software Engineer</p>
                <div className='flex text-3xl justify-center' >
                    <span className='flex-shrink-0 font-bold ' >{text}</span>
                    <Cursor cursorColor='orange' />
                </div>
            </div>
            <div className='mt-24 md:mt-5 uppercase z-20'>
                <ul className='list-none md:flex md:space-x-5 md:flex-row grid grid-cols-3 gap-3 '>
                    <li className='px-2 cursor-pointer'><a href="#about">About</a></li>
                    <li className='px-2 cursor-pointer'><a href="#skills">Skills</a></li>
                    <li className='px-2 cursor-pointer'><a href="#projects">Projects</a></li>
                    <li className='px-2 cursor-pointer'><a href="#education">Education</a></li>
                    <li className='px-2 cursor-pointer'><a href="/resume.pdf" target='_blank'>Resume</a></li>
                </ul>
            </div>
        </motion.div>

    )
}

export default Hero