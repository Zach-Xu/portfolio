import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'
import Hero from '../components/Hero'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Zhen's Portfolio</title>
      </Head>
      <div className='h-screen bg-[rgb(36,36,36)] overflow-scroll snap-y snap-mandatory text-white' >

        <Header />

        <section className=''>
          <Hero />
        </section>

        {/* About */}

        {/* Education */}

        {/* Skills */}

        {/* Projects */}

        {/* Contact Me */}

      </div>
    </div>
  )
}

export default Home
