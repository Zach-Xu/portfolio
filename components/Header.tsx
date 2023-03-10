import React from 'react'
import { SocialIcon } from 'react-social-icons';
import { motion } from 'framer-motion'

type Props = {}

const Header = (props: Props) => {
    return (
        <div className='flex justify-between md:max-w-4xl lg:max-w-5xl mx-auto p-2 pt-4 sticky top-0  z-40 bg-[rgb(36,36,36)]'>
            <motion.div
                initial={{
                    x: -500,
                    opacity: 0,
                }}
                animate={{
                    x: 0,
                    opacity: 1,

                }}
                transition={{
                    duration: 2
                }}
                className='flex space-x-1 relative '>
                <SocialIcon url='https://github.com/Zach-Xu' target="_blank" bgColor='transparent' fgColor='gray' />
                <SocialIcon url='https://drive.google.com/file/d/1tpNsl3X2fveacYlIa9BXydPp6legYxc0/view' network='wechat' bgColor='transparent' fgColor='gray' target="_blank" />
                <SocialIcon url='https://www.linkedin.com/in/zach-xu-b45293262/' bgColor='transparent' fgColor='gray' target="_blank" />
            </motion.div>
            <motion.div
                initial={{
                    x: 500,
                    opacity: 0
                }}
                animate={{
                    x: 0,
                    opacity: 1
                }}
                transition={{
                    duration: 2
                }}
                className="flex items-center"
            >


                <SocialIcon url='#contact' network='email' bgColor='transparent' fgColor='gray' />
                <a href="#contact" className='hidden md:inline-block text-gray-300'>GET IN TOUCH</a>
            </motion.div>
        </div>
    )
}

export default Header