import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AppState, selectImage, unSelectImage } from '../redux/reducers'
import { motion } from 'framer-motion'


type Props = {}

const Project = (props: Props) => {

    const array = new Array(6).fill(0)
    const dispatch = useDispatch()
    const selectedImgNumber = useSelector((state: AppState) => state.selectedImgNumber)

    return (
        <div className={`flex flex-col h-full items-center 2xl:justify-center space-y-4 md:space-y-8 ${selectedImgNumber !== -1 ? 'justify-center' : 'justify-end'}`}>
            <motion.div
                initial={{
                    opacity: 0
                }}
                whileInView={{
                    opacity: 1
                }}
                transition={{
                    duration: 2.5
                }}
            >
                <h4 className={`text-center font-bold text-base md:text-2xl ${selectedImgNumber !== -1 && 'hidden'}`}>Movie App</h4>
                <p className={`p-2 text-xs md:text-sm lg:text-base md:max-w-xl lg:max-w-3xl text-left space-y-5 ${selectedImgNumber !== -1 && 'hidden'}`}>
                    This app enables users to view, download, rate, and comment on movies. Users can filter movies by category and rating.
                    They can also upload movies, which will be stored in AWS S3 buckets, and manage their uploaded movies by updating their information.
                    Movie details are stored in AWS DynamoDB.
                </p>
            </motion.div>
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
                    array.map((a, idx) => (
                        <motion.img
                            initial={{
                                y: 100,
                                opacity: 0
                            }}
                            whileInView={{
                                y: 0,
                                opacity: 1
                            }}
                            transition={{
                                duration: 1.5
                            }}

                            src={`/projects-img/movie-app-${idx + 1}.png`} key={idx}
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
        </div>
    )
}

export default Project