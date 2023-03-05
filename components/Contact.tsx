import React from 'react'
import { PhoneIcon, EnvelopeIcon, MapPinIcon } from '@heroicons/react/24/outline'

type Props = {}

const Contact: React.FC = (props: Props) => {
    return (
        <div id='contact' className='h-screen flex flex-col p-10 relative items-center'>
            <h3 className='section-header'>Contact</h3>
            <div className='h-screen flex flex-col pt-[80px] md:pt-[112px] justify-center items-center'>
                <div className='space-y-5 flex flex-col items-center'>
                    <h4 className='text-lg md:text-4xl'>I have got just what you need.</h4>
                    <h4 className='text-lg md:text-4xl'>Let's Talk</h4>
                </div>

                <div className='mt-10 space-y-5'>
                    <div className='flex justify-center space-x-3'>
                        <PhoneIcon className='w-6 h-6 text-orange-400 animate-bounce' />
                        <p>+1 &#40;416&#41; 710-4222</p>
                    </div>
                    <div className='flex justify-center space-x-3'>
                        <EnvelopeIcon className='w-6 h-6 text-orange-400 animate-bounce' />
                        <p>zxu71@my.centennialcollege.ca</p>
                    </div>
                    <div className='flex justify-center space-x-3'>
                        <MapPinIcon className='w-6 h-6 text-orange-400 animate-bounce' />
                        <p>51 Historic Terra, Scarborough ON M1V 3C1, Canada</p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Contact