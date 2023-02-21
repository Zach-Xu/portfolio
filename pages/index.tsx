import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import About from '../components/About'
import Header from '../components/Header'
import Hero from '../components/Hero'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Zhen's Portfolio</title>
      </Head>
      <div className='h-screen bg-[rgb(36,36,36)] overflow-scroll snap-y snap-mandatory text-white ' >

        <Header />

        <section className='snap-start'>
          <Hero />
        </section>

        <section className='snap-center'>
          <About />
        </section>

        {/* Education */}

        {/* Skills */}

        {/* Projects */}

        {/* Contact Me */}

      </div>
    </div>
  )
}

export default Home
