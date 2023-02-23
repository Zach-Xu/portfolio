import React from 'react'
import { useSelector } from 'react-redux'
import { AppState } from '../redux/reducers'
import Project from './Project'

type Props = {}

const Projects = (props: Props) => {

    const hoveredImgNumber = useSelector((state: AppState) => state.hoveredImgNumber)

    return (
        <div id='projects' className='h-screen flex flex-col justify-center items-center relative p-10'>
            <h3 className={`section-header ${hoveredImgNumber === -1 ? '' : 'hidden'}`}>Projects</h3>
            <Project />
        </div>
    )
}

export default Projects