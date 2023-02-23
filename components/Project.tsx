import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AppState, hoverImage, unHoverImage } from '../redux/reducers'


type Props = {}

const Project = (props: Props) => {

    const array = new Array(6).fill(0)
    const [hoveredNum, setHoveredNum] = useState<number>(-1)
    const dispatch = useDispatch()
    const hoveredImgNumber = useSelector((state: AppState) => state.hoveredImgNumber)

    return (

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 group">
            {
                /** className explaination:
                *  on small screen : only display first two images
                *  on medium screen : display first four images
                *  on large screen : display all images
                *  on hover image: zoom in hovered image, hide the remaining images
               */
                array.map((a, idx) => (
                    <img src={`/projects-img/movie-app-${idx + 1}.png`} key={idx}
                        className={`rounded-xl h-[150px] w-[325px] md:[h-100px] 
                        ${idx === hoveredImgNumber ? 'group-hover:col-span-full group-hover:w-[90vw] group-hover:h-[40vh] group-hover:md:w-[75vw] group-hover:md:h-[65vh]' : 'group-hover:hidden '} md:w-[250px] border border-gray-300  ${idx >= 2 && idx <= 3 ? 'hidden md:inline-block' : idx >= 4 ? 'hidden lg:inline-block' : ''}`}
                        onMouseEnter={() => dispatch(hoverImage(idx))}
                        onMouseLeave={() => dispatch(unHoverImage())} />
                ))
            }
        </div>
    )
}

export default Project