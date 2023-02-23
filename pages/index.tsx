import type { NextPage } from 'next'
import Head from 'next/head'
import About from '../components/About'
import Education from '../components/Education'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Projects from '../components/Projects'
import dynamic from 'next/dynamic'

const Home: NextPage = () => {

  // We want to disable server-side rendering (SSR) for the Skills component 
  // because we need access to the window object to determine the where the animation
  // should fire 

  // although window object is accessible inside useEffect, the properties of Framer Motion
  // (such as the "initial" property used in this component) are evaluated only once when the component is mounted.
  // Therefore, changing the statement later does not work in this case



  const DynamicSkills = dynamic(() => import('../components/Skills'), { ssr: false })

  return (
    <div>
      <Head>
        <title>Zhen's Portfolio</title>
      </Head>
      <div className='h-screen bg-[rgb(36,36,36)] overflow-y-scroll overflow-x-hidden snap-y snap-mandatory scroll-smooth text-white' >

        <Header />

        <section className='snap-center'>
          <Hero />
        </section>

        <section className='snap-center'>
          <About />
        </section>

        <section className='snap-center'>
          {/* client side rendering */}
          <DynamicSkills />
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
