import { motion } from 'framer-motion'
import React from 'react'
import { useSelector } from 'react-redux'
import { AppState } from '../redux/reducers'
import Project from './Project'

type Props = {}

const Projects = (props: Props) => {

    const selectedImgNumber = useSelector((state: AppState) => state.selectedImgNumber)

    return (
        <div id='projects' className='h-screen flex flex-col justify-end  2xl:justify-center items-center relative p-10'>
            <h3 className={`section-header ${selectedImgNumber === -1 ? 'inline-block' : 'hidden'}`}>Projects</h3>
            <div className="carousel w-full">
                <div id="item1" className="carousel-item w-full">
                    <Project />
                </div>
                <div id="item2" className="carousel-item w-full">
                    <Project />
                </div>
                <div id="item3" className="carousel-item w-full">
                    <Project />
                </div>

            </div>
            <div className="flex justify-center w-full py-2 gap-2">
                <a href="#item1" className="btn btn-xs">1</a>
                <a href="#item2" className="btn btn-xs">2</a>
                <a href="#item3" className="btn btn-xs">3</a>
            </div>


        </div>
    )
}

export default Projects