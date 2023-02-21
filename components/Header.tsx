import React from 'react'
import { SocialIcon } from 'react-social-icons';

type Props = {}

const Header = (props: Props) => {
    return (
        <div className='flex justify-between  md:max-w-4xl lg:max-w-5xl mx-auto p-2 sticky top-0'>
            <div className='flex space-x-1 '>
                <SocialIcon url='https://github.com/Zach-Xu' target="_blank" bgColor='transparent' fgColor='gray' />
                <SocialIcon url='https://drive.google.com/file/d/1tpNsl3X2fveacYlIa9BXydPp6legYxc0/view' network='wechat' bgColor='transparent' fgColor='gray' target="_blank" />
                <SocialIcon url='https://www.linkedin.com/in/zach-xu-b45293262/' bgColor='transparent' fgColor='gray' target="_blank" />
            </div>
            <div>
                <SocialIcon url='mailto:zxu71@my.centennialcollege.ca' network='email' bgColor='transparent' fgColor='gray' />
                <p className='hidden md:inline-block text-gray-300'>GET IN TOUCH</p>
            </div>
        </div>
    )
}

export default Header