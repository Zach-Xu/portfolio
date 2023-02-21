import React from 'react'

type Props = {}

const About = (props: Props) => {
    return (
        <div id='about' className='h-screen flex flex-col lg:flex-row justify-center items-center relative p-10'>
            <h3 className='uppercase absolute top-24 text-gray-400 text-xl tracking-[1rem]'>About</h3>
            <p>Hi, I'm Zhen, and I'm a passionate and driven software engineering student with a strong interest in software development. I am always looking for new challenges and opportunities to enhance my coding skills. During my academic years at Centennial College, I gained proficiency in several programming languages such as C#, JavaScript, Java, and Python, but JavaScript is my favorite. I have worked on various web projects using JavaScript, and you can find some of these in the project section below. I'm excited about pursuing a career as a web developer, and I'm eager to contribute my skills and experience to create innovative and user-friendly web applications.
            </p>
        </div>
    )
}

export default About