import React, { useState } from 'react'


type Props = {}

const Project = (props: Props) => {

    const array = new Array(6).fill(0)
    const [hoveredNum, setHoveredNum] = useState<number>(-1)

    return (

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 group">
            {
                array.map((a, idx) => (
                    <img src={`/projects-img/movie-app-${idx + 1}.png`} key={idx}
                        className={`rounded-xl h-[150px] w-[325px] md:[h-100px] 
                        ${idx === hoveredNum ? 'group-hover:col-span-full group-hover:w-[75vw] group-hover:h-[65vh]' : 'group-hover:hidden '} md:w-[250px] border border-gray-300  ${idx >= 2 && idx <= 3 ? 'hidden md:inline-block' : idx >= 4 ? 'hidden lg:inline-block' : ''}`}
                        onMouseEnter={() => {
                            setHoveredNum(idx)
                            console.log('hovered', idx)
                        }}
                        onMouseLeave={() => setHoveredNum(-1)} />
                ))
            }
        </div>
    )
}

export default Project