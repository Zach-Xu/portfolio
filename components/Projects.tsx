import { motion } from 'framer-motion'
import React from 'react'
import { useSelector } from 'react-redux'
import { AppState } from '../redux/reducers'
import Project, { ProjectProps } from './Project'

type Props = {}

const Projects = (props: Props) => {

    const selectedImgNumber = useSelector((state: AppState) => state.selectedImgNumber)

    const projects: ProjectProps[] = [{
        appName: 'Movie App',
        description: 'This app enables users to view, download, rate, and comment on movies. Users can filter movies by category and rating. They can also upload movies, which will be stored in AWS S3 buckets, and manage their uploaded movies by updating their information. Movie details are stored in AWS DynamoDB.',
        images: ['/projects-img/movie-app-1.png', '/projects-img/movie-app-2.png', '/projects-img/movie-app-3.png', '/projects-img/movie-app-4.png', '/projects-img/movie-app-5.png', '/projects-img/movie-app-6.png'],
        githubLink: 'https://github.com/Zach-Xu/movie-app-front'
    }, {
        appName: 'Tech Town',
        description: 'A social media web application that enables users to view, post, and answer question. Users can search for other users by email or username, add them to their friend list, and chat with them in real-time. The app is built using the MERN stack, and the chat feature is implemented using socket.IO.',
        images: ['/projects-img/tech-town-1.png', '/projects-img/tech-town-2.png', '/projects-img/tech-town-3.png', '/projects-img/tech-town-4.png', '/projects-img/tech-town-5.png', '/projects-img/tech-town-6.png'],
        githubLink: 'https://github.com/Zach-Xu/comp231_TechTown'
    }, {
        appName: 'Spotify Clone',
        description: "This is a Spotify clone that allows users to load and switch between their playlists, playing different songs. It was built using Next.js with TailwindCSS, and uses OAuth and the Spotify web API as the backend server. It is also my first project that I develop to practice nextjs",
        images: ['/projects-img/spotify-clone-1.png', '/projects-img/spotify-clone-2.png', '/projects-img/spotify-clone-3.png', '/projects-img/spotify-clone-4.png', '/projects-img/spotify-clone-5.png'],
        githubLink: 'https://github.com/Zach-Xu/spotify-clone-with-spotify-web-api-'
    }]

    return (
        <div id='projects' className={`h-screen flex flex-col ${selectedImgNumber === -1 ? 'justify-end' : 'justify-center'}  2xl:justify-center items-center relative p-10`}>
            <h3 className={`section-header ${selectedImgNumber === -1 ? 'inline-block' : 'hidden'}`}>Projects</h3>
            <div className="carousel w-full">
                {
                    projects.map((project, idx) => (
                        <div id={`item${idx + 1}`} key={idx} className="carousel-item w-full">
                            <Project appName={project.appName} description={project.description} githubLink={project.githubLink} images={project.images} />
                        </div>
                    ))
                }


            </div>
            <div className={`flex justify-center w-full py-2 gap-2 ${selectedImgNumber !== -1 && 'hidden'}`}>
                {
                    projects.map((_, idx) => (
                        <a href={`#item${idx + 1}`} key={idx} className="btn btn-xs">{idx + 1}</a>
                    ))
                }

            </div>


        </div>
    )
}

export default Projects