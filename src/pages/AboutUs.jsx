import React from 'react'
import Herosection from './../components/Aboutus/Hero'
import TeamSection from '../components/Aboutus/Team'
import NewHero from '../components/NewHero'
import Hero from '../components/Aboutus/Herosection'


const AboutUs = () => {
  return (
    <div>
      <NewHero />
      <Herosection />
      <Hero/>
      <TeamSection />

    </div>
  )
}

export default AboutUs