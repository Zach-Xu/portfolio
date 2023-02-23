import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import About from '../components/About'
import Education from '../components/Education'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Projects from '../components/Projects'
import Skills from '../components/Skills'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Zhen's Portfolio</title>
      </Head>
      <div className='h-screen bg-[rgb(36,36,36)] overflow-y-scroll overflow-x-hidden snap-y snap-mandatory scroll-smooth text-white' >

        <Header />

        <section className='snap-start '>
          <Hero />
        </section>

        <section className='snap-center'>
          <About />
        </section>

        <section className='snap-center'>
          <Skills />
        </section>

        <section className='snap-center'>
          <Projects />
        </section>

        <section className='snap-center'>
          <Education />
        </section>

        {/* Contact Me */}

      </div>
    </div>
  )
}

export default Home
