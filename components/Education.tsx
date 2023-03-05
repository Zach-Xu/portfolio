import React from 'react'
import Image from 'next/image'

type Props = {}

const Education = (props: Props) => {
    return (
        <div id='education' className='h-screen flex flex-col p-10 relative items-center'>
            <h3 className='section-header'>Education</h3>
            <div className='h-screen flex flex-col pt-[80px] md:pt-[112px] justify-center items-center'>
                <Image src='/Logo-centennial-college.png' width={150} height={150} alt='centennial college logo' className='mb-4'></Image>
                <h4>Software Engineering Technology</h4>
                <h5 className='text-sm'>Ontario College Advanced Diploma</h5>
                <div className='flex space-x-5 my-6'>
                    <Image src='/icons/aws.svg' width={50} height={50} alt='aws icon'></Image>
                    <Image src='/icons/spring.svg' width={50} height={50} alt='aws icon'></Image>
                    <Image src='/icons/c-sharp.svg' width={50} height={50} alt='aws icon'></Image>
                    <Image src='/icons/typescript-icon.svg' width={50} height={50} alt='aws icon'></Image>
                    <Image src='/icons/mysql.svg' width={50} height={50} alt='aws icon'></Image>
                </div>
                <h6 className='text-xs text-left w-full mb-2 text-gray-400'>DEC 2020 - PRESENT</h6>
                <ul className='list-disc'>
                    <li>Software Engineering Fundamentals</li>
                    <li>Web Application Development</li>
                    <li>Advanced Database Concept</li>
                    <li>Data Structures and Algorithms</li>
                    <li>Java EE Programming</li>
                    <li>API Engineering and Cloud Computing</li>
                    <li>Software Development Project</li>
                </ul>
            </div>
        </div>

    )
}

export default Education