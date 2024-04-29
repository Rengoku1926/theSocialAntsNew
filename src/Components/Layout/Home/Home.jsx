import React from 'react'
import LandingPage from './LandingPage'
import Marquee from './Marquee'
import About from './About'
import Eyes from './Eyes'
import Services from './Services'
import LocomotiveScroll from 'locomotive-scroll'



function Home() {
  const locomotiveScroll = new LocomotiveScroll();
  return (
    <div className='bg-zinc-900'>
    <LandingPage/>
    <Marquee/>
    <About/>
    <Eyes/>
    <Services/>
    </div>
  )
}

export default Home