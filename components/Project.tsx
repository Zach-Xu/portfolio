import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AppState, selectImage, unSelectImage } from '../redux/reducers'
import { motion } from 'framer-motion'


export interface ProjectProps {
    appName: string
    description: string
    githubLink: string
    images: string[]
}

const Project = ({ appName, description, images, githubLink }: ProjectProps) => {

    const dispatch = useDispatch()
    const selectedImgNumber = useSelector((state: AppState) => state.selectedImgNumber)

    return (
        <motion.div
            initial={{
                opacity: 0
            }}
            whileInView={{
                opacity: 1
            }}
            transition={{
                duration: 1.5
            }}
            className={` flex flex-col h-full w-screen items-center 2xl:justify-center space-y-3  md:space-y-5 ${selectedImgNumber !== -1 ? 'justify-center' : 'justify-end'}`}>
            <div>
                <h4 className={`text-center font-bold text-base md:text-2xl ${selectedImgNumber !== -1 && 'hidden'}`}>
                    <a href={githubLink} target='_blank'>{appName}</a>
                </h4>
                <p className={`p-5 sm:p-2 text-xs md:text-sm lg:text-base xs:max-w-lg md:max-w-xl lg:max-w-3xl text-left space-y-5 ${selectedImgNumber !== -1 && 'hidden'}`}>
                    {description}
                </p>
            </div>
            {/* Project images preview */}
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
                {

                    /*  Condition                                               Meaning                                                                 style
                    *  idx === selectedImgNumber                               current image is selected                                               zoom in
                    *  idx === -1                                              there is no selected image                                              inline-block (display)     
                    *  idx !== selectedImgNumber && selectedImgNumber !== -1   there is a selected image but is not the current image                  hidden
                    *  idx >= 2 && idx <= 3 && selectedImgNumber === -1        there is no selected image and current image is the third or fourth     hidden on small screen, display on medium or above
                    *  idx >= 4 && selectedImgNumber === -1                    there is no selected image and current image is the fifth or later      hiden on small and medium screen, display on large or above
                    */

                    images.map((image, idx) => (
                        <img src={image} key={idx}
                            className={`rounded-xl h-[150px] w-[325px] md:[h-100px] md:w-[250px] border-[3px] border-gray-500 cursor-pointer 
                       ${idx === selectedImgNumber ? 'col-span-full w-[90vw] h-[40vh] md:w-[75vw] md:h-[65vh]' : ''}
                       ${idx !== selectedImgNumber && selectedImgNumber !== -1 ? 'hidden' : ' inline-block'}
                       ${selectedImgNumber === -1 ? 'inline-block' : ''}
                       ${idx >= 2 && idx <= 3 && selectedImgNumber === -1 ? 'hidden md:inline-block' :
                                    idx >= 4 && selectedImgNumber === -1 ? 'hidden lg:inline-block' : ''}`}
                            onClick={() => dispatch(selectImage(idx))}
                            onMouseLeave={() => dispatch(unSelectImage())}
                        />
                    ))
                }
            </div>
        </motion.div>
    )
}

export default Project