import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AppState, selectImage, unSelectImage } from '../redux/reducers'


type Props = {}

const Project = (props: Props) => {

    const array = new Array(6).fill(0)
    const dispatch = useDispatch()
    const selectedImgNumber = useSelector((state: AppState) => state.selectedImgNumber)

    return (

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
                    <img src={`/projects-img/movie-app-${idx + 1}.png`} key={idx}
                        className={`rounded-xl h-[150px] w-[325px] md:[h-100px] md:w-[250px] border border-gray-300 cursor-pointer 
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
    )
}

export default Project