import React from 'react'
import { motion } from 'framer-motion'

const About: React.FC = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 2 }}
            id='about' className='h-screen flex flex-col lg:flex-row justify-center items-center relative p-10'>
            <h3 className='section-header'>About</h3>
            <div className='h-screen max-w-[640px] space-y-2 flex flex-col pt-[80px] md:pt-[112px] justify-center items-center'>
                <h5 className=' text-base sm:text-xl'>Here is something about me</h5>
                <p className=' text-base sm:text-xl'>Hi, I'm Zhen, and I'm a passionate and driven software engineering student with a strong interest in software development. I am always looking for new challenges and opportunities to enhance my coding skills. During my academic years at Centennial College, I gained proficiency in several programming languages such as C#, JavaScript, Java, and Python, but JavaScript is my favorite. I have worked on various web projects using JavaScript, and you can find some of these in the project section below. I'm excited about pursuing a career as a web developer, and I'm eager to contribute my skills and experience to create innovative and user-friendly web applications.
                </p>
            </div>
        </motion.div>
    )
}

export default About